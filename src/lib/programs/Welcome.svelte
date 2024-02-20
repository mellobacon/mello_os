<script>
    import Button from "../Button.svelte";
    import Container from "../Container.svelte";
    import Program from "../Program.svelte";

    export let index;
    export let name;
</script>

<Program {name} {index}>
    <div class="welcome">
        <h2>Welcome to Mello OS</h2>
        <Container height="180px">
            <div class="info">
                <p>A stupid OS simulator thingy I'm making<br>Pretend this is good</p>
            </div>
        </Container>
        <Button width="120px" direction="flex-end" label="Close" />
    </div>
</Program>

<style>
    .welcome {
        display: flex;
        flex-direction: column;
    }
    .welcome h2 {
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
    }
</style>
