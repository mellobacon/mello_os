import type { Terminal } from "xterm";
import Magicword from "../lib/programs/Magicword.svelte";
import Dialog from "../lib/Dialog.svelte";
import type { CMD } from "./cmd";
import { createDir, dirExists, readDir, removeDir } from "./filesystem";

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

export function cd(term: Terminal, args: string[], cmd: CMD) {
    if (args.length === 0) {
        term.writeln(`C:${cmd.current_dir}`);
    }
    else {
        let path = dirExists(cmd.current_dir!, args[0]);
        if (dirExists(cmd.current_dir!, args[0])) {
            cmd.current_dir = path;
            cmd.setPrompt(cmd.current_dir!);
        }
    }
}

export function dir(term: Terminal, args: string[], cmd:CMD) {
    for (let dir of readDir(cmd.current_dir!, args[0])) {
        term.writeln(dir);
    }
}

export function mkdir(term: Terminal, args: string[], cmd: CMD) {
    if (args.length === 0) {
        term.writeln("Error: No path argument found");
        return;
    }
    createDir(cmd.current_dir!, args[0])
    term.writeln("Directory created")
}

export function rmdir(term: Terminal, args: string[], cmd: CMD) {
    if (args.length === 0) {
        term.writeln("Error: No path argument found");
        return;
    }
    let path = args.shift()!;
    if (!dirExists(cmd.current_dir!, path)) {
        term.writeln("Path doesnt exist or is not valid");
        return;
    }
    let flags = validFlags(args, ["/s", "/q"], 2);
    if (!flags.status) {
        term.writeln(flags.message);
    }
    else {
        term.writeln(removeDir(cmd.current_dir!, path, args))
    }
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

function validFlags(flags: string[], valids: string[], count: number) {
    if (flags.length > count) {
        return {status: false, message: "Error: Invalid flag count"};
    }
    for (let flag of flags) {
        if (!valids.includes(flag)) {
            return {status: false, message: `Error: '${flag}' not valid in command`};
        }
    }
    return {status: true, message: ""}
}
