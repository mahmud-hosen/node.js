/*
Title: Uptime Monitoring Application
Learn: createServer, path read,  method read, queryStringObject read, headers data read, body data read 
Description: A RestFul API to monitor up or down time of user define links
Date:25-02-2023

Package: $ npm install -g nodemon  // for auto run without refresh
*/

// Dependencies
const http = require('http');
const {handelReqRes} = require('./helpers/handelReqRes');



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
app.handelReqRes = handelReqRes;


// Start Server 
app.createServer();