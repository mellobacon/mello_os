<script lang="ts">
    export let title = "";
</script>

<div class="header">
    <div class="title" title={title}>{title}</div>
    <div class="window-buttons">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <button class="close button" on:click></button>
    </div>
</div>

<style>
    .header {
        height: 30px;
        background-color: #1f3b9a;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: white;
        padding: 0 5px;
        user-select: none;
    }
    .title {
        font-size: 18px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .window-buttons {
        display: flex;
        flex-direction: row;
        gap: 5px;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
    .button {
        box-shadow: inset -1.5px -1.5px 0 0 #263238, inset 1.5px 1.5px 0 0 #fcfcfc, inset -3px -3px 0 0 #a099a1, inset 3px 3px 0 0 #cac6cb;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 19px;
        background-color: #cac6cb;
        cursor: pointer;
    }
    .button:active {
        outline: none;
        box-shadow: inset -1.5px -1.5px 0 0 #fcfcfc, inset 1.5px 1.5px 0 0 #263238, inset -3px -3px 0 0 #cac6cb, inset 3px 3px 0 0 #a099a1;
    }
</style>
