class Contact extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <link rel="stylesheet" href="styles.css">
      <div class="contact-container">
        <h2>Solicita información</h2>
        <iframe src="https://form.typeform.com/to/dYNaTG4h" title="Solicita información"></iframe>
      </div>
    `;
  }
}
customElements.define('contact-component', Contact);

