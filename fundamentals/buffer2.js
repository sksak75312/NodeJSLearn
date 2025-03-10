// const buffer = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]); // Buffer 轉換字串
// console.log(buffer.toString()); 


// buffer 是一包陣列，可以用 index 取得值
// const buffer = Buffer.from('hello');
// console.log(buffer[0]) // 104

// buffer[0] = 95; // 可以使用buffer[index] 來修改值
// console.log(buffer.toString()); // _ello

// 溢出
// const buffer = Buffer.from('hello');
// buffer[0] = 256;
// console.log(buffer[0]); // 0

// 中文

// const buffer = Buffer.from('你好');
// console.log(buffer); // <Buffer e4 bd a0 e5 a5 bd>
