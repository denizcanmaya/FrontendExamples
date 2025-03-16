const helloBtn = document.getElementById("helloBtn");
const nameInput = document.getElementById("nameInput");
const helloMessage = document.getElementById("helloMessage");

helloBtn.addEventListener("click", function () {
    const userName = nameInput.value;
  if (userName) {
    const message = "Hello, " + userName + "! Welcome to Hello App!";
    helloMessage.textContent = message;
  } else {
    alert("Please enter your name!");
  }
});
