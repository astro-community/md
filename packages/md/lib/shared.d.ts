import type { CompileOptions } from 'satteri'

export interface Shared {
	markdownConfig: CompileOptions
}

export const shared: Shared

export const symbol: symbol
