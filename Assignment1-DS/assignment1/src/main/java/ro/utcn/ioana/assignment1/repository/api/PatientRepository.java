package ro.utcn.ioana.assignment1.repository.api;

import ro.utcn.ioana.assignment1.model.Patient;

import java.util.List;
import java.util.Optional;

public interface PatientRepository {

    List<Patient> findAll();

    Patient save(Patient save);

    void remove(Patient remove);

    Optional<Patient> findById(int id);
}
