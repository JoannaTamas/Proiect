import React, { Component } from "react";
import  modelPatient from "../model/modelPatient";
import PatientsList from "./PatientsList";
import patientsListPresenter from "../presenter/patientsListPresenter";



const mapModelStateToComponentState = modelState => ({
    patients: modelState.patients
});

export default class SmartPatientsList extends Component {
    constructor() {
        super();
        this.state = mapModelStateToComponentState( modelPatient.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        modelPatient.addListener("change", this.listener);
        patientsListPresenter.onInit();
    }

    componentWillUnmount() {
        modelPatient.removeListener("change", this.listener);
    }

    render() {
        return (
            <PatientsList 
               // onViewDetails={questionsListPresenter.onViewDetails}
               // onCreateAppointment={appointmentsListPresenter.onCreateAppointment}
              // onDelete={patientsListPresenter.onDeleteAppointment}
              
              patients={this.state.patients} />
        );
    }
}