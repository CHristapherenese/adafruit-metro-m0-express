let Temp = 0
ht16k33.setAddress(HT16K33_I2C_ADDRESSES.ADD_0x70)
ht16k33.setBlinkRate(0)
ht16k33.setBrightness(0)
forever(function () {
    Temp = 0
    console.logValue("Temp", Temp)
    pause(1000)
    Temp = 1
    console.logValue("Temp", Temp)
    pause(1000)
    Temp = 2
    console.logValue("Temp", Temp)
    pause(1000)
    Temp = 3
    console.logValue("Temp", Temp)
    pause(1000)
    Temp = pins.i2cReadNumber(
    24,
    NumberFormat.Int8LE,
    true
    )
    pins.i2cWriteNumber(
    113,
    Temp,
    NumberFormat.Int8LE,
    true
    )
})
