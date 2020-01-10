import React, { Component } from "react";
import  modelMedication from "../model/modelMedication";
import MedicationDelete from "./MedicationDelete";
import operationsPresenter from "../presenter/operationsPresenter";
import medicationListPresenter from "../presenter/medicationListPresenter";




const mapModelStateToComponentState = modelState => ({
    medications: modelState.medications
});

export default class SmartMedicationDelete extends Component {
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
            <MedicationDelete
             // onDeleteMedication={operationsPresenter.onDeleteMedication}
             onDeleteMedication={operationsPresenter.onDeleteMedication}
              medications={this.state.medications} />
        );
    }
}