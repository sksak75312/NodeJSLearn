// writeFileSync: 是同步執行的
// 只有兩個參數，file 和 data
// file 文件名
// data 寫入的數據

const fs = require('fs');

fs.writeFileSync('./writeFileSync.text', 'WriteFileSync');