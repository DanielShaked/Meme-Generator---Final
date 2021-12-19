'use strict'

function addUser() {
    const elInputValue = document.querySelector('.nickname').value;
    createUser(elInputValue);
    toggleModal(false);
    renderUserName();
    updateGalleryPage(true);
    renderGallery();
    handleChevron();
}

// Render
function renderStatistics() {
    const elModal = document.querySelector('.stat-container');
    const user = getDataForDisplay();

    if (!user || user.length === 0) return;

    document.querySelector('.nickname-stat').innerText = `${user.nickname} ${user.icon}`;
    const elContentContainer = document.querySelector('.content-stat');
    elContentContainer.querySelector('.clicks-stat').innerText = `${user.clicks}`;
    elContentContainer.querySelector('.saved-stat').innerText = `${user.saved}`;
    elContentContainer.querySelector('.downloaded-stat').innerText = `${user.downloaded}`;
}



function renderArcStat() {
    const elCanvas = document.querySelector('.stat-canvas');
    const ctx = elCanvas.getContext('2d');

    const elTable = document.querySelector('tbody');

    const dataKeys = Object.keys(getStatForRender());
    const dataVals = Object.values(getStatForRender());
    const sum = dataVals.reduce((acc, num) => acc + num, 0);
    const colors = ['#F05454', '#7CD1B8', '#FFE400', '#064635', '#EC255A'];


    let temp = 0;
    let strHTMLs = ``;

    for (let i = 0; i < dataVals.length; i++) {
        ctx.fillStyle = colors[i];
        ctx.beginPath();
        ctx.moveTo(elCanvas.width / 2, elCanvas.height / 2);
        ctx.arc(elCanvas.width / 2, elCanvas.height / 2, elCanvas.height / 2, temp, temp + (Math.PI * 2 * (dataVals[i] / sum)), false);
        ctx.lineTo(elCanvas.width / 2, elCanvas.height / 2);
        ctx.fill();
        temp += Math.PI * 2 * (dataVals[i] / sum);
        strHTMLs +=
            `
        <tr> 
            <td> ${dataKeys[i]} </td> 
            <td> ${(dataVals[i] * 100).toFixed(2)}%  </td> 
            <td style="background-color: ${colors[i]};">  </td> 
        </tr>
        `
    }

    elTable.innerHTML = strHTMLs

}

function renderUserName() {
    const user = getDataForDisplay();
    const elSpan = document.querySelector('.user-name-msg');
    const elSpanInnerName = elSpan.querySelector('.rdr-name');
    elSpanInnerName.innerText = user.nickname;
    elSpan.classList.remove('hidden');
}


function onOpenStatistics() {
    toggleStatModal(true);
    if (!gOnGalleryPage) onToggleEditor(false);
    onToggleGallery(false);
    updateGalleryPage(false);
    renderStatistics();
    renderArcStat();

}

function toggleStatModal(isOpen) {
    const elStatModal = document.querySelector('.stat-container');
    if (isOpen) elStatModal.classList.remove('hidden');
    else {
        elStatModal.classList.add('hidden');
    }


}



function toggleModal(isOpen) {
    const elModal = document.querySelector('.modal-container');
    if (isOpen) {
        setTimeout(() => {
            onToggleGallery(false);
            elModal.classList.remove('hidden')
        }, 1200)

        onToggleEditor(false);

    }
    if (!isOpen) elModal.classList.add('hidden');
}