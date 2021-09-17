/*
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', onclick, false)
    function onclick() {
        chrome.tabs.query({ currentWindow: true, active: true },
            function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, 'hi', setCount)
            })
    }
    function setCount (res) {
        const div = document.createElement('div')
        //alert(res)
        div.textContent = '${res} bears'
        document.body.appendChild(div)

    }
}, false)*/

document.addEventListener('DOMContentLoaded', () => {
    const infoDisplay = document.getElementById('info');    

    window.addEventListener('DOMContentLoaded', function () {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {}, function (result) {
                infoDisplay.innerHTML = result
                console.log(result)
                
            });
        });
    });

});