import { useParams } from 'react-router';
import '../css/Post.css';
import { useState } from 'react';
import "../css/DynamicPostPage.css"

export default function DynamicPostPage() {
    const [likes, setLikes] = useState(0);

    function counterLikes() {
        setLikes(prevLikes => {
            return prevLikes + 1
        })
    }
    const { id } = useParams();

    console.log(id);

    const postsLS = localStorage.getItem("posts");

    const posts = JSON.parse(postsLS);

    const post = posts.find(p => p.id = id);

    console.log(post);
    return (
        <article className="dynamic-post-page">
            <div className="block-img-dynamic">
            <img src={`http://localhost:3003/linkodkod/images/${post.id}.jpeg`} alt={post.name_post} />
            </div>
            <div className="under-post">
                <div className='des-and-likes'>
                    <p>{post.name_post}</p>
                    <button className='btn-likes' onClick={counterLikes}>{likes} ❤️</button>
                </div>
                <p id="des">
                    {post.description}
                </p>
                <div className='name-and-date'>
                    <h3>{post.name_user}</h3>
                    <h6>{post.date}</h6>
                </div>
            </div>
        </article>
    )
}
