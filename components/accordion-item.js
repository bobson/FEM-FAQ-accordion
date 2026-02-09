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

    const img = document.createElement("img");
    // Resolve image relative to the page (document) so GitHub Pages repo base is included
    img.src = new URL(
      `./assets/images/icon-${this.#open ? "minus" : "plus"}.svg`,
      document.baseURI,
    ).href;
    img.alt = this.#open ? "minus sign" : "plus sign";
    console.log(document.baseURI);

    const btn = this.querySelector(".accordion-btn");
    btn.appendChild(img);

    const panel = this.querySelector(".accordion-panel");

    btn.addEventListener("click", () => {
      this.#open = !this.#open;

      btn.setAttribute("aria-expanded", String(this.#open));

      img.src = new URL(
        `./assets/images/icon-${this.#open ? "minus" : "plus"}.svg`,
        document.baseURI,
      ).href;
      img.alt = this.#open ? "minus sign" : "plus sign";

      if (!this.#open) panel.classList.add("hidden");
      else panel.classList.remove("hidden");
    });
  }
}

customElements.define("accordion-item", AccordionItem);
