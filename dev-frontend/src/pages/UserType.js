import React,{Component, Profiler} from 'react';
import { Link } from 'react-router-dom';

      class Login extends React.Component{
       render() {
      
          return (
            <div className="wrapperlogin"style={{
              backgroundImage: "url(assets/images/login-bg3.gif)",
              backgroundSize: "cover",
              backgroundRepeat: " repeat" ,
              height: "100vh",
            }}>

               <div class="imagelogin">
               <div className=" image">
               <img src="assets/images/logo.png" id="logo-img"/>
               </div>
               </div>






              <div className="form-wrapperlogin">
              <div class="welcometopic"><h1> Welcome </h1></div>
<div class="welcomedis"><i>The function of education is to teach one to think intensively and to think critically. Intelligence plus character that is the goal of true education</i></div>
<Link to="/Login-Student"><div class="Studentbtn"><button class="Studentbutton">Student</button></div></Link>

<Link to="/Login-Teacher"><div class="Teacherbtn"><button class="Teacherbutton">Teacher</button></div></Link>



                </div>
            </div>
          );
        }
      }
  export default Login