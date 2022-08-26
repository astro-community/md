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

markdown.inline = async function inlinemarkdown(
	/** @type {string} */ content,
	/** @type {MarkdownRenderingOptions} */ options = null
) {
	return await renderMarkdown(content, {
		...shared.markdownConfig,
		...Object(options),
	}).then(
		result => new String(
			result.code.indexOf('<p>') === 0 &&
			result.code.indexOf('</p>') === result.code.length - 4
				? result.code.slice(3, -4)
			: result.code
		)
	)
}

/** @typedef {import('./markdown').MarkdownRenderingOptions} MarkdownRenderingOptions */
