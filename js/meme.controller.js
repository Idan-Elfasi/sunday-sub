'use strict'

let gElCanvas
let gCtx

function inIt() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    renderMeme()
}


function renderMeme() {
    const img = new Image()
    img.src = 'img/meme.jpg'
    img.onload = function () {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        gCtx.fillText('Make it meme', 150, 20)
    }

}
