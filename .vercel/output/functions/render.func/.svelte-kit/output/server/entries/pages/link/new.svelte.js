import { c as create_ssr_component, b as add_attribute } from "../../../_app/immutable/chunks/index-280110de.js";
import { collection } from "firebase/firestore";
import { i as initialize } from "../../../_app/immutable/chunks/firebase-dc82a49c.js";
import "firebase/auth";
import "firebase/app";
const new_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-tle3w7.svelte-tle3w7{width:100%;height:100%;min-height:100vh;max-width:40rem;margin-inline:auto;display:grid;place-items:center}form.svelte-tle3w7.svelte-tle3w7{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:2rem}input.svelte-tle3w7.svelte-tle3w7{font-size:1.8em;width:40rem;padding-block:0.6rem;border:0;outline:none;background:transparent;color:#fff}input.svelte-tle3w7.svelte-tle3w7:focus{border-bottom:2px solid rgb(53, 53, 53)}input.svelte-tle3w7.svelte-tle3w7::placeholder{font-size:1.8em;padding:0.6rem 1rem;color:rgb(53, 53, 53)}p.svelte-tle3w7.svelte-tle3w7{align-self:flex-end;color:rgb(53, 53, 53)}p.svelte-tle3w7 span.svelte-tle3w7{background-color:#a5a5a5;border-radius:10px;padding:0.1rem 0.6rem}",
  map: null
};
const New = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let title;
  let url;
  let tag;
  const { firestore, firebaseAuth } = initialize();
  collection(firestore, "Links");
  $$result.css.add(css);
  return `<section class="${"svelte-tle3w7"}"><form class="${"svelte-tle3w7"}"><input type="${"text"}" name="${"title"}" id="${"title"}" autocomplete="${"off"}" required placeholder="${"Title of the link"}" class="${"svelte-tle3w7"}"${add_attribute("value", title, 0)}>
    <input type="${"text"}" name="${"url"}" id="${"url"}" autocomplete="${"off"}" required placeholder="${"URL address of the link"}" class="${"svelte-tle3w7"}"${add_attribute("value", url, 0)}>
    <input type="${"text"}" name="${"tag"}" id="${"tag"}" autocomplete="${"off"}" required placeholder="${"Add a tag for filtering"}" class="${"svelte-tle3w7"}"${add_attribute("value", tag, 0)}>
    <input type="${"submit"}" value="${""}" hidden class="${"svelte-tle3w7"}">
    <p class="${"svelte-tle3w7"}">press <span class="${"svelte-tle3w7"}">enter</span></p></form>
</section>`;
});
export {
  New as default
};
