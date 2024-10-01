let canvas
let context
let gameInstance
let gameFrameCurrent
let gameFramePrevious
let delta

let scene = 'Title'
let state = ''
let menu = false

let varField = {
    camera : [0, 0],
    positionPlayer : [40, 40],
    place : 'Start',
    field : {},
}
