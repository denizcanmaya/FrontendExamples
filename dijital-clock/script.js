const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const amPm = document.getElementById("ampm");

timeUpdate();
setInterval(timeUpdate,1000);

function timeUpdate() {
    const date = new Date();
    hour.innerText = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    minutes.innerText = date.getMinutes();
    seconds.innerText = date.getSeconds();
    amPm.innerText = date.getHours() >= 12 ? 'PM' : 'AM';
};
