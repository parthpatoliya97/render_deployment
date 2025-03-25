import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: { entries: [] },
		vite: {
		  server: {
			cors: true
		  }
		}
	}
};

export default config;
