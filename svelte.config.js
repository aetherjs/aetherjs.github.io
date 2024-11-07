import adapterStatic from '@sveltejs/adapter-static';
import adapterVercel from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: process.env.STATIC ? adapterStatic({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true
		}) : adapterVercel(),
	}
};

export default config;