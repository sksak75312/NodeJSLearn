const fs = require('fs');

/**
 * # rename(oldPath, newPath, callback);
 * # renameSync(oldPath, newPath);
 * # rename 可以用來重新命名，也可以用來移動資料夾位置，關注點在 New path 的寫入
 */

// 重新命名
fs.rename('../data/renameFile.map4', '../data/renameFile.mp4', (err) => {
  if (err) {
    console.log('重新命名失敗');
    return
  }

  console.log('重命名成功');
});

// 檔案移動
fs.rename('../data/renameFile.mp4', '../renameFile.mp4', (err) => {
  if (err) {
    console.log('移動位置失敗');
    return;
  }

  console.log('移動位置成功');
});
