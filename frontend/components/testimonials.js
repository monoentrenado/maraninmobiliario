class Testimonials extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <section class="testimonials">
          <div class="carousel">
            <blockquote>"Amazing service!"</blockquote>
            <blockquote>"Highly recommended!"</blockquote>
          </div>
        </section>
      `;
  
      let index = 0;
      setInterval(() => {
        const quotes = this.querySelectorAll("blockquote");
        quotes[index].style.opacity = 0;
        index = (index + 1) % quotes.length;
        quotes[index].style.opacity = 1;
      }, 3000);
    }
  }
  customElements.define("testimonials-component", Testimonials);
  