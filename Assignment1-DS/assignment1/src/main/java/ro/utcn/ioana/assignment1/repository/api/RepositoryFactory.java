package ro.utcn.ioana.assignment1.repository.api;

import ro.utcn.ioana.assignment1.model.Caregiver;
import ro.utcn.ioana.assignment1.model.Medication;

public interface RepositoryFactory {
    PatientRepository createPatientRepository();

    MedicationRepository createMedicationRepository();

    CaregiverRepository createCaregiverRepository();

    DoctorRepository createDoctorRepository();

}
