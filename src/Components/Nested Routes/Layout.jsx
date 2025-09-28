import React from 'react' 
import {Link , Outlet}  from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <div>
            <Link to={'/'}>Home</Link> | {" "}
            <Link to={'/about'}>About</Link> | {" "}
            <Link to={'/faqs'}>FAQs</Link> | {" "}
        </div>
        <hr />
        <Outlet/>
    </>
    
  )
}

export default Layout