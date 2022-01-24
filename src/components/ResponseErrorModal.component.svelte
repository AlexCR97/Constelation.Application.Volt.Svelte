<svelte:options accessors />

<script>
    import { onMount } from "svelte";
    import { ResponseError } from "../models/ResponseError.model";

    export let error = new ResponseError();
</script>

<div>
    <p class="mb-2">
        <code>
            <b>Status Code</b>
            {error.statusCode}
        </code>
    </p>
    <p class="mb-2">
        <code>
            <b>Type</b>
            {error.type}
        </code>
    </p>
    <p class="mb-2">
        <code>
            <b>Message</b>
            {error.message}
        </code>
    </p>
</div>

<p class="mb-2">
    <code> <b>Details</b> </code>
</p>
<p>
    <code>
        <pre>
            {JSON.stringify(error.details, null, 4)}
        </pre>
    </code>
</p>
