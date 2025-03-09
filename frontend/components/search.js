class Search extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <section class="search-bar">
          <input type="text" placeholder="Search for homes...">
          <button class="search-btn">Search</button>
          <div class="suggestions"></div>
        </section>
      `;
  
      const searchInput = this.querySelector("input");
      const searchBtn = this.querySelector(".search-btn");
      const suggestions = ["Merida Villas", "Beachfront Homes", "Colonial Houses"];
  
      searchBtn.addEventListener("click", () => {
        if (searchInput.value === "") {
          searchInput.classList.add("shake");
          setTimeout(() => searchInput.classList.remove("shake"), 600);
        }
      });
  
      searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        const match = suggestions.filter((item) => item.toLowerCase().includes(query));
        this.querySelector(".suggestions").innerHTML = match.map((s) => `<div>${s}</div>`).join("");
      });
    }
  }
  customElements.define("search-component", Search);
  