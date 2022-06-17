<script>
    // import Copyright from "svelte-copyright";
</script>
<footer>
    <p>© 2022 Corey Damocles </p>
    <p class="pipe">|</p>
    <p>Coded with <a href="https://svelte.dev/">SvelteKit</a></p>
    <!-- <Copyright>Corey Damocles</Copyright> -->
</footer>

<style>

footer {
    background-color: #332FD0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
}

p {
    margin: 0;
}

@media (max-width: 350px) {
	footer {
        flex-direction: column;
	}

    .pipe {
        display: none;
    }
}
</style>