import React,{Component} from 'react';

class Help extends React.Component{
    render(){
        return(
                <div>
                   <div class="bodyhelp">
                  <div class="Help">
                   <div class="container3">

<h1>Help</h1>
<h6>User guide to use Project-Orwell</h6> 
<hr width='30%'/>
<h3>Overview of the system</h3> 
<p> “Project-Orwell”- A System for Monitoring Student’s Attention.Project-Orwell which will be a system for monitoring students’ attention 
    in a classroom and updating the teacher or the lecturer in real time. A system contents with an application connected with web cameras.
     By using face recognition, the application shows the students in the classroom with their identities. Moreover, applying a machine learning
     module for a combined approach of face detection and pose estimation, the system highlighted the students who are in lack attention.
     A system contents with an application connected with web cameras. By using face recognition, the application shows the students in the 
     classroom with their identities. Moreover, applying a machine learning module for a combined approach of face detection and pose estimation, 
     the system highlighted the students who are in lack attention.Finally a report is generated with the details about attention level and
      attendance of every student individually.</p>
<h3>How the system works</h3> 
<p> The main home page of teacher has 3 options-View Attendance,Attention Levels and View Report.View Attendance section gives access to the teacher to view the attendance of students that have logged into the session.Attention Levels allow the teachers to view every students' attention level during the sesssion individually in real time.View report option allows teacher to view a report that is generated at the end of the session which contains attendance and average attention level of the student that has participated in the session.</p>
   <p>Please refer the special user manual documentation provided for more information</p>

</div>
                       
                   </div>
                </div>
                </div>
        )
    }
}
export default Help