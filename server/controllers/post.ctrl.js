import { postsData } from '../data.json';

console.log(postsData);

export function getPosts(req, res) {
    const posts = postsData.data;

    res.status(200).json(posts);
}