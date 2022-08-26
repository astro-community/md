import type { MarkdownRenderingOptions, MarkdownRenderingResult } from '@astrojs/markdown-remark'

export type { MarkdownRenderingOptions, MarkdownRenderingResult }

export var markdown: {
	(
		content: string,
		options?: MarkdownRenderingOptions
	): Promise<String>

	inline(
		content: string,
		options?: MarkdownRenderingOptions
	): Promise<String>
}
