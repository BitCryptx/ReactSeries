import React from 'react'
// import SignForm from './Components/SignForm'
// import LogInForm from './Components/LogInForm'
// import ForgotPassword from './Components/ForgotPassword' 
// import Navbar from './Components/Navbar'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Profile from './Pages/Profile'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Navbar from './Components/Form/Navbar'
import Dynamic_User from './Components/Dynamic_User'
import User from './Pages/User'
import Nav from './Components/Form/Nav'


const App = () => {
  return (
    <div>
      {/* <SignForm/> */}
      {/* <LogInForm/> */}
      {/* <ForgotPassword/> */}
      <Router>
        {/* <Navbar/> */}
        <Nav/>
        <Routes>
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
      </Router>

    </div>
  )
}

export default App