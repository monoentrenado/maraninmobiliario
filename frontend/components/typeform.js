class TypeformEmbed extends HTMLElement {
    connectedCallback() {
      const url = this.getAttribute("data-url");
      const type = this.getAttribute("data-type") || "popup";
      const buttonText = this.getAttribute("data-button") || "Contact Us";
      const buttonClass = this.getAttribute("data-class") || "typeform-btn";
  
      this.innerHTML = `
        <button class="${buttonClass}">${buttonText}</button>
      `;
  
      const button = this.querySelector(`.${buttonClass}`);
  
      button.onclick = () => {
        window.typeformEmbed.makePopup(url, {
          mode: type,
          autoClose: 3000,
          hideScrollbars: true,
          onSubmit: () => console.log("Form submitted"),
        }).open();
      };
    }
  }
  
  customElements.define("typeform-embed", TypeformEmbed);
  