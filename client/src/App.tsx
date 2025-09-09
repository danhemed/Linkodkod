import './css/App.css'
import Header from './components/Header.comp'
import SearchPost from './pages/SearchPost'
import Home from './pages/Home'
import { Route, Routes } from 'react-router'
import DynamicPostPage from './pages/DynamicPostPage'

function App() {

  return (
    <>
    <Header/>
    <Routes>
        <Route index element={<Home />} />
        <Route path="searchPost" element={<SearchPost/>}/>
        <Route path="/posts/:id" element={<DynamicPostPage/>}/>
    </Routes>
    </>
  )
}

export default App
