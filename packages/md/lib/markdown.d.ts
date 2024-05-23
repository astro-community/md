import type { MarkdownRenderingOptions, MarkdownRenderingResult } from '@astrojs/markdown-remark'

export type { MarkdownRenderingOptions, MarkdownRenderingResult }

export var markdown: {
	(
		content: string,
		options?: MarkdownRenderingOptions
	): Promise<string>

	inline(
		content: string,
		options?: MarkdownRenderingOptions
	): Promise<string>
}
