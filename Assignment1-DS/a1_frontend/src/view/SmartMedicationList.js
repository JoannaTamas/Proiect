import React, { Component } from "react";
import  modelMedication from "../model/modelMedication";
import MedicationList from "./MedicationList";
import medicationListPresenter from "../presenter/medicationListPresenter";



const mapModelStateToComponentState = modelState => ({
    medications: modelState.medications
});

export default class SmartMedicationList extends Component {
    constructor() {
        super();
        this.state = mapModelStateToComponentState( modelMedication.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        modelMedication.addListener("change", this.listener);
        medicationListPresenter.onInit();
    }

    componentWillUnmount() {
        modelMedication.removeListener("change", this.listener);
    }

    render() {
        return (
            <MedicationList 
               // onViewDetails={questionsListPresenter.onViewDetails}
               // onCreateAppointment={appointmentsListPresenter.onCreateAppointment}
              // onDelete={operationsPresenter.onDeleteAppointment}
              
              medications={this.state.medications} />
        );
    }
}