import React, { useState } from 'react'
import "./ForgotPwd.css";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
    oldPwd: "",
    newPwd: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.email || !formData.oldPwd || !formData.newPwd) {
      return alert("Enter required fields");
    }

    alert("Password is updated");
    console.log(formData);

    setFormData({ email: "", oldPwd: "", newPwd: "" });
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="hero-section">
        <h1>Forgot Password</h1>
      <form onSubmit={handleSubmit}>
        
        <div>
          Email:
          <input
            type="text"
            name="email"
            placeholder="enter email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          Old Password:
          <input
            type="password"
            name="oldPwd"
            placeholder="enter old password"
            value={formData.oldPwd}
            onChange={handleChange}
          />
        </div>
        <div>
          New Password:
          <input
            type="password"
            name="newPwd"
            placeholder="enter new password"
            value={formData.newPwd}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
