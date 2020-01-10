package ro.utcn.ioana.assignment1.Controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.event.EventListener;

import org.springframework.web.bind.annotation.*;
import ro.utcn.ioana.assignment1.dto.CaregiverDTO;
import ro.utcn.ioana.assignment1.dto.MedicationDTO;
import ro.utcn.ioana.assignment1.dto.PatientDTO;
import ro.utcn.ioana.assignment1.service.CaregiverManagementService;
import ro.utcn.ioana.assignment1.service.MedicationManagementSevice;
import ro.utcn.ioana.assignment1.service.PatientManagementService;


import java.util.List;


@RestController
@RequiredArgsConstructor
public class Controller {
    // private final Scanner scanner = new Scanner(System.in);
    private final PatientManagementService pms;
    private final MedicationManagementSevice mms;
    private final CaregiverManagementService cms;
    // private final SimpMessagingTemplate messagingTemplate;

    //PATIENTS
    @GetMapping("/patients")
    public List<PatientDTO> readAll() {
        return pms.listPatientsDTO();
    }

    @DeleteMapping("/patients/{id}")
    public void remove(@PathVariable int id) {
        pms.removePatient(id);
    }

    @PostMapping("/patients")
    public PatientDTO create(@RequestBody PatientDTO dto) {
        return pms.addPatientDTO(dto);
    }


    @PutMapping("/patients/{id}")
    public PatientDTO edit(@RequestBody PatientDTO dto,@PathVariable int id) {
         return pms.editPatient(dto,id);

    }

    //MEDICATION
    @GetMapping("/medication")
    public List<MedicationDTO> readAllMedication() {
        return mms.listMedicationDTO();
    }

    @DeleteMapping("/medication/{id}")
    public void removeMedication(@PathVariable int id) {
        mms.removeMedication(id);
    }

    @PostMapping("/medication")
    public MedicationDTO createMedication(@RequestBody MedicationDTO dto) {
        return mms.addMedicationDTO(dto);
    }


    //CAREGIVER
    @GetMapping("/caregiver")
    public List<CaregiverDTO> readAllCaregivers() {
        return cms.listCaregiverDTO();
    }

    @DeleteMapping("/caregiver/{id}")
    public void removeCaregiver(@PathVariable int id) {
        cms.removeCaregiver(id);
    }

    @PostMapping("/caregiver")
    public CaregiverDTO createCaregiver(@RequestBody CaregiverDTO dto) {
        return cms.addCaregiverDTO(dto);
    }



/*
    @EventListener(BaseEvent.class)
    public void handleEvent(BaseEvent event) {
        log.info("Got an event: {}.", event);
        messagingTemplate.convertAndSend("/topic/events", event);

    }
*/

}