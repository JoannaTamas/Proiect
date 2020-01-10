package ro.utcn.ioana.assignment1.service;


import lombok.RequiredArgsConstructor;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;

import ro.utcn.ioana.assignment1.dto.MedicationDTO;
import ro.utcn.ioana.assignment1.exceptionController.MedicationNotFoundException;
import ro.utcn.ioana.assignment1.model.Medication;
import ro.utcn.ioana.assignment1.model.Patient;
import ro.utcn.ioana.assignment1.repository.api.MedicationRepository;
import ro.utcn.ioana.assignment1.repository.api.RepositoryFactory;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MedicationManagementSevice {
    private final RepositoryFactory repositoryFactory;
    private final ApplicationEventPublisher eventPublisher;

    @Transactional
    public List<MedicationDTO> listMedicationDTO() {

        return repositoryFactory.createMedicationRepository().findAll().stream()
                .map(MedicationDTO::ofEntity)
                .collect(Collectors.toList());
    }


    @Transactional
    public MedicationDTO addMedicationDTO(MedicationDTO dto) {
        Medication medication = new Medication();
        medication.setID(dto.getId());
        medication.setName(dto.getName());
        medication.setSide_effects(medication.getSide_effects());
        medication.setDosage(medication.getDosage());


        MedicationDTO output = MedicationDTO.ofEntity(repositoryFactory.createMedicationRepository().save(medication));
        //  eventPublisher.publishEvent(new PatientCreatedEvent(output));
        return output;

    }


    @Transactional
    public void removeMedication(int id) {
        MedicationRepository repository = repositoryFactory.createMedicationRepository();
        Medication medication = repository.findById(id).orElseThrow(MedicationNotFoundException::new);
        repository.remove(medication);

    }


}
