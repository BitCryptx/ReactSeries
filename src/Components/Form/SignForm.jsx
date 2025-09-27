import React, { useEffect, useState } from 'react'
import "./SignForm.css" ;

const Form = () => {
    const [formData, setformData] = useState({
        username : "" ,
        password :"" ,
        email : "" 

    })
    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log('Form Data Submitted' , formData);
        alert("Form Submitted");
        setformData({username:"" , password:"" , email:""})

    }
    const onChange = (event)=>{
        setformData({...formData , [event.target.name]:event.target.value})
    }
    useEffect(() => {
      
    
      
    }, [formData])
    
  return (
    <>
        <div className='Hero-Section'>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    Name :
                    <input type="text" 
                    name='username'
                    placeholder='Enter name'
                    value={formData.username}
                    onChange={onChange} />
                <br />    
                </div>
                <div>
                    Password :
                    <input type="password" name='password' 
                    placeholder='Enter password'
                    value={formData.password}
                    onChange={onChange}/>
                <br />
                </div>
                <div>
                    Email :
                    <input type="email" name='email' 
                    placeholder='Enter email'
                    value={formData.email}
                    onChange={onChange}/>

                <br />
                </div>
                        
                        
                <button type='submit'>Submit</button>
            </form>
        </div>
    </>
    
  )
}

export default Form