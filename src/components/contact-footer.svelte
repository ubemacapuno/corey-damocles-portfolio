<script>
	import codepenIcon from "/src/lib/Images/contact/codepen-icon.svg"
	import githubIcon from "/src/lib/Images/contact/github-icon.svg"
	import linkedinIcon from "/src/lib/Images/contact/linkedin-icon.svg"
	import twitterIcon from "/src/lib/Images/contact/twitter-icon.svg"
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
  	<form method="post" action="POST" data-netlify="true">
		<div class="fields">
			<div class="field half">
				<p class="contact-form">Name</p>
				<input type="text" name="name" id="name" required/>
			</div>
			<div class="field half">
				<p class="contact-form">Email</p>
				<input type="text" name="email" id="email" required/>
			</div>
			<div class="field half">
				<p class="contact-form">Subject</p>
				<input type="text" name="subject" id="subject" required/>
			</div>
			<div class="field">
				<p class="contact-form">Message</p>
				<textarea name="message" id="message" rows="4" required></textarea>
			</div>
			<div class="field">
				<div data-netlify-recaptcha="true"></div>
			</div>
			<div class="actions">
				<input type="submit" value="Send Message" class="primary" />
			</div>
		</div>
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

.field {
	margin-bottom: 20px;	
}

.fields {
	padding: 20px 0;
}

input, textarea, .primary {
	width: 30rem;
}

.actions {
	display: flex;
	align-items: center;
	justify-content: center;
}

textarea {
   resize: none;
}

.primary {
	color: black;
}

.contact-form {
	margin: 0;
	color: white;
}

@media (max-width: 900px) {
	input, textarea, .primary {
		width: 20rem;
	}
	header, form {
		align-items: center;
	}
}
@media (max-width: 350px) {
	input, textarea, .primary {
		width: 14rem;
	}
}
</style>
