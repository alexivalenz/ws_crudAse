import {Router} from 'express';
import { getAllUsers, addNewUser, getUserById, deleteUserById, updateUserById } from '../controllers/users.controller';

const router = Router();

router.get('/users', getAllUsers)
router.get('/users/:id', getUserById)
router.post('/users', addNewUser)
router.delete('/users/:id', deleteUserById)
router.put('/users/:id', updateUserById)

export default router