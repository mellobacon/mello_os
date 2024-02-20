<script lang="ts">
    import { onMount } from "svelte";

    export let width = "";
    export let height = "";
    export let label = "Button";
    export let direction: "flex-end" | "flex-start" | "center" = "center";

    let ref: HTMLElement;

    onMount(() => {
        ref.style.height = height;
        ref.style.width = width;
        ref.style.alignSelf = direction;
    })
</script>

<button bind:this={ref} class="button" on:click>{label}</button>

<style>
    .button {
        background-color: #cac6cb;
        box-shadow: inset -1.5px -1.5px 0 0 #263238, inset 1.5px 1.5px 0 0 #fcfcfc, inset -3px -3px 0 0 #a099a1, inset 3px 3px 0 0 #cac6cb;
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;
        cursor: pointer;
        padding: 2px 6px;
        margin-top: 5px;
        font-size: 18px;
    }
    .button:active {
        outline: none;
        box-shadow: inset -1.5px -1.5px 0 0 #fcfcfc, inset 1.5px 1.5px 0 0 #263238, inset -3px -3px 0 0 #cac6cb, inset 3px 3px 0 0 #a099a1;
    }
</style>
