import React, { Component } from "react";
import modelMedication from "../model/modelMedication";
import MedicationCreate from "./MedicationCreate";
import operationsPresenter from "../presenter/operationsPresenter";

const mapModelStateToComponentState = modelState => ({
  
    name: modelState.newMedication.name,
    side_effects: modelState.newMedication.side_effects,
    dosage:modelState.newMedication.dosage
    
});

export default class SmartMedicationCreate extends Component {
    constructor() {
        super();
        this.state = mapModelStateToComponentState( modelMedication.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        modelMedication.addListener("change", this.listener);
    }

    componentWillUnmount() {
        modelMedication.removeListener("change", this.listener);
    }

    render() {
        return (
            <MedicationCreate
                onAddMedication={operationsPresenter.onAddMedication}
                onChangeMedication={operationsPresenter.onChangeMedication}
                
                name={this.state.name}
                side_effects={this.state.side_effects}
                dosage={this.state.dosage}
             
               
                 />
        );
    }
}