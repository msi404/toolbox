import { jsxs, jsx, Fragment as Fragment$1 } from 'react/jsx-runtime';
import React, { Fragment, Children, isValidElement } from 'react';

const Show = ({ children, when, fallback }) => {
    return (jsxs(Fragment, { children: [when && children, !when && fallback] }));
};

const Match = ({ when, children }) => when ? jsx(Fragment$1, { children: children }) : null;
const Switch = ({ children }) => {
    const validCase = Children.toArray(children).find(
    // @ts-ignore
    (child) => isValidElement(child) && child.props.when);
    return validCase || null;
};

const Dynamic = ({ component: Component, ...props }) => {
    if (!Component)
        return null;
    return isValidElement(Component) ? (React.cloneElement(Component, props)) : (
    // @ts-expect-error
    jsx(Component, { ...props }));
};

const For = ({ each, children }) => {
    return (jsx(Fragment, { children: each.map((item, index) => (jsx(Fragment, { children: children(item, index) }, index))) }));
};

export { Dynamic, For, Match, Show, Switch };
//# sourceMappingURL=index.cjs.js.map
