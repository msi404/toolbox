import { FC, JSXElementConstructor, ReactElement, ReactNode } from 'react';
interface MatchProps {
    when: boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | undefined;
    children: ReactNode;
}
export declare const Match: FC<MatchProps>;
interface SwitchProps {
    children: ReactNode;
}
export declare const Switch: FC<SwitchProps>;
export {};
