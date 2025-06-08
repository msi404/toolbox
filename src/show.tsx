//@ts-nocheck
import
	{
	type FC,
	Fragment,
	type JSX,
	JSXElementConstructor,
	ReactElement,
	type ReactNode
} from 'react'
import {unwrap} from './unwrap-signals'

export const Show: FC<{
	children: JSX.Element | ReactNode | string
	when:
		| boolean
		| string
		| number
		| ReactElement<unknown, string | JSXElementConstructor<any>>
		| undefined
		| Signal<boolean | string | number | ReactElement | undefined>
	fallback?: JSX.Element | string | null | ReactNode
}> = ({ children, when, fallback }) => {
	const unwrappedWhen = unwrap(when);

	return (
		<Fragment>
			{unwrappedWhen && children}
			{!unwrappedWhen && fallback}
		</Fragment>
	)
}