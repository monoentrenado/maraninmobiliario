class BlogDetail extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
  
      // Attach external stylesheet instead of inline styles
      const link = document.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("href", "styles.css");
  
      this.shadowRoot.appendChild(link);
  
      this.shadowRoot.innerHTML += `
        <div class="blog-detail-container">
          <button class="close-btn">✕</button>
          <div class="blog-content">
            <img class="blog-cover lazy" alt="Blog Cover">
            <h2 class="blog-title"></h2>
            <p class="blog-date"></p>
            <div class="blog-body"></div>
          </div>
        </div>
      `;
  
      this.closeBtn = this.shadowRoot.querySelector(".close-btn");
      this.blogContainer = this.shadowRoot.querySelector(".blog-detail-container");
      this.blogCover = this.shadowRoot.querySelector(".blog-cover");
      this.blogTitle = this.shadowRoot.querySelector(".blog-title");
      this.blogDate = this.shadowRoot.querySelector(".blog-date");
      this.blogBody = this.shadowRoot.querySelector(".blog-body");
  
      this.closeBtn.addEventListener("click", () => {
        this.blogContainer.classList.remove("visible");
      });
    }
  
    async loadBlog(id) {
      const response = await fetch(`https://your-strapi-api.com/api/blog-posts/${id}?populate=*`);
      const post = await response.json();
  
      this.blogCover.src = post.cover_image.url;
      this.blogCover.alt = post.title;
      this.blogTitle.textContent = post.title;
      this.blogDate.textContent = new Date(post.date_published).toLocaleDateString();
      this.blogBody.innerHTML = post.content;
  
      this.blogContainer.classList.add("visible");
    }
  }
  
  customElements.define("blog-detail", BlogDetail);  