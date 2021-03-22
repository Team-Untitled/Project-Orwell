import React from 'react';
import logo from './logo.svg';
import './App.css';

import HomeStudent from './pages/Home-Student';
import HomeTeacher from './pages/Home-Teacher';
import AttentionLevel from './pages/AttentionLevel';
import Viewattendance from './pages/Viewattendance';
import Viewreport from './pages/view report';
import Profileteacher from './pages/Profile-Teacher';
import ProfileStudent from './pages/Profile-Student';
import Aboutteacher from './pages/About-Teacher';
import AboutStudent from './pages/About-Student';
import Helpteacher from './pages/Help-Teacher';
import HelpStudent from './pages/Help-Student';
import Join from './pages/Join';
import UserType from './pages/UserType';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import LoginStudent from './pages/Login-Student';
import LoginTeacher from './pages/Login-Teacher';




function App() {
  return (
    <div>

      <Router> 
        
        <Switch>


        <Route exact path='/' component={UserType}/>
        <Route exact path='/Login-Student' component={LoginStudent}/>
        <Route exact path='/Login-Teacher' component={LoginTeacher}/>


        <Route exact path='/Home-Student' component={HomeStudent}/>
        <Route exact path='/Join' component={Join}/> 
        <Route exact path='/Profile-Student' component={ProfileStudent}/>
        <Route exact path='/About-Student' component={AboutStudent}/>
        <Route exact path='/Help-Student' component={HelpStudent}/> 

        <Route exact path='/Home-Teacher' component={HomeTeacher}/>
        <Route exact path='/AttentionLevel' component={AttentionLevel}/>
        <Route exact path='/Viewattendance' component={Viewattendance}/>
        <Route exact path='/Viewreport' component={Viewreport}/>
        <Route exact path='/Profileteacher' component={Profileteacher}/>
        <Route exact path='/Aboutteacher' component={Aboutteacher}/>
        <Route exact path='/Helpteacher' component={Helpteacher}/>  


          
        </Switch>
        
      </Router>
     

    </div>
  );
}

export default App;
