package ro.utcn.ioana.assignment1.repository.jpa;

import lombok.RequiredArgsConstructor;
import ro.utcn.ioana.assignment1.model.Medication;
import ro.utcn.ioana.assignment1.repository.api.MedicationRepository;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
public class HibernateMedicationRepository implements MedicationRepository {
    private final EntityManager entityManager;

    @Override
    public List<Medication> findAll() {
        CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Medication> query = builder.createQuery(Medication.class);
        query.select(query.from(Medication.class));
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public Medication save(Medication medication) {
        if (medication.getID() == null) {
            entityManager.persist(medication);
            return medication;
        } else {
            return entityManager.merge(medication);
        }
    }

    @Override
    public void remove(Medication medication) {
        entityManager.remove(medication);
    }

    @Override
    public Optional<Medication> findById(int id) {
        return Optional.ofNullable(entityManager.find(Medication.class, id));
    }
}
