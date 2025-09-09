import './css/App.css'
import Header from './components/Header.comp'
import SearchPost from './pages/SearchPost'
import Home from './pages/Home'
import { Route, Routes } from 'react-router'
import DynamicPostPage from './pages/DynamicPostPage'
import AddPost from './pages/AddPost'

function App() {

  return (
    <>
    <Header/>
    <Routes>
        <Route index element={<Home />} />
        <Route path="search-post" element={<SearchPost/>}/>
        <Route path="add-post" element={<AddPost/>}/>
        <Route path="/posts/:id" element={<DynamicPostPage/>}/>
    </Routes>
    </>
  )
}

export default App
