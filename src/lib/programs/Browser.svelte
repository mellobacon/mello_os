<script lang="ts">
    import Button from "../Button.svelte";
    import Container from "../Container.svelte";
    import Dialog from "../Dialog.svelte";
    import Input from "../Input.svelte";
    import Program from "../Program.svelte";
    import Toolbar from "../Toolbar.svelte";

    export let index;
    export let name;

    let tools = [
        {name: "File", items: [
            {name: "About", action: showAbout},
            {name: "Quit", action: quitWindow}
        ]},
    ]

    let ref;
    function quitWindow() {
        ref.$destroy()
    }
    function showAbout() {
        new Dialog({target: document.getElementById("icons")!, props: {
            "type": "alert", 
            "action_type": "info", 
            "title": "About browser", 
            message: "Welcome to Browser. This browser is able to load websites from the 90s"
        }})
    }

    let url = "";
    let src = "";
    let urls = [
        "http://info.cern.ch/hypertext/WWW/TheProject.html"
    ];
    async function processURL() {
        let request = await fetch(new Request(`https://archive.org/wayback/available?url=${url}&timestamp=1990`))
        name = "Browser (loading url...)"
        if (request.status === 200) {
            let json = await request.json();
            if (!json.archived_snapshots.closest) {
                name = "Browser (url error)"
                new Dialog({target: document.getElementById("icons")!, props: {
                    "type": "alert", 
                    "action_type": "error", 
                    "title": "URL Not Found", 
                    message: "ERROR: URL cannot be found or does not exist"
                }})
                return;
            }
            let timestamp: string = json.archived_snapshots.closest.timestamp.slice(0, 4);
            if (parseInt(timestamp) > 1999) {
                name = "Browser (url error)"
                new Dialog({target: document.getElementById("icons")!, props: {
                    "type": "alert", 
                    "action_type": "error", 
                    "title": "URL Not Found", 
                    message: "ERROR: URL cannot be found or does not exist"
                }})
            }
            else {
                src = json.archived_snapshots.closest.url;
                if (!urls.includes(url)) {
                    urls = [...urls, url];
                }
                name = `Browser (${url})`
            }
        }
        else {
            new Dialog({target: document.getElementById("icons")!, props: {
                "type": "alert", 
                "action_type": "error", 
                "title": "Internal Error", 
                message: "ERROR: Cannot process URL"
            }})
            name = "Browser (internal error)"
        }
    }
</script>

<Program {name} {index} bind:this={ref}>
    <Toolbar slot="toolbar" {tools}>
        <div class="addressbar">
            <div>Address: </div>
            <Input nolabel type="url" bind:input={url} width="100%" dropdown dropdown_items={urls} />
            <Button label="GO" width="24px" height="24px" on:click={processURL} />
        </div>
    </Toolbar>
    <div class="browser">
        <Container background="transparent" height="100%" _class="browser-container">
            <iframe title="" src={src}></iframe>
        </Container>
    </div>
</Program>

<style>
    .browser {
        height: 100%;
    }
    .addressbar {
        display: flex;
        gap: 5px;
        border-top: 1.5px solid #fcfcfc;
        padding: 3px;
    }
    :global(.addressbar button) {
        margin: 0 !important;
    }
    iframe {
        width: 100%;
        height: 100%;
    }
    :global(.browser-container) {
        padding: 1.5px;
    }
</style>
