class Listings extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <section class="featured-listings">
          <div class="listing-grid">
            <div class="listing">
              <div class="card">
                <div class="front">
                  <img src="house1.jpg">
                  <h3>Modern Beachfront House</h3>
                    <typeform-embed 
                        data-url="https://your-inquiry-typeform-url"
                        data-button="Inquire Now">
                </div>
                <div class="back">
                  <p>3 Bed | 2 Bath | $250,000</p>
                  <button>View Details</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
    }
  }
  customElements.define("listings-component", Listings);
  