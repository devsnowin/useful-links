<script>
  import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
  import { config } from "../config/db";
  import { initialize } from "../firebase";

  const ratingValues = ["😑", "😐", "😎", "😍", "🤩"];
  let rated = {
    isRated: false,
    msg: 'Thanks for your rating ✨'
  };
  let name;
  let error = {
    isError: false,
    msg: "",
  };

  const { firestore } = initialize(config.firebaseConfig);
  const ratingCol = collection(firestore, "Ratings");

  const handleRating = async (e) => {
    
    if (name) {
      const userQuery = query(collection(firestore, "Ratings"), where("name", "==", name))
      const userRated = await getDocs(userQuery)

      userRated.forEach(doc => {
        if(doc.data().name){
          console.log("You have already rated!");
          rated = {
            isRated: true,
            msg: "You have already rated!"
          }
        }
      })

      if(!rated.isRated){
        console.log(e.target.textContent);
        const data = {
          name,
          rating: e.target.textContent,
        };
  
        await addDoc(ratingCol, data).then(res => console.log(res)).catch(err => console.log(err))
        
        rated.isRated = true;
      }
      
    } else {
      error = {
        isError: true,
        msg: "Please enter your name !",
      };
      setTimeout(() => {
        error = {
          isError: false,
          msg: '',
        };
      }, 3000);
    }
  };
  
</script>

<main>
  {#if !rated.isRated}
    <h1>Rate this site ⭐</h1>
    <input
      type="text"
      name="name"
      id="name"
      bind:value={name}
      autocomplete="off"
      placeholder="Enter your name"
      required
    />
    {#if error.isError}
      <p>{error.msg}</p>
    {/if}
    <div class="rates">
      {#each ratingValues as rating}
        <button type="submit" on:click={handleRating} class="ratings"
          >{rating}</button
        >
      {/each}
    </div>
  {:else}
    <h1>{rated.msg}</h1>
  {/if}
</main>

<style>
  main {
    max-width: 80rem;
    margin: 8rem auto 4rem auto;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
  }

  input {
    text-align: center;
    font-size: 1.8em;
    width: 100%;
    max-width: 40rem;
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

  .ratings {
    border: 0;
    background: transparent;
    cursor: pointer;
    margin-inline: 0.6rem;
    font-size: 2.5em;
    transition: all 0.3s ease;
  }

  .ratings:hover {
    font-size: 4em;
  }

  p {
    color: rgb(49, 232, 171);
  }

  @media only screen and (max-width: 900px){
    main {
      max-width: 85%;
    }

    .ratings {
      font-size: 1.8em !important;
    }
  }
</style>
