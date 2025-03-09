class HeroComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const template = document.createElement("template");
    template.innerHTML = `
      <link rel="stylesheet" href="styles.css">
      <section class="hero">
        <div>
          <h2>Find Your Dream Home in Yucatán</h2>
          <button class="cta-btn">Browse Homes</button>
        </div>
      </section>
    `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("hero-component", HeroComponent);
