import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginUser } from "../Store/Slices/userSlice";

function Loginscreen() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(true);
  
  const dispatch= useDispatch();

  async function check() {
      const findUser = {email, password};
      try {
        const result = await axios.post("http://localhost:5000/users/login",findUser);
      
        if (result) 
        {
           dispatch(loginUser(result.data));
           window.location.href = "/data";
        }   
      } catch (err) {
        console.log(err);
      }
  }

  return (
    <div className="container mt-2">
      <div className="row justify-content-center p-3">
        <div className="col-md-5">
            <h1>Login</h1>
            <input
              type="email"
              className="form-control mt-2"
              placeholder="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <input
              type="password"
              className="form-control mt-2"
              placeholder="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />

            <button className="btn-primary btn" onClick={check}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Loginscreen;
