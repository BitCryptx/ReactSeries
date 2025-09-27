import React from 'react';
import { useParams ,useLocation , useNavigate } from 'react-router-dom';

const Dynamic_User = () => {
  const { id } = useParams();
//   console.log("Use location:" , useLocation())

  const {pathname} = useLocation();

  const Users = [
    { id: 1, name: "Musharaf", gmail: "musharafulislam@gmail.com", age: 22 },
    { id: 2, name: "Ali", gmail: "ali@gmail.com", age: 23 },
    { id: 3, name: "Aslam", gmail: "aslam@gmail.com", age: 24 }
  ];

  const specified_user = Users.find((user)=>user.id==id);

  const navigate = useNavigate();

  if (!specified_user) {
    return <h2>User not found</h2>;
  }
  const goToHome = ()=>{
    navigate("/")
  }

  return (
    <>
      
      <h1>{specified_user.name}</h1>
      <p>{specified_user.gmail}</p>
      <p>{specified_user.age}</p>
      {/* <p>{location.pathname}</p> */}
      <p>{pathname}</p>
      {pathname==="/user/1" && <div><h1>Hello {specified_user.name}</h1></div>}
      <div>
        <button onClick={goToHome}>Home</button>
      </div>
    </>
  );
};

export default Dynamic_User;
