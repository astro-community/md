import { shared } from './shared.js'

/**
 * Astro integration that hands the host project's Markdown configuration to the
 * Sätteri renderer used by `markdown()` / `<Markdown>`.
 *
 * Astro's `config.markdown` is shaped for the remark/rehype pipeline, which
 * Sätteri does not use. We map the options that have a Sätteri equivalent
 * (`gfm`, `smartypants`) onto Sätteri's feature flags. remark/rehype plugins
 * have no Sätteri equivalent and are ignored — pass Sätteri `mdastPlugins` /
 * `hastPlugins` to `mdAstro()` instead.
 */
export function mdAstro(/** @type {CompileOptions} */ options = {}) {
	const integration = /** @type {AstroIntegration} */ ({
		name: 'astro:md',
		hooks: {
			'astro:config:done'({ config }) {
				const md = config.markdown || {}

				shared.markdownConfig = {
					...options,
					features: {
						gfm: md.gfm ?? true,
						smartPunctuation: md.smartypants ?? true,
						...options.features,
					},
				}
			},
		},
	})

	return integration
}

/** @typedef {import('astro').AstroIntegration} AstroIntegration */
/** @typedef {import('satteri').CompileOptions} CompileOptions */
