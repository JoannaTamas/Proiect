import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const CaregiverCreate = ({ name, birth_date,gender,addr,patient_list, onAddCaregiver, onChangeCaregiver }) => (
    <div>
         <div class="jumbotron jumbotron-fluid">  
        
        <div class="container "> 
        <h1 >Add Caregiver</h1>



        <div class="form-group">
              <label for="aut">Name:</label>
              <input type="name" class="form-control" id="dat" value={name} 
               onChange={ e => onChangeCaregiver("name", e.target.value) } />
        </div>

        <div class="form-group">
              <label for="aut">Birth Date:</label>
              <input type="name" class="form-control" id="dat" value={birth_date} 
                onChange={ e => onChangeCaregiver("birth_date", e.target.value) } />
        </div>

        <div class="form-group">
            <label for="aut">Gender:</label>
             <input type="gender" class="form-control" id="gender" value={gender} 
                onChange={ e => onChangeCaregiver("gender", e.target.value) } />
        </div>
        <div class="form-group">
            <label for="aut">Address:</label>
             <input type="addr" class="form-control" id="pat" value={addr} 
                onChange={ e => onChangeCaregiver("addr", e.target.value) } />
        </div>
        <div class="form-group">
            <label for="aut">Patient List:</label>
             <input type="patient_list" class="form-control" id="pat" value={patient_list} 
                onChange={ e => onChangeCaregiver("patient_list", e.target.value) } />
        </div>

            <button type="button" class="btn btn-primary" onClick={onAddCaregiver}>Create!</button>
        </div>
    </div>
    </div>
);

export default CaregiverCreate;