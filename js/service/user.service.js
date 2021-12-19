'use strict'
let gUser;
var gImgsMap


function setUser() {
    let user = loadFromStorage('userDB');
    if (!user || user.length === 0) return;
    gUser = user;
}

function createUser(nickname, icon = '😅', color = 'black') {

    const user = {
        nickname,
        icon,
        color,
        mapId: {},
        mapCategory: {},
        clicks: 0,
        saved: 0,
        downloaded: 0,

    }
    gUser = user;
    saveToStorage('userDB', gUser);
}


function getDataForDisplay() {
    return gUser;
}


function updateClicks() {
    let memeId = gMeme.selectedImgId.toString()
    gUser.mapId[memeId] = (!gUser.mapId[memeId]) ? 1 : mapId[gUser.memeId] + 1;
    getCategoryById();
    saveToStorage('userDB', gUser);
}


function updateCatMap() {
    gImgs.forEach(img => {
        if (img.id === gMeme.selectedImgId) {
            const category = img.keyWords[0];
            console.log('category:', category);
            gUser.mapCategory[category] = (gUser.mapCategory[category]) ? gUser.mapCategory[category] + 1 : 1
        }
    })
    saveToStorage('userDB', gUser);

}

function updateUserData() {
    gUser.clicks++
}


function getStatForRender() {
    const mapCatVals = Object.values(gUser.mapCategory)
    const sumOfClicks = mapCatVals.reduce((acc, num) => acc + num, 0);
    for (let key in gUser.mapCategory) {
        gUser.mapCategory[key] = gUser.mapCategory[key] / sumOfClicks
    }

    return gUser.mapCategory;

}

function updateSaved() {
    gUser.saved++
}

function updateDownload() {
    gUser.downloaded++
}


function getNickname() {
    return gUser.nickname;
}