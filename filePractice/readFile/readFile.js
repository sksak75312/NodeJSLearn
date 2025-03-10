/**
 * # readFile 讀取文件，默認預設值為Buffer
 * # readFileSync 來執行同步讀取文件
*/

const fs = require('fs');

// callback 傳入兩個參數，第一個是錯誤訊息，第二個是讀取的文件內容
fs.readFile('./index.text', (err, data) => { 
  if (err) {
    console.log('讀取文件失敗');
    return;
  }
  // data 是一個 Buffer，使用 toString 轉換成字串
  console.log(data.toString());
});

console.log('此段先執行');


const file = fs.readFileSync('./index.text', 'utf-8')

console.log(file)