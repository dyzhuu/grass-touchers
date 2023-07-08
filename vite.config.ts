import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		host: true,
		port: 6969
	},
	plugins: [sveltekit()]
});
