import { promises as fs } from 'fs';

async function updatePostFileAsync(path, data, id) {
    const beforeData = await fs.readFile(path, 'utf-8');

    const jsonData = JSON.parse(beforeData);
    const foundpost = jsonData.posts.find(post => post.id == id);
    jsonData.posts[foundpost] = data;
    
    const afterData = JSON.stringify(jsonData);
    
    await fs.writeFile(path, afterData, 'utf-8', (err) => {
        if (err) {
            return err;
        }
        return true;
    });
}

export default updatePostFileAsync;
