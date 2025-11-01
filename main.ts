function zeogeWolf () {
    if (Aktuell == 2) {
        Blinken(Wolf, 0)
    } else {
        led.plot(Wolf, 3)
    }
}
function zeigeBauer () {
    if (Aktuell == 0) {
        Blinken(Bauer, 0)
    } else {
        led.plot(Bauer, 0)
    }
}
function zeogeZiege () {
    if (Aktuell == 2) {
        Blinken(Ziege, 0)
    } else {
        led.plot(Ziege, 4)
    }
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
    zeigeKohl()
    zeogeWolf()
    zeogeZiege()
}
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (Aktuell == 0) {
        Bauer += 4 - Bauer
    }
    if (Aktuell == 2) {
        Kohl += 4 - Kohl
    }
    if (Aktuell == 3) {
        Wolf += 4 - Wolf
    }
    if (Aktuell == 4) {
        Ziege += 4 - Ziege
    }
    Zeigen()
})
// Komm
function Blinken (x: number, y: number) {
    led.plot(x, y)
    basic.pause(500)
    led.toggle(x, y)
    basic.pause(500)
}
function zeigeKohl () {
    if (Aktuell == 2) {
        Blinken(Kohl, 0)
    } else {
        led.plot(Kohl, 2)
    }
}
let Aktuell = 0
let Ziege = 0
let Wolf = 0
let Kohl = 0
let Bauer = 0
Bauer = 0
Kohl = 0
Wolf = 0
Ziege = 0
Aktuell = 0
led.plot(0, 0)
led.plot(0, 2)
led.plot(0, 3)
led.plot(0, 4)
basic.forever(function () {
	
})
