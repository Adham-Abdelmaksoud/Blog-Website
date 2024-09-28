import About from './components/About'
import BlogCreate from './components/BlogCreate'
import Blogs from './components/Blogs'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Blogs />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/create-blog" element={<BlogCreate />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
