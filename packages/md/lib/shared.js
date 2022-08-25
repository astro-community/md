export const symbol = Symbol.for('@astropub/md')

export const shared = /** @type {Shared} */ (
	globalThis[symbol] || (
		globalThis[symbol] = {
			markdownConfig: {},
		}
	)
)

/** @typedef {import('./shared').Shared} Shared */
