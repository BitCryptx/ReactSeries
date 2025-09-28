import React from 'react'
// import SignForm from './Components/SignForm'
// import LogInForm from './Components/LogInForm'
// import ForgotPassword from './Components/ForgotPassword' 
// import Navbar from './Components/Navbar'
// import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Profile from './Pages/Profile'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Navbar from './Components/Form/Navbar'
import Dynamic_User from './Components/Dynamic_User'
import User from './Pages/User'
import Nav from './Components/Form/Nav'
import Layout from './Components/Nested Routes/Layout'
import FAQs from './Pages/FAQs'


const App = () => {
  return (
    <div>
      {/* <SignForm/> */}
      {/* <LogInForm/> */}
      {/* <ForgotPassword/> */}
      {/* <Router>
        <Navbar/>
        {/* <Nav/> */}
        {/* <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/product' element={<Product/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/user' element={<User/>}></Route>
          <Route path='/user/:id' element={<Dynamic_User/>}></Route>
          <Route path='*' element={<h1 style={{display:'flex' ,justifyContent:"center" 
            , alignItems:'center' 
            ,height:'100vh',
            width:"100%" ,
             color:'black' , }}>Page Not Found</h1>}></Route>
        </Routes>
      </Router> */} 
       <BrowserRouter>
      <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path='about' element={<About/>}/>
              <Route path='faqs' element={<FAQs/>}/>
              <Route path="*" element={<h1>Not Found</h1>}/>
            
            
            </Route>
          
      </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App