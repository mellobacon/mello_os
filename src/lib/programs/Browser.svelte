<script>
    import Container from "../Container.svelte";
import Input from "../Input.svelte";
    import Program from "../Program.svelte";
    import Toolbar from "../Toolbar.svelte";

    export let index;
    export let name;

    let tools = [
        {name: "File", items: [
            {name: "New Window", action: () => {console.log("e")}},
            {name: "Quit", action: () => {console.log("e")}}
        ]},
        {name: "Edit", items: [
            {name: "Undo", action: () => {console.log("e")}},
            {name: "Redo", action: () => {console.log("e")}}
        ]}
    ]
</script>

<Program {name} {index}>
    <Toolbar slot="toolbar" {tools}>
        <div class="addressbar">
            <div>Address: </div>
            <Input nolabel type="url" width="100%" />
        </div>
    </Toolbar>
    <div class="browser">
        <Container background="white" height="100%" _class="browser-container">
            <iframe title="web" src="http://info.cern.ch/hypertext/WWW/TheProject.html"></iframe>
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
    iframe {
        width: 100%;
        height: 100%;
    }
    :global(.browser-container) {
        padding: 1.5px;
    }
</style>
