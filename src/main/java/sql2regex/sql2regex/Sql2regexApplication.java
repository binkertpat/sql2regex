package sql2regex.sql2regex;

import java.util.Arrays;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import sql2regex.sql2regex.sql.SqlRegex;

@SpringBootApplication
public class Sql2regexApplication {

	public static void main(String[] args) {
		SpringApplication.run(Sql2regexApplication.class, args);
		SqlRegex sqlregex = new SqlRegex();
		sqlregex.setSql("SELECT * FROM table");
		System.out.println(sqlregex.getSql());
	}

	@Bean
	public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
		return args -> {

			System.out.println("Let's inspect the beans provided by Spring Boot:");

			String[] beanNames = ctx.getBeanDefinitionNames();
			Arrays.sort(beanNames);
			for (String beanName : beanNames) {
				System.out.println(beanName);
			}

		};
	}

}


