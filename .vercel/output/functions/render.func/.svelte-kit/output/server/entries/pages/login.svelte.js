import { c as create_ssr_component, b as add_attribute } from "../../_app/immutable/chunks/index-280110de.js";
import "firebase/auth";
import { i as initialize } from "../../_app/immutable/chunks/firebase-dc82a49c.js";
import "firebase/app";
import "firebase/firestore";
const login_svelte_svelte_type_style_lang = "";
const css = {
  code: "form.svelte-6egjc.svelte-6egjc{width:100%;height:100%;min-height:100vh;max-width:40rem;margin-inline:auto;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4rem}input.svelte-6egjc.svelte-6egjc{font-size:1.8em;width:40rem;padding-block:0.6rem;border:0;outline:none;background:transparent;color:#fff}input.svelte-6egjc.svelte-6egjc:focus{border-bottom:2px solid rgb(53, 53, 53)}input.svelte-6egjc.svelte-6egjc::placeholder{font-size:1.8em;color:rgb(53, 53, 53)}p.svelte-6egjc.svelte-6egjc{align-self:flex-end;color:rgb(53, 53, 53)}p.svelte-6egjc span.svelte-6egjc{background-color:#a5a5a5;border-radius:10px;padding:0.1rem 0.6rem}",
  map: null
};
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email;
  let password;
  initialize();
  $$result.css.add(css);
  return `<form class="${"svelte-6egjc"}"><input type="${"email"}" required placeholder="${"Email Id"}" class="${"svelte-6egjc"}"${add_attribute("value", email, 0)}>
  <input type="${"password"}" required placeholder="${"Password"}" class="${"svelte-6egjc"}"${add_attribute("value", password, 0)}>
  <input type="${"submit"}" hidden class="${"svelte-6egjc"}">
  <p class="${"svelte-6egjc"}">press <span class="${"svelte-6egjc"}">enter</span></p>
</form>`;
});
export {
  Login as default
};
