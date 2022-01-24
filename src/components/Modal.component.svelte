<script>
    import { Button, Dialog, Modal } from "attractions";
    import store from "../store";
    import ModalContent from "./ModalContent.component.svelte";

    let open = true;
    let component = undefined;
    let props = {};

    store.modal.subscribe((value) => {
        open = value.open;
        component = value.component;
        props = value.props;
    });
</script>

<Modal bind:open let:closeCallback>
    <Dialog title="Alert" {closeCallback}>
        <svelte:component this={component} {...props} />
    </Dialog>
</Modal>
