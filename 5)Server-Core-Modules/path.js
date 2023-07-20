const path = require('path');
const path_2 = require('node:path/win32');

var basename = path.basename('/Users/Refsnes/demo_path.js');
// console.log(basename);

var dirname  = path.dirname('/foo/bar/baz/asdf/quux');
// console.log(dirname);

var ext = path.extname('/Users/Refsnes/demo_path.js');
// console.log(ext);

var obj = { 
            dir: 'C:\\Users\\Refsnes', 
            base: 'demo_path.js' 
        }
var p = path.format(obj);
// console.log(p);

//console.log(path.isAbsolute('/test/demo_path.js')); //true
//console.log(path.isAbsolute('test/demo_path.js')); //false
//console.log(path.isAbsolute('C:\\test\\demo_path.js')); //true

//console.log(path.join('Users', 'Refsnes', 'demo_path.js'));
console.log(path.parse('C:\\path\\dir\\file.txt'));