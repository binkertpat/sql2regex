var scrolltotopbutton = document.getElementById("scrolltotop");

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
        scrolltotopbutton.style.display = "block";
    } else {
        scrolltotopbutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function copy2clipbord(id, idFeedback) {
        var copyText = document.getElementById(id);

        copyText.select();
        copyText.setSelectionRange(0, 99999); /* for mobile devices */

        navigator.clipboard.writeText(copyText.value);

        var copyFeedbackAlert = document.getElementById(idFeedback);
        copyFeedbackAlert.style.display = "block";  
}

function formattedCurrentTimestamp(){
    var currentdate = new Date();
    var datetime =  ((currentdate.getDate().toString().length == 1) ? "0".concat(currentdate.getDate()) : (currentdate.getDate())) + "/"
                    + (((currentdate.getMonth()+1).toString().length == 1) ? "0".concat(currentdate.getMonth()+1) : (currentdate.getMonth()+1)) + "/"
                    + ((currentdate.getFullYear().toString().length == 1) ? "0".concat(currentdate.getFullYear()) : (currentdate.getFullYear())) + " @ "
                    + ((currentdate.getHours().toString().length == 1) ? "0".concat(currentdate.getHours()) : (currentdate.getHours())) + ":"
                    + ((currentdate.getMinutes().toString().length == 1) ? "0".concat(currentdate.getMinutes()) : (currentdate.getMinutes())) + ":"
                    + ((currentdate.getSeconds().toString().length == 1) ? "0".concat(currentdate.getSeconds()) : (currentdate.getSeconds()));
    return datetime;
}

function generateJsonFormatFile(id_sql, id_regex, id_jsonFeedback){
    var element = document.createElement('a');
    var sql = document.getElementById(id_sql).value;
    var regex = document.getElementById(id_regex).value;

    var jsonformat = '{"sql":"' + sql + '", "regex":"' + regex +'", "website":"sql2regex.herokuapp.com", "timestamp":"' + formattedCurrentTimestamp() + '"}'
    var filename = "sql2regex_" + formattedCurrentTimestamp().replaceAll(" @ ", "").replaceAll("/", "").replaceAll(":", "") + ".json";

    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(jsonformat));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    var jsonFeedbackAlert = document.getElementById(id_jsonFeedback);
    jsonFeedbackAlert.style.display = "block";  
}

function checkRegExExample(sql, regex){
    let text = document.getElementById(sql).value;
    let nullInputHint = document.getElementById(regex+"hint");
    let pattern = new RegExp(document.getElementById(regex).innerHTML, 'gmi');
    let checkPositive = document.getElementById(regex+"pos");
    let checkNegative = document.getElementById(regex+"neg");

    checkPositive.style.display = "none";
    checkNegative.style.display = "none";

    if (text.length === 0) {
         nullInputHint.style.display = "block";
         return;
    } else {
        nullInputHint.style.display = "none";
    }

    if(pattern.test(text)){
        checkPositive.style.display = "block";
    } else{
        checkNegative.style.display = "block";
    }
}

function onChangePresetSelect(textinputfieldid, selectfieldid){
    let textinputfield = document.getElementById(textinputfieldid);
    let selectfield = document.getElementById(selectfieldid).options;
    textinputfield.value = selectfield[selectfield.selectedIndex].value;
}

class SqlRegExHistory {
  constructor(localStorageId) {
    let ls = localStorage.getItem(localStorageId);
    this.localStorageId = localStorageId;
    if(ls != null){
        this.sql = JSON.parse(ls)[0];
        this.regex = JSON.parse(ls)[1];
    } else {
        this.sql = new Array();
        this.regex = new Array();
        this.writeToLocalStorage(this);
    }
  }

  writeToLocalStorage(data){
    let toWrittenArrayOfArray = [this.sql, this.regex];
    localStorage.setItem(this.localStorageId, JSON.stringify(toWrittenArrayOfArray));
  }

  readSqlFromLocalStorage(){
    if(this.sql.length != 0) {
        let ls = localStorage.getItem(this.localStorageId);
        return JSON.parse(ls)[0];
    } else return;
  }

  readRegExFromLocalStorage(){
    if(this.regex.length != 0) {
      let ls = localStorage.getItem(this.localStorageId);
      return JSON.parse(ls)[1];
    } else return;
  }

  readSqlRegExFromLocalStorage(){
      return [this.readSqlFromLocalStorage(), this.readRegExFromLocalStorage()]
  }

  addToLocalStorage(sqlNew, regexNew){
      this.sql.push(sqlNew)
      this.regex.push(regexNew)
      this.writeToLocalStorage()
  }

  checkUpdatedConverting(){
    let sqlinput = document.getElementById("sqlinput").value;
    let regexinput = document.getElementById("regexoutput").value;
    if(!this.sql.includes(sqlinput) && sqlinput.length != 0) this.addToLocalStorage(sqlinput, regexinput);
  }

  showConvertingHistory(){
       let arrayOfSqlAndArrayOfRegex = this.readSqlRegExFromLocalStorage();

       for(var i = 0; i<arrayOfSqlAndArrayOfRegex.length; i++){
            console.log(arrayOfSqlAndArrayOfRegex[0][i]);
            console.log(arrayOfSqlAndArrayOfRegex[1][i]);
       }
  }

  clearLocalStorage(){
      localStorage.removeItem(this.localStorageId);
  }

  downloadJsonOfHistory(){
        let ConertingHistory = {}
        for(var i = 0; i<this.readSqlRegExFromLocalStorage()[0].length; i++){
            let SingleConvert = {};
            SingleConvert["sql"] = this.readSqlRegExFromLocalStorage()[0][i];
            SingleConvert["regex"] = this.readSqlRegExFromLocalStorage()[1][i];
            ConertingHistory[i] = SingleConvert;
        }
        ConertingHistory["website"] = "sql2regex.herokuapp.com";
        ConertingHistory["timestamp"] =  formattedCurrentTimestamp();

        let filename = "sql2regex_convertinghistory_" + formattedCurrentTimestamp().replaceAll(" @ ", "").replaceAll("/", "").replaceAll(":", "") + ".json";
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(ConertingHistory)));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
  }
}

let SqlRegExHis = new SqlRegExHistory("SqlRegExHistory");
SqlRegExHis.checkUpdatedConverting();
console.log(SqlRegExHis.readSqlRegExFromLocalStorage());