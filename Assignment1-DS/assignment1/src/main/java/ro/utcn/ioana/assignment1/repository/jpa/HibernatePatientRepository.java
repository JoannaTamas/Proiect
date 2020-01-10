package ro.utcn.ioana.assignment1.repository.jpa;

import lombok.RequiredArgsConstructor;
import ro.utcn.ioana.assignment1.model.Patient;
import ro.utcn.ioana.assignment1.repository.api.PatientRepository;


import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import java.util.List;
import java.util.Optional;


@RequiredArgsConstructor

public class HibernatePatientRepository implements PatientRepository {
    private final EntityManager entityManager;

    @Override
    public List<Patient> findAll() {
        CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Patient> query = builder.createQuery(Patient.class);
        query.select(query.from(Patient.class));

        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public Patient save(Patient patient) {
        if (patient.getID() == null) {
            entityManager.persist(patient);
            return patient;
        } else {
            return entityManager.merge(patient);
        }
    }

    @Override
    public void remove(Patient patient) {
        entityManager.remove(patient);

    }

    @Override
    public Optional<Patient> findById(int id) {
        return Optional.ofNullable(entityManager.find(Patient.class, id));
    }
}
