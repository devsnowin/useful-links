<script>
  import { collection, onSnapshot } from "firebase/firestore";
  import { onMount } from "svelte";
  import { config } from "../config/db";
  import { initialize } from "../firebase";

  let ratings = [];

  const { firestore, firebaseAuth } = initialize(config.firebaseConfig);
  const ratingCol = collection(firestore, "Ratings");

  onMount(() => {
    onSnapshot(
      ratingCol,
      (snapshot) => {
        ratings = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      },
      (error) => console.log(error)
    );
  });
</script>

<svelte:head>
  <title>Useful Links</title>
</svelte:head>

<main>
  <h1>List of ratings</h1>
  <h3>Rating count: {ratings.length}</h3>
  <div class="rate-con">
    {#each ratings as rating}
      <div class="rating-con">
        <p>{rating.name}</p>
        <span>{rating.rating}</span>
      </div>
    {/each}
  </div>
</main>

<style>
  main {
    max-width: 80rem;
    margin: 8rem auto 4rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
  }

  .rate-con {
    width: 100%;
    max-width: 32rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
  }

  .rating-con {
    width: 100%;
    padding: 0.8rem 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    border: 2px solid rgb(49, 232, 171);
    font-size: 1.2em;
  }

  .rating-con span {
    font-size: 1.6em;
  }
</style>
