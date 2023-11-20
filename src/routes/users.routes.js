import {Router} from 'express';
import { getAllUsers, addNewUser, getUserById } from '../controllers/users.controller';

const router = Router();

router.get('/users', getAllUsers)

router.get('/users/:id', getUserById)

router.post('/users', addNewUser)

export default router