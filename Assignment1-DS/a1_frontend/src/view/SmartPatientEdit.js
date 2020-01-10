import React, { Component } from "react";
import  modelPatient from "../model/modelPatient";
import PatientEdit from "./PatientEdit";
import patientsListPresenter from "../presenter/patientsListPresenter";
import operationsPresenter from "../presenter/operationsPresenter";



const mapModelStateToComponentState = modelState => ({
    patients: modelState.patients
});

export default class SmartPatientEdit extends Component {
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
            <PatientEdit
              onEdit={operationsPresenter.onEdit}
              onChange={operationsPresenter.onChange}
              patients={this.state.patients} />
        );
    }
}