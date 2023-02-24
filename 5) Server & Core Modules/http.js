const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('<html><head><title> Form </title></head></html>');
        res.write('<body><form action="process" method="post" ><input name="message"></form></body>');
        res.end();

    }else if(req.url === '/process'){
        res.write('This is about page .');

        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk)
        })

        req.on('end', () =>{
            console.log('Stream Finish');
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
        })
        res.end();
    }else if(req.url === '/pipe'){

        const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`, 'utf8');
        ourReadStream.pipe(res);
        // res.end();

    }else{
        res.write('Not found.');
    }
});

server.listen(3000);
console.log('Listening on port 3000');