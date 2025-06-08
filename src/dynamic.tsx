//@ts-nocheck
import React, {
	type ComponentType,
	isValidElement,
	type JSX,
	JSXElementConstructor,
	type ReactElement
} from 'react'

interface DynamicProps<T = any> {
	component:
		| ComponentType<T>
		| keyof JSX.IntrinsicElements
		| ReactElement
		| string
		| null
		| ReactElement<unknown, string | JSXElementConstructor<any>>
		| undefined // Accepts React components or HTML tags
	[key: string]: any // Allow additional props
}

export const Dynamic = <T,>({
	component: Component,
	...props
}: DynamicProps<T>): JSX.Element | null => {
	if (!Component) return null

	return isValidElement(Component) ? (
		React.cloneElement(Component, props)
	) : (
		<Component {...(props as T)} />
	)
}
