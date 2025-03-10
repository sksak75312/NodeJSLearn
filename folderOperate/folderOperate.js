const fs = require('fs');

/**
 * mkdir 的 mk => make, dir => directory
 * # mkdir(path, options, callback)
 * # mkdirSync(path)
 */

// fs.mkdir('../autoMkdir', (err) => {
//   if (err) {
//     console.log('創建資料夾失敗');
//     return;
//   }

//   console.log('創建資料夾成功');
// });

// fs.mkdirSync('../autoFolderMake')

// 文件夾遞歸創建
// 需要加入第二個 options 參數，recursive 是允許遞歸創建資料夾
// fs.mkdir('../a/b/c', { recursive: true }, (err) => {
//   if (err) {
//     console.log('遞歸創建失敗');
//     return;
//   }
//   console.log('遞歸創建成功');
// });

// *--------------------------------------*
/**
 * # callback 傳入兩個參數，
 */
fs.readdir('.../', (err, data) => {
  if (err) {
    console.log('讀取失敗');
    return;
  }
  console.log(data);
  console.log('讀取成功');
});

// const readDir = fs.readdirSync('../');

// console.log(readDir);

// *-----------------------------------------*

/**
 * # 使用rmdir刪除資料夾
 * #遞歸刪除使用 recursive
 */

fs.rmdir('../a', { recursive: true }, (err) => {
  if (err) {
    console.log('資料夾刪除失敗');
    return;
  }
  console.log('資料夾刪除成功');
});

// const rmdir = fs.rmdirSync('../foldertest');

