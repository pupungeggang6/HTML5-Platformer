function loopTitle() {
    displayTitle()
}

function displayTitle() {
    drawSceneInit()

    context.fillStyle = 'White'
    context.fillRect(0, 0, 1280, 720)
    context.fillStyle = 'Black'

    context.fillText('Minesweeper Platformer', UI.textTitle[0], UI.textTitle[1])
    context.strokeRect(UI.title.buttonStart[0], UI.title.buttonStart[1], UI.title.buttonStart[2], UI.title.buttonStart[3])
    context.fillText('Start Game', UI.title.textStart[0], UI.title.textStart[1])
    context.strokeRect(UI.title.buttonNew[0], UI.title.buttonNew[1], UI.title.buttonNew[2], UI.title.buttonNew[3])
    context.fillText('New', UI.title.textNew[0], UI.title.textNew[1])
}

function mouseUpTitle(x, y, button) {

}

function keyDownTitle(key) {

}

function keyUpTitle(key) {

}