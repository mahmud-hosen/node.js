/*
Title: Uptime Monitoring Application
Learn: createServer, path read,  method read, queryStringObject read, headers data read, body data read 
Description: A RestFul API to monitor up or down time of user define links
Date:25-02-2023

# Using Environment Variables: We can pass a variable when server start that time we can define which mode it start Like production, 
    NODE_ENV=production node index

Package: $ npm install -g nodemon  // for auto run without refresh
*/

// Dependencies
const http = require('http');
const {handelReqRes} = require('./helpers/handelReqRes');
const environment = require('./helpers/environments')
const data = require('./lib/data');


// console.log(environment)

//App object module scaffolding
const app = {};

// test data create
// data.create('test', 'newFile', {name: 'Mahmud', language: 'Bangla'}, (err) => {
//     console.log(`Error was`, err);
// })

// data.read('test', 'newFile' , (err, result) => {
//     console.log(err, result);
// })


// data.update('test', 'newFile', {name: 'Kamal', language: 'Bangla'}, (err) => {
//     console.log(`Error was`, err);
// })

// data.delete('test', 'newFile', (err) => {
//     console.log(`Error was`, err);
// })



//Create server
app.createServer = () =>{
    const server = http.createServer(app.handelReqRes);
    server.listen(environment.port, () => {

        console.log(`Listening to port ${environment.port}`);
    })
}

//Handel Request Response
app.handelReqRes = handelReqRes;


// Start Server 
app.createServer();