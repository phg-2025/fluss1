// Komm
function Blinken (x: number, y: number) {
    led.plot(x, y)
    basic.pause(500)
    led.toggle(x, y)
    basic.pause(500)
}
let Bauer = 0
let Kohl = 0
let Wolf = 0
let Ziege = 0
let Aktuell = 0
led.plot(0, 0)
led.plot(0, 2)
led.plot(0, 3)
led.plot(0, 4)
basic.forever(function () {
    Blinken(1, 1)
    Blinken(2, 2)
})
