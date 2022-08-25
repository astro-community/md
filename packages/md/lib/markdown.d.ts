import type { MarkdownRenderingOptions, MarkdownRenderingResult } from '@astrojs/markdown-remark'

export type { MarkdownRenderingOptions, MarkdownRenderingResult }

export function markdown(
	content: string,
	options?: MarkdownRenderingOptions
): Promise<String>
