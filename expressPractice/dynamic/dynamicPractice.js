import express from 'express';

const app = express();

const port = 9000;

app.get('/singer/:id.html', async (req, res) => {
  res.setHeader('content-type', 'text/html;charset=utf-8');
  const getApi = await fetch('https://ghibliapi.vercel.app/films');
  const data = await getApi.json();

  const findData = data.find((item) => item.id === req.params.id);

  if (!findData) {
    res.statusCode = 404;
    res.send('Not Found');
    return;
  }

  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>${findData.title}</h1>
  <img src="${findData.image}" alt="">
</body>
</html>`);
});

app.listen(port, () => {
  console.log('Express Server run start');
});
