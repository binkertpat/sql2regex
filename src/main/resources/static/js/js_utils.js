let scrolltotopbutton = document.getElementById("scrolltotop");

window.onscroll = function () {
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
    let copyText = document.getElementById(id);

    copyText.select();
    copyText.setSelectionRange(0, 99999); /* for mobile devices */

    navigator.clipboard.writeText(copyText.value);

    let copyFeedbackAlert = document.getElementById(idFeedback);
    copyFeedbackAlert.style.display = "block";
}

function formattedCurrentTimestamp() {
    let currentdate = new Date();
    return ((currentdate.getDate().toString().length === 1) ? "0".concat(currentdate.getDate()) : (currentdate.getDate())) + "/" + (((currentdate.getMonth() + 1).toString().length === 1) ? "0".concat(currentdate.getMonth() + 1) : (currentdate.getMonth() + 1)) + "/" + ((currentdate.getFullYear().toString().length === 1) ? "0".concat(currentdate.getFullYear()) : (currentdate.getFullYear())) + " @ " + ((currentdate.getHours().toString().length === 1) ? "0".concat(currentdate.getHours()) : (currentdate.getHours())) + ":" + ((currentdate.getMinutes().toString().length === 1) ? "0".concat(currentdate.getMinutes()) : (currentdate.getMinutes())) + ":" + ((currentdate.getSeconds().toString().length === 1) ? "0".concat(currentdate.getSeconds()) : (currentdate.getSeconds()));
}

function generateJsonFormatFile(id_sql, id_regex, id_jsonFeedback) {
    let element = document.createElement('a');
    let sql = document.getElementById(id_sql).value;
    let regex = document.getElementById(id_regex).value;

    let jsonformat = '{"sql":"' + sql + '", "regex":"' + regex + '", "website":"sql2regex.herokuapp.com", "timestamp":"' + formattedCurrentTimestamp() + '"}'
    let filename = "sql2regex_" + formattedCurrentTimestamp().replaceAll(" @ ", "").replaceAll("/", "").replaceAll(":", "") + ".json";

    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(jsonformat));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    let jsonFeedbackAlert = document.getElementById(id_jsonFeedback);
    jsonFeedbackAlert.style.display = "block";
}

function checkRegExExample(sql, regex) {
    let text = document.getElementById(sql).value;
    let nullInputHint = document.getElementById(regex + "hint");
    let pattern = new RegExp(document.getElementById(regex).innerHTML, 'gmi');
    let checkPositive = document.getElementById(regex + "pos");
    let checkNegative = document.getElementById(regex + "neg");

    checkPositive.style.display = "none";
    checkNegative.style.display = "none";

    if (text.length === 0) {
        nullInputHint.style.display = "block";
        return;
    } else {
        nullInputHint.style.display = "none";
    }

    if (pattern.test(text)) {
        checkPositive.style.display = "block";
    } else {
        checkNegative.style.display = "block";
    }
}

function onChangePresetSelect(textinputfieldid, selectfieldid) {
    let textinputfield = document.getElementById(textinputfieldid);
    let selectfield = document.getElementById(selectfieldid).options;
    textinputfield.value = selectfield[selectfield.selectedIndex].value;
}

class SqlRegExHistory {
    constructor(localStorageId) {
        let ls = localStorage.getItem(localStorageId);
        this.localStorageId = localStorageId;
        if (ls != null) {
            this.sql = JSON.parse(ls)[0];
            this.regex = JSON.parse(ls)[1];
        } else {
            this.sql = [];
            this.regex = [];
            this.writeToLocalStorage(this);
        }
    }

    writeToLocalStorage() {
        let toWrittenArrayOfArray = [this.sql, this.regex];
        localStorage.setItem(this.localStorageId, JSON.stringify(toWrittenArrayOfArray));
    }

    readSqlFromLocalStorage() {
        if (localStorage.getItem(this.localStorageId) != null) {
            let ls = localStorage.getItem(this.localStorageId);
            return JSON.parse(ls)[0];
        } else return -1;
    }

    readRegExFromLocalStorage() {
        if (localStorage.getItem(this.localStorageId) != null) {
            let ls = localStorage.getItem(this.localStorageId);
            return JSON.parse(ls)[1];
        } else return -1;
    }

    readSqlRegExFromLocalStorage() {
        return [this.readSqlFromLocalStorage(), this.readRegExFromLocalStorage()]
    }

    addToLocalStorage(sqlNew, regexNew) {
        this.sql.push(sqlNew)
        this.regex.push(regexNew)
        this.writeToLocalStorage()
    }

    checkUpdatedConverting() {
        document.getElementById("convertbodycontainer").style.display = "none";
        let sqlinput = document.getElementById("sqlinput").value;
        let regexinput = document.getElementById("regexoutput").value;
        if (!this.sql.includes(sqlinput) && sqlinput.length !== 0) this.addToLocalStorage(sqlinput, regexinput);
        if (this.sql.length !== 0) this.showConvertingHistory();
    }

    showConvertingHistory() {
        let container = document.getElementById("convertbodycontainer")
        container.style.display = "block";

        let arrayOfSqlAndArrayOfRegex = this.readSqlRegExFromLocalStorage();
        let body = document.getElementById("convertbody");

        while (body.firstChild) {
            body.removeChild(body.lastChild);
        }

        let outerDivAlert = document.createElement('div');
        outerDivAlert.classList.add('alert', 'alert-info', 'alert-dismissible', 'fade', 'show', 'd-flex', 'align-items-center', 'mt-3');
        outerDivAlert.setAttribute("role", "alert");

        let svgEl = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
        svgEl.classList.add('bi', 'flex-shrink-0', 'me-2');
        svgEl.setAttribute("fill", "currentColor");
        svgEl.setAttribute("width", "24");
        svgEl.setAttribute("height", "24");
        svgEl.setAttribute("role", "img");
        svgEl.setAttribute("aria-label", "Danger: ");
        svgEl.setAttribute("viewBox", "0 0 16 16");

        let path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
        path.setAttribute("d", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z");

        let innerDIV = document.createElement('div');
        innerDIV.innerHTML = "Your datas are only stored in your <strong>local browser storage</strong>!";

        let closeButton = document.createElement('button');
        closeButton.classList.add('btn-close');
        closeButton.setAttribute("type", "button");
        closeButton.setAttribute("data-bs-dismiss", "alert");
        closeButton.setAttribute("aria-label", "Close");

        svgEl.appendChild(path)
        outerDivAlert.appendChild(svgEl);
        outerDivAlert.appendChild(innerDIV);
        outerDivAlert.appendChild(closeButton);

        let table = document.createElement('table');
        table.classList.add("table");
        table.classList.add("table-hover");
        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');

        let row1 = document.createElement('tr');
        let heading1 = document.createElement('th');
        heading1.setAttribute("width", "6%");
        heading1.innerHTML = "Id";
        let heading2 = document.createElement('th');
        heading2.setAttribute("width", "47%");
        heading2.innerHTML = "SQL-Input";
        let heading3 = document.createElement('th');
        heading3.setAttribute("width", "47%");
        heading3.innerHTML = "RegEx-Output";
        row1.appendChild(heading1);
        row1.appendChild(heading2);
        row1.appendChild(heading3);
        thead.appendChild(row1);

        if (arrayOfSqlAndArrayOfRegex[0] !== -1) {
            for (var i = 0; i < this.sql.length; i++) {
                let row_data = document.createElement('tr');
                let row_data_1 = document.createElement('td');
                row_data_1.innerHTML = i;
                let row_data_2 = document.createElement('td');
                row_data_2.innerHTML = arrayOfSqlAndArrayOfRegex[0][i];
                let row_data_3 = document.createElement('td');
                row_data_3.innerHTML = arrayOfSqlAndArrayOfRegex[1][i];
                row_data.appendChild(row_data_1);
                row_data.appendChild(row_data_2);
                row_data.appendChild(row_data_3);
                tbody.appendChild(row_data);
            }
        }

        table.appendChild(thead);
        table.appendChild(tbody);

        let tableHeading = document.createElement('h2');
        tableHeading.innerHTML = "Converting-History";
        tableHeading.classList.add("pb-2");
        tableHeading.classList.add("border-bottom");

        let exportButtonContainer = document.createElement('div');
        exportButtonContainer.classList.add("text-end");

        let clearButton = document.createElement('button');
        clearButton.innerHTML = "clear local storage";
        clearButton.classList.add("btn", "btn-m", "btn-tert", "copy-button", "mt-2");
        clearButton.setAttribute("onclick", "SqlRegExHis.clearLocalStorage()")
        exportButtonContainer.appendChild(clearButton);

        let exportButton = document.createElement('button');
        exportButton.innerHTML = "export as .json file";
        exportButton.classList.add("btn", "btn-m", "btn-success", "copy-button", "mt-2", "ms-2");
        exportButton.setAttribute("onclick", "SqlRegExHis.downloadJsonOfHistory()")
        exportButtonContainer.appendChild(exportButton);

        body.appendChild(tableHeading);
        body.appendChild(outerDivAlert);
        body.appendChild(table);
        body.appendChild(exportButtonContainer);
    }

    clearLocalStorage() {
        this.sql = [];
        this.regex = [];
        this.writeToLocalStorage(this);
        this.showConvertingHistory();
    }

    downloadJsonOfHistory() {
        let converts = {}
        let ConvertingHistory = {}

        for (var i = 0; i < this.readSqlRegExFromLocalStorage()[0].length; i++) {
            let SingleConvert = {};
            SingleConvert["sql"] = this.readSqlRegExFromLocalStorage()[0][i];
            SingleConvert["regex"] = this.readSqlRegExFromLocalStorage()[1][i];
            converts[i] = SingleConvert;
        }
        ConvertingHistory["results"] = converts;
        ConvertingHistory["website"] = "sql2regex.herokuapp.com";
        ConvertingHistory["timestamp"] = formattedCurrentTimestamp();

        let filename = "sql2regex_convertinghistory_" + formattedCurrentTimestamp().replaceAll(" @ ", "").replaceAll("/", "").replaceAll(":", "") + ".json";
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(ConvertingHistory)));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
}

let SqlRegExHis = new SqlRegExHistory("SqlRegExHistory");
SqlRegExHis.checkUpdatedConverting();

async function handleSubmitForm(inputId, outputId) {
    let input = document.getElementById(inputId).value;
    let domain = window.location.href + "convertTest";

    if (input.length !== 0) {
        const response = await fetch(domain, {
            method: 'POST', headers: {
                'Accept': 'application/json', 'Content-Type': 'application/json'
            }, body: input,
        });

        response.json().then(data => {
            let output = document.getElementById(outputId);
            output.value = data.regex;
            console.log(data.regex);
            SqlRegExHis.checkUpdatedConverting();
        });
    }
    return false;
}