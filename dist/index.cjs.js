'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

const Show = ({ children, when, fallback }) => {
    return (jsxRuntime.jsxs(React.Fragment, { children: [when && children, !when && fallback] }));
};

const Match = ({ when, children }) => when ? jsxRuntime.jsx(jsxRuntime.Fragment, { children: children }) : null;
const Switch = ({ children }) => {
    const validCase = React.Children.toArray(children).find((child) => React.isValidElement(child) && child.props.when);
    return validCase || null;
};

const Dynamic = ({ component: Component, ...props }) => {
    if (!Component)
        return null;
    return React.isValidElement(Component) ? (React.cloneElement(Component, props)) : (jsxRuntime.jsx(Component, { ...props }));
};

const For = ({ each, children }) => {
    return (jsxRuntime.jsx(React.Fragment, { children: each.map((item, index) => (jsxRuntime.jsx(React.Fragment, { children: children(item, index) }, index))) }));
};

exports.Dynamic = Dynamic;
exports.For = For;
exports.Match = Match;
exports.Show = Show;
exports.Switch = Switch;
//# sourceMappingURL=index.cjs.js.map
