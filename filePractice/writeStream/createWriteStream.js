// 文件流式寫入
// 與 writeFile 不同的是 writeFile 是一次性將所有資料寫入，而 createWriteStream 是將資料分段寫入
// 而 createWriteStream 可以頻繁的寫入資料，writeFile則會寫入頻率較低的場景
// 透過 writeStream.write() 寫入資料，可一次寫入多筆資料
// 透過 writeStream.close() 關閉寫入流

/**
 * # 文件寫入應用場景，當需要持久化存儲資料時，可使用文件寫入
 */

const fs = require('fs');

// 創建寫入流對象
const writeStream = fs.createWriteStream('./writeStream.text');

// 資料寫入
writeStream.write('Hello\r\n');
writeStream.write('World\r\n');

// 通道關閉
writeStream.close();
