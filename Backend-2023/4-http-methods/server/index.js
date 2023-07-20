import express from 'express';
const app = express();
const PORT = 5000;
///server side rendering concept

app.use(express.static('../client')); //static page (server side rendering)
app.use(express.urlencoded({ extended: false })); //url encoder:
app.use(express.json);

//Base page
app.get('/', (req, res) => {
  res.status(200).send('<h1>Welcome, Express</h1>');
});

//create user
app.post('/user/create', (req, res) => {
  console.log(req.body);
  res.status(201).json({ success: true, message: `User :${req.body.username} is created successfully` });
});
app.listen(PORT, (req, res) => {
  console.log(`server is running on: http://localhost:${PORT}`);
});
