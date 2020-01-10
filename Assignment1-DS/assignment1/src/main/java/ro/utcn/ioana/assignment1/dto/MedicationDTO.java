package ro.utcn.ioana.assignment1.dto;

import lombok.Data;
import ro.utcn.ioana.assignment1.model.Medication;

@Data
public class MedicationDTO {
    private Integer id;
    private String name;
    private String side_effects;
    private Double dosage;

    public static MedicationDTO ofEntity(Medication medication) {
        MedicationDTO medicationDTO = new MedicationDTO();
        medicationDTO.setId(medication.getID());
        medicationDTO.setName(medication.getName());
        medicationDTO.setSide_effects(medication.getSide_effects());
        medicationDTO.setDosage(medication.getDosage());

        return medicationDTO;

    }
}
