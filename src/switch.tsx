//@ts-nocheck

import
	{
	Children,
	FC,
	isValidElement,
	JSXElementConstructor,
	ReactElement,
	ReactNode
} from 'react'
interface MatchProps {
	when:
		| boolean
		| ReactElement<unknown, string | JSXElementConstructor<any>>
		| undefined
	children: ReactNode
}

export const Match: FC<MatchProps> = ( { when, children } ) =>
	when ? <>{children}</> : null

interface SwitchProps {
	children: ReactNode
}

export const Switch: FC<SwitchProps> = ({ children }) => {
	const validCase = Children.toArray(children).find(
		(child) => isValidElement(child) && child.props.when
	)
	return validCase || null
}
