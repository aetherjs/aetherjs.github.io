import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // This bad boy here came directly from setting typescript for the project...
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  preprocess: [vitePreprocess({})],

  kit: {
    adapter: adapter(),
    paths: {
      base: '',
    }
  }
};

export default config;