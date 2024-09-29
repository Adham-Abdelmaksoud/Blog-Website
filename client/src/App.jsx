import About from './components/About'
import AllBlogs from './components/AllBlogs'
import BlogCreate from './components/BlogCreate'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import SingleBlog from './components/SingleBlog'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllBlogs />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/create-blog" element={<BlogCreate />}/>
        <Route path="/blogs/:id" element={<SingleBlog />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
