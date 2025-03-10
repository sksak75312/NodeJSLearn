// web 頂級對象是 window
// node 頂級對象是 global、globalThis

// console.log(window); // undefined
console.log(global);
console.log(globalThis) // ES2020 引入

console.log(globalThis === global); // true