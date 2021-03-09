import React,{Component, Profiler} from 'react';
import {Link} from 'react-router-dom';


class Loginteacher extends React.Component{
    render(){
        return(
                <div>
  <div class="body4">
  <div class="imagelogin">
  <img src="assets/IMAGE/logo.png" id="logo-img"/>
</div>
 <form class="boxlogin" action="login.html" method="POST">
 

 <h1> Login </h1>
<input type="text" name="" placeholder="Enter Username" id="username"/>
<input type="password" name="" placeholder="Enter Password" id="password"/>


<Link to="/Home"><input type="submit" name="" value="Login" onlick="validate()"/></Link>
</form>
	
  </div>
                       
                   </div>
    
                
        )
    }
}
export default Loginteacher