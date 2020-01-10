package ro.utcn.ioana.assignment1.dto;


import lombok.Data;
import org.springframework.util.CollectionUtils;
import ro.utcn.ioana.assignment1.model.Patient;


import java.util.List;
import java.util.stream.Collectors;

@Data
public class PatientDTO {
    private Integer id;
    private String name;
    private String birth_date;
    private String gender;
    private String addr;
    private String medical_record;

    public static PatientDTO ofEntity(Patient patient) {
        PatientDTO patientDTO = new PatientDTO();
        patientDTO.setId(patient.getID());
        patientDTO.setName(patient.getName());
        patientDTO.setBirth_date(patient.getBirth_date());
        patientDTO.setGender(patient.getGender());
        patientDTO.setAddr(patient.getAddr());
        patientDTO.setMedical_record(patient.getMedical_record());

        return patientDTO;

    }

}


