/* ------ ここからシステム用関数 ------ */
function checkStatus() {
    basic.clearScreen()

    let x = 0
    let y = 0

    // currentEffectMode
    x = (currentEffectMode - 1) % 5
    if (currentEffectMode > 5) {
        y = 1
    }
    led.plot(x, y)

    // currentColorMode
    led.plot(currentColorMode - 1, 2)

    // luminanceRate
    for (let i = 0; i < Math.floor(luminanceRate / 0.2); i++) {
        led.plot(i, 3)
    }
}
function sendStatus() {
    if (MASTER) {
        radio.sendValue("effect", currentEffectMode)
        radio.sendValue("color", currentColorMode)
    }
}
/* ------ ここまで状態確認用関数 ------ */

/* ------ ここからエフェクトパターン用関数 ------ */
function flow(baseColor: NeoPixelColors, flowColor: NeoPixelColors) {
    strip.clear()
    strip.showColor(baseColor)
    for (let i = 0; i < 5; i++) {
        strip.setPixelColor(i, flowColor)
    }
    while (!changeFlag) {
        basic.pause(80)
        strip.rotate(1)
        strip.show()
    }
}
function whiteSparkle(baseColor: NeoPixelColors) {
    while (!changeFlag) {
        earIn.showColor(neopixel.colors(baseColor))
        earOut.showColor(neopixel.colors(baseColor))

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
function centerSeparate(lowColor: number, highColor: number) {
    earIn.showRainbow(lowColor, highColor)
    earOut.showRainbow(lowColor, highColor)
    while (!changeFlag) {
        basic.pause(100)
        earOut.rotate(1)
        earOut.show()
        earIn.rotate(-1)
        earIn.show()
    }
}
function cmy() {
    strip.clear()
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
    while (!changeFlag) {
        strip.rotate(1)
        strip.show()
        basic.pause(50)
    }
}
function twoColorSparkle(color1: NeoPixelColors, color2: NeoPixelColors) {
    strip.clear()
    while (!changeFlag) {
        randomRedPixel = randint(0, numberOfHalfLed)
        randomGreenPixel = randint(0, numberOfHalfLed)
        earIn.setPixelColor(randomRedPixel, neopixel.colors(color1))
        earOut.setPixelColor(randomRedPixel, neopixel.colors(color1))
        earIn.show()
        earOut.show()
        basic.pause(50)
        earIn.setPixelColor(randomRedPixel, neopixel.colors(NeoPixelColors.Black))
        earOut.setPixelColor(randomRedPixel, neopixel.colors(NeoPixelColors.Black))
        earIn.show()
        earOut.show()
        earIn.setPixelColor(randomGreenPixel, neopixel.colors(color2))
        earOut.setPixelColor(randomGreenPixel, neopixel.colors(color2))
        earIn.show()
        earOut.show()
        basic.pause(50)
        earIn.setPixelColor(randomGreenPixel, neopixel.colors(NeoPixelColors.Black))
        earOut.setPixelColor(randomGreenPixel, neopixel.colors(NeoPixelColors.Black))
        earIn.show()
        earOut.show()
    }
}
function flowSparcle(color1: NeoPixelColors, color2: NeoPixelColors) {
    strip.clear()
    strip.setPixelColor(0, color1)
    strip.setPixelColor(5, color2)
    strip.setPixelColor(10, color1)
    strip.setPixelColor(15, color2)
    while (!changeFlag) {
        strip.rotate(1)
        strip.show()
        basic.pause(25)
    }
}
function centerGather(color: NeoPixelColors) {
    strip.clear()
    earIn.setPixelColor(0, color)
    earIn.setPixelColor(6, color)
    earIn.setPixelColor(12, color)
    earIn.setPixelColor(18, color)
    earOut.setPixelColor(0, color)
    earOut.setPixelColor(6, color)
    earOut.setPixelColor(12, color)
    earOut.setPixelColor(18, color)
    while (!changeFlag) {
        earIn.rotate(1)
        earIn.show()
        earOut.rotate(-1)
        earOut.show()
        basic.pause(25)
    }
}
/* ------ ここまでエフェクトパターン用関数 ------ */

/* ------ ここからエフェクト内容指定関数 ------ */
function twoToneEffect() {
    if (currentColorMode == 1) {
        earIn.showColor(neopixel.colors(NeoPixelColors.Purple))
        earOut.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (currentColorMode == 2) {
        earIn.showColor(neopixel.colors(NeoPixelColors.Red))
        earOut.showColor(neopixel.colors(NeoPixelColors.Yellow))
    }
    if (currentColorMode == 3) {
        earIn.showColor(neopixel.colors(NeoPixelColors.Yellow))
        earOut.showColor(neopixel.colors(NeoPixelColors.Purple))
    }
    if (currentColorMode == 4) {
        earIn.showColor(neopixel.colors(NeoPixelColors.Green))
        earOut.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (currentColorMode == 5) {
        earIn.showColor(neopixel.colors(NeoPixelColors.Orange))
        earOut.showColor(neopixel.colors(NeoPixelColors.Indigo))
    }
}
function flowEffect() {
    if (currentColorMode == 1) {
        flow(NeoPixelColors.Purple, NeoPixelColors.Blue)
    }
    else if (currentColorMode == 2) {
        flow(NeoPixelColors.Green, NeoPixelColors.Red)
    }
    else if (currentColorMode == 3) {
        flow(NeoPixelColors.Green, NeoPixelColors.White)
    }
    else if (currentColorMode == 4) {
        flow(NeoPixelColors.Blue, NeoPixelColors.White)
    }
    else if (currentColorMode == 5) {
        flow(NeoPixelColors.Orange, NeoPixelColors.Indigo)
    }

}
function whiteSparkleEffect() {
    if (currentColorMode == 1) {
        whiteSparkle(NeoPixelColors.Blue)
    }
    else if (currentColorMode == 2) {
        whiteSparkle(NeoPixelColors.Orange)
    }
    else if (currentColorMode == 3) {
        whiteSparkle(NeoPixelColors.Indigo)
    }
    else if (currentColorMode == 4) {
        whiteSparkle(NeoPixelColors.Red)
    }
    else if (currentColorMode == 5) {
        whiteSparkle(NeoPixelColors.Yellow)
    }
}
function rainbowEffect() {
    centerSeparate(1, 360)
}
function cmyEffect() {
    cmy()
}
function centerSeparateEffect() {
    if (currentColorMode == 1) {
        centerSeparate(0, 105)
    }
    else if (currentColorMode == 2) {
        centerSeparate(40, 145)
    }
    else if (currentColorMode == 3) {
        centerSeparate(80, 185)
    }
    else if (currentColorMode == 4) {
        centerSeparate(120, 225)
    }
    else if (currentColorMode == 5) {
        centerSeparate(160, 255)
    }
}
function twoColorSparkleEffect() {
    if (currentColorMode == 1) {
        twoColorSparkle(NeoPixelColors.Red, NeoPixelColors.Green)
    }
    else if (currentColorMode == 2) {
        twoColorSparkle(NeoPixelColors.Orange, NeoPixelColors.Blue)
    }
    else if (currentColorMode == 3) {
        twoColorSparkle(NeoPixelColors.Yellow, NeoPixelColors.Indigo)
    }
    else if (currentColorMode == 4) {
        twoColorSparkle(NeoPixelColors.Green, NeoPixelColors.Violet)
    }
    else if (currentColorMode == 5) {
        twoColorSparkle(NeoPixelColors.Blue, NeoPixelColors.Purple)
    }
}
function flowSparcleEffect() {
    if (currentColorMode == 1) {
        flowSparcle(NeoPixelColors.Red, NeoPixelColors.Blue)
    }
    else if (currentColorMode == 2) {
        flowSparcle(NeoPixelColors.Orange, NeoPixelColors.Indigo)
    }
    else if (currentColorMode == 3) {
        flowSparcle(NeoPixelColors.Yellow, NeoPixelColors.Violet)
    }
    else if (currentColorMode == 4) {
        flowSparcle(NeoPixelColors.Green, NeoPixelColors.Purple)
    }
    else if (currentColorMode == 5) {
        flowSparcle(NeoPixelColors.Blue, NeoPixelColors.Red)
    }
}
function centerGatherEffect() {
    if (currentColorMode == 1) {
        centerGather(NeoPixelColors.Red)
    }
    else if (currentColorMode == 2) {
        centerGather(NeoPixelColors.Yellow)
    }
    else if (currentColorMode == 3) {
        centerGather(NeoPixelColors.Green)
    }
    else if (currentColorMode == 4) {
        centerGather(NeoPixelColors.Blue)
    }
    else if (currentColorMode == 5) {
        centerGather(NeoPixelColors.Purple)
    }
}
function angleEffect() {
    earIn.showColor(neopixel.rgb(input.rotation(Rotation.Pitch), input.rotation(Rotation.Roll), 255))
    earOut.showColor(neopixel.rgb(255, input.rotation(Rotation.Pitch), input.rotation(Rotation.Roll)))
}
function turnOff() {
    while (!changeFlag) {
        earIn.showColor(neopixel.colors(NeoPixelColors.Black))
        earOut.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(25)
    }
}
/* ------ ここまでエフェクト内容指定関数 ------ */

/* ------ ここからボタン押下時の処理 ------ */
// Aボタン押下
input.onButtonPressed(Button.A, function () {
    currentEffectMode += -1
    if (currentEffectMode < 1) {
        currentEffectMode = numberOfEffectModes
    }
    sendStatus()
    checkStatus()
    changeFlag = true
})
// Bボタン押下
input.onButtonPressed(Button.B, function () {
    currentEffectMode += 1
    if (currentEffectMode > numberOfEffectModes) {
        currentEffectMode = 1
    }
    sendStatus()
    checkStatus()
    changeFlag = true
})
// ABボタン同時押下
input.onButtonPressed(Button.AB, function () {
    luminanceRate += -0.2
    if (luminanceRate < 0) {
        luminanceRate = 1
    }
    else if (luminanceRate < 0.1) {
        luminanceRate = 0
    }
    checkStatus()
    changeFlag = true
})
// ゆする
input.onGesture(Gesture.Shake, function () {
    currentColorMode += 1
    if (currentColorMode > numberOfColModes) {
        currentColorMode = 1
    }
    col1 = colorList[Math.floor(Math.random() * colorList.length)]
    col2 = colorList[Math.floor(Math.random() * colorList.length)]
    sendStatus()
    checkStatus()
    changeFlag = true
})
// うるさくなる
input.onSound(DetectedSound.Loud, function () {
    currentColorMode += 1
    if (currentColorMode > numberOfColModes) {
        currentColorMode = 1
    }
    col1 = colorList[Math.floor(Math.random() * colorList.length)]
    col2 = colorList[Math.floor(Math.random() * colorList.length)]
    sendStatus()
    checkStatus()
    changeFlag = true
})
// 無線受信
radio.onReceivedValue(function (name, value) {
    if (!MASTER) {
        if (name == "effect") {
            currentEffectMode = value
        }
        else if (name == "color") {
            currentColorMode = value
        }
        checkStatus()
        changeFlag = true
    }
})
/* ------ ここまでボタン押下時の処理 ------ */

/* ------ ここから初期設定 ------ */
const MASTER = false // <-- 送信親機の場合true

const numberOfEffectModes = 10
const numberOfColModes = 5
const numberOfHalfLed = 13

const colorList = [
    NeoPixelColors.Red,
    NeoPixelColors.Orange,
    NeoPixelColors.Yellow,
    NeoPixelColors.Green,
    NeoPixelColors.Blue,
    NeoPixelColors.Indigo,
    NeoPixelColors.Violet,
    NeoPixelColors.Purple,
    NeoPixelColors.White,
    // NeoPixelColors.Black
]

let strip = neopixel.create(DigitalPin.P2, 2 * numberOfHalfLed, NeoPixelMode.RGB)
let earIn = strip.range(0, numberOfHalfLed)
let earOut = strip.range(numberOfHalfLed, numberOfHalfLed)

/* 初期変数 基本触らない */
let randomGoldPixel = 0
let randomWhitePixel = 0
let randomGreenPixel = 0
let randomRedPixel = 0
let col1 = colorList[Math.floor(Math.random() * colorList.length)]
let col2 = colorList[Math.floor(Math.random() * colorList.length)]
let changeFlag = false

let currentEffectMode = 1
let currentColorMode = 1
let luminanceRate = 1
/* ================= */

radio.setGroup(1)
input.setSoundThreshold(SoundThreshold.Loud, 128)
/* ------ ここまで初期設定 ------ */


basic.forever(function () {
    changeFlag = false
    strip.setBrightness(150 * luminanceRate)
    earIn.setBrightness(150 * luminanceRate)
    earOut.setBrightness(150 * luminanceRate)
    if (currentEffectMode == 1) {
        twoToneEffect()
    } else if (currentEffectMode == 2) {
        flowEffect()
    } else if (currentEffectMode == 3) {
        whiteSparkleEffect()
    } else if (currentEffectMode == 4) {
        rainbowEffect()
    } else if (currentEffectMode == 5) {
        cmyEffect()
    } else if (currentEffectMode == 6) {
        centerSeparateEffect()
    } else if (currentEffectMode == 7) {
        twoColorSparkleEffect()
    } else if (currentEffectMode == 8) {
        flowSparcleEffect()
    } else if (currentEffectMode == 9) {
        centerGatherEffect()
    } else if (currentEffectMode == 10) {
        turnOff()
    } else {
        currentEffectMode = 1
    }
})
