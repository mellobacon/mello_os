import type { Terminal } from "xterm";
import * as cmd from "./commands";

export class CommandHandler {
    private term: Terminal;
    private command = "";
    private commands = {}
    constructor(term: Terminal) {
        this.term = term;
        this.commands = {
            help: {
                description: "Prints all commands",
                syntax: "help [command]",
                args: ["command"],
                argsd: "command - display help info on that command",
                function: (term) => cmd.help(term, this.commands)
            },
            cls: {
                description: "Clear Terminal",
                syntax: "cls",
                function: (term) => {cmd.clear(term)}
            },
            echo: {
                description: "Displays messages",
                syntax: "echo [message]",
                args: ["message"],
                argsd: "message - text to display",
                function: (term, args) => {cmd.echo(term, args)}
            },
            exit: {
                description: "Quits CMD program",
                syntax: "exit",
                function: (term) => {cmd.exit(term)}
            },
            access: {
                description: "Attempt to access a security system",
                syntax: "access [message]",
                argsd: "message - thing to access",
                function: async (term) => {await cmd.access(term)}
            }
        }
    }
    addCommandChar(c: string) {
        this.command += c;
    }
    async executeCommand() {
        let command = this.command.trim();
        if (command.length === 0) {
            return;
        }
        let args = command.split(" ");
        let arg0 = args.shift() ?? "";
        this.command = arg0;
        
        if (!(this.command in this.commands)) {
            this.term.writeln(`${this.command}: command not found`);
            this.command = "";
            return;
        }

        if (args[0] === "/?") {
            this.fetchHelp()
        }
        else {
            await this.commands[this.command].function(this.term, args);
        }
        this.command = "";
    }
    removeCommandChar() {
        if (this.commandLength() > 0) {
            this.command = this.command.substring(0, this.command.length - 1);
        }
    }
    commandLength() {
        return this.command.length;
    }
    fetchHelp() {
        if (this.commands[this.command]) {
            this.term.writeln(`${this.commands[this.command].description}\r\n`);
            this.term.writeln(`syntax: ${this.commands[this.command].syntax}`);
            if (this.commands[this.command].argsd) {
                this.term.writeln(`\t${this.commands[this.command].argsd}`);
            }
        }
    }
}
