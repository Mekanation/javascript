console.log("time to start the timer!");

const start = document.getElementById('start');

const stop = document.querySelector('#stop');

const reset = document.querySelector('#reset');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

// let minutesConverter = Math.floor(time/60);
let time = 75;

function counter(){
    
    document.getElementById("seconds").innerHTML = secondsToMinutes(++time);
    // document.getElementById("minutes").innerHtml = Math.floor(time/60);
}


function secondsToMinutes(time) {
    sec = time % 60;
    min = parseInt(time / 60);
    if(sec.toString().length == 1){
        sec = "0" + sec;
    }
    return min + ":" + sec;
}

function clearSeconds() {
    time = 0;
    document.getElementById("seconds").innerHTML = secondsToMinutes(time);

}