import { promises as fs } from 'fs';

async function writeFileAsync(path, data) {
    const beforeData = await fs.readFile(path, 'utf-8');

    console.log(data);
    const jsonData = JSON.parse(beforeData);
    jsonData.posts.push(data);

    const afterData = JSON.stringify(jsonData);
    
    await fs.writeFile(path, afterData, 'utf-8', (err) => {
        if (err) {
            return err;
        }
        return true;
    });
}

export default writeFileAsync;
