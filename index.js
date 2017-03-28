const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const exphbs = require('express-handlebars');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongo = require('mongodb');

const app = express();
const router = express.Router();
const path = require('path');
const mongoose = require('mongoose');
const fs = require('fs');
const multer = require('multer');

const upload = multer({ dest: './uploads' });

mongoose.connect('mongodb://localhost/ouraudio');
const conn = mongoose.connection;

const routes = require('./routes/index');
const users = require('./routes/users');

let gfs;

const Grid = require('gridfs-stream');

Grid.mongo = mongoose.mongo;

conn.once('open', () => {
  gfs = Grid(conn.db);
  app.post('/user/upload', upload.single('avatar'), (req, res, next) => {
    console.log(req.file.originalname);
    const writestream = gfs.createWriteStream({
      filename: req.file.originalname,
    });
    fs.createReadStream(`./uploads/${req.file.filename}`)
      .on('end', () => { fs.unlink(`./uploads/${req.file.filename}`, (err) => {res.send('success')})})
        .on('err', () => { res.send('Error uploading file')})
          .pipe(writestream);
  });
  app.get('/user/upload/:filename', (req, res) => {
    const readstream = gfs.createReadStream({
      filename: req.params.filename,
    });
    readstream.on('error', (err) => {
      res.send('No file found with that title');
    });
    readstream.pipe(res);
  });
  app.get('/user/upload/delete/:filename', (req, res) => {
    gfs.exist({ filename: req.params.filename }, (err, found) => {
      if (err) return res.send('Error occured');
      if (found) {
        gfs.remove({ filename: req.params.filename }, (err) => {
          if (err) return res.send('Error occured');
          res.send('File deleted!');
        });
      } else {
        res.send('No file found with that title');
      }
    });
  });
});

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({ defaultLayout: 'layout' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(expressValidator({
  errorFormatter: (param, msg, value) => {
    const namespace = param.split('.');
    const root = namespace.shift();
    let formParam = root;
    while (namespace.length) {
      formParam += `[ ${root} ]`;
    }
    return {
      param: formParam,
      msg,
      value,
    };
  },
}));

app.use(flash());
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

app.use('/', routes);
app.use('/users', users);

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), () => {
  console.log(`Server started on port ${app.get('port')}`);
});
