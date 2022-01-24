<script>
    import { Button, Card, Headline, Label, TextField } from "attractions";
    import { router } from "../router";
    import { BackButton } from "../components";
    import api from "../api";
    import services from "../services";
    import store from "../store";
    import { waitAsync } from "../utils/time.utils";

    const signUpButtons = [
        {
            icon: "telephone",
            label: "Sign Up with my Phone Number",
            click: () => (signUpMethod = "telephone"),
        },
        {
            icon: "google",
            label: "Sign Up with Google",
            click: () => (signUpMethod = "google"),
        },
        {
            icon: "envelope",
            label: "Sign Up with an Email",
            click: () => (signUpMethod = "envelope"),
        },
    ];

    let signUpMethod = "";
    let email = "";
    let password = "";

    function onBackToSignUpMethodClicked() {
        signUpMethod = "";
    }

    function onLoginClicked() {
        router.login.go();
    }

    function onSignUpClicked() {
        signUpAsync(email, password);
    }

    async function signUpAsync(email, password) {
        store.loadingModal.open({ message: "Signing Up" });

        try {
            await waitAsync(1000);
            const response = await services.auth.signUpWithEmailAsync(
                email,
                password
            );
            console.log("response:", response);
        } finally {
            store.loadingModal.close();
        }
    }
</script>

<div class="d-flex-center height-100vh p-3">
    <div class="width-100">
        <Headline class="mb-5">Sign Up to Volt</Headline>

        {#if !signUpMethod}
            {#each signUpButtons as b}
                <div on:click={b.click}>
                    <Card
                        outline
                        tight
                        class={`d-flex-center-y cursor-pointer shadow text-select-none p-3 mb-3 color-${b.icon}`}
                    >
                        <i class={`bi bi-${b.icon} mr-2`} />
                        <p class="m-0">{b.label}</p>
                    </Card>
                </div>
            {/each}
        {/if}

        {#if signUpMethod}
            <div class="mb-4">
                <BackButton
                    navigate={false}
                    on:clicked={onBackToSignUpMethodClicked}
                >
                    Try another sign up method
                </BackButton>
            </div>
        {/if}

        {#if signUpMethod == "envelope"}
            <TextField
                class="mb-4"
                label="Email"
                outline
                type="email"
                withItem
                bind:value={email}
            >
                <i class="bi bi-envelope item" />
            </TextField>
            <TextField
                class="mb-4"
                label="Password"
                outline
                type="password"
                withItem
                bind:value={password}
            >
                <i class="bi bi-lock item" />
            </TextField>
            <div class="d-flex justify-end">
                <Button class="px-4" filled on:click={onSignUpClicked}
                    >Sign Up</Button
                >
            </div>
        {/if}
    </div>
</div>

<div class="fixed-bottom width-100">
    <div class="px-3 py-4">
        <Label class="text-center mb-3" small>Already have an account?</Label>
        <Button
            class="text-center width-100"
            selected
            on:click={onLoginClicked}
        >
            <span class="width-100">Login</span>
        </Button>
    </div>
</div>

<style global>
    .color-telephone {
        color: rgba(67, 0, 176, 0.8) !important;
        border-color: rgba(67, 0, 176, 0.8) !important;
    }

    .color-google {
        color: #da5044 !important;
        border-color: #da5044 !important;
    }

    .color-envelope {
        color: #242424 !important;
        border-color: #242424 !important;
    }
</style>
