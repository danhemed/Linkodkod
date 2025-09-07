import './App.css'
import data from './data.json'
import Post from './components/Post'

type PostType = {
    img_url: string,
    description: string,
    likes: number,
    name_user: string,
    date: string
};

type PostsType = {
  data: PostType[]
}

const posts: PostsType = data;


function App() {
  return (
    <>
    <div className='posts'>
      {posts.data.map((post) => (
        <Post post={post}/>
      ))}
    </div>
    </>
  )
}

export default App
