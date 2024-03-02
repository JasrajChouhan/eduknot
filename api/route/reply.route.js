import express from 'express';
const router = express.Router();
import { createReply , getRepliesByPostId ,getRepliesByUserId, deleteReply } from '../controller/replay.controller.js';


router.post('/', createReply);


router.get('/:postId', getRepliesByPostId);

// router.get('/:userId', getRepliesByUserId);
router.delete('/:id',   deleteReply);
router.get('/user/:userId', getRepliesByUserId);

export default router;
