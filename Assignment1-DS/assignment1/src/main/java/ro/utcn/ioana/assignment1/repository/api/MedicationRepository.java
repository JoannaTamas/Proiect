package ro.utcn.ioana.assignment1.repository.api;

import ro.utcn.ioana.assignment1.model.Medication;

import java.util.List;
import java.util.Optional;

public interface MedicationRepository {

    List<Medication> findAll();

    Medication save(Medication medication);

    void remove(Medication medication);

    Optional<Medication> findById(int id);


}
