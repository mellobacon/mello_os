<script lang="ts">
    import { onMount } from "svelte";

    let logo_path = "https://assets.codepen.io/345377/start.png";
    let ref: HTMLElement | null = null;
    let logo: HTMLElement | null = null;
    let menu: HTMLElement | null = null;


    onMount(() => {
        if (logo) {
            logo.style.backgroundImage = `url('${logo_path}')`;
        }
    })

    function toggleMenu() {
        if (!menu) return;
        menu.style.visibility = menu.style.visibility === "visible" ? "hidden" : "visible";
    }
    function hideMenu() {
        if (!menu) return;
        menu.style.visibility = "hidden";
    }
</script>

<svelte:window on:click={(e) => {
    if (e.target !== ref) {
        hideMenu();
    }
}}></svelte:window>

<button id="start-button" bind:this={ref} on:click={toggleMenu}>
    <span bind:this={logo} class="logo"></span>Start
    <div id="start-menu" bind:this={menu}>
        <div class="menu-item">Help</div>
        <div class="menu-item">Shut Down...</div>
    </div>
</button>

<style>
    #start-button {
        box-shadow: inset -1.5px -1.5px 0 0 #263238, inset 1.5px 1.5px 0 0 #fcfcfc, inset -3px -3px 0 0 #a099a1, inset 3px 3px 0 0 #cac6cb;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #cac6cb;
        padding: 4px 6px;
        font-size: 20px;
        user-select: none;
    }
    #start-button:focus {
        outline: none;
        box-shadow: inset -1.5px -1.5px 0 0 #fcfcfc, inset 1.5px 1.5px 0 0 #263238, inset -3px -3px 0 0 #cac6cb, inset 3px 3px 0 0 #a099a1;
    }
    .logo {
        background-size: 24px 21px;
        width: 24px;
        height: 21px;
        margin-right: 5px;
    }
    #start-menu {
        box-shadow: inset -1.5px -1.5px 0 0 #263238, inset 1.5px 1.5px 0 0 #fcfcfc, inset -3px -3px 0 0 #a099a1, inset 3px 3px 0 0 #dedcde;
        background: #cac6cb;
        position: absolute;
        bottom: 43px;
        left: 3px;
        display: flex;
        align-items: stretch;
        display: flex;
        flex-direction: column;
        width: 200px;
        padding: 4px;
        visibility: hidden;
    }
    .menu-item {
        position: relative;
        display: flex;
        align-items: center;
        align-content: center;
        padding-left: 8px;
        height: 40px;
    }
    .menu-item:nth-last-child(2) {
        border-bottom: 1.5px solid #a099a1;
    }
    .menu-item:last-child {
        border-top: 1.5px solid #fcfcfc;
    }
    .menu-item:hover {
        background-color: #1f3b9a;
        color: white;
    }
</style>
