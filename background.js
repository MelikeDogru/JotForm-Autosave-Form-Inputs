console.log("background")

chrome.browserAction.onClicked.addListener(iconClicked)

function iconClicked(tab) {
    console.log(tab)

}

