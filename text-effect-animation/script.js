const container = document.querySelector('.container');

const careers = ["Developer", "Web Developer", "Freelancer"]

let careerIndex = 0;

let characterIndex = 0;

updateText()

function updateText() {
    characterIndex++
    container.innerHTML = `
    <h1 class="title">I am a <span class="dev">${careers[careerIndex].slice(0,characterIndex)}</span></h1>
    `;
    if (characterIndex === careers[careerIndex].length) {
        careerIndex++
        characterIndex = 0;
    }
    setTimeout(updateText,400);
}

