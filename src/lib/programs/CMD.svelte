<script lang="ts">
    import { onMount } from "svelte";
    import Container from "../Container.svelte";
    import Program from "../Program.svelte";
    import "xterm/css/xterm.css";
    import { CMD } from "../../scripts/cmd";

    export let index;
    export let name;

    let terminal: HTMLElement;
    let termInstance: CMD;

    onMount(() => {
        termInstance = new CMD(terminal);
        termInstance.initTerm();
    });
</script>

<Program {name} {index}>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="cmd">
        <Container height="100%" _class="cmd-container" inset={false}>
            <div class="input" bind:this={terminal}></div>
        </Container>
    </div>
</Program>

<style>
    .cmd {
        height: 100%;
    }
    :global(.cmd-container) {
        background-color: black !important;
        padding: 5px !important;
    }
    .input {
        height: 100%;
        width: 100%;
    }
</style>
