import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from "./pages/Home/Home.jsx"
import Login from "./pages/login/Login.jsx"
import SignUp from './pages/register/SignUp';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/account/login' element={<Login />} />
        <Route exact path='/account/signup' element={<SignUp />} />
      </Routes>


    </div>


  );
}

export default App;
