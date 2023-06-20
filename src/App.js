import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from "./pages/Home/Home.jsx"
import Login from "./pages/login/Login.jsx"
import SignUp from './pages/register/SignUp';
import Header from './components/Header';
import Accessories from './pages/Accessories/Accessories';
import Caps from './pages/Caps/Caps';
import New from './pages/New/New'
import Summer from './pages/Summer/Summer'
import Footer from './components/Footer';
// Import Swiper styles

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/whatsNew' element={<New />} />
        <Route exact path='/summerTwinsets' element={<Summer />} />
        <Route exact path='/caps' element={<Caps />} />
        <Route exact path='/accessories' element={<Accessories />} />
        <Route exact path='/account/login' element={<Login />} />
        <Route exact path='/account/signup' element={<SignUp />} />
      </Routes>
      <Footer/>


    </div>


  );
}

export default App;
