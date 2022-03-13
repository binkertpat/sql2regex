package sql2regex.sql2regex;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {
    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("title", "sql2regex");
        model.addAttribute("activeConverter", true);
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
}

