import PatientOps from "./PatientOps";
import operationsPresenter from "../presenter/operationsPresenter";
import React, { Component } from "react";


export default class SmartPatientOps extends Component {
  

    render() {
        return (
            <PatientOps
                 onListPatients  ={operationsPresenter.onListPatients}
                 onDeletePatients={operationsPresenter.onDeletePatients}
                 onEditPatient={operationsPresenter.onEditPatient}
                 onAddPatient={operationsPresenter.onAddPatient}
                 />
        );
    }
}