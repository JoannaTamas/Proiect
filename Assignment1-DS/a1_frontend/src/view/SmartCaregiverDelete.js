import React, { Component } from "react";
import  modelCaregiver from "../model/modelCaregiver";
import CaregiverDelete from "./CaregiverDelete";
import operationsPresenter from "../presenter/operationsPresenter";



const mapModelStateToComponentState = modelState => ({
    caregivers: modelState.caregivers
});

export default class SmartCaregiverDelete extends Component {
    constructor() {
        super();
        this.state = mapModelStateToComponentState( modelCaregiver.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        modelCaregiver.addListener("change", this.listener);
        operationsPresenter.onInitCaregiver();
    }

    componentWillUnmount() {
        modelCaregiver.removeListener("change", this.listener);
    }

    render() {
        return (
            <CaregiverDelete
              onDeleteCaregiver={operationsPresenter.onDeleteCaregiver}
              caregivers={this.state.caregivers} />
        );
    }
}