/*
Title: Sample Handlers
Learn: Sample Handlers
Date:08-04-2023
*/

const handler = {};
handler.sampleHandler = (requestProperties, callback) =>{
    console.log(requestProperties);

    callback(200,{
        message: 'This is a sample url',
    });
};

module.exports = handler;