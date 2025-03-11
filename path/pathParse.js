const path = require('path');

console.log('dirname', path.parse(__dirname));
// output:
// {
//   root: 'C:\\',
//   dir: 'C:\\Users\\07345\\Desktop\\personal\\NodeJSLearn',
//   base: 'path',
//   ext: '',
//   name: 'path'
// }

console.log(path.parse('C:\\Users\\07345\\Desktop\\personal\\NodeJSLearn\\path\\pathSep.js'));
// output:
// {
//   root: 'C:\\',
//   dir: 'C:\\Users\\07345\\Desktop\\personal\\NodeJSLearn\\path',
//   base: 'pathSep.js',
//   ext: '.js',
//   name: 'pathSep'
// }