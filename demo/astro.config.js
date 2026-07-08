import { defineConfig } from 'astro/config'
import markdownIntegration from '@mashehu/astropub-md'

export default defineConfig({
	integrations: [
		markdownIntegration(),
	],
})
