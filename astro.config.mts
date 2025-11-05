// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	site: "https://aalborg.supercomputer.club",
	integrations: [
		icon()
	],
	markdown: {
		shikiConfig: {
			theme: "houston"
		}
	},
	redirects: {
		"/wiki": "/wiki/welcome"
	}
});
