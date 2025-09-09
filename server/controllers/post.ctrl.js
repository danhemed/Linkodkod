import readFileAsync from '../dal/readfile.dal.js';
import appendFileAsync from '../dal/writeFile.dal.js';

const path = './db/data.json'

export async function getPosts(req, res) {
    try {
        const posts = await readFileAsync(path);
        res.status(200).json(JSON.parse(posts).posts);
    } catch (err) {
        res.status(400).json({error: err});
    }
}

export async function getPost(req, res) {
    const id = Number(req.params.id);
    try {
        const posts = await readFileAsync(path);
        res.status(200).json(JSON.parse(posts).posts[id-1]);
    } catch (err) {
        res.status(400).json({error: err});
    }
}

export async function addPost(req, res) {
    const data = req.body;
    try {
        await appendFileAsync(path, data);
        res.status(201).json({mesage: "create a new post"});
    } catch (err) {
        res.status(400).json({error: err});
    }
}