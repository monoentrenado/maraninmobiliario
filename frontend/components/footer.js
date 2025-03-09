class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML =`
        <link rel="stylesheet" href="styles.css">
        <footer class="footer">
          <p>© 2025 Marán Inmobiliario. Todos los derechos reservados.</p>
          <ul class="footer-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </footer>
      `;
    }
  }
  customElements.define("footer-component", Footer);
  