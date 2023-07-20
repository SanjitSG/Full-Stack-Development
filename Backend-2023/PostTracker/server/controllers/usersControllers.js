//importing user model
import User from '../models/userModel.js';

export const createUser = (req, res) => {
  //login to create user
  //we will get username from req.body from font-end
  const { username } = req.body;
  const newUser = new User({ username })
    .save()
    .then(() => res.status(200).json({ success: true, message: 'User created Successfully' }))
    .catch((err) => console.log(`Something went wrong :${err}`)); //user acts like a constructor
};

export const getAllUsers = (req, res) => {
  User.find()
    .then((users) => res.status(200).json({ success: true, response: users }))
    .catch((err) => console.log(`Something went wrong :${err}`));
};
