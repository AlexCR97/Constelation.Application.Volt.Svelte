<script>
    import store from "../store";

    let show = false;

    store.pageTransition.subscribe((ev) => {
        show = ev.show;
    });
</script>

<div
    class:page-transition={true}
    class:page-transition-hide={!show}
    class:page-transition-show={show}
/>

<style>
    .page-transition {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: white;
        transition: all ease 0.5s;
    }

    .page-transition-hide {
        /* display: none; */
        opacity: 0;
        z-index: -999;
    }

    .page-transition-show {
        /* display: block; */
        opacity: 1;
        z-index: 999;
    }
</style>
