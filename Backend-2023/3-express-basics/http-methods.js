import express from 'express';
import { users } from './data.js';

const app = express();
const PORT = 5000;

//getting all the users
app.get('/api/users', (req, res) => {
  res.send(200).json({ message: 'success', data: users });
});

//getting single user
app.get('/api/users/:userID', (req, res) => {
  const { userID } = req.params;
  const singleUser = users.find((user) => user.id === Number(userID));
  if (!singleUser) {
    return res.status(200).json({ message: 'Success', data: `No user with th eid: ${userID}` });
  } else {
    return res.status(200).json({ message: 'Success', data: singleUser });
  }
  console.log(userID);
});

//Delete user
// '/api/users/:userID'; <= same endpoint (route)
app.delete('/api/users/:userID', (req, res) => {
  const { userID } = req.params;
  const user = users;
});

app.listen(PORT, () => console.log(`Server is running in: http://localhost:${PORT}`));
