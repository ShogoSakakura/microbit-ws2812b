/* ------ ここからシステム用関数 ------ */
function checkStatus() {
    basic.clearScreen()

    // 1段目：loudStep
    let ls = Math.floor(loudStep / 2)
    led.plot(ls, 0)

    // 2~3段目：currentEffectMode
    let x = 0
    let y = 1
    x = (currentEffectMode - 1) % 5
    if (currentEffectMode > 5) {
        y = 2
    }
    led.plot(x, y)

    // 4段目：currentColorMode
    led.plot(currentColorMode - 1, 3)

    // 5段目：luminanceRate
    for (let i = 0; i < Math.floor(luminanceRate / 0.2); i++) {
        led.plot(i, 4)
    }
}
function sendStatus() {
    if (MASTER) {
        radio.sendValue("loud", loudStep)
        radio.sendValue("effect", currentEffectMode)
        radio.sendValue("color", currentColorMode)
        radio.sendValue("lumin", luminanceRate)
    }
}
function setSoundThresholdByLoudStep(loudStep: Number) {
    if (loudStep == 1) {
        input.setSoundThreshold(SoundThreshold.Loud, 32)
    }
    else if (loudStep == 2) {
        input.setSoundThreshold(SoundThreshold.Loud, 64)
    }
    else if (loudStep == 3) {
        input.setSoundThreshold(SoundThreshold.Loud, 96)
    }
    else if (loudStep == 4) {
        input.setSoundThreshold(SoundThreshold.Loud, 128)
    }
    else if (loudStep == 5) {
        input.setSoundThreshold(SoundThreshold.Loud, 160)
    }
    else if (loudStep == 6) {
        input.setSoundThreshold(SoundThreshold.Loud, 192)
    }
    else if (loudStep == 7) {
        input.setSoundThreshold(SoundThreshold.Loud, 224)
    }
    else if (loudStep == 8) {
        input.setSoundThreshold(SoundThreshold.Loud, 255)
    }
}
/* ------ ここまで状態確認用関数 ------ */

/* ------ ここからエフェクトサイクルの定数 ------ */
const twoToneEffectColorPattern = [
    [NeoPixelColors.Purple, NeoPixelColors.Blue],
    [NeoPixelColors.Red, NeoPixelColors.Yellow],
    [NeoPixelColors.Yellow, NeoPixelColors.Purple],
    [NeoPixelColors.Green, NeoPixelColors.Blue],
    [NeoPixelColors.Orange, NeoPixelColors.Indigo]]
const flowEffectColorPattern = [
    [NeoPixelColors.Purple, NeoPixelColors.Blue],
    [NeoPixelColors.Green, NeoPixelColors.White],
    [NeoPixelColors.Blue, NeoPixelColors.White],
    [NeoPixelColors.Green, NeoPixelColors.Blue],
    [NeoPixelColors.Orange, NeoPixelColors.Indigo]]
/* ------ ここまでエフェクトサイクルの定数 ------ */

/* ------ ここからエフェクトパターン用関数 ------ */
function twoTone(color1: NeoPixelColors, color2: NeoPixelColors) {
    sameEffectTimeCount = 0
    colorPatternStep = 0
    while (!changeFlag) {
        sameEffectTimeCount += 1
        if (currentColorMode == 1) {
            if (sameEffectTimeCount > effectCycleTimeCount) {
                colorPatternStep = (colorPatternStep + 1) % twoToneEffectColorPattern.length
                sameEffectTimeCount = 0
            }
            color1 = twoToneEffectColorPattern[colorPatternStep][0]
            color2 = twoToneEffectColorPattern[colorPatternStep][1]
        }
        earIn.showColor(neopixel.colors(color1))
        earOut.showColor(neopixel.colors(color2))
        basic.pause(50)
    }
}
function flow(baseColor: NeoPixelColors, flowColor: NeoPixelColors) {
    sameEffectTimeCount = 0

    strip.clear()
    if (currentColorMode == 1) {
        colorPatternStep = (colorPatternStep + 1) % flowEffectColorPattern.length

        baseColor = flowEffectColorPattern[colorPatternStep][0]
        flowColor = flowEffectColorPattern[colorPatternStep][1]
    }
    strip.showColor(baseColor)
    for (let i = 0; i < 5; i++) {
        strip.setPixelColor(i, flowColor)
    }

    while (!changeFlag && sameEffectTimeCount <= effectCycleTimeCount) {
        sameEffectTimeCount += 1
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
        twoTone(NeoPixelColors.Purple, NeoPixelColors.Blue)
    }
    else if (currentColorMode == 2) {
        twoTone(NeoPixelColors.Red, NeoPixelColors.Yellow)
    }
    else if (currentColorMode == 3) {
        twoTone(NeoPixelColors.Yellow, NeoPixelColors.Purple)
    }
    else if (currentColorMode == 4) {
        twoTone(NeoPixelColors.Green, NeoPixelColors.Blue)
    }
    else if (currentColorMode == 5) {
        twoTone(NeoPixelColors.Orange, NeoPixelColors.Indigo)
    }
}
function flowEffect() {
    if (currentColorMode == 1) {
        flow(NeoPixelColors.Purple, NeoPixelColors.Blue)
    }
    else if (currentColorMode == 2) {
        flow(NeoPixelColors.Purple, NeoPixelColors.Blue)
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
    earIn.showColor(neopixel.colors(NeoPixelColors.Black))
    earOut.showColor(neopixel.colors(NeoPixelColors.Black))
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
    if (MASTER) {
        // 消灯している時のみ音声受信感度設定
        if (currentEffectMode == 10) {
            loudStep = loudStep % 8 + 1
            setSoundThresholdByLoudStep(loudStep)
            sendStatus()
        }
        // 点灯している時は光量設定
        else {
            luminanceRate += -0.2
            if (luminanceRate < 0) {
                luminanceRate = 1
            }
            else if (luminanceRate < 0.1) {
                luminanceRate = 0
            }
        }
    }
    sendStatus()
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
    if (MASTER) {
        currentColorMode += 1
        if (currentColorMode > numberOfColModes) {
            currentColorMode = 1
        }
        col1 = colorList[Math.floor(Math.random() * colorList.length)]
        col2 = colorList[Math.floor(Math.random() * colorList.length)]
        sendStatus()
        checkStatus()
        changeFlag = true
    }
})
// 無線受信
radio.onReceivedValue(function (name, value) {
    if (!MASTER) {
        if (name == "loud") {
            loudStep = value
            setSoundThresholdByLoudStep(loudStep)
        }
        else if (name == "effect") {
            currentEffectMode = value
        }
        else if (name == "color") {
            currentColorMode = value
        }
        else if (name == "lumin") {
            luminanceRate = value
        }
    }
    checkStatus()
    changeFlag = true
})
/* ------ ここまでボタン押下時の処理 ------ */

/* ------ ここから初期設定 ------ */
const MASTER = true // <-- 送信親機の場合true

/* 定数 */
const numberOfEffectModes = 10
const numberOfColModes = 5
const numberOfHalfLed = 13
const effectCycleTimeCount = 50 /* basic.pause無しで1000で2.3秒 */

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
/* ================= */

/* Neopixelの設定 */
let strip = neopixel.create(DigitalPin.P2, 2 * numberOfHalfLed, NeoPixelMode.RGB)
let earIn = strip.range(0, numberOfHalfLed)
let earOut = strip.range(numberOfHalfLed, numberOfHalfLed)
/* ================= */

/* 初期変数 基本触らない */
let randomGoldPixel = 0
let randomWhitePixel = 0
let randomGreenPixel = 0
let randomRedPixel = 0
let sameEffectTimeCount = 0
let colorPatternStep = 0
let col1 = colorList[Math.floor(Math.random() * colorList.length)]
let col2 = colorList[Math.floor(Math.random() * colorList.length)]
let changeFlag = false
/* ================= */

/* 起動時のデフォルト設定 */
let loudStep = 8  /* 1~8 */
let currentEffectMode = 1
let currentColorMode = 1
let luminanceRate = 0.4

setSoundThresholdByLoudStep(loudStep)
/* ================= */

radio.setGroup(1)
led.setBrightness(5)

checkStatus()
/* ------ ここまで初期設定 ------ */


basic.forever(function () {
    changeFlag = false
    strip.setBrightness(100 * luminanceRate)
    earIn.setBrightness(100 * luminanceRate)
    earOut.setBrightness(100 * luminanceRate)
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
