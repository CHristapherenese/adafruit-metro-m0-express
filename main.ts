let Temp = 0
pause(1000)
Temp = 1
pause(1000)
Temp = 2
pause(1000)
Temp = 3
pause(1000)
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
