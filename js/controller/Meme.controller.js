'use strict'

// Globals
let gCanvas;
let gCtx;
let savedMemes;
let gIsDownload;

function init() {
    setUser()
    gPageIdx = 0;
    onHandlePages(0)
    handleUserModal();
    savedMemes = loadFromStorage('memeDB');
    gCanvas = document.querySelector('.meme-canvas')
    gCtx = gCanvas.getContext('2d')
    renderGallery();
}

function handleUserModal() {
    const userData = loadFromStorage('userDB');
    if (!userData || userData === []) {
        toggleModal(true);
    } else {
        renderUserName()
    }
}



// render

function renderMeme(isRect = true) {
    const meme = getMeme();
    var img = new Image();
    img.src = meme.src;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        if (isRect) {
            if (meme.lineIdx === 0) drawRect(20, 20, meme);
            if (meme.lineIdx === 2) drawRect(40, 200, meme)
            if (meme.lineIdx === 1) drawRect(40, 300, meme)
        }
        drawText(meme)

    };
}




function drawText(meme) {
    meme.lines.forEach(line => {
        gCtx.font = `normal normal ${line.size}px   ${line.font}`
        const x = alignTxt(line.align);
        gCtx.fillStyle = line.color
        gCtx.strokeStyle = line.strokeColor
        gCtx.lineWidth = 2
        gCtx.textAlign = line.align;
        gCtx.textBaseline = 'top'
        gCtx.fillText(line.txt, x, line.coordsTxt.y);
        gCtx.strokeText(line.txt, x, line.coordsTxt.y);
        drawCredit(line.color);
    })

}


function drawRect(x, y, meme) {
    const memeLine = meme.lines[gMeme.selectedLineIdx];
    const width = (memeLine.size < 32) ? memeLine.size * 15 : 22 * 15;
    const height = (memeLine.size < 32) ? memeLine.size * 3 : 22 * 3;
    gCtx.beginPath();
    gCtx.lineWidth = "2";
    gCtx.strokeStyle = "black";
    gCtx.rect(x, y, width, height);
    gCtx.stroke();

}




function drawCredit(color = 'white') {
    const nickname = getNickname();
    gCtx.font = `normal normal 30px   Brush Script MT	
    `
    gCtx.fillStyle = color
    gCtx.textAlign = 'start';
    gCtx.fillText(`created by`, 30, 350);
    gCtx.fillText(`  ${nickname}`, 30, 370);

}









// on events


function onChangeText(value) {
    changeText(value);
    renderMeme();
}


function onMoveLine(diff) {
    moveLine(diff)
    document.querySelector('.input-txt').value = getMemeTxt();
    renderMeme()
}

function onSetSize(diff) {
    setSize(diff)
    renderMeme()
}

function onChangeColor(color) {
    setColor(color);
    renderMeme();
}

function onResetMeme() {
    resetTxt();
}


function onSaveMeme() {
    saveMeme();
    updateSaved();
    renderMeme(false);
    renderPopup('saved')
}


function onSetStroke(color) {
    setStrokeColor(color);
    renderMeme();
}


function onSetAlign(dir) {
    setAlign(dir);
    renderMeme();
}


function onSetFont(font) {
    console.log('font:', font);

    setFont(font.value)
    renderMeme()
}

function onFinishLine() {
    updateLineIdx();
    document.querySelector('.input-txt').value = getMemeTxt();
    renderMeme();
}

function onDownloadImg() {
    gIsDownload = true
    renderMeme(false)
    setTimeout(() => {
        var url = gCanvas.toDataURL('image2/jpg', 1.0);
        var link = document.getElementById("dn-link")
        link.href = url
        link.click()
        gIsDownload = false
        renderMeme()
    }, 50);
    renderPopup('downloaded');
    updateDownload();
}


// toggle

function onToggleEditor(isOpen) {
    let elEditor = document.querySelector('.editor-main-container').classList;
    if (isOpen) {
        elEditor.remove('hidden');
    }
    else {
        elEditor.add('hidden');
        updateGalleryPage(true)
        renderGallery()
    }
    handleChevron();

}