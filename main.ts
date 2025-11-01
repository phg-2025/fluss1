function zeigeWolf () {
    Blinken(Wolf, 3)
}
function zeigeZiege () {
    Blinken(Ziege, 4)
    Kohl += 1
}
function zeigeBauer () {
    if (Aktuell == 0) {
        Blinken(Bauer, 0)
    } else {
        input.onButtonEvent(Button.A, input.buttonEventClick(), function() {
            
        })
    }
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (Aktuell == 0) {
        Bauer += 1
        if (Bauer == 1) {
            Bauer += 1
            Bauer = Bauer % 5
        }
    } else {
        if (Aktuell == 2) {
            Kohl += 1
            if (Kohl == 1) {
                Kohl += 1
                Kohl = Kohl % 5
            }
        } else {
            if (Aktuell == 3) {
                Wolf += 1
                if (Wolf == 1) {
                    Wolf += 1
                    Wolf = Wolf % 5
                }
            } else {
                if (Aktuell == 4) {
                    Ziege += 1
                    if (Ziege == 1) {
                        Ziege += 1
                        Ziege = Ziege % 5
                    }
                } else {
                	
                }
            }
        }
    }
})
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
let objekte = [0, 5]
basic.forever(function () {
    zeigeBauer()
    zeigeKohl()
    zeigeWolf()
    zeigeZiege()
})
