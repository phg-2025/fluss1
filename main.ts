function zeigeWolf () {
    Blinken(Wolf, 3)
}
function zeigeZiege () {
    Blinken(Ziege, 4)
}
function zeigeBauer () {
    if (Aktuell == 0) {
        Blinken(Bauer, 0)
    } else {
    	
    }
}
// Komm
function Blinken (x: number, y: number) {
    led.plot(x, y)
    basic.pause(500)
    led.toggle(x, y)
    basic.pause(500)
}
function zeigeKohl () {
    Blinken(Kohl, 2)
}
let Aktuell = 0
let Ziege = 0
let Wolf = 0
let Kohl = 0
let Bauer = 0
Bauer = 4
Kohl = 0
Wolf = 0
Ziege = 0
Aktuell = 0
led.plot(0, 0)
led.plot(0, 2)
led.plot(0, 3)
led.plot(0, 4)
basic.forever(function () {
    zeigeBauer()
    zeigeKohl()
    zeigeWolf()
    zeigeZiege()
})
