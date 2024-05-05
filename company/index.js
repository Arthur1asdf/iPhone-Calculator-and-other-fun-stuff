const body = document.getElementsByTagName("body")[0];
const randomColorButton = document.getElementById("random");
let transitionTimer = null;
function checkTransitionTimer()
{
    if(transitionTimer != null)
    {
        clearTimeout(transitionTimer);
    }
}
function setColor(name)
{
    body.style.backgroundImage ='none';
    jumpScare.style.display = 'none';
    checkTransitionTimer();
    body.style.backgroundColor = name;
}

function randomColor()
{
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);
    let color =  `rgb(${red}, ${green}, ${blue})`;
    if(randomColorButton)
    {
        randomColorButton.style.backgroundColor = color;
    }
    setColor(color);
}
function rgbButton()
{
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);
    let color =  `rgb(${red}, ${green}, ${blue})`;
    setColor(color);
    transitionTimer = setTimeout(rgbButton, 2000);
}
var jumpScare = document.getElementById("jumpScare");
function imageButton()
{
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundPosition = "center top";
    body.style.backgroundImage ="url('/company/imagesForButton/fnafbeat.jpg')";
    jumpScare.style.display = "block";
    
}