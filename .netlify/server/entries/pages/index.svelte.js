var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_ae8bceff = require("../../chunks/index-ae8bceff.js");
const Saos = (0, import_index_ae8bceff.c)(($$result, $$props, $$bindings, slots) => {
  let { animation = "none" } = $$props;
  let { animation_out = "none; opacity: 0" } = $$props;
  let { once = false } = $$props;
  let { top = 0 } = $$props;
  let { bottom = 0 } = $$props;
  let { css_observer = "" } = $$props;
  let { css_animation = "" } = $$props;
  const dispatch = (0, import_index_ae8bceff.b)();
  let observing = true;
  const countainer = `__saos-${Math.random()}__`;
  if ($$props.animation === void 0 && $$bindings.animation && animation !== void 0)
    $$bindings.animation(animation);
  if ($$props.animation_out === void 0 && $$bindings.animation_out && animation_out !== void 0)
    $$bindings.animation_out(animation_out);
  if ($$props.once === void 0 && $$bindings.once && once !== void 0)
    $$bindings.once(once);
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  if ($$props.bottom === void 0 && $$bindings.bottom && bottom !== void 0)
    $$bindings.bottom(bottom);
  if ($$props.css_observer === void 0 && $$bindings.css_observer && css_observer !== void 0)
    $$bindings.css_observer(css_observer);
  if ($$props.css_animation === void 0 && $$bindings.css_animation && css_animation !== void 0)
    $$bindings.css_animation(css_animation);
  {
    dispatch("update", { observing });
  }
  return `<div${(0, import_index_ae8bceff.a)("id", countainer, 0)}${(0, import_index_ae8bceff.a)("style", css_observer, 0)}>${`<div style="${"animation: " + (0, import_index_ae8bceff.e)(animation) + "; " + (0, import_index_ae8bceff.e)(css_animation)}">${slots.default ? slots.default({}) : ``}</div>`}</div>`;
});
var dyzeeDiaries = "/_app/assets/dyzee-diaries-b7eb3c2f.jpg";
var chromaticClimbers = "/_app/assets/chromatic-climbers-9f7fbf70.jpg";
var pokedexLite = "/_app/assets/pokedex-lite-9c8ff969.jpg";
var portrait = "/_app/assets/portrait-a1733fb0.jpg";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-14rfupm.svelte-14rfupm,.svelte-14rfupm.svelte-14rfupm:after,.svelte-14rfupm.svelte-14rfupm:before{box-sizing:border-box}header.svelte-14rfupm.svelte-14rfupm{scroll-behavior:smooth}body.svelte-14rfupm.svelte-14rfupm{margin:0\r\n}body.svelte-14rfupm.svelte-14rfupm,.projects-container.svelte-14rfupm.svelte-14rfupm{background-color:var(--background-color)}header.svelte-14rfupm.svelte-14rfupm{display:flex;align-items:center;justify-content:center;min-height:100vh}h1.svelte-14rfupm.svelte-14rfupm{padding-left:5px}h1.svelte-14rfupm.svelte-14rfupm,.projects-container.svelte-14rfupm h2.svelte-14rfupm{background:-webkit-linear-gradient(#E15FED, #332FD0);-webkit-background-clip:text;-webkit-text-fill-color:transparent}h2.svelte-14rfupm.svelte-14rfupm{text-align:center;margin-top:0;padding-top:10px}.profile-img.svelte-14rfupm.svelte-14rfupm{max-width:350px;max-height:350px;border-radius:5px;object-fit:cover;overflow:hidden;box-shadow:.25rem 3px 3px black}.wrapper-about-me.svelte-14rfupm.svelte-14rfupm{margin:0 auto;padding:0 5px;max-width:900px}.wrapper-projects.svelte-14rfupm.svelte-14rfupm{display:flex;align-items:center;flex-direction:row;max-width:1140px;padding:5px 5px 70px 5px}.about-me-container.svelte-14rfupm.svelte-14rfupm{background-color:#000;background-image:linear-gradient(to right top,#E15FED,#9254C8,#332FD0)}.about-me-container.svelte-14rfupm h2.svelte-14rfupm{color:white}.about-me.svelte-14rfupm.svelte-14rfupm{display:flex;align-items:center;justify-content:center;flex-direction:row;min-height:550px}.about-me-right.svelte-14rfupm.svelte-14rfupm{padding-left:10px;margin-left:40px;display:flex;align-items:flex-start;flex-direction:column;max-width:380px}.about-me-left.svelte-14rfupm.svelte-14rfupm{padding-right:10px;margin-right:40px;display:flex;align-items:center;flex-direction:column}.about-me.svelte-14rfupm p.svelte-14rfupm{color:white}.about-me.svelte-14rfupm p.svelte-14rfupm:last-child{margin-bottom:30px}.projects-container.svelte-14rfupm.svelte-14rfupm{margin:0 5px;display:flex;align-items:center;flex-direction:column;position:relative}.project-img.svelte-14rfupm.svelte-14rfupm{min-width:650px;padding:0 15px;transition:all 0.3s}.project-img.svelte-14rfupm.svelte-14rfupm:hover{transform:perspective(650px) rotateY(-20deg) translateY(-15px) rotateX(3deg) scale(1)}button.svelte-14rfupm.svelte-14rfupm{margin-bottom:16px}button.svelte-14rfupm.svelte-14rfupm{cursor:pointer;font-size:inherit;font-family:inherit;font-weight:bold;border:2px solid var(--nav-text-color);padding:10px;background-color:transparent;transition:all 0.2s;cursor:pointer;margin:5px}button.svelte-14rfupm span.svelte-14rfupm{cursor:pointer;display:inline-block;position:relative;transition:0.2s;color:white}button.svelte-14rfupm span.svelte-14rfupm:after{content:'\\00bb';position:absolute;opacity:0;top:0;right:-20px;transition:0.2s}button.svelte-14rfupm.svelte-14rfupm:hover{background:-webkit-linear-gradient(#E15FED, #332FD0)}button.svelte-14rfupm:hover span.svelte-14rfupm{padding-right:25px}button.svelte-14rfupm:hover span.svelte-14rfupm:after{opacity:1;right:0}@media(max-width: 900px){.about-me.svelte-14rfupm.svelte-14rfupm{flex-direction:column}.about-me-right.svelte-14rfupm.svelte-14rfupm,.about-me-left.svelte-14rfupm.svelte-14rfupm{padding:0;margin:0}.profile-img.svelte-14rfupm.svelte-14rfupm{max-width:270px;max-height:270px;margin:30px 0}.wrapper-about-me.svelte-14rfupm.svelte-14rfupm{max-width:960px}.wrapper-projects.svelte-14rfupm.svelte-14rfupm{flex-direction:column;max-width:960px}.projects-container.svelte-14rfupm.svelte-14rfupm{margin:0}.about-me.svelte-14rfupm p.svelte-14rfupm{margin:0.4rem 0}.project-img.svelte-14rfupm.svelte-14rfupm{min-width:600px;padding:15px}.project-img.svelte-14rfupm.svelte-14rfupm:hover{transform:none}}@media(max-width: 650px){.project-img.svelte-14rfupm.svelte-14rfupm{min-width:350px}}@media(max-width: 450px){h3.svelte-14rfupm.svelte-14rfupm{border-bottom:1px solid var(--nav-text-color)}.profile-img.svelte-14rfupm.svelte-14rfupm{max-width:200px;max-height:200px}.about-me-right.svelte-14rfupm.svelte-14rfupm,.about-me-left.svelte-14rfupm.svelte-14rfupm{padding:0px 0px}.project-img.svelte-14rfupm.svelte-14rfupm{min-width:200px}}@keyframes from-left{0%{transform:rotateX(50deg) translateX(-200vw) skewX(-50deg);opacity:1}100%{transform:rotateX(0deg) translateX(0) skewX(0deg);opacity:1}}@keyframes from-right{0%{transform:rotateX(-50deg) translateX(200vw) skewX(50deg);opacity:1}100%{transform:rotateX(0deg) translateX(0) skewX(0deg);opacity:1}}@keyframes fade-in{0%{opacity:0}100%{opacity:1}}@keyframes scale-in-center{0%{transform:scale(0);opacity:1}100%{transform:scale(1);opacity:1}}@keyframes swing-in-top-fwd{0%{transform:rotateX(-100deg);transform-origin:top;opacity:0}100%{transform:rotateX(0deg);transform-origin:top;opacity:1}}",
  map: null
};
const Routes = (0, import_index_ae8bceff.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Corey Damocles - Portfolio</title>`, ""}`, ""}
<header class="${"svelte-14rfupm"}">${(0, import_index_ae8bceff.v)(Saos, "Saos").$$render($$result, {
    once: true,
    animation: "fade-in 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
    top: 250,
    bottom: 250
  }, {}, {
    default: () => {
      return `<h1 class="${"svelte-14rfupm"}">I&#39;m Corey, your next Web Developer. Ready to change the world?</h1>`;
    }
  })}</header>
<body class="${"svelte-14rfupm"}">
    <div class="${"about-me-container svelte-14rfupm"}" id="${"about-me-container"}">${(0, import_index_ae8bceff.v)(Saos, "Saos").$$render($$result, {
    once: true,
    animation: "fade-in 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
    top: 250,
    bottom: 250
  }, {}, {
    default: () => {
      return `<h2 class="${"svelte-14rfupm"}">About Me</h2>`;
    }
  })}
        <section class="${"about-me wrapper-about-me svelte-14rfupm"}"><div class="${"about-me-left svelte-14rfupm"}">${(0, import_index_ae8bceff.v)(Saos, "Saos").$$render($$result, {
    once: true,
    animation: "scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
  }, {}, {
    default: () => {
      return `<img${(0, import_index_ae8bceff.a)("src", portrait, 0)} alt="${"Profile of Corey"}" class="${"profile-img svelte-14rfupm"}">`;
    }
  })}</div>
            ${(0, import_index_ae8bceff.v)(Saos, "Saos").$$render($$result, {
    once: true,
    animation: "fade-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
    top: 250,
    bottom: 250
  }, {}, {
    default: () => {
      return `<div class="${"about-me-right svelte-14rfupm"}"><p class="${"svelte-14rfupm"}">Hey! My name is Corey Damocles and I am a freelance web developer based in Phoenix, AZ. I have a passion for learning new technologies and started my coding journey through self-teaching in January 2022. I joined the <a href="${"https://purefunc.io/"}" target="${"_blank"}" class="${"svelte-14rfupm"}">Pure Func</a> web development agency as a front-end developer in April 2022.
                </p>
                <p class="${"svelte-14rfupm"}">My skills include JavaScript, Node.js, Express.js, Svelte/Sveltekit, MongoDB, Git, HTML, and CSS/SCSS. I am currently familiarizing myself with React, Typescript, the MERN stack, and other fun tech stacks!
                </p>
                <p class="${"svelte-14rfupm"}">Let&#39;s build something together!
                </p></div>`;
    }
  })}</section></div>

    
    <div class="${"projects-container svelte-14rfupm"}">${(0, import_index_ae8bceff.v)(Saos, "Saos").$$render($$result, {
    once: true,
    animation: "fade-in 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
    top: 250,
    bottom: 250
  }, {}, {
    default: () => {
      return `<h2 class="${"svelte-14rfupm"}">Projects</h2>`;
    }
  })}
        <section class="${"wrapper-projects svelte-14rfupm"}">${(0, import_index_ae8bceff.v)(Saos, "Saos").$$render($$result, {
    once: true,
    animation: "fade-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
    top: 250,
    bottom: 250
  }, {}, {
    default: () => {
      return `<div class="${"projects-text svelte-14rfupm"}"><h3 class="${"svelte-14rfupm"}">Dyzee Diaries</h3>
                <p class="${"svelte-14rfupm"}">The Dyzee Diaries landing page was a collaborative effort with the Pure Func team. Our client had a slow-loading WordPress website, and it was our goal to recreate and optimize the static website using SvelteKit. We split up our tasks and used a tracker tool to track and update our task progress. My tasks included styling/animations, content, images, and components. This application was my first introduction to using and deploying a Svelte application.</p>
                <p class="${"svelte-14rfupm"}">Svelte / SvelteKit, HTML, CSS, JavaScript</p>
                <a href="${"https://github.com/ubemacapuno/dyzee-diaries"}" class="${"svelte-14rfupm"}"><button class="${"project-link svelte-14rfupm"}"><span class="${"svelte-14rfupm"}">Repository</span></button></a></div>`;
    }
  })}
            ${(0, import_index_ae8bceff.v)(Saos, "Saos").$$render($$result, {
    once: true,
    animation: "swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both",
    top: 250,
    bottom: 250
  }, {}, {
    default: () => {
      return `<div class="${"projects-image svelte-14rfupm"}"><a href="${"https://demo-dyzee-diaries.netlify.app/"}" class="${"svelte-14rfupm"}"><img class="${"project-img svelte-14rfupm"}"${(0, import_index_ae8bceff.a)("src", dyzeeDiaries, 0)} alt="${"Dyzee Diaries project"}"></a></div>`;
    }
  })}</section>

        <section class="${"wrapper-projects svelte-14rfupm"}">${(0, import_index_ae8bceff.v)(Saos, "Saos").$$render($$result, {
    once: true,
    animation: "fade-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
    top: 250,
    bottom: 250
  }, {}, {
    default: () => {
      return `<div class="${"projects-text svelte-14rfupm"}"><h3 class="${"svelte-14rfupm"}">Pok\xE9dex Lite</h3>
                <p class="${"svelte-14rfupm"}">I am an avid Pok\xE9mon fan and created this simple Pok\xE9dex app to teach myself how to use async functions and promises while using an API. Providing a Pok\xE9mon name or number will send a request to the API, which should then respond back with a Pok\xE9mon if found in the database. I also incorporated a random function that will randomly choose a Pok\xE9mon for the user! The card colors are responsive to the typing of the given Pok\xE9mon.</p>
                <p class="${"svelte-14rfupm"}">HTML, CSS, JavaScript, API by <a href="${"https://pokeapi.co/"}" class="${"svelte-14rfupm"}">Pok\xE9API.co</a></p>
                <a href="${"https://github.com/ubemacapuno/pokedex-lite"}" class="${"svelte-14rfupm"}"><button class="${"project-link svelte-14rfupm"}"><span class="${"svelte-14rfupm"}">Repository</span></button></a></div>`;
    }
  })}
            ${(0, import_index_ae8bceff.v)(Saos, "Saos").$$render($$result, {
    once: true,
    animation: "swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both",
    top: 250,
    bottom: 250
  }, {}, {
    default: () => {
      return `<div class="${"projects-image svelte-14rfupm"}"><a href="${"https://codepen.io/corey-damocles/pen/rNJZQXB"}" class="${"svelte-14rfupm"}"><img class="${"project-img svelte-14rfupm"}"${(0, import_index_ae8bceff.a)("src", pokedexLite, 0)} alt="${"Pok\xE9dex Lite project"}"></a></div>`;
    }
  })}</section>

        <section class="${"wrapper-projects svelte-14rfupm"}">${(0, import_index_ae8bceff.v)(Saos, "Saos").$$render($$result, {
    once: true,
    animation: "fade-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
    top: 250,
    bottom: 250
  }, {}, {
    default: () => {
      return `<div class="${"projects-text svelte-14rfupm"}"><h3 class="${"svelte-14rfupm"}">Chromatic Climbers</h3>
                <p class="${"svelte-14rfupm"}">This is a static single-paged website made for the Chromatic Climbers rock-climbing organization in Phoenix, AZ. When building this simple page, I realized that HTML and CSS are powerful on their own, and for a simple one-page website, frameworks and libraries are not always necessary! </p>
                <p class="${"svelte-14rfupm"}">HTML, CSS</p>
                <a href="${"https://github.com/ubemacapuno/chromatic-climbers"}" class="${"svelte-14rfupm"}"><button class="${"project-link svelte-14rfupm"}"><span class="${"svelte-14rfupm"}">Repository</span></button></a></div>`;
    }
  })}
            ${(0, import_index_ae8bceff.v)(Saos, "Saos").$$render($$result, {
    once: true,
    animation: "swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both",
    top: 250,
    bottom: 250
  }, {}, {
    default: () => {
      return `<div class="${"projects-image svelte-14rfupm"}"><a href="${"https://demo-chromatic-climbers.netlify.app/"}" class="${"svelte-14rfupm"}"><img class="${"project-img svelte-14rfupm"}"${(0, import_index_ae8bceff.a)("src", chromaticClimbers, 0)} alt="${"Chromatic Climbers project"}"></a></div>`;
    }
  })}</section></div>  
</body>`;
});
