
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Page/Home'
import Card from './components/Card'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Products from './products/Product'
import About from './Page/About'
import Read from './Page/Read'

function App() {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/read/:id' element={<Read/>}/>
        </Routes>
       <Footer/>
    </>
  )
}

export default App
