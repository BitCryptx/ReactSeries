import React, { useEffect, useState } from 'react'
import "./Login.css"

const LogInForm = () => {

    const [formData, setformData] =useState({

        email : "" ,
        password : "" 
    })

    const handleSubmit = (event)=>{
        event.preventDefault();
        if(formData.email===""  || formData.password===""){
            return alert("Please fill the required fields")
        }
        console.log("Form Data" , formData);

        alert("Form Data has been submitted");

        setformData({
          email:"" ,
          password:""
        })
    }
    const handleChange = (event)=>{
        setformData({...formData ,[event.target.name]:event.target.value})
    }
    useEffect(() => {
      
    
     
    }, [formData])
    
  return(
    <>
      
      <div className='hero-section'>
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit}>
          <div>
            Email : 
            <input type="text"
              name = "email"
              placeholder='Enter email' 
              onChange={handleChange}/>
          </div>
          <div>
            Password : 
            <input type="text"
              name = "password"
              placeholder='Enter password' 
              onChange={handleChange}/>
          </div>

          <button type='submit'>Submit</button>
          
          </form>
     </div>
    </>
      

  )
    
      
    
     

  
   
  
}

export default LogInForm