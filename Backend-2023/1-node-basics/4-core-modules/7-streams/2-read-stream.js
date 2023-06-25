const { createReadStream } = require('fs');

//highWaterMark => define the chunks
//default => chunk size 64 kb

const stream = createReadStream('./stream-file.txt', { highWaterMark: 900000, encoding: 'utf-8' }); //we will get buffer, // to get data we need to add encoding property

stream.on('data', (result) => console.log(result));
