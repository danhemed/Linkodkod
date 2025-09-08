import express from 'express';
import cors from 'cors';
import routePost from './routes/post.route.js';

const app = express();

app.use(express.json());

app.use(cors());

app.use('/linkodkod/images', express.static('public'));

app.use('/linkodkod', routePost);


app.listen(3003, () => {
    console.log("server run on http://localhost:3003 >>>");
});