import { c as create_ssr_component, v as validate_component } from "../../_app/immutable/chunks/index-280110de.js";
const Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-1lqz6mv{margin-bottom:4rem;text-align:center}a.svelte-1lqz6mv{font-size:1.2em;position:relative;overflow:hidden}a.svelte-1lqz6mv::before{content:'';position:absolute;z-index:-1;width:100%;height:2.5px;bottom:0;background-color:rgb(49, 232, 171);transition:all 0.3s ease-in-out}a.svelte-1lqz6mv:hover::before{height:80%}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="${"svelte-1lqz6mv"}"><p>Designed by <a href="${"https://devsnow.in"}" target="${"_blank"}" class="${"svelte-1lqz6mv"}">devsnow</a></p>
</footer>`;
});
const Navbar_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-1czy9fo.svelte-1czy9fo{position:fixed;inset:0;height:5rem;padding:0 2rem;background-color:#0b0d0d;box-shadow:0 2px 27px #28282850;display:flex;justify-content:center;align-items:center}.logo.svelte-1czy9fo.svelte-1czy9fo{font-size:1.5em;font-weight:700}.logo.svelte-1czy9fo>span.svelte-1czy9fo{color:rgb(49, 232, 171)}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="${"svelte-1czy9fo"}"><a href="${"/"}" class="${"logo svelte-1czy9fo"}">Useful <span class="${"svelte-1czy9fo"}">Links</span></a>
</header>`;
});
const styles = "";
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  _layout as default
};
