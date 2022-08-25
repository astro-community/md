import { renderMarkdown } from '@astrojs/markdown-remark'
import { shared } from './shared.js'

export async function markdown(
	/** @type {string} */ content,
	/** @type {MarkdownRenderingOptions} */ options = null
) {
	return await renderMarkdown(content, {
		...shared.markdownConfig,
		...Object(options),
	}).then(
		result => new String(result.code)
	)
}

/** @typedef {import('./markdown').MarkdownRenderingOptions} MarkdownRenderingOptions */
