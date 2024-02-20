import type { Terminal } from "xterm";
import Program from "../lib/Program.svelte";
import Magicword from "../lib/programs/Magicword.svelte";
import Dialog from "../lib/Dialog.svelte";

export function help(term: Terminal, commands) {
    term.writeln("For more information on a specific command, type help command-name ")
    for (let [cmd, opts] of Object.entries(commands)) {
        term.writeln(`${cmd}: ${opts.description}`);
    }
}

export async function clear(term: Terminal) {
    term.clear();
}

export function echo(term: Terminal, args: string[]) {
    term.writeln(args.join(" "));
}

export function exit(term: Terminal) {
    term.element?.
    parentElement?.
    parentElement?.
    parentElement?.
    parentElement?.
    parentElement?.remove();
    term.dispose();
}

let attempts = 2;
export async function access(term: Terminal) {
    if (attempts != 0) {
        term.writeln("access: PERMISSION DENIED.");
        attempts--;
    }
    else {
        return new Promise((resolve) => {
            attempts = 3;
            term.writeln("access: PERMISSION DENIED....and.....");
            setTimeout(() => {
                new Magicword({target: document.getElementById("icons")!, props: {
                    name: "DENIED", 
                    index: 10
                }})
            }, 5000)

            let dialogs;

            setTimeout(() => {
                dialogs = setInterval(() => {
                    new Dialog({target: document.getElementById("icons")!, props: {
                        randomPos: true, 
                        "type": "alert", 
                        "action_type": "error", 
                        "title": "YOU DIDNT SAY THE MAGIC WORD", 
                        message: "ERROR: YOU DIDNT SAY THE MAGIC WORD"
                    }})
                }, 1000)
            }, 7000)
            let prompts = setInterval(() => {
                term.writeln("YOU DIDN'T SAY THE MAGIC WORD!");
            }, 100)
            setTimeout(() => {
                resolve("")
                term.writeln("ERROR: PleAsE...HATE THIS HACKER CRAP....ABORTING...");
                clearInterval(prompts);
                clearInterval(dialogs);
             }, 20000)
        })
    }
}
