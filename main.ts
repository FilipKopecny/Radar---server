radio.onReceivedString(function (receivedString) {
    if (receivedString == "snimaj") {
        for (let index = 0; index < PocetKrokov; index++) {
            pins.servoWritePin(AnalogPin.P0, Uhol)
            radio.sendValue("uhol", Uhol)
            basic.pause(10)
            radio.sendValue("dialka", sonar.ping(
            DigitalPin.P14,
            DigitalPin.P15,
            PingUnit.Centimeters
            ))
            basic.pause(10)
            Uhol += 180 / PocetKrokov
        }
        basic.pause(500)
        Uhol = 0
        pins.servoWritePin(AnalogPin.P0, Uhol)
    }
})
let Uhol = 0
let PocetKrokov = 0
radio.setGroup(1)
let Dialka = 0
PocetKrokov = 30
Uhol = 0
pins.servoWritePin(AnalogPin.P0, Uhol)
