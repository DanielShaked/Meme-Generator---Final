'use strict'

const STORAGE_KEY = 'memeDB'

function getImgsToDisplay() {
    return gImgs;
}

const gMemeDef = {
    selectedImgId: 101,
    selectedLineIdx: 0,
    lines: [{
        txt: '',
        coordsTxt: { x: 200, y: 35 },
        size: 35,
        align: 'start',
        color: 'white',
        strokeColor: 'black',
        font: 'Impact',


    },
    {
        txt: '',
        coordsTxt: { x: 200, y: 300 },
        size: 35,
        align: 'start',
        color: 'white',
        strokeColor: 'black',
        font: 'Impact',



    },
    {
        txt: '',
        size: 35,
        coordsTxt: { x: 200, y: 200 },
        align: 'start',
        color: 'white',
        strokeColor: 'black',
        font: 'Impact',

    }
    ]
}

let gMeme = { ...gMemeDef }



// get
function getMeme() {
    const meme = gMeme;
    const img = gImgs.find(img => img.id === gMeme.selectedImgId);
    return {
        src: img.src,
        imgId: meme.selectedLineIdx,
        lineIdx: meme.selectedLineIdx,
        lines: meme.lines,

    }
}


function getMemeTxt() {
    return gMeme.lines[gMeme.selectedLineIdx].txt
}

// set
function setImg(imgId) {
    let storageMatch;
    if (savedMemes) {
        storageMatch = savedMemes.find(meme => meme.selectedImgId === imgId)
    }
    if (storageMatch) {
        gMeme = storageMatch;
    } else {
        gMeme = { ...gMemeDef }
        gMeme.selectedImgId = imgId;
    }
}

function setSize(diff) {
    gMeme.lines[gMeme.selectedLineIdx].size += diff;
}

function setColor(color) {
    gMeme.lines[0].color = color;
}

function setStrokeColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].strokeColor = color;
}


function setAlign(dir) {
    if (dir === 'left') gMeme.lines[gMeme.selectedLineIdx].align = 'start';
    if (dir === 'right') gMeme.lines[gMeme.selectedLineIdx].align = 'center';
    if (dir === 'center') gMeme.lines[gMeme.selectedLineIdx].align = 'end';
}

function setFont(font) {
    gMeme.lines[gMeme.selectedLineIdx].font = font;
}


// actions (call from controller)

function changeText(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt;
}





// buttons Actions


function moveLine(diff) {
    if ((diff < 0 && gMeme.selectedLineIdx === 0) || (diff > 0 && gMeme.selectedLineIdx === 2)) return;
    gMeme.selectedLineIdx += diff;
}

function resetTxt() {
    if (savedMemes) {
        savedImgs = savedMemes.map(meme => meme.selectedImgId);
        console.log('savedImgs:', savedImgs);

        if (savedImgs.includes(gMeme.selectedImgId)) return;
    }
    console.log('vla');
    gMeme.lines.forEach(line => {
        line.txt = ''
        line.size = 35;
        line.color = 'white'
    })
}


function saveMeme() {
    const imgIdx = gMeme.selectedImgId;
    console.log('imgIdx:', imgIdx);
    const img = gImgs.find(img => img.id === imgIdx);
    img.keyWords.push('USER')
    SaveDataToLocalStorage(gMeme);
    savedMemes = loadFromStorage('memeDB');
}





function updateLineIdx() {
    if (gMeme.selectedLineIdx === 2) return;
    gMeme.selectedLineIdx++
}


function _saveMemeToStorage() {
    saveToStorage(STORAGE_KEY, gMeme);
}