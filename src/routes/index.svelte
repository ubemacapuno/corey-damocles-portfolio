<script>
import portrait from '$lib/images/about/portrait.png';
import pokedexLite from '$lib/images/projects/pokedex-lite.jpg';
import chromaticClimbers from '$lib/images/projects/chromatic-climbers.jpg';
import dyzeeDiaries from '$lib/images/projects/dyzee-diaries.jpg';
import Saos from "saos";
</script>

<svelte:head>
    <title>Corey Damocles - Portfolio</title>
</svelte:head>
<header>
    <Saos once={true} animation={'fade-in 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'} top={250} bottom={250}>
    <h1>I'm Corey, your next Web Developer. Ready to change the world?</h1>
    </Saos>
</header>
<body>
    <!--About Me section-->
    <div class="about-me-container" id="about-me-container">
        <Saos once={true} animation={'fade-in 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'} top={250} bottom={250}>
        <h2>About Me</h2>
        </Saos>
        <section class="about-me wrapper-about-me">
            <div class="about-me-left">
                <Saos once={true} animation={'scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'}>
                <img src={portrait} alt="Profile of Corey" class="profile-img">
                </Saos>
            </div>
            <Saos once={true} animation={'fade-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'} top={250} bottom={250}>
            <div class="about-me-right">
                <p>
                    I am a web developer based in Phoenix, AZ. I have a passion for learning new technologies and started my journey in coding and web development through self-teaching in January 2022. 
                </p>
                <p>
                    My skills include JavaScript, Node.js, Express.js, Svelte, React, MongoDB, Git, HTML, CSS, and SCSS. I am currently familiarizing myself with Typescript, the MERN stack, and other fun tech stacks!
                </p>
                <p>
                    Drop me a line if you’d like to collaborate!
                </p>
            </div>
            </Saos>
        </section>
    </div>

    <!--Projects section-->
    <div class="projects-container">
        <Saos once={true} animation={'fade-in 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'} top={250} bottom={250}>
        <h2>Projects</h2>
        </Saos>
        <section class="wrapper-projects">
            <Saos once={true} animation={'fade-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'} top={250} bottom={250}>
            <div class="projects-text">
                <h3>Dyzee Diaries</h3>
                <p>The Dyzee Diaries landing page was a collaborative effort with the Pure Func team. Our client had a slow-loading WordPress website, and it was our goal to recreate and optimize the static website using SvelteKit. We split up our tasks and used a tracker tool to track and update our task progress. My tasks included styling/animations, content, images, and components. This application was my first introduction to using and deploying a Svelte application.</p>
                <p>Svelte / SvelteKit, HTML, CSS, JavaScript</p>
                <a href="https://github.com/ubemacapuno/dyzee-diaries"><button class="project-link"><span>Repository</span></button></a>
            </div>
            </Saos>
            <Saos once={true} animation={'scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'}>
            <div class="projects-image">
                <a href="https://demo-dyzee-diaries.netlify.app/"><img class="project-img" src={dyzeeDiaries} alt="Dyzee Diaries project"></a>
            </div>
            </Saos>
        </section>

        <section class="wrapper-projects">
            <Saos once={true} animation={'fade-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'} top={250} bottom={250}>
            <div class="projects-text">
                <h3>Pokédex Lite</h3>
                <p>I am an avid Pokémon fan and created this simple Pokédex app to teach myself how to use async functions and promises while using an API. Providing a Pokémon name or number will send a request to the API, which should then respond back with a Pokémon if found in the database. I also incorporated a random function that will randomly choose a Pokémon for the user! The card colors are responsive to the typing of the given Pokémon.</p>
                <p>HTML, CSS, JavaScript, Pokémon API by <a href="https://pokeapi.co/">PokéAPI.co</a>.</p>
                <a href="https://github.com/ubemacapuno/pokedex-lite"><button class="project-link"><span>Repository</span></button></a>
            </div>
            </Saos>
            <Saos once={true} animation={'scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'}>
            <div class="projects-image">
                <a href="https://pokedexlookup.netlify.app/"><img class="project-img" src={pokedexLite} alt="Pokédex Lite project"></a>
            </div>
            </Saos>
        </section>

        <section class="wrapper-projects">
            <Saos once={true} animation={'fade-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'} top={250} bottom={250}>
            <div class="projects-text">
                <h3>Chromatic Climbers</h3>
                <p>This is a static single-paged website made for the Chromatic Climbers rock-climbing organization in Phoenix, AZ. When building this simple page, I realized that HTML and CSS are powerful on their own, and for a simple one-page website, frameworks and libraries are not always necessary! </p>
                <p>HTML , SCSS</p>
                <a href="https://github.com/ubemacapuno/chromatic-climbers"><button class="project-link"><span>Repository</span></button></a>
            </div>
            </Saos>
            <Saos once={true} animation={'scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'}>
            <div class="projects-image">
                <a href="https://github.com/ubemacapuno/chromatic-climbers"><img class="project-img" src={chromaticClimbers} alt="Chromatic Climbers project"></a>
            </div>
            </Saos>
        </section>
    </div>  
</body>

<style>
*, :after, :before {
    box-sizing: border-box;
}

header {
  scroll-behavior: smooth;
}

body {
    margin: 0
}

body, .projects-container {
    background-color: var(--background-color);
}

header {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}

h1 {
    padding-left: 5px;
}

h1, .projects-container h2 { 
   background: -webkit-linear-gradient(#E15FED, #332FD0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

h2 {
    text-align: center;
    margin-top: 0;
    padding-top: 10px;
}

.profile-img {
    max-width: 350px;
    max-height: 350px;
    border-radius: 5px;
    object-fit: cover;
    overflow: hidden;
    box-shadow: .25rem 3px 3px black;
}

.project-img {
    width: 750px;
}

.wrapper-about-me { 
    margin: 0 auto;
    padding: 0 5px; 
    max-width: 900px;
}

.wrapper-projects {
    display: flex;
    align-items: center;
    flex-direction: row;
    max-width: 1140px;
    padding: 5px 5px 70px 5px; 

}

.about-me-container{
    background-color: #000;
    background-image: linear-gradient(to right top,#E15FED,#9254C8,#332FD0);
}

.about-me-container h2{
    color: white;
}

.about-me {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    min-height: 550px;
}

.about-me-right {
    padding-left: 10px;
    margin-left: 40px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    max-width: 380px;
}

.about-me-left {
    padding-right: 10px;
    margin-right: 40px;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.about-me p {
    color: white;
}

.about-me p:last-child {
    margin-bottom: 30px;
}


.projects-container {
    margin: 0 5px;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.project-img {
	min-width: 650px;
    padding: 0 15px;
}

button {
    margin-bottom: 16px;
}

button {
	cursor: pointer;
	font-size: inherit;
	font-family: inherit;
	font-weight: bold;
	border: 2px solid var(--nav-text-color);
	padding: 10px;
	background-color: transparent;
    transition: all 0.2s;
    cursor: pointer;
    margin: 5px;
}

button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.2s;
  color: white;
}

button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.2s;
}

button:hover {
    background: -webkit-linear-gradient(#E15FED, #332FD0);
}

button:hover span {
  padding-right: 25px;
}

button:hover span:after {
  opacity: 1;
  right: 0;
}


@media (max-width: 900px) {
	.about-me {
        flex-direction: column;
    }

    .about-me-right, .about-me-left {
        padding: 0;
        margin: 0;
    }

    .profile-img {
        max-width: 270px;
        max-height: 270px;
        margin: 30px 0;
    }

    .wrapper-about-me { 
        max-width: 960px;
    }

    .wrapper-projects {
        flex-direction: column;
        max-width: 960px;
    }
    .projects-container {
        margin: 0;
    }
    
    .about-me p {
        margin: 0.4rem 0;
    }
    .project-img {
	    min-width: 600px;
        padding: 15px;
    }
}

@media (max-width: 650px) {
    .project-img {
	    min-width: 350px;
    }
}

@media (max-width: 450px) {
    h3 {
    border-bottom: 1px solid var(--nav-text-color);
    }

    .profile-img {
        max-width: 200px;
        max-height: 200px;
    }
    .about-me-right, .about-me-left {
        padding: 0px 5px;
    }

    .project-img {
	    min-width: 200px;
    }
}

@keyframes -global-from-left {
  0% {
    transform: rotateX(50deg) translateX(-200vw) skewX(-50deg);
    opacity: 1;
  }
  100% {
    transform: rotateX(0deg) translateX(0) skewX(0deg);
    opacity: 1;
  }
}

@keyframes -global-from-right {
  0% {
    transform: rotateX(-50deg) translateX(200vw) skewX(50deg);
    opacity: 1;
  }
  100% {
    transform: rotateX(0deg) translateX(0) skewX(0deg);
    opacity: 1;
  }
}

@keyframes -global-fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

@keyframes -global-scale-in-center {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
</style>