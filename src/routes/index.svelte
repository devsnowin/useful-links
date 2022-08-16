<script>
  import { onAuthStateChanged } from "firebase/auth";

  import { collection, onSnapshot } from "firebase/firestore";
  import { onMount } from "svelte";
  import Categories from "../components/Categories.svelte";
  import { config } from "../config/db";
  import { initialize } from "../firebase";

  let links = [];
  let activeTag = "all";
  let filtered = [];

  const { firestore, firebaseAuth } = initialize(config.firebaseConfig);
  const linksCollection = collection(firestore, "Links");

  onMount(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (!user) {
        localStorage.removeItem("uid")
      } else {
        console.log(user);
      }
    });
  });

  onMount(() => {
    onSnapshot(linksCollection, (snapshot) => {
      links = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      filtered = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
    });
  });
</script>

<svelte:head>
  <title>Useful Links</title>
</svelte:head>

<main>
  <Categories bind:activeTag bind:filtered {links} />
  <ol class="links">
    {#if filtered && filtered.length > 0}
      {#each filtered as link}
        <li class="link__title">
          <a href={"/link/" + link.id}>{link.title}</a>
        </li>
      {/each}
    {:else}
      <p>No links founded!</p>
    {/if}
  </ol>
</main>

<style>
  main {
    max-width: 80rem;
    min-height: 100vh;
    margin: 4rem auto;
    /* margin-top: -5rem; */

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
  }

  .links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
  }

  .link__title {
    font-size: 1.6em;
    font-weight: 700;
  }

  .link__title::marker {
    content: "🔗";
  }
</style>
