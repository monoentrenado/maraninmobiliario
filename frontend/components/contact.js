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
            <!--
