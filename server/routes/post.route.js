import express from 'express';
import { getPosts, getPost, addPost, addImg } from '../controllers/post.ctrl.js';

const router = express.Router();

router.get('/posts', getPosts);

router.get('/posts/:id', getPost);

router.post('/posts', addPost);

// לא עובד
router.post('/posts/image', addImg);

export default router;
