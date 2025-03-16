const monthEl = document.getElementById("month-name");
const dayEl = document.getElementById("day-name");
const dayNumber = document.getElementById("day-number");
const year = document.getElementById("year");
const darkMode = document.querySelector(".fa-sun");

darkMode.addEventListener("click", (e) => {
    e.preventDefault();
    monthEl.classList.toggle("dark")
})



datePrint();

setInterval(datePrint, 1000);

function datePrint() {
    const date = new Date();
    monthEl.innerText = date.toLocaleString("en", {
        month:"long"
    })
    
    dayEl.innerText = date.toLocaleString("en", {
        weekday: "long"
    })
    
    dayNumber.innerText = date.getDate();
    
    year.innerText = date.toLocaleString();
}

