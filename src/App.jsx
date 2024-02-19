import './index.css'
import Header from './components/Header'
import Home from './components/Home'
import Blog from './components/Blog'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <div>
          <Header />
          {/* Route a Component */}
          <Routes>
            <Route path = "/" element={<Home />} />
            <Route path = "/blog" element={<Blog />} />
            <Route path = "/about" element={<About />} />
            <Route path = "/contact" element={<Contact />} />
            <Route path = "*" element={<Error />} />
          </Routes>
          
      </div>
    </>
  )
}

export default App
