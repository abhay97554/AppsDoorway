// console.log("This is tutorial 54");
const alarmSubmit = document.getElementById('alarmSubmit');

// Add an event listener to the submit button
alarmSubmit.addEventListener('click', setAlarm);



var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');

// function to play the alarm ring tone
function ringBell() {
    audio.play();
    document.getElementById("message").innerHTML = "";
}

// This function will run whenever alarm is set from the UI
function setAlarm(e) {
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);

    var hour = alarmDate.getHours();
    var min = alarmDate.getMinutes();
    var sec = alarmDate.getSeconds();
    let timeofDay = (hour < 12) ? "AM" : "PM"

    // console.log(`Setting Alarm for ${alarmDate}...`);
    now = new Date();

    let timeToAlarm = alarmDate - now;

    document.getElementById("message").innerHTML = "You alarm is set on : " + hour + " : " + min + " : " + sec + "  " + timeofDay;
    // console.log(timeToAlarm);
    if (timeToAlarm >= 0) {
        setTimeout(() => {
            // console.log("Ringing now")
            ringBell();
        }, timeToAlarm);

    }

}