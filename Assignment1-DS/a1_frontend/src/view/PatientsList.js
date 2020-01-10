import React from "react";

const PatientsList = ({ patients }) => (
    
    <div>
        <div class="jumbotron jumbotron-fluid">  
   
        <div class="container "> 
         <h1 >All the patients</h1>

       
         <table class="table table-bordered">
         <thead>
            <tr class="table-primary">
                    <th>Name</th>
                    <th>Birth Date</th>
                    <th>Gender</th>
                    <th>Address</th>
                    <th>Medical Record</th>
                  



              
                    
                </tr>
            </thead>
            <tbody>
                {
                    patients.map((patient, index) => (
                        <tr class="table-light" key={index}>
                            <td>{patient.name}</td>
                            <td>{patient.birth_date}</td>
                            <td>{patient.gender}</td>
                            <td>{patient.addr}</td>
                            <td>{patient.medical_record}</td>
                           
 
                          
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <br />
       
    </div>
    </div>
    </div>
    
);

export default PatientsList;