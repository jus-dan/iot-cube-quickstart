basic.showIcon(IconNames.Yes)
OLED.init(128, 64)
IoTCube.LoRa_Join(
eBool.enable,
eBool.enable,
10,
8
)
OLED.writeStringNewLine("Hello World!")
basic.showIcon(IconNames.Yes)
loops.everyInterval(5000, function () {
    if (IoTCube.getStatus(eSTATUS_MASK.JOINED)) {
        OLED.clear()
        OLED.writeStringNewLine("Lichtstärke: " + input.lightLevel())
        basic.showIcon(IconNames.SmallHeart)
        IoTCube.addIlluminance(input.lightLevel(), 1)
        IoTCube.addAnalogInput(input.soundLevel(), 2)
        IoTCube.SendBuffer(IoTCube.getCayenne())
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
