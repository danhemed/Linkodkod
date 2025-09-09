import Post from './Post.comp';
import type { postsType } from '../types/Post.type';
import { getPosts } from '../api/posts.api';
import { useEffect, useState } from 'react';
import '../css/Posts.css'

export default function Posts() {
    const [posts, setPosts] = useState<postsType[]>([]);
    
    useEffect(() => {
        const fetchPosts = async () => {
            const posts: postsType[] = await getPosts();
            setPosts(posts);
        }
        fetchPosts();
    });

    return (
    <div className='posts'>
        {posts.map((post) => (
            <Post post={post}/>
        ))}
    </div>
  )
}
