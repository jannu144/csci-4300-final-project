import React from 'react';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import Card from './components/pages/Card';
import Home from './components/pages/Home';

function App() {
  return(
    <div>
      <Header />
      <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Card" element={<Card />}/>
        <Route exact path="/Login" element={<Login />}/>
        <Route exact path="/SignUp" element={<SignUp />}/>
      </Routes>
    </div>
  );
}

export default App;
