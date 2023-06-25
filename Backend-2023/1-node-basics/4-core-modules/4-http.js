const http = require('http');

//creating a http serve
//it takes two parameters in form of object

const server = http.createServer((req, res) => {
  //callback function in createServer method
  console.log(req.url);
  // console.log(res);

  if (req.url === '/') {
    res.end(`<h1>Welcome to Node.js</h1>
    <p> This is th Home Page</p>`);
  }
  if (req.url === '/user') {
    res.end(`
    <h1>Welcome, John</h1>
    <a href="/">Back to home page</a>`);
  }
});

server.listen(5000, () => {
  console.log(`Console.log in: http://localhost:5000`);
});
