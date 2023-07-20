import express from 'express';
const app = express();

const middlewareFunOne = (req, res, next) => {
  if (req.url === '/') {
    console.log('valid url');
    next();
  }
  res.status(400).send('<h1>Invalid URL</h1>');
};

const middlewareFunTwo = (req, res, next) => {
  if (req.url === '/about') {
    console.log('valid url');
    next();
  }
  res.status(400).send('<h1>Invalid URL</h1>');
};

app.get('/', middlewareFunOne, (req, res) => {
  res.status(200).send('<h1>Home Page</h1>');
});
app.get('/about', middlewareFunTwo, (req, res) => {
  res.status(200).send('<h1>About Page</h1>');
});

app.listen(5000, () => console.log(`Server is running on: http://localhost:5000`));
