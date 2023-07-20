import express from 'express';
import { createUser, getAllUsers } from '../controllers/usersControllers.js';
const router = express.Router();

// http://localhost:5000/users
router.post('/add', createUser);
router.get('/', getAllUsers);

export default router;
