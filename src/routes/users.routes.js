import {Router} from 'express';
import { getAllUsers, addNewUser } from '../controllers/users.controller';

const router = Router();

router.get('/users', getAllUsers)

router.post('/users', addNewUser)

export default router