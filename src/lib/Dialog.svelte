<script lang="ts">
    import { onMount } from "svelte";
    import { draggable } from '@neodrag/svelte';
    import Header from "./Header.svelte";
    import { unfocusWindows } from "./Program.svelte";

    export let type: "alert" | "input" = "alert";
    export let action_type: "info" | "warning" | "error" | "confirm" | "success" = "info"
    export let input_type: "credentials" | "text" | "form" | "select" = "text";

    export let title = "Dialog";
    export let message = "";
    export let randomPos = false;

    let ref: HTMLElement;
    let icon: HTMLElement;
    let dialog: HTMLElement;

    let flash: Animation;

    let icons = {
        "info": "https://win98icons.alexmeub.com/icons/png/msg_information-0.png",
        "warning": "https://win98icons.alexmeub.com/icons/png/msg_warning-0.png",
        "error": "https://win98icons.alexmeub.com/icons/png/msg_error-0.png",
        "confirm": "https://win98icons.alexmeub.com/icons/png/msg_question-0.png",
        "success": "https://win98icons.alexmeub.com/icons/png/check-0.png"
    }

    onMount(() => {
        icon.style.backgroundImage = `url("${icons[action_type]}")`;
        if (randomPos) {
            dialog.style.left = `${Math.random() * ((ref.clientWidth - 300) - 0) + 0}px`;
            dialog.style.top = `${Math.random() * ((ref.clientHeight - 200) - 0) + 0}px`;
        }
        flash = dialog.getAnimations()[0];
        flash.finish();

        unfocusWindows();
    })

    function closeDialog() {
        ref.remove();
    }

    function flashDialog(e) {
        if (e.target === ref) flash.play();
    }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div id="dialog-overlay" bind:this={ref} on:click|stopPropagation={flashDialog}>
    <div class="dialog" bind:this={dialog} use:draggable={{ handle: '.header', bounds: '#icons'}}>
        <Header {title} on:click={closeDialog} />
        <div class="dialog-content">
            {#if type === "alert"}
                <div class="alert">
                    <div class="icon" bind:this={icon}></div>
                    <div class="message">{message}</div>
                </div>
            {/if}
        </div>
    </div>
</div>

<style>
    #dialog-overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 99;
    }
    .dialog {
        box-shadow:
            inset -1.5px -1.5px 0 0 #263238,
            inset 1.5px 1.5px 0 0 #dedcde,
            inset -3px -3px 0 0 #a099a1,
            inset 3px 3px 0 0 #fcfcfc;
        padding: 6px;
        background-color: #cac6cb;
        position: absolute;
        min-width: 300px;
        top: 40%;
        left: 40%;
        animation: flash 0.15s step-start 3;
        z-index: 100;
    }
    @keyframes flash {
        50% {
            opacity: 0;
        }
    }
    .dialog-content {
        height: calc(100% - 30px);
        width: 100%;
        padding: 5px;
        box-sizing: border-box;
    }

    .alert {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3px;
        width: 100%;
        height: 100%;
    }
    .icon {
        width: 32px;
        height: 32px;
        background-size: 32px 32px;
    }
</style>
