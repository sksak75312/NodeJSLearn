const fs = require('fs');

fs.stat('../../README.md', (err, data) => {
  if (err) {
    console.log('狀態讀取失敗');
    return;
  }

  // 查看完整狀態
  // console.log(data)

  // 是否為檔案
  console.log(data.isFile());

  // 是否為資料夾
  console.log(data.isDirectory());
});
