<script>
    let copyrightYear = new Date().getFullYear() 
</script>
<footer>
    <p>© {copyrightYear} Corey Damocles</p>
    <p class="pipe">|</p>
    <p>Coded with <a href="https://kit.svelte.dev/" target="_blank">SvelteKit</a></p>
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