package ro.utcn.ioana.assignment1.repository.api;

import ro.utcn.ioana.assignment1.model.Caregiver;

import java.util.List;
import java.util.Optional;

public interface CaregiverRepository {
    Caregiver save(Caregiver caregiver);

    Optional<Caregiver> findById(int id);

    void remove(Caregiver caregiver);

    List<Caregiver> findAll();

}
