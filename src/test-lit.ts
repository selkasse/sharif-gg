import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("test-lit")
export class TestList extends LitElement {
  static styles = css`
    p {
      color: magenta;
    }
  `;

  @property()
  name = "Somebody";

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}
