function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const submitAlert = document.getElementById("submitAlert");

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (name.length < 3) {
        submitAlert.textContent = "İsim en az 3 karakter olmalı.";
        submitAlert.style.display = "block";
        return;
    }

    if (!emailPattern.test(email)) {
        submitAlert.textContent = "Geçerli bir e-posta adresi girin."; 
        submitAlert.style.display = "block";
        return;
    }

    submitAlert.textContent = "Mesajınız iletildi!";
    submitAlert.style.display = "block";
}
