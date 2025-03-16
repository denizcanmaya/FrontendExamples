// Epley Formülü: 1rm = kg x (1 + 0.333 * tekrar)


function rmHesaplama() {
    const agirlik = parseFloat(document.getElementById("agirlik").value) || 0;
    const tekrarSayisi = parseFloat(document.getElementById("tekrarSayisi").value) || 0;
    const hesapla = agirlik * (1 + (0.0333*tekrarSayisi));


    const rmSonuc = document.getElementById("rmSonuc");
    rmSonuc.innerHTML = hesapla.toFixed(0);
}


document.getElementById("agirlik").addEventListener("input", rmHesaplama);
document.getElementById("tekrarSayisi").addEventListener("input", rmHesaplama);