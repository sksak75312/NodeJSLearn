// appendFileSync 同步新增文字到文件
// appendFileSync 寫入兩個參數
// file 文件名
// data 寫入的數據

const fs = require('fs');

fs.appendFileSync('./writeFile.text', '\r\nappendFileSync 新增的文字');