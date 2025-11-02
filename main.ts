function zeigeBauer () {
    led.plot(Bauer, 0)
    led.unplot(4 - Bauer, 0)
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Aktuell += 1
    if (Aktuell == 1) {
        Aktuell += 1
    }
    Aktuell = Aktuell % 5
    Zeigen()
})
function Zeigen () {
    zeigeBauer()
}
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (Aktuell == 0) {
        if (Bauer == 0) {
            Bauer = 4
        } else {
            Bauer = 0
        }
        zeigeBauer()
    }
    if (Aktuell == 2) {
        if (Kohl == 0) {
            Kohl = 4
        } else {
            Kohl = 0
        }
    }
})
function Blinken (Art: number) {
    led.plot(Art, Aktuell)
    basic.pause(300)
    led.unplot(Art, Aktuell)
    basic.pause(300)
}
let Kohl = 0
let Bauer = 0
let Aktuell = 0
Aktuell = 0
led.plot(0, 0)
Bauer = 0
basic.forever(function () {
    if (Aktuell == 0) {
        Blinken(Bauer)
    }
    if (Aktuell == 2) {
        Blinken(Kohl)
    }
    if (Aktuell == 3) {
        let Wolf = 0
        Blinken(Wolf)
    }
    if (Aktuell == 4) {
        let Ziege = 0
        Blinken(Ziege)
    }
})
