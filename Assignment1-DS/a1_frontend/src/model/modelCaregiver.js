import {EventEmitter} from "events";
import RestClient from "../rest/RestClient";



const client= new RestClient("doctor","password");


class Model extends EventEmitter{
    constructor(){
        super();
        this.state={
            caregivers: [{
                name: "name1",
                birth_date:"bithdate1",
                gender:"F",
                addr:"address1",
                patient_list:[1,2]
              
            },{
                name: "name2",
                birth_date:"bithdate2",
                gender:"F",
                addr:"address2",
                patient_list:[1,2]
            }],
            newCaregiver:{
                name: "",
                birth_date:"",
                gender:"",
                addr:"",
                patient_list:[]
            },
            selectedCaregiverIndex: -1

        };
    }
    changeSelectedCaregiverIndex(index) {
        this.state = {
            ...this.state,
            selectedCaregiverIndex: index
        };
        this.emit("change", this.state);
    }

    

changeNewCaregiverProperty(property,value) {
    this.state = {
        ...this.state,
        newCaregiver: {
            ...this.state.newCaregiver,
            [property]: value
        }
    };
    this.emit("change", this.state);
}


newCaregiverList(caregivers){
    this.state = {
        ...this.state,
        caregivers:caregivers
    };
    this.emit("change", this.state);

}



loadCaregiver(){
    return client.loadAllCaregivers().then(caregivers => {
        this.state = { 
            ...this.state, 
            caregivers: caregivers
        };
        this.emit("change", this.state);
    })
}



addCaregiver(name,birth_date,gender,addr,patient_list){
    return client.createCaregiver(name,birth_date,gender,addr,patient_list)
    .then(caregiver=> this.appendCaregiver(caregiver));

}

appendCaregiver(caregiver){
    this.state = {
        ...this.state,
        caregivers: this.state.caregivers.concat([caregiver])
    };
   
    this.emit("change", this.state);

}

deleteCaregiver(index){
    var id=this.getCaregiverId(index);
    return client.deleteCaregiver(id);
}

getCaregiverId(index){
    return this.state.caregivers[index].id;

}
     

}


const modelCaregiver = new Model();



export default modelCaregiver;