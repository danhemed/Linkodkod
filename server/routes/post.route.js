import express from 'express';
import { getPosts } from '../controllers/post.ctrl.js';

const router = express.Router();

router.get('/posts', getPosts);

export default router;
