import express from 'express';
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.post('/hello', (req, res) => {
  res.json('Hello desde la creación!');
});

app.listen(port, () => {
  'hello';
});
