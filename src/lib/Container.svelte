<script lang="ts">
    import { onMount } from "svelte";

    export let width = "100%";
    export let height = "200px";
    export let _class = "";
    export let inset = true;
    export let background = "#fcfcfc";

    let ref: HTMLElement;

    onMount(() => {
        ref.style.width = width;
        ref.style.height = height;
        if (inset) {
            ref.style.boxShadow = "inset -1.5px -1.5px 0 0 #fcfcfc, inset 1.5px 1.5px 0 0 #a099a1";
        }
    })
</script>

<div bind:this={ref} class="container {_class}" style="background-color: {background};">
    <slot></slot>
</div>

<style>
    .container {
        padding-top: 1.5px;
        box-sizing: border-box;
    }
</style>
