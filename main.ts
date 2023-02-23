serial.redirectToUSB()
basic.forever(function () {
    serial.writeValue("x", robotbit.RgbUltrasonic(DigitalPin.P8))
    if (robotbit.RgbUltrasonic(DigitalPin.P8) <= 10) {
        if (pins.analogReadPin(AnalogPin.P2) < 50) {
            basic.showLeds(`
                # . . . #
                . # # # #
                . # # # #
                . # # . .
                . . . # .
                `)
            robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Violet))
            music.playTone(262, music.beat(BeatFraction.Quarter))
            basic.pause(500)
        }
    } else if (robotbit.RgbUltrasonic(DigitalPin.P8) > 10) {
        music.rest(music.beat(BeatFraction.Quarter))
        robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Orange))
        basic.pause(1000)
        robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(1000)
    }
    if (pins.analogReadPin(AnalogPin.P2) > 50) {
        basic.showNumber(pins.analogReadPin(AnalogPin.P2))
        robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
