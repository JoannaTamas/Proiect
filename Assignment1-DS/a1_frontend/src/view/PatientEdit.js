import React from "react";

const PatientEdit = ({ patients, onEdit,newRecord,onChange }) => (
    
    <div>
        <div class="jumbotron jumbotron-fluid">  
   
        <div class="container "> 
         <h1 >Patients</h1>

       
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
                           

                            <label>Medical_record: </label>
                  
                    <input value={newRecord} onChange={ e => onChange("medical_record", e.target.value)} />
                    <br />
                    <button onClick = {() => onEdit(index)}>Update</button>
                          
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

export default PatientEdit;