import { html, css, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("blog-header")
export class BlogHeader extends LitElement {
  static styles = css`
    #blog-header {
      text-align: left;
    }

    a {
      text-decoration: none;
      color: var(--fg);
    }

    a:hover {
      color: var(--accent);
      text-decoration: underline;
    }
  `;

  render() {
    return html`<div id="blog-header">
      <test-lit></test-lit>
      <a href="/about/">About</a> | <a href="/blog/">Blog</a> |
      <a href="#">Tools</a> | <a href="#">Projects</a> | <a href="#">Hobbies</a>
    </div>`;
  }
}
