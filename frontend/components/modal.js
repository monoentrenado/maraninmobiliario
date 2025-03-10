class ListingModal extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
  
      this.shadowRoot.innerHTML = `
        <style>
          ${modalStyles}
        </style>
        <div class="modal">
          <div class="modal-content">
            <span class="close-btn">&times;</span>
            <slot></slot>
          </div>
        </div>
      `;
  
      this.modal = this.shadowRoot.querySelector(".modal");
      this.closeBtn = this.shadowRoot.querySelector(".close-btn");
  
      this.closeBtn.addEventListener("click", () => this.close());
      this.modal.addEventListener("click", (e) => {
        if (e.target === this.modal) {
          this.close();
        }
      });
    }
  
    open() {
      this.modal.classList.add("active");
      setTimeout(() => {
        this.shadowRoot.querySelector(".modal-content").classList.add("active");
      }, 100);
    }
  
    close() {
      this.shadowRoot.querySelector(".modal-content").classList.remove("active");
      setTimeout(() => {
        this.modal.classList.remove("active");
      }, 200);
    }
  }
  
  customElements.define("listing-modal", ListingModal);
  