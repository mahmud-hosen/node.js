/*
Title: Not Found Handlers
Description: 404 Not Found Handler
Date:08-04-2023
*/

const handler = {};
handler.notFoundHandler = (requestProperties, callback) =>{
    callback(404, {
        message: 'Your requested URl was not found!',
    });
};

module.exports = handler;