<script lang="ts">
    import { onMount } from "svelte";

    export let nolabel = false;
    export let label = "Input"
    export let type = "text";
    export let dropdown = false;
    export let dropdown_items: string[] = [];

    let ref: HTMLElement;
    let dropdownbutton: HTMLElement;

    let open = false;

    export let width = "";
    export let height = "";

    let input_width;
    export let input = "";

    function handleOpen() {
        open = !open;
        input_width = ref.getBoundingClientRect().width;
    }
    function handleInput(item) {
        input = item;
    }

    onMount(() => {
        input_width = ref.getBoundingClientRect().width;
    })
</script>

<svelte:window on:mousedown={(e) => {
    if (e.target != dropdownbutton) {
        setTimeout(() => {
            open = false;
        }, 220)
    }
}}></svelte:window>

<div class="input-container" class:dropdown style="height: {height}; width: {width}">
    {#if !nolabel}
        <label for="input">{label}: </label>
    {/if}
    <input class="input" bind:this={ref} bind:value={input}>
    {#if dropdown}
        <div class="dropdown-button" on:click={handleOpen} bind:this={dropdownbutton}></div>
        {#if open}
        <div class="dropdown-container" style="width: {input_width - 3}px;">
            {#each dropdown_items as item}
                <div class="dropdown-item" on:click={() => {handleInput(item)}}>{item}</div>
            {/each}
        </div>
        {/if}
    {/if}
</div>

<style>
    .input-container.dropdown {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-right: -20px;
    }
    .dropdown-button {
        width: 20px;
        height: calc(100% - 7px);
        background-color: #cac6cb;
        box-shadow: inset -1.5px -1.5px 0 0 #263238, inset 1.5px 1.5px 0 0 #fcfcfc, inset -3px -3px 0 0 #a099a1, inset 3px 3px 0 0 #cac6cb;
        position: relative;
        left: -24px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
        font-size: 11px;
        line-height: 1.2;
        user-select: none;
        cursor: pointer;
    }
    .dropdown-button::after {
        content: "🞃";
        margin-top: -2px;
    }
    .dropdown-button:active {
        outline: none;
        box-shadow: inset -1.5px -1.5px 0 0 #fcfcfc, inset 1.5px 1.5px 0 0 #263238, inset -3px -3px 0 0 #cac6cb, inset 3px 3px 0 0 #a099a1;
    }
    .dropdown-container {
        position: absolute;
        padding: 3px 0;
        min-height: 5px;
        background-color: #fcfcfc;
        top: 92px;
        left: 64px;
        box-shadow: inset -1.5px -1.5px 0 0 #fcfcfc, inset 1.5px 1.5px 0 0 #a099a1;
        box-sizing: content-box;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .dropdown-item {
        padding: 2px 4px;
        cursor: pointer;
        color: black;
        width: 100%;
        box-sizing: border-box;
    }
    .dropdown-item:hover {
        background-color: #1f3b9a;
        color: white;
    }
    .input {
        box-shadow: inset -1.5px -1.5px 0 0 #fcfcfc, inset 1.5px 1.5px 0 0 #a099a1;
        background-color: #fcfcfc;
        padding: 2px;
        box-sizing: border-box;
        font-family: unset;
        width: 100%;
        height: 100%;
    }
</style>
