<!-- This is for global styling layout -->
<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
</svelte:head>
<script context="module">
    import ContactFooter from "../components/contact-footer.svelte"
    import Footer from "../components/footer.svelte"
    import "../app.css"
</script>
<slot></slot>
<ContactFooter/>
<Footer/>