<script>
  import { addDoc, collection, doc } from "firebase/firestore";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  import { config } from "../../config/db";
  import { initialize } from "../../firebase";
  import { onAuthStateChanged } from "firebase/auth";

  let title;
  let url;
  let tag;

  const { firestore, firebaseAuth } = initialize(config.firebaseConfig);
  const linkCol = collection(firestore, "Links");

  onMount(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (!user) goto("/login");
    });
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      title,
      url,
      tag,
    };
    console.log(data);
    await addDoc(linkCol, data)
      .then((res) => {
        console.log(res)
        title = ""
        url = ""
        tag = ""
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
      bind:value={title}
      autocomplete="off"
      required
      placeholder="Title of the link"
    />
    <input
      type="text"
      name="url"
      id="url"
      bind:value={url}
      autocomplete="off"
      required
      placeholder="URL address of the link"
    />
    <input
      type="text"
      name="tag"
      id="tag"
      bind:value={tag}
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
    max-width: 40rem;
    margin-inline: auto;
    /* margin-top: -5rem; */

    display: grid;
    place-items: center;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }

  input {
    font-size: 1.8em;
    width: 40rem;
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
