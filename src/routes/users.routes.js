import {Router} from 'express';
import { getAllUsers, addNewUser, getUserById, deleteUserById } from '../controllers/users.controller';

const router = Router();

router.get('/users', getAllUsers)
router.get('/users/:id', getUserById)
router.post('/users', addNewUser)
router.delete('/users/:id', deleteUserById)

export default router