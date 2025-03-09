class ContactForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        @import "./styles/contact.css"; /* Ensure SCSS compiles to CSS */
      </style>
      <section class="contact">
        <div class="container">
          <h2>Stay Updated</h2>
          <p>Subscribe to get the latest listings and insights.</p>
          
          <div class="mailchimp-form">
            <!-- Mailchimp Embedded Form -->
            <form action="https://YOUR-MAILCHIMP-URL" method="post" target="_blank" novalidate>
              <label for="email">Email</label>
              <input type="email" id="email" name="EMAIL" placeholder="Enter your email" required>
              
              <button type="submit" class="submit-btn">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('contact-form', ContactForm);