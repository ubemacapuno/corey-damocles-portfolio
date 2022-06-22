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
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_ae8bceff = require("../../chunks/index-ae8bceff.js");
var app = "";
var footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-12vd9nx{background-color:#332FD0;display:flex;align-items:center;justify-content:center;flex-direction:row}p.svelte-12vd9nx{margin:0}@media(max-width: 350px){footer.svelte-12vd9nx{flex-direction:column}.pipe.svelte-12vd9nx{display:none}}",
  map: null
};
const Footer = (0, import_index_ae8bceff.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="${"svelte-12vd9nx"}"><p class="${"svelte-12vd9nx"}">\xA9 2022 Corey Damocles </p>
    <p class="${"pipe svelte-12vd9nx"}">|</p>
    <p class="${"svelte-12vd9nx"}">Coded with <a href="${"https://svelte.dev/"}">SvelteKit</a></p>
    
</footer>`;
});
var twitterIcon = "/_app/assets/twitter-icon-005a963e.svg";
var linkedinIcon = "/_app/assets/linkedin-icon-a341ba95.svg";
var githubIcon = "/_app/assets/github-icon-a4823923.svg";
var codepenIcon = "/_app/assets/codepen-icon-9a8cdbc7.svg";
var contactFooter_svelte_svelte_type_style_lang = "";
const css = {
  code: ".page-wrapper.svelte-1vrt20o{display:flex;flex-direction:column;align-items:center;justify-content:center;background-image:linear-gradient(to right top,#E15FED,#9254C8,#332FD0)}header.svelte-1vrt20o{display:flex;align-items:center;justify-content:center;flex-direction:column}ul.svelte-1vrt20o{display:flex;justify-content:center;align-items:center;padding:0;margin:16px 0}li.svelte-1vrt20o{display:inline;list-style:none;margin:0 5px}.icon.svelte-1vrt20o{width:100%;transition:all 0.3s}.icon.svelte-1vrt20o:hover{transform:scale(1.2)\r\n}h2.svelte-1vrt20o{color:white}.actions.svelte-1vrt20o{display:flex;align-items:center;justify-content:center;margin:16px}.primary.svelte-1vrt20o{color:white;cursor:pointer;font-size:inherit;font-family:inherit;font-weight:bold;border:2px solid var(--nav-text-color);padding:10px;background-color:transparent;transition:all 0.2s;cursor:pointer}.primary.svelte-1vrt20o:hover{background-color:var(--primary-color)}",
  map: null
};
const Contact_footer = (0, import_index_ae8bceff.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"page-wrapper svelte-1vrt20o"}"><header class="${"svelte-1vrt20o"}"><h2 class="${"svelte-1vrt20o"}">Let&#39;s connect!</h2>
		
		<ul class="${"icons svelte-1vrt20o"}"><li class="${"svelte-1vrt20o"}"><a target="${"_blank"}" href="${"https://linkedin.com/in/corey-damocles-43709295"}"><img${(0, import_index_ae8bceff.a)("src", linkedinIcon, 0)} alt="${"Linkedin Logo"}" class="${"icon svelte-1vrt20o"}"></a></li>
			<li class="${"svelte-1vrt20o"}"><a target="${"_blank"}" href="${"https://github.com/ubemacapuno"}"><img${(0, import_index_ae8bceff.a)("src", githubIcon, 0)} alt="${"Github Logo"}" class="${"icon svelte-1vrt20o"}"></a></li>
			<li class="${"svelte-1vrt20o"}"><a target="${"_blank"}" href="${"https://codepen.io/corey-damocles"}"><img${(0, import_index_ae8bceff.a)("src", codepenIcon, 0)} alt="${"Codepen Logo"}" class="${"icon svelte-1vrt20o"}"></a></li>
			<li class="${"svelte-1vrt20o"}"><a target="${"_blank"}" href="${"https://twitter.com/coreydamo"}"><img${(0, import_index_ae8bceff.a)("src", twitterIcon, 0)} alt="${"Twitter Logo"}" class="${"icon svelte-1vrt20o"}"></a></li></ul></header>
	<div class="${"actions svelte-1vrt20o"}"><a target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"mailto:damoclescj@gmail.com"}"><input type="${"submit"}" value="${"Send Email"}" class="${"primary svelte-1vrt20o"}"></a></div>
</div>`;
});
const _layout = (0, import_index_ae8bceff.c)(($$result, $$props, $$bindings, slots) => {
  return `
${$$result.head += `<link rel="${"preconnect"}" href="${"https://fonts.googleapis.com"}" data-svelte="svelte-ppb19b"><link rel="${"preconnect"}" href="${"https://fonts.gstatic.com"}" data-svelte="svelte-ppb19b"><link href="${"https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"}" rel="${"stylesheet"}" data-svelte="svelte-ppb19b">`, ""}

${slots.default ? slots.default({}) : ``}
${(0, import_index_ae8bceff.v)(Contact_footer, "ContactFooter").$$render($$result, {}, {}, {})}
${(0, import_index_ae8bceff.v)(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
