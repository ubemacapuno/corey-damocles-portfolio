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
  code: "footer.svelte-14aette{background-color:#332FD0;display:flex;align-items:center;justify-content:center;flex-direction:column}a.svelte-14aette{color:#E15FED}p.svelte-14aette{margin:0;color:var(--nav-text-color)}",
  map: null
};
const Footer = (0, import_index_ae8bceff.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="${"svelte-14aette"}"><p class="${"svelte-14aette"}">\xA9 2022 Corey Damocles | Coded in <a href="${"https://svelte.dev/"}" class="${"svelte-14aette"}">Svelte</a></p>
    
</footer>`;
});
var codepenIcon = "/_app/assets/codepen-icon-9a8cdbc7.svg";
var githubIcon = "/_app/assets/github-icon-a4823923.svg";
var linkedinIcon = "/_app/assets/linkedin-icon-a341ba95.svg";
var twitterIcon = "/_app/assets/twitter-icon-005a963e.svg";
var contactFooter_svelte_svelte_type_style_lang = "";
const css = {
  code: ".page-wrapper.svelte-1s2yqsr{display:flex;flex-direction:column;align-items:center;justify-content:center;background-image:linear-gradient(to right top,#E15FED,#9254C8,#332FD0)}header.svelte-1s2yqsr{display:flex;align-items:center;justify-content:center;flex-direction:column}ul.svelte-1s2yqsr{display:flex;justify-content:center;align-items:center;padding:0}li.svelte-1s2yqsr{display:inline;list-style:none;margin:0 5px}.icon.svelte-1s2yqsr{width:100%;transition:all 0.3s}.icon.svelte-1s2yqsr:hover{transform:scale(1.2)\r\n}h2.svelte-1s2yqsr{color:white}form.svelte-1s2yqsr{display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-end}.field.svelte-1s2yqsr{margin-bottom:20px}.fields.svelte-1s2yqsr{padding:20px 0}input.svelte-1s2yqsr,textarea.svelte-1s2yqsr,.primary.svelte-1s2yqsr{width:30rem}.actions.svelte-1s2yqsr{display:flex;align-items:center;justify-content:center}textarea.svelte-1s2yqsr{resize:none}.primary.svelte-1s2yqsr{color:black}.contact-form.svelte-1s2yqsr{margin:0;color:white}@media(max-width: 900px){input.svelte-1s2yqsr,textarea.svelte-1s2yqsr,.primary.svelte-1s2yqsr{width:20rem}header.svelte-1s2yqsr,form.svelte-1s2yqsr{align-items:center}}@media(max-width: 350px){input.svelte-1s2yqsr,textarea.svelte-1s2yqsr,.primary.svelte-1s2yqsr{width:14rem}}",
  map: null
};
const Contact_footer = (0, import_index_ae8bceff.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"page-wrapper svelte-1s2yqsr"}"><header class="${"svelte-1s2yqsr"}"><h2 class="${"svelte-1s2yqsr"}">Let&#39;s connect!</h2>
		
		<ul class="${"icons svelte-1s2yqsr"}"><li class="${"svelte-1s2yqsr"}"><a target="${"_blank"}" href="${"https://linkedin.com/in/corey-damocles-43709295"}"><img${(0, import_index_ae8bceff.a)("src", linkedinIcon, 0)} alt="${"Linkedin Logo"}" class="${"icon svelte-1s2yqsr"}"></a></li>
			<li class="${"svelte-1s2yqsr"}"><a target="${"_blank"}" href="${"https://github.com/ubemacapuno"}"><img${(0, import_index_ae8bceff.a)("src", githubIcon, 0)} alt="${"Github Logo"}" class="${"icon svelte-1s2yqsr"}"></a></li>
			<li class="${"svelte-1s2yqsr"}"><a target="${"_blank"}" href="${"https://codepen.io/corey-damocles"}"><img${(0, import_index_ae8bceff.a)("src", codepenIcon, 0)} alt="${"Codepen Logo"}" class="${"icon svelte-1s2yqsr"}"></a></li>
			<li class="${"svelte-1s2yqsr"}"><a target="${"_blank"}" href="${"https://twitter.com/coreydamo"}"><img${(0, import_index_ae8bceff.a)("src", twitterIcon, 0)} alt="${"Twitter Logo"}" class="${"icon svelte-1s2yqsr"}"></a></li></ul></header>
  	<form method="${"post"}" action="${"POST"}" data-netlify="${"true"}" class="${"svelte-1s2yqsr"}"><div class="${"fields svelte-1s2yqsr"}"><div class="${"field half svelte-1s2yqsr"}"><p class="${"contact-form svelte-1s2yqsr"}">Name</p>
				<input type="${"text"}" name="${"name"}" id="${"name"}" required class="${"svelte-1s2yqsr"}"></div>
			<div class="${"field half svelte-1s2yqsr"}"><p class="${"contact-form svelte-1s2yqsr"}">Email</p>
				<input type="${"text"}" name="${"email"}" id="${"email"}" required class="${"svelte-1s2yqsr"}"></div>
			<div class="${"field half svelte-1s2yqsr"}"><p class="${"contact-form svelte-1s2yqsr"}">Subject</p>
				<input type="${"text"}" name="${"subject"}" id="${"subject"}" required class="${"svelte-1s2yqsr"}"></div>
			<div class="${"field svelte-1s2yqsr"}"><p class="${"contact-form svelte-1s2yqsr"}">Message</p>
				<textarea name="${"message"}" id="${"message"}" rows="${"4"}" required class="${"svelte-1s2yqsr"}"></textarea></div>
			<div class="${"field svelte-1s2yqsr"}"><div data-netlify-recaptcha="${"true"}"></div></div>
			<div class="${"actions svelte-1s2yqsr"}"><input type="${"submit"}" value="${"Send Message"}" class="${"primary svelte-1s2yqsr"}"></div></div></form>
</div>`;
});
const _layout = (0, import_index_ae8bceff.c)(($$result, $$props, $$bindings, slots) => {
  return `

${slots.default ? slots.default({}) : ``}
${(0, import_index_ae8bceff.v)(Contact_footer, "ContactFooter").$$render($$result, {}, {}, {})}
${(0, import_index_ae8bceff.v)(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
