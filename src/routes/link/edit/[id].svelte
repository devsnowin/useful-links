<script context="module">
  export async function load({ params }) {
    let id = params.id;
    return { props: { id } };
  }
</script>

<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";

  import { config } from "../../../config/db";
  import { initialize } from "../../../firebase";

  export let id;
  let link = {
    title: "",
    url: "",
    tag: "",
  };

  const { firestore } = initialize(config.firebaseConfig);
  const linksCol = collection(firestore, `Links`);
  const linkDoc = doc(linksCol, id);

  onMount(() => {
    onSnapshot(linkDoc, (snapShot) => {
      link = snapShot.data();
    });
  });

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(link);
    await setDoc(linkDoc, link)
      .then((res) => {
        console.log(res)
        goto("/")
      })
      .catch((err) => console.log(err));
  }
</script>

<section>
  <form on:submit={handleSubmit}>
    <input
      type="text"
      name="title"
      id="title"
      bind:value={link.title}
      autocomplete="off"
      required
      placeholder="Title of the link"
    />
    <input
      type="text"
      name="url"
      id="url"
      bind:value={link.url}
      autocomplete="off"
      required
      placeholder="URL address of the link"
    />
    <input
      type="text"
      name="tag"
      id="tag"
      bind:value={link.tag}
      autocomplete="off"
      required
      placeholder="Add a tag for filtering"
    />
    <input type="submit" value="" hidden />
    <p>press <span>enter</span></p>
  </form>
</section>

<style>
  section {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    max-width: 80rem;
    margin-inline: auto;
    /* margin-top: -5rem; */

    display: grid;
    place-items: center;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }

  input {
    font-size: 1.8em;
    width: 100%;
    padding-block: 0.6rem;
    border: 0;
    outline: none;
    background: transparent;
    color: #fff;
  }

  input:focus {
    border-bottom: 2px solid rgb(53, 53, 53);
  }

  input::placeholder {
    font-size: 1.8em;
    padding: 0.6rem 1rem;
    color: rgb(53, 53, 53);
  }

  p {
    align-self: flex-end;
    color: rgb(53, 53, 53);
  }

  p span {
    background-color: #a5a5a5;
    border-radius: 10px;
    padding: 0.1rem 0.6rem;
  }
</style>
