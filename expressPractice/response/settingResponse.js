import express from 'express';

const app = express();

const port = 9000;

app.get('/', (req, res) => {
  // 原生 node
  // res.statusCode = 505;
  // res.setHeader('xxx', 'yyy');
  // res.statusMessage = 'New text';
  // res.write('Hello Write');
  // res.end('Hello end');

  //express
  // res.status(500);
  // res.set('aaa', 'bbb');
  // res.send('你好 Express');

  res.status(500).set('aaa', 'bbb').send('Hello');
});

app.listen(port, () => {
  console.log('Express Server run start');
});
