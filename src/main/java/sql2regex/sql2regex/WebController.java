package sql2regex.sql2regex;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import sql2regex.sql2regex.sql.SqlRegex;

@Controller
public class WebController {
    private SqlRegex sqlregex = new SqlRegex();

    public void setSqlRegex(SqlRegex sqlregex) {
        this.sqlregex = sqlregex;
    }

    public SqlRegex getSqlRegex() {
        return sqlregex;
    }

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("title", "sql2regex");
        model.addAttribute("activeConverter", true);
        model.addAttribute("sqlregex", this.getSqlRegex());
        return "home";
    }

    @PostMapping("/")
    public String enterSqlStartConverting(@ModelAttribute("sqlregex") SqlRegex sqlregex) {
        sqlregex.setRegex("test Regex, converting coming soon");
        System.out.println(sqlregex.getSql() + " " + sqlregex.getRegex());
        return "home";
    }

    @GetMapping("/examples")
    public String examples(Model model) {
        model.addAttribute("title", "sql2regex - examples");
        model.addAttribute("activeExamples", true);
        return "examples";
    }

    @GetMapping("/about")
    public String aboutus(Model model) {
        model.addAttribute("title", "sql2regex - about us");
        model.addAttribute("activeAbout", true);
        return "about";
    }

    @GetMapping("/privacy")
    public String privacy(Model model) {
        model.addAttribute("title", "sql2regex - privacy");
        return "privacy";
    }

    @GetMapping("/impressum")
    public String impressum(Model model) {
        model.addAttribute("title", "sql2regex - impressum");
        return "impressum";
    }
}

