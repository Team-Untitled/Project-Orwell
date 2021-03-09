import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component{
    render(){
        return(
            <div className="row ">
            <div className="medium-12 columns">

            <div class="grid-container">
              



<div class="body">



<div class="cards">
<div class="card-wrapper">
 <div class="zoom">
 <div class="blog-card">
   <div class="blog-card__thumbnail"  >
   <img src="assets/IMAGE/Attendance.jpg" id="img"/>

        
   </div>

   <div class="blog-card__details">
     <div class="blog-card__description" >
     <b>  Attend today, and achieve tomorrow.</b>
     </div>

     

     <button class="blog-card__action" > 
     <Link to="/viewattendance"><span > <b>View Attendance </b></span></Link>
       
       <i class="fa fa-angle-right"> </i>
     </button>
   </div>
 </div>
 </div>
 
<div class="zoom">
  <div class="blog-card">
    <div class="blog-card__thumbnail"   >
    <img src="assets/IMAGE/attention.png" id="img"/>

      
   </div>

   <div class="blog-card__details">
     <div class="blog-card__description">
       <b>You learn something everyday, if you pay attention.</b>
     </div>

     

     <button class="blog-card__action"> 
     <Link to="/attentionlevel"><span > <b>Attention Levels </b></span></Link>
     
       <i class="fa fa-angle-right" > </i>
     </button>

   </div>
 </div>
</div>
 
<div class="zoom">
  <div class="blog-card">
    <div class="blog-card__thumbnail"  >
    <img src="assets/IMAGE/view.png" id="img"/>

   </div>

   <div class="blog-card__details">
     <div class="blog-card__description">
        <b>View the report and check the students'reaction .</b>
     </div>

     <div class="blog-card__description">
     </div>

      <button class="blog-card__action" > 
      <Link to="/viewreport"><span > <b>View Report </b></span></Link>

     
       <i class="fa fa-angle-right" > </i>
     </button>

   </div>
 </div>
</div>
</div>





</div>
</div>



</div>
                
            </div>
     </div>  
      );
 }
}
export default Home;