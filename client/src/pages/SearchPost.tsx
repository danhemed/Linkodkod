import Post from '../components/Post.comp'
import { getPost } from "../api/posts.api"
import { useState, useEffect } from "react"
import type { postType } from "../types/Post.type"
import './SearchPost.css'


export default function SearchPost() {
  const [postt, setPostt] = useState({});
  const [id, setId] = useState("");
  
  function handleId(e:string) {
    setId(prevId => {
      return prevId + e;
    })
  }
  
  useEffect(() => {
    const fetchPosts = async () => {
      const post: postType = await getPost(id);
      console.log(post);
      setPostt(post);
    }
    fetchPosts();
  }, [id]);

  console.log(postt);

  return (
    <div id="searchpost">
    <input type="text" onChange={(e) => handleId(e.target.value)}/>
    <Post post={postt} />
    </div>
  )
}
