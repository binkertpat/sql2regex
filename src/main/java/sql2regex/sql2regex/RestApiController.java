package sql2regex.sql2regex;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RestApiController {
    @GetMapping("/convert")
    public String ReturnGivenParam(@RequestParam(value = "sql", defaultValue = "Pass your SQL-Statement!") String param) {
        return param;
    }
}