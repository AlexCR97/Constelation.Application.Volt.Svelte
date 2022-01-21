<script>
    import { Button, Subhead, Label } from "attractions";
    import { createEventDispatcher } from "svelte";
    import { router } from "../router";

    export let navigate = true;

    const dispatch = createEventDispatcher();

    function onBackClicked() {
        if (navigate) return router.back();

        dispatch("clicked");
    }
</script>

<div class="d-flex-center-y width-fit" on:click={onBackClicked}>
    <Button round neutral>
        <i class="bi bi-chevron-left"/>
    </Button>
    {#if $$slots}
        <Subhead class="m-0 mb-1" style="font-weight: 400">
            <slot />
        </Subhead>
    {/if}
</div>
