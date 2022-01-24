<script>
    import { Button, Dialog, Modal } from "attractions";
    let open = false;
</script>

<Modal bind:open let:closeCallback>
    <Dialog title="Hello?" {closeCallback}>It's me</Dialog>
</Modal>
