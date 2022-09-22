import vercel from '@sveltejs/adapter-vercel';
import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'

export default {
  preprocess: preprocess(),
  
  kit: {
    // default options are shown
    adapter: adapter(),
  }
};