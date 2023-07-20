import express from 'express';
const app = express();
const PORT = 5000;

const middleware = (req, res, next) => {
  console.log('Testing middleware in all routes');
  next();
};

app.get('/', middleware, (req, res) => {
  res.status(200).send('<h1>Home Page</h1>');
});

app.get('/about', middleware, (req, res) => {
  res.status(200).send('<h1>About Page</h1>');
});

app.get('/projects', middleware, (req, res) => {
  res.status(200).send('<h1>Projects Page</h1>');
});

app.listen(PORT, () => console.log(`server is running on : http://localhost:${PORT}`));
