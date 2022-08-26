export interface Props {
	of: string

	[name: string]: any
}

export var Markdown: {
	(
		props: Props
	): any

	Inline(
		props: Props
	): any
}

export default Markdown
