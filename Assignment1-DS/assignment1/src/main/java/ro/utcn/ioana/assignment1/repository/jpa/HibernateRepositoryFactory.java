package ro.utcn.ioana.assignment1.repository.jpa;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Component;
import ro.utcn.ioana.assignment1.repository.api.*;


import javax.persistence.EntityManager;

@Component
@RequiredArgsConstructor
@ConditionalOnProperty(name = "assignment1.repository-type", havingValue = "JPA")
public class HibernateRepositoryFactory implements RepositoryFactory {
    private final EntityManager entityManager;

    @Override
    public PatientRepository createPatientRepository() {
        return new HibernatePatientRepository(entityManager);
    }

    @Override
    public MedicationRepository createMedicationRepository() {
        return new HibernateMedicationRepository(entityManager);
    }

    @Override
    public CaregiverRepository createCaregiverRepository() {
        return new HibernateCaregiverRepository(entityManager);
    }

    @Override
    public DoctorRepository createDoctorRepository() {
        return new HibernateDoctorRepositoy(entityManager);
    }
}
