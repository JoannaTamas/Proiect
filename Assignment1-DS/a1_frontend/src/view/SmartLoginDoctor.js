import React, { Component } from "react";
import modelDoctor from "../model/modelDoctor";

import LoginUser from "./LoginUser";
import loginDoctorPresenter from "../presenter/loginDoctorPresenter";

const mapModelStateToComponentState = modelState => ({
    username: modelState.currentDoctor.username,
    password: modelState.currentDoctor.password
});

export default class SmartLoginDoctor extends Component {
    constructor() {
        super();
        this.state = mapModelStateToComponentState( modelDoctor.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        modelDoctor.addListener("change", this.listener);
    }

    componentWillUnmount() {
        modelDoctor.removeListener("change", this.listener);
    }

    render() {
        return (
            <LoginUser
                onLoginDoctor={loginDoctorPresenter.onLoginDoctor}
                onCheck={loginDoctorPresenter.onCheck}
                />
        );
    }
}