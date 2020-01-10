import { EventEmitter } from "events";

class Model extends EventEmitter {
    constructor() {
        super();
        this.state = {
            doctors: [{ 
                username:"doctor",
                password:"doctor"
            }],
                currentDoctor: {
                username: "",
                password: ""
             },
 
        };
    }



  
   changeNewDoctorProperty(property, value) {
    this.state = {
        ...this.state,
        currentDoctor: {
            ...this.state.currentDoctor,
            [property]: value
        }
    };
    this.emit("change", this.state);
}

}

const modelDoctor = new Model();

export default modelDoctor;