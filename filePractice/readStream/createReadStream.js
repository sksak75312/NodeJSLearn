// 讀取大檔案時比較有感

const fs = require('fs');

const rs = fs.createReadStream('../data/video.mp4');

// 第一個參數是事件名稱，第二個參數是 callback function
rs.on('data', (chunk) => {
  console.log(chunk.length);
  // 65536 字節 => 64KB
}) 

// end 可選事件，讀取完畢時觸發
rs.on('end', () => {
  console.log('讀取完成');
})