Temp = 0
ht16k33.set_address(HT16K33_I2C_ADDRESSES.ADD_0X70)
ht16k33.set_blink_rate(0)
ht16k33.set_brightness(0)
def on_forever():
    global Temp
    Temp = 0
    console.log_value("Temp", Temp)
    pause(1000)
    Temp = 1
    console.log_value("Temp", Temp)
    pause(1000)
    Temp = 2
    console.log_value("Temp", Temp)
    pause(1000)
    Temp = 3
    console.log_value("Temp", Temp)
    pause(1000)
    Temp = pins.i2c_read_number(24, NumberFormat.INT8_LE, True)
    pins.i2c_write_number(113, Temp, NumberFormat.INT8_LE, True)
forever(on_forever)