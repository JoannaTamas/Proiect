package ro.utcn.ioana.assignment1.Controller;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import ro.utcn.ioana.assignment1.model.Doctor;
import ro.utcn.ioana.assignment1.service.MainUserDetailsService;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final MainUserDetailsService service;

    @GetMapping("/me")
    public Doctor readCurrent(){
        return service.loadCurrentUser();
    }

}