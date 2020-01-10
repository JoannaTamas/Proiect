import React, { Component } from "react";
import  modelCaregiver from "../model/modelCaregiver";
import CaregiverList from "./CaregiverList";
import operationsPresenter from "../presenter/operationsPresenter";



const mapModelStateToComponentState = modelState => ({
    caregivers: modelState.caregivers
});

export default class SmarCaregiverList extends Component {
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
            <CaregiverList 
               // onViewDetails={questionsListPresenter.onViewDetails}
               // onCreateAppointment={appointmentsListPresenter.onCreateAppointment}
              // onDelete={patientsListPresenter.onDeleteAppointment}
              
              caregivers={this.state.caregivers} />
        );
    }
}