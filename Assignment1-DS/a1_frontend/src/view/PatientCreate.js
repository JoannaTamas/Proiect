import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const PatientCreate = ({ name, birth_date,gender,addr,medical_record, onAddPatient, onChange }) => (
    <div>
         <div class="jumbotron jumbotron-fluid">  
        
        <div class="container "> 
        <h1 >Add Patient</h1>



        <div class="form-group">
              <label for="aut">Name:</label>
              <input type="name" class="form-control" id="dat" value={name} 
                onChange={ e => onChange("name", e.target.value) } />
        </div>

        <div class="form-group">
              <label for="aut">Birth Date:</label>
              <input type="name" class="form-control" id="dat" value={birth_date} 
                onChange={ e => onChange("birth_date", e.target.value) } />
        </div>

        <div class="form-group">
            <label for="aut">Gender:</label>
             <input type="gender" class="form-control" id="gender" value={gender} 
                onChange={ e => onChange("gender", e.target.value) } />
        </div>
        <div class="form-group">
            <label for="aut">Address:</label>
             <input type="patient_id_id" class="form-control" id="pat" value={addr} 
                onChange={ e => onChange("addr", e.target.value) } />
        </div>
        <div class="form-group">
            <label for="aut">Medical Record:</label>
             <input type="patient_id_id" class="form-control" id="pat" value={medical_record} 
                onChange={ e => onChange("medical_record", e.target.value) } />
        </div>

            <button type="button" class="btn btn-primary" onClick={onAddPatient}>Create!</button>
        </div>
    </div>
    </div>
);

export default PatientCreate;