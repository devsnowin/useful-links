import { c as create_ssr_component, e as escape, b as add_attribute } from "../../../_app/immutable/chunks/index-280110de.js";
import { collection, doc } from "firebase/firestore";
import { i as initialize } from "../../../_app/immutable/chunks/firebase-dc82a49c.js";
import "firebase/app";
import "firebase/auth";
const _id__svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1ww8cu7.svelte-1ww8cu7{min-height:100vh;max-width:80rem;margin-inline:auto;margin-top:-5rem;text-align:center;font-size:1.2em;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:1rem}h1.svelte-1ww8cu7.svelte-1ww8cu7{font-size:1.8em !important}p.svelte-1ww8cu7.svelte-1ww8cu7{display:flex;align-items:center;gap:1rem}p.svelte-1ww8cu7>span.svelte-1ww8cu7{background-color:rgba(49, 232, 171, 0.8);color:rgb(15, 86, 63);border-radius:20px;padding:0.4rem 1rem}.secure-stack.svelte-1ww8cu7.svelte-1ww8cu7{width:100%;display:flex;align-items:center;justify-content:center;gap:2rem}.secure-stack.svelte-1ww8cu7 a.svelte-1ww8cu7,.secure-stack.svelte-1ww8cu7 button.svelte-1ww8cu7{border-radius:10px;padding:0.1rem 0.6rem;font-size:1em}.secure-stack.svelte-1ww8cu7 a.svelte-1ww8cu7{background-color:lightcyan;color:rgb(4, 71, 71)}.secure-stack.svelte-1ww8cu7 button.svelte-1ww8cu7{background-color:rgb(255, 224, 224);color:rgb(71, 4, 4);border:0;padding-block:0.3rem;cursor:pointer}",
  map: null
};
async function load({ params }) {
  let id = params.id;
  return { props: { id } };
}
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let link = {};
  const { firestore } = initialize();
  const linksCol = collection(firestore, `Links`);
  doc(linksCol, id);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css);
  return `${link ? `<main class="${"svelte-1ww8cu7"}"><h1 class="${"svelte-1ww8cu7"}">${escape(link.title)}</h1>
    <a${add_attribute("href", link.url, 0)} target="${"_blank"}">\u{1F517} ${escape(link.url)}</a>
    <p class="${"svelte-1ww8cu7"}">Category <span class="${"svelte-1ww8cu7"}">${escape(link.tag)}</span></p>
    ${``}</main>` : ``}`;
});
export {
  U5Bidu5D as default,
  load
};
