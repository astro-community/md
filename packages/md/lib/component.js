import { renderSlot } from 'astro/runtime/server/index.js'
import { markdown } from './markdown.js'

export const Markdown = Object.assign(
	function Markdown(result, attributes, slots) {
		return {
			get [Symbol.toStringTag]() {
				return 'AstroComponent'
			},
			async *[Symbol.asyncIterator]() {
				const mdl = attributes.of

				if (typeof mdl === 'string') {
					yield await markdown(mdl, {
						fileURL: new URL(import.meta.url),
						contentDir: new URL('./', import.meta.url),
					})
				} else {
					yield renderSlot(result, slots.default)
				}
			},
		}
	},
	{
		isAstroComponentFactory: true,
		Inline: Object.assign(
			function MarkdownInline(result, attributes, slots) {
				return {
					get [Symbol.toStringTag]() {
						return 'AstroComponent'
					},
					async *[Symbol.asyncIterator]() {
						const mdl = attributes.of

						if (typeof mdl === 'string') {
							yield await markdown.inline(mdl, {
								fileURL: new URL(import.meta.url),
								contentDir: new URL('./', import.meta.url),
							})
						} else {
							yield renderSlot(result, slots.default)
						}
					},
				}
			},
			{
				isAstroComponentFactory: true,
			}
		)
	}
)

export default Markdown
