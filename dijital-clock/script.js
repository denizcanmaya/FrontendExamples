const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const amPm = document.getElementById("ampm");
const body = document.querySelector("body");

timeUpdate();
setInterval(timeUpdate,1000);

function timeUpdate() {
    const date = new Date();
    hour.innerText = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    minutes.innerText = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    seconds.innerText = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    amPm.innerText = date.getHours() >= 12 ? 'PM' : 'AM';
};

function changeBackground(colorClass, imageUrl) {
    const element = document.querySelector(colorClass);
    element.addEventListener("click", () => {
        body.style.background = `url('${imageUrl}') no-repeat center center`;
        body.style.backgroundSize = "cover";
    });
}

changeBackground(".white", "assets/background2.jpg");
changeBackground(".blue", "assets/background3.jpg");
changeBackground(".red", "assets/background4.jpg");
changeBackground(".black", "assets/background.jpg");
