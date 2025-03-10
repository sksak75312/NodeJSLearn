const fs = require('fs');

/**
 * # 文件刪除 unlink(path, callback)、unlinkSync(path)，僅支援刪除文件，目標是資料夾會拋出錯誤
 * # fs.rm(path, callback)，支援刪除資料夾及文件
 */
// fs.unlink('../deleteFileOne.text', (err) => {
//   if (err) {
//     console.log('檔案刪除失敗');
//     return;
//   }

//   console.log('檔案刪除成功');
// });

fs.rm('../deleteFileTwo.text', (err) => {
  if (err) {
    console.log('檔案刪除失敗');
    return;
  }
});
