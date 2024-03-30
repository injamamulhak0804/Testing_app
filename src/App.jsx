import './index.css'
import Header from './components/Header'
import Home from './components/Home'
import Blog from './components/Blog'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import { Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from './utils/store/appStore'
import Cart from './components/Cart'
import SignIn from './components/SignIn'
import RestaurantMenu from './components/RestaurantMenu'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
    <Provider store={appStore} >
      <div>
      <Toaster
							position="bottot-center"
							reverseOrder={false}
							gutter={30}
							containerClassName="toaster-container"
							toastOptions={{
								className: "toaster-toast",
								duration: 1500,
							}}
						/>
          <Header />
          {/* Route a Component */}
          <Routes>
            <Route path = "/" element={<Home />} />
            <Route path = "/blog" element={<Blog />} />
            <Route path = "/about" element={<About />} />
            <Route path = "/contact" element={<Contact />} />
            <Route path = "/card" element={<Cart /> } />
            <Route path = "/signIn" element={<SignIn /> } />
            <Route path = "/restaurant/:resId" element = {<RestaurantMenu />} />
            <Route path = "*" element={<Error />} />
          </Routes>
          <Footer/>
      </div>
      </Provider>
    </>
  )
}

export default App
