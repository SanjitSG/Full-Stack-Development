import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/postRoutes.js';
dotenv.config();

const CONNECTION_URL = process.env.CONNECTION_URL;

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//http://localhost:5000/users
app.use('/users', userRoutes); //base URL
//http://localhost:5000/post
app.use('/posts', postRoutes); //base URL

app.get('/', (req, res) => {
  res.status(200).send('<h1>Welcome to postTracker</h1>');
});

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, console.log(`Server is running in: http://localhost:${PORT}`)))
  .catch((err) => console.log(`Something went wrong. ErrorMsg: ${err}`));
