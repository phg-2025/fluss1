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
        Bauer += 4 - Bauer
        zeigeBauer()
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
let Ziege = 0
let Wolf = 0
let Kohl = 0
let Bauer = 0
let Aktuell = 0
Aktuell = 0
led.plot(0, 0)
Bauer = 0
basic.forever(function () {
	
})
