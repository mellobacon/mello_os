import * as mem from 'memfs';

const drive = {
    "Mello_OS": {
        "home": {
            "desktop": {},
            "documents": {},
            "pictures": {}
        }
    },
}

let vol = mem.memfs(drive).vol;

export function getHome() {
    let path = vol.root.getChild("Mello_OS")?.getChild("home")?.getPath();
    return path?.replaceAll("/", "\\");
}

export function getPath(path: string) {
    return vol.root.walk(path.split("/"))?.getPath();
}

export function dirExists(cwd:string, path: string) {
    cwd = cwd?.replaceAll("\\", "/");
    path = path.replaceAll("\\", "/");

    let link = vol.getResolvedLink(`${cwd}/${path}`);
    let p = vol.getResolvedLink(path);
    if (link) {
        return link.getPath().replaceAll("/", "\\");
    }
    if (p) {
        return p.getPath().replaceAll("/", "\\");
    }
    return;
}

export function readDir(cwd:string, path: string | undefined = undefined) {
    cwd = cwd?.replaceAll("\\", "/");
    if (!path) {
        path = vol.getResolvedLink(cwd)?.getPath();
        return vol.readdirSync(path);
    }
    else {
        path = dirExists(cwd, path);
        if (path) {
            path = path.replaceAll("\\", "/");
            return vol.readdirSync(path);
        }
        return []
    }
}

export function createDir(cwd:string, path: string) {
    cwd = cwd?.replaceAll("\\", "/");
    path = path.replaceAll("\\", "/");
    let dir = `${cwd}/${path}`
    vol.mkdirSync(dir, {recursive: true});
}

export function removeDir(cwd: string, path: string, args: string[] = []) {
    cwd = cwd?.replaceAll("\\", "/");
    path = path.replaceAll("\\", "/");
    let force = false;

    if (args.includes("/s")) {
        force = true;
    }

    if (readDir(cwd, path).length > 0 && !force) {
        return "Directory is not empty";
    }
    if (cwd === `${cwd}/${path}`) {
        return "Cannot delete current directory";
    }
    let dir = `${cwd}/${path}`;

    vol.rmdirSync(dir, {recursive: force});
    return "Directory removed";
}

