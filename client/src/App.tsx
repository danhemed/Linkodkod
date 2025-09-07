import './App.css'
import data from './data.json'
import Post from './components/Post'
import Header from './components/Header'
import type { PostsType } from './types/PostsType.type'

function App() {
  const posts: PostsType = data;
  return (
    <>
    <Header/>
    <div className='posts'>
      {posts.data.map((post) => (
        <Post post={post}/>
      ))}
    </div>
    </>
  )
}

export default App
