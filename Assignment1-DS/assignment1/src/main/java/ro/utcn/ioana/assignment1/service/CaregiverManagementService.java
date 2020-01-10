package ro.utcn.ioana.assignment1.service;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ro.utcn.ioana.assignment1.dto.CaregiverDTO;
import ro.utcn.ioana.assignment1.exceptionController.CaregiverNotFoundException;
import ro.utcn.ioana.assignment1.model.Caregiver;
import ro.utcn.ioana.assignment1.repository.api.CaregiverRepository;
import ro.utcn.ioana.assignment1.repository.api.RepositoryFactory;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CaregiverManagementService {
    private final RepositoryFactory repositoryFactory;

    @Transactional
    public List<CaregiverDTO> listCaregiverDTO() {

        return repositoryFactory.createCaregiverRepository().findAll().stream()
                .map(CaregiverDTO::ofEntity)
                .collect(Collectors.toList());
    }

    @Transactional
    public CaregiverDTO addCaregiverDTO(CaregiverDTO dto) {
        Caregiver caregiver = new Caregiver();

        caregiver.setID(dto.getId());
        caregiver.setName(dto.getName());
        caregiver.setBirth_date(dto.getBirth_date());
        caregiver.setAddr(dto.getAddr());
        caregiver.setGender(dto.getGender());


        CaregiverDTO output = CaregiverDTO.ofEntity(repositoryFactory.createCaregiverRepository().save(caregiver));
        //  eventPublisher.publishEvent(new PatientCreatedEvent(output));
        return output;

    }

    @Transactional
    public void removeCaregiver(int id) {
        CaregiverRepository repository = repositoryFactory.createCaregiverRepository();
        Caregiver caregiver = repository.findById(id).orElseThrow(CaregiverNotFoundException::new);
        repository.remove(caregiver);

    }


}
