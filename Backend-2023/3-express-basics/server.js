import express from 'express';
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.status(200);
});

app.get('*', (req, res) => {
  res.send('<h1> Something went wrong</h1>');
});

app.listen(PORT, () => {
  console.log(`The Server is running on : http://localhost:${PORT}`);
});
