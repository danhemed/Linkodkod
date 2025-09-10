import { addPost } from '../api/posts.api'
import '../css/AddPost.css'
import { useRef } from 'react'
import type { post } from '../types/Post.type';


export default function AddPost() {
  let formData = new FormData();

  const post = useRef<post>({
    id: "",
    name_post: "",
    description: "",
    likes: 0,
    name_user: "",
    date: ""
  });
  
  async function sendData(e: any) {
    e.preventDefault();
    console.log(e);
    const date = new Date();

    const posts = localStorage.getItem('posts');
    post.current = {
    id: `${JSON.parse(posts).length}`,
    name_post: e.target[0].value,
    description: e.target[1].value,
    likes: 0,
    name_user: e.target[2].value,
    date: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }

    formData.append('image', e.target[3].files[0]);

    const fetchPost = async () => {
      await addPost(post.current);
    }
    fetchPost();

    // לא עובד
    const fetchImg = async () => {
        await fetch(`http://localhost:3003/linkodkod/posts/image`, {
        method: "POST",
        body: formData
    })
    }
    // fetchImg();
    localStorage.clear();
    window.location.assign('http://localhost:5173/');
  }

  return (
    <form id="form-post" onSubmit={(e) => sendData(e)}>
        <label htmlFor="name_post">שם הפוסט:</label>
        <input className='input-post' type="text" name="name_post" required/>
        <br />
        <label htmlFor="description">תיאור הפוסט:</label>
        <input className='input-post' type="text" name="name_post"/>
        <br />
        <label htmlFor="name_user">שמך:</label>
        <input className='input-post' type="text" name="name_post" required/>
        <br />
        <label htmlFor="image">העלה תמונה לפוסט:</label>
        <input id="input-file" type="file" name="image"/>
        <br />
        <div className="btn-submit">
        <input type="submit" value='שתף את כולם'/>
        </div>
    </form>
  )
}
