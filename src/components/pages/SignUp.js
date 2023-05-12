import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";
import "../styles/SignUp.css";

export default function SignUp({ setLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Thank you for signing up!")
        console.log(userCredential);
      })
      .catch((error) => {
        alert("Email is already registered!");
        console.log(error);
      });
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={signUp}>
        <h1>Create an Account</h1>
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? 
        <p><Link exact to="/Login">Login</Link>here!</p>
      </p>
    </div>
  );
}