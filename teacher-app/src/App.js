import React from 'react';
import logo from './logo.svg';
import './App.css';
import Loginteacher from  './pages/Loginteacher';
import Home from  './pages/Home';
import Profile from  './pages/Profile';
import About from  './pages/About';
import Help from  './pages/Help';
import viewattendance from  './pages/viewattendance';
import viewreport from  './pages/viewreport';
import attentionlevel from  './pages/attentionlevel';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/' component={Loginteacher}/>
          <Route exact path='/Home' component={Home}/>
          <Route path='/profile'component={Profile}/>
          <Route path='/about'component={About}/>
          <Route path='/Help'component={Help}/>
          <Route path='/viewattendance'component={viewattendance}/>
          <Route path='/viewreport'component={viewreport}/>
          <Route path='/attentionlevel'component={attentionlevel}/>

        </Switch>
        <Footer/>
      </Router>
     
      
    </div>
  )
}

export default App;
