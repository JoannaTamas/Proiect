import React from "react";

const MedicationDelete = ({ medications, onDeleteMedication }) => (
    
    <div>
        <div class="jumbotron jumbotron-fluid">  
   
        <div class="container "> 
         <h1 >Medication</h1>

       
         <table class="table table-bordered">
         <thead>
            <tr class="table-primary">
                    <th>Name</th>
                    <th>Side effects</th>
                    <th>Dosage</th>
                  
                  


              
                    
                </tr>
            </thead>
            <tbody>
                {
                    medications.map((medication, index) => (
                        <tr class="table-light" key={index}>
                            <td>{medication.name}</td>
                            <td>{medication.side_effects}</td>
                            <td>{medication.dosage}</td>
                        
                           
                            <td> <button className="button muted-button" onClick={() => onDeleteMedication(index)}>Delete</button> </td>
                         
                          
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

export default MedicationDelete;