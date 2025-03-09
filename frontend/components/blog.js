class Blog extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <section class="blog-preview">
          <h2>Latest Insights</h2>
          <article>
            <h3>Investing in Yucatán Real Estate</h3>
            <a href="#">Read More</a>
          </article>
        </section>
        <section class="newsletter">
            <h3>Join Our Community</h3>
            <typeform-embed 
                data-url="https://your-typeform-url"
                data-button="Subscribe Now"
                data-class="subscribe-btn">
            </typeform-embed>
        </section>
      `;
    }
  }
  customElements.define('blog-component', Blog);
  