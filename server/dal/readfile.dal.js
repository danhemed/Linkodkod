import fs from 'fs';

async function readFileAsync(path) {
    return new Promise((res, rej) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) {
                return rej(err);
            }
            return res(data);
        });
    })
}

export default readFileAsync;