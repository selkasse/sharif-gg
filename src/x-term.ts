import { html, css, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { Terminal } from "@xterm/xterm";
import "@xterm/xterm/css/xterm.css";

@customElement("x-term")
export class XTerm extends LitElement {
  static styles = css`
  # your css here
  `;

  firstUpdated(): void {
    const term = new Terminal();
    const terminalContainer = this.shadowRoot?.getElementById("terminal");
    if (!terminalContainer) {
      throw new Error("terminal container not found");
    }
    term.open(terminalContainer);
    term.write("Welcome to X-Term!\r\n");
  }

  render() {
    return html` yo from the termino!
      <div id="terminal"></div>`;
  }
}
