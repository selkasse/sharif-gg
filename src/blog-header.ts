import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("blog-header")
export class BlogHeader extends LitElement {
  static styles = css`
    #blog-header {
      text-align: left;
    }

    a {
      text-decoration: none;
      color: whitesmoke;
    }
  `;

  render() {
    return html`<div id="blog-header">
      <a href="#">Home</a> | <a href="#">About</a> | <a href="#">Tools</a>
    </div>`;
  }
}
