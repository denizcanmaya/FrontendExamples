function calculateCost() {
    const watt = parseFloat(document.getElementById("watt").value);
    const hours = parseFloat(document.getElementById("hours").value);
    const price = parseFloat(document.getElementById("price").value);

    if (isNaN(watt) || isNaN(hours) || isNaN(price)) {
        document.getElementById("result").innerText = "Lütfen tüm değerleri giriniz.";
        return;
    }
    const dailyConsumption = (watt * hours) / 1000;
    const dailyCost = dailyConsumption * price;
    const monthlyCost = dailyCost * 30;

    document.getElementById("result").innerHTML = `
        Günlük Maliyet: ${dailyCost.toFixed(2)} TL<br>
        Aylık Maliyet: ${monthlyCost.toFixed(2)} TL
    `;
}
