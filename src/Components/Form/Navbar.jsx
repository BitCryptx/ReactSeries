import React from 'react' 
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>

        <div style={{display:'flex' , 
            flexDirection:'row' ,
            justifyContent:'space-between' ,
            backgroundColor:'yellow' ,
            alignItems:'center' ,
            padding:'10px 5px'}}>
            <h1 style={{margin:'0px' , color:'black'}}>My Shop</h1> 
            <div>
                <NavLink style={({isActive})=>({
                   color: isActive ? 'red' : 'green' ,
                    fontWeight : isActive ? 'bold' : 'normal' ,  margin:'10px' , textDecoration:'none' ,   fontSize:'20px'})} to={'/'}>Home</NavLink>
                <NavLink style={({isActive})=>({
                     color: isActive ? 'red' : 'green' ,
                     fontWeight : isActive ? 'bold' : 'normal' ,
                    margin:'10px' , textDecoration:'none' , fontSize:'20px'})} to={'/about'}>About</NavLink>
                <NavLink style={({isActive})=>({
                     color: isActive ? 'red' : 'green' ,
                     fontWeight : isActive ? 'bold' : 'normal' ,margin:'10px' , textDecoration:'none',  fontSize:'20px'})} to={'/product'}>Product</NavLink>
                <NavLink style={({isActive})=>({
                     color: isActive ? 'red' : 'green' ,
                     fontWeight : isActive ? 'bold' : 'normal' ,margin:'10px' , textDecoration:'none',  fontSize:'20px'})} to={'/profile'}>Profile</NavLink>
                <NavLink style={({isActive})=>({
                     color: isActive ? 'red' : 'green' ,
                     fontWeight : isActive ? 'bold' : 'normal' ,margin:'10px' , textDecoration:'none',  fontSize:'20px'})} to={'/user'}>User</NavLink>
                
            </div>   
           
        </div>
    </>
    
  )
}

export default Navbar