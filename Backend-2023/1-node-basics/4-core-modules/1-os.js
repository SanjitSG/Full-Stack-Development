const os = require('os');
const { uptime } = require('process');

const sysInfo = os.cpus();

console.log(sysInfo);

// combining multiple properties into a single object

const additionInfo = {
  type: os.type(),
  uptime: os.uptime(),
  version: os.version(),
};
console.log(additionInfo);
