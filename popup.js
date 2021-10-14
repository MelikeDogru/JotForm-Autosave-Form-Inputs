var res;
function popup(message, enable) {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { "message": message, "enable": enable }, function (response) {
            //console.log(response.data);
            res = response.data
            if (res == "true") {
                localStorage.setItem("enable1", res)
            }
            if (res == "false") {
                localStorage.setItem("enable1", res)
            }
            if (res == true) {
                localStorage.setItem("enable1", res)
            }
            if (res == false) {
                localStorage.setItem("enable1", res)
            }

        });
    });
}

function CustomAlert() {
    this.render = function (dialog) {
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH + "px";
        dialogbox.style.left = (winW / 2) - (550 * .5) + "px";
        dialogbox.style.top = "100px";
        dialogbox.style.display = "block";
        document.getElementById('dialogboxhead').innerHTML = "Warning!";
        document.getElementById('dialogboxbody').innerHTML = dialog;
        document.getElementById('dialogboxfoot').innerHTML = '<button id="ok" class="btnOK">Delete</button>';
        document.getElementById("ok").addEventListener("click", okClick);
    }
    this.ok = function () {
        document.getElementById('dialogbox').style.display = "none";
        document.getElementById('dialogoverlay').style.display = "none";
    }
}
var Alert = new CustomAlert();

function okClick() {
    var element2 = document.getElementsByTagName('input');
    document.getElementById('dialogbox').style.display = "none";
    document.getElementById('dialogoverlay').style.display = "none";
    document.body.style.height = "100px";
    popup("delete", element2[0].checked);
}


document.addEventListener('DOMContentLoaded', function () {

    var enabling = localStorage.getItem("enable1");
    console.log(enabling)

    var element1 = document.getElementsByTagName('input');
    var newToggleHTML1 = element1[0].innerHTML

    var deleteBtn = document.getElementById('deleteButton');
    var element = document.getElementsByTagName('input');
    const header = document.querySelector('h1');
    const span = document.getElementsByTagName('span');
    var newHTML = span[2].innerHTML
    var newToggleHTML = element[0].innerHTML

    if (enabling == "true") {
        console.log("true")
        newHTML = newHTML.replace(span[2].innerHTML, `<span style="color: #ec782a;">enabled</span>`)
        newToggleHTML1 = newToggleHTML1.replace(element1[0].innerHTML, '<input class="switch-input" type="checkbox" id="switch1" checked />')
        element1[0].innerHTML = newToggleHTML1
        span[2].innerHTML = newHTML
        element1[0].checked = true
    }

    if (enabling == "false") {
        console.log("false")
        newHTML = newHTML.replace(span[2].innerHTML, `<span style="color: rgb(12, 85, 219);">disabled</span>`)
        newToggleHTML1 = newToggleHTML1.replace(element1[0].innerHTML, '<input class="switch-input" type="checkbox" id="switch1" />')
        element1[0].innerHTML = newToggleHTML1
        span[2].innerHTML = newHTML
        element1[0].checked = false
    }

    deleteBtn.addEventListener('click', function () {
        console.log("hello");
        document.body.style.height = "280px";
        Alert.render('All autosaved inputs in storage will be deleted and the page will be reloaded. Are you sure you want to continue?')
    }, false);
    element[0].addEventListener('click', function () {
        console.log(element[0].checked)
        if (element[0].checked == true) {
            newHTML = newHTML.replace(span[2].innerHTML, `<span style="color: #ec782a;">enabled</span>`)
            newToggleHTML = newToggleHTML.replace(element[0].innerHTML, '<input class="switch-input" type="checkbox" id="switch1" checked />')
            span[2].innerHTML = newHTML
            element[0].innerHTML = newToggleHTML
            popup("mes", element[0].checked);
        }
        if (element[0].checked == false) {
            newHTML = newHTML.replace(span[2].innerHTML, `<span style="color: rgb(12, 85, 219);">disabled</span>`)
            newToggleHTML = newToggleHTML.replace(element[0].innerHTML, '<input class="switch-input" type="checkbox" id="switch1" />')
            element[0].innerHTML = newToggleHTML
            span[2].innerHTML = newHTML
            popup("mes", element[0].checked);
        }
    }, false);
}, false);
