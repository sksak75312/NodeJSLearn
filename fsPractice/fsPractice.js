// 批量重新命名

const fs = require('fs');
const path = require('path');

const mainPath = path.join(__dirname, 'file');
const files = fs.readdirSync(mainPath);

files.forEach((file) => {
  const nameAry = file.split('-');
  const [number, name] = nameAry;

  if (Number(number) < 10) {
    const newNum = `0${number}`;

    fs.renameSync(`${mainPath}/${file}`, `${mainPath}/${newNum}-${name}`);
  }
});
