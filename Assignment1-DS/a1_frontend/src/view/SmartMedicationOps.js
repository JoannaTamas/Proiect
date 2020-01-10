import MedicationOps from "./MedicationOps";
import operationsPresenter from "../presenter/operationsPresenter";
import React, { Component } from "react";


export default class SmartMedicationOps extends Component {
  

    render() {
        return (
            <MedicationOps
                 onListMedication ={operationsPresenter.onListMedication}
                 onDeleteMedications={operationsPresenter.onDeleteMedications}
                 onAddMedication={operationsPresenter.onAddMedication}
                 />
        );
    }
}