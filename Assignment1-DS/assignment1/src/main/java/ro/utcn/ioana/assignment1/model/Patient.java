package ro.utcn.ioana.assignment1.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer ID;
    private String name;
    private String birth_date;
    private String gender;
    private String addr;
    private String medical_record;

    @ManyToOne
    @JoinColumn
    private Caregiver caregiver;
}