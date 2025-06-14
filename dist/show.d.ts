import { type JSX, type FC, type ReactNode, ReactElement, JSXElementConstructor } from 'react';
export declare const Show: FC<{
    children: JSX.Element | ReactNode | string;
    when: boolean | string | number | ReactElement<unknown, string | JSXElementConstructor<any>> | undefined;
    fallback?: JSX.Element | string | null | ReactNode;
}>;
