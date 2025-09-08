import readFileAsync from '../dal/readfile.dal.js';

const path = './db/data.json'

export async function getPosts(req, res) {
    const posts = await readFileAsync(path);

    res.status(200).json(JSON.parse(posts).data);
}