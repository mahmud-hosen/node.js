/*
Title: Handle Request Response
Description: Handle Request Response

#  Place Route Handler in proper place


Date: 08-04-2023
*/

// Dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder'); //  StringDecoder class from string_decoder module
const routes = require('../routes')
const { notFoundHandler } = require('../handlers/routeHandlers/notFoundHandler')


// module scaffolding
const handler = {}


// This function doing process incoming request 
handler.handelReqRes = (req, res) => {

    //Request Handling
    //Get the url and parse it
    const parseUrl = url.parse(req.url, true);        // Url parse
    const path = parseUrl.pathname;                   // Parse url to path

    const trimmedPath = path.replace(/^\/+|\/+$/g, '');  // Path trim Ignore unexpected pattern in url 
    const method = req.method.toLowerCase();             // trim path lower case , Method read like get,put,post ex..
    const queryStringObject = parseUrl.query;            // http://localhost:3000/about/home/?a=10&b=5 --> query string a=10, b=5
    const headersObject = req.headers;                   // Header data receive


    // Create a Request Property

    const requestProperties = {
        parseUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headersObject
    }

    const decoder = new StringDecoder('utf-8');   //Create a obj of StringDecoder // StringDecoder-> encoding formate(utf-8)
    let realData = '';

    // Route Match 
    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;
    // console.log(chosenHandler)


    //Get Buffer: request.on data event listen & get buffer(convert to data)
    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });

    // End event fire When all data get using buffer way
    req.on('end', () => {
        realData += decoder.end();

        // Place Route Handler in proper place
        chosenHandler(requestProperties, (statusCode, payload) => {
            statusCode = typeof statusCode === 'number' ? statusCode : 500;
            payload = typeof payload === 'object' ? payload : {}; // payload is all body data

            const payloadString = JSON.stringify(payload);

            // Return the final response
            res.writeHead(statusCode);
            res.end(payloadString);
        });

        // Response Handling
        res.end('Hello Programmers');

    });



}

module.exports = handler;