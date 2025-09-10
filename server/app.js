import express from 'express';
import cors from 'cors';
import routePost from './routes/post.route.js';
import routeUser from './routes/user.route.js';

const app = express();

app.use(express.json());

app.use(cors());

// לא עובד
app.use('/linkodkod/images', express.static('public'));

app.use('/linkodkod', routePost);

app.use('/linkodkod', routeUser);


app.listen(3003, () => {
    console.log("server run on http://localhost:3003 >>>");
});