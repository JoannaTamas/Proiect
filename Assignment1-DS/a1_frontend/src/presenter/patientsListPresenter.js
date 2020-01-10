import modelPatient from "../model/modelPatient";

class PatientsListPresenter{


    onInit(){
        modelPatient.loadPatients();
    }

    
}

const patientsListPresenter=new PatientsListPresenter();
export default patientsListPresenter;