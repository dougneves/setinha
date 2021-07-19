function seta_esquerda () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
}
function tocar_musica_sucesso () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    music.playMelody("A B A C5 B C5 B B ", 200)
}
function seta_direita () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
}
input.onButtonPressed(Button.A, function () {
    if (status == 2) {
        if (seta == 0) {
            status = 3
        } else {
            status = 4
        }
    }
})
function tocar_musica_falha () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    music.playMelody("E D C E D C D D ", 120)
}
input.onButtonPressed(Button.AB, function () {
    if (status == 2) {
        if (seta == 1) {
            status = 3
        } else {
            status = 4
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (status == 2) {
        if (seta == 2) {
            status = 3
        } else {
            status = 4
        }
    }
})
function seta_cima () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
}
let loops2 = 0
let seta = 0
let status = 0
status = 1
basic.forever(function () {
    if (status == 1) {
        loops2 = 0
        seta = randint(0, 2)
        if (seta == 0) {
            seta_esquerda()
        } else if (seta == 1) {
            seta_cima()
        } else {
            seta_direita()
        }
        status = 2
    } else if (status == 2) {
        basic.pause(100)
        loops2 += 1
        if (loops2 > 15) {
            status = 4
        }
    } else if (status == 3) {
        tocar_musica_sucesso()
        status = 1
    } else {
        tocar_musica_falha()
        status = 1
    }
})
