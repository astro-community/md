import type { CompileOptions } from 'satteri'

export type { CompileOptions }

export var markdown: {
	(
		content: string,
		options?: CompileOptions
	): Promise<string>

	inline(
		content: string,
		options?: CompileOptions
	): Promise<string>
}
