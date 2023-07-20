import express from 'express';
const app = express();
const PORT = 5000;

app.get('/api/v1/users', (req, res) => {
  res.status(200).send('<h1>GET ALL USERS REQUEST RESPONSE</h1>');
});

app.get('/api/v1/users/:id', (req, res) => {
  res.status(200).send('<h1>GET SINGLE USER REQUEST RESPONSE</h1>');
});

app.post('/api/v1/users', (req, res) => {
  res.status(200).send('<h1>POST RESPONSE REQUEST</h1>');
});

app.put('/api/v1/users/:id', (req, res) => {
  res.status(200).send('<h1>UPDATE SINGLE USER REQUEST RESPONSE</h1>');
});

app.delete('/api/v1/users/:id', (req, res) => {
  res.status(200).send('<h1>DELETE SINGLE USER REQUEST RESPONSE</h1>');
});

app.listen(PORT, (req, res) => {
  console.log(`server is running on : http://localhost:${PORT}`);
});
