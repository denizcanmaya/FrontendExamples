const textArea = document.querySelector(".character");
const clearBtn = document.querySelector(".clear");
const counterEl = document.getElementById("counter");

let remaining = textArea.getAttribute("maxLength");
let entered = 0;
counterEl.innerHTML = `${entered}/${remaining}`;

textArea.addEventListener("keyup", ()=> {
    characterCounterUpdate()
})

clearBtn.addEventListener("click", ()=> {
    textArea.value = "";
    counterEl.innerHTML = `${entered}/${remaining}`;
})

function characterCounterUpdate() {
    counterEl.innerHTML = `${entered + textArea.value.length}/${remaining-textArea.value.length}`;
}
