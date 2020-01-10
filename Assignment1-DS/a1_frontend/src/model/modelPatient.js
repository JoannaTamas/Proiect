import {EventEmitter} from "events";
import RestClient from "../rest/RestClient";



const client= new RestClient("doctor","password");


class Model extends EventEmitter{
    constructor(){
        super();
        this.state={
            patients: [{
                name: "name1",
                birth_date:"2019-02-09",
                gender:"F",
                addr:"addr1",
                medical_record:"med record1"
            },{
                name: "name2",
                birth_date:"2018-02-09",
                gender:"F",
                addr:"addr2",
                medical_record:"med record2"
            }],
            newPatient:{
                name: "",
                birth_date:"",
                gender:"",
                addr:"",
                medical_record:"",
               
            },
            selectedPatientIndex: -1

        };
    }
    changeSelectedPatientsIndex(index) {
        this.state = {
            ...this.state,
            selectedPatientIndex: index
        };
        this.emit("change", this.state);
    }

    

changeNewPatientProperty(property,value) {
    this.state = {
        ...this.state,
        newPatient: {
            ...this.state.newPatient,
            [property]: value
        }
    };
    this.emit("change", this.state);
}


newPatientList(patients){
    this.state = {
        ...this.state,
        patients:patients
    };
    this.emit("change", this.state);

}

/*
deletePatient(id){
    this.state = {
        ...this.state,
        patients: this.state.patients.splice(id, 1)
    };
    this.emit("change", this.state);
}


*/
loadPatients(){
    return client.loadAllPatients().then(patients => {
        this.state = { 
            ...this.state, 
            patients: patients
        };
        this.emit("change", this.state);
    })
}



addPatient(name,birth_date,gender,addr,medical_record){
    return client.createPatient(name,birth_date,gender,addr,medical_record)
    .then(patient=> this.appendPatient(patient));

}


deletePatient(index){
    var id=this.getPatientId(index);
    return client.deletePatient(id);
}

getPatientId(index){
    return this.state.patients[index].id;

}



appendPatient(patient){
    this.state = {
        ...this.state,
        patients: this.state.patients.concat([patient])
    };
   
    this.emit("change", this.state);

}


editPatient(medical_record, index){
    var id = this.getPatientId(index);

    return client.editPatient(medical_record, id).then(patient=>{
        this.setState = {
            ...this.state[index],
            medical_record: medical_record
        }
});
} 


}



const modelPatient = new Model();



export default modelPatient;