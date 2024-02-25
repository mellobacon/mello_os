<script lang="ts">
    import Button from "../Button.svelte";
    import Container from "../Container.svelte";
    import Program from "../Program.svelte";

    export let index;
    export let name;
    let ref;

    function closeWindow() {
        ref.$destroy()
    }
</script>

<Program {name} {index} bind:this={ref}>
    <div class="welcome">
        <h2>Welcome to Mello OS</h2>
        <Container height="180px">
            <div class="info">
                <h3>About</h3>
                <p>A fake OS styled as Windows 95 using web dev magic (Svelte, TypeScript and CSS basically)</p>
                <h3>Features</h3>
                <ul>
                    <li>Working windows -- well some anyways</li>
                    <li>Working terminal</li>
                    <li>An easter egg just because</li>
                    <li>Virtual filesystem</li>
                    <li>More to come...</li>
                </ul>
                <h3>Changelog</h3>
                <h4>0.1</h4>
                <ul>
                    <li>Initial deployment</li>
                </ul>
                <h4>0.2</h4>
                <ul>
                    <li>Added a basic virtual filesystem. Just supports directories for now</li>
                    <li>Added terminal commands to navigate filesystem. Namely dir, mkdir, rmdir</li>
                    <li>Added actual info to welcome window</li>
                </ul>
                <h3>Links</h3>
                <p><a href="https://github.com/mellobacon/mello_os">GitHub</a></p>
            </div>
        </Container>
        <Button width="120px" direction="flex-end" label="Close" on:click={closeWindow} />
    </div>
</Program>

<style>
    .welcome {
        display: flex;
        flex-direction: column;
    }
    .welcome h2, h3, h4 {
        padding: 0;
        margin: 0;
    }
    p {
        padding: 5px;
        margin: 0;
    }
    .info {
        overflow: auto;
        height: 100%;
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
    }
    ul {
        margin: 0;
    }
    li {
        list-style-type: square;
    }
</style>
