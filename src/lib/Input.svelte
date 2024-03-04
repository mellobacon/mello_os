<script lang="ts">
    export let nolabel = false;
    export let label = "Input"
    export let type = "text";

    export let width = "";
    export let height = "";
</script>

{#if !nolabel}
    <label for="input">{label}: </label>
{/if}
<input class="input" type={type} style="height: {height}; width: {width}">

<style>
    .input {
        box-shadow: inset -1.5px -1.5px 0 0 #fcfcfc, inset 1.5px 1.5px 0 0 #a099a1;
        background-color: #fcfcfc;
        padding: 2px;
        box-sizing: border-box;
        font-family: unset;
    }
</style>
