<script context="module">
  export async function load({ params }) {
    let id = params.id;
    return { props: { id } };
  }
</script>

<script>
  import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
  import { initialize } from "../../firebase";
  import { config } from "../../config/db";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  export let id;
  let link = {};
  let user;

  const { firestore } = initialize(config.firebaseConfig);
  const linksCol = collection(firestore, `Links`);
  const linkDoc = doc(linksCol, id);

  onMount(() => {
    user = localStorage.getItem("uid");
    console.log(user);
    onSnapshot(linkDoc, (snapShot) => {
      link = snapShot.data();
    });
  });

  async function deleteLink() {
    try {
      await deleteDoc(linkDoc);
      goto("/");
    } catch (err) {
      console.log(err);
    }
  }
</script>

{#if link}
  <main>
    <h1>{link.title}</h1>
    <a href={link.url} target="_blank">🔗 {link.url}</a>
    <p>Category <span>{link.tag}</span></p>
    {#if user}
      <div class="secure-stack">
        <a href="/link/edit/{id}">Edit</a>
        <button on:click={deleteLink}>Delete</button>
      </div>
    {/if}
  </main>
{/if}

<style>
  main {
    min-height: 100vh;
    max-width: 80rem;
    margin-inline: auto;
    margin-top: -5rem;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  h1 {
    font-size: 4em;
  }

  a {
    font-size: 1em;
  }

  p {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  p > span {
    background-color: rgba(49, 232, 171, 0.8);
    color: rgb(15, 86, 63);
    border-radius: 20px;
    padding: 0.4rem 1rem;
  }

  .secure-stack {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  .secure-stack a,
  .secure-stack button {
    border-radius: 10px;
    padding: 0.1rem 0.6rem;
    font-size: 1em;
  }

  .secure-stack a {
    background-color: lightcyan;
    color: rgb(4, 71, 71);
  }

  .secure-stack button {
    background-color: rgb(255, 224, 224);
    color: rgb(71, 4, 4);
    border: 0;
    padding-block: 0.3rem;
    cursor: pointer;
  }
</style>
