// appendFile 追加文件內容
// appendFile 非同步執行
// appendFile 如果文件不存在，會自動創建文件

// fs.appendFile(file, data, options, callback)
// file 文件名
// data 寫入的數據
// options 選項參數
// callback 回調函數

const fs = require('fs');

fs.appendFile('./writeFile.text', '\r\nappendFile 新增的文字', err => {
  if (err) {
    console.log('寫入失敗');
    return;
  }
  console.log('寫入成功');  
})

console.log('這邊會先執行');