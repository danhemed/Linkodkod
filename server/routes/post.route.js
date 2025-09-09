import express from 'express';
import { getPosts, getPost, addPost } from '../controllers/post.ctrl.js';

const router = express.Router();

router.get('/posts', getPosts);

router.get('/posts/:id', getPost);

router.post('/posts', addPost);

export default router;
