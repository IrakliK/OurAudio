const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get('/', (req, res) => {
  res.json({ error: false, messge: 'Hello !' });
});

router.post('/add', (req, res) => {
  res.json({ error: false, message: 'success', data: req.body.num1 + req.body.num2 });
});

app.use('/', router);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
