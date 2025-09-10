import readFileAsync from '../dal/readfile.dal.js';
import appendFileAsync from '../dal/writeFile.dal.js';
import multerImg from '../dal/writeFileImg.js';

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
        res.status(201).json({message: "create a new post"});
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}

// לא עובד 
export async function addImg(req, res) {
    const data = req.file;
    console.log("data",data);
    try {
        const upload = await multerImg('../public');
        upload.single(data);
        res.status(201).json({message: "create a new post"});
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}