import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; 

function Home() {
  return (
    <div className="container">
      <h1>Welcome to Mr.Bean!</h1>
      <p>Please login or signup to add to our cafe card</p>
      <div>
        <Link exact to="/Login"><button>Login</button></Link>
        <Link exact to="/SignUp"><button>SignUp</button></Link>
      </div>
    </div>
  );
}

export default Home;
