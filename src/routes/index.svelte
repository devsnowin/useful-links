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
  let loading = true;

  const { firestore, firebaseAuth } = initialize(config.firebaseConfig);
  const linksCollection = collection(firestore, "Links");

  onMount(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (!user) {
        localStorage.removeItem("uid");
      }
    });
  });

  onMount(() => {
    onSnapshot(
      linksCollection,
      (snapshot) => {
        links = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
        filtered = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      },
      (error) => {
        filtered = null;
        console.log(error);
      }
    );
    loading = false;
  });
</script>

<svelte:head>
  <title>Useful Links</title>
  <meta
    name="description"
    content="Useful website for beginners who are eager to learn good stuff as quickly as possible!"
  />
  <meta name="robots" content="index, follow" />
  <meta
    name="keywords"
    content="useful links, resources to learn coding, learn coding, useful resources"
  />
  <meta
    name="ahrefs-site-verification"
    content="6c580f501766848c2256708bb5c07c922e78aa13dda4cdde90b1a28ad1d36760"
  />
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
    {:else if !filtered}
      <p>No links founded!</p>
    {:else}
      <p>loading.....</p>
    {/if}
  </ol>
</main>

<style>
  main {
    max-width: 80rem;
    /* min-height: 100vh; */
    margin: 8rem auto 4rem auto;
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

  @media only screen and (max-width: 900px) {
    .links {
      padding-inline: 2rem;
    }
  }

  .link__title {
    font-size: 1.6em;
    font-weight: 700;
  }

  .link__title::marker {
    content: "🔗";
  }
</style>
