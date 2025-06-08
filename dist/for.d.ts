import { type JSX, type ReactNode } from 'react';
interface ForProps<T> {
    each: T[];
    children: (item: T, index: number) => ReactNode;
}
export declare const For: <T>({ each, children }: ForProps<T>) => JSX.Element;
export {};
