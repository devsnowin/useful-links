<script>
  import { goto } from "$app/navigation";
  import { config } from "../config/db";
  import { signInWithEmailAndPassword } from "firebase/auth";
  import { initialize } from "../firebase";

  let email;
  let password;

  const { firebaseAuth } = initialize(config.firebaseConfig);

  function handleSubmit(e) {
    e.preventDefault();

    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((res) => {
        console.log(res.user.uid);
        localStorage.setItem("uid", res.user.uid);
        goto("/link/new");
      })
      .catch((err) => console.error(err.message));

    email = "";
    password = "";
  }
</script>

<form on:submit={handleSubmit}>
  <!-- svelte-ignore a11y-autofocus -->
  <input
    type="email"
    bind:value={email}
    required
    placeholder="Email Id"
    autocomplete="off"
    autofocus
  />
  <input
    type="password"
    bind:value={password}
    required
    placeholder="Password"
  />
  <input type="submit" hidden />
  <p>press <span>enter</span></p>
</form>

<style>
  form {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    max-width: 40rem;
    margin-inline: auto;
    /* margin-top: -5rem; */

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;
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
