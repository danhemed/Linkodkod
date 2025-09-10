import Post from '../components/Post.comp'
import { getPost } from "../api/posts.api"
import { useState, useEffect } from "react"
import type { postType } from "../types/Post.type"
import '../css/SearchPost.css'


export default function SearchPost() {
  const [postFound, setPostFound] = useState({});
  const [id, setId] = useState("");
  const [found, setFound] = useState(false);

  function handleId(e: string) {
    setId(e);
  }

  useEffect(() => {
    const fetchPosts = async () => {
      console.log('id', id);
      console.log('postFound', postFound);
      if (id) {
        const post: postType = await getPost(id);
        setPostFound(post);
        setFound(true);
      }
    }
    fetchPosts();
  }, [id]);

  return (
    <div id="searchpost">
      <div id="search">
        <h3>חפש פוסט:</h3>
        <input className="input-btn" type="text" onChange={(e) => handleId(e.target.value)} placeholder='🔍 חפש לפי ID ...' />
      </div>
      {found ? <Post post={postFound} /> : <div><br />עדיין לא נמצא כלום...</div>}
    
    </div>
  )
}
