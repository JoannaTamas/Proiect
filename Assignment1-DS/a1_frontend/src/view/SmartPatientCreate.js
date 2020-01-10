import React, { Component } from "react";
import modelPatient from "../model/modelPatient";
import PatientCreate from "./PatientCreate";
import operationsPresenter from "../presenter/operationsPresenter";

const mapModelStateToComponentState = modelState => ({
  
    name: modelState.newPatient.name,
    birth_date: modelState.newPatient.birth_date,
    gender:modelState.newPatient.gender,
    addr:modelState.newPatient.addr,
    medical_record:modelState.newPatient.medical_record
    
    


});

export default class SmartPatientCreate extends Component {
    constructor() {
        super();
        this.state = mapModelStateToComponentState( modelPatient.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        modelPatient.addListener("change", this.listener);
    }

    componentWillUnmount() {
        modelPatient.removeListener("change", this.listener);
    }

    render() {
        return (
            <PatientCreate
                onAddPatient={operationsPresenter.onAddPatient}
                onChange={operationsPresenter.onChange}
                
                name={this.state.name}
                birth_date={this.state.birth_date}
                gender={this.state.gender}
                addr={this.state.addr}
                medical_record={this.state.medical_record}
               
                 />
        );
    }
}