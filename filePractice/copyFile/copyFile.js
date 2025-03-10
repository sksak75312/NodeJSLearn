const fs = require('fs');

// 方式一
// const data = fs.readFileSync("../data/video.mp4");

// fs.writeFileSync('../data/copyFile.mp4', data);

// ---------------------------------------------------------

// 方式二
/**
 * # 推薦使用第二種方式，透過拆解模塊的方式將資料寫入，每次寫入64KB
 * # 因為一般讀取速度會比寫入速度快
 * # 而第一種則是一次把整個影片引入，並寫入進去
 */
// const rs = fs.createReadStream('../data/video.mp4');
// const ws = fs.createWriteStream('../data/streamVideo.mp4');

// rs.on('data', (chunk) => {
//   ws.write(chunk);
// });

// rs.on('end', () => {
//   console.log('影片寫入完成');
// });

// ----------------------------------------------------------

// pipe 寫入方式
// rs.pipe(ws);