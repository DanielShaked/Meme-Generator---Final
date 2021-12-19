'use strict'




function saveToStorage(key, val) {
    const json = JSON.stringify(val)
    localStorage.setItem(key, json)
}

function loadFromStorage(key) {
    const json = localStorage.getItem(key)
    const val = JSON.parse(json)
    return val
}



function SaveDataToLocalStorage(newData) {
    var memes = JSON.parse(localStorage.getItem("memeDB") || "[]");
    memes.push(newData);
    localStorage.setItem('memeDB', JSON.stringify(memes));
}
