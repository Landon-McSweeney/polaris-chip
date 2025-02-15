import { LitElement, html, css } from 'lit';

export class MyCard extends LitElement {
  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Volkswagen";
    this.image = "https://logos-world.net/wp-content/uploads/2021/04/Volkswagen-Logo-2000-2012.png";
    this.link = "https://www.vw.com/";
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .card {
        background-color: #f5f5f5;
        width: 300px;
        text-align: center;
        border: 2px solid black;
        padding: 10px;
        border-radius: 8px;
      }
      .card.fancy {
        background-color: gold;
        color: black;
        border-color: darkblue;
      }
      .cardheader {
        font-size: 24px;
        font-weight: bold;
      }
      img {
        width: 100%;
        max-width: 200px;
        height: auto;
      }
      .btn {
        background-color: blue;
        color: white;
        border: none;
        padding: 8px;
        cursor: pointer;
      }
      .btn:hover {
        background-color: darkblue;
      }
    `;
  }

  toggleFancy() {
    this.fancy = !this.fancy;
  }

  render() {
    return html`
      <div class="card ${this.fancy ? 'fancy' : ''}">
        <h1 class="cardheader">${this.title}</h1>
        <img src=${this.image} alt=${this.title} />
        <details @toggle="${this.toggleFancy}">
          <summary>More Info</summary>
          <slot>Default description about the brand.</slot>
          <br/>
          <a href=${this.link} target="_blank">
            <button class="btn">Visit</button>
          </a>
        </details>
      </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      link: { type: String },
      fancy: { type: Boolean, reflect: true },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);

