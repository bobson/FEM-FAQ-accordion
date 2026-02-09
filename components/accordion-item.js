export default class AccordionItem extends HTMLElement {
  #open = false;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `<slot></slot>`;

    const styles = document.createElement("style");
    this.appendChild(styles);

    async function loadCss() {
      const res = await fetch("../components/accordion-item.css");
      const css = await res.text();
      styles.textContent = css;
      //   console.log(css);
    }

    loadCss();
  }

  connectedCallback() {
    // Prevent re-render if reconnected
    if (this._initialized) return;
    this._initialized = true;

    const img = document.createElement("img");
    img.src = `../assets/images/icon-${this.#open ? "minus" : "plus"}.svg`;
    img.alt = this.#open ? "minus signt" : "plus sign";

    const btn = this.querySelector(".accordion-btn");
    btn.appendChild(img);

    const panel = this.querySelector(".accordion-panel");

    btn.addEventListener("click", () => {
      this.#open = this.#open === false ? true : false;
      console.log(this.#open);
      btn.ariaExpanded = this.#open ? true : false;
      img.src = `../assets/images/icon-${this.#open ? "minus" : "plus"}.svg`;
      img.alt = this.#open ? "minus signt" : "plus sign";
      !this.#open
        ? panel.classList.add("hidden")
        : panel.classList.remove("hidden");
    });
  }
}

customElements.define("accordion-item", AccordionItem);
