import React from 'react';
import './App.css';

import { HashRouter, Switch, Route } from "react-router-dom";
import SmartLoginDoctor from './view/SmartLoginDoctor';
import SmartDoctorOperations from './view/SmartDoctorOperations';

import SmartPatientsList from './view/SmartPatientsList';
import SmartPatientOps from './view/SmartPatientOps';
import SmartPatientDelete from './view/SmartPatientDelete';
import SmartPatientCreate from './view/SmartPatientCreate';
import SmartPatientEdit from './view/SmartPatientEdit';


import SmartMedicationOps from './view/SmartMedicationOps';
import SmartMedicationList from './view/SmartMedicationList';
import SmartMedicationDelete from './view/SmartMedicationDelete';
import SmartMedicationCreate from './view/SmartMedicationCreate';

import SmartCaregiverList from './view/SmartCaregiverList';
import SmartCaregiverOps from './view/SmartCaregiverOps';
import SmartCaregiverDelete from './view/SmartCaregiverDelete';
import SmartCaregiverCreate from './view/SmartCaregiverCreate';


const App = () => (
  <div className="App">
    <HashRouter>
      <Switch>
        <Route exact={true} component={SmartLoginDoctor} path="/" />
        <Route exact={true} component={SmartDoctorOperations} path="/doctor-operations" />


       
        <Route exact={true} component={SmartPatientOps} path="/patient-ops" />
        <Route exact={true} component={SmartPatientDelete} path="/patients-delete" />
        <Route exact={true} component={SmartPatientCreate} path="/patient-create" />
        <Route exact={true} component={SmartPatientsList} path="/patients-list" />
        <Route exact={true} component={SmartPatientEdit} path="/edit-list" />


        <Route exact={true} component={SmartMedicationOps} path="/medication-ops" />
        <Route exact={true} component={SmartMedicationList} path="/medication-list" />
        <Route exact={true} component={SmartMedicationDelete} path="/medication-delete" />
        <Route exact={true} component={SmartMedicationCreate} path="/medication-create" />

        
        <Route exact={true} component={SmartCaregiverOps} path="/caregiver-ops" />
        <Route exact={true} component={SmartCaregiverList} path="/caregiver-list" />
        <Route exact={true} component={SmartCaregiverDelete} path="/caregiver-newlist" />
        <Route exact={true} component={SmartCaregiverCreate} path="/caregiver-create" />







       
        
      </Switch>
    </HashRouter>
  </div>
);


export default App;