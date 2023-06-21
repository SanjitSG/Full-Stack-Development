const { readFileSync, writeFileSync } = require('fs');

console.log('Start...');
//reading from a file
const read = readFileSync('./demo.txt', 'utf-8');
console.log(read);

//writing to a file
writeFileSync('./write.txt', `content is : ${read}\n`, { flag: 'a' }); // file name , content , //flag a => append

console.log('End...');
