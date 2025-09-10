import { promises as fs } from 'fs';

async function deletePostFileAsync(path, id) {
    const beforeData = await fs.readFile(path, 'utf-8');

    const jsonData = JSON.parse(beforeData);

    const filterJson = jsonData.posts.filter(post => post.id != id);

    const afterData = JSON.stringify(filterJson);
    
    await fs.writeFile(path, afterData, 'utf-8', (err) => {
        if (err) {
            return err;
        }
        return true;
    });
}

export default deletePostFileAsync;
