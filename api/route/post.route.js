import express from 'express';
import { createPost, getAllPosts, getPostById, updatePost, deletePost , upvotePost  , getPostByUserId} from '../controller/post.controller.js';

const router = express.Router();

router.post('/', createPost);
router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.put('/:id', updatePost);
router.put('/:id/upvote', upvotePost);
router.delete('/:id', deletePost);
router.get('/user/:userId', getPostByUserId);

export default router;
