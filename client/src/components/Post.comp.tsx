import { useEffect, useState } from 'react';
import '../css/Post.css';
import type { postType } from '../types/Post.type';
import { Link } from 'react-router';
import { updatePost, getPost } from '../api/posts.api';

export default function Post({ post }: postType) {
    const [likes, setLikes] = useState(0);
    const [postFound, setPostFound] = useState({});

    function counterLikes() {
        setLikes(prevLikes => {
            return prevLikes + 1
        })
        useEffect(() => {
            const fetchPosts = async () => {
                if (post.id) {
                    const posttt = await getPost(post.id);
                    setPostFound({...posttt, [likes]: likes});
                }
            }
            fetchPosts();
            const fetchUpdate = async () => {
                await updatePost(postFound);
            }
            fetchUpdate();
        }, [likes]);
    }



    return (
        <article className="post">
                <div className="block-img">
                <Link className='post-link' to={`/posts/${post.id}`}>
                    <img src={`http://localhost:3003/linkodkod/images/${post.id}.jpeg`} alt={post.name_post} />
                </Link>
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
    )
}
