import React from "react";

const MedicationList = ({ medications }) => (
    
    <div>
        <div class="jumbotron jumbotron-fluid">  
   
        <div class="container "> 
         <h1 >All the medication</h1>

       
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
                    medications.map(( medication, index) => (
                        <tr class="table-light" key={index}>
                            <td>{medication.name}</td>
                            <td>{medication.side_effects}</td>
                            <td>{medication.dosage}</td>
                            
 
                          
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

export default MedicationList;