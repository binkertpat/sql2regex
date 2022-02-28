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

function generateJsonFormatFile(id_sql, id_regex, id_jsonFeedback){
    var element = document.createElement('a');

    var sql = document.getElementById(id_sql).value;
    var regex = document.getElementById(id_regex).value;

    var currentdate = new Date();  
    var datetime =  ((currentdate.getDate().toString().length == 1) ? "0".concat(currentdate.getDate()) : (currentdate.getDate())) + "/" 
                    + (((currentdate.getMonth()+1).toString().length == 1) ? "0".concat(currentdate.getMonth()+1) : (currentdate.getMonth()+1)) + "/" 
                    + ((currentdate.getFullYear().toString().length == 1) ? "0".concat(currentdate.getFullYear()) : (currentdate.getFullYear())) + " @ "  
                    + ((currentdate.getHours().toString().length == 1) ? "0".concat(currentdate.getHours()) : (currentdate.getHours())) + ":"  
                    + ((currentdate.getMinutes().toString().length == 1) ? "0".concat(currentdate.getMinutes()) : (currentdate.getMinutes())) + ":"  
                    + ((currentdate.getSeconds().toString().length == 1) ? "0".concat(currentdate.getSeconds()) : (currentdate.getSeconds()))  

    var jsonformat = '{"sql":"' + sql + '", "regex":"' + regex +'", "website":"sql2regex.herokuapp.com", "timestamp":"' + datetime + '"}'
    
    var filename = "sql2regex_" + datetime.replaceAll(" @ ", "").replaceAll("/", "").replaceAll(":", "") + ".json";

    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(jsonformat));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    var jsonFeedbackAlert = document.getElementById(id_jsonFeedback);
    jsonFeedbackAlert.style.display = "block";  
}