function zeigeWolf () {
    Blinken(Wolf, 0)
}
function zeigeZiege () {
    Blinken(Ziege, 0)
}
function zeigeBauer () {
    Blinken(Bauer, 0)
}
// Komm
function Blinken (x: number, y: number) {
    led.plot(x, y)
    basic.pause(500)
    led.toggle(x, y)
    basic.pause(500)
}
function zeigeKohl () {
    Blinken(Kohl, 0)
}
let Ziege = 0
let Wolf = 0
let Kohl = 0
let Bauer = 0
Bauer = 0
Kohl = 0
Wolf = 0
Ziege = 0
let Aktuell = 0
led.plot(0, 0)
led.plot(0, 2)
led.plot(0, 3)
led.plot(0, 4)
basic.forever(function () {
	
})
basic.forever(function () {
    zeigeBauer()
})
