//"matches": ["<all_urls>"],

var enableDisable = true
enableDisable = sessionStorage.getItem("enable")

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        enableDisable = request.enable
        console.log(enableDisable)
        sessionStorage.setItem("enable", enableDisable)
        enableDisable = sessionStorage.getItem("enable")
        if (request.message == "delete") {
            reload()
            localStorage.clear()
        }
        sendResponse({
            data: enableDisable
        });

    }
);

function reload() {
    window.location.reload()
}

const URL = window.location.toString()

const input = document.getElementsByTagName('input');
console.log(input)

const phone = document.getElementsByClassName("mask-phone-number form-textbox validate[Fill Mask]");
const date = document.getElementsByClassName("form-textbox validate[limitDate, validateLiteDate]");
const dateRequired = document.getElementsByClassName("form-textbox validate[required, limitDate, validateLiteDate]");
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
const radioButton = document.getElementsByClassName("form-radio")
const starRating = document.getElementsByClassName("form-star-rating-star Stars")
const submitButton = document.getElementsByClassName("form-submit-button submit-button jf-form-buttons jsTest-submitField")

if (enableDisable == "true") {
    var archive = [],
        keys = Object.keys(localStorage),
        i = 0, key;

    for (; key = keys[i]; i++) {
        archive.push({ key: key, value: localStorage.getItem(key) })
    }
    console.log(archive)

    var inputArray = [];

    //Get values for inputs from local storage
    for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < archive.length; j++) {
            if (input[i].id == archive[j].key) {
                const element = document.getElementById(input[i].id);
                element.value = archive[j].value
                for (var k = 0; k < product.length; k++) {
                    if (input[i].id === product[k].id) {
                        if (archive[j].value == "false") {
                            product[k].checked = false
                            element.checked = false
                        }
                        if (archive[j].value == "true") {
                            product[k].checked = true
                            element.checked = true
                        }
                    }
                }
                for (var k = 0; k < checkboxs.length; k++) {
                    if (input[i].id === checkboxs[k].id) {
                        if (archive[j].value == "false") {
                            checkboxs[k].checked = false
                            element.checked = false
                        }
                        if (archive[j].value == "true") {
                            checkboxs[k].checked = true
                            element.checked = true
                        }
                    }
                }
                for (var k = 0; k < radioButton.length; k++) {
                    if (input[i].id === radioButton[k].id) {
                        if (archive[j].value == "false") {
                            radioButton[k].checked = false
                            element.checked = false
                        }
                        if (archive[j].value == "true") {
                            radioButton[k].checked = true
                            element.checked = true
                        }
                    }
                }
            }
        }
    }


    //Get values for selects from local storage
    for (var i = 0; i < selects.length; i++) {
        for (var j = 0; j < archive.length; j++) {
            if (selects[i].id == archive[j].key) {
                const element = document.getElementById(selects[i].id);
                element.value = archive[j].value
            }
        }
    }

    //Get values for textareas from local storage
    for (var i = 0; i < textareas.length; i++) {
        for (var j = 0; j < archive.length; j++) {
            if (textareas[i].id == archive[j].key) {
                const element = document.getElementById(textareas[i].id);
                element.value = archive[j].value
            }
        }
    }

    //Get values for star ratings from local storage
    for (var i = 0; i < starRating.length; i++) {
        for (var j = 0; j < archive.length; j++) {
            if (starRating[i].ariaLabel == archive[j].key) {
                console.log(archive[j].key)
                console.log(archive[j].value)
                starRating[i].ariaChecked = archive[j].value
                if (archive[j].value == "true") {
                    var countx = i;
                    console.log("hhh")
                    for (var l = 0; l <= countx; l++) {
                        starRating[l].className = "form-star-rating-star Stars rated"
                    }

                }
            }
        }
    }
}

//Date
for (var j = 0; j < dateIcon.length; j++) {
    dateIcon[j].onclick = function () {
        enableDisable = sessionStorage.getItem("enable")
        if (enableDisable == "true") {
            getSetDate()
            getSetDateRequired()
        }
    }
}

for (var j = 0; j < dateCalendarpopup.length; j++) {
    dateCalendarpopup[j].onclick = function () {
        enableDisable = sessionStorage.getItem("enable")
        if (enableDisable == "true") {
            getSetDate()
            getSetDateRequired()
        }
    }
}

//Product
for (var j = 0; j < product.length; j++) {
    product[j].onclick = function () {
        if (sessionStorage.getItem("enable") == "true") {
            console.log(this.checked)
            localStorage.setItem(this.id, this.checked);
        }
    }
}


for (var j = 0; j < product.length; j++) {
    product[j].addEventListener = ('product', function () {
        if (sessionStorage.getItem("enable") == "true") {
            console.log(this.checked)
            localStorage.setItem(this.id, this.checked);
        }
    });
}

//Checkboxs
for (var j = 0; j < checkboxs.length; j++) {
    checkboxs[j].onclick = function () {
        if (sessionStorage.getItem("enable") == "true") {
            console.log(this.checked)
            localStorage.setItem(this.id, this.checked);
        }
    }
}

for (var j = 0; j < checkboxs.length; j++) {
    checkboxs[j].addEventListener = ('product', function () {
        if (sessionStorage.getItem("enable") == "true") {
            localStorage.setItem(this.id, this.checked);
        }
    });
}

//Spinners
for (var j = 0; j < spinnerUpButton.length; j++) {
    spinnerUpButton[j].onclick = function () {
        if (sessionStorage.getItem("enable") == "true") {
            for (var k = 0; k < spinnerInput.length; k++) {
                console.log(spinnerInput[k].value)
                localStorage.setItem(spinnerInput[k].id, spinnerInput[k].value);
            }
        }
    }
}

for (var j = 0; j < spinnerDownButton.length; j++) {
    spinnerDownButton[j].onclick = function () {
        if (sessionStorage.getItem("enable") == "true") {
            for (var k = 0; k < spinnerInput.length; k++) {
                console.log(spinnerInput[k].value)
                localStorage.setItem(spinnerInput[k].id, spinnerInput[k].value);
            }
        }
    }
}

//Time
for (var j = 0; j < time.length; j++) {
    time[j].onclick = function () {
        if (sessionStorage.getItem("enable") == "true") {
            console.log(this.value)
            localStorage.setItem(this.id, this.value);
        }
    }
}

for (var j = 0; j < time.length; j++) {
    time[j].addEventListener = ('product', function () {
        if (sessionStorage.getItem("enable") == "true") {
            localStorage.setItem(this.id, this.value);
        }
    });
}

//Radio Buttons
for (var j = 0; j < radioButton.length; j++) {
    radioButton[j].onclick = function () {
        if (sessionStorage.getItem("enable") == "true") {
            for (var k = 0; k < radioButton.length; k++) {
                console.log(radioButton[k].checked)
                localStorage.setItem(radioButton[k].id, radioButton[k].checked);
            }
        }
    }
}

for (var j = 0; j < radioButton.length; j++) {
    radioButton[j].addEventListener = ('product', function () {
        if (sessionStorage.getItem("enable") == "true") {
            localStorage.setItem(this.id, this.checked);
        }
    });
}

//Star Ratings
for (var j = 0; j < starRating.length; j++) {
    starRating[j].onclick = function () {
        if (sessionStorage.getItem("enable") == "true") {
            for (var k = 0; k < starRating.length; k++) {
                console.log(starRating[k].ariaChecked)
                localStorage.setItem(starRating[k].ariaLabel, starRating[k].ariaChecked);
            }
        }

    }
}

for (var j = 0; j < starRating.length; j++) {
    starRating[j].addEventListener = ('product', function () {
        if (sessionStorage.getItem("enable") == "true") {
            for (var k = 0; k < starRating.length; k++) {
                console.log(starRating[k].ariaChecked)
                console.log(starRating[k].ariaLabel)
                localStorage.setItem(starRating[k].ariaLabel, starRating[k].ariaChecked);
            }
        }
    });
}

//File Upload (ignore)
for (var j = 0; j < fileUpload.length; j++) {
    fileUpload[j].addEventListener = ('product', function () {

    });
}

//Selects
for (var j = 0; j < selects.length; j++) {
    selects[j].onclick = function () {
        if (sessionStorage.getItem("enable") == "true") {
            localStorage.setItem(this.id, this.value);
        }
    }
}

for (var i = 0; i < selects.length; i++) {
    selects[i].addEventListener('select', function () {
        if (sessionStorage.getItem("enable") == "true") {
            localStorage.setItem(this.id, this.value);
        }
    });
}

//Submit Button, clear local storage
for (var j = 0; j < submitButton.length; j++) {
    submitButton[j].onclick = function () {
        localStorage.clear()
    }
}

//Inputs
for (var i = 0; i < input.length; i++) {
    input[i].addEventListener('input', function () {
        if (sessionStorage.getItem("enable") == "true") {
            console.log(this.value);
            localStorage.setItem(this.id, this.value);
        }
    });
}

//Get date inputs and save to local storage 
function getSetDate() {
    console.log("getSetDate")
    for (var j = 0; j < date.length; j++) {
        console.log(date)
        localStorage.setItem(date[j].id, date[j].value);
        console.log(date[j].value)
    }
}

//Get date inputs and save to local storage 
function getSetDateRequired() {
    console.log("getSetDate")
    for (var j = 0; j < dateRequired.length; j++) {
        localStorage.setItem(dateRequired[j].id, dateRequired[j].value);
        console.log(dateRequired[j].value)
    }
}

//Get inputs for every keydown
document.onkeydown = function () {
    console.log("key down")
    if (sessionStorage.getItem("enable") == "true") {
        for (var i = 0; i < input.length; i++) {
            input[i].addEventListener('input', function () {
                console.log(sessionStorage.getItem("enable"))
                localStorage.setItem(this.id, this.value);
            });
        }

        for (var i = 0; i < textareas.length; i++) {
            textareas[i].addEventListener('input', function () {
                localStorage.setItem(this.id, this.value);
            });
        }

        for (var j = 0; j < phone.length; j++) {
            localStorage.setItem(phone[j].id, phone[j].value);
        }

        for (var j = 0; j < date.length; j++) {
            localStorage.setItem(date[j].id, date[j].value);
        }

        for (var j = 0; j < dateRequired.length; j++) {
            localStorage.setItem(dateRequired[j].id, dateRequired[j].value);
        }
    }
};


