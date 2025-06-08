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

export const Show: FC<{
	children: JSX.Element | ReactNode | string
	when:
		| boolean
		| string
		| number
		| ReactElement<unknown, string | JSXElementConstructor<any>>
		| undefined
	fallback?: JSX.Element | string | null | ReactNode
}> = ({ children, when, fallback }) => {
	return (
		<Fragment>
			{when && children}
			{!when && fallback}
		</Fragment>
	)
}
