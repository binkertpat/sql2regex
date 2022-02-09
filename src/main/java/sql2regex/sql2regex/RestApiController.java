package sql2regex.sql2regex;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RestApiController {
    @GetMapping("/test")
    public String test() {
        return "Teeeeeeeeeeeeest :)";
    }

    @GetMapping("/convert")
    public String ReturnGivenParam(@RequestParam(value = "param", defaultValue = "SQL-Statement") String param) {
        return param;
    }
}