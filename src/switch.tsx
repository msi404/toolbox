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
import {unwrap} from './unwrap-signals'
interface MatchProps {
	when:
		| boolean
		| ReactElement<unknown, string | JSXElementConstructor<any>>
		| undefined
		| any
	children: ReactNode
}

export const Match: FC<MatchProps> = ({ when, children }) => {
	const unwrappedWhen = unwrap(when)
	return unwrappedWhen ? <>{children}</> : null
}

interface SwitchProps {
	children: ReactNode
}

export const Switch: FC<SwitchProps> = ({ children }) => {
	const validCase = Children.toArray(children).find((child) =>
		isValidElement(child) && unwrap(child.props.when)
	)
	return validCase || null
}