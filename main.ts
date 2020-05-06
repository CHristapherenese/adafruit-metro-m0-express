let Temp = 0
forever(function () {
    Temp = pins.i2cReadNumber(
    24,
    NumberFormat.Int8LE,
    true
    )
    console.logValue("Temp", pins.i2cReadNumber(
    24,
    NumberFormat.Int8LE,
    true
    ))
})
