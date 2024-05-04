const body = document.getElementsByTagName("body")[0];
const randomColorButton = document.getElementById("random");
let transitionTimer = null;
function checkTransitionTimer(){
    if(transitionTimer != null)
    {
        clearTimeout(transitionTimer);
    }
}
function setColor(name)
{
    checkTransitionTimer();
    body.style.backgroundColor = name;
}

function randomColor()
{
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);
    let color =  `rgb(${red}, ${green}, ${blue})`;
    setColor(color);

}

function rgbButton()
{
    
    randomColor()
    transitionTimer = setTimeout(rgbButton, 2000);


}