import DoctorOperations from "./DoctorOperations";
import operationsPresenter from "../presenter/operationsPresenter";
import React, { Component } from "react";


export default class SmartDoctorOperations extends Component {
  

    render() {
        return (
            <DoctorOperations
               
                 onPatientOps= {operationsPresenter.onPatientOps }
                 onMedicationOps={operationsPresenter.onMedicationOps}
                 onCaregiverOps={operationsPresenter.onCaregiverOps}

                
                
                 />
        );
    }
}