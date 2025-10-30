// Komm
function Blinken (x: number, y: number) {
    led.plot(x, y)
    basic.pause(500)
    led.toggle(x, y)
    basic.pause(500)
}
basic.forever(function () {
	
})
basic.forever(function () {
    Blinken(1, 1)
    music.playTone(262, music.beat(BeatFraction.Whole))
    Blinken(2, 2)
})
