//@ts-nocheck
import React, {
	type ComponentType,
	isValidElement,
	type JSX,
	JSXElementConstructor,
	type ReactElement
} from 'react'

import { unwrap } from './unwrap-signals'

const unwrappedProps = Object.fromEntries(
	Object.entries(props).map(([key, value]) => [key, unwrap(value)])
 );
 

 interface DynamicProps<T = any> {
	component:
		| ComponentType<T>
		| keyof JSX.IntrinsicElements
		| ReactElement
		| string
		| ReactElement<unknown, string | JSXElementConstructor<any>>
		| null
		| undefined;
	[key: string]: any;
}

export const Dynamic = <T,>({
	component: Component,
	...props
}: DynamicProps<T>): JSX.Element | null => {
	if (!Component) return null;

	const unwrappedProps = Object.fromEntries(
		Object.entries(props).map(([key, value]) => [key, unwrap(value)])
	);

	return isValidElement(Component) ? (
		React.cloneElement(Component, unwrappedProps)
	) : (
		<Component {...(unwrappedProps as T)} />
	);
};