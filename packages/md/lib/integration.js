import { shared } from './shared.js'

export function mdAstro() {
	const integration = /** @type {AstroIntegration} */ ({
		name: 'astro:md',
		hooks: {
			'astro:config:done'({ config }) {
				shared.markdownConfig = config.markdown
			},
		},
	})

	return integration
}

/** @typedef {import('astro').AstroIntegration} AstroIntegration */
/** @typedef {import('vite').Plugin} Plugin */
