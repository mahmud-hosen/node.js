/*
Title: Environment
Description: Handel all environment related things
*/

// module scaffoldings
const environments = {};

environments.staging = {
    port: 3000,
    envName: 'staging',
    secretKey: 'hsjdhsdhsjdhjshdjshd',
    maxChecks: 5,
    twilio: {
        fromPhone: '+8801787315409',
        accountSid: 'AC5359eaf7f1e25b800dc4e8532b3450b5',
        authToken: '2fc7bd55e00a0c5eb2a090e495bc737c'
    },
}

environments.production = {
    port: 5000,
    envName: 'production',
    secretKey: 'djkdjskdjksdjksjdskjd',
    maxChecks: 5,
    twilio: {
        fromPhone: '+8801787315409',
        accountSid: 'AC5359eaf7f1e25b800dc4e8532b3450b5',
        authToken: '2fc7bd55e00a0c5eb2a090e495bc737c'
    },
}

// determine which environment was passed
const currentEnvironemnt  = typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

// export corresponding environment object
const environmentToExport = typeof environments[currentEnvironemnt] === 'object' ? environments[currentEnvironemnt] : environments.staging;

// Export module
module.exports = environmentToExport;