import React, { Component } from "react";
import modelCaregiver from "../model/modelCaregiver";
import CaregiverCreate from "./CaregiverCreate";
import operationsPresenter from "../presenter/operationsPresenter";

const mapModelStateToComponentState = modelState => ({
  
    name: modelState.newCaregiver.name,
    birth_date: modelState.newCaregiver.birth_date,
    gender:modelState.newCaregiver.gender,
    addr:modelState.newCaregiver.addr,
    patient_list:modelState.newCaregiver.patient_list
    
    


});

export default class SmartCaregiverCreate extends Component {
    constructor() {
        super();
        this.state = mapModelStateToComponentState( modelCaregiver.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        modelCaregiver.addListener("change", this.listener);
    }

    componentWillUnmount() {
        modelCaregiver.removeListener("change", this.listener);
    }

    render() {
        return (
            <CaregiverCreate
                onAddCaregiver={operationsPresenter.onAddCaregiver}
                onChangeCaregiver={operationsPresenter.onChangeCaregiver}
                
                name={this.state.name}
                birth_date={this.state.birth_date}
                gender={this.state.gender}
                addr={this.state.addr}
               patient_list={this.state.patient_list}
               
                 />
        );
    }
}