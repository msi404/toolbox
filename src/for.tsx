//@ts-nocheck
import { Fragment, type JSX, type ReactNode } from 'react'
import {unwrap} from './unwrap-signals'

interface ForProps<T> {
	each: T[]
	children: (item: T, index: number) => ReactNode
}
export const For = <T,>({ each, children }: ForProps<T>): JSX.Element => {
	const unwrappedEach = unwrap(each);
	return (
		<>
			{unwrappedEach.map((item, index) => (
				<Fragment key={index}>{children(item, index)}</Fragment>
			))}
		</>
	);
};

