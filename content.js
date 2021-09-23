//"matches": ["<all_urls>"],

chrome.runtime.onMessage.addListener(function (msg, sender, response) {
    var values = [];
    var valuestext = [];
    var inputFields = document.getElementsByTagName('input');
    var text = document.getElementsByTagName('textarea');
    var result = 'inputs: ' + inputFields.length;

    for (var i = 0; i < inputFields.length; i++) {
        values.push(inputFields[i].value);
    }

    for (var i = 0; i < text.length; i++) {
        valuestext.push(text[i].value);
    }

    result += '<br />fields: ' + values.length;
    //console.log(result)
    console.log(values)
    console.log(valuestext)
    //localStorage.setItem("result", values);

    response(result)
});

const input = document.getElementsByTagName('input');
console.log(input)

const phone = document.getElementsByClassName("mask-phone-number form-textbox validate[Fill Mask]");

const date = document.getElementsByClassName("form-textbox validate[limitDate, validateLiteDate]");
const dateIcon = document.getElementsByClassName(" newDefaultTheme-dateIcon icon-liteMode");
const dateCalendarpopup = document.getElementsByClassName("calendar popup");
const datePreviousMonthButton = document.getElementsByClassName("calendar-new-header");
const dateNextMonthButton = document.getElementsByClassName("button nextMonth");
const datePreviousYearButton = document.getElementsByClassName("button previousYear");
const dateNextYearButton = document.getElementsByClassName("button nextYear");

const product = document.getElementsByClassName("form-checkbox form-product-input")
const selects = document.getElementsByTagName('select');
const textareas = document.getElementsByTagName('textarea');
const checkboxs = document.getElementsByClassName("form-checkbox")
const fileUpload = document.getElementsByClassName("fileupload-input")
const time = document.getElementsByClassName("time-dropdown form-textbox")
const spinnerInput = document.getElementsByClassName("form-spinner-input  form-textbox")
const spinnerUpButton = document.getElementsByClassName("form-spinner-button form-spinner-up")
const spinnerDownButton = document.getElementsByClassName("form-spinner-button form-spinner-down")
console.log(spinnerInput)

const radioButton = document.getElementsByClassName("form-radio")


for (var i = 0; i < input.length; i++) {
    console.log("hh")
    if (input[i].className == "form-checkbox  form-product-input") {
        console.log("forrrmm")
    }
}

var archive = [],
    keys = Object.keys(localStorage),
    i = 0, key;

for (; key = keys[i]; i++) {
    archive.push({ key: key, value: localStorage.getItem(key) })
}
console.log(archive)

for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < archive.length; j++) {
        if (input[i].id == archive[j].key) {
            const element = document.getElementById(input[i].id);
            element.value = archive[j].value
            for (var k = 0; k < product.length; k++) {
                if (input[i].id === product[k].id) {
                    if (archive[j].value == "false") {
                        //console.log("false")
                        product[k].checked = false
                        element.checked = false
                    }
                    if (archive[j].value == "true") {
                        //console.log("true")
                        product[k].checked = true
                        element.checked = true
                    }
                }
            }
            for (var k = 0; k < checkboxs.length; k++) {
                if (input[i].id === checkboxs[k].id) {
                    if (archive[j].value == "false") {
                        //console.log("false")
                        checkboxs[k].checked = false
                        element.checked = false
                    }
                    if (archive[j].value == "true") {
                        //console.log("true")
                        checkboxs[k].checked = true
                        element.checked = true
                    }
                }
            }
            for (var k = 0; k < radioButton.length; k++) {
                if (input[i].id === radioButton[k].id) {
                    if (archive[j].value == "false") {
                        //console.log("false")
                        radioButton[k].checked = false
                        element.checked = false
                    }
                    if (archive[j].value == "true") {
                        //console.log("true")
                        radioButton[k].checked = true
                        element.checked = true
                    }
                }
            }
        }
    }
}

for (var i = 0; i < selects.length; i++) {
    for (var j = 0; j < archive.length; j++) {
        if (selects[i].id == archive[j].key) {
            const element = document.getElementById(selects[i].id);
            element.value = archive[j].value
        }
    }
}

for (var i = 0; i < textareas.length; i++) {
    for (var j = 0; j < archive.length; j++) {
        if (textareas[i].id == archive[j].key) {
            const element = document.getElementById(textareas[i].id);
            element.value = archive[j].value
        }
    }
}


for (var j = 0; j < dateIcon.length; j++) {
    dateIcon[j].onclick = function () {
        console.log("icon")
        getSetDate()
    }
}

for (var j = 0; j < dateCalendarpopup.length; j++) {
    dateCalendarpopup[j].onclick = function () {
        getSetDate()
    }
}

for (var j = 0; j < product.length; j++) {
    product[j].onclick = function () {
        console.log("click")
        console.log(this.checked)
        localStorage.setItem(this.id, this.checked);
    }
}


for (var j = 0; j < product.length; j++) {
    product[j].addEventListener = ('product', function () {
        //console.log("listener")
        console.log(this.checked)
        localStorage.setItem(this.id, this.checked);
    });
}

for (var j = 0; j < checkboxs.length; j++) {
    checkboxs[j].onclick = function () {
        console.log("click")
        console.log(this.checked)
        localStorage.setItem(this.id, this.checked);
    }
}


for (var j = 0; j < checkboxs.length; j++) {
    checkboxs[j].addEventListener = ('product', function () {
        //console.log("listener")
        console.log(this.checked)
        localStorage.setItem(this.id, this.checked);
    });
}

for (var j = 0; j < spinnerUpButton.length; j++) {
    spinnerUpButton[j].onclick = function () {
        console.log("click")
        for (var k = 0; k < spinnerInput.length; k++) {
            console.log(spinnerInput[k].value)
            localStorage.setItem(spinnerInput[k].id, spinnerInput[k].value);
        }
    }
}

for (var j = 0; j < spinnerDownButton.length; j++) {
    spinnerDownButton[j].onclick = function () {
        console.log("click")
        for (var k = 0; k < spinnerInput.length; k++) {
            console.log(spinnerInput[k].value)
            localStorage.setItem(spinnerInput[k].id, spinnerInput[k].value);
        }
    }
}
/*
for (var j = 0; j < time.length; j++) {
    time[j].onclick = function () {
        console.log("click")
        console.log(this.value)
        localStorage.setItem(this.id, this.value);
    }
}*/


for (var j = 0; j < time.length; j++) {
    time[j].addEventListener = ('product', function () {
        //console.log("listener")
        console.log(this.value)
        localStorage.setItem(this.id, this.value);
    });
}

for (var j = 0; j < radioButton.length; j++) {
    radioButton[j].onclick = function () {
        console.log("radiobutton click")
        console.log(this.checked)
        //localStorage.setItem(this.id, this.checked);
        for (var k = 0; k < radioButton.length; k++) {
            console.log(radioButton[k].checked)
            localStorage.setItem(radioButton[k].id, radioButton[k].checked);
        }
    }
}


for (var j = 0; j < radioButton.length; j++) {
    radioButton[j].addEventListener = ('product', function () {
        //console.log("radio button listener")
        //console.log(this.checked)
        localStorage.setItem(this.id, this.checked);
    });
}

for (var j = 0; j < fileUpload.length; j++) {
    fileUpload[j].addEventListener = ('product', function () {

    });
}

for (var i = 0; i < input.length; i++) {
    input[i].addEventListener('input', function () {
        console.log("1111")
        console.log(this.value);
        localStorage.setItem(this.id, this.value);
    });
}

for (var j = 0; j < selects.length; j++) {
    selects[j].onclick = function () {
        console.log("click")
        console.log(selects)
        console.log(this.value)
        localStorage.setItem(this.id, this.value);
    }
}


for (var i = 0; i < selects.length; i++) {
    selects[i].addEventListener('select', function () {
        console.log("selects")
        console.log(this.value);
        localStorage.setItem(this.id, this.value);
    });
}

/*

for (var j = 0; j < datePreviousMonthButton.length; j++) {
    datePreviousMonthButton[j].onclick = function () {
        console.log("calendar1")
        getSetDate()
    }
}

for (var j = 0; j < dateNextMonthButton.length; j++) {
    dateNextMonthButton[j].onclick = function () {
        console.log("calendar2")
        getSetDate()
    }
}

for (var j = 0; j < datePreviousYearButton.length; j++) {
    datePreviousYearButton[j].onclick = function () {
        console.log("calendar3")
        getSetDate()
    }
}

for (var j = 0; j < dateNextYearButton.length; j++) {
    dateNextYearButton[j].setAttribute('onclick', 'getSetDate();');
} */


function getSetDate() {
    console.log("getSetDate")
    for (var j = 0; j < date.length; j++) {
        console.log(date)
        localStorage.setItem(date[j].id, date[j].value);
        console.log(date[j].value)
    }
}


/*
document.onkeydown = function () {
    console.log("key down")
    var values = [];
    var valuestext = [];
    for (var i = 0; i < input.length; i++) {
        values.push(input[i].id, input[i].value);
        localStorage.setItem(input[i].id, input[i].value);
    }
    console.log(values)
    console.log(valuestext)
}*/

const count = 0;

document.onkeydown = function () {
    console.log("key down")
    //input.addEventListener('change', updateValue);
    for (var i = 0; i < input.length; i++) {
        input[i].addEventListener('input', function () {
            console.log("hjjj")
            console.log(this.value);
            localStorage.setItem(this.id, this.value);
        });
    }

    for (var i = 0; i < textareas.length; i++) {
        textareas[i].addEventListener('input', function () {
            //console.log("text")
            //console.log(this.value);
            localStorage.setItem(this.id, this.value);
        });
    }

    for (var j = 0; j < phone.length; j++) {
        localStorage.setItem(phone[j].id, phone[j].value);
        //console.log(phone[j].value)
    }

    for (var j = 0; j < date.length; j++) {
        localStorage.setItem(date[j].id, date[j].value);
        //console.log(date[j].value)
    }


    //const x = document.getElementsByClassName("form-textbox validate[limitDate, validateLiteDate]");
    //date[0].addEventListener("click", click_handler1, false);

};


function updateValue(e) {
    log.value = e.target.value;
    console.log(e.target.value)
    for (var i = 0; i < input.length; i++) {
        localStorage.setItem(input[i].id, e.target.value);
    }

}
/*
window.addEventListener('load',function(){
    const x = document.getElementsByClassName("form-textbox validate[limitDate, validateLiteDate]");
    x[0].addEventListener("click", click_handler1, false);
});*/
/*for (var i = 0; i < date.length; i++) {
    console.log("date1")
    date[0].addEventListener('date', function () {
        console.log("date")
        //console.log(this.value)
    });
}*/
/*
date[0].addEventListener('date', function () {
    console.log("date")
    //console.log(this.value)
});*/



/*
const logg = document.getElementById('lite_mode_9');
console.log(logg)

logg.addEventListener('change', updateValue);

function updateValue(e) {
    console.log("ccc")
    logg.value = e.target.value;
    localStorage.setItem("date", e.target.value);
}*/

/*
const log = document.getElementById('last_5');

log.onkeydown = function() {
    console.log("hello")
};

logg.addEventListener('change', updateValue);

function updateValue(e) {
  log.value = e.target.value;
  localStorage.setItem("name", e.target.value);
}

document.onkeydown = function() {
    console.log("keey")
  }; */