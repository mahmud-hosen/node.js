const os = require('os');

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.freemem());


// Get the hostname of the computer
const hostname = os.hostname();
console.log('Hostname:', hostname);

// Get the operating system platform (e.g. 'darwin', 'win32', 'linux')
const platform = os.platform();
console.log('Platform:', platform);

// Get the CPU architecture (e.g. 'x64', 'arm')
const arch = os.arch();
console.log('Architecture:', arch);

// Get the amount of free memory in bytes
const freeMemory = os.freemem();
console.log('Free memory:', freeMemory);

// Get the total amount of memory in bytes
const totalMemory = os.totalmem();
console.log('Total memory:', totalMemory);

// Get the uptime of the system in seconds
const uptime = os.uptime();
console.log('Uptime:', uptime);


const cpus = os.cpus();
console.log('Cpus:', cpus);

const type = os.type();
console.log('Type:', type);

const release = os.release();
console.log('Release:', release);

const homedir = os.homedir();
console.log('Homedir:', homedir);

const tmpdir = os.tmpdir();
console.log('Tmpdir:', tmpdir);

const networkInterfaces = os.networkInterfaces();
console.log('NetworkInterfaces:', networkInterfaces);



