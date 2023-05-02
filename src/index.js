import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup.jsx';
import Navbar from './components/Navbar.jsx';
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx'
import Footer from './components/Footer.jsx';
import Welcome from './components/Welcome.jsx';


ReactDOM.render(
  <BrowserRouter>
    <Navbar/>

    <Routes>
     <Route exact path="/" element={<Welcome />}></Route>
      <Route exact path="/Signup" element={<Signup />}></Route>
      <Route exact path="/Login" element={<Login />}></Route>
      <Route exact path="/Dashboard" element={<Dashboard />}></Route>
    </Routes>

    <Footer/>

  </BrowserRouter>,
  document.getElementById('root')
);







