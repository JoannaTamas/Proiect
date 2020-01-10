import {EventEmitter} from "events";
import RestClient from "../rest/RestClient";



const client= new RestClient("doctor","password");


class Model extends EventEmitter{
    constructor(){
        super();
        this.state={
            medications: [{
                name: "name1",
                side_effects:"side effects",
                dosage:120
              
            },{
                name: "name2",
                side_effects:"side effects",
                dosage:140
            }],
            newMedication:{
                name: " ",
                side_effects:" ",
                dosage:0.0
            },
            selectedMedicationIndex: -1

        };
    }
    changeSelectedMedicationIndex(index) {
        this.state = {
            ...this.state,
            selectedMedicationIndex: index
        };
        this.emit("change", this.state);
    }

    

changeNewMedicationProperty(property,value) {
    this.state = {
        ...this.state,
        newMedication: {
            ...this.state.newMedication,
            [property]: value
        }
    };
    this.emit("change", this.state);
}


newMedicationList(medications){
    this.state = {
        ...this.state,
        medications:medications
    };
    this.emit("change", this.state);

}



loadMedication(){
    return client.loadAllMedication().then(medications => {
        this.state = { 
            ...this.state, 
            medications: medications
        };
        this.emit("change", this.state);
    })
}

addMedication(name,side_effects,dosage){
    return client.createMedication(name,side_effects,dosage)
    .then(medication=> this.appendMedication(medication));

}


   
appendMedication(medication){
    this.state = {
        ...this.state,
        medications: this.state.medications.concat([medication])
    };
   
    this.emit("change", this.state);

}

deleteMedication(index){
    var id=this.getMedicationId(index);
    return client.deleteMedication(id);
}

getMedicationId(index){
    return this.state.medications[index].id;

}


     

}


const modelMedication = new Model();



export default modelMedication;