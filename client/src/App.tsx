import './css/App.css'
import Header from './components/Header.comp'
import SearchPost from './pages/SearchPost'
import Home from './pages/Home'
import { Route, Routes } from 'react-router'
import DynamicPostPage from './pages/DynamicPostPage'
import AddPost from './pages/AddPost'
import Login from './components/Login.comp'
import SignIn from './components/SignIn.comp'
import SignUp from './components/SignUp.comp'
import Footer from './components/Footer.comp'
import Aba from './components/Aba'

function App() {

  return (
    <>
    <main>
    <Header/>
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="search-post" element={<SearchPost/>}/>
        <Route path="add-post" element={<AddPost/>}/>
        <Route path="/posts/:id" element={<DynamicPostPage/>}/>
        <Route path="/" element={<Aba />}>
          <Route index element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>
    </Routes>
    <Footer/>
    </main>
    </>
  )
}

export default App
