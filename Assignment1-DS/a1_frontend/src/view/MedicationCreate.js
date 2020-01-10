import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const MedicationCreate = ({ name, side_effects,dosage, onAddMedication, onChangeMedication }) => (
    <div>
         <div class="jumbotron jumbotron-fluid">  
        
        <div class="container "> 
        <h1 >Add Medication</h1>



        <div class="form-group">
              <label for="aut">Name:</label>
              <input type="name" class="form-control" id="dat" value={name} 
                onChange={ e => onChangeMedication("name", e.target.value) } />
        </div>

        <div class="form-group">
              <label for="aut">Side effects:</label>
              <input type="name" class="form-control" id="dat" value={side_effects} 
                onChange={ e => onChangeMedication("side_effects", e.target.value) } />
        </div>

        <div class="form-group">
            <label for="aut">Dosage:</label>
             <input type="aut" class="form-control" id="gender" value={dosage} 
                onChange={ e => onChangeMedication("dosage", e.target.value) } />
        </div>
       

            <button type="button" class="btn btn-primary" onClick={onAddMedication}>Create!</button>
        </div>
    </div>
    </div>
);

export default MedicationCreate;