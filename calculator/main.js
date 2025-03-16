const display = document.getElementById("display");


// Tuşları Ekrana Yazdır
function appendToDisplay(input) {
    display.value +=input;
}

// Ekranı Temizle
function clearInput() {
    display.value = "";
}

// Hesaplama Fonksiyonu

function calculate() {
    try {
        if (!display.value || display.value === "" || /^[+\-*\/]$/.test(display.value)) {
            display.value = "0";
            return;
        }
        
        const result = new Function('return ' + display.value)();
        
        if (isNaN(result) || !isFinite(result)) {
            display.value = "Error";
            return;
        }
        
        display.value = result;
    } catch (e) {
        display.value = "Error";
        setTimeout(() => {
            display.value = "";
        }, 1000);
    }
}

