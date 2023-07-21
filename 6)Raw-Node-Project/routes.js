/*
Title: Routes
Learn: Application Routes
Date:08-04-2023
*/

// Dependencies
const {sampleHandler} = require('./handlers/routeHandlers/sampleHandler')
const {userHandler} = require('./handlers/routeHandlers/userHandler')


const routes = {
    sample: sampleHandler,
    user: userHandler
}
module.exports = routes;