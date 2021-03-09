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
  
   
    <Link to="/Help">Help</Link>
    <Link to="/About">About</Link>
    <Link to="/Profile">Profile</Link>
    <Link to="/Home">Home</Link>
   
   
 </div>
</div>

            </div>
            </div>
        )
    }
}
export default Header