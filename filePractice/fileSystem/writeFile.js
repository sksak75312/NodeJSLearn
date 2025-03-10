// vs Code 也是這樣寫入文件的，因為 vs Code 是基於 Electron 開發的
// writeFile 是對文件內容進行覆蓋

// writeFile 是非同步寫入
// fs.writeFile(file, data[, options], callback);
/**
 * file 文件名
 * data 寫入的數據
 * options 可選參數
 * callback 回調函數
 */

const fs = require('fs');

fs.writeFile('./writeFile.text', 'Node.js', (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('寫入成功');
})

console.log('這邊會先執行')