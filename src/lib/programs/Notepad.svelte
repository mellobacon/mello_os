<script>
    import Container from "../Container.svelte";
    import Program from "../Program.svelte";

    export let index;
    export let name;
</script>

<Program {name} {index}>
    <div class="notepad">
        <Container height="100%" _class="notepad-container">
            <textarea autocomplete="off" spellcheck="false"></textarea>
        </Container>
    </div>
</Program>

<style>
    .notepad {
        height: 100%;
    }
    textarea {
        resize: none;
        width: 100%;
        height: 100%;
        border: none;
        margin: 0;
        font-family: unset;
        border-radius: 0;
        box-sizing: border-box;
    }
    textarea:focus {
        outline: none;
    }
    :global(.notepad-container) {
        padding: 1.5px;
    }
</style>
