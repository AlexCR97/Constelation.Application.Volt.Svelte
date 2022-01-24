<script>
    import { Button, Dialog, H2, H3, Loading, Modal } from "attractions";
    import { fade } from "svelte/transition";
    import store from "../store";

    let open = false; // Binding for fade animation
    let modalOpen = true; // Modal is always open under the hood
    let message = "";

    store.loadingModal.subscribe((value) => {
        open = value.open;
        message = value.message;
    });
</script>

{#if open}
    <div transition:fade>
        <Modal noClickaway bind:open={modalOpen}>
            <div>
                {#if message}
                    <H2 class="text-center mb-2" style="color: white"
                        >{message}</H2
                    >
                {/if}
                <Loading />
            </div>
        </Modal>
    </div>
{/if}
