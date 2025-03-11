// 批量重新命名

const fs = require('fs');
const path = require('path');

// 取得指定資料夾位置
const mainPath = path.join(__dirname, 'file');
const files = fs.readdirSync(mainPath);

// 遍歷每隻檔案
files.forEach((file) => {
  // 拆解檔案名稱
  const nameAry = file.split('-');
  // 陣列解構值
  const [number, name] = nameAry;

  if (Number(number) < 10) {
    // 重組名稱
    const newNum = `0${number}`;

    // 重新命名
    fs.renameSync(`${mainPath}/${file}`, `${mainPath}/${newNum}-${name}`);
  }
});
