import CaregiverOps from "./CaregiverOps";
import operationsPresenter from "../presenter/operationsPresenter";
import React, { Component } from "react";


export default class SmartCaregiverOps extends Component {
  

    render() {
        return (
            < CaregiverOps
                 onListCaregiver ={operationsPresenter.onListCaregiver}
                 onDeleteCaregiver={operationsPresenter.onDeleteCaregiver}
                 onAddCaregiver={operationsPresenter.onAddCaregiver}
                 />
        );
    }
}