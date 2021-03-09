import React,{Component, Profiler} from 'react';

class  Student_Profile extends React.Component{
    render(){
        return(
                <div>
                   <div class="body4">
                   <div class="profileimg">
<img src="assets/IMAGE/img_avatar.png" alt="Avatar" class="avatar"/>
 </div>

 <div class="profiledes">
  Profile details
  </div>

  <div class="profiledetails">
  <table>
   <tr>
  <td>Name</td>
  <td>Hansani Gunasekara</td>
   </tr>
  <tr>
  <td>ID</td>
  <td>2019598</td>
  </tr>
  <tr>
  <td>Class</td>
  <td>13-B</td>
   </tr>
  <tr>
  <td>Email</td>
  <td>kavindi@gmail.com</td>
  </tr>
</table>
</div>

 </div>
 



<div class="editbutton">
  <button class="button5 button5">Edit</button>
</div>

                       
                   </div>
    
                
        )
    }
}
export default  Student_Profile