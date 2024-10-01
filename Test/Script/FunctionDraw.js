function drawSceneInit() {
    context.font = '32px neodgm'
    context.textAlign = 'left'
    context.textBaseline = 'top'
    context.strokeStyle = 'black'
    context.fillStyle = 'white'
    context.lineWidth = 2
    context.clearRect(0, 0, 960, 540)
    context.fillRect(0, 0, 960, 540)
    context.fillStyle = 'black'
}

function drawField() {
    context.strokeRect(Math.floor(varField.positionPlayer[0] - varField.camera[0] - 20), Math.floor(varField.positionPlayer[1] - varField.camera[1] - 20), 40, 40)
}

function drawMenu() {
    context.fillStyle = 'White'
    context.fillRect()
    context.fillStyle = 'Black'
}
