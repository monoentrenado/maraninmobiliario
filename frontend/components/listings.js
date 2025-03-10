class PropertyListings extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    await this.fetchListings();
  }

  async fetchListings() {
    try {
      const response = await fetch("http://localhost:1337/api/listings?populate=*");
      const data = await response.json();
      this.render(data.data);
    } catch (error) {
      console.error("Error fetching listings:", error);
    }
  }

  render(listings) {
    this.shadowRoot.innerHTML = `
      <style>
        @import "./styles/listings.css";
      </style>
      <section class="featured-listings">
        <h2>Featured Listings</h2>
        <div class="listing-grid">
          ${listings
            .filter(listing => listing.attributes.featured)
            .map(listing => this.createListingCard(listing))
            .join('')}
        </div>

        <h2>All Properties</h2>
        <div class="listing-grid">
          ${listings
            .map(listing => this.createListingCard(listing))
            .join('')}
        </div>
      </section>
    `;
  }

  createListingCard(listing) {
    const { title, summary, price, area, availability, main_image } = listing.attributes;
    const imageUrl = main_image?.data?.attributes?.url || "default-house.jpg";
    const availabilityClass = availability ? "available" : "sold-out";
    const availabilityText = availability ? "Available" : "Sold Out";

    return `
      <div class="listing">
        <img src="${imageUrl}" alt="${title}">
        <div class="listing-info">
          <h3>${title}</h3>
          <p>${summary}</p>
          <p class="price">$${price.toLocaleString()}</p>
          <p>${area} sqm</p>
          <span class="${availabilityClass}">${availabilityText}</span>
          <button class="view-btn">View Details</button>
        </div>
      </div>
    `;
  }
}

customElements.define("property-listings", PropertyListings);