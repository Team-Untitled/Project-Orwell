import React,{Component} from 'react';
import {Link} from 'react-router-dom';


class  Student_Home extends React.Component{
    render(){
        return(
            
          <div class="grid-container">
         
        
         
          <div class="body">
          
         
          
          <div class="cards">
          <div class="card-wrapper">
          <div class="zoom">
            <div class="blog-card">
              <div class="blog-card__thumbnail"  >
              <img src="assets/IMAGE/join.png" id="img"/>
        
                   
              </div>
        
              <div class="blog-card__details">
                <div class="blog-card__description" >
                <b>  A good education is a foundation for a better future.</b>
                </div>
        
                
        
                <button class="blog-card__action" > 
                <Link to="/Student_joinsession"><span > <b>join session </b></span></Link>
                  <i class="fa fa-angle-right"> </i>
                </button>
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
export default  Student_Home;