const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`);
const ourWriteStream = fs.createWriteStream(`${__dirname}/bigDataOutput.txt`);


// Way-1:  Read Stream
// ourReadStream.on('data', (chunk) => {
//     console.log(chunk.toString());
//     ourWriteStream.write(chunk)
// })

// Way-2:  Pipe
ourReadStream.pipe(ourWriteStream);

