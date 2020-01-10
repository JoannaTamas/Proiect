package ro.utcn.ioana.assignment1.repository.jpa;

import lombok.RequiredArgsConstructor;
import ro.utcn.ioana.assignment1.model.Caregiver;
import ro.utcn.ioana.assignment1.repository.api.CaregiverRepository;


import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
public class HibernateCaregiverRepository implements CaregiverRepository {
    private final EntityManager entityManager;

    @Override
    public Caregiver save(Caregiver caregiver) {
        if (caregiver.getID() == null) {
            entityManager.persist(caregiver);
            return caregiver;
        } else {
            return entityManager.merge(caregiver);
        }
    }

    @Override
    public Optional<Caregiver> findById(int id) {
        return Optional.ofNullable(entityManager.find(Caregiver.class, id));
    }

    @Override
    public void remove(Caregiver caregiver) {
        entityManager.remove(caregiver);

    }

    @Override
    public List<Caregiver> findAll() {
        CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Caregiver> query = builder.createQuery(Caregiver.class);
        query.select(query.from(Caregiver.class));
        return entityManager.createQuery(query).getResultList();
    }
}

