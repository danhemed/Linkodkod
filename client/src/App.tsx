import './App.css'
import Header from './components/Header.comp'
import SearchPost from './pages/SearchPost'
import Home from './pages/Home'
import { Route, Routes } from 'react-router'

function App() {
  return (
    <>
    <Header/>
    <Routes>
        <Route index element={<Home />} />
        <Route path="searchPost" element={<SearchPost/>}/>
      </Routes>
    </>
  )
}

export default App
