<script lang="ts">
    import ToolbarMenu from "./ToolbarMenu.svelte";

    export let tools: any = [];

</script>
<div class="toolbar">
    <div class="menus">
        {#each tools as tool}
            <ToolbarMenu name={tool.name} items={tool.items}></ToolbarMenu>
        {/each}
    </div>
    <slot></slot>
</div>

<style>
    .toolbar {
        height: 100%;
        padding: 1.5px 0;
        display: flex;
        flex-direction: column;
    }
    .menus {
        width: 100%;
        border-bottom: 1.5px solid #a099a1;
    }
</style>
