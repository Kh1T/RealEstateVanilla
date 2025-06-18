function createCarousel(containerId, properties) {
  const container = document.getElementById(containerId);
  if (!container || !properties || properties.length === 0) {
    container.innerHTML = "<p>No properties available.</p>";
    return;
  }

  let current = 0;
  const cardsPerView = 5;

  function renderCards() {
    let cards = "";
    for (let i = 0; i < cardsPerView; i++) {
      const idx = (current + i) % properties.length;
      const prop = properties[idx];
      cards += `
        <div class="carousel-card">
          <div class="carousel-card-bg" style="background-image: url('${prop.image}')"></div>
          <div class="carousel-card-overlay">
            <div class="carousel-card-title">${prop.location}</div>
            <div class="carousel-card-info">
              <span>Sale: ${prop.sale}</span>
              <span>Rent: ${prop.rent}</span>
            </div>
          </div>
        </div>
      `;
    }
    return cards;
  }

  function render() {
    container.innerHTML = `
      <div class="carousel-wrapper">
        <button class="carousel-arrow left" id="carousel-prev">&#8249;</button>
        <div class="carousel-track">
          ${renderCards()}
        </div>
        <button class="carousel-arrow right" id="carousel-next">&#8250;</button>
      </div>
    `;

    document.getElementById("carousel-prev").onclick = () => {
      current = (current - 1 + properties.length) % properties.length;
      render();
    };
    document.getElementById("carousel-next").onclick = () => {
      current = (current + 1) % properties.length;
      render();
    };
  }

  render();
}

// Load data and initialize carousel automatically
document.addEventListener("DOMContentLoaded", function () {
  fetch('./data/popularLocation.json')
    .then(response => response.json())
    .then(properties => {
      createCarousel("carousel-container", properties);
    })
    .catch(() => {
      const container = document.getElementById("carousel-container");
      if (container) container.innerHTML = "<p>Failed to load properties.</p>";
    });
});