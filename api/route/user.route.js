import express from 'express';
import { allInfoOfUser, createUser, updateUser, deleteUser , getUserDetails } from '../controller/user.controller.js'; // Adjust the import path as necessary

const router = express.Router();

router.get('/', allInfoOfUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.get('/:userId' , getUserDetails);


export default router;
