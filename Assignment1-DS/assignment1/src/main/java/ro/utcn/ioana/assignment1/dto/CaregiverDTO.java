package ro.utcn.ioana.assignment1.dto;

import lombok.Data;
import org.springframework.util.CollectionUtils;
import ro.utcn.ioana.assignment1.model.Caregiver;
import ro.utcn.ioana.assignment1.model.Patient;

import java.util.List;
import java.util.stream.Collectors;

@Data
public class CaregiverDTO {
    private Integer id;
    private String name;
    private String birth_date;
    private String gender;
    private String addr;
    private List<Integer> patients;

    public static CaregiverDTO ofEntity(Caregiver caregiver) {
        CaregiverDTO caregiverDTO = new CaregiverDTO();
        caregiverDTO.setId(caregiver.getID());
        caregiverDTO.setName(caregiver.getName());
        caregiverDTO.setBirth_date(caregiver.getBirth_date());
        caregiverDTO.setGender(caregiver.getGender());
        caregiverDTO.setAddr(caregiver.getAddr());
        if (!CollectionUtils.isEmpty(caregiver.getPatients())) {
            caregiverDTO.setPatients(caregiver.getPatients().stream()
                    .map(Patient::getID)
                    .collect(Collectors.toList()));
        }


        return caregiverDTO;

    }
}
