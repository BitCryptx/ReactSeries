import React from 'react'
import { useState } from 'react'
import { useLocation , useNavigate , Link } from 'react-router-dom'

const Nav = () => {
    const [isLoggedIn, setisLoggedIn] = useState(false)
    const navigate = useNavigate();
    // const location = useLocation();
    const handleLogin = ()=>{
        setisLoggedIn(true)
        navigate("/Dashboard")
    }
    const handleLogOut = ()=>{
        setisLoggedIn(false)
        navigate("/Home");
    }
  return (
    <>
        <ul>
            <li>
                <Link to="/home">Home</Link>
            </li>
        
            {isLoggedIn && (<>
                <li><Link to="/Dashboard">Dashboard</Link></li>
                <li><Link to="/Profile"></Link>Profile</li>
                <li><button onClick={handleLogOut}>LogOut</button></li>
            </>)}

            {!isLoggedIn && (<>
                
                <li><button onClick={handleLogin}>Login</button></li>
            </>)

            }



        </ul>
    </>
    
  )
}

export default Nav