import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex({ extensions: ['.svx', '.md'] })],

	kit: {
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
		paths: {
			base: process.env.BASE_PATH ?? ''
		},
		prerender: {
			handleHttpError: ({ path, status }) => {
				if (status === 404 && path.startsWith('/decks/')) {
					return;
				}
				throw new Error(`Prerender failed: ${status} ${path}`);
			},
			handleUnseenRoutes: 'ignore'
		}
	},

	extensions: ['.svelte', '.svx', '.md']
};

export default config;
