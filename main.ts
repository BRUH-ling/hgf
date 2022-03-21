input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.Y, -1)
})
input.onGesture(Gesture.TiltLeft, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.Shake, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
let sprite: game.LedSprite = null
game.setLife(3)
sprite = game.createSprite(0, 0)
let string = game.createSprite(5, 5)
basic.forever(function () {
    music.playMelody("C C F E D E F C ", 120)
    if (sprite.isTouching(string)) {
        if (string.isTouching(sprite)) {
            string.delete()
            sprite.delete()
        }
    }
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.Chessboard)
})
