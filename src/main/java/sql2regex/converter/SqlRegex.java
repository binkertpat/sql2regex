package sql2regex.converter;

public class SqlRegex {
    private String sql = "";
    private String regex = "";

    public SqlRegex(String sql){
        this.sql = sql;
    }

    public SqlRegex(){}

    public String getRegex() {
        return regex;
    }

    public String getSql() {
        return sql;
    }

    public void setRegex(String regex) {
        if(regex.length() != 0){
            this.regex = regex;
        } else throw new NullPointerException("REGEX-Output-String should have more characters than null.");
    }

    public void setSql(String sql) {
        if(sql.length() != 0){
            this.sql = sql;
        } else throw new NullPointerException("SQL-Input-String should have more characters than null.");
    }

    public void convert(){
        try{
            //TODO: some converting stuff here
            this.setRegex("test - converting coming soon");
        } catch(Exception e){
            e.printStackTrace();
        }
    }

    @Override
    public String toString(){
        return "{\"sql\":\"" + this.getSql() + "\", \"regex\":\"" + this.getRegex() + "\"}";
    }
}
