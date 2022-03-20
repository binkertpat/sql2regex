package sql2regex.sql2regex.sql;

public class SqlRegex {
    private String sql = "";
    private String regex = "";

    public SqlRegex(String sql){
        this.sql = sql;
    }

    public SqlRegex(){
        this.sql = sql;
    }

    public String getRegex() {
        return regex;
    }

    public String getSql() {
        return sql;
    }

    public void setRegex(String regex) {
        this.regex = regex;
    }

    public void setSql(String sql) {
        this.sql = sql;
    }
}
