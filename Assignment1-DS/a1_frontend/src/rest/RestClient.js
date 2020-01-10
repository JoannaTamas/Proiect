const BASE_URL = "http://localhost:8080";

export default class RestClient {
    constructor(username, password) {
        this.authorization = "Basic " + btoa(username + ":" + password);
    }

    //LOAD OPERATION

    loadAllPatients() {
        return fetch(BASE_URL + "/patients", {
            method: "GET",
            headers: {
                "Authorization": this.authorization
            }
        }).then(response => response.json());
    }

    loadAllMedication() {
        return fetch(BASE_URL + "/medication", {
            method: "GET",
            headers: {
                "Authorization": this.authorization
            }
        }).then(response => response.json());
    }


    loadAllCaregivers() {
        return fetch(BASE_URL + "/caregiver", {
            method: "GET",
            headers: {
                "Authorization": this.authorization
            }
        }).then(response => response.json());
    }



    //CREATE OPERATION

    createPatient(name,birth_date,gender,addr,medical_record) {
        return fetch(BASE_URL + "/patients", {
            method: "POST", 
            body: JSON.stringify({
                id:null,
                name:name,
                birth_date:birth_date,
                gender:gender,
                addr:addr,
                medical_record:medical_record
            }),
            headers: {
                "Authorization": this.authorization,
                "Content-Type": "application/json"
            }
        }).then(response => response.json());
    }


    
    
    editPatient(medical_record,id) {
        return fetch(BASE_URL + "/patients/" + id, {
            method: "PUT",
            headers: {
                "Authorization": this.authorization,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id:id,
                name:null ,
                birth_date: null,
                gender:null,
                addr:null,
                medical_record:medical_record
            })
        }).then(response => response.json());
    }

 



    createMedication(name,side_effects,dosage) {
        return fetch(BASE_URL + "/medication", {
            method: "POST", 
            body: JSON.stringify({
                id:null,
                name:name,
                side_effects:side_effects,
                dosage:dosage

              
            }),
            headers: {
                "Authorization": this.authorization,
                "Content-Type": "application/json"
            }
        }).then(response => response.json());
    }

    createCaregiver(name,birth_date,gender,addr,patient_list) {
        return fetch(BASE_URL + "/caregiver", {
            method: "POST", 
            body: JSON.stringify({
                id:null,
                name:name,
                birth_date:birth_date,
                gender:gender,
                addr:addr,
                patient_list:patient_list
            }),
            headers: {
                "Authorization": this.authorization,
                "Content-Type": "application/json"
            }
        }).then(response => response.json());
    }





    //DELETE OPERATION    

    deletePatient(id){
        return fetch(BASE_URL + "/patients/"+ id, {
            method: "DELETE",
            headers: {
                "Authorization": this.authorization,
                "Content-Type": "application/json"
            }
        }).then(response => response.json());

    }

    deleteMedication(id){
        return fetch(BASE_URL + "/medication/"+ id, {
            method: "DELETE",
            headers: {
                "Authorization": this.authorization,
                "Content-Type": "application/json"
            }
        }).then(response => response.json());

    }

    deleteCaregiver(id){
        return fetch(BASE_URL + "/caregiver/"+ id, {
            method: "DELETE",
            headers: {
                "Authorization": this.authorization,
                "Content-Type": "application/json"
            }
        }).then(response => response.json());

    }

 
  
   
    

}