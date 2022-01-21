<script>
    import { onMount } from "svelte";
    import { navigateTo } from "svelte-router-spa";
    import { Headline, Subhead } from "attractions";
    import { router } from "../router";

    onMount(() => {
        setTimeout(() => {
            router.login.go();
        }, 3000);
    });
</script>

<div class="d-flex-center height-100vh splash-page-bg">
    <div>
        <img
            class="img-center mb-3 pulse-animation"
            src="/img/logo-icon.png"
            alt="Thunder Bolt"
            width="90px"
        />
        <Headline class="text-center">Volt</Headline>
        <Subhead class="text-center text-white"
            >Lightning Fast File Server</Subhead
        >
    </div>
</div>

<style>
    .splash-page-bg {
        background-color: #612db4; /* For browsers that do not support gradients */
        background-image: linear-gradient(to bottom right, #af91df, #6935bd);
    }

    .pulse-animation {
        animation: pulse 1.5s infinite;
    }

    @keyframes pulse {
        0% {
            transform: scale(0.95);
        }

        70% {
            transform: scale(1.1);
        }

        100% {
            transform: scale(0.95);
        }
    }
</style>
