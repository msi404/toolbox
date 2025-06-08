import { type ComponentType, type JSX, JSXElementConstructor, type ReactElement } from 'react';
interface DynamicProps<T = any> {
    component: ComponentType<T> | keyof JSX.IntrinsicElements | ReactElement | string | ReactElement<unknown, string | JSXElementConstructor<any>> | null | undefined;
    [key: string]: any;
}
export declare const Dynamic: <T>({ component: Component, ...props }: DynamicProps<T>) => JSX.Element | null;
export {};
