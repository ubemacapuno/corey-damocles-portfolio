<script context="module">
	export const prerender = true;
	import codepenIcon from "/src/lib/Images/contact/codepen-icon.svg"
	import githubIcon from "/src/lib/Images/contact/github-icon.svg"
	import linkedinIcon from "/src/lib/Images/contact/linkedin-icon.svg"
	import twitterIcon from "/src/lib/Images/contact/twitter-icon.svg"

	import { browser, dev } from '$app/env';
	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;
	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;
</script>
<div class="page-wrapper">
	<header>
		<h2>Let's connect!</h2>
		<!--Social Media Links / Insert SVGs here-->
		<ul class="icons">
			<li><a target="_blank" href="https://linkedin.com/in/corey-damocles-43709295"><img src={linkedinIcon} alt="Linkedin Logo" class="icon"></a></li>
			<li><a target="_blank" href="https://github.com/ubemacapuno"><img src={githubIcon} alt="Github Logo" class="icon"></a></li>
			<li><a target="_blank" href="https://codepen.io/corey-damocles"><img src={codepenIcon} alt="Codepen Logo" class="icon"></a></li>
			<li><a target="_blank" href="https://twitter.com/coreydamo"><img src={twitterIcon} alt="Twitter Logo" class="icon"></a></li>
		</ul>
	</header>
	<div class="actions">
		<a target="_blank" rel="noopener noreferrer" href="mailto:damoclescj@gmail.com"><input type="submit" value="Send Email" class="primary" /></a>
	</div>
	<form name="contact" method="POST" data-netlify="true">
		<p>
		  <label>Your Name: <input type="text" name="name" /></label>
		</p>
		<p>
		  <label>Your Email: <input type="email" name="email" /></label>
		</p>
		<p>
		  <label>Your Role: <select name="role[]" multiple>
			<option value="leader">Leader</option>
			<option value="follower">Follower</option>
		  </select></label>
		</p>
		<p>
		  <label>Message: <textarea name="message"></textarea></label>
		</p>
		<p>
		  <button type="submit">Send</button>
		</p>
	  </form>
</div>
<style>

.page-wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-image: linear-gradient(to right top,#E15FED,#9254C8,#332FD0);
}

header {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}

ul {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;
	margin: 16px 0;
}

li {
	display: inline;
	list-style: none;
	margin: 0 5px;
}

.icon {
	width: 100%;
	transition: all 0.3s;
}

.icon:hover {
	transform:scale(1.2)
}

h2 {
	color: white;
}

form {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-end;
}

.actions {
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 16px;
}

.primary {
	color: white;
	cursor: pointer;
	font-size: inherit;
	font-family: inherit;
	font-weight: bold;
	border: 2px solid var(--nav-text-color);
	padding: 10px;
	background-color: transparent;
    transition: all 0.2s;
    cursor: pointer;
}

.primary:hover {
    background-color: var(--primary-color);
}

</style>
