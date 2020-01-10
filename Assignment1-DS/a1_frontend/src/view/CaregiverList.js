import React from "react";

const CaregiverList = ({ caregivers }) => (
    
    <div>
        <div class="jumbotron jumbotron-fluid">  
   
        <div class="container "> 
         <h1 >All the caregivers</h1>

       
         <table class="table table-bordered">
         <thead>
            <tr class="table-primary">
                    <th>Name</th>
                    <th>Birth Date</th>
                    <th>Gender</th>
                    <th>Address</th>
                    <th>Patients</th>


              
                    
                </tr>
            </thead>
            <tbody>
                {
                    caregivers.map((caregiver, index) => (
                        <tr class="table-light" key={index}>
                            <td>{caregiver.name}</td>
                            <td>{caregiver.birth_date}</td>
                            <td>{caregiver.gender}</td>
                            <td>{caregiver.addr}</td>
                            <td>{caregiver.patients}</td>
 
                          
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

export default CaregiverList;