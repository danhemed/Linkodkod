import { useState } from 'react';
import './Post.css';

type postType = {
    id: string,
    img_url: string,
    description: string,
    likes: number,
    name_user: string,
    date: string
};

type postsType = {
    post: postType
}

export default function Post({post}: postsType) {
    const [likes, setLikes] = useState(0);

    function counterLikes() {
        setLikes(prevLikes => {
            return prevLikes + 1
        })
    }

    return (
        <article className="post">
            <div className="block-img">
            <img src={`http://localhost:3003/linkodkod/images/${post.id}.jpeg`} alt={post.description} />
            </div>
            <div className="under-post">
                <div className='des-and-likes'>
                    <p>{post.description}</p>
                    <button className='btn-likes' onClick={counterLikes}>{likes} ❤️</button>
                </div>
                <div className='name-and-date'>
                    <h3>{post.name_user}</h3>
                    <h6>{post.date}</h6>
                </div>
            </div>
        </article>
    )
}
