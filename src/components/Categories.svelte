<script>
  import { collection, onSnapshot } from "firebase/firestore";

  import { onMount } from "svelte";
  import { config } from "../config/db";
  import { initialize } from "../firebase";

  export let activeTag;
  export let links;
  let tags = [];
  export let filtered;

  const { firestore } = initialize(config.firebaseConfig);
  const linksCollection = collection(firestore, "Links");

  onMount(() => {
    onSnapshot(linksCollection, (snapshot) => {
      tags = snapshot.docs.map((d) => d.data().tag);
      tags.sort();
      tags.unshift("all")
      tags = [...new Set(tags)];
    });
  });

  function filterData() {
    if (activeTag === "all") {
      filtered = links;
      return;
    }
    filtered = links.filter((link, i) => link.tag === activeTag);
  }
</script>

<div class="categories">
  {#each tags as tag}
    <button
      class={`category ${activeTag === tag && "active"}`}
      on:click={() => {
        activeTag = tag;
        filterData();
      }}
    >
      {tag}
    </button>
  {/each}
</div>

<style>
  .categories {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .category {
    font-size: 1.2em;
    font-weight: bold;
    text-align: center;
    background: transparent;
    border: 2px solid rgb(49, 232, 171);
    color: #fff;
    outline: none;
    border-radius: 20px;
    padding: 0.4rem 1rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  .category.active {
    background-color: rgb(49, 232, 171);
    color: rgb(15, 86, 63);
  }
</style>
