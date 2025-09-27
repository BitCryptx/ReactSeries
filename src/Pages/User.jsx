import React from 'react'
import { Link} from 'react-router-dom'

const User = () => {
    const Users = [
        { id : 1 , name : "Musharaf" , gmail : "musharafulislam@gmail.com" , age : 22 } ,
        {id : 2 , name : "Ali" , gmail:"ali@gmail.com" , age:23 } ,
        {id:3 , name:"Aslam" , gmail:"aslam@gmail.com" , age:24}
    ]
  return (
    <>
         <div style={{display:'flex' ,flexDirection:'column', alignItems:'center' , justifyContent:'center' , textDecoration:'center',
            height:'100vh' ,
            width:'100%'
         }}>
            {Users.map((user) => {
            return (
            <Link to={`/user/${user.id}` }>
                <div  key={user.id}>
                    <h1>{user.name}</h1>
                    {/* <p>{user.gmail}</p>
                    <p>{user.age}</p> */}
                </div>
            </Link>
        )
      })}
    </div>
    </>
  )
    
        
            
  
}

export default User