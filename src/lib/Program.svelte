<script lang="ts">
    import { draggable } from '@neodrag/svelte';
    import { onMount } from 'svelte';
    import Header from './Header.svelte';

    export let name = "Window Title";
    export let index = 1;
    let ref: HTMLElement;

    onMount(() => {
        if (!ref) return;
        ref.style.zIndex = `${index}`;

        ref.style.top = `${(ref.parentElement!.clientHeight - 320) / 2}px`;
        ref.style.left = `${(ref.parentElement!.clientWidth - 450) / 2}px`;

        unfocusWindows();
        (ref.getElementsByClassName("header")[0] as HTMLElement).style.backgroundColor = "#1f3b9a";
    })

    function bringToFront() {
        unfocusWindows();
        ref.style.zIndex = `${index + 1}`;
        (ref.getElementsByClassName("header")[0] as HTMLElement).style.backgroundColor = "#1f3b9a";
    }

    function closeWindow() {
        ref.remove();
    }
</script>

<script lang="ts" context="module">
    export function unfocusWindows() {
        for (const program of document.getElementsByClassName("program")) {
            const p = program as HTMLElement;
            p.style.zIndex = "1";
            (p.getElementsByClassName("header")[0] as HTMLElement).style.backgroundColor = "#747c94"
        }
    }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="program" bind:this={ref} on:mousedown={bringToFront} on:resize use:draggable={{ handle: '.header', bounds: '#icons'}}>
    <Header title={name} on:click={closeWindow} />
    <div class="program-content">
        <slot></slot>
    </div>
</div>

<style>
    .program {
        width: 500px;
        height: 300px;
        box-shadow:
            inset -1.5px -1.5px 0 0 #263238,
            inset 1.5px 1.5px 0 0 #dedcde,
            inset -3px -3px 0 0 #a099a1,
            inset 3px 3px 0 0 #fcfcfc;
        padding: 6px;
        background-color: #cac6cb;
        position: absolute;
        resize: both;
        overflow: hidden;
        min-height: 295px;
        min-width: 200px;
    }
    .program-content {
        height: calc(100% - 30px);
        width: 100%;
        padding: 5px;
        box-sizing: border-box;
    }
</style>
