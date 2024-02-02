

height = window.outerHeight
width = window.outerWidth

xRange = width * 0.8
yRange = height * 0.8

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}


function pressNo() {
    while(true) {
        shiftX = getRandomInt(xRange) - xRange / 2
        shiftY = getRandomInt(yRange)
        if(shiftX < -150 || shiftX > -50) {
            break;
        }
    }
    console.log(height, width)
    noButton = document.getElementById("no-button")
    noButton.style.transform = `translate(${shiftX}px, ${shiftY}px)`
    img = document.getElementById("show-img")
    img.src = "./18.png"

    msg = document.getElementById("message")
    msg.innerHTML = "Bruhhhh"

}


function pressYes() {
    img = document.getElementById("show-img")
    img.src = "./14.gif"

    msg = document.getElementById("message")
    msg.innerHTML = "Yayyyyy! I love u so much"
}


window.onbeforeunload = function(e) {
    return "Leaving this page will reset the wizard";
};