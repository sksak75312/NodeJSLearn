const path = require('path');

path.resolve();
// output: C:\Users\personal\NodeJSLearn\path

console.log('resolve',path.resolve('test', 'test.html'))
// output: C:\Users\personal\NodeJSLearn\path\test\test.html

console.log('resolve',path.resolve('/test', 'test.html'))
// C:\test\test.html

console.log('resolve',path.resolve('/first', '/second', 'secondPath', '/third', 'thirdPath'))
// output: C:\third\thirdPath
