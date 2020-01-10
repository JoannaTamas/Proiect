import modelPatient from "../model/modelPatient";
import modelCaregiver from "../model/modelCaregiver";
import modelMedication from "../model/modelMedication";


class OperationsPresenter{
    onPatientOps(){
        window.location.assign("#/patient-ops");
    }

    onMedicationOps(){
        window.location.assign("#/medication-ops");
    }

    onCaregiverOps(){
        window.location.assign("#/caregiver-ops");
    }
    ////////

    
    onAddPatient(){
        modelPatient.addPatient(
            modelPatient.state.newPatient.name,
            modelPatient.state.newPatient.birth_date,
            modelPatient.state.newPatient.gender,
            modelPatient.state.newPatient.addr,
            modelPatient.state.newPatient.medical_record

        
            );
        modelPatient.changeNewPatientProperty("name", "");
        modelPatient.changeNewPatientProperty("birth_date ",  "");
        modelPatient.changeNewPatientProperty("gender ",   "");
        modelPatient.changeNewPatientProperty("addr ",   "");
        modelPatient.changeNewPatientProperty("medical_record ",   "");



        window.location.assign("#/patient-create");
    }
    onAddMedication(){
        modelMedication.addMedication(
            modelMedication.state.newMedication.name,
            modelMedication.state.newMedication.side_effects,
            modelMedication.state.newMedication.dosage
        
            );
        modelMedication.changeNewMedicationProperty("name", "");
        modelMedication.changeNewMedicationProperty("side_effects ",  "");
        modelMedication.changeNewMedicationProperty("dosage ",   "");
      

        window.location.assign("#/medication-create");

    }
    onAddCaregiver(){
        modelCaregiver.addCaregiver(
            modelCaregiver.state.newCaregiver.name,
            modelCaregiver.state.newCaregiver.birth_date,
            modelCaregiver.state.newCaregiver.gender,
            modelCaregiver.state.newCaregiver.addr,
            modelCaregiver.state.newCaregiver.patient_list

        
            );

            modelCaregiver.changeNewCaregiverProperty("name", "");
            modelCaregiver.changeNewCaregiverProperty("birth_Date ",  "");
            modelCaregiver.changeNewCaregiverProperty("gender ",   "");
            modelCaregiver.changeNewCaregiverProperty("addr ",   "");
            modelCaregiver.changeNewCaregiverProperty("patient_list ",   "");
      

        window.location.assign("#/caregiver-create");


    }


///////
    onListPatients(){
        window.location.assign("#/patients-list");
    }
    onListMedication(){
        window.location.assign("#/medication-list");
    }
    onListCaregiver(){
        window.location.assign("#/caregiver-list");
    }
    

//////////

    onDeletePatients(){
   
      window.location.assign("#/patients-delete" );
    
    }
  onDeletePatient(index){
        modelPatient.deletePatient(index)
        .then(() =>{
          window.location.assign("#/patients-delete" + index);
        });
      }
      

      onDeleteMedications(){
          window.location.assign("#/medication-delete");
      }
    onDeleteMedication(index){
        modelMedication.deleteMedication(index)
        .then(() =>{
          window.location.assign("#/medication-delete" + index);
        });
      }

      
    onDeleteCaregiver(index){
        modelCaregiver.deleteCaregiver(index)
        .then(() =>{
          window.location.assign("#/caregiver-list" + index);
        });
      }

  

    onChange(property, value) {
        modelPatient.changeNewPatientProperty(property, value);
    }
    onChangeMedication(property, value) {
        modelMedication.changeNewMedicationProperty(property, value);
    }
    onChangeCaregiver(property, value) {
        modelCaregiver.changeNewCaregiverProperty(property, value);
    }

    onInitCaregiver(){
        modelCaregiver.loadCaregiver();
    }

    //////////////////
    onEdit(id) {
        modelPatient.editPatient(modelPatient.state.newPatient.medical_record,id).then(() =>{
          window.location.assign("#/edit-list" );
        });
    }

   
    onEditPatient(){
        
            window.location.assign("#/edit-list" );
       
    }




}

const operationsPresenter=new OperationsPresenter();
export default operationsPresenter;