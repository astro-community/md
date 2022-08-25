import type { AstroConfig } from 'astro'

export interface Shared {
	markdownConfig: AstroConfig['markdown']
}

export const shared: Shared

export const symbol: symbol
