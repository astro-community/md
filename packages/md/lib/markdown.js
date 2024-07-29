import { createMarkdownProcessor } from '@astrojs/markdown-remark'
import { shared } from './shared.js'
import { HTMLString } from './html-string.js'

const processor = await createMarkdownProcessor({
	...shared.markdownConfig,
})

export async function markdown(
	/** @type {string} */ content,
	/** @type {MarkdownRenderingOptions} */ options = null
) {
	const result = await processor.render(content, options)

	return new HTMLString(result.code)
}

markdown.inline = async function inlinemarkdown(
	/** @type {string} */ content,
	/** @type {MarkdownRenderingOptions} */ options = null
) {
	const result = await processor.render(content, options)

	return new HTMLString(
		result.code.indexOf("<p>") === 0 &&
		result.code.indexOf("</p>") === result.code.length - 4
			? result.code.slice(3, -4)
			: result.code,
	)
}

/** @typedef {import('./markdown').MarkdownRenderingOptions} MarkdownRenderingOptions */
