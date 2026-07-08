import { markdownToHtml } from 'satteri'
import { shared } from './shared.js'
import { HTMLString } from 'astro/runtime/server/index.js'

/** Build the Sätteri compile options for a single render. */
function resolveOptions(/** @type {CompileOptions} */ options) {
	return {
		...shared.markdownConfig,
		...options,
		features: {
			...shared.markdownConfig.features,
			...(options && options.features),
		},
	}
}

export async function markdown(
	/** @type {string} */ content,
	/** @type {CompileOptions} */ options = null
) {
	const result = await markdownToHtml(content, resolveOptions(options))

	return new HTMLString(result.html)
}

markdown.inline = async function inlinemarkdown(
	/** @type {string} */ content,
	/** @type {CompileOptions} */ options = null
) {
	const result = await markdownToHtml(content, resolveOptions(options))
	const code = result.html.trim()

	return new HTMLString(
		code.indexOf('<p>') === 0 &&
			code.indexOf('</p>') === code.length - 4
			? code.slice(3, -4)
			: code
	)
}

/** @typedef {import('satteri').CompileOptions} CompileOptions */
