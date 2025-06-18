class FiveCards extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
    .five-cards-container {
      display: flex;
      gap: 20px;
      justify-content: space-between;
      margin: 16px 0;
      flex-wrap: wrap;
    }
    .five-card {
      background: #fff;
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.04);
      width: 224px;
      padding: 0 0 16px 0;
      text-align: left;
      display: flex;
      flex-direction: column;
      transition: box-shadow 0.2s;
      overflow: hidden;
    }
    .five-card:hover {
      box-shadow: 0 6px 24px rgba(0,0,0,0.5);
    }
    .five-card img {
      width: 100%;
      height: 150px;
      object-fit: cover;
      border-radius: 0;
      margin-bottom: 0;
      display: block;
    }
    .five-card-title {
      font-size: 20px;
      font-weight: 700;
      margin: 16px 16px 4px 16px;
      color: #333;
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .five-card-price {
      font-size: 15px;
      color: #333;
      margin: 0 16px 4px 16px;
      text-align: left;
    }
    .five-card-price strong {
      font-weight: 600;
    }
    .five-card-location {
      font-size: 13px;
      color: #888;
      margin: 0 16px 0 16px;
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    @media (max-width: 900px) {
      .five-card {
        width: 45%;
        margin-bottom: 12px;
      }
    }
    @media (max-width: 600px) {
      .five-card {
        width: 100%;
      }
    }
   </style>
      <div class="five-cards-container"></div>
    `;
  }

  async connectedCallback() {
    let data = [];
    if (this.hasAttribute('src')) {
      try {
        const res = await fetch(this.getAttribute('src'));
        data = await res.json();
      } catch (e) {
        data = [];
      }
    } else if (this.hasAttribute('data-cards')) {
      try {
        data = JSON.parse(this.getAttribute('data-cards'));
      } catch (e) {
        data = [];
      }
    } else {
      data = this.defaultCards();
    }
    const container = this.shadowRoot.querySelector('.five-cards-container');
    container.innerHTML = data.slice(0, 5).map(card => `
      <div class="five-card">
        <img src="${card.image}" alt="${card.title}">
        <div class="five-card-title">${card.title}</div>
        <div class="five-card-price">From ${card.price_from}</div>
        <div class="five-card-location">${card.location}</div>
      </div>
    `).join('');
  }

  defaultCards() {
    return [
      { image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=250&fit=crop', title: 'Card 1', price_from: '$1000', location: 'New York' },
      { image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=250&fit=crop', title: 'Card 2', price_from: '$1200', location: 'London' },
      { image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=250&fit=crop', title: 'Card 3', price_from: '$900', location: 'Paris' },
      { image: 'https://images.unsplash.com/photo-1515263487990-61b07816b24f?w=400&h=250&fit=crop', title: 'Card 4', price_from: '$1100', location: 'Tokyo' },
      { image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=250&fit=crop', title: 'Card 5', price_from: '$950', location: 'Berlin' }
    ];
  }
}

customElements.define('five-cards', FiveCards);