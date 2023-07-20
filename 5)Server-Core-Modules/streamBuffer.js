/*
Stream = buffer1 + buffer2 + buffern
         [---------already seen----0------------------------------]

Stream = [Part1] + [Part2] + [Part3] => Full Data
                   [Part2] + [Part3] = Buffer( packet )

We can't work part1, part2, part3 cause this is binary. Sum of unkhown part make a buffer. We can work buffter data type.

Stream two kinds
1) Read Stream: 

*/

const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`);

ourReadStream.on('data', (chunk) => {
    console.log(chunk.toString());
})