import React, { Component } from "react";
import  modelPatient from "../model/modelPatient";
import PatientDelete from "./PatientDelete";
import patientsListPresenter from "../presenter/patientsListPresenter";
import operationsPresenter from "../presenter/operationsPresenter";



const mapModelStateToComponentState = modelState => ({
    patients: modelState.patients
});

export default class SmartPatientDelete extends Component {
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
            <PatientDelete
              onDeletePatient={operationsPresenter.onDeletePatient}
              patients={this.state.patients} />
        );
    }
}