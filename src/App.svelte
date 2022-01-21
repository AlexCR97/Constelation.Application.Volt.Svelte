<script>
    import { routes } from "./router";
    import { Router } from "svelte-router-spa";
    import { PageTransition } from './components'
</script>

<main>
    <Router {routes} />
</main>

<PageTransition/>
