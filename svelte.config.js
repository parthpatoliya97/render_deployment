import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    prerender: { entries: ['*'] }, // Ensures all static pages are included
    files: {
      assets: 'static' // Ensures the static folder is used correctly
    }
  }
};

export default config;

