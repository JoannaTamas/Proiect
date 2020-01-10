import modelDoctor from "../model/modelDoctor";

class CreateDoctorPresenter {

    onLoginDoctor() {

     for (let i=0; i<modelDoctor.state.doctors.length; i++) {
        if( modelDoctor.state.doctors[i].username === modelDoctor.state.currentDoctor.username)
                window.location.assign("#/doctor-operations");          
    }


    }


    onCheck(property, value) {
        modelDoctor.changeNewDoctorProperty(property, value);
    }

}

const loginDoctorPresenter = new CreateDoctorPresenter();

export default loginDoctorPresenter;