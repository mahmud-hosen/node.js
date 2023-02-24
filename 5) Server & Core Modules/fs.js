const fs = require('fs');

// create a new file

// fs.writeFile('myFile.txt', 'Hello, world!', (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('File created successfully');
// });

// read from a file
fs.readFile('bigData.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

// append to a file

// fs.appendFile('myFile.txt', ' This is an appended message.', (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('Data appended successfully');
// });

// asynchronous way -> event loop free 

// fs.readFile('myFile.txt', 'utf-8', (err, data) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log(data);
//     }
//   });

//   console.log("Hi");


// delete a file
// fs.unlink('myFile.txt', (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('File deleted successfully');
// });
