package ro.utcn.ioana.assignment1.repository.jpa;

import lombok.RequiredArgsConstructor;
import ro.utcn.ioana.assignment1.model.Doctor;
import ro.utcn.ioana.assignment1.repository.api.DoctorRepository;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
public class HibernateDoctorRepositoy implements DoctorRepository {
    private final EntityManager entityManager;

    @Override
    public Optional<Doctor> findById(int id) {
        return Optional.ofNullable(entityManager.find(Doctor.class, id));
    }

    @Override
    public Optional<Doctor> findByName(String username) {
        /*
        CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Doctor> query = builder.createQuery(Doctor.class);
        Root<Doctor> root = query.from(Doctor.class);
        query.select(root).where
                (builder.equal(root.get("username"), username));
        List<Doctor> u = entityManager.createQuery(query).getResultList();
        if(!u.isEmpty()) return Optional.ofNullable(u.get(0));
        return Optional.empty();
        */
        return Optional.ofNullable(entityManager.find(Doctor.class,username));
    }

    @Override
    public Doctor save(Doctor doctor) {
        if (doctor.getID() == null) {
            entityManager.persist(doctor);
            return doctor;
        } else {
            return entityManager.merge(doctor);
        }
    }
}
