/*
Title: Routes
Learn: Application Routes
Date:08-04-2023
*/

// Dependencies
const {sampleHandler} = require('./handlers/routeHandlers/sampleHandler')

const routes = {
    sample: sampleHandler,
}
module.exports = routes;