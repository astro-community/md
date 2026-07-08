export const symbol = Symbol.for('@mashehu/astropub-md')

export const shared = /** @type {Shared} */ (
	globalThis[symbol] || (
		globalThis[symbol] = {
			markdownConfig: {},
		}
	)
)

/** @typedef {import('./shared').Shared} Shared */
