import { html, css, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { Terminal } from "@xterm/xterm";
import "@xterm/xterm/css/xterm.css";

@customElement("x-term")
export class XTerm extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
    #terminal {
      width: 100%;
      height: 100%;
    }
  `;

  firstUpdated(): void {
    const term = new Terminal();
    const terminalContainer = this.querySelector("#terminal");
    if (!terminalContainer) {
      throw new Error("terminal container not found");
    }
    term.open(terminalContainer as HTMLElement);
    term.write("Welcome to X-Term!\r\n");
  }

  render() {
    return html` <div id="terminal"></div>`;
  }

  // Render into the light DOM so global styles (including xterm.css)
  // apply to the terminal elements inserted by xterm.js.
  protected override createRenderRoot(): HTMLElement | DocumentFragment {
    return this as HTMLElement;
  }
}
