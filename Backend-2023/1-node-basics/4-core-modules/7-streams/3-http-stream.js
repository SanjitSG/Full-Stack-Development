const http = require('http');
const { createReadStream, readFileSync } = require('fs');

const server = http.createServer((req, res) => {
  // const content = readFileSync('./stream-file.txt', 'utf-8'); // receives file as whole
  // res.end(content);
  const fileStream = createReadStream('./stream-file.txt', { encoding: 'utf-8' }); //to receive file in chunks
  fileStream.on('open', () => {
    fileStream.pipe(res);
  });
});

server.listen(5000, () => console.log('Server is running in : http://localhost:5000'));
