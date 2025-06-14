import { type ComponentType, type ReactElement, type JSX, JSXElementConstructor } from 'react';
interface DynamicProps<T = any> {
    component: ComponentType<T> | keyof JSX.IntrinsicElements | ReactElement | string | null | ReactElement<unknown, string | JSXElementConstructor<any>> | undefined;
    [key: string]: any;
}
export declare const Dynamic: <T>({ component: Component, ...props }: DynamicProps<T>) => JSX.Element | null;
export {};
