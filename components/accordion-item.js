import { css } from "./accordion-itemCss.js";

export default class AccordionItem extends HTMLElement {
  #open = false;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `<slot></slot>`;

    const styles = document.createElement("style");
    this.appendChild(styles);

    styles.textContent = css;
  }

  connectedCallback() {
    // Prevent re-render if reconnected
    if (this._initialized) return;
    this._initialized = true;
    const baseURL = new URL(".", import.meta.url).href;

    const img = document.createElement("img");
    img.src = `/FEM-FAQ-accordion/assets/images/icon-${this.#open ? "minus" : "plus"}.svg`;
    img.alt = this.#open ? "minus signt" : "plus sign";

    const btn = this.querySelector(".accordion-btn");
    btn.appendChild(img);

    const panel = this.querySelector(".accordion-panel");

    btn.addEventListener("click", () => {
      this.#open = this.#open === false ? true : false;
      console.log(this.#open);
      btn.ariaExpanded = this.#open ? true : false;
      img.src = `/FEM-FAQ-accordion/assets/images/icon-${this.#open ? "minus" : "plus"}.svg`;
      img.alt = this.#open ? "minus signt" : "plus sign";
      !this.#open
        ? panel.classList.add("hidden")
        : panel.classList.remove("hidden");
    });
  }
}

customElements.define("accordion-item", AccordionItem);
