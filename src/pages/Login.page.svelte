<script>
    import { Button, Card, Headline, Label, Subhead } from "attractions";
    import { router } from "../router";

    function onSignUpClicked() {
        router.signUp.go();
    }
</script>

<div class="d-flex-center height-100vh p-3">
    <div class="width-100">
        <Headline class="mb-5">Welcome to Volt!</Headline>

        <Card
            outline
            tight
            class="d-flex-center-y shadow p-3 mb-3"
            style="color: rgba(67, 0, 176, 0.8)"
        >
            <i class="bi bi-telephone mr-2" />
            <p class="m-0">Login with my Phone Number</p>
        </Card>

        <Card
            outline
            tight
            class="d-flex-center-y shadow p-3 mb-3"
            style="border-color: #DA5044; color: #DA5044"
        >
            <i class="bi bi-google mr-2" />
            <p class="m-0">Login with Google</p>
        </Card>

        <Card
            outline
            tight
            class="d-flex-center-y shadow p-3 mb-3"
            style="border-color: #242424; color: #242424"
        >
            <i class="bi bi-envelope mr-2" />
            <p class="m-0">Login with an Email</p>
        </Card>

        <br /><br /><br /><br />
    </div>
</div>

<div class="fixed-bottom width-100">
    <div class="px-3 py-4">
        <Label class="text-center mb-3" small>Don't have an account?</Label>
        <Button
            class="text-center width-100"
            selected
            on:click={onSignUpClicked}
        >
            <span class="width-100">Sign Up</span>
        </Button>
    </div>
</div>
