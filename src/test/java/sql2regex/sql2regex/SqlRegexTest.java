package sql2regex.sql2regex;

import org.junit.jupiter.api.Test;
import sql2regex.sql2regex.sql.SqlRegex;
import static org.assertj.core.api.Assertions.assertThat;

public class SqlRegexTest {
    @Test
    public void setStatementNotNull(){
        SqlRegex sqlregex = new SqlRegex("SELECT * FROM table");
        assertThat(sqlregex.getSql()).isEqualTo("SELECT * FROM table");
    }

    @Test
    public void setStatement(){
        SqlRegex sqlregex = new SqlRegex();
        assertThat(sqlregex.getSql()).isEqualTo("");
    }

    @Test
    public void setStatementNoneSetRegex(){
        SqlRegex sqlregex = new SqlRegex();
        assertThat(sqlregex.getRegex()).isEqualTo("");
    }
}
