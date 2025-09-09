import { useState } from 'react';
import '../css/Post.css';
import type { postType } from '../types/Post.type';
import { Link } from 'react-router';

export default function Post({post}: postType) {
    const [likes, setLikes] = useState(0);

    function counterLikes() {
        setLikes(prevLikes => {
            return prevLikes + 1
        })
    }

    return (
        <Link className='post-link' to={`/posts/${post.id}`}>
        <article className="post">
            <div className="block-img">
            <img src={`http://localhost:3003/linkodkod/images/${post.id}.jpeg`} alt={post.name_post} />
            </div>
            <div className="under-post">
                <div className='des-and-likes'>
                    <p>{post.name_post}</p>
                    <button className='btn-likes' onClick={counterLikes}>{likes} ❤️</button>
                </div>
                <div className='name-and-date'>
                    <h3>{post.name_user}</h3>
                    <h6>{post.date}</h6>
                </div>
            </div>
        </article>
        </Link>
    )
}
