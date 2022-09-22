import { c as create_ssr_component, a as each, e as escape, n as null_to_empty, v as validate_component, b as add_attribute } from "../../_app/immutable/chunks/index-280110de.js";
import "firebase/auth";
import { collection } from "firebase/firestore";
import { i as initialize } from "../../_app/immutable/chunks/firebase-dc82a49c.js";
import "firebase/app";
const Categories_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".categories.svelte-1lc8768{width:100%;padding-inline:1rem;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:1rem}.category.svelte-1lc8768{font-size:1.2em;font-weight:bold;text-align:center;background:transparent;border:2px solid rgb(49, 232, 171);color:#fff;outline:none;border-radius:20px;padding:0.4rem 1rem;cursor:pointer;transition:all 0.3s ease-in-out}.category.active.svelte-1lc8768{background-color:rgb(49, 232, 171);color:rgb(15, 86, 63)}",
  map: null
};
const Categories = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { activeTag } = $$props;
  let { links } = $$props;
  let tags = [];
  let { filtered } = $$props;
  const { firestore } = initialize();
  collection(firestore, "Links");
  if ($$props.activeTag === void 0 && $$bindings.activeTag && activeTag !== void 0)
    $$bindings.activeTag(activeTag);
  if ($$props.links === void 0 && $$bindings.links && links !== void 0)
    $$bindings.links(links);
  if ($$props.filtered === void 0 && $$bindings.filtered && filtered !== void 0)
    $$bindings.filtered(filtered);
  $$result.css.add(css$1);
  return `<div class="${"categories svelte-1lc8768"}">${each(tags, (tag) => {
    return `<button class="${escape(null_to_empty(`category ${activeTag === tag && "active"}`), true) + " svelte-1lc8768"}">${escape(tag)}
    </button>`;
  })}
</div>`;
});
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: 'main.svelte-qszzr8{max-width:80rem;margin:8rem auto 4rem auto;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2.5rem}.links.svelte-qszzr8{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;gap:2rem}@media only screen and (max-width: 900px){.links.svelte-qszzr8{padding-inline:2rem}}.link__title.svelte-qszzr8{font-size:1.6em;font-weight:700}.link__title.svelte-qszzr8::marker{content:"\u{1F517}"}',
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let links = [];
  let activeTag = "all";
  let filtered = [];
  const { firestore, firebaseAuth } = initialize();
  collection(firestore, "Links");
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `${$$result.title = `<title>Useful Links</title>`, ""}`, ""}

<main class="${"svelte-qszzr8"}">${validate_component(Categories, "Categories").$$render(
      $$result,
      { links, activeTag, filtered },
      {
        activeTag: ($$value) => {
          activeTag = $$value;
          $$settled = false;
        },
        filtered: ($$value) => {
          filtered = $$value;
          $$settled = false;
        }
      },
      {}
    )}
  <ol class="${"links svelte-qszzr8"}">${filtered && filtered.length > 0 ? `${each(filtered, (link) => {
      return `<li class="${"link__title svelte-qszzr8"}"><a${add_attribute("href", "/link/" + link.id, 0)}>${escape(link.title)}</a>
        </li>`;
    })}` : `<p>No links founded!</p>`}</ol>
</main>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Routes as default
};
