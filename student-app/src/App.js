import React from 'react';
import logo from './logo.svg';
import './App.css';
import Student_Login  from  './pages/Student_Login';
import  Student_Home from  './pages/Student_Home';
import  Student_Profile from  './pages/Student_Profile';
import  Student_About from  './pages/Student_About';
import Student_Help from  './pages/Student_Help';
import  Student_joinsession from  './pages/Student_joinsession';
import Header from './components/Header';
import Footer from './components/Footer';


import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
        <Route exact path='/' component={Student_Login}/>
          <Route exact path='/Student_Home' component={ Student_Home}/>
          <Route path='/Student_profile'component={ Student_Profile}/>
          <Route path='/Student_about'component={ Student_About}/>
          <Route path='/Student_Help'component={ Student_Help}/>
          <Route path='/Student_joinsession'component={ Student_joinsession}/>
          
        </Switch>
        <Footer/>
      </Router>
     
      
    </div>
  )
}

export default App;
