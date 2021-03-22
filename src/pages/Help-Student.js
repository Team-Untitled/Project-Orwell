import React,{Component} from 'react';
import {Link} from 'react-router-dom';


class HelpStudent extends  React.Component{
    render(){
        return(
                <div>




<body>

{/* <!--Navigation--> */}
<nav class="navbar navbar-inverse">
    <div class="container-fluid">
        <div class="navbar-header">
            <a class="navbar-brand" href="#">Project-Orwell</a>
        </div>
        <ul class="nav navbar-nav">
        <li><Link to="/Home-Student">Home</Link></li>
            
            <li><Link to="/Profile-Student">Profile</Link></li>
                       <li> <Link to="/About-Student">About</Link></li>
                       <li><Link to="/Help-Student">Help</Link></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
            <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
            <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>
    </div>
</nav>


{/* <!--body--> */}

<div class="bodyhelp">
                  <div class="Help">
                    
                   <div class="container3">

<h1>Help</h1>
<h6>User guide to use Project-Orwell</h6> 
     <hr width='30%'/>
     <h3>Overview of the system</h3> 
     <p> “Project-Orwell”- A System for Monitoring Student’s Attention.Project-Orwell which will be a system for monitoring students’
	 attention in a classroom and updating the teacher or the lecturer in real time. A system contents with an application connected with web 
	 cameras. By using face recognition, the application shows the students in the classroom with their identities. Moreover, applying a machine
	 learning module for a combined approach of face detection and pose estimation, the system highlighted the students who are in lack attention.
	 A system contents with an application connected with web cameras. By using face recognition, the application shows the students in the classroom 
	 with their identities. Moreover, applying a machine learning module for a combined approach of face detection and pose estimation, the system 
	 highlighted the students who are in lack attention.Finally a report is generated with the details about attention level and attendance of every
	 student individually.</p>
     <h3>How the system works</h3> 
   <p> The main home page of student has 2 options-Join Session and View Profile.Join Session section allows student to log into the student.
   View Profile navigates the students to view their own profiles</p>
   <p>Please refer the special user manual documentation provided for more information</p>

</div>
                       
                   </div>
                </div>




{/* <!--Footer--> */}
<div class="container-fluid pb-0 mb-0 justify-content-center text-light ">
    <footer>
        <div class="row my-5 justify-content-center py-5">
            <div class="col-11">
                <div class="row ">
                    <div class="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                        <h3 class="text-muted mb-md-0 mb-5 bold-text">Untitled.</h3>
                    </div>
                    <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                        <h6 class="mb-3 mb-lg-4 bold-text "><b>MENU</b></h6>
                        <ul class="list-unstyled">
                                     <li>Home</li>
                                    <li>About</li>
                                    <li>Help</li>
                                    <li>Profile</li>
                        </ul>
                    </div>
                    <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                        <h6 class="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5"><b>ADDRESS</b></h6>
                        <p class="mb-1">57 Ramakrishna Rd, Colombo 00600</p>
                        <p>Informatics Institute of Technology (IIT)</p>
                    </div>
                </div>
                <div class="row ">
                    <div class="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                        <p class="social text-muted mb-0 pb-0 bold-text">
                            <a href="https://www.facebook.com/" target="_blank"><span class="mx-2"><i class="fa fa-facebook" aria-hidden="true"style={{marginRight:"10px"}}></i></span></a>
                            <a href="https://www.linkedin.com/feed/" target="_blank"><span class="mx-2"><i class="fa fa-linkedin-square" aria-hidden="true"style={{marginRight:"10px"}}></i></span></a>
                            <a href="https://twitter.com/LOGIN" target="_blank"><span class="mx-2"><i class="fa fa-twitter" aria-hidden="true"style={{marginRight:"10px"}}></i></span></a>
                            <a href="https://www.instagram.com/" target="_blank"><span class="mx-2"><i class="fa fa-instagram" aria-hidden="true"style={{marginRight:"10px"}}></i></span></a>
                             </p>
                        <small class="rights"><span>Copyrights </span> Team Untitled All Rights Reserved.</small>
                    </div>
                    <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                        <h6 class="mt-55 mt-2 text-muted bold-text"><b>Shaumya Alexandra</b></h6><small> <span><i class="fa fa-envelope" aria-hidden="true"></i></span> shaumya.20191132@iit.ac.lk</small>
{/* <!--                        <h6 class="mt-55 mt-2 text-muted bold-text"><b>K.H Gunasekara</b></h6><small> <span><i class="fa fa-envelope" aria-hidden="true"></i></span> kavindi.2019598@iit.ac.lk</small>--> */}
                    </div>
                    <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                        <h6 class="text-muted bold-text"><b>K.H Gunasekara</b></h6><small><span><i class="fa fa-envelope" aria-hidden="true"></i></span> kavindi.2019598@iit.ac.lk</small>
{/* <!--                        <h6 class="text-muted bold-text"><b>R.P.A.R.Peiris</b></h6><small><span><i class="fa fa-envelope" aria-hidden="true"></i></span> amani.2019699@iit.ac.lk</small>--> */}
{/* <!--                        <h6 class="text-muted bold-text"><b>W. H. L Mendis</b></h6><small><span><i class="fa fa-envelope" aria-hidden="true"></i></span> hasindu.2018491@iit.ac.lk</small>--> */}
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>

</body>
</div>

        );
    }
}
export default HelpStudent