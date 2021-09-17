//"matches": ["<all_urls>"],
/*
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    //alert(request)
    const re = new RegExp('bear', 'gi')
    const matches = document.documentElement.innerHTML.match(re)
    sendResponse({count: matches.length})
}) */

/*
let paragraps = document.getElementsByTagName('input')
console.log(paragraps)
for (elt of paragraps) {
    console.log(elt)
    elt.style['background-color'] = '#FF00FF'
}*/

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

var archive = [],
    keys = Object.keys(localStorage),
    i = 0, key;

for (; key = keys[i]; i++) {
    //archive.push(key + '=' + localStorage.getItem(key));
    archive.push({ key: key, value: localStorage.getItem(key) })
}
console.log(archive)

for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < archive.length; j++){
        if(input[i].id == archive[j].key){
            const element = document.getElementById(input[i].id);
            element.value = archive[j].value
        }
    }
}

function updateValue(e) {
    log.value = e.target.value;
    console.log(e.target.value)
    for (var i = 0; i < input.length; i++) {
        localStorage.setItem(input[i].id, e.target.value);
    }

}


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
};


/*
const logg = document.getElementById('first_5');
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