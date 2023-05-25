import React from "react";
import "./login.css";
import { NavLink } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
const Login = () => {
  return (
    <main>
      <div className="image"></div>
      <div className="contaner">
        <h1>Login Page</h1>
        <input type="email" placeholder="Enter Gmail" />
        <input type="password" placeholder="Enter Password" />
        <div className="forget">
          <div>
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Remember me</label>
          </div>
          <NavLink to="forget"> forget password</NavLink>
        </div>
        <button type="submit">Login</button>

        <h3>or login with</h3>
        <div className="icons">
          <span>
            <BsFacebook />
          </span>
          <span>
            <SiGmail />
          </span>
          <span>
            <BsInstagram />
          </span>
          <span>
            <AiOutlineTwitter />
          </span>
          <span>
            <AiFillLinkedin />
          </span>
        </div>
      </div>
    </main>
  );
};

export default Login;
