import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // This bad boy here came directly from setting typescript for the project...
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  preprocess: [vitePreprocess({})],

  kit: {
    prerender: {
      crawl: true,
      entries: ['*', '/notes/samplepost', '/notes/anotherone']
    },
    adapter: adapter({
      fallback: '200.html' // may differ from host to host
    }),
    paths: {
      base: '',
    }
  }
};

export default config;
