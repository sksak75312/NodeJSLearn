import express from 'express';

const app = express();

const prot = 9000;

// :id 設定動態路由
app.get('/:id.html', (req, res) => {
  res.setHeader('content-type', 'text/html;charset=utf-8');

  // request params id 取得動態路由參數
  res.send(req.params.id);
});

app.listen(prot, () => {
  console.log('Express run start');
});
