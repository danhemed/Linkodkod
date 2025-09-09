import { addPost } from '../api/posts.api'
import '../css/AddPost.css'
import { useEffect, useState } from 'react'

export default function AddPost() {
  const [post, setPost] = useState({
    id: "",
    name_post: "",
    description: "",
    likes: 0,
    name_user: "",
    date: ""
  });
  
  async function sendData(e) {
    e.preventDefault();
    console.log(e);
    const date = new Date();

    setPost({
    id: "8",
    name_post: e.target[0].value,
    description: e.target[1].value,
    likes: 0,
    name_user: e.target[2].value,
    date: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    })
    if (post.name_post && post.name_user) {
      await addPost(post);
      window.location.assign('http://localhost:5173/');
    }
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
        <label htmlFor="name_user">העלה תמונה לפוסט:</label>
        <input id="input-file" type="file" name="name_post"/>
        <br />
        <div className="btn-submit">
        <input type="submit" value='שתף את כולם'/>
        </div>
        {/* <h5 className='create-new-post'>יש איזה כיף! נוצר פוסט חדש!</h5> */}
    </form>
  )
}
