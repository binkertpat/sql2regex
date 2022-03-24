package sql2regex.sql2regex;

import org.springframework.web.bind.annotation.*;
import sql2regex.sql2regex.sql.SqlRegex;

@RestController
public class RestApiController {
    private SqlRegex sqlregex = new SqlRegex();

    @GetMapping("/convert")
    public String ReturnGivenParam(@RequestParam(value = "sql", defaultValue = "Pass your SQL-Statement!") String param) {
        return param;
    }

    @PostMapping("/convertTest")
    public SqlRegex ConvertSql2Regex(@RequestBody String sql) {
        sqlregex.setSql(sql);
        sqlregex.setRegex(sql);
        return sqlregex;
    }
}