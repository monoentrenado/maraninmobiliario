class NavbarComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const template = document.createElement("template");
    template.innerHTML = `
      <link rel="stylesheet" href="styles.css">
      <header class="navbar">
        <div class="container">
          <h1 class="logo">Yucatán Homes</h1>
          <button class="nav-toggle">☰</button>
          <nav>
            <ul class="nav-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Listings</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.toggleButton = this.shadowRoot.querySelector(".nav-toggle");
    this.navLinks = this.shadowRoot.querySelector(".nav-links");

    this.toggleButton.addEventListener("click", () => {
      this.navLinks.classList.toggle("active");
    });
  }
}

customElements.define("navbar-component", NavbarComponent);
