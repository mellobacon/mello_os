<script lang="ts">
    import { onMount } from "svelte";
    import StartButton from "./StartButton.svelte";

    export let alignment: "left" | "top" | "bottom" = "left";

    let ref: HTMLElement | null = null;

    onMount(() => {
        if (!ref) return;

        switch (alignment) {
            case "left":
                ref.style.height = "100%";
                ref.style.width = "44px";
                ref.style.alignSelf = "flex-start";
                break;
            case "top":
                ref.style.width = "100%";
                ref.style.height = "44px";
                ref.style.alignSelf = "flex-start";
                break;
            case "bottom":
                ref.style.width = "100%";
                ref.style.height = "44px";
                ref.style.alignSelf = "flex-end";
                break;
        }

    })
    // background-color: rgba(58, 58, 58, 0.605);
</script>
<div bind:this={ref} id="taskbar">
    <StartButton />
</div>

<style>
    #taskbar {
        background-color: #cac6cb;
        box-shadow: inset 0 1.5px 0 0 #cac6cb, inset 0 3px 0 0 #fcfcfc;
        display: flex;
        align-items: center;
        padding: 3px 3px 0 3px;
    }
</style>
