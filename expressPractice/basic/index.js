import express from 'express';

const app = express();

const port = 9000;

app.get('/', (request, response) => {
  response.send('Hello Express');
});

app.listen(port, () => {
  console.log('Express server run start');
});
