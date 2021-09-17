console.log("background")

/*
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    for (var a in localStorage) {
        console.log(a, ' = ', localStorage[a]);
    }
    const items = { ...localStorage };
    console.log(items)
    var archive = [],
        keys = Object.keys(localStorage),
        i = 0, key;

    for (; key = keys[i]; i++) {
        archive.push(key + '=' + localStorage.getItem(key));
    }
    console.log(archive)
}); */

