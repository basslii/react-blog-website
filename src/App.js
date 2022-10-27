import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/Signup';


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path= '/' element= {<Home/>}/>
        <Route path='/services' element= {<Services/>}/>
        <Route path='/products' element= {<Products/>}/>
        <Route path='/sign-up' element= {<SignUp/>}/>
      </Routes>
    </Router>
  );
}

export default App;


