/*
Title: Environment
Description: Handel all environment related things
*/

// module scaffoldings
const environments = {};

environments.staging = {
    port: 3000,
    envName: 'staging',
    secretKey: 'hsjdhsdhsjdhjshdjshd'
}

environments.production = {
    port: 5000,
    envName: 'production',
    secretKey: 'djkdjskdjksdjksjdskjd'
}

// determine which environment was passed
const currentEnvironemnt  = typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

// export corresponding environment object
const environmentToExport = typeof environments[currentEnvironemnt] === 'object' ? environments[currentEnvironemnt] : environments.staging;

// Export module
module.exports = environmentToExport;