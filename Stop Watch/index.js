//let secondsElapsed = 0;
let interval = null;
let  centiSecondsElapsed = 0;
const time = document.getElementById("time");
function padStart(value)
{
    return String(value).padStart(2, "0")
}
function setTime()
{
    const minutes = Math.floor(centiSecondsElapsed / 6000)
    const seconds = Math.floor(centiSecondsElapsed / 100) % 60
    const centisecond = Math.floor(centiSecondsElapsed) % 100 
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}:${padStart(centisecond)}`;
}
function timer()
{
    centiSecondsElapsed++;
    //calls settime  to update the html 
    setTime();
}
function startClock()
{
    //if interval exists then we should reset the clock
    if (interval)
    {
        stopClock();
    } 
    //calls timer function every 10 milliseconds because every 10 milliseconds is a centisecond
    interval = setInterval(timer, 10)

}
function stopClock()
{
    clearInterval(interval)
}
function resetClock()
{
    stopClock();
    centiSecondsElapsed = 0;
    setTime();
}