<script>
    import { routes } from './router'
    import { Router } from "svelte-router-spa";
    import { LoadingModal, Modal, PageTransition } from './components'
</script>

<main>
    <Router {routes} />
</main>

<LoadingModal/>
<Modal/>
<PageTransition/>
