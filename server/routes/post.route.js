import express from 'express';
import { getPosts, getPost } from '../controllers/post.ctrl.js';

const router = express.Router();

router.get('/posts', getPosts);

router.get('/posts/:id', getPost);

export default router;
