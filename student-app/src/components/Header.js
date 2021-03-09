import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <div>
<div class="grid-container">
<div class="logo">
 <img src="assets/IMAGE/logo.png" id="logo-img"/>
</div>

<div class="header">
 <div class="topnav">
  
   
    <Link to="/Student_Help">Help</Link>
    <Link to="/Student_About">About</Link>
    <Link to="/Student_Profile">Profile</Link>
    <Link to="/Student_Home">Home</Link>
   
   
 </div>
</div>

            </div>
            </div>
        )
    }
}
export default Header