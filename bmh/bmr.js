    document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Sayfanın yeniden yüklenmesini engellemek amaçlı!
    
    let age = document.getElementById("ageinput").value; // Yaş girdisini alabilmek için!
    let gender = document.querySelector('input[name="inlineRadioOptions"]:checked').value; // Cinsiyette seçimin yapılabilmesi
    let height = document.getElementById("heightinput").value;
    let weight = document.getElementById("weightinput").value;
    
    let bmr;

    const bmrSonucDiv = document.getElementById("bmrSonucDiv");
      bmrSonucDiv.style.display = "block"
  
    // Karar Ağacı Yapısı Erkek seçilirse bu formül, kadın seçilirse bu!
    if (gender === "Male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === "Female") {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    
    // Sonucun id'si belirli olan dive aktarılması!!
    let resultDiv = document.getElementById('bmrSonuc');
    resultDiv.innerHTML = `<strong>Bazal Metabolik Hız: ${bmr.toFixed(2)} kcal/gün</strong> <br>
                <p class="mt-1">BMR (Bazal Metabolizma Hızı), vücudunuzun tamamen dinlenik haldeyken, yani uyurken ya da hareketsiz bir şekilde yatarken, hayatta kalmak için ihtiyaç duyduğu minimum enerji miktarını ifade eder. Bu enerji, temel yaşam fonksiyonlarını (kalp atışı, nefes alma, vücut sıcaklığını koruma, hücre yenilenmesi gibi) sürdürmek için gereklidir.</p>
    `;
  });
  