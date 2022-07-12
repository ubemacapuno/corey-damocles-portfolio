<script lang="ts">
	import Icon from '$lib/icons/Icon.svelte';
    import Codepen from '$lib/Images/contact/codepen-icon.svg'
    import Github from '$lib/Images/contact/github-icon.svg'
    import Linkedin from '$lib/Images/contact/linkedin-icon.svg'
    import Twitter from '$lib/Images/contact/twitter-icon.svg'
	export let isMenuOpen = false;
	const closeMenu = () => (isMenuOpen = false);
    // This code below allows for smooth scrolling to ID on click
  	const scrollToElement = (selector: any) => {
    	const element = document.querySelector(selector);
    	if (!element) return;
		let position = element.getBoundingClientRect().top;
		let offset = position + window.pageYOffset;
		window.scrollTo({
		top: offset,
		behavior: 'smooth',
		});
	};
	// End code for smooth scrolling to ID on click
    let copyrightYear = new Date().getFullYear() 
</script>
<div class="header">
	<div class="hamburger-menu">
		<button class="menu-icon" on:click={() => (isMenuOpen = !isMenuOpen)}>
			<Icon name="hamburger" color=var(--accent-color) />
		</button>
	</div>
</div>
<aside class="mobile-menu-wrapper" class:isMenuOpen>
	<div class="mobile-menu">
		<div class="hamburger-menu">
			<button class="menu-icon close" on:click={closeMenu}>
				<Icon name="close" color=var(--accent-color) />
			</button>
		</div>
		<nav class="mobile-nav">
			<ul>
                <!-- The following anchors below will use smooth scrolling to get to their respective element IDs -->
                <li class="page-link"><a href={'#'} on:click|preventDefault={() => scrollToElement('#about')} on:click={closeMenu}>About</a></li>
				<li class="page-link"><a href={'#'} on:click|preventDefault={() => scrollToElement('#projects')} on:click={closeMenu}>Projects</a></li>
				<li class="page-link"><a href={'#'} on:click|preventDefault={() => scrollToElement('#contact')} on:click={closeMenu}>Contact</a></li>
			</ul>
		</nav>

        <div class="mobile-socials">
            <ul class="icons">
                <li><a class="icon" target="_blank" href="https://linkedin.com/in/corey-damocles-43709295"><img src={Linkedin} alt="LinkedIn Logo"></a></li>
                <li><a class="icon" target="_blank" href="https://github.com/ubemacapuno"><img src={Github} alt="GitHub Logo" class=""></a></li>
                <li><a class="icon" target="_blank" href="https://codepen.io/corey-damocles"><img src={Codepen} alt="Codepen Logo"></a></li>
                <li><a class="icon" target="_blank" href="https://twitter.com/coreydamo"><img src={Twitter} alt="Twitter Logo"></a></li>
            </ul>
			<div>
				<p class="copyright">© {copyrightYear} Corey Damocles</p>
			</div>
        </div>
	</div>
</aside>
<style>
	button {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
	}
	.hamburger-menu {
		padding: 0px 20px 0px 0px;
	}
	.header {
		background-color: var(--background-color);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.mobile-menu-wrapper {
		position: fixed;
		top: 0;
		left: -100%;
		transition: left 0.3s ease-in-out;
		align-items: center;
		height: 100vh;
		overflow-y: hidden;
		z-index: 100;
		width: 100%;
	}
	.menu-icon {
		border: none;
		font: inherit;
		cursor: pointer;
		outline: inherit;
	}
	.close {
		margin: 20px 20px;
	}
	.mobile-menu {
		padding: var(--gap-largest);
		background-color: var(--mobile-menu-background-color);
		height: 100vh;
		width: 100vw;
		overflow-y: scroll;
		margin-right: 1rem;
		z-index: 100;
	}
    ul{
        margin-left: 50px;
    }
	li {
		list-style: none;
		display: block;
		margin: 35px 0;
		font-weight: 400;
		font-size: var(--h4-font-size);
	}
	.page-link{
		border-bottom: 1px solid var(--tertiary-color);
	}
    a {
        color: var(--pure-white);
    }
    .mobile-socials{
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }
	.isMenuOpen {
		left: 0;
	}
	.icons{
		display: flex;
		justify-content: space-around;
		margin: 0 auto;
        padding-left: 0;
		padding-bottom: 50px;
	}
	.copyright{
		text-align: center;
		color: var(--tertiary-color);
		position: relative;
		bottom: 25px;
	}
/* Media Queries */
    @media (min-width: 451px) {
        .header {
            display: none;
        }
    }
    @media (max-width: 450px) {
       
        .mobile-menu-wrapper {
		    overflow-y: visible;
             /*"overflow-y: visible;" is a work-around. 
             Without it, when the mobile menu is opened,
             a HORIZONTAL scrollbar is visible on the mobile menu; 
			 this code hides that scrollbar. */
	    }
    }
</style>