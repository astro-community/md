import { defineConfig } from 'astro/config'
import markdownIntegration from '@astropub/md'

export default defineConfig({
	integrations: [
		markdownIntegration(),
	],
})
