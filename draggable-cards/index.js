let cards = [
  {
    id: 1,
    content: "Hi Shiwangi",
  },
  {
    id: 2,
    content: "Holla",
  },
  {
    id: 3,
    content: "heyaa",
  },
  {
    id: 4,
    content: "jii",
  },
  {
    id: 5,
    content: "what the",
  },
];

let draggedCardIndex = null;
let draggedOverCardIndex = null;

function createCard(cardData, index) {
  const card = document.createElement("div");
  card.className = "card";
  card.draggable = true;
  card.textContent = cardData.content;

  //Add drag events
  card.addEventListener("dragstart", (e) => {
    draggedCardIndex = index;
    card.classList.add("dragging");
  });

  card.addEventListener("dragenter", (e) => {
    e.preventDefault();
    draggedOverCardIndex = index;
  });

  card.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  card.addEventListener("dragleave", (e) => {
    e.preventDefault();
  });

  card.addEventListener("dragend", (e) => {
    card.classList.remove("dragging");
    handleDragEnd();
  });

  return card;
}

function handleDragEnd() {
  if (draggedCardIndex === null || draggedOverCardIndex === null) return;
  if (draggedCardIndex === draggedOverCardIndex) return;

  let cardsClone = [...cards];
  let temp;

  if (draggedCardIndex > draggedOverCardIndex) {
    //moving card upwards
    temp = cardsClone[draggedCardIndex];
    cardsClone.splice(draggedCardIndex, 1);
    cardsClone.splice(draggedOverCardIndex, 0, temp);
  } else if (draggedCardIndex < draggedOverCardIndex) {
    temp = cardsClone[draggedCardIndex];
    cardsClone.splice(draggedCardIndex, 1);
    cardsClone.splice(draggedOverCardIndex, 0, temp);
  }

  //updating data
  cards = cardsClone;

  //Reset drag state
  draggedCardIndex = null;
  draggedOverCardIndex = null;

  renderCards();
}

function renderCards() {
  const container = document.getElementById("container");
  container.innerHTML = "";

  cards.forEach((card, index) => {
    container.appendChild(createCard(card, index));
  });
}

renderCards();
