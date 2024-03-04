<script lang="ts">
    import { onMount } from "svelte";

    export let open = false;
    export let name;
    export let items;

    let ref: HTMLElement;

    let position = 0;
    onMount(() => {
        position = ref.getBoundingClientRect().left;
    })
</script>

<svelte:window on:click={(e) => {
    if (e.target !== ref) {
        open = false;
    }
}}></svelte:window>

<button bind:this={ref} on:click={() => {open = true}}>{name}</button>

{#if open}
    <menu class="toolbar-menu" style="left: {position - 5}px;">
        {#each items as item}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <li class="menu-item" on:click={item.action}>{item.name}</li>
        {/each}
    </menu>
{/if}

<style>
    button {
        all: unset;
        height: 100%;
        cursor: pointer;
        padding: 0 5px;
    }
    button:hover {
        background-color: #1f3b9a;
        color: white;
    }
    .toolbar-menu {
        position: absolute;
        box-shadow: inset -1.5px -1.5px 0 0 #263238, inset 1.5px 1.5px 0 0 #dedcde, inset -3px -3px 0 0 #a099a1, inset 3px 3px 0 0 #fcfcfc;
        background: #cac6cb;
        width: 100px;
        padding: 3px;
        margin: 0;
    }
    .menu-item {
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 0 5px;
    }
    .menu-item:hover {
        background-color: #1f3b9a;
        color: white;
    }
    .menu-item::disabled:hover {
        color: gray;
    }
</style>
