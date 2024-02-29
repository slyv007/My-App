
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Product from './Product'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Nav'
import DetailPage from './pages/DetailPage'
import MyHook from './Hooks/MyHook'
import FetchData from './Hooks/FetchData'
import NotFoundPage from './pages/404Page'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
 
  

  return (
    <>
    {/* <Home />
      <About />
      <Product/> */}
        
        {/* Routing pages */}
        <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<DetailPage />} />
          <Route path="/hook" element={<MyHook />} />
          <Route path="/*" element={<NotFoundPage />} />
          <Route path="/blog" element={<FetchData />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          
          

        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
