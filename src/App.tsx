import './App.css'
import data from './data.json'
import Post from './components/Post'
import Header from './components/Header';

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
