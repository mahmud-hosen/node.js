/*
Title: Uptime Monitoring Application
Learn: createServer, path read,  method read, queryStringObject read, headers data read, body data read 
Description: A RestFul API to monitor up or down time of user define links
Date:25-02-2023

# Using Environment Variables: We can pass a variable when server start that time we can define which mode it start Like production, 
    NODE_ENV=production node index

Package: $ npm install -g nodemon  // for auto run without refresh
*/






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


// dependencies
const server = require('./lib/server');
const workers = require('./lib/worker');

// app object - module scaffolding
const app = {};

app.init = () => {
    // start the server
    server.init();
    // start the workers
    workers.init();
};

app.init();

// export the app
module.exports = app;