'use strict'
let gFilterBy = 'ALL';
let gNextId = 101;
let gOnGalleryPage = true;
let savedImgs;
const PAGE_SIZE = 10;
var gPageIdx = 0;
var gLastPageLength;
var gPopups = {
    notSaved: 'No meme has been saved yet! 😞',
    saved: 'meme saved! 😊',
    downloaded: "It's with you! 😊"

}




function getImgsToDisplay() {
    var startIdx = gPageIdx * PAGE_SIZE
    if (savedMemes) savedImgs = savedMemes.map(meme => meme.selectedImgId);
    if (gFilterBy === 'ALL') {
        var imgs = gImgs.slice(startIdx, startIdx + PAGE_SIZE);
    }
    if (gFilterBy === 'USER' && savedMemes) {
        var imgs = gImgs.filter(img => savedImgs.includes(img.id));
    }
    switch (gFilterBy) {
        case 'series':
            var imgs = gImgs.filter(img => img.keyWords.some(word => word === gFilterBy));
            break;
        case 'politics':
            var imgs = gImgs.filter(img => img.keyWords.some(word => word === gFilterBy));
            break;
        case 'animals':
            var imgs = gImgs.filter(img => img.keyWords.some(word => word === gFilterBy));
            break;
        case 'celebrity':
            var imgs = gImgs.filter(img => img.keyWords.some(word => word === gFilterBy));
            break;
        case 'funny':
            var imgs = gImgs.filter(img => img.keyWords.some(word => word === gFilterBy));
            break;
    }
    return imgs;
}



function updateGalleryPage(status) {
    gOnGalleryPage = status
}

function isOnGalleryPage() {
    return gOnGalleryPage
}


function updateLastPage(length) {
    gLastPageLength = length;
}


function getCurrPageLength() {
    const imgs = getImgsToDisplay();
    return imgs.length
}

function getLastPageLength() {
    return gLastPageLength;
}

function setFilter(filterBy) {
    gFilterBy = filterBy;
}

function createImgs(number) {
    const imgs = [];
    for (let i = 1; i < number; i++) {
        imgs.push({ id: gNextId++, src: `img/meme-sq/${i}.jpg`, keyWords: [] });
    }
    return imgs;
}


function setPageIdx(diff) {
    gPageIdx += diff;
}

function getPageIdx() {
    return gPageIdx;
}


function getPopUps() {
    return gPopups;
}

function updatePageIdx(idx) {
    gPageIdx = idx;
}

const gImgs = [
    {
        "id": 101,
        "src": "img/meme-sq/1.jpg",
        "keyWords": ['politics']
    },
    {
        "id": 102,
        "src": "img/meme-sq/2.jpg",
        "keyWords": ['animals']
    },
    {
        "id": 103,
        "src": "img/meme-sq/3.jpg",
        "keyWords": ['animals']
    },
    {
        "id": 104,
        "src": "img/meme-sq/4.jpg",
        "keyWords": ['animals']
    },
    {
        "id": 105,
        "src": "img/meme-sq/5.jpg",
        "keyWords": ['funny']
    },
    {
        "id": 106,
        "src": "img/meme-sq/6.jpg",
        "keyWords": ['series']
    },
    {
        "id": 107,
        "src": "img/meme-sq/7.jpg",
        "keyWords": ['funny']
    },
    {
        "id": 108,
        "src": "img/meme-sq/8.jpg",
        "keyWords": ['funny']
    },
    {
        "id": 109,
        "src": "img/meme-sq/9.jpg",
        "keyWords": ['funny']
    },
    {
        "id": 110,
        "src": "img/meme-sq/10.jpg",
        "keyWords": ['politics', 'funny']
    },
    {
        "id": 111,
        "src": "img/meme-sq/11.jpg",
        "keyWords": ['sport']
    },
    {
        "id": 112,
        "src": "img/meme-sq/12.jpg",
        "keyWords": ['funny', 'series']
    },
    {
        "id": 113,
        "src": "img/meme-sq/13.jpg",
        "keyWords": ['celebrity']
    },
    {
        "id": 114,
        "src": "img/meme-sq/14.jpg",
        "keyWords": ['series']
    },
    {
        "id": 115,
        "src": "img/meme-sq/15.jpg",
        "keyWords": ['series']
    },
    {
        "id": 116,
        "src": "img/meme-sq/16.jpg",
        "keyWords": ['series']
    },
    {
        "id": 117,
        "src": "img/meme-sq/17.jpg",
        "keyWords": ['politics']
    },
    {
        "id": 118,
        "src": "img/meme-sq/18.jpg",
        "keyWords": ['series']
    },
    {
        "id": 119,
        "src": "img/meme-sq/19.jpg",
        "keyWords": ['politics']
    },
    {
        "id": 120,
        "src": "img/meme-sq/20.jpg",
        "keyWords": ['animals']
    },
    {
        "id": 121,
        "src": "img/meme-sq/21.jpg",
        "keyWords": ['']
    },
    {
        "id": 122,
        "src": "img/meme-sq/22.jpg",
        "keyWords": []
    },
    {
        "id": 123,
        "src": "img/meme-sq/23.jpg",
        "keyWords": []
    },
    {
        "id": 124,
        "src": "img/meme-sq/24.jpg",
        "keyWords": []
    },
    {
        "id": 125,
        "src": "img/meme-sq/25.jpg",
        "keyWords": []
    },
    {
        "id": 126,
        "src": "img/meme-sq/26.jpg",
        "keyWords": []
    },
    {
        "id": 127,
        "src": "img/meme-sq/27.jpg",
        "keyWords": []
    },
    {
        "id": 128,
        "src": "img/meme-sq/28.jpg",
        "keyWords": []
    },
    {
        "id": 129,
        "src": "img/meme-sq/29.jpg",
        "keyWords": []
    },
    {
        "id": 130,
        "src": "img/meme-sq/30.jpg",
        "keyWords": []
    },
    {
        "id": 131,
        "src": "img/meme-sq/31.jpg",
        "keyWords": []
    },
    {
        "id": 132,
        "src": "img/meme-sq/32.jpg",
        "keyWords": []
    },
    {
        "id": 133,
        "src": "img/meme-sq/33.jpg",
        "keyWords": []
    },
    {
        "id": 134,
        "src": "img/meme-sq/34.jpg",
        "keyWords": []
    }
]