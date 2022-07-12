<script context="module">
import { browser, dev } from '$app/env';
import Seo from "$lib/components/seo.svelte";
import portrait from "$lib//Images/about/portrait.jpg"
import pokedexLite from "$lib/Images/projects/pokedex-lite.jpg"
import dropzoneAPI from "$lib//Images/projects/dropzone-api.jpg"
import dyzeeDiaries from "$lib/Images/projects/dyzee-diaries.jpg"
import musicianLookUp from "$lib/Images/projects/musician-lookup.jpg"
import Saos from "saos";
export const router = browser;
export const prerender = true;
</script>

<Seo title="Corey Damocles - Portfolio" description="Portfolio Homepage" pathname="/" />

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
        <h2 id="about">About Me</h2> <!--ID about for smooth-scroll-->
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
                    Hey! My name is Corey Damocles and I am a freelance web developer based in Phoenix, AZ. I have a passion for learning new technologies and started my coding journey through self-teaching in January 2022. I joined the <a href="https://purefunc.io/" target="_blank">Pure Func</a> web development agency as a front-end developer intern in April 2022.
                </p>
                <p>
                    I am currently developing projects with the cutting edge framework <a href="https://kit.svelte.dev/" target="_blank">SvelteKit</a>, as well as familiarizing myself with React, Typescript, the MERN stack, and other fun tech stacks! My skills include JavaScript, Node.js, Express.js, MongoDB, Git, HTML, and CSS/SCSS.
                <p>
                    Let's build something together!
                </p>
            </div>
            </Saos>
        </section>
    </div>

    <!--Projects section-->
    <div class="projects-container">
        <Saos once={true} animation={'fade-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'} top={250} bottom={250}>
        <h2 id="projects">Projects</h2>
        <!--ID projects for smooth-scroll-->
        </Saos>
        <section class="wrapper-projects">
            <Saos once={true} animation={'fade-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'} top={250} bottom={250}>
            <div class="projects-text">
                <h3>Dyzee Diaries</h3>
                <p>The Dyzee Diaries landing page was a collaborative effort with the Pure Func team. Our client had a slow-loading WordPress website, and it was our goal to recreate and optimize the static website using SvelteKit. We split up our tasks and used a tracker tool to track and update our task progress. My tasks included styling/animations, content, images, and components. This application was my first introduction to using and deploying a Svelte application.</p>
                <p>Svelte / SvelteKit, HTML, CSS, JavaScript</p>
                <a href="https://github.com/ubemacapuno/dyzee-diaries" target="_blank"><button class="project-link"><span>Repo</span></button></a>
                <a href="https://demo-dyzee-diaries.netlify.app/" target="_blank"><button class="project-link"><span>Live</span></button></a>
            </div>
            </Saos>
            <Saos once={true} animation={'swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both'} top={250} bottom={250}>
            <div class="projects-image">
                <a href="https://demo-dyzee-diaries.netlify.app/" target="_blank"><img class="project-img" src={dyzeeDiaries} alt="Dyzee Diaries project"></a>
            </div>
            </Saos>
        </section>

        <section class="wrapper-projects">
            <Saos once={true} animation={'fade-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'} top={250} bottom={250}>
            <div class="projects-text">
                <h3>Random Dropzone API</h3>
                <p>I enjoy playing first-person shooter games on my free-time, and developed an API that randomizes various map locations for the Call of Duty: Warzone battle royale videogame. There are three maps to choose from, with each map corresponding to a different HTTP GET request on the API which is hosted on Heroku.app.</p>
                <p class="disclaimer">*Please note that the API is hosted on a free Heroku.app account, so it may take up to 15 seconds for the dyno to respond.</p>
                <p>JavaScript, Node.js, Express.js, API hosted on <a href="https://random-rebirth-island-api.herokuapp.com/random" target="_blank">Heroku.app</a>, HTML, CSS</p>
                <a href="https://github.com/ubemacapuno/random-dropzone-api" target="_blank"><button class="project-link"><span>Repo</span></button></a>
                <a href="https://random-dropzone.netlify.app/" target="_blank"><button class="project-link"><span>Live</span></button></a>
            </div>
            </Saos>
            <Saos once={true} animation={'swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both'} top={250} bottom={250}>
            <div class="projects-image">
                <a href="https://random-dropzone.netlify.app/" target="_blank"><img class="project-img" src={dropzoneAPI} alt="Dropzone API project"></a>
            </div>
            </Saos>
        </section>

        <section class="wrapper-projects">
            <Saos once={true} animation={'fade-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'} top={250} bottom={250}>
            <div class="projects-text">
                <h3>Musician LookUp</h3>
                <p>Want to learn more about a famous musician? Try a search with Musician LookUp! This application utilizes an API and database provided by TheAudioDB to provide you with images and biographical information on countless musicians.</p>
                <p>HTML, CSS, JavaScript, API by <a href="https://www.theaudiodb.com/api_guide.php" target="_blank">TheAudioDB</a></p>
                <a href="https://github.com/ubemacapuno/musician-lookup" target="_blank"><button class="project-link"><span>Repo</span></button></a>
                <a href="https://codepen.io/corey-damocles/pen/qBobYYL" target="_blank"><button class="project-link"><span>Live</span></button></a>
            </div>
            </Saos>
            <Saos once={true} animation={'swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both'} top={250} bottom={250}>
            <div class="projects-image">
                <a href="https://musician-lookup.netlify.app/" target="_blank"><img class="project-img" src={musicianLookUp} alt="Musician LookUp Project"></a>
            </div>
            </Saos>
        </section>

        <section class="wrapper-projects">
            <Saos once={true} animation={'fade-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'} top={250} bottom={250}>
            <div class="projects-text">
                <h3>Pokédex Lite</h3>
                <p>I am an avid Pokémon fan and created this simple Pokédex app to teach myself how to use async functions and promises while using an API. Providing a Pokémon name or number will send a request to the API, which should then respond back with a Pokémon if found in the database. I also incorporated a random function that will randomly choose a Pokémon for the user! The card colors are responsive to the typing of the given Pokémon.</p>
                <p>HTML, CSS, JavaScript, API by <a href="https://pokeapi.co/" target="_blank">PokéAPI.co</a></p>
                <a href="https://github.com/ubemacapuno/pokedex-lite" target="_blank"><button class="project-link"><span>Repo</span></button></a>
                <a href="https://codepen.io/corey-damocles/pen/rNJZQXB" target="_blank"><button class="project-link"><span>Live</span></button></a>
            </div>
            </Saos>
            <Saos once={true} animation={'swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both'} top={250} bottom={250}>
            <div class="projects-image">
                <a href="https://codepen.io/corey-damocles/pen/rNJZQXB" target="_blank"><img class="project-img" src={pokedexLite} alt="Pokédex Lite project"></a>
            </div>
            </Saos>
        </section>

    </div>  
</body>

<style>
*, :after, :before {
    box-sizing: border-box;
}

body, .projects-container {
    background-color: var(--background-color);
}

header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

h1 {
    padding: 5px;
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

.disclaimer {
    font-style: italic;
}

.projects-container {
    margin: 0 5px;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
}

.project-img {
	min-width: 650px;
    padding-left: 15px;
    transition: all 0.3s;
}

.project-img:hover {
    transform: perspective(650px) rotateY(-20deg) translateY(-15px) rotateX(3deg) scale(1);
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
        padding: 15px 5px;
    }
    
    .project-img:hover {
    transform: none;
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
        padding: 0px 0px;
    }

    .project-img {
	    min-width: 200px;
    }
}

/* *************************** */
/* Animation Keyframes */
/* *************************** */

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

@keyframes -global-swing-in-top-fwd {
    0% {
      transform: rotateX(-100deg);
      transform-origin: top;
      opacity: 0;
    }
    100% {
      transform: rotateX(0deg);
      transform-origin: top;
      opacity: 1;
    }
  }
</style>