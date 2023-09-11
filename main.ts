input.onButtonPressed(Button.A, function () {
    myNumber += 2
    basic.showNumber(myNumber)
})
input.onButtonPressed(Button.AB, function () {
    myImage = images.iconImage(IconNames.Butterfly)
    myImage.showImage(0)
})
input.onButtonPressed(Button.B, function () {
    mySound += 523
    music.ringTone(mySound)
})
input.onGesture(Gesture.Shake, function () {
    myNumber += -1
    basic.showNumber(myNumber)
})
input.onGesture(Gesture.TiltRight, function () {
    myNumber += 1
    basic.showNumber(myNumber)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    myNumber = 5
    mySound = 262
    myImage = images.iconImage(IconNames.Heart)
})
let myImage: Image = null
let mySound = 0
let myNumber = 0
myNumber = 5
mySound = 262
myImage = images.iconImage(IconNames.Heart)
basic.forever(function () {
	
})
