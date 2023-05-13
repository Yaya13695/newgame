input.onButtonPressed(Button.A, function () {
    monkey.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    game.setScore(0)
    run = 1
    time = 500
})
input.onButtonPressed(Button.B, function () {
    monkey.change(LedSpriteProperty.X, 1)
})
let banana: game.LedSprite = null
let time = 0
let run = 0
let monkey: game.LedSprite = null
monkey = game.createSprite(2, 4)
run = 0
basic.forever(function () {
    if (run == 1) {
        banana = game.createSprite(randint(0, 4), 0)
        banana.set(LedSpriteProperty.Brightness, 50)
        for (let index = 0; index <= 4; index++) {
            banana.set(LedSpriteProperty.Y, index)
            basic.pause(time)
        }
        banana.delete()
        time += -20
    }
})
