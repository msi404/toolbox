import { jsxs, jsx, Fragment as Fragment$1 } from 'react/jsx-runtime';
import require$$0, { Fragment, Children, isValidElement, version, useMemo, useRef, useEffect, useLayoutEffect } from 'react';

function isSignal(value) {
    return typeof value === 'object' && value !== null && 'value' in value;
}
function unwrap(value) {
    return isSignal(value) ? value.value : value;
}

const Show = ({ children, when, fallback }) => {
    const unwrappedWhen = unwrap(when);
    return (jsxs(Fragment, { children: [unwrappedWhen && children, !unwrappedWhen && fallback] }));
};

const Match = ({ when, children }) => {
    const unwrappedWhen = unwrap(when);
    return unwrappedWhen ? jsx(Fragment$1, { children: children }) : null;
};
const Switch = ({ children }) => {
    const validCase = Children.toArray(children).find((child) => isValidElement(child) && unwrap(child.props.when));
    return validCase || null;
};

Object.fromEntries(Object.entries(props).map(([key, value]) => [key, unwrap(value)]));
const Dynamic = ({ component: Component, ...props }) => {
    if (!Component)
        return null;
    const unwrappedProps = Object.fromEntries(Object.entries(props).map(([key, value]) => [key, unwrap(value)]));
    return isValidElement(Component) ? (require$$0.cloneElement(Component, unwrappedProps)) : (jsx(Component, { ...unwrappedProps }));
};

const For = ({ each, children }) => {
    const unwrappedEach = unwrap(each);
    return (jsx(Fragment$1, { children: unwrappedEach.map((item, index) => (jsx(Fragment, { children: children(item, index) }, index))) }));
};

const i=Symbol.for("preact-signals");function t(){if(r>1){r--;return}let i,t=false;while(void 0!==s){let o=s;s=void 0;f++;while(void 0!==o){const n=o.o;o.o=void 0;o.f&=-3;if(!(8&o.f)&&v$1(o))try{o.c();}catch(o){if(!t){i=o;t=true;}}o=n;}}f=0;r--;if(t)throw i}let n,s;function h$1(i){const t=n;n=void 0;try{return i()}finally{n=t;}}let r=0,f=0,e=0;function c(i){if(void 0===n)return;let t=i.n;if(void 0===t||t.t!==n){t={i:0,S:i,p:n.s,n:void 0,t:n,e:void 0,x:void 0,r:t};if(void 0!==n.s)n.s.n=t;n.s=t;i.n=t;if(32&n.f)i.S(t);return t}else if(-1===t.i){t.i=0;if(void 0!==t.n){t.n.p=t.p;if(void 0!==t.p)t.p.n=t.n;t.p=n.s;t.n=void 0;n.s.n=t;n.s=t;}return t}}function u(i,t){this.v=i;this.i=0;this.n=void 0;this.t=void 0;this.W=null==t?void 0:t.watched;this.Z=null==t?void 0:t.unwatched;}u.prototype.brand=i;u.prototype.h=function(){return  true};u.prototype.S=function(i){const t=this.t;if(t!==i&&void 0===i.e){i.x=t;this.t=i;if(void 0!==t)t.e=i;else h$1(()=>{var i;null==(i=this.W)||i.call(this);});}};u.prototype.U=function(i){if(void 0!==this.t){const t=i.e,o=i.x;if(void 0!==t){t.x=o;i.e=void 0;}if(void 0!==o){o.e=t;i.x=void 0;}if(i===this.t){this.t=o;if(void 0===o)h$1(()=>{var i;null==(i=this.Z)||i.call(this);});}}};u.prototype.subscribe=function(i){return E(()=>{const t=this.value,o=n;n=void 0;try{i(t);}finally{n=o;}})};u.prototype.valueOf=function(){return this.value};u.prototype.toString=function(){return this.value+""};u.prototype.toJSON=function(){return this.value};u.prototype.peek=function(){const i=n;n=void 0;try{return this.value}finally{n=i;}};Object.defineProperty(u.prototype,"value",{get(){const i=c(this);if(void 0!==i)i.i=this.i;return this.v},set(i){if(i!==this.v){if(f>100)throw new Error("Cycle detected");this.v=i;this.i++;e++;r++;try{for(let i=this.t;void 0!==i;i=i.x)i.t.N();}finally{t();}}}});function d$1(i,t){return new u(i,t)}function v$1(i){for(let t=i.s;void 0!==t;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return  true;return  false}function l$1(i){for(let t=i.s;void 0!==t;t=t.n){const o=t.S.n;if(void 0!==o)t.r=o;t.S.n=t;t.i=-1;if(void 0===t.n){i.s=t;break}}}function y$1(i){let t,o=i.s;while(void 0!==o){const i=o.p;if(-1===o.i){o.S.U(o);if(void 0!==i)i.n=o.n;if(void 0!==o.n)o.n.p=i;}else t=o;o.S.n=o.r;if(void 0!==o.r)o.r=void 0;o=i;}i.s=t;}function a$1(i,t){u.call(this,void 0);this.x=i;this.s=void 0;this.g=e-1;this.f=4;this.W=null==t?void 0:t.watched;this.Z=null==t?void 0:t.unwatched;}a$1.prototype=new u;a$1.prototype.h=function(){this.f&=-3;if(1&this.f)return  false;if(32==(36&this.f))return  true;this.f&=-5;if(this.g===e)return  true;this.g=e;this.f|=1;if(this.i>0&&!v$1(this)){this.f&=-2;return  true}const i=n;try{l$1(this);n=this;const i=this.x();if(16&this.f||this.v!==i||0===this.i){this.v=i;this.f&=-17;this.i++;}}catch(i){this.v=i;this.f|=16;this.i++;}n=i;y$1(this);this.f&=-2;return  true};a$1.prototype.S=function(i){if(void 0===this.t){this.f|=36;for(let i=this.s;void 0!==i;i=i.n)i.S.S(i);}u.prototype.S.call(this,i);};a$1.prototype.U=function(i){if(void 0!==this.t){u.prototype.U.call(this,i);if(void 0===this.t){this.f&=-33;for(let i=this.s;void 0!==i;i=i.n)i.S.U(i);}}};a$1.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(let i=this.t;void 0!==i;i=i.x)i.t.N();}};Object.defineProperty(a$1.prototype,"value",{get(){if(1&this.f)throw new Error("Cycle detected");const i=c(this);this.h();if(void 0!==i)i.i=this.i;if(16&this.f)throw this.v;return this.v}});function w$1(i,t){return new a$1(i,t)}function _$1(i){const o=i.u;i.u=void 0;if("function"==typeof o){r++;const s=n;n=void 0;try{o();}catch(t){i.f&=-2;i.f|=8;g$1(i);throw t}finally{n=s;t();}}}function g$1(i){for(let t=i.s;void 0!==t;t=t.n)t.S.U(t);i.x=void 0;i.s=void 0;_$1(i);}function p(i){if(n!==this)throw new Error("Out-of-order effect");y$1(this);n=i;this.f&=-2;if(8&this.f)g$1(this);t();}function b$1(i){this.x=i;this.u=void 0;this.s=void 0;this.o=void 0;this.f=32;}b$1.prototype.c=function(){const i=this.S();try{if(8&this.f)return;if(void 0===this.x)return;const t=this.x();if("function"==typeof t)this.u=t;}finally{i();}};b$1.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1;this.f&=-9;_$1(this);l$1(this);r++;const i=n;n=this;return p.bind(this,i)};b$1.prototype.N=function(){if(!(2&this.f)){this.f|=2;this.o=s;s=this;}};b$1.prototype.d=function(){this.f|=8;if(!(1&this.f))g$1(this);};function E(i){const t=new b$1(i);try{t.c();}catch(i){t.d();throw i}return t.d.bind(t)}

var shim = {exports: {}};

var useSyncExternalStoreShim_production = {};

/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredUseSyncExternalStoreShim_production;

function requireUseSyncExternalStoreShim_production () {
	if (hasRequiredUseSyncExternalStoreShim_production) return useSyncExternalStoreShim_production;
	hasRequiredUseSyncExternalStoreShim_production = 1;
	var React = require$$0;
	function is(x, y) {
	  return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is,
	  useState = React.useState,
	  useEffect = React.useEffect,
	  useLayoutEffect = React.useLayoutEffect,
	  useDebugValue = React.useDebugValue;
	function useSyncExternalStore$2(subscribe, getSnapshot) {
	  var value = getSnapshot(),
	    _useState = useState({ inst: { value: value, getSnapshot: getSnapshot } }),
	    inst = _useState[0].inst,
	    forceUpdate = _useState[1];
	  useLayoutEffect(
	    function () {
	      inst.value = value;
	      inst.getSnapshot = getSnapshot;
	      checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
	    },
	    [subscribe, value, getSnapshot]
	  );
	  useEffect(
	    function () {
	      checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
	      return subscribe(function () {
	        checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
	      });
	    },
	    [subscribe]
	  );
	  useDebugValue(value);
	  return value;
	}
	function checkIfSnapshotChanged(inst) {
	  var latestGetSnapshot = inst.getSnapshot;
	  inst = inst.value;
	  try {
	    var nextValue = latestGetSnapshot();
	    return !objectIs(inst, nextValue);
	  } catch (error) {
	    return true;
	  }
	}
	function useSyncExternalStore$1(subscribe, getSnapshot) {
	  return getSnapshot();
	}
	var shim =
	  "undefined" === typeof window ||
	  "undefined" === typeof window.document ||
	  "undefined" === typeof window.document.createElement
	    ? useSyncExternalStore$1
	    : useSyncExternalStore$2;
	useSyncExternalStoreShim_production.useSyncExternalStore =
	  void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
	return useSyncExternalStoreShim_production;
}

var useSyncExternalStoreShim_development = {};

/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredUseSyncExternalStoreShim_development;

function requireUseSyncExternalStoreShim_development () {
	if (hasRequiredUseSyncExternalStoreShim_development) return useSyncExternalStoreShim_development;
	hasRequiredUseSyncExternalStoreShim_development = 1;
	"production" !== process.env.NODE_ENV &&
	  (function () {
	    function is(x, y) {
	      return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
	    }
	    function useSyncExternalStore$2(subscribe, getSnapshot) {
	      didWarnOld18Alpha ||
	        void 0 === React.startTransition ||
	        ((didWarnOld18Alpha = true),
	        console.error(
	          "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
	        ));
	      var value = getSnapshot();
	      if (!didWarnUncachedGetSnapshot) {
	        var cachedValue = getSnapshot();
	        objectIs(value, cachedValue) ||
	          (console.error(
	            "The result of getSnapshot should be cached to avoid an infinite loop"
	          ),
	          (didWarnUncachedGetSnapshot = true));
	      }
	      cachedValue = useState({
	        inst: { value: value, getSnapshot: getSnapshot }
	      });
	      var inst = cachedValue[0].inst,
	        forceUpdate = cachedValue[1];
	      useLayoutEffect(
	        function () {
	          inst.value = value;
	          inst.getSnapshot = getSnapshot;
	          checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
	        },
	        [subscribe, value, getSnapshot]
	      );
	      useEffect(
	        function () {
	          checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
	          return subscribe(function () {
	            checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
	          });
	        },
	        [subscribe]
	      );
	      useDebugValue(value);
	      return value;
	    }
	    function checkIfSnapshotChanged(inst) {
	      var latestGetSnapshot = inst.getSnapshot;
	      inst = inst.value;
	      try {
	        var nextValue = latestGetSnapshot();
	        return !objectIs(inst, nextValue);
	      } catch (error) {
	        return true;
	      }
	    }
	    function useSyncExternalStore$1(subscribe, getSnapshot) {
	      return getSnapshot();
	    }
	    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
	      "function" ===
	        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart &&
	      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
	    var React = require$$0,
	      objectIs = "function" === typeof Object.is ? Object.is : is,
	      useState = React.useState,
	      useEffect = React.useEffect,
	      useLayoutEffect = React.useLayoutEffect,
	      useDebugValue = React.useDebugValue,
	      didWarnOld18Alpha = false,
	      didWarnUncachedGetSnapshot = false,
	      shim =
	        "undefined" === typeof window ||
	        "undefined" === typeof window.document ||
	        "undefined" === typeof window.document.createElement
	          ? useSyncExternalStore$1
	          : useSyncExternalStore$2;
	    useSyncExternalStoreShim_development.useSyncExternalStore =
	      void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
	    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
	      "function" ===
	        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop &&
	      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	  })();
	return useSyncExternalStoreShim_development;
}

var hasRequiredShim;

function requireShim () {
	if (hasRequiredShim) return shim.exports;
	hasRequiredShim = 1;

	if (process.env.NODE_ENV === 'production') {
	  shim.exports = requireUseSyncExternalStoreShim_production();
	} else {
	  shim.exports = requireUseSyncExternalStoreShim_development();
	}
	return shim.exports;
}

var shimExports = requireShim();

const[l]=version.split(".").map(Number),a=[],d=Symbol.for(l>=19?"react.transitional.element":"react.element");const m=Symbol.dispose||Symbol.for("Symbol.dispose");let b;function y(t,n){const e=n.effect.S();b=n;return g.bind(n,t,e)}function g(t,n){n();b=t;}const h=()=>{},v={o:0,effect:{s:void 0,c(){},S:()=>h,d(){}},subscribe:()=>h,getSnapshot:()=>0,S(){},f(){},[m](){}},_=Promise.prototype.then.bind(Promise.resolve());let S;function w(){if(!S)S=_(x);}function x(){var t;S=void 0;null==(t=b)||t.f();}const j="undefined"!=typeof window?useLayoutEffect:useEffect;function P(t=0){w();const n=useRef();if(null==n.current)if("undefined"==typeof window)n.current=v;else n.current=function(t){let n,e,i,r=0,f=E(function(){n=this;});n.c=function(){r=r+1|0;if(i)i();};return {o:t,effect:n,subscribe(t){i=t;return function(){r=r+1|0;i=void 0;f();}},getSnapshot:()=>r,S(){if(null==b){e=y(void 0,this);return}const t=b.o,n=this.o;if(0==t&&0==n||0==t&&1==n){b.f();e=y(void 0,this);}else if(1==t&&0==n||2==t&&0==n);else e=y(b,this);},f(){const t=e;e=void 0;null==t||t();},[m](){this.f();}}}(t);const e=n.current;shimExports.useSyncExternalStore(e.subscribe,e.getSnapshot,e.getSnapshot);e.S();if(0===t)j(x);return e}Object.defineProperties(u.prototype,{$$typeof:{configurable:true,value:d},type:{configurable:true,value:function({data:t}){const n=P(1);try{return t.value}finally{n.f();}}},props:{configurable:true,get(){return {data:this}}},ref:{configurable:true,value:null}});function useSignal(t,e){return useMemo(()=>d$1(t,e),a)}function useComputed(t,n){const o=useRef(t);o.current=t;return useMemo(()=>w$1(()=>o.current(),n),a)}function useSignalEffect(t){const n=useRef(t);n.current=t;useEffect(()=>E(function(){return n.current()}),a);}

export { Dynamic, For, Match, Show, u as Signal, Switch, w$1 as computed, E as effect, d$1 as signal, useComputed, useSignal, useSignalEffect };
//# sourceMappingURL=index.esm.js.map
