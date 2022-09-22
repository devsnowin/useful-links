import { c as create_ssr_component, b as add_attribute } from "../../../../_app/immutable/chunks/index-280110de.js";
import { collection, doc } from "firebase/firestore";
import { i as initialize } from "../../../../_app/immutable/chunks/firebase-dc82a49c.js";
import "firebase/app";
import "firebase/auth";
const _id__svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-ayhbhy.svelte-ayhbhy{width:100%;height:100%;min-height:100vh;max-width:80rem;margin-inline:auto;display:grid;place-items:center}form.svelte-ayhbhy.svelte-ayhbhy{width:100%;display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:2rem}input.svelte-ayhbhy.svelte-ayhbhy{font-size:1.8em;width:100%;padding-block:0.6rem;border:0;outline:none;background:transparent;color:#fff}input.svelte-ayhbhy.svelte-ayhbhy:focus{border-bottom:2px solid rgb(53, 53, 53)}input.svelte-ayhbhy.svelte-ayhbhy::placeholder{font-size:1.8em;padding:0.6rem 1rem;color:rgb(53, 53, 53)}p.svelte-ayhbhy.svelte-ayhbhy{align-self:flex-end;color:rgb(53, 53, 53)}p.svelte-ayhbhy span.svelte-ayhbhy{background-color:#a5a5a5;border-radius:10px;padding:0.1rem 0.6rem}",
  map: null
};
async function load({ params }) {
  let id = params.id;
  return { props: { id } };
}
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let link = { title: "", url: "", tag: "" };
  const { firestore } = initialize();
  const linksCol = collection(firestore, `Links`);
  doc(linksCol, id);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css);
  return `<section class="${"svelte-ayhbhy"}"><form class="${"svelte-ayhbhy"}"><input type="${"text"}" name="${"title"}" id="${"title"}" autocomplete="${"off"}" required placeholder="${"Title of the link"}" class="${"svelte-ayhbhy"}"${add_attribute("value", link.title, 0)}>
    <input type="${"text"}" name="${"url"}" id="${"url"}" autocomplete="${"off"}" required placeholder="${"URL address of the link"}" class="${"svelte-ayhbhy"}"${add_attribute("value", link.url, 0)}>
    <input type="${"text"}" name="${"tag"}" id="${"tag"}" autocomplete="${"off"}" required placeholder="${"Add a tag for filtering"}" class="${"svelte-ayhbhy"}"${add_attribute("value", link.tag, 0)}>
    <input type="${"submit"}" value="${""}" hidden class="${"svelte-ayhbhy"}">
    <p class="${"svelte-ayhbhy"}">press <span class="${"svelte-ayhbhy"}">enter</span></p></form>
</section>`;
});
export {
  U5Bidu5D as default,
  load
};
