import fs from 'fs';

async function writeFileAsync(path, data) {
    let beforeData;

    async function readFileAsync(path) {
        return new Promise((res, rej) => {
            fs.readFile(path, 'utf-8', (err, data) => {
                if (err) {
                    return rej(err);
                }
                beforeData = data;
            });
        })
    }

    readFileAsync(path);

    const jsonData = JSON.parse(beforeData);
    jsonData.posts.push(data);

    const afterData = JSON.stringify(jsonData);
    
    return new Promise((res, rej) => {
        fs.writeFile(path, afterData, 'utf-8', (err) => {
            if (err) {
                return rej(err);
            }
            return res(afterData);
        });
    })
}

export default writeFileAsync;
