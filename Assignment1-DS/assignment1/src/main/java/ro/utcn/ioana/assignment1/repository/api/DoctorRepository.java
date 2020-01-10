package ro.utcn.ioana.assignment1.repository.api;

import ro.utcn.ioana.assignment1.model.Doctor;

import java.util.Optional;

public interface DoctorRepository {
    Optional<Doctor> findById(int id);
    Optional <Doctor> findByName(String username);
    Doctor save(Doctor doctor);

}
