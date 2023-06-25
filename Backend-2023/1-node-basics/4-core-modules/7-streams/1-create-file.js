const { writeFileSync } = require('fs');

for (let i = 1; i <= 10000; i++) {
  writeFileSync('./stream-file.txt', `The result => Line Number ${i}\n`, { flag: 'a' });
}
