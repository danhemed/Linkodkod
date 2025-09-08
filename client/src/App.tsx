import './App.css'
import Post from './components/Post.comp'
import Header from './components/Header.comp'
import type { PostsType } from './types/PostsType.type'
import { getPosts } from './api/posts.api'

const posts: PostsType = await getPosts();

function App() {
  return (
    <>
    <Header/>
    <div className='posts'>
      {posts.map((post) => (
        <Post post={post}/>
      ))}
    </div>
    </>
  )
}

export default App
