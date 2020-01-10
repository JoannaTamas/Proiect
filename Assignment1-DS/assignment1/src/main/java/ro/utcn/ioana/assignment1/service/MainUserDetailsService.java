package ro.utcn.ioana.assignment1.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;
import ro.utcn.ioana.assignment1.exceptionController.DoctorNotFoundException;
import ro.utcn.ioana.assignment1.model.Doctor;
import ro.utcn.ioana.assignment1.repository.api.RepositoryFactory;

import javax.transaction.Transactional;
import java.util.Collections;

@Service
@RequiredArgsConstructor
public class MainUserDetailsService implements UserDetailsService {
    private final RepositoryFactory repository;

    @Override
    public UserDetails loadUserByUsername(String username) {
        Doctor user = repository.createDoctorRepository().findById(1).get();

        return new org.springframework.security.core.userdetails.User(user.getName(), user.getPassword(),
                Collections.singletonList(new SimpleGrantedAuthority("ROLE_DOCTOR")));
    }


    @Transactional
    public Doctor loadCurrentUser() {
        String name = SecurityContextHolder.getContext().getAuthentication().getName();
        return repository.createDoctorRepository().findById(1).get();


    }

}