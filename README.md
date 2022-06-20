## Corey Damocles Portfolio: <a target="_blank" href="https://coreydamocles.netlify.app/">Visit My Portfolio Here</a>!

This is my most up-to-date portfolio with my recent projects and contact links, developed using SvelteKit.

## How It's Made:

**Tech used:** Svelte/SvelteKit, JavaScript/HTML/CSS 
To use this repository, please be sure to checkout [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte), and remember to install the proper packages with <strong>npm -install</strong>.

## Optimizations:

I'm new to using front-end frameworks, so as I learn more I will plan to apply new features to my portfolio.

## Lessons Learned:

I learned that to enable contact-form-submission with Netlify hosted sites, Netlify will search through the application's HTML for forms containing "data-netlify="true"". However, when building the application with a front-end library such as SvelteKit, the form data will not be detected because when the application builds, the HTML is dynamically rendered with JavaScript, meaning there is no HTML for Netlify to search. To get around this, the application needs to pre-render the HTML so that Netlify can catch the proper data during the application build to set-up form-submission. I am still trying to fix for this, so the form-submission is currently broken.
