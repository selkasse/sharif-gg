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
    // const term = new Terminal({ cursorBlink: true });
    const term = new Terminal();
    term.options = {
      fontFamily:
        'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      fontSize: 14,
      lineHeight: 1.25,
      cursorBlink: true,
      theme: {
        background: "#0f1620",
        foreground: "#c7d0d9",
        cursor: "#c7d0d9",
        selectionBackground: "rgba(122, 162, 247, 0.35)",
        black: "#0b0f14",
        red: "#f7768e",
        green: "#9ece6a",
        yellow: "#e0af68",
        blue: "#7aa2f7",
        magenta: "#bb9af7",
        cyan: "#7dcfff",
        white: "#c7d0d9",
        brightBlack: "#3b4758",
        brightWhite: "#ffffff",
      },
    };
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
