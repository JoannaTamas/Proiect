package ro.utcn.ioana.assignment1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication

@EnableAutoConfiguration(exclude = {
		SecurityAutoConfiguration.class
})

public class Assignment1Application {

	public static void main(String[] args) {
		 TimeUnit.SECONDS.sleep(10);
		SpringApplication.run(Assignment1Application.class, args);

	}

}

