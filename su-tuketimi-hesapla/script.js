function suTuketimi() {

    const litre = parseFloat(document.getElementById("litre").value);
    const dakika = parseFloat(document.getElementById("dakika").value);
    const birimFiyat = parseFloat(document.getElementById("birimFiyat").value);
    const fiyat = document.getElementById("fiyat");

    if (isNaN(litre) || isNaN(dakika) || isNaN(birimFiyat)) {
        fiyat.innerText = "Lütfen tüm değerleri giriniz.";
        return;
    }

    const toplamSu = litre * dakika; 
    const toplamMaliyet = toplamSu * birimFiyat; 

    fiyat.innerHTML = `
        Toplam Su Tüketimi: ${toplamSu} Litre <br>
        Toplam Maliyet: ${toplamMaliyet.toFixed(2)} TL
    `;
}


//Hesaplamalar Farazi!