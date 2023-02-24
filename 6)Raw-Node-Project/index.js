/*
Title: Uptime Monitoring Application
Description: A RestFul API to monitor up or down time of user define links
Date:25-02-2023
*/

// Dependencies
const http = require('http');
const url = require('url');
const {StringDecoder} = require('string_decoder');


//App object module scaffolding
const app = {};

//Configuration
app.config = {
    port: 3000
};

//Create server
app.createServer = () =>{
    const server = http.createServer(app.handelReqRes);
    server.listen(app.config.port, () => {
        console.log(`Listening to port ${app.config.port}`);
    })
}

//Handel Request Response
app.handelReqRes = (req, res) => {

    //Request Handling
    //Get the url and parse it
    const parseUrl = url.parse(req.url, true);        // Url parse
    const path = parseUrl.pathname;                   // Parse url to path

    const trimmedPath       = path.replace(/^\/+|\/+$/g, '');  // Path trim
    const method            = req.method.toLowerCase();        // trim path lower case
    const queryStringObject = parseUrl.query;                  // http://localhost:3000/about/home/?a=10&b=5 --> query string a=10, b=5
    const headersObject     = req.headers;                     // Header data receive

    const decoder = new StringDecoder('utf-8'); // StringDecoder-> encoding formate(utf-8)
    let realData = '';
    //Get Buffer: request.on data event listen & get buffer(convert to data)
    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });

    // End event fire When all data get using buffer way
    req.on('end', () => {
        realData += decoder.end();
        console.log(realData);

        // Response Handling
        res.end('Hello Programmers');

    });
    

    
}

// Start Server 
app.createServer();