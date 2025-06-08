import { type FC, type JSX, JSXElementConstructor, ReactElement, type ReactNode } from 'react';
export declare const Show: FC<{
    children: JSX.Element | ReactNode | string;
    when: boolean | string | number | ReactElement<unknown, string | JSXElementConstructor<any>> | undefined;
    fallback?: JSX.Element | string | null | ReactNode;
}>;
