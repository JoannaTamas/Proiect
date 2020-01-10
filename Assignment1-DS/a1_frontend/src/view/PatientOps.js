import React from "react";
import 'bootstrap/dist/css/bootstrap.css';


const PatientOps = ({title1, onListPatients,onDeletePatients,onAddPatient,onEditPatient}) => (
    <div class="col-sm-6 offset-sm-3 text-center">
    <div class="jumbotron jumbotron-fluid">  

   
    <div class="container ">   
    <div class="alert alert-success ">
   
            Login successfully
    </div>
    <div class="btn-group-vertical">
   
        <br />
        <br />
        
        <h2>{ title1 || "Choose Operation" }</h2>
       
        <button type="button" class="btn btn-outline-primary" onClick={onListPatients}>Display Patients</button>
        <button type="button" class="btn btn-outline-primary" onClick={onDeletePatients}>Delete Patients</button>
        <button type="button" class="btn btn-outline-primary" onClick={onAddPatient}>Create Patient</button>
        <button type="button" class="btn btn-outline-primary" onClick={onEditPatient}>Edit Patient</button>

        <br />
        <br />
        
    </div>
    </div>
    </div>
    </div>
);

export default PatientOps;