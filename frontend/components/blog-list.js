class BlogList extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
  
      // Attach external stylesheet instead of inline styles
      const link = document.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("href", "styles.css");
  
      this.shadowRoot.appendChild(link);
  
      this.shadowRoot.innerHTML += `
        <div class="blog-container"></div>
      `;
  
      this.blogContainer = this.shadowRoot.querySelector(".blog-container");
    }
  
    async connectedCallback() {
      const response = await fetch("https://your-strapi-api.com/api/blog-posts?populate=*");
      const data = await response.json();
  
      data.forEach(post => {
        const blogCard = document.createElement("div");
        blogCard.classList.add("blog-card");
  
        blogCard.innerHTML = `
          <img src="${post.cover_image.url}" alt="${post.title}" class="lazy">
          <div class="blog-content">
            <h3 class="blog-title">${post.title}</h3>
            <p class="blog-summary">${post.summary}</p>
            <span class="read-more" data-id="${post.id}">Read More</span>
          </div>
        `;
  
        blogCard.querySelector(".read-more").addEventListener("click", () => {
          const event = new CustomEvent("open-blog-detail", { detail: post.id });
          document.dispatchEvent(event);
        });
  
        this.blogContainer.appendChild(blogCard);
      });
  
      // Apply Lazy Loading
      const images = this.shadowRoot.querySelectorAll(".lazy");
      images.forEach(img => {
        img.onload = () => img.classList.add("loaded");
        img.src = img.dataset.src;
      });
    }
  }
  
  customElements.define("blog-list", BlogList);  