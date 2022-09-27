input.onGesture(Gesture.Shake, function () {
    Myhand = randint(1, 3)
    if (Myhand == 1) {
        Rock.showImage(0)
    }
    if (Myhand == 2) {
        paper.showImage(0)
    }
    if (Myhand == 3) {
        scissors.showImage(0)
    }
})
let Myhand = 0
let scissors: Image = null
let paper: Image = null
let Rock: Image = null
Rock = images.createImage(`
    . . . . .
    . . . . .
    . # # # .
    # # # # #
    # # # # #
    `)
paper = images.createImage(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
scissors = images.createImage(`
    # # . . #
    # # . # .
    . . # . .
    # # . # .
    # # . . #
    `)
