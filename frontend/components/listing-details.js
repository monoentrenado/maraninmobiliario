class ListingDetails extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    async connectedCallback() {
      const listingId = this.getAttribute("listing-id");
      if (listingId) {
        await this.fetchListingDetails(listingId);
      }
    }
  
    async fetchListingDetails(id) {
      try {
        const response = await fetch(`http://localhost:1337/api/listings/${id}?populate=*`);
        const data = await response.json();
        this.render(data.data);
      } catch (error) {
        console.error("Error fetching listing details:", error);
      }
    }
  
    render(listing) {
      const {
        title,
        description,
        price,
        area,
        lot_number,
        cluster_name,
        development_project,
        housing_block,
        availability,
        main_image,
        plot_map,
        images
      } = listing.attributes;
  
      const mainImageUrl = main_image?.data?.attributes?.url || "default-house.jpg";
      const plotMapUrl = plot_map?.data?.attributes?.url || "";
      const imageGallery = images?.data?.map(img => `<img src="${img.attributes.url}" alt="${title}">`).join('') || "";
  
      const availabilityClass = availability ? "available" : "sold-out";
      const availabilityText = availability ? "Available" : "Sold Out";
  
      this.shadowRoot.innerHTML = `
        <style>
          @import "./styles/listing-details.css";
        </style>
        <section class="listing-details">
          <img class="main-image" src="${mainImageUrl}" alt="${title}">
          <h2>${title}</h2>
          <p class="price">$${price.toLocaleString()}</p>
          <p>${area} sqm</p>
          <p><strong>Lot:</strong> ${lot_number}</p>
          <p><strong>Cluster:</strong> ${cluster_name}</p>
          <p><strong>Development:</strong> ${development_project}</p>
          <p><strong>Housing Block:</strong> ${housing_block}</p>
          <span class="${availabilityClass}">${availabilityText}</span>
          <p class="description">${description}</p>
  
          ${plotMapUrl ? `<img class="plot-map" src="${plotMapUrl}" alt="Plot Map">` : ""}
          
          <div class="gallery">
            ${imageGallery}
          </div>
        </section>
      `;
    }
  }
  
  customElements.define("listing-details", ListingDetails);  