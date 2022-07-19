## Corey Damocles Portfolio: <a target="_blank" href="https://coreydamocles.netlify.app/">Visit My Portfolio Here</a>!

This is my most up-to-date portfolio with my recent projects and contact links, developed using SvelteKit.

 <tr>
    <td width="100%"  style="align:center;" valign="top">
            <img src="https://github.com/ubemacapuno/images-for-github-readme/blob/main/corey-damocles-portfolio.gif?raw=true" width="100%"  alt="Portfolio Gif."/>
    </td>
  </tr>

## How It's Made:

**Tech used:** 

Svelte/SvelteKit, JavaScript/HTML/CSS

Please be sure to checkout [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte), and 

## `npm -install`

## Optimizations:

As I learn more, I will plan to apply new features to my portfolio. When I get more projects under my belt, I'd like to update the portfolio section and have more interactivity (ex. modals), and maybe include a blog section.

## Lessons Learned:

I learned that to enable contact-form-submission with Netlify hosted sites, Netlify will search through the application's HTML for forms containing "data-netlify="true"". However, when building the application with a front-end library such as SvelteKit, the form data will not be detected because when the application builds with Netlify, the HTML is dynamically rendered with JavaScript, meaning there is no HTML for Netlify to search through. To get around this, the application needs to pre-render the HTML prior to the build so that Netlify can catch the proper data during the application build to set-up form-submission. 
