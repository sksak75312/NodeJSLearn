const buffer1 = Buffer.alloc(10); // alloc 每次都會做清空的動作

const buffer2 = Buffer.allocUnsafe(100000); // allocUnsafe 不會做清空的動作

const buffer3 = Buffer.from('Hello'); // 將參數轉換成 16 進制表示方式

const buffer4 = Buffer.from([1, 2, 3, 4, 5, 16, 17]);


console.log('buffer3', buffer3);
console.log('buffer4', buffer4);
