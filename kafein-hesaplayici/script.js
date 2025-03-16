const hesapla = document.getElementById("hesapla");

hesapla.addEventListener("click", function() {
    const kilogram = document.getElementById("kilogram").value;

    //Kafein Ölçüsü 3-6(mg)
    const minKafein = kilogram*3;
    const maxKafein = kilogram*6;

    const sonuc = document.getElementById("sonuc");
    sonuc.innerHTML = `
        Minimum Kafein: ${minKafein} (mg)! <br>
        Maximum Kafein: ${maxKafein} (mg)!

        <br><br>

        <p>Kafein'in ergonojik etkileri kişiden kişiye değişmekle birlikte kilonuza göre minimum kafein miktarı yeterli görülmektedir. Maksimum kafein miktarlarını tüketmeden önce kademeli artış yapmanızı birden tüketildiğinde yan etki hissettiğinde ise tüketim miktarının minimuma çekilmesini öneririm!<p>
    `
});

// Makalesi https://mustafaekiz.com.tr/kafein-hakkinda-bilinmesi-gerekenler/