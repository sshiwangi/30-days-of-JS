const cardsContainer = document.getElementById("cardsContainer");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

const data = [];
for(let i =0; i<10; i++){
    data.push(i);
}

const k = 4; //number of visible cards
let startIndex = 0;

function renderCards() {
    cardsContainer.innerHTML = "";

    for(let i = 0; i<k; i++){
        let index = (startIndex + i)%data.length;
        let card = document.createElement("div");
        card.classList.add("card");
        card.textContent = `Card ${data[index]}`;
        cardsContainer.appendChild(card);
    }
}

function moveRight(){
    startIndex = (startIndex+k)%data.length;
    updateSlider();
}

function moveLeft(){
    startIndex = (startIndex-k+data.length)%data.length;
    updateSlider();
}

function updateSlider(){
    cardsContainer.style.transition = "transform 0.5s ease-in-out"
    renderCards();
}

renderCards();

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);