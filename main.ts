function pinkAndBlue() {
    earIn.setBrightness(100 * luminanceRate)
    earOut.setBrightness(20 * luminanceRate)
    earIn.showColor(neopixel.colors(NeoPixelColors.Purple))
    earOut.showColor(neopixel.colors(NeoPixelColors.Blue))
}
function run() {
    strip.clear()
    strip.setPixelColor(0, neopixel.hsl(280, 255, 50))
    strip.setPixelColor(5, neopixel.hsl(120, 180, 50))
    strip.setPixelColor(10, neopixel.hsl(280, 255, 50))
    strip.setPixelColor(15, neopixel.hsl(120, 180, 50))
    while (currentMode == 10) {
        strip.rotate(1)
        strip.show()
        basic.pause(25)
    }
}
function redGreenSparkle() {
    strip.clear()
    while (currentMode == 8) {
        randomRedPixel = randint(0, numberOfHalfLed)
        randomGreenPixel = randint(0, numberOfHalfLed)
        earIn.setPixelColor(randomRedPixel, neopixel.colors(NeoPixelColors.Red))
        earOut.setPixelColor(randomRedPixel, neopixel.colors(NeoPixelColors.Red))
        earIn.show()
        earOut.show()
        basic.pause(50)
        earIn.setPixelColor(randomRedPixel, neopixel.colors(NeoPixelColors.Black))
        earOut.setPixelColor(randomRedPixel, neopixel.colors(NeoPixelColors.Black))
        earIn.show()
        earOut.show()
        earIn.setPixelColor(randomGreenPixel, neopixel.colors(NeoPixelColors.Green))
        earOut.setPixelColor(randomGreenPixel, neopixel.colors(NeoPixelColors.Green))
        earIn.show()
        earOut.show()
        basic.pause(50)
        earIn.setPixelColor(randomGreenPixel, neopixel.colors(NeoPixelColors.Black))
        earOut.setPixelColor(randomGreenPixel, neopixel.colors(NeoPixelColors.Black))
        earIn.show()
        earOut.show()
    }
}
function CMY() {
    strip.clear()
    strip.setBrightness(100 * luminanceRate)
    strip.setPixelColor(0, neopixel.hsl(178, 100, 20))
    strip.setPixelColor(1, neopixel.hsl(178, 100, 20))
    strip.setPixelColor(2, neopixel.hsl(316, 100, 20))
    strip.setPixelColor(3, neopixel.hsl(316, 100, 20))
    strip.setPixelColor(4, neopixel.hsl(58, 100, 20))
    strip.setPixelColor(5, neopixel.hsl(58, 100, 20))
    strip.setPixelColor(6, neopixel.hsl(178, 100, 20))
    strip.setPixelColor(7, neopixel.hsl(178, 100, 20))
    strip.setPixelColor(8, neopixel.hsl(316, 100, 20))
    strip.setPixelColor(9, neopixel.hsl(316, 100, 20))
    strip.setPixelColor(10, neopixel.hsl(58, 100, 20))
    strip.setPixelColor(11, neopixel.hsl(58, 100, 20))
    strip.setPixelColor(12, neopixel.hsl(178, 100, 20))
    strip.setPixelColor(13, neopixel.hsl(178, 100, 20))
    strip.setPixelColor(14, neopixel.hsl(316, 100, 20))
    strip.setPixelColor(15, neopixel.hsl(316, 100, 20))
    strip.setPixelColor(16, neopixel.hsl(58, 100, 20))
    strip.setPixelColor(17, neopixel.hsl(58, 100, 20))
    strip.setPixelColor(18, neopixel.hsl(178, 100, 20))
    strip.setPixelColor(19, neopixel.hsl(178, 100, 20))
    strip.setPixelColor(20, neopixel.hsl(316, 100, 20))
    while (currentMode == 4) {
        strip.setBrightness(100 * luminanceRate)
        strip.rotate(1)
        strip.show()
        basic.pause(50)
    }
}
function blueSparkle() {
    while (currentMode == 2) {
        earIn.setBrightness(20 * luminanceRate)
        earOut.setBrightness(20 * luminanceRate)
        earIn.showColor(neopixel.colors(NeoPixelColors.Blue))
        earOut.showColor(neopixel.colors(NeoPixelColors.Blue))
        randomWhitePixel = randint(0, numberOfHalfLed)
        earIn.setPixelColor(randomWhitePixel, neopixel.colors(NeoPixelColors.White))
        earOut.setPixelColor(randomWhitePixel, neopixel.colors(NeoPixelColors.White))
        earIn.show()
        earOut.show()
        basic.pause(100)
        earIn.setPixelColor(randomWhitePixel, neopixel.colors(NeoPixelColors.Black))
        earOut.setPixelColor(randomWhitePixel, neopixel.colors(NeoPixelColors.Black))
        earIn.show()
        earOut.show()
    }
}
function angleEffect() {
    earIn.showColor(neopixel.rgb(input.rotation(Rotation.Pitch), input.rotation(Rotation.Roll), 255))
    earOut.showColor(neopixel.rgb(255, input.rotation(Rotation.Pitch), input.rotation(Rotation.Roll)))
}
function spin() {
    strip.clear()
    earIn.setPixelColor(0, neopixel.hsl(0, 255, 50))
    earIn.setPixelColor(6, neopixel.hsl(0, 255, 50))
    earIn.setPixelColor(12, neopixel.hsl(0, 255, 50))
    earIn.setPixelColor(18, neopixel.hsl(0, 255, 50))
    earOut.setPixelColor(0, neopixel.hsl(0, 255, 50))
    earOut.setPixelColor(6, neopixel.hsl(0, 255, 50))
    earOut.setPixelColor(12, neopixel.hsl(0, 255, 50))
    earOut.setPixelColor(18, neopixel.hsl(0, 255, 50))
    while (currentMode == 11) {
        earIn.rotate(1)
        earIn.show()
        earOut.rotate(-1)
        earOut.show()
        basic.pause(25)
    }
}
function analogousShift(lowColor: number, highColor: number) {
    earIn.showRainbow(lowColor, highColor)
    earOut.showRainbow(lowColor, highColor)
    while (currentMode == 3 || currentMode == 5 || currentMode == 7 || currentMode == 12) {
        basic.pause(100)
        earIn.setBrightness(20 * luminanceRate)
        earOut.setBrightness(20 * luminanceRate)
        earOut.rotate(1)
        earOut.show()
        earIn.rotate(-1)
        earIn.show()
    }
}
function Greens() {
    analogousShift(80, 185)
}
function rainbow() {
    analogousShift(1, 360)
}
function whiteGoldSparkle() {
    strip.clear()
    while (currentMode == 9) {
        randomWhitePixel = randint(0, numberOfHalfLed)
        randomGoldPixel = randint(0, numberOfHalfLed)
        earIn.setPixelColor(randomWhitePixel, neopixel.colors(NeoPixelColors.White))
        earOut.setPixelColor(randomWhitePixel, neopixel.colors(NeoPixelColors.White))
        earIn.show()
        earOut.show()
        basic.pause(50)
        earIn.setPixelColor(randomWhitePixel, neopixel.colors(NeoPixelColors.Black))
        earOut.setPixelColor(randomWhitePixel, neopixel.colors(NeoPixelColors.Black))
        earIn.show()
        earOut.show()
        earIn.setPixelColor(randomGoldPixel, neopixel.colors(NeoPixelColors.Orange))
        earOut.setPixelColor(randomGoldPixel, neopixel.colors(NeoPixelColors.Yellow))
        earIn.show()
        earOut.show()
        basic.pause(50)
        earIn.setPixelColor(randomGoldPixel, neopixel.colors(NeoPixelColors.Black))
        earOut.setPixelColor(randomGoldPixel, neopixel.colors(NeoPixelColors.Black))
        earIn.show()
        earOut.show()
    }
}
function uniqueSparkle() {
    while (currentMode == 6) {
        earIn.showColor(neopixel.hsl(50, 255, 50))
        earOut.showColor(neopixel.hsl(50, 255, 50))
        randomWhitePixel = randint(0, numberOfHalfLed)
        earIn.setPixelColor(randomWhitePixel, neopixel.colors(NeoPixelColors.White))
        earOut.setPixelColor(randomWhitePixel, neopixel.colors(NeoPixelColors.White))
        earIn.show()
        earOut.show()
        basic.pause(100)
        earIn.setPixelColor(randomWhitePixel, neopixel.colors(NeoPixelColors.Black))
        earOut.setPixelColor(randomWhitePixel, neopixel.colors(NeoPixelColors.Black))
        earIn.show()
        earOut.show()
    }
}
function turnOff() {
    while (currentMode == 12) {
        earIn.showColor(neopixel.colors(NeoPixelColors.Black))
        earOut.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(25)
    }
}
function ironMan() {
    analogousShift(0, 45)
}
input.onButtonPressed(Button.A, function () {
    currentMode += -1
    if (currentMode < 1) {
        currentMode = numberOfModes
    }
    basic.showNumber(currentMode)
})
input.onButtonPressed(Button.B, function () {
    currentMode += 1
    if (currentMode > numberOfModes) {
        currentMode = 1
    }
    basic.showNumber(currentMode)
})
input.onButtonPressed(Button.AB, function () {
    luminanceRate += -0.1
    if (luminanceRate < 0) {
        luminanceRate = 1
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "mode") {
        currentMode = value
    }
})
let randomGoldPixel = 0
let randomWhitePixel = 0
let randomGreenPixel = 0
let randomRedPixel = 0
let currentMode = 0
let earOut: neopixel.Strip = null
let earIn: neopixel.Strip = null
let strip: neopixel.Strip = null
let luminanceRate = 0
let numberOfModes = 0
let numberOfHalfLed = 0
numberOfHalfLed = 10
numberOfModes = 13
luminanceRate = 1
strip = neopixel.create(DigitalPin.P2, 2 * numberOfHalfLed, NeoPixelMode.RGBW)
earIn = strip.range(0, numberOfHalfLed)
earOut = strip.range(numberOfHalfLed, numberOfHalfLed)
radio.setGroup(1)
currentMode = 1
basic.forever(function () {
    if (currentMode == 1) {
        pinkAndBlue()
    } else if (currentMode == 2) {
        blueSparkle()
    } else if (currentMode == 3) {
        rainbow()
    } else if (currentMode == 4) {
        CMY()
    } else if (currentMode == 5) {
        earIn.setBrightness(20)
        earOut.setBrightness(20)
        Greens()
    } else if (currentMode == 6) {
        earIn.setBrightness(20)
        earOut.setBrightness(20)
        uniqueSparkle()
    } else if (currentMode == 7) {
        earIn.setBrightness(20)
        earOut.setBrightness(20)
        ironMan()
    } else if (currentMode == 8) {
        earIn.setBrightness(75)
        earOut.setBrightness(75)
        redGreenSparkle()
    } else if (currentMode == 9) {
        earIn.setBrightness(75)
        earOut.setBrightness(75)
        whiteGoldSparkle()
    } else if (currentMode == 10) {
        earIn.setBrightness(70)
        earOut.setBrightness(70)
        run()
    } else if (currentMode == 11) {
        earIn.setBrightness(70)
        earOut.setBrightness(70)
        spin()
    } else if (currentMode == 12) {
        earIn.setBrightness(70)
        earOut.setBrightness(70)
        angleEffect()
    } else if (currentMode == 13) {
        turnOff()
    } else {
        currentMode = 1
    }
})
