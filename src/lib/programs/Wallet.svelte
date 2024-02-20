<script>
    import Button from "../Button.svelte";
    import Container from "../Container.svelte";
    import Input from "../Input.svelte";
    import Program from "../Program.svelte";

    export let index;
    export let name;
</script>

<Program {name} {index}>
    <div class="wallet">
        <Container height="100%" width="300px" _class="wallet-container">
            <h2>Funds: $1000</h2>
            <h3>Income: $2/hr</h3>
            <h3>Expenses: $50.700/month</h3>
            <h3>Budget: $20.84 over</h3>
        </Container>
        <div class="buttons">
            <Input label="Deposit" width="100%" />
            <Button label="Transfer"></Button>

            <Input label="Withdraw" width="100%" />
            <Button label="Transfer"></Button>
        </div>
    </div>
</Program>

<style>
    .wallet {
        height: 100%;
        width: 100%;
        display: flex;
        gap: 5px;
    }
    .buttons {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    :global(.wallet-container) {
        display: flex;
        flex-direction: column;
        padding: 3px;
        gap: 5px;
    }
    h3, h2 {
        padding: 0;
        margin: 0;
    }
</style>
