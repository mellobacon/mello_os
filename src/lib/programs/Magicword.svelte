<script lang="ts">
    import Container from "../Container.svelte";
    import Program from "../Program.svelte";

    export let index;
    export let name;
</script>

<Program {name} {index}>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="magicword">
        <Container height="100%" _class="cmd-container" inset={false}>
            <img src="https://media.discordapp.net/attachments/243005537342586880/1209607571162406922/49f226612149af8cfe8a7a07218ed8b9-3925355693.jpg?ex=65e789d6&is=65d514d6&hm=4ec018c1e438554573dd1202104b42a1777db19fe773680423a3bc88fbc66f54&=&format=webp&width=750&height=663" alt="YOU DIDNT SAY THE MAGIC WORD!">
        </Container>
    </div>
</Program>

<style>
    .magicword {
        height: 100%;
    }
    img {
        width: 100%;
        height: 100%;
        image-rendering: pixelated;
    }
</style>
