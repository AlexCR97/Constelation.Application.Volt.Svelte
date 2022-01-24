<svelte:options accessors />

<script>
    import { onMount } from "svelte";
    import { ResponseError } from "../models/ResponseError.model";

    export let error = new ResponseError();

    onMount(() => {
        console.log("error is:", error);
    });
</script>

<div>
    <div class="d-flex mb-3">
        <code class="me-auto"> <b>Status Code</b> </code>
        <code class="ml-3 text-align-left">
            {error.statusCode}
        </code>
    </div>
    <div class="d-flex mb-3">
        <code class="me-auto"> <b>Type</b> </code>
        <code class="ml-3">
            {error.type}
        </code>
    </div>
    <div class="d-flex mb-3">
        <code class="me-auto"> <b>Message</b> </code>
        <code class="ml-3">
            {error.message}
        </code>
    </div>
</div>

<code class="mb-3"> <b>Details</b> </code>
<code>
    <pre>
            {JSON.stringify(error.details, null, 4)}

        </pre>
</code>
