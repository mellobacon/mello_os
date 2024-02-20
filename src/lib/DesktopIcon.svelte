<script lang="ts">
    import { onMount } from "svelte";
    import Dialog from "./Dialog.svelte";

    export let name = "Program Icon";
    export let icon = "https://win98icons.alexmeub.com/icons/png/executable-0.png";
    export let program;
    export let error = false;

    let logo: HTMLElement;


    let target;
    onMount(() => {
        logo.style.backgroundImage = `url('${icon}')`;
        target = document.getElementById("icons")!;
    })

    let index = 1;
    function addProgram(name: any) {
        if (error) {
            new Dialog({
                target: target, 
                props: {"action_type": "error", title:"Error opening program", message: `The program "${name}" cannot be found.`}
            })
            return;
        }

        new program({target: target, props: {name: name, index: index++}})
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="desktop-icon" draggable="true" on:click={() => {addProgram(name)}} title={name}>
    <span class="logo" bind:this={logo}></span>
    <div class="name">{name}</div>
</div>

<style>
    .desktop-icon {
        width: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 5px;
        cursor: pointer;
        user-select: none;
        color: white;
        margin: 3px 0;
    }
    .desktop-icon:hover {
        background-color: rgba(191, 191, 191, 0.44);
    }
    .logo {
        width: 32px;
        height: 32px;
        background-size: 32px 32px;
    }
    .name {
        text-overflow: ellipsis;
        width: 100%;
        text-align: center;
        white-space: pre;
        overflow: hidden;
    }
</style>
