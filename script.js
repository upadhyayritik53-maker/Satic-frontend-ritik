const cardsData = [
  {
    image: "https://via.placeholder.com/300x180",
    title: "Card Title 1",
    description: "This is a reusable card component with equal height."
  },
  {
    image: "https://via.placeholder.com/300x180",
    title: "Card Title 2",
    description: "Cards are responsive and work on all screen sizes."
  },
  {
    image: "https://via.placeholder.com/300x180",
    title: "Card Title 3",
    description: "Equal height cards using flexbox layout."
  }
];

const container = document.querySelector(".card-container");

cardsData.forEach(card => {
  const div = document.createElement("div");
  div.classList.add("card");

  div.innerHTML = `
    <img src="${card.image}">
    <div class="card-content">
      <h3>${card.title}</h3>
      <p>${card.description}</p>
      <button>Read More</button>
    </div>
  `;

  container.appendChild(div);
});
