Temp = 0
def on_forever():
    global Temp
    Temp = pins.i2c_read_number(24, NumberFormat.INT8_LE, True)
    console.log_value("Temp", pins.i2c_read_number(24, NumberFormat.INT8_LE, True))
forever(on_forever)