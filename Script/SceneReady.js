function loopReady() {
    displayReady()
}

function displayReady() {
    drawSceneInit()

    if (menu === true) {
        drawMenu()
    }

    context.strokeRect(UI.ready.buttonMenu[0], UI.ready.buttonMenu[1], UI.ready.buttonMenu[2], UI.ready.buttonMenu[3])
}

function mouseUpReady(x, y, button) {
    if (button === 0) {
        if (menu === true) {
            if (pointInsideRectArray(x, y, UI.menu.buttonResume)) {
                menu = false
            } else if (pointInsideRectArray(x, y, UI.menu.buttonExit)) {
                menu = false
                scene = 'Title'
                state = ''
            }
        } else if (menu === false) {
            if (state === '') {
                if (pointInsideRectArray(x, y, UI.ready.buttonMenu)) {
                    menu = true
                }
            }
        }
    }
}

function keyDownReady(key) {
    if (menu === true) {
        if (key === 'r') {
            menu = false
        } else if (key === 'e') {
            menu = false
            scene = 'Title'
            state = ''
        }
    } else if (menu === false) {
        if (key === 'Escape') {
            menu = true
        }
        if (state === '') {
        }
    }
}

function keyUpReady(key) {

}