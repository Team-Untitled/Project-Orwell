import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class HomeTeacher extends React.Component{
    render(){
        return(

            <div>


<body style={{backgroundColor:"black"}}>

<div class="home-grid-container">
    <div class="d1">
        <p style={{fontFamily:"Agency FB", fontSize:"80px", fontWeight: "bold", marginTop: "-20px", marginLeft:"10px", color: "#b1b7b9"}}>
            Welcome to
            <span style={{color: "#007399"}}>Project-Orwell - Teacher </span>
        </p>
    </div>

    <div class="d2">
        <p style={{fontFamily: "Agency FB", fontSize: "36px" ,fontWeight: "bold", marginTop: "-20px", color: "#b1b7b9"}}>&emsp; &emsp; A System for Monitoring Student’s Attention
        </p>
    </div>

    <div class="d3">
        <img src="assets/images/reconocimiento-facial-2.gif" style={{margin: "0px 50px 50px -50px", height: "100%", width: "100%"}}/>
    </div>
    <div class="d4">
    <Link to="/AttentionLevel"><a href="welcome.html">
            <button class="btn btn-success">
            <span class="icon">
                <i class="fa fa-universal-access"></i>
            </span>
                <br/>View <br/>Attention Level
            </button>
        </a>
        </Link>

        <Link to="/Viewattendance"><a href="welcome.html">
            <button class="btn btn-success">
            <span class="icon">
                <i class="fa fa-braille"></i>
            </span>
                <br/>View <br/>Attendance List
            </button>
        </a>
        </Link>

        <Link to="/Viewreport"><a href="welcome.html">
            <button class="btn btn-success">
            <span class="icon">
                <i class="fa fa-clipboard"></i>
            </span>
                <br/>View <br/>Report
            </button>
        </a>
        </Link>

        <br/> <br/>

        <Link to="/Profileteacher"><a href="welcome.html">
            <button class="btn btn-success">
            <span class="icon">
                <i class="fa fa-id-badge"></i>
            </span>
                <br/><br/>Profile
            </button>
        </a>
        </Link>

        <Link to="/Aboutteacher"><a href="welcome.html">
            <button class="btn btn-success">
            <span class="icon">
                <i class="fa fa-bullseye"></i>
            </span>
                <br/><br/>About
            </button>
        </a>
        </Link>

        <Link to="/Helpteacher"><a href="welcome.html">
            <button class="btn btn-success">
            <span class="icon">
                <i class="fa fa-life-ring"></i>
            </span>
                <br/><br/>Help
            </button>
        </a>
        </Link>

        <br/><br/>

        <Link to="/"><a href="welcome.html">
            <button class="btn btn-success"style={{marginLeft: "245px"}}>
            <span class="icon">
                <i class="fa fa-map-signs"></i>
            </span>
                <br/><br/>Sign Out
            </button>
        </a>
        </Link>

    </div>
</div>

<br/>

{/* <!--Footer--> */}
<div style={{backgroundColor: "#262626", marginBottom: "-5px", paddingBottom: "1px"}}>
    <p class="social text-muted mb-0 pb-0 bold-text">
        <a href="https://www.facebook.com/" target="_blank"><span class="mx-2"><i class="fa fa-facebook" aria-hidden="true"npm style={{marginRight:"10px"}}></i></span></a>
        <a href="https://www.linkedin.com/feed/" target="_blank"><span class="mx-2"><i class="fa fa-linkedin-square" aria-hidden="true"style={{marginRight:"10px"}}></i></span></a>
        <a href="https://twitter.com/LOGIN" target="_blank"><span class="mx-2"><i class="fa fa-twitter" aria-hidden="true"style={{marginRight:"10px"}}></i></span></a>
        <a href="https://www.instagram.com/" target="_blank"><span class="mx-2"><i class="fa fa-instagram" aria-hidden="true"style={{marginRight:"10px"}}></i></span></a>
        <span style={{float:"right", fontSize: "14px"}}>&emsp;&emsp;Copyrights Team Untitled All Rights Reserved.</span> </p>
</div>

</body>




            </div>


 
      );
 }
}
export default HomeTeacher;