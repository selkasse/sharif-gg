import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import viteLogo from "/vite.svg";
import typescriptLogo from "./typescript.svg";
import subaruLogo from "/subaru_svg.svg";

@customElement("logo-block")
export class LogoBlock extends LitElement {
  static styles = css`
    a {
      font-weight: 500;
      color: #646cff;
      text-decoration: inherit;
    }
    a:hover {
      color: #535bf2;
    }
    .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
    }
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.vanilla:hover {
      filter: drop-shadow(0 0 2em #3178c6aa);
    }
  `;

  render() {
    return html`
      <a href="https://vite.dev" target="_blank" rel="noreferrer">
        <img id="vite-logo" class="logo" alt="Vite logo" src="${viteLogo}" />
      </a>

      <a
        href="https://www.typescriptlang.org/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          id="ts-logo"
          class="logo vanilla"
          alt="TypeScript logo"
          src="${typescriptLogo}"
        />
      </a>

      <img
        id="subaru-logo"
        class="logo subaru"
        alt="Subaru logo"
        src="${subaruLogo}"
      />
    `;
  }
}
