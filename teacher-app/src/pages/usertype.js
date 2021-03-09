import React,{Component, Profiler} from 'react';
import {Link} from 'react-router-dom';


class usertype extends React.Component{
    render(){
        return(
                <div>
  <div class="body4">
  <div class="imagelogin">
  <img src="assets/IMAGE/logo.png" id="logo-img"/>

</div>
 <form class="boxlogin" >
 
 <div class="welcometopic"><h1> Welcome </h1></div>
<div class="welcomedis"><i>The function of education is to teach one to think intensively and to think critically. 
    Intelligence plus character that is the goal of true education.</i></div>



    <Link to="/Loginteacher"><div class="Teacherbutton"><input type="submit" name="" value="Teacher" onlick="validate()"/></div></Link>
    <Link to="/Loginstudent"><div class="Studentbutton"><input type="submit" name="" value="Student" onlick="validate()"/></div></Link>


</form>
	
  </div>
                       
                   </div>
    
                
        )
    }
}
export default usertype