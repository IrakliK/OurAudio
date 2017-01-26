const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

router.post('/quotes', (req) => {
  console.log(req.body);
});

app.use('/', router);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
