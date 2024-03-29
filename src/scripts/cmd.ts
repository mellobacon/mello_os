import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import { CommandHandler } from "./command_handler";
import { getHome } from "./filesystem";
var baseTheme = {
    foreground: "#F8F8F8",
    background: "#000",
    selection: "#5DA5D533",
    black: "#1E1E1D",
    brightBlack: "#262625",
    red: "#CE5C5C",
    brightRed: "#FF7272",
    green: "#5BCC5B",
    brightGreen: "#72FF72",
    yellow: "#CCCC5B",
    brightYellow: "#FFFF72",
    blue: "#5D5DD3",
    brightBlue: "#7279FF",
    magenta: "#BC5ED1",
    brightMagenta: "#E572FF",
    cyan: "#5DA5D5",
    brightCyan: "#72F0FF",
    white: "#F8F8F8",
    brightWhite: "#FFFFFF",
};
var customTheme = {
    foreground: "#eff0eb",
    background: "#282a36",
    selection: "#97979b33",
    black: "#282a36",
    brightBlack: "#686868",
    red: "#ff5c57",
    brightRed: "#ff5c57",
    green: "#5af78e",
    brightGreen: "#5af78e",
    yellow: "#f3f99d",
    brightYellow: "#f3f99d",
    blue: "#57c7ff",
    brightBlue: "#57c7ff",
    magenta: "#ff6ac1",
    brightMagenta: "#ff6ac1",
    cyan: "#9aedfe",
    brightCyan: "#9aedfe",
    white: "#f1f1f0",
    brightWhite: "#eff0eb",
};
export class CMD {
    private term = new Terminal({
        allowProposedApi: true,
        cursorBlink: true,
        fontFamily: "VT323",
        theme: baseTheme
    });
    private termFit = new FitAddon();
    private commands: CommandHandler;
    current_dir = getHome();
    private _prompt = `C:${this.current_dir}>`;
    constructor(terminal: HTMLElement) {
        this.termFit = new FitAddon();
        this.term.loadAddon(this.termFit);
        this.term.open(terminal);
        this.termFit.fit();
        this.term.focus();

        let obs = new ResizeObserver((e) => {
            this.termFit.fit();
        })
        obs.observe(terminal)

        this.commands = new CommandHandler(this.term, this);
    }
    initTerm() {
        this.term.writeln("Mellosoft(R) Mello OS")
        this.term.writeln("Copyright (C) Mellosoft Inc. All rights nonexistent.")
        this.prompt();

        this.term.onData(async (e) => {
            switch (e) {
                case "\u0003": // Ctrl+C:
                    this.term.write("^C");
                    this.prompt();
                    break;
                case "\r": // Enter
                    this.term.writeln("");
                    await this.commands.executeCommand();
                    this.prompt();
                    break;
                case "\u007F": // Backspace (DEL)
                    if (this.term.buffer.normal.cursorX > this._prompt.length + 1) {
                        this.term.write("\b \b");
                        this.commands.removeCommandChar();
                    }
                    break;
                default:
                    if ((e >= String.fromCharCode(0x20) && e <= String.fromCharCode(0x7e)) ||
                        e >= "\u00a0") {
                        this.term.write(e);
                        this.commands.addCommandChar(e);
                    }
                    break;
            }
        });
    }
    private prompt() {
        this.term.write(`\r\n${this._prompt} `);
    }
    setPrompt(input: string) {
        this._prompt = `C:${input}>`
    }
}
