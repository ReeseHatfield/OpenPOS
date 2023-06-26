function Bc(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function Ac(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var vs = { exports: {} },
  ul = {},
  ys = { exports: {} },
  R = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qn = Symbol.for("react.element"),
  Vc = Symbol.for("react.portal"),
  Wc = Symbol.for("react.fragment"),
  Hc = Symbol.for("react.strict_mode"),
  Qc = Symbol.for("react.profiler"),
  Kc = Symbol.for("react.provider"),
  Yc = Symbol.for("react.context"),
  Xc = Symbol.for("react.forward_ref"),
  Gc = Symbol.for("react.suspense"),
  Zc = Symbol.for("react.memo"),
  Jc = Symbol.for("react.lazy"),
  Zi = Symbol.iterator;
function qc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Zi && e[Zi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var gs = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ws = Object.assign,
  Ss = {};
function sn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ss),
    (this.updater = n || gs);
}
sn.prototype.isReactComponent = {};
sn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
sn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ks() {}
ks.prototype = sn.prototype;
function qo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ss),
    (this.updater = n || gs);
}
var bo = (qo.prototype = new ks());
bo.constructor = qo;
ws(bo, sn.prototype);
bo.isPureReactComponent = !0;
var Ji = Array.isArray,
  Es = Object.prototype.hasOwnProperty,
  ei = { current: null },
  xs = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cs(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Es.call(t, r) && !xs.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: qn,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: ei.current,
  };
}
function bc(e, t) {
  return {
    $$typeof: qn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ti(e) {
  return typeof e == "object" && e !== null && e.$$typeof === qn;
}
function ef(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var qi = /\/+/g;
function Ll(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? ef("" + e.key)
    : t.toString(36);
}
function Er(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case qn:
          case Vc:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Ll(i, 0) : r),
      Ji(l)
        ? ((n = ""),
          e != null && (n = e.replace(qi, "$&/") + "/"),
          Er(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (ti(l) &&
            (l = bc(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(qi, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Ji(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + Ll(o, u);
      i += Er(o, t, n, s, l);
    }
  else if (((s = qc(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + Ll(o, u++)), (i += Er(o, t, n, s, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function or(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Er(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function tf(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var se = { current: null },
  xr = { transition: null },
  nf = {
    ReactCurrentDispatcher: se,
    ReactCurrentBatchConfig: xr,
    ReactCurrentOwner: ei,
  };
R.Children = {
  map: or,
  forEach: function (e, t, n) {
    or(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      or(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      or(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ti(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
R.Component = sn;
R.Fragment = Wc;
R.Profiler = Qc;
R.PureComponent = qo;
R.StrictMode = Hc;
R.Suspense = Gc;
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nf;
R.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = ws({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = ei.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      Es.call(t, s) &&
        !xs.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: qn, type: e.type, key: l, ref: o, props: r, _owner: i };
};
R.createContext = function (e) {
  return (
    (e = {
      $$typeof: Yc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Kc, _context: e }),
    (e.Consumer = e)
  );
};
R.createElement = Cs;
R.createFactory = function (e) {
  var t = Cs.bind(null, e);
  return (t.type = e), t;
};
R.createRef = function () {
  return { current: null };
};
R.forwardRef = function (e) {
  return { $$typeof: Xc, render: e };
};
R.isValidElement = ti;
R.lazy = function (e) {
  return { $$typeof: Jc, _payload: { _status: -1, _result: e }, _init: tf };
};
R.memo = function (e, t) {
  return { $$typeof: Zc, type: e, compare: t === void 0 ? null : t };
};
R.startTransition = function (e) {
  var t = xr.transition;
  xr.transition = {};
  try {
    e();
  } finally {
    xr.transition = t;
  }
};
R.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
R.useCallback = function (e, t) {
  return se.current.useCallback(e, t);
};
R.useContext = function (e) {
  return se.current.useContext(e);
};
R.useDebugValue = function () {};
R.useDeferredValue = function (e) {
  return se.current.useDeferredValue(e);
};
R.useEffect = function (e, t) {
  return se.current.useEffect(e, t);
};
R.useId = function () {
  return se.current.useId();
};
R.useImperativeHandle = function (e, t, n) {
  return se.current.useImperativeHandle(e, t, n);
};
R.useInsertionEffect = function (e, t) {
  return se.current.useInsertionEffect(e, t);
};
R.useLayoutEffect = function (e, t) {
  return se.current.useLayoutEffect(e, t);
};
R.useMemo = function (e, t) {
  return se.current.useMemo(e, t);
};
R.useReducer = function (e, t, n) {
  return se.current.useReducer(e, t, n);
};
R.useRef = function (e) {
  return se.current.useRef(e);
};
R.useState = function (e) {
  return se.current.useState(e);
};
R.useSyncExternalStore = function (e, t, n) {
  return se.current.useSyncExternalStore(e, t, n);
};
R.useTransition = function () {
  return se.current.useTransition();
};
R.version = "18.2.0";
ys.exports = R;
var z = ys.exports;
const rf = Ac(z),
  lf = Bc({ __proto__: null, default: rf }, [z]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var of = z,
  uf = Symbol.for("react.element"),
  sf = Symbol.for("react.fragment"),
  af = Object.prototype.hasOwnProperty,
  cf = of.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  ff = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ps(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) af.call(t, r) && !ff.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: uf,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: cf.current,
  };
}
ul.Fragment = sf;
ul.jsx = Ps;
ul.jsxs = Ps;
vs.exports = ul;
var ni = vs.exports;
const df = ni.Fragment,
  j = ni.jsx,
  Mn = ni.jsxs;
var _s = { exports: {} },
  Se = {},
  Ns = { exports: {} },
  zs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(x, L) {
    var T = x.length;
    x.push(L);
    e: for (; 0 < T; ) {
      var Q = (T - 1) >>> 1,
        Z = x[Q];
      if (0 < l(Z, L)) (x[Q] = L), (x[T] = Z), (T = Q);
      else break e;
    }
  }
  function n(x) {
    return x.length === 0 ? null : x[0];
  }
  function r(x) {
    if (x.length === 0) return null;
    var L = x[0],
      T = x.pop();
    if (T !== L) {
      x[0] = T;
      e: for (var Q = 0, Z = x.length, rr = Z >>> 1; Q < rr; ) {
        var gt = 2 * (Q + 1) - 1,
          zl = x[gt],
          wt = gt + 1,
          lr = x[wt];
        if (0 > l(zl, T))
          wt < Z && 0 > l(lr, zl)
            ? ((x[Q] = lr), (x[wt] = T), (Q = wt))
            : ((x[Q] = zl), (x[gt] = T), (Q = gt));
        else if (wt < Z && 0 > l(lr, T)) (x[Q] = lr), (x[wt] = T), (Q = wt);
        else break e;
      }
    }
    return L;
  }
  function l(x, L) {
    var T = x.sortIndex - L.sortIndex;
    return T !== 0 ? T : x.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    c = [],
    p = 1,
    m = null,
    h = 3,
    S = !1,
    w = !1,
    g = !1,
    N = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(x) {
    for (var L = n(c); L !== null; ) {
      if (L.callback === null) r(c);
      else if (L.startTime <= x)
        r(c), (L.sortIndex = L.expirationTime), t(s, L);
      else break;
      L = n(c);
    }
  }
  function v(x) {
    if (((g = !1), d(x), !w))
      if (n(s) !== null) (w = !0), _l(k);
      else {
        var L = n(c);
        L !== null && Nl(v, L.startTime - x);
      }
  }
  function k(x, L) {
    (w = !1), g && ((g = !1), f(_), (_ = -1)), (S = !0);
    var T = h;
    try {
      for (
        d(L), m = n(s);
        m !== null && (!(m.expirationTime > L) || (x && !ze()));

      ) {
        var Q = m.callback;
        if (typeof Q == "function") {
          (m.callback = null), (h = m.priorityLevel);
          var Z = Q(m.expirationTime <= L);
          (L = e.unstable_now()),
            typeof Z == "function" ? (m.callback = Z) : m === n(s) && r(s),
            d(L);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var rr = !0;
      else {
        var gt = n(c);
        gt !== null && Nl(v, gt.startTime - L), (rr = !1);
      }
      return rr;
    } finally {
      (m = null), (h = T), (S = !1);
    }
  }
  var C = !1,
    P = null,
    _ = -1,
    H = 5,
    O = -1;
  function ze() {
    return !(e.unstable_now() - O < H);
  }
  function fn() {
    if (P !== null) {
      var x = e.unstable_now();
      O = x;
      var L = !0;
      try {
        L = P(!0, x);
      } finally {
        L ? dn() : ((C = !1), (P = null));
      }
    } else C = !1;
  }
  var dn;
  if (typeof a == "function")
    dn = function () {
      a(fn);
    };
  else if (typeof MessageChannel < "u") {
    var Gi = new MessageChannel(),
      $c = Gi.port2;
    (Gi.port1.onmessage = fn),
      (dn = function () {
        $c.postMessage(null);
      });
  } else
    dn = function () {
      N(fn, 0);
    };
  function _l(x) {
    (P = x), C || ((C = !0), dn());
  }
  function Nl(x, L) {
    _ = N(function () {
      x(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (x) {
      x.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || S || ((w = !0), _l(k));
    }),
    (e.unstable_forceFrameRate = function (x) {
      0 > x || 125 < x
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (H = 0 < x ? Math.floor(1e3 / x) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (x) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = h;
      }
      var T = h;
      h = L;
      try {
        return x();
      } finally {
        h = T;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (x, L) {
      switch (x) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          x = 3;
      }
      var T = h;
      h = x;
      try {
        return L();
      } finally {
        h = T;
      }
    }),
    (e.unstable_scheduleCallback = function (x, L, T) {
      var Q = e.unstable_now();
      switch (
        (typeof T == "object" && T !== null
          ? ((T = T.delay), (T = typeof T == "number" && 0 < T ? Q + T : Q))
          : (T = Q),
        x)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = T + Z),
        (x = {
          id: p++,
          callback: L,
          priorityLevel: x,
          startTime: T,
          expirationTime: Z,
          sortIndex: -1,
        }),
        T > Q
          ? ((x.sortIndex = T),
            t(c, x),
            n(s) === null &&
              x === n(c) &&
              (g ? (f(_), (_ = -1)) : (g = !0), Nl(v, T - Q)))
          : ((x.sortIndex = Z), t(s, x), w || S || ((w = !0), _l(k))),
        x
      );
    }),
    (e.unstable_shouldYield = ze),
    (e.unstable_wrapCallback = function (x) {
      var L = h;
      return function () {
        var T = h;
        h = L;
        try {
          return x.apply(this, arguments);
        } finally {
          h = T;
        }
      };
    });
})(zs);
Ns.exports = zs;
var pf = Ns.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ls = z,
  we = pf;
function y(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Ts = new Set(),
  Dn = {};
function Ot(e, t) {
  en(e, t), en(e + "Capture", t);
}
function en(e, t) {
  for (Dn[e] = t, e = 0; e < t.length; e++) Ts.add(t[e]);
}
var Ke = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  no = Object.prototype.hasOwnProperty,
  hf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  bi = {},
  eu = {};
function mf(e) {
  return no.call(eu, e)
    ? !0
    : no.call(bi, e)
    ? !1
    : hf.test(e)
    ? (eu[e] = !0)
    : ((bi[e] = !0), !1);
}
function vf(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function yf(e, t, n, r) {
  if (t === null || typeof t > "u" || vf(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ae(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    te[e] = new ae(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  te[t] = new ae(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  te[e] = new ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  te[e] = new ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    te[e] = new ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  te[e] = new ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  te[e] = new ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  te[e] = new ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  te[e] = new ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ri = /[\-:]([a-z])/g;
function li(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ri, li);
    te[t] = new ae(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ri, li);
    te[t] = new ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ri, li);
  te[t] = new ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
te.xlinkHref = new ae(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function oi(e, t, n, r) {
  var l = te.hasOwnProperty(t) ? te[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (yf(t, n, l, r) && (n = null),
    r || l === null
      ? mf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ze = Ls.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ir = Symbol.for("react.element"),
  Dt = Symbol.for("react.portal"),
  Ft = Symbol.for("react.fragment"),
  ii = Symbol.for("react.strict_mode"),
  ro = Symbol.for("react.profiler"),
  Rs = Symbol.for("react.provider"),
  Os = Symbol.for("react.context"),
  ui = Symbol.for("react.forward_ref"),
  lo = Symbol.for("react.suspense"),
  oo = Symbol.for("react.suspense_list"),
  si = Symbol.for("react.memo"),
  qe = Symbol.for("react.lazy"),
  Is = Symbol.for("react.offscreen"),
  tu = Symbol.iterator;
function pn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (tu && e[tu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var V = Object.assign,
  Tl;
function kn(e) {
  if (Tl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Tl = (t && t[1]) || "";
    }
  return (
    `
` +
    Tl +
    e
  );
}
var Rl = !1;
function Ol(e, t) {
  if (!e || Rl) return "";
  Rl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (Rl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? kn(e) : "";
}
function gf(e) {
  switch (e.tag) {
    case 5:
      return kn(e.type);
    case 16:
      return kn("Lazy");
    case 13:
      return kn("Suspense");
    case 19:
      return kn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ol(e.type, !1)), e;
    case 11:
      return (e = Ol(e.type.render, !1)), e;
    case 1:
      return (e = Ol(e.type, !0)), e;
    default:
      return "";
  }
}
function io(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ft:
      return "Fragment";
    case Dt:
      return "Portal";
    case ro:
      return "Profiler";
    case ii:
      return "StrictMode";
    case lo:
      return "Suspense";
    case oo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Os:
        return (e.displayName || "Context") + ".Consumer";
      case Rs:
        return (e._context.displayName || "Context") + ".Provider";
      case ui:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case si:
        return (
          (t = e.displayName || null), t !== null ? t : io(e.type) || "Memo"
        );
      case qe:
        (t = e._payload), (e = e._init);
        try {
          return io(e(t));
        } catch {}
    }
  return null;
}
function wf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return io(t);
    case 8:
      return t === ii ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function pt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ms(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Sf(e) {
  var t = Ms(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ur(e) {
  e._valueTracker || (e._valueTracker = Sf(e));
}
function Ds(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ms(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Dr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function uo(e, t) {
  var n = t.checked;
  return V({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function nu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = pt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Fs(e, t) {
  (t = t.checked), t != null && oi(e, "checked", t, !1);
}
function so(e, t) {
  Fs(e, t);
  var n = pt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ao(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ao(e, t.type, pt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ru(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ao(e, t, n) {
  (t !== "number" || Dr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var En = Array.isArray;
function Yt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + pt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function co(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return V({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function lu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(y(92));
      if (En(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: pt(n) };
}
function Us(e, t) {
  var n = pt(t.value),
    r = pt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ou(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function js(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function fo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? js(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var sr,
  $s = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        sr = sr || document.createElement("div"),
          sr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = sr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Fn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Pn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  kf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Pn).forEach(function (e) {
  kf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Pn[t] = Pn[e]);
  });
});
function Bs(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Pn.hasOwnProperty(e) && Pn[e])
    ? ("" + t).trim()
    : t + "px";
}
function As(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Bs(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Ef = V(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function po(e, t) {
  if (t) {
    if (Ef[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(y(62));
  }
}
function ho(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var mo = null;
function ai(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var vo = null,
  Xt = null,
  Gt = null;
function iu(e) {
  if ((e = tr(e))) {
    if (typeof vo != "function") throw Error(y(280));
    var t = e.stateNode;
    t && ((t = dl(t)), vo(e.stateNode, e.type, t));
  }
}
function Vs(e) {
  Xt ? (Gt ? Gt.push(e) : (Gt = [e])) : (Xt = e);
}
function Ws() {
  if (Xt) {
    var e = Xt,
      t = Gt;
    if (((Gt = Xt = null), iu(e), t)) for (e = 0; e < t.length; e++) iu(t[e]);
  }
}
function Hs(e, t) {
  return e(t);
}
function Qs() {}
var Il = !1;
function Ks(e, t, n) {
  if (Il) return e(t, n);
  Il = !0;
  try {
    return Hs(e, t, n);
  } finally {
    (Il = !1), (Xt !== null || Gt !== null) && (Qs(), Ws());
  }
}
function Un(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = dl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(y(231, t, typeof n));
  return n;
}
var yo = !1;
if (Ke)
  try {
    var hn = {};
    Object.defineProperty(hn, "passive", {
      get: function () {
        yo = !0;
      },
    }),
      window.addEventListener("test", hn, hn),
      window.removeEventListener("test", hn, hn);
  } catch {
    yo = !1;
  }
function xf(e, t, n, r, l, o, i, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (p) {
    this.onError(p);
  }
}
var _n = !1,
  Fr = null,
  Ur = !1,
  go = null,
  Cf = {
    onError: function (e) {
      (_n = !0), (Fr = e);
    },
  };
function Pf(e, t, n, r, l, o, i, u, s) {
  (_n = !1), (Fr = null), xf.apply(Cf, arguments);
}
function _f(e, t, n, r, l, o, i, u, s) {
  if ((Pf.apply(this, arguments), _n)) {
    if (_n) {
      var c = Fr;
      (_n = !1), (Fr = null);
    } else throw Error(y(198));
    Ur || ((Ur = !0), (go = c));
  }
}
function It(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ys(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function uu(e) {
  if (It(e) !== e) throw Error(y(188));
}
function Nf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = It(e)), t === null)) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return uu(l), e;
        if (o === r) return uu(l), t;
        o = o.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function Xs(e) {
  return (e = Nf(e)), e !== null ? Gs(e) : null;
}
function Gs(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Gs(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Zs = we.unstable_scheduleCallback,
  su = we.unstable_cancelCallback,
  zf = we.unstable_shouldYield,
  Lf = we.unstable_requestPaint,
  K = we.unstable_now,
  Tf = we.unstable_getCurrentPriorityLevel,
  ci = we.unstable_ImmediatePriority,
  Js = we.unstable_UserBlockingPriority,
  jr = we.unstable_NormalPriority,
  Rf = we.unstable_LowPriority,
  qs = we.unstable_IdlePriority,
  sl = null,
  $e = null;
function Of(e) {
  if ($e && typeof $e.onCommitFiberRoot == "function")
    try {
      $e.onCommitFiberRoot(sl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ie = Math.clz32 ? Math.clz32 : Df,
  If = Math.log,
  Mf = Math.LN2;
function Df(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((If(e) / Mf) | 0)) | 0;
}
var ar = 64,
  cr = 4194304;
function xn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function $r(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = xn(u)) : ((o &= i), o !== 0 && (r = xn(o)));
  } else (i = n & ~l), i !== 0 ? (r = xn(i)) : o !== 0 && (r = xn(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ie(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Ff(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Uf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Ie(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & n) || u & r) && (l[i] = Ff(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function wo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function bs() {
  var e = ar;
  return (ar <<= 1), !(ar & 4194240) && (ar = 64), e;
}
function Ml(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function bn(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ie(t)),
    (e[t] = n);
}
function jf(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ie(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function fi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ie(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var M = 0;
function ea(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ta,
  di,
  na,
  ra,
  la,
  So = !1,
  fr = [],
  ot = null,
  it = null,
  ut = null,
  jn = new Map(),
  $n = new Map(),
  et = [],
  $f =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function au(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ot = null;
      break;
    case "dragenter":
    case "dragleave":
      it = null;
      break;
    case "mouseover":
    case "mouseout":
      ut = null;
      break;
    case "pointerover":
    case "pointerout":
      jn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      $n.delete(t.pointerId);
  }
}
function mn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = tr(t)), t !== null && di(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Bf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (ot = mn(ot, e, t, n, r, l)), !0;
    case "dragenter":
      return (it = mn(it, e, t, n, r, l)), !0;
    case "mouseover":
      return (ut = mn(ut, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return jn.set(o, mn(jn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), $n.set(o, mn($n.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function oa(e) {
  var t = Et(e.target);
  if (t !== null) {
    var n = It(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ys(n)), t !== null)) {
          (e.blockedOn = t),
            la(e.priority, function () {
              na(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Cr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ko(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (mo = r), n.target.dispatchEvent(r), (mo = null);
    } else return (t = tr(n)), t !== null && di(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function cu(e, t, n) {
  Cr(e) && n.delete(t);
}
function Af() {
  (So = !1),
    ot !== null && Cr(ot) && (ot = null),
    it !== null && Cr(it) && (it = null),
    ut !== null && Cr(ut) && (ut = null),
    jn.forEach(cu),
    $n.forEach(cu);
}
function vn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    So ||
      ((So = !0),
      we.unstable_scheduleCallback(we.unstable_NormalPriority, Af)));
}
function Bn(e) {
  function t(l) {
    return vn(l, e);
  }
  if (0 < fr.length) {
    vn(fr[0], e);
    for (var n = 1; n < fr.length; n++) {
      var r = fr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ot !== null && vn(ot, e),
      it !== null && vn(it, e),
      ut !== null && vn(ut, e),
      jn.forEach(t),
      $n.forEach(t),
      n = 0;
    n < et.length;
    n++
  )
    (r = et[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < et.length && ((n = et[0]), n.blockedOn === null); )
    oa(n), n.blockedOn === null && et.shift();
}
var Zt = Ze.ReactCurrentBatchConfig,
  Br = !0;
function Vf(e, t, n, r) {
  var l = M,
    o = Zt.transition;
  Zt.transition = null;
  try {
    (M = 1), pi(e, t, n, r);
  } finally {
    (M = l), (Zt.transition = o);
  }
}
function Wf(e, t, n, r) {
  var l = M,
    o = Zt.transition;
  Zt.transition = null;
  try {
    (M = 4), pi(e, t, n, r);
  } finally {
    (M = l), (Zt.transition = o);
  }
}
function pi(e, t, n, r) {
  if (Br) {
    var l = ko(e, t, n, r);
    if (l === null) Hl(e, t, r, Ar, n), au(e, r);
    else if (Bf(l, e, t, n, r)) r.stopPropagation();
    else if ((au(e, r), t & 4 && -1 < $f.indexOf(e))) {
      for (; l !== null; ) {
        var o = tr(l);
        if (
          (o !== null && ta(o),
          (o = ko(e, t, n, r)),
          o === null && Hl(e, t, r, Ar, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Hl(e, t, r, null, n);
  }
}
var Ar = null;
function ko(e, t, n, r) {
  if (((Ar = null), (e = ai(r)), (e = Et(e)), e !== null))
    if (((t = It(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ys(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ar = e), null;
}
function ia(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Tf()) {
        case ci:
          return 1;
        case Js:
          return 4;
        case jr:
        case Rf:
          return 16;
        case qs:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nt = null,
  hi = null,
  Pr = null;
function ua() {
  if (Pr) return Pr;
  var e,
    t = hi,
    n = t.length,
    r,
    l = "value" in nt ? nt.value : nt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Pr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function _r(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function dr() {
  return !0;
}
function fu() {
  return !1;
}
function ke(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? dr
        : fu),
      (this.isPropagationStopped = fu),
      this
    );
  }
  return (
    V(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = dr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = dr));
      },
      persist: function () {},
      isPersistent: dr,
    }),
    t
  );
}
var an = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  mi = ke(an),
  er = V({}, an, { view: 0, detail: 0 }),
  Hf = ke(er),
  Dl,
  Fl,
  yn,
  al = V({}, er, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: vi,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== yn &&
            (yn && e.type === "mousemove"
              ? ((Dl = e.screenX - yn.screenX), (Fl = e.screenY - yn.screenY))
              : (Fl = Dl = 0),
            (yn = e)),
          Dl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Fl;
    },
  }),
  du = ke(al),
  Qf = V({}, al, { dataTransfer: 0 }),
  Kf = ke(Qf),
  Yf = V({}, er, { relatedTarget: 0 }),
  Ul = ke(Yf),
  Xf = V({}, an, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Gf = ke(Xf),
  Zf = V({}, an, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Jf = ke(Zf),
  qf = V({}, an, { data: 0 }),
  pu = ke(qf),
  bf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  ed = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  td = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function nd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = td[e]) ? !!t[e] : !1;
}
function vi() {
  return nd;
}
var rd = V({}, er, {
    key: function (e) {
      if (e.key) {
        var t = bf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = _r(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? ed[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: vi,
    charCode: function (e) {
      return e.type === "keypress" ? _r(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? _r(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  ld = ke(rd),
  od = V({}, al, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  hu = ke(od),
  id = V({}, er, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: vi,
  }),
  ud = ke(id),
  sd = V({}, an, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ad = ke(sd),
  cd = V({}, al, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  fd = ke(cd),
  dd = [9, 13, 27, 32],
  yi = Ke && "CompositionEvent" in window,
  Nn = null;
Ke && "documentMode" in document && (Nn = document.documentMode);
var pd = Ke && "TextEvent" in window && !Nn,
  sa = Ke && (!yi || (Nn && 8 < Nn && 11 >= Nn)),
  mu = String.fromCharCode(32),
  vu = !1;
function aa(e, t) {
  switch (e) {
    case "keyup":
      return dd.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ca(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Ut = !1;
function hd(e, t) {
  switch (e) {
    case "compositionend":
      return ca(t);
    case "keypress":
      return t.which !== 32 ? null : ((vu = !0), mu);
    case "textInput":
      return (e = t.data), e === mu && vu ? null : e;
    default:
      return null;
  }
}
function md(e, t) {
  if (Ut)
    return e === "compositionend" || (!yi && aa(e, t))
      ? ((e = ua()), (Pr = hi = nt = null), (Ut = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return sa && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var vd = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function yu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!vd[e.type] : t === "textarea";
}
function fa(e, t, n, r) {
  Vs(r),
    (t = Vr(t, "onChange")),
    0 < t.length &&
      ((n = new mi("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var zn = null,
  An = null;
function yd(e) {
  Ea(e, 0);
}
function cl(e) {
  var t = Bt(e);
  if (Ds(t)) return e;
}
function gd(e, t) {
  if (e === "change") return t;
}
var da = !1;
if (Ke) {
  var jl;
  if (Ke) {
    var $l = "oninput" in document;
    if (!$l) {
      var gu = document.createElement("div");
      gu.setAttribute("oninput", "return;"),
        ($l = typeof gu.oninput == "function");
    }
    jl = $l;
  } else jl = !1;
  da = jl && (!document.documentMode || 9 < document.documentMode);
}
function wu() {
  zn && (zn.detachEvent("onpropertychange", pa), (An = zn = null));
}
function pa(e) {
  if (e.propertyName === "value" && cl(An)) {
    var t = [];
    fa(t, An, e, ai(e)), Ks(yd, t);
  }
}
function wd(e, t, n) {
  e === "focusin"
    ? (wu(), (zn = t), (An = n), zn.attachEvent("onpropertychange", pa))
    : e === "focusout" && wu();
}
function Sd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return cl(An);
}
function kd(e, t) {
  if (e === "click") return cl(t);
}
function Ed(e, t) {
  if (e === "input" || e === "change") return cl(t);
}
function xd(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var De = typeof Object.is == "function" ? Object.is : xd;
function Vn(e, t) {
  if (De(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!no.call(t, l) || !De(e[l], t[l])) return !1;
  }
  return !0;
}
function Su(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ku(e, t) {
  var n = Su(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Su(n);
  }
}
function ha(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? ha(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function ma() {
  for (var e = window, t = Dr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Dr(e.document);
  }
  return t;
}
function gi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Cd(e) {
  var t = ma(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ha(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && gi(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = ku(n, o));
        var i = ku(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Pd = Ke && "documentMode" in document && 11 >= document.documentMode,
  jt = null,
  Eo = null,
  Ln = null,
  xo = !1;
function Eu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  xo ||
    jt == null ||
    jt !== Dr(r) ||
    ((r = jt),
    "selectionStart" in r && gi(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ln && Vn(Ln, r)) ||
      ((Ln = r),
      (r = Vr(Eo, "onSelect")),
      0 < r.length &&
        ((t = new mi("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = jt))));
}
function pr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var $t = {
    animationend: pr("Animation", "AnimationEnd"),
    animationiteration: pr("Animation", "AnimationIteration"),
    animationstart: pr("Animation", "AnimationStart"),
    transitionend: pr("Transition", "TransitionEnd"),
  },
  Bl = {},
  va = {};
Ke &&
  ((va = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete $t.animationend.animation,
    delete $t.animationiteration.animation,
    delete $t.animationstart.animation),
  "TransitionEvent" in window || delete $t.transitionend.transition);
function fl(e) {
  if (Bl[e]) return Bl[e];
  if (!$t[e]) return e;
  var t = $t[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in va) return (Bl[e] = t[n]);
  return e;
}
var ya = fl("animationend"),
  ga = fl("animationiteration"),
  wa = fl("animationstart"),
  Sa = fl("transitionend"),
  ka = new Map(),
  xu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function mt(e, t) {
  ka.set(e, t), Ot(t, [e]);
}
for (var Al = 0; Al < xu.length; Al++) {
  var Vl = xu[Al],
    _d = Vl.toLowerCase(),
    Nd = Vl[0].toUpperCase() + Vl.slice(1);
  mt(_d, "on" + Nd);
}
mt(ya, "onAnimationEnd");
mt(ga, "onAnimationIteration");
mt(wa, "onAnimationStart");
mt("dblclick", "onDoubleClick");
mt("focusin", "onFocus");
mt("focusout", "onBlur");
mt(Sa, "onTransitionEnd");
en("onMouseEnter", ["mouseout", "mouseover"]);
en("onMouseLeave", ["mouseout", "mouseover"]);
en("onPointerEnter", ["pointerout", "pointerover"]);
en("onPointerLeave", ["pointerout", "pointerover"]);
Ot(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Ot(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Ot("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ot(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ot(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ot(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Cn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  zd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Cn));
function Cu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), _f(r, t, void 0, e), (e.currentTarget = null);
}
function Ea(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          Cu(l, u, c), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          Cu(l, u, c), (o = s);
        }
    }
  }
  if (Ur) throw ((e = go), (Ur = !1), (go = null), e);
}
function F(e, t) {
  var n = t[zo];
  n === void 0 && (n = t[zo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (xa(t, e, 2, !1), n.add(r));
}
function Wl(e, t, n) {
  var r = 0;
  t && (r |= 4), xa(n, e, r, t);
}
var hr = "_reactListening" + Math.random().toString(36).slice(2);
function Wn(e) {
  if (!e[hr]) {
    (e[hr] = !0),
      Ts.forEach(function (n) {
        n !== "selectionchange" && (zd.has(n) || Wl(n, !1, e), Wl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[hr] || ((t[hr] = !0), Wl("selectionchange", !1, t));
  }
}
function xa(e, t, n, r) {
  switch (ia(t)) {
    case 1:
      var l = Vf;
      break;
    case 4:
      l = Wf;
      break;
    default:
      l = pi;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !yo ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Hl(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = Et(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Ks(function () {
    var c = o,
      p = ai(n),
      m = [];
    e: {
      var h = ka.get(e);
      if (h !== void 0) {
        var S = mi,
          w = e;
        switch (e) {
          case "keypress":
            if (_r(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = ld;
            break;
          case "focusin":
            (w = "focus"), (S = Ul);
            break;
          case "focusout":
            (w = "blur"), (S = Ul);
            break;
          case "beforeblur":
          case "afterblur":
            S = Ul;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            S = du;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = Kf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = ud;
            break;
          case ya:
          case ga:
          case wa:
            S = Gf;
            break;
          case Sa:
            S = ad;
            break;
          case "scroll":
            S = Hf;
            break;
          case "wheel":
            S = fd;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = Jf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = hu;
        }
        var g = (t & 4) !== 0,
          N = !g && e === "scroll",
          f = g ? (h !== null ? h + "Capture" : null) : h;
        g = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if (
            (d.tag === 5 &&
              v !== null &&
              ((d = v),
              f !== null && ((v = Un(a, f)), v != null && g.push(Hn(a, v, d)))),
            N)
          )
            break;
          a = a.return;
        }
        0 < g.length &&
          ((h = new S(h, w, null, n, p)), m.push({ event: h, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (S = e === "mouseout" || e === "pointerout"),
          h &&
            n !== mo &&
            (w = n.relatedTarget || n.fromElement) &&
            (Et(w) || w[Ye]))
        )
          break e;
        if (
          (S || h) &&
          ((h =
            p.window === p
              ? p
              : (h = p.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          S
            ? ((w = n.relatedTarget || n.toElement),
              (S = c),
              (w = w ? Et(w) : null),
              w !== null &&
                ((N = It(w)), w !== N || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((S = null), (w = c)),
          S !== w)
        ) {
          if (
            ((g = du),
            (v = "onMouseLeave"),
            (f = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = hu),
              (v = "onPointerLeave"),
              (f = "onPointerEnter"),
              (a = "pointer")),
            (N = S == null ? h : Bt(S)),
            (d = w == null ? h : Bt(w)),
            (h = new g(v, a + "leave", S, n, p)),
            (h.target = N),
            (h.relatedTarget = d),
            (v = null),
            Et(p) === c &&
              ((g = new g(f, a + "enter", w, n, p)),
              (g.target = d),
              (g.relatedTarget = N),
              (v = g)),
            (N = v),
            S && w)
          )
            t: {
              for (g = S, f = w, a = 0, d = g; d; d = Mt(d)) a++;
              for (d = 0, v = f; v; v = Mt(v)) d++;
              for (; 0 < a - d; ) (g = Mt(g)), a--;
              for (; 0 < d - a; ) (f = Mt(f)), d--;
              for (; a--; ) {
                if (g === f || (f !== null && g === f.alternate)) break t;
                (g = Mt(g)), (f = Mt(f));
              }
              g = null;
            }
          else g = null;
          S !== null && Pu(m, h, S, g, !1),
            w !== null && N !== null && Pu(m, N, w, g, !0);
        }
      }
      e: {
        if (
          ((h = c ? Bt(c) : window),
          (S = h.nodeName && h.nodeName.toLowerCase()),
          S === "select" || (S === "input" && h.type === "file"))
        )
          var k = gd;
        else if (yu(h))
          if (da) k = Ed;
          else {
            k = Sd;
            var C = wd;
          }
        else
          (S = h.nodeName) &&
            S.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (k = kd);
        if (k && (k = k(e, c))) {
          fa(m, k, n, p);
          break e;
        }
        C && C(e, h, c),
          e === "focusout" &&
            (C = h._wrapperState) &&
            C.controlled &&
            h.type === "number" &&
            ao(h, "number", h.value);
      }
      switch (((C = c ? Bt(c) : window), e)) {
        case "focusin":
          (yu(C) || C.contentEditable === "true") &&
            ((jt = C), (Eo = c), (Ln = null));
          break;
        case "focusout":
          Ln = Eo = jt = null;
          break;
        case "mousedown":
          xo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (xo = !1), Eu(m, n, p);
          break;
        case "selectionchange":
          if (Pd) break;
        case "keydown":
        case "keyup":
          Eu(m, n, p);
      }
      var P;
      if (yi)
        e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else
        Ut
          ? aa(e, n) && (_ = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      _ &&
        (sa &&
          n.locale !== "ko" &&
          (Ut || _ !== "onCompositionStart"
            ? _ === "onCompositionEnd" && Ut && (P = ua())
            : ((nt = p),
              (hi = "value" in nt ? nt.value : nt.textContent),
              (Ut = !0))),
        (C = Vr(c, _)),
        0 < C.length &&
          ((_ = new pu(_, e, null, n, p)),
          m.push({ event: _, listeners: C }),
          P ? (_.data = P) : ((P = ca(n)), P !== null && (_.data = P)))),
        (P = pd ? hd(e, n) : md(e, n)) &&
          ((c = Vr(c, "onBeforeInput")),
          0 < c.length &&
            ((p = new pu("onBeforeInput", "beforeinput", null, n, p)),
            m.push({ event: p, listeners: c }),
            (p.data = P)));
    }
    Ea(m, t);
  });
}
function Hn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Vr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Un(e, n)),
      o != null && r.unshift(Hn(e, o, l)),
      (o = Un(e, t)),
      o != null && r.push(Hn(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Mt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Pu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((s = Un(n, o)), s != null && i.unshift(Hn(n, s, u)))
        : l || ((s = Un(n, o)), s != null && i.push(Hn(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Ld = /\r\n?/g,
  Td = /\u0000|\uFFFD/g;
function _u(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Ld,
      `
`
    )
    .replace(Td, "");
}
function mr(e, t, n) {
  if (((t = _u(t)), _u(e) !== t && n)) throw Error(y(425));
}
function Wr() {}
var Co = null,
  Po = null;
function _o(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var No = typeof setTimeout == "function" ? setTimeout : void 0,
  Rd = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Nu = typeof Promise == "function" ? Promise : void 0,
  Od =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Nu < "u"
      ? function (e) {
          return Nu.resolve(null).then(e).catch(Id);
        }
      : No;
function Id(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ql(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Bn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Bn(t);
}
function st(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function zu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var cn = Math.random().toString(36).slice(2),
  je = "__reactFiber$" + cn,
  Qn = "__reactProps$" + cn,
  Ye = "__reactContainer$" + cn,
  zo = "__reactEvents$" + cn,
  Md = "__reactListeners$" + cn,
  Dd = "__reactHandles$" + cn;
function Et(e) {
  var t = e[je];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ye] || n[je])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = zu(e); e !== null; ) {
          if ((n = e[je])) return n;
          e = zu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function tr(e) {
  return (
    (e = e[je] || e[Ye]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Bt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function dl(e) {
  return e[Qn] || null;
}
var Lo = [],
  At = -1;
function vt(e) {
  return { current: e };
}
function U(e) {
  0 > At || ((e.current = Lo[At]), (Lo[At] = null), At--);
}
function D(e, t) {
  At++, (Lo[At] = e.current), (e.current = t);
}
var ht = {},
  oe = vt(ht),
  de = vt(!1),
  Nt = ht;
function tn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ht;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function pe(e) {
  return (e = e.childContextTypes), e != null;
}
function Hr() {
  U(de), U(oe);
}
function Lu(e, t, n) {
  if (oe.current !== ht) throw Error(y(168));
  D(oe, t), D(de, n);
}
function Ca(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, wf(e) || "Unknown", l));
  return V({}, n, r);
}
function Qr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ht),
    (Nt = oe.current),
    D(oe, e),
    D(de, de.current),
    !0
  );
}
function Tu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n
    ? ((e = Ca(e, t, Nt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      U(de),
      U(oe),
      D(oe, e))
    : U(de),
    D(de, n);
}
var Ve = null,
  pl = !1,
  Kl = !1;
function Pa(e) {
  Ve === null ? (Ve = [e]) : Ve.push(e);
}
function Fd(e) {
  (pl = !0), Pa(e);
}
function yt() {
  if (!Kl && Ve !== null) {
    Kl = !0;
    var e = 0,
      t = M;
    try {
      var n = Ve;
      for (M = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ve = null), (pl = !1);
    } catch (l) {
      throw (Ve !== null && (Ve = Ve.slice(e + 1)), Zs(ci, yt), l);
    } finally {
      (M = t), (Kl = !1);
    }
  }
  return null;
}
var Vt = [],
  Wt = 0,
  Kr = null,
  Yr = 0,
  Ee = [],
  xe = 0,
  zt = null,
  We = 1,
  He = "";
function St(e, t) {
  (Vt[Wt++] = Yr), (Vt[Wt++] = Kr), (Kr = e), (Yr = t);
}
function _a(e, t, n) {
  (Ee[xe++] = We), (Ee[xe++] = He), (Ee[xe++] = zt), (zt = e);
  var r = We;
  e = He;
  var l = 32 - Ie(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Ie(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (We = (1 << (32 - Ie(t) + l)) | (n << l) | r),
      (He = o + e);
  } else (We = (1 << o) | (n << l) | r), (He = e);
}
function wi(e) {
  e.return !== null && (St(e, 1), _a(e, 1, 0));
}
function Si(e) {
  for (; e === Kr; )
    (Kr = Vt[--Wt]), (Vt[Wt] = null), (Yr = Vt[--Wt]), (Vt[Wt] = null);
  for (; e === zt; )
    (zt = Ee[--xe]),
      (Ee[xe] = null),
      (He = Ee[--xe]),
      (Ee[xe] = null),
      (We = Ee[--xe]),
      (Ee[xe] = null);
}
var ge = null,
  ye = null,
  $ = !1,
  Oe = null;
function Na(e, t) {
  var n = Ce(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ru(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ge = e), (ye = st(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ge = e), (ye = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = zt !== null ? { id: We, overflow: He } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ce(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ge = e),
            (ye = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function To(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ro(e) {
  if ($) {
    var t = ye;
    if (t) {
      var n = t;
      if (!Ru(e, t)) {
        if (To(e)) throw Error(y(418));
        t = st(n.nextSibling);
        var r = ge;
        t && Ru(e, t)
          ? Na(r, n)
          : ((e.flags = (e.flags & -4097) | 2), ($ = !1), (ge = e));
      }
    } else {
      if (To(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), ($ = !1), (ge = e);
    }
  }
}
function Ou(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ge = e;
}
function vr(e) {
  if (e !== ge) return !1;
  if (!$) return Ou(e), ($ = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !_o(e.type, e.memoizedProps))),
    t && (t = ye))
  ) {
    if (To(e)) throw (za(), Error(y(418)));
    for (; t; ) Na(e, t), (t = st(t.nextSibling));
  }
  if ((Ou(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ye = st(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ye = null;
    }
  } else ye = ge ? st(e.stateNode.nextSibling) : null;
  return !0;
}
function za() {
  for (var e = ye; e; ) e = st(e.nextSibling);
}
function nn() {
  (ye = ge = null), ($ = !1);
}
function ki(e) {
  Oe === null ? (Oe = [e]) : Oe.push(e);
}
var Ud = Ze.ReactCurrentBatchConfig;
function Te(e, t) {
  if (e && e.defaultProps) {
    (t = V({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Xr = vt(null),
  Gr = null,
  Ht = null,
  Ei = null;
function xi() {
  Ei = Ht = Gr = null;
}
function Ci(e) {
  var t = Xr.current;
  U(Xr), (e._currentValue = t);
}
function Oo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Jt(e, t) {
  (Gr = e),
    (Ei = Ht = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (fe = !0), (e.firstContext = null));
}
function _e(e) {
  var t = e._currentValue;
  if (Ei !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ht === null)) {
      if (Gr === null) throw Error(y(308));
      (Ht = e), (Gr.dependencies = { lanes: 0, firstContext: e });
    } else Ht = Ht.next = e;
  return t;
}
var xt = null;
function Pi(e) {
  xt === null ? (xt = [e]) : xt.push(e);
}
function La(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Pi(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Xe(e, r)
  );
}
function Xe(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var be = !1;
function _i(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ta(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Qe(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function at(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), I & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Xe(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Pi(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Xe(e, n)
  );
}
function Nr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), fi(e, n);
  }
}
function Iu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Zr(e, t, n, r) {
  var l = e.updateQueue;
  be = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      c = s.next;
    (s.next = null), i === null ? (o = c) : (i.next = c), (i = s);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (u = p.lastBaseUpdate),
      u !== i &&
        (u === null ? (p.firstBaseUpdate = c) : (u.next = c),
        (p.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var m = l.baseState;
    (i = 0), (p = c = s = null), (u = o);
    do {
      var h = u.lane,
        S = u.eventTime;
      if ((r & h) === h) {
        p !== null &&
          (p = p.next =
            {
              eventTime: S,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var w = e,
            g = u;
          switch (((h = t), (S = n), g.tag)) {
            case 1:
              if (((w = g.payload), typeof w == "function")) {
                m = w.call(S, m, h);
                break e;
              }
              m = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = g.payload),
                (h = typeof w == "function" ? w.call(S, m, h) : w),
                h == null)
              )
                break e;
              m = V({}, m, h);
              break e;
            case 2:
              be = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (h = l.effects),
          h === null ? (l.effects = [u]) : h.push(u));
      } else
        (S = {
          eventTime: S,
          lane: h,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          p === null ? ((c = p = S), (s = m)) : (p = p.next = S),
          (i |= h);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (h = u),
          (u = h.next),
          (h.next = null),
          (l.lastBaseUpdate = h),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (p === null && (s = m),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = p),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Tt |= i), (e.lanes = i), (e.memoizedState = m);
  }
}
function Mu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var Ra = new Ls.Component().refs;
function Io(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : V({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var hl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? It(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      l = ft(e),
      o = Qe(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = at(e, o, l)),
      t !== null && (Me(t, e, l, r), Nr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      l = ft(e),
      o = Qe(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = at(e, o, l)),
      t !== null && (Me(t, e, l, r), Nr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ue(),
      r = ft(e),
      l = Qe(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = at(e, l, r)),
      t !== null && (Me(t, e, r, n), Nr(t, e, r));
  },
};
function Du(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Vn(n, r) || !Vn(l, o)
      : !0
  );
}
function Oa(e, t, n) {
  var r = !1,
    l = ht,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = _e(o))
      : ((l = pe(t) ? Nt : oe.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? tn(e, l) : ht)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = hl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Fu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && hl.enqueueReplaceState(t, t.state, null);
}
function Mo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Ra), _i(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = _e(o))
    : ((o = pe(t) ? Nt : oe.current), (l.context = tn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Io(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && hl.enqueueReplaceState(l, l.state, null),
      Zr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function gn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            u === Ra && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function yr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      y(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Uu(e) {
  var t = e._init;
  return t(e._payload);
}
function Ia(e) {
  function t(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
    }
  }
  function n(f, a) {
    if (!e) return null;
    for (; a !== null; ) t(f, a), (a = a.sibling);
    return null;
  }
  function r(f, a) {
    for (f = new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
    return f;
  }
  function l(f, a) {
    return (f = dt(f, a)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, a, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
            : ((f.flags |= 2), a))
        : ((f.flags |= 1048576), a)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, v) {
    return a === null || a.tag !== 6
      ? ((a = bl(d, f.mode, v)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function s(f, a, d, v) {
    var k = d.type;
    return k === Ft
      ? p(f, a, d.props.children, v, d.key)
      : a !== null &&
        (a.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === qe &&
            Uu(k) === a.type))
      ? ((v = l(a, d.props)), (v.ref = gn(f, a, d)), (v.return = f), v)
      : ((v = Ir(d.type, d.key, d.props, null, f.mode, v)),
        (v.ref = gn(f, a, d)),
        (v.return = f),
        v);
  }
  function c(f, a, d, v) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = eo(d, f.mode, v)), (a.return = f), a)
      : ((a = l(a, d.children || [])), (a.return = f), a);
  }
  function p(f, a, d, v, k) {
    return a === null || a.tag !== 7
      ? ((a = _t(d, f.mode, v, k)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function m(f, a, d) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = bl("" + a, f.mode, d)), (a.return = f), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case ir:
          return (
            (d = Ir(a.type, a.key, a.props, null, f.mode, d)),
            (d.ref = gn(f, null, a)),
            (d.return = f),
            d
          );
        case Dt:
          return (a = eo(a, f.mode, d)), (a.return = f), a;
        case qe:
          var v = a._init;
          return m(f, v(a._payload), d);
      }
      if (En(a) || pn(a))
        return (a = _t(a, f.mode, d, null)), (a.return = f), a;
      yr(f, a);
    }
    return null;
  }
  function h(f, a, d, v) {
    var k = a !== null ? a.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return k !== null ? null : u(f, a, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ir:
          return d.key === k ? s(f, a, d, v) : null;
        case Dt:
          return d.key === k ? c(f, a, d, v) : null;
        case qe:
          return (k = d._init), h(f, a, k(d._payload), v);
      }
      if (En(d) || pn(d)) return k !== null ? null : p(f, a, d, v, null);
      yr(f, d);
    }
    return null;
  }
  function S(f, a, d, v, k) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (f = f.get(d) || null), u(a, f, "" + v, k);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case ir:
          return (f = f.get(v.key === null ? d : v.key) || null), s(a, f, v, k);
        case Dt:
          return (f = f.get(v.key === null ? d : v.key) || null), c(a, f, v, k);
        case qe:
          var C = v._init;
          return S(f, a, d, C(v._payload), k);
      }
      if (En(v) || pn(v)) return (f = f.get(d) || null), p(a, f, v, k, null);
      yr(a, v);
    }
    return null;
  }
  function w(f, a, d, v) {
    for (
      var k = null, C = null, P = a, _ = (a = 0), H = null;
      P !== null && _ < d.length;
      _++
    ) {
      P.index > _ ? ((H = P), (P = null)) : (H = P.sibling);
      var O = h(f, P, d[_], v);
      if (O === null) {
        P === null && (P = H);
        break;
      }
      e && P && O.alternate === null && t(f, P),
        (a = o(O, a, _)),
        C === null ? (k = O) : (C.sibling = O),
        (C = O),
        (P = H);
    }
    if (_ === d.length) return n(f, P), $ && St(f, _), k;
    if (P === null) {
      for (; _ < d.length; _++)
        (P = m(f, d[_], v)),
          P !== null &&
            ((a = o(P, a, _)), C === null ? (k = P) : (C.sibling = P), (C = P));
      return $ && St(f, _), k;
    }
    for (P = r(f, P); _ < d.length; _++)
      (H = S(P, f, _, d[_], v)),
        H !== null &&
          (e && H.alternate !== null && P.delete(H.key === null ? _ : H.key),
          (a = o(H, a, _)),
          C === null ? (k = H) : (C.sibling = H),
          (C = H));
    return (
      e &&
        P.forEach(function (ze) {
          return t(f, ze);
        }),
      $ && St(f, _),
      k
    );
  }
  function g(f, a, d, v) {
    var k = pn(d);
    if (typeof k != "function") throw Error(y(150));
    if (((d = k.call(d)), d == null)) throw Error(y(151));
    for (
      var C = (k = null), P = a, _ = (a = 0), H = null, O = d.next();
      P !== null && !O.done;
      _++, O = d.next()
    ) {
      P.index > _ ? ((H = P), (P = null)) : (H = P.sibling);
      var ze = h(f, P, O.value, v);
      if (ze === null) {
        P === null && (P = H);
        break;
      }
      e && P && ze.alternate === null && t(f, P),
        (a = o(ze, a, _)),
        C === null ? (k = ze) : (C.sibling = ze),
        (C = ze),
        (P = H);
    }
    if (O.done) return n(f, P), $ && St(f, _), k;
    if (P === null) {
      for (; !O.done; _++, O = d.next())
        (O = m(f, O.value, v)),
          O !== null &&
            ((a = o(O, a, _)), C === null ? (k = O) : (C.sibling = O), (C = O));
      return $ && St(f, _), k;
    }
    for (P = r(f, P); !O.done; _++, O = d.next())
      (O = S(P, f, _, O.value, v)),
        O !== null &&
          (e && O.alternate !== null && P.delete(O.key === null ? _ : O.key),
          (a = o(O, a, _)),
          C === null ? (k = O) : (C.sibling = O),
          (C = O));
    return (
      e &&
        P.forEach(function (fn) {
          return t(f, fn);
        }),
      $ && St(f, _),
      k
    );
  }
  function N(f, a, d, v) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === Ft &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case ir:
          e: {
            for (var k = d.key, C = a; C !== null; ) {
              if (C.key === k) {
                if (((k = d.type), k === Ft)) {
                  if (C.tag === 7) {
                    n(f, C.sibling),
                      (a = l(C, d.props.children)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                } else if (
                  C.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === qe &&
                    Uu(k) === C.type)
                ) {
                  n(f, C.sibling),
                    (a = l(C, d.props)),
                    (a.ref = gn(f, C, d)),
                    (a.return = f),
                    (f = a);
                  break e;
                }
                n(f, C);
                break;
              } else t(f, C);
              C = C.sibling;
            }
            d.type === Ft
              ? ((a = _t(d.props.children, f.mode, v, d.key)),
                (a.return = f),
                (f = a))
              : ((v = Ir(d.type, d.key, d.props, null, f.mode, v)),
                (v.ref = gn(f, a, d)),
                (v.return = f),
                (f = v));
          }
          return i(f);
        case Dt:
          e: {
            for (C = d.key; a !== null; ) {
              if (a.key === C)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  n(f, a.sibling),
                    (a = l(a, d.children || [])),
                    (a.return = f),
                    (f = a);
                  break e;
                } else {
                  n(f, a);
                  break;
                }
              else t(f, a);
              a = a.sibling;
            }
            (a = eo(d, f.mode, v)), (a.return = f), (f = a);
          }
          return i(f);
        case qe:
          return (C = d._init), N(f, a, C(d._payload), v);
      }
      if (En(d)) return w(f, a, d, v);
      if (pn(d)) return g(f, a, d, v);
      yr(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        a !== null && a.tag === 6
          ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
          : (n(f, a), (a = bl(d, f.mode, v)), (a.return = f), (f = a)),
        i(f))
      : n(f, a);
  }
  return N;
}
var rn = Ia(!0),
  Ma = Ia(!1),
  nr = {},
  Be = vt(nr),
  Kn = vt(nr),
  Yn = vt(nr);
function Ct(e) {
  if (e === nr) throw Error(y(174));
  return e;
}
function Ni(e, t) {
  switch ((D(Yn, t), D(Kn, e), D(Be, nr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : fo(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = fo(t, e));
  }
  U(Be), D(Be, t);
}
function ln() {
  U(Be), U(Kn), U(Yn);
}
function Da(e) {
  Ct(Yn.current);
  var t = Ct(Be.current),
    n = fo(t, e.type);
  t !== n && (D(Kn, e), D(Be, n));
}
function zi(e) {
  Kn.current === e && (U(Be), U(Kn));
}
var B = vt(0);
function Jr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Yl = [];
function Li() {
  for (var e = 0; e < Yl.length; e++)
    Yl[e]._workInProgressVersionPrimary = null;
  Yl.length = 0;
}
var zr = Ze.ReactCurrentDispatcher,
  Xl = Ze.ReactCurrentBatchConfig,
  Lt = 0,
  A = null,
  X = null,
  J = null,
  qr = !1,
  Tn = !1,
  Xn = 0,
  jd = 0;
function ne() {
  throw Error(y(321));
}
function Ti(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!De(e[n], t[n])) return !1;
  return !0;
}
function Ri(e, t, n, r, l, o) {
  if (
    ((Lt = o),
    (A = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (zr.current = e === null || e.memoizedState === null ? Vd : Wd),
    (e = n(r, l)),
    Tn)
  ) {
    o = 0;
    do {
      if (((Tn = !1), (Xn = 0), 25 <= o)) throw Error(y(301));
      (o += 1),
        (J = X = null),
        (t.updateQueue = null),
        (zr.current = Hd),
        (e = n(r, l));
    } while (Tn);
  }
  if (
    ((zr.current = br),
    (t = X !== null && X.next !== null),
    (Lt = 0),
    (J = X = A = null),
    (qr = !1),
    t)
  )
    throw Error(y(300));
  return e;
}
function Oi() {
  var e = Xn !== 0;
  return (Xn = 0), e;
}
function Ue() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return J === null ? (A.memoizedState = J = e) : (J = J.next = e), J;
}
function Ne() {
  if (X === null) {
    var e = A.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var t = J === null ? A.memoizedState : J.next;
  if (t !== null) (J = t), (X = e);
  else {
    if (e === null) throw Error(y(310));
    (X = e),
      (e = {
        memoizedState: X.memoizedState,
        baseState: X.baseState,
        baseQueue: X.baseQueue,
        queue: X.queue,
        next: null,
      }),
      J === null ? (A.memoizedState = J = e) : (J = J.next = e);
  }
  return J;
}
function Gn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Gl(e) {
  var t = Ne(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = X,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      c = o;
    do {
      var p = c.lane;
      if ((Lt & p) === p)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var m = {
          lane: p,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((u = s = m), (i = r)) : (s = s.next = m),
          (A.lanes |= p),
          (Tt |= p);
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? (i = r) : (s.next = u),
      De(r, t.memoizedState) || (fe = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (A.lanes |= o), (Tt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Zl(e) {
  var t = Ne(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    De(o, t.memoizedState) || (fe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Fa() {}
function Ua(e, t) {
  var n = A,
    r = Ne(),
    l = t(),
    o = !De(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (fe = !0)),
    (r = r.queue),
    Ii(Ba.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (J !== null && J.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Zn(9, $a.bind(null, n, r, l, t), void 0, null),
      q === null)
    )
      throw Error(y(349));
    Lt & 30 || ja(n, t, l);
  }
  return l;
}
function ja(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = A.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (A.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function $a(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Aa(t) && Va(e);
}
function Ba(e, t, n) {
  return n(function () {
    Aa(t) && Va(e);
  });
}
function Aa(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !De(e, n);
  } catch {
    return !0;
  }
}
function Va(e) {
  var t = Xe(e, 1);
  t !== null && Me(t, e, 1, -1);
}
function ju(e) {
  var t = Ue();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Gn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Ad.bind(null, A, e)),
    [t.memoizedState, e]
  );
}
function Zn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = A.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (A.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Wa() {
  return Ne().memoizedState;
}
function Lr(e, t, n, r) {
  var l = Ue();
  (A.flags |= e),
    (l.memoizedState = Zn(1 | t, n, void 0, r === void 0 ? null : r));
}
function ml(e, t, n, r) {
  var l = Ne();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (X !== null) {
    var i = X.memoizedState;
    if (((o = i.destroy), r !== null && Ti(r, i.deps))) {
      l.memoizedState = Zn(t, n, o, r);
      return;
    }
  }
  (A.flags |= e), (l.memoizedState = Zn(1 | t, n, o, r));
}
function $u(e, t) {
  return Lr(8390656, 8, e, t);
}
function Ii(e, t) {
  return ml(2048, 8, e, t);
}
function Ha(e, t) {
  return ml(4, 2, e, t);
}
function Qa(e, t) {
  return ml(4, 4, e, t);
}
function Ka(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Ya(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ml(4, 4, Ka.bind(null, t, e), n)
  );
}
function Mi() {}
function Xa(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ti(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ga(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ti(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Za(e, t, n) {
  return Lt & 21
    ? (De(n, t) || ((n = bs()), (A.lanes |= n), (Tt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (fe = !0)), (e.memoizedState = n));
}
function $d(e, t) {
  var n = M;
  (M = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Xl.transition;
  Xl.transition = {};
  try {
    e(!1), t();
  } finally {
    (M = n), (Xl.transition = r);
  }
}
function Ja() {
  return Ne().memoizedState;
}
function Bd(e, t, n) {
  var r = ft(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    qa(e))
  )
    ba(t, n);
  else if (((n = La(e, t, n, r)), n !== null)) {
    var l = ue();
    Me(n, e, r, l), ec(n, t, r);
  }
}
function Ad(e, t, n) {
  var r = ft(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (qa(e)) ba(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), De(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), Pi(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = La(e, t, l, r)),
      n !== null && ((l = ue()), Me(n, e, r, l), ec(n, t, r));
  }
}
function qa(e) {
  var t = e.alternate;
  return e === A || (t !== null && t === A);
}
function ba(e, t) {
  Tn = qr = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function ec(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), fi(e, n);
  }
}
var br = {
    readContext: _e,
    useCallback: ne,
    useContext: ne,
    useEffect: ne,
    useImperativeHandle: ne,
    useInsertionEffect: ne,
    useLayoutEffect: ne,
    useMemo: ne,
    useReducer: ne,
    useRef: ne,
    useState: ne,
    useDebugValue: ne,
    useDeferredValue: ne,
    useTransition: ne,
    useMutableSource: ne,
    useSyncExternalStore: ne,
    useId: ne,
    unstable_isNewReconciler: !1,
  },
  Vd = {
    readContext: _e,
    useCallback: function (e, t) {
      return (Ue().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: _e,
    useEffect: $u,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Lr(4194308, 4, Ka.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Lr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Lr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ue();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ue();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Bd.bind(null, A, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ue();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ju,
    useDebugValue: Mi,
    useDeferredValue: function (e) {
      return (Ue().memoizedState = e);
    },
    useTransition: function () {
      var e = ju(!1),
        t = e[0];
      return (e = $d.bind(null, e[1])), (Ue().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = A,
        l = Ue();
      if ($) {
        if (n === void 0) throw Error(y(407));
        n = n();
      } else {
        if (((n = t()), q === null)) throw Error(y(349));
        Lt & 30 || ja(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        $u(Ba.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Zn(9, $a.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ue(),
        t = q.identifierPrefix;
      if ($) {
        var n = He,
          r = We;
        (n = (r & ~(1 << (32 - Ie(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Xn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = jd++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Wd = {
    readContext: _e,
    useCallback: Xa,
    useContext: _e,
    useEffect: Ii,
    useImperativeHandle: Ya,
    useInsertionEffect: Ha,
    useLayoutEffect: Qa,
    useMemo: Ga,
    useReducer: Gl,
    useRef: Wa,
    useState: function () {
      return Gl(Gn);
    },
    useDebugValue: Mi,
    useDeferredValue: function (e) {
      var t = Ne();
      return Za(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = Gl(Gn)[0],
        t = Ne().memoizedState;
      return [e, t];
    },
    useMutableSource: Fa,
    useSyncExternalStore: Ua,
    useId: Ja,
    unstable_isNewReconciler: !1,
  },
  Hd = {
    readContext: _e,
    useCallback: Xa,
    useContext: _e,
    useEffect: Ii,
    useImperativeHandle: Ya,
    useInsertionEffect: Ha,
    useLayoutEffect: Qa,
    useMemo: Ga,
    useReducer: Zl,
    useRef: Wa,
    useState: function () {
      return Zl(Gn);
    },
    useDebugValue: Mi,
    useDeferredValue: function (e) {
      var t = Ne();
      return X === null ? (t.memoizedState = e) : Za(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = Zl(Gn)[0],
        t = Ne().memoizedState;
      return [e, t];
    },
    useMutableSource: Fa,
    useSyncExternalStore: Ua,
    useId: Ja,
    unstable_isNewReconciler: !1,
  };
function on(e, t) {
  try {
    var n = "",
      r = t;
    do (n += gf(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Jl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Do(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Qd = typeof WeakMap == "function" ? WeakMap : Map;
function tc(e, t, n) {
  (n = Qe(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      tl || ((tl = !0), (Qo = r)), Do(e, t);
    }),
    n
  );
}
function nc(e, t, n) {
  (n = Qe(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Do(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Do(e, t),
          typeof r != "function" &&
            (ct === null ? (ct = new Set([this])) : ct.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Bu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Qd();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = op.bind(null, e, t, n)), t.then(e, e));
}
function Au(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Vu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Qe(-1, 1)), (t.tag = 2), at(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Kd = Ze.ReactCurrentOwner,
  fe = !1;
function ie(e, t, n, r) {
  t.child = e === null ? Ma(t, null, n, r) : rn(t, e.child, n, r);
}
function Wu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    Jt(t, l),
    (r = Ri(e, t, n, r, o, l)),
    (n = Oi()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ge(e, t, l))
      : ($ && n && wi(t), (t.flags |= 1), ie(e, t, r, l), t.child)
  );
}
function Hu(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Vi(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), rc(e, t, o, r, l))
      : ((e = Ir(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Vn), n(i, r) && e.ref === t.ref)
    )
      return Ge(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = dt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function rc(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Vn(o, r) && e.ref === t.ref)
      if (((fe = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (fe = !0);
      else return (t.lanes = e.lanes), Ge(e, t, l);
  }
  return Fo(e, t, n, r, l);
}
function lc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        D(Kt, ve),
        (ve |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          D(Kt, ve),
          (ve |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        D(Kt, ve),
        (ve |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      D(Kt, ve),
      (ve |= r);
  return ie(e, t, l, n), t.child;
}
function oc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Fo(e, t, n, r, l) {
  var o = pe(n) ? Nt : oe.current;
  return (
    (o = tn(t, o)),
    Jt(t, l),
    (n = Ri(e, t, n, r, o, l)),
    (r = Oi()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ge(e, t, l))
      : ($ && r && wi(t), (t.flags |= 1), ie(e, t, n, l), t.child)
  );
}
function Qu(e, t, n, r, l) {
  if (pe(n)) {
    var o = !0;
    Qr(t);
  } else o = !1;
  if ((Jt(t, l), t.stateNode === null))
    Tr(e, t), Oa(t, n, r), Mo(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = _e(c))
      : ((c = pe(n) ? Nt : oe.current), (c = tn(t, c)));
    var p = n.getDerivedStateFromProps,
      m =
        typeof p == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || s !== c) && Fu(t, i, r, c)),
      (be = !1);
    var h = t.memoizedState;
    (i.state = h),
      Zr(t, r, i, l),
      (s = t.memoizedState),
      u !== r || h !== s || de.current || be
        ? (typeof p == "function" && (Io(t, n, p, r), (s = t.memoizedState)),
          (u = be || Du(t, n, u, r, h, s, c))
            ? (m ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = c),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Ta(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : Te(t.type, u)),
      (i.props = c),
      (m = t.pendingProps),
      (h = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = _e(s))
        : ((s = pe(n) ? Nt : oe.current), (s = tn(t, s)));
    var S = n.getDerivedStateFromProps;
    (p =
      typeof S == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== m || h !== s) && Fu(t, i, r, s)),
      (be = !1),
      (h = t.memoizedState),
      (i.state = h),
      Zr(t, r, i, l);
    var w = t.memoizedState;
    u !== m || h !== w || de.current || be
      ? (typeof S == "function" && (Io(t, n, S, r), (w = t.memoizedState)),
        (c = be || Du(t, n, c, r, h, w, s) || !1)
          ? (p ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = s),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Uo(e, t, n, r, o, l);
}
function Uo(e, t, n, r, l, o) {
  oc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Tu(t, n, !1), Ge(e, t, o);
  (r = t.stateNode), (Kd.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = rn(t, e.child, null, o)), (t.child = rn(t, null, u, o)))
      : ie(e, t, u, o),
    (t.memoizedState = r.state),
    l && Tu(t, n, !0),
    t.child
  );
}
function ic(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Lu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Lu(e, t.context, !1),
    Ni(e, t.containerInfo);
}
function Ku(e, t, n, r, l) {
  return nn(), ki(l), (t.flags |= 256), ie(e, t, n, r), t.child;
}
var jo = { dehydrated: null, treeContext: null, retryLane: 0 };
function $o(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function uc(e, t, n) {
  var r = t.pendingProps,
    l = B.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    D(B, l & 1),
    e === null)
  )
    return (
      Ro(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = gl(i, r, 0, null)),
              (e = _t(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = $o(n)),
              (t.memoizedState = jo),
              e)
            : Di(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Yd(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = dt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = dt(u, o)) : ((o = _t(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? $o(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = jo),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = dt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Di(e, t) {
  return (
    (t = gl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function gr(e, t, n, r) {
  return (
    r !== null && ki(r),
    rn(t, e.child, null, n),
    (e = Di(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Yd(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Jl(Error(y(422)))), gr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = gl({ mode: "visible", children: r.children }, l, 0, null)),
        (o = _t(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && rn(t, e.child, null, i),
        (t.child.memoizedState = $o(i)),
        (t.memoizedState = jo),
        o);
  if (!(t.mode & 1)) return gr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(y(419))), (r = Jl(o, r, void 0)), gr(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), fe || u)) {
    if (((r = q), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Xe(e, l), Me(r, e, l, -1));
    }
    return Ai(), (r = Jl(Error(y(421)))), gr(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = ip.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (ye = st(l.nextSibling)),
      (ge = t),
      ($ = !0),
      (Oe = null),
      e !== null &&
        ((Ee[xe++] = We),
        (Ee[xe++] = He),
        (Ee[xe++] = zt),
        (We = e.id),
        (He = e.overflow),
        (zt = t)),
      (t = Di(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Yu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Oo(e.return, t, n);
}
function ql(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function sc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((ie(e, t, r.children, n), (r = B.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Yu(e, n, t);
        else if (e.tag === 19) Yu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((D(B, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Jr(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ql(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Jr(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        ql(t, !0, n, null, o);
        break;
      case "together":
        ql(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Tr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ge(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Tt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (
      e = t.child, n = dt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = dt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Xd(e, t, n) {
  switch (t.tag) {
    case 3:
      ic(t), nn();
      break;
    case 5:
      Da(t);
      break;
    case 1:
      pe(t.type) && Qr(t);
      break;
    case 4:
      Ni(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      D(Xr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (D(B, B.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? uc(e, t, n)
          : (D(B, B.current & 1),
            (e = Ge(e, t, n)),
            e !== null ? e.sibling : null);
      D(B, B.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return sc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        D(B, B.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), lc(e, t, n);
  }
  return Ge(e, t, n);
}
var ac, Bo, cc, fc;
ac = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Bo = function () {};
cc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Ct(Be.current);
    var o = null;
    switch (n) {
      case "input":
        (l = uo(e, l)), (r = uo(e, r)), (o = []);
        break;
      case "select":
        (l = V({}, l, { value: void 0 })),
          (r = V({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = co(e, l)), (r = co(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Wr);
    }
    po(n, r);
    var i;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var u = l[c];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Dn.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((u = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== u && (s != null || u != null))
      )
        if (c === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(c, n)), (n = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(c, s))
            : c === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(c, "" + s)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Dn.hasOwnProperty(c)
                ? (s != null && c === "onScroll" && F("scroll", e),
                  o || u === s || (o = []))
                : (o = o || []).push(c, s));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
fc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function wn(e, t) {
  if (!$)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function re(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Gd(e, t, n) {
  var r = t.pendingProps;
  switch ((Si(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return re(t), null;
    case 1:
      return pe(t.type) && Hr(), re(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ln(),
        U(de),
        U(oe),
        Li(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (vr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Oe !== null && (Xo(Oe), (Oe = null)))),
        Bo(e, t),
        re(t),
        null
      );
    case 5:
      zi(t);
      var l = Ct(Yn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        cc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return re(t), null;
        }
        if (((e = Ct(Be.current)), vr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[je] = t), (r[Qn] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              F("cancel", r), F("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              F("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Cn.length; l++) F(Cn[l], r);
              break;
            case "source":
              F("error", r);
              break;
            case "img":
            case "image":
            case "link":
              F("error", r), F("load", r);
              break;
            case "details":
              F("toggle", r);
              break;
            case "input":
              nu(r, o), F("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                F("invalid", r);
              break;
            case "textarea":
              lu(r, o), F("invalid", r);
          }
          po(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      mr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      mr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Dn.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  F("scroll", r);
            }
          switch (n) {
            case "input":
              ur(r), ru(r, o, !0);
              break;
            case "textarea":
              ur(r), ou(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Wr);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = js(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[je] = t),
            (e[Qn] = r),
            ac(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = ho(n, r)), n)) {
              case "dialog":
                F("cancel", e), F("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                F("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Cn.length; l++) F(Cn[l], e);
                l = r;
                break;
              case "source":
                F("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                F("error", e), F("load", e), (l = r);
                break;
              case "details":
                F("toggle", e), (l = r);
                break;
              case "input":
                nu(e, r), (l = uo(e, r)), F("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = V({}, r, { value: void 0 })),
                  F("invalid", e);
                break;
              case "textarea":
                lu(e, r), (l = co(e, r)), F("invalid", e);
                break;
              default:
                l = r;
            }
            po(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style"
                  ? As(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && $s(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Fn(e, s)
                    : typeof s == "number" && Fn(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Dn.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && F("scroll", e)
                      : s != null && oi(e, o, s, i));
              }
            switch (n) {
              case "input":
                ur(e), ru(e, r, !1);
                break;
              case "textarea":
                ur(e), ou(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + pt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Yt(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Yt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Wr);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return re(t), null;
    case 6:
      if (e && t.stateNode != null) fc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        if (((n = Ct(Yn.current)), Ct(Be.current), vr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[je] = t),
            (o = r.nodeValue !== n) && ((e = ge), e !== null))
          )
            switch (e.tag) {
              case 3:
                mr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  mr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[je] = t),
            (t.stateNode = r);
      }
      return re(t), null;
    case 13:
      if (
        (U(B),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if ($ && ye !== null && t.mode & 1 && !(t.flags & 128))
          za(), nn(), (t.flags |= 98560), (o = !1);
        else if (((o = vr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(y(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(y(317));
            o[je] = t;
          } else
            nn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          re(t), (o = !1);
        } else Oe !== null && (Xo(Oe), (Oe = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || B.current & 1 ? G === 0 && (G = 3) : Ai())),
          t.updateQueue !== null && (t.flags |= 4),
          re(t),
          null);
    case 4:
      return (
        ln(), Bo(e, t), e === null && Wn(t.stateNode.containerInfo), re(t), null
      );
    case 10:
      return Ci(t.type._context), re(t), null;
    case 17:
      return pe(t.type) && Hr(), re(t), null;
    case 19:
      if ((U(B), (o = t.memoizedState), o === null)) return re(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) wn(o, !1);
        else {
          if (G !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Jr(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    wn(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return D(B, (B.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            K() > un &&
            ((t.flags |= 128), (r = !0), wn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Jr(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              wn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !$)
            )
              return re(t), null;
          } else
            2 * K() - o.renderingStartTime > un &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), wn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = K()),
          (t.sibling = null),
          (n = B.current),
          D(B, r ? (n & 1) | 2 : n & 1),
          t)
        : (re(t), null);
    case 22:
    case 23:
      return (
        Bi(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ve & 1073741824 && (re(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : re(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function Zd(e, t) {
  switch ((Si(t), t.tag)) {
    case 1:
      return (
        pe(t.type) && Hr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ln(),
        U(de),
        U(oe),
        Li(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return zi(t), null;
    case 13:
      if ((U(B), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(y(340));
        nn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return U(B), null;
    case 4:
      return ln(), null;
    case 10:
      return Ci(t.type._context), null;
    case 22:
    case 23:
      return Bi(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var wr = !1,
  le = !1,
  Jd = typeof WeakSet == "function" ? WeakSet : Set,
  E = null;
function Qt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        W(e, t, r);
      }
    else n.current = null;
}
function Ao(e, t, n) {
  try {
    n();
  } catch (r) {
    W(e, t, r);
  }
}
var Xu = !1;
function qd(e, t) {
  if (((Co = Br), (e = ma()), gi(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            c = 0,
            p = 0,
            m = e,
            h = null;
          t: for (;;) {
            for (
              var S;
              m !== n || (l !== 0 && m.nodeType !== 3) || (u = i + l),
                m !== o || (r !== 0 && m.nodeType !== 3) || (s = i + r),
                m.nodeType === 3 && (i += m.nodeValue.length),
                (S = m.firstChild) !== null;

            )
              (h = m), (m = S);
            for (;;) {
              if (m === e) break t;
              if (
                (h === n && ++c === l && (u = i),
                h === o && ++p === r && (s = i),
                (S = m.nextSibling) !== null)
              )
                break;
              (m = h), (h = m.parentNode);
            }
            m = S;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Po = { focusedElem: e, selectionRange: n }, Br = !1, E = t; E !== null; )
    if (((t = E), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (E = e);
    else
      for (; E !== null; ) {
        t = E;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var g = w.memoizedProps,
                    N = w.memoizedState,
                    f = t.stateNode,
                    a = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : Te(t.type, g),
                      N
                    );
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (v) {
          W(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (E = e);
          break;
        }
        E = t.return;
      }
  return (w = Xu), (Xu = !1), w;
}
function Rn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Ao(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function vl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Vo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function dc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), dc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[je], delete t[Qn], delete t[zo], delete t[Md], delete t[Dd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function pc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Gu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || pc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Wo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Wr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Wo(e, t, n), e = e.sibling; e !== null; ) Wo(e, t, n), (e = e.sibling);
}
function Ho(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ho(e, t, n), e = e.sibling; e !== null; ) Ho(e, t, n), (e = e.sibling);
}
var b = null,
  Re = !1;
function Je(e, t, n) {
  for (n = n.child; n !== null; ) hc(e, t, n), (n = n.sibling);
}
function hc(e, t, n) {
  if ($e && typeof $e.onCommitFiberUnmount == "function")
    try {
      $e.onCommitFiberUnmount(sl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      le || Qt(n, t);
    case 6:
      var r = b,
        l = Re;
      (b = null),
        Je(e, t, n),
        (b = r),
        (Re = l),
        b !== null &&
          (Re
            ? ((e = b),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : b.removeChild(n.stateNode));
      break;
    case 18:
      b !== null &&
        (Re
          ? ((e = b),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ql(e.parentNode, n)
              : e.nodeType === 1 && Ql(e, n),
            Bn(e))
          : Ql(b, n.stateNode));
      break;
    case 4:
      (r = b),
        (l = Re),
        (b = n.stateNode.containerInfo),
        (Re = !0),
        Je(e, t, n),
        (b = r),
        (Re = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !le &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Ao(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      Je(e, t, n);
      break;
    case 1:
      if (
        !le &&
        (Qt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          W(n, t, u);
        }
      Je(e, t, n);
      break;
    case 21:
      Je(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((le = (r = le) || n.memoizedState !== null), Je(e, t, n), (le = r))
        : Je(e, t, n);
      break;
    default:
      Je(e, t, n);
  }
}
function Zu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Jd()),
      t.forEach(function (r) {
        var l = up.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Le(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (b = u.stateNode), (Re = !1);
              break e;
            case 3:
              (b = u.stateNode.containerInfo), (Re = !0);
              break e;
            case 4:
              (b = u.stateNode.containerInfo), (Re = !0);
              break e;
          }
          u = u.return;
        }
        if (b === null) throw Error(y(160));
        hc(o, i, l), (b = null), (Re = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        W(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) mc(t, e), (t = t.sibling);
}
function mc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Le(t, e), Fe(e), r & 4)) {
        try {
          Rn(3, e, e.return), vl(3, e);
        } catch (g) {
          W(e, e.return, g);
        }
        try {
          Rn(5, e, e.return);
        } catch (g) {
          W(e, e.return, g);
        }
      }
      break;
    case 1:
      Le(t, e), Fe(e), r & 512 && n !== null && Qt(n, n.return);
      break;
    case 5:
      if (
        (Le(t, e),
        Fe(e),
        r & 512 && n !== null && Qt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Fn(l, "");
        } catch (g) {
          W(e, e.return, g);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && Fs(l, o),
              ho(u, i);
            var c = ho(u, o);
            for (i = 0; i < s.length; i += 2) {
              var p = s[i],
                m = s[i + 1];
              p === "style"
                ? As(l, m)
                : p === "dangerouslySetInnerHTML"
                ? $s(l, m)
                : p === "children"
                ? Fn(l, m)
                : oi(l, p, m, c);
            }
            switch (u) {
              case "input":
                so(l, o);
                break;
              case "textarea":
                Us(l, o);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var S = o.value;
                S != null
                  ? Yt(l, !!o.multiple, S, !1)
                  : h !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Yt(l, !!o.multiple, o.defaultValue, !0)
                      : Yt(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Qn] = o;
          } catch (g) {
            W(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((Le(t, e), Fe(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (g) {
          W(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (Le(t, e), Fe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Bn(t.containerInfo);
        } catch (g) {
          W(e, e.return, g);
        }
      break;
    case 4:
      Le(t, e), Fe(e);
      break;
    case 13:
      Le(t, e),
        Fe(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (ji = K())),
        r & 4 && Zu(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((le = (c = le) || p), Le(t, e), (le = c)) : Le(t, e),
        Fe(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !p && e.mode & 1)
        )
          for (E = e, p = e.child; p !== null; ) {
            for (m = E = p; E !== null; ) {
              switch (((h = E), (S = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Rn(4, h, h.return);
                  break;
                case 1:
                  Qt(h, h.return);
                  var w = h.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (g) {
                      W(r, n, g);
                    }
                  }
                  break;
                case 5:
                  Qt(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    qu(m);
                    continue;
                  }
              }
              S !== null ? ((S.return = h), (E = S)) : qu(m);
            }
            p = p.sibling;
          }
        e: for (p = null, m = e; ; ) {
          if (m.tag === 5) {
            if (p === null) {
              p = m;
              try {
                (l = m.stateNode),
                  c
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = m.stateNode),
                      (s = m.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = Bs("display", i)));
              } catch (g) {
                W(e, e.return, g);
              }
            }
          } else if (m.tag === 6) {
            if (p === null)
              try {
                m.stateNode.nodeValue = c ? "" : m.memoizedProps;
              } catch (g) {
                W(e, e.return, g);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            p === m && (p = null), (m = m.return);
          }
          p === m && (p = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Le(t, e), Fe(e), r & 4 && Zu(e);
      break;
    case 21:
      break;
    default:
      Le(t, e), Fe(e);
  }
}
function Fe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (pc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Fn(l, ""), (r.flags &= -33));
          var o = Gu(e);
          Ho(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = Gu(e);
          Wo(e, u, i);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      W(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function bd(e, t, n) {
  (E = e), vc(e);
}
function vc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; E !== null; ) {
    var l = E,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || wr;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || le;
        u = wr;
        var c = le;
        if (((wr = i), (le = s) && !c))
          for (E = l; E !== null; )
            (i = E),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? bu(l)
                : s !== null
                ? ((s.return = i), (E = s))
                : bu(l);
        for (; o !== null; ) (E = o), vc(o), (o = o.sibling);
        (E = l), (wr = u), (le = c);
      }
      Ju(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (E = o)) : Ju(e);
  }
}
function Ju(e) {
  for (; E !== null; ) {
    var t = E;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              le || vl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !le)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Te(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Mu(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Mu(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var p = c.memoizedState;
                  if (p !== null) {
                    var m = p.dehydrated;
                    m !== null && Bn(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        le || (t.flags & 512 && Vo(t));
      } catch (h) {
        W(t, t.return, h);
      }
    }
    if (t === e) {
      E = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (E = n);
      break;
    }
    E = t.return;
  }
}
function qu(e) {
  for (; E !== null; ) {
    var t = E;
    if (t === e) {
      E = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (E = n);
      break;
    }
    E = t.return;
  }
}
function bu(e) {
  for (; E !== null; ) {
    var t = E;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            vl(4, t);
          } catch (s) {
            W(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              W(t, l, s);
            }
          }
          var o = t.return;
          try {
            Vo(t);
          } catch (s) {
            W(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Vo(t);
          } catch (s) {
            W(t, i, s);
          }
      }
    } catch (s) {
      W(t, t.return, s);
    }
    if (t === e) {
      E = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (E = u);
      break;
    }
    E = t.return;
  }
}
var ep = Math.ceil,
  el = Ze.ReactCurrentDispatcher,
  Fi = Ze.ReactCurrentOwner,
  Pe = Ze.ReactCurrentBatchConfig,
  I = 0,
  q = null,
  Y = null,
  ee = 0,
  ve = 0,
  Kt = vt(0),
  G = 0,
  Jn = null,
  Tt = 0,
  yl = 0,
  Ui = 0,
  On = null,
  ce = null,
  ji = 0,
  un = 1 / 0,
  Ae = null,
  tl = !1,
  Qo = null,
  ct = null,
  Sr = !1,
  rt = null,
  nl = 0,
  In = 0,
  Ko = null,
  Rr = -1,
  Or = 0;
function ue() {
  return I & 6 ? K() : Rr !== -1 ? Rr : (Rr = K());
}
function ft(e) {
  return e.mode & 1
    ? I & 2 && ee !== 0
      ? ee & -ee
      : Ud.transition !== null
      ? (Or === 0 && (Or = bs()), Or)
      : ((e = M),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ia(e.type))),
        e)
    : 1;
}
function Me(e, t, n, r) {
  if (50 < In) throw ((In = 0), (Ko = null), Error(y(185)));
  bn(e, n, r),
    (!(I & 2) || e !== q) &&
      (e === q && (!(I & 2) && (yl |= n), G === 4 && tt(e, ee)),
      he(e, r),
      n === 1 && I === 0 && !(t.mode & 1) && ((un = K() + 500), pl && yt()));
}
function he(e, t) {
  var n = e.callbackNode;
  Uf(e, t);
  var r = $r(e, e === q ? ee : 0);
  if (r === 0)
    n !== null && su(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && su(n), t === 1))
      e.tag === 0 ? Fd(es.bind(null, e)) : Pa(es.bind(null, e)),
        Od(function () {
          !(I & 6) && yt();
        }),
        (n = null);
    else {
      switch (ea(r)) {
        case 1:
          n = ci;
          break;
        case 4:
          n = Js;
          break;
        case 16:
          n = jr;
          break;
        case 536870912:
          n = qs;
          break;
        default:
          n = jr;
      }
      n = Cc(n, yc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function yc(e, t) {
  if (((Rr = -1), (Or = 0), I & 6)) throw Error(y(327));
  var n = e.callbackNode;
  if (qt() && e.callbackNode !== n) return null;
  var r = $r(e, e === q ? ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = rl(e, r);
  else {
    t = r;
    var l = I;
    I |= 2;
    var o = wc();
    (q !== e || ee !== t) && ((Ae = null), (un = K() + 500), Pt(e, t));
    do
      try {
        rp();
        break;
      } catch (u) {
        gc(e, u);
      }
    while (1);
    xi(),
      (el.current = o),
      (I = l),
      Y !== null ? (t = 0) : ((q = null), (ee = 0), (t = G));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = wo(e)), l !== 0 && ((r = l), (t = Yo(e, l)))), t === 1)
    )
      throw ((n = Jn), Pt(e, 0), tt(e, r), he(e, K()), n);
    if (t === 6) tt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !tp(l) &&
          ((t = rl(e, r)),
          t === 2 && ((o = wo(e)), o !== 0 && ((r = o), (t = Yo(e, o)))),
          t === 1))
      )
        throw ((n = Jn), Pt(e, 0), tt(e, r), he(e, K()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          kt(e, ce, Ae);
          break;
        case 3:
          if (
            (tt(e, r), (r & 130023424) === r && ((t = ji + 500 - K()), 10 < t))
          ) {
            if ($r(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ue(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = No(kt.bind(null, e, ce, Ae), t);
            break;
          }
          kt(e, ce, Ae);
          break;
        case 4:
          if ((tt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Ie(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = K() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * ep(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = No(kt.bind(null, e, ce, Ae), r);
            break;
          }
          kt(e, ce, Ae);
          break;
        case 5:
          kt(e, ce, Ae);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return he(e, K()), e.callbackNode === n ? yc.bind(null, e) : null;
}
function Yo(e, t) {
  var n = On;
  return (
    e.current.memoizedState.isDehydrated && (Pt(e, t).flags |= 256),
    (e = rl(e, t)),
    e !== 2 && ((t = ce), (ce = n), t !== null && Xo(t)),
    e
  );
}
function Xo(e) {
  ce === null ? (ce = e) : ce.push.apply(ce, e);
}
function tp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!De(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function tt(e, t) {
  for (
    t &= ~Ui,
      t &= ~yl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ie(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function es(e) {
  if (I & 6) throw Error(y(327));
  qt();
  var t = $r(e, 0);
  if (!(t & 1)) return he(e, K()), null;
  var n = rl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = wo(e);
    r !== 0 && ((t = r), (n = Yo(e, r)));
  }
  if (n === 1) throw ((n = Jn), Pt(e, 0), tt(e, t), he(e, K()), n);
  if (n === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    kt(e, ce, Ae),
    he(e, K()),
    null
  );
}
function $i(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    (I = n), I === 0 && ((un = K() + 500), pl && yt());
  }
}
function Rt(e) {
  rt !== null && rt.tag === 0 && !(I & 6) && qt();
  var t = I;
  I |= 1;
  var n = Pe.transition,
    r = M;
  try {
    if (((Pe.transition = null), (M = 1), e)) return e();
  } finally {
    (M = r), (Pe.transition = n), (I = t), !(I & 6) && yt();
  }
}
function Bi() {
  (ve = Kt.current), U(Kt);
}
function Pt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Rd(n)), Y !== null))
    for (n = Y.return; n !== null; ) {
      var r = n;
      switch ((Si(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Hr();
          break;
        case 3:
          ln(), U(de), U(oe), Li();
          break;
        case 5:
          zi(r);
          break;
        case 4:
          ln();
          break;
        case 13:
          U(B);
          break;
        case 19:
          U(B);
          break;
        case 10:
          Ci(r.type._context);
          break;
        case 22:
        case 23:
          Bi();
      }
      n = n.return;
    }
  if (
    ((q = e),
    (Y = e = dt(e.current, null)),
    (ee = ve = t),
    (G = 0),
    (Jn = null),
    (Ui = yl = Tt = 0),
    (ce = On = null),
    xt !== null)
  ) {
    for (t = 0; t < xt.length; t++)
      if (((n = xt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    xt = null;
  }
  return e;
}
function gc(e, t) {
  do {
    var n = Y;
    try {
      if ((xi(), (zr.current = br), qr)) {
        for (var r = A.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        qr = !1;
      }
      if (
        ((Lt = 0),
        (J = X = A = null),
        (Tn = !1),
        (Xn = 0),
        (Fi.current = null),
        n === null || n.return === null)
      ) {
        (G = 1), (Jn = t), (Y = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = ee),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            p = u,
            m = p.tag;
          if (!(p.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var h = p.alternate;
            h
              ? ((p.updateQueue = h.updateQueue),
                (p.memoizedState = h.memoizedState),
                (p.lanes = h.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var S = Au(i);
          if (S !== null) {
            (S.flags &= -257),
              Vu(S, i, u, o, t),
              S.mode & 1 && Bu(o, c, t),
              (t = S),
              (s = c);
            var w = t.updateQueue;
            if (w === null) {
              var g = new Set();
              g.add(s), (t.updateQueue = g);
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Bu(o, c, t), Ai();
              break e;
            }
            s = Error(y(426));
          }
        } else if ($ && u.mode & 1) {
          var N = Au(i);
          if (N !== null) {
            !(N.flags & 65536) && (N.flags |= 256),
              Vu(N, i, u, o, t),
              ki(on(s, u));
            break e;
          }
        }
        (o = s = on(s, u)),
          G !== 4 && (G = 2),
          On === null ? (On = [o]) : On.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = tc(o, s, t);
              Iu(o, f);
              break e;
            case 1:
              u = s;
              var a = o.type,
                d = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (ct === null || !ct.has(d))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var v = nc(o, u, t);
                Iu(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      kc(n);
    } catch (k) {
      (t = k), Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function wc() {
  var e = el.current;
  return (el.current = br), e === null ? br : e;
}
function Ai() {
  (G === 0 || G === 3 || G === 2) && (G = 4),
    q === null || (!(Tt & 268435455) && !(yl & 268435455)) || tt(q, ee);
}
function rl(e, t) {
  var n = I;
  I |= 2;
  var r = wc();
  (q !== e || ee !== t) && ((Ae = null), Pt(e, t));
  do
    try {
      np();
      break;
    } catch (l) {
      gc(e, l);
    }
  while (1);
  if ((xi(), (I = n), (el.current = r), Y !== null)) throw Error(y(261));
  return (q = null), (ee = 0), G;
}
function np() {
  for (; Y !== null; ) Sc(Y);
}
function rp() {
  for (; Y !== null && !zf(); ) Sc(Y);
}
function Sc(e) {
  var t = xc(e.alternate, e, ve);
  (e.memoizedProps = e.pendingProps),
    t === null ? kc(e) : (Y = t),
    (Fi.current = null);
}
function kc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Zd(n, t)), n !== null)) {
        (n.flags &= 32767), (Y = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (G = 6), (Y = null);
        return;
      }
    } else if (((n = Gd(n, t, ve)), n !== null)) {
      Y = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  G === 0 && (G = 5);
}
function kt(e, t, n) {
  var r = M,
    l = Pe.transition;
  try {
    (Pe.transition = null), (M = 1), lp(e, t, n, r);
  } finally {
    (Pe.transition = l), (M = r);
  }
  return null;
}
function lp(e, t, n, r) {
  do qt();
  while (rt !== null);
  if (I & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (jf(e, o),
    e === q && ((Y = q = null), (ee = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Sr ||
      ((Sr = !0),
      Cc(jr, function () {
        return qt(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Pe.transition), (Pe.transition = null);
    var i = M;
    M = 1;
    var u = I;
    (I |= 4),
      (Fi.current = null),
      qd(e, n),
      mc(n, e),
      Cd(Po),
      (Br = !!Co),
      (Po = Co = null),
      (e.current = n),
      bd(n),
      Lf(),
      (I = u),
      (M = i),
      (Pe.transition = o);
  } else e.current = n;
  if (
    (Sr && ((Sr = !1), (rt = e), (nl = l)),
    (o = e.pendingLanes),
    o === 0 && (ct = null),
    Of(n.stateNode),
    he(e, K()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (tl) throw ((tl = !1), (e = Qo), (Qo = null), e);
  return (
    nl & 1 && e.tag !== 0 && qt(),
    (o = e.pendingLanes),
    o & 1 ? (e === Ko ? In++ : ((In = 0), (Ko = e))) : (In = 0),
    yt(),
    null
  );
}
function qt() {
  if (rt !== null) {
    var e = ea(nl),
      t = Pe.transition,
      n = M;
    try {
      if (((Pe.transition = null), (M = 16 > e ? 16 : e), rt === null))
        var r = !1;
      else {
        if (((e = rt), (rt = null), (nl = 0), I & 6)) throw Error(y(331));
        var l = I;
        for (I |= 4, E = e.current; E !== null; ) {
          var o = E,
            i = o.child;
          if (E.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (E = c; E !== null; ) {
                  var p = E;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rn(8, p, o);
                  }
                  var m = p.child;
                  if (m !== null) (m.return = p), (E = m);
                  else
                    for (; E !== null; ) {
                      p = E;
                      var h = p.sibling,
                        S = p.return;
                      if ((dc(p), p === c)) {
                        E = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = S), (E = h);
                        break;
                      }
                      E = S;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var g = w.child;
                if (g !== null) {
                  w.child = null;
                  do {
                    var N = g.sibling;
                    (g.sibling = null), (g = N);
                  } while (g !== null);
                }
              }
              E = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (E = i);
          else
            e: for (; E !== null; ) {
              if (((o = E), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Rn(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (E = f);
                break e;
              }
              E = o.return;
            }
        }
        var a = e.current;
        for (E = a; E !== null; ) {
          i = E;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) (d.return = i), (E = d);
          else
            e: for (i = a; E !== null; ) {
              if (((u = E), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vl(9, u);
                  }
                } catch (k) {
                  W(u, u.return, k);
                }
              if (u === i) {
                E = null;
                break e;
              }
              var v = u.sibling;
              if (v !== null) {
                (v.return = u.return), (E = v);
                break e;
              }
              E = u.return;
            }
        }
        if (
          ((I = l), yt(), $e && typeof $e.onPostCommitFiberRoot == "function")
        )
          try {
            $e.onPostCommitFiberRoot(sl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (M = n), (Pe.transition = t);
    }
  }
  return !1;
}
function ts(e, t, n) {
  (t = on(n, t)),
    (t = tc(e, t, 1)),
    (e = at(e, t, 1)),
    (t = ue()),
    e !== null && (bn(e, 1, t), he(e, t));
}
function W(e, t, n) {
  if (e.tag === 3) ts(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ts(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ct === null || !ct.has(r)))
        ) {
          (e = on(n, e)),
            (e = nc(t, e, 1)),
            (t = at(t, e, 1)),
            (e = ue()),
            t !== null && (bn(t, 1, e), he(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function op(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ue()),
    (e.pingedLanes |= e.suspendedLanes & n),
    q === e &&
      (ee & n) === n &&
      (G === 4 || (G === 3 && (ee & 130023424) === ee && 500 > K() - ji)
        ? Pt(e, 0)
        : (Ui |= n)),
    he(e, t);
}
function Ec(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = cr), (cr <<= 1), !(cr & 130023424) && (cr = 4194304))
      : (t = 1));
  var n = ue();
  (e = Xe(e, t)), e !== null && (bn(e, t, n), he(e, n));
}
function ip(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Ec(e, n);
}
function up(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(t), Ec(e, n);
}
var xc;
xc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || de.current) fe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (fe = !1), Xd(e, t, n);
      fe = !!(e.flags & 131072);
    }
  else (fe = !1), $ && t.flags & 1048576 && _a(t, Yr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Tr(e, t), (e = t.pendingProps);
      var l = tn(t, oe.current);
      Jt(t, n), (l = Ri(null, t, r, e, l, n));
      var o = Oi();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            pe(r) ? ((o = !0), Qr(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            _i(t),
            (l.updater = hl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Mo(t, r, e, n),
            (t = Uo(null, t, r, !0, o, n)))
          : ((t.tag = 0), $ && o && wi(t), ie(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Tr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = ap(r)),
          (e = Te(r, e)),
          l)
        ) {
          case 0:
            t = Fo(null, t, r, e, n);
            break e;
          case 1:
            t = Qu(null, t, r, e, n);
            break e;
          case 11:
            t = Wu(null, t, r, e, n);
            break e;
          case 14:
            t = Hu(null, t, r, Te(r.type, e), n);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Fo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Qu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((ic(t), e === null)) throw Error(y(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Ta(e, t),
          Zr(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = on(Error(y(423)), t)), (t = Ku(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = on(Error(y(424)), t)), (t = Ku(e, t, r, n, l));
            break e;
          } else
            for (
              ye = st(t.stateNode.containerInfo.firstChild),
                ge = t,
                $ = !0,
                Oe = null,
                n = Ma(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((nn(), r === l)) {
            t = Ge(e, t, n);
            break e;
          }
          ie(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Da(t),
        e === null && Ro(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        _o(r, l) ? (i = null) : o !== null && _o(r, o) && (t.flags |= 32),
        oc(e, t),
        ie(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Ro(t), null;
    case 13:
      return uc(e, t, n);
    case 4:
      return (
        Ni(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = rn(t, null, r, n)) : ie(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Wu(e, t, r, l, n)
      );
    case 7:
      return ie(e, t, t.pendingProps, n), t.child;
    case 8:
      return ie(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ie(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          D(Xr, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (De(o.value, i)) {
            if (o.children === l.children && !de.current) {
              t = Ge(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = Qe(-1, n & -n)), (s.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var p = c.pending;
                        p === null
                          ? (s.next = s)
                          : ((s.next = p.next), (p.next = s)),
                          (c.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      Oo(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(y(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  Oo(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        ie(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Jt(t, n),
        (l = _e(l)),
        (r = r(l)),
        (t.flags |= 1),
        ie(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Te(r, t.pendingProps)),
        (l = Te(r.type, l)),
        Hu(e, t, r, l, n)
      );
    case 15:
      return rc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Tr(e, t),
        (t.tag = 1),
        pe(r) ? ((e = !0), Qr(t)) : (e = !1),
        Jt(t, n),
        Oa(t, r, l),
        Mo(t, r, l, n),
        Uo(null, t, r, !0, e, n)
      );
    case 19:
      return sc(e, t, n);
    case 22:
      return lc(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function Cc(e, t) {
  return Zs(e, t);
}
function sp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ce(e, t, n, r) {
  return new sp(e, t, n, r);
}
function Vi(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function ap(e) {
  if (typeof e == "function") return Vi(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ui)) return 11;
    if (e === si) return 14;
  }
  return 2;
}
function dt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ce(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ir(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Vi(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Ft:
        return _t(n.children, l, o, t);
      case ii:
        (i = 8), (l |= 8);
        break;
      case ro:
        return (
          (e = Ce(12, n, t, l | 2)), (e.elementType = ro), (e.lanes = o), e
        );
      case lo:
        return (e = Ce(13, n, t, l)), (e.elementType = lo), (e.lanes = o), e;
      case oo:
        return (e = Ce(19, n, t, l)), (e.elementType = oo), (e.lanes = o), e;
      case Is:
        return gl(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Rs:
              i = 10;
              break e;
            case Os:
              i = 9;
              break e;
            case ui:
              i = 11;
              break e;
            case si:
              i = 14;
              break e;
            case qe:
              (i = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ce(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function _t(e, t, n, r) {
  return (e = Ce(7, e, r, t)), (e.lanes = n), e;
}
function gl(e, t, n, r) {
  return (
    (e = Ce(22, e, r, t)),
    (e.elementType = Is),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function bl(e, t, n) {
  return (e = Ce(6, e, null, t)), (e.lanes = n), e;
}
function eo(e, t, n) {
  return (
    (t = Ce(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function cp(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ml(0)),
    (this.expirationTimes = Ml(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ml(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Wi(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new cp(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ce(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    _i(o),
    e
  );
}
function fp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Dt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Pc(e) {
  if (!e) return ht;
  e = e._reactInternals;
  e: {
    if (It(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (pe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (pe(n)) return Ca(e, n, t);
  }
  return t;
}
function _c(e, t, n, r, l, o, i, u, s) {
  return (
    (e = Wi(n, r, !0, e, l, o, i, u, s)),
    (e.context = Pc(null)),
    (n = e.current),
    (r = ue()),
    (l = ft(n)),
    (o = Qe(r, l)),
    (o.callback = t ?? null),
    at(n, o, l),
    (e.current.lanes = l),
    bn(e, l, r),
    he(e, r),
    e
  );
}
function wl(e, t, n, r) {
  var l = t.current,
    o = ue(),
    i = ft(l);
  return (
    (n = Pc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Qe(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = at(l, t, i)),
    e !== null && (Me(e, l, i, o), Nr(e, l, i)),
    i
  );
}
function ll(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ns(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Hi(e, t) {
  ns(e, t), (e = e.alternate) && ns(e, t);
}
function dp() {
  return null;
}
var Nc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Qi(e) {
  this._internalRoot = e;
}
Sl.prototype.render = Qi.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  wl(e, t, null, null);
};
Sl.prototype.unmount = Qi.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Rt(function () {
      wl(null, e, null, null);
    }),
      (t[Ye] = null);
  }
};
function Sl(e) {
  this._internalRoot = e;
}
Sl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ra();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < et.length && t !== 0 && t < et[n].priority; n++);
    et.splice(n, 0, e), n === 0 && oa(e);
  }
};
function Ki(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function kl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function rs() {}
function pp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = ll(i);
        o.call(c);
      };
    }
    var i = _c(t, r, e, 0, null, !1, !1, "", rs);
    return (
      (e._reactRootContainer = i),
      (e[Ye] = i.current),
      Wn(e.nodeType === 8 ? e.parentNode : e),
      Rt(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var c = ll(s);
      u.call(c);
    };
  }
  var s = Wi(e, 0, !1, null, null, !1, !1, "", rs);
  return (
    (e._reactRootContainer = s),
    (e[Ye] = s.current),
    Wn(e.nodeType === 8 ? e.parentNode : e),
    Rt(function () {
      wl(t, s, n, r);
    }),
    s
  );
}
function El(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = ll(i);
        u.call(s);
      };
    }
    wl(t, i, e, l);
  } else i = pp(n, t, e, l, r);
  return ll(i);
}
ta = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = xn(t.pendingLanes);
        n !== 0 &&
          (fi(t, n | 1), he(t, K()), !(I & 6) && ((un = K() + 500), yt()));
      }
      break;
    case 13:
      Rt(function () {
        var r = Xe(e, 1);
        if (r !== null) {
          var l = ue();
          Me(r, e, 1, l);
        }
      }),
        Hi(e, 1);
  }
};
di = function (e) {
  if (e.tag === 13) {
    var t = Xe(e, 134217728);
    if (t !== null) {
      var n = ue();
      Me(t, e, 134217728, n);
    }
    Hi(e, 134217728);
  }
};
na = function (e) {
  if (e.tag === 13) {
    var t = ft(e),
      n = Xe(e, t);
    if (n !== null) {
      var r = ue();
      Me(n, e, t, r);
    }
    Hi(e, t);
  }
};
ra = function () {
  return M;
};
la = function (e, t) {
  var n = M;
  try {
    return (M = e), t();
  } finally {
    M = n;
  }
};
vo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((so(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = dl(r);
            if (!l) throw Error(y(90));
            Ds(r), so(r, l);
          }
        }
      }
      break;
    case "textarea":
      Us(e, n);
      break;
    case "select":
      (t = n.value), t != null && Yt(e, !!n.multiple, t, !1);
  }
};
Hs = $i;
Qs = Rt;
var hp = { usingClientEntryPoint: !1, Events: [tr, Bt, dl, Vs, Ws, $i] },
  Sn = {
    findFiberByHostInstance: Et,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  mp = {
    bundleType: Sn.bundleType,
    version: Sn.version,
    rendererPackageName: Sn.rendererPackageName,
    rendererConfig: Sn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ze.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Xs(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Sn.findFiberByHostInstance || dp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var kr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!kr.isDisabled && kr.supportsFiber)
    try {
      (sl = kr.inject(mp)), ($e = kr);
    } catch {}
}
Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hp;
Se.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ki(t)) throw Error(y(200));
  return fp(e, t, null, n);
};
Se.createRoot = function (e, t) {
  if (!Ki(e)) throw Error(y(299));
  var n = !1,
    r = "",
    l = Nc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Wi(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ye] = t.current),
    Wn(e.nodeType === 8 ? e.parentNode : e),
    new Qi(t)
  );
};
Se.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(y(188))
      : ((e = Object.keys(e).join(",")), Error(y(268, e)));
  return (e = Xs(t)), (e = e === null ? null : e.stateNode), e;
};
Se.flushSync = function (e) {
  return Rt(e);
};
Se.hydrate = function (e, t, n) {
  if (!kl(t)) throw Error(y(200));
  return El(null, e, t, !0, n);
};
Se.hydrateRoot = function (e, t, n) {
  if (!Ki(e)) throw Error(y(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = Nc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = _c(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Ye] = t.current),
    Wn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Sl(t);
};
Se.render = function (e, t, n) {
  if (!kl(t)) throw Error(y(200));
  return El(null, e, t, !1, n);
};
Se.unmountComponentAtNode = function (e) {
  if (!kl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (Rt(function () {
        El(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ye] = null);
        });
      }),
      !0)
    : !1;
};
Se.unstable_batchedUpdates = $i;
Se.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!kl(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return El(e, t, n, !1, r);
};
Se.version = "18.2.0-next-9e3b772b8-20220608";
function zc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zc);
    } catch (e) {
      console.error(e);
    }
}
zc(), (_s.exports = Se);
var vp = _s.exports,
  Lc,
  ls = vp;
(Lc = ls.createRoot), ls.hydrateRoot;
/**
 * @remix-run/router v1.6.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ol() {
  return (
    (ol = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ol.apply(this, arguments)
  );
}
var lt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(lt || (lt = {}));
const os = "popstate";
function yp(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: u } = r.location;
    return Go(
      "",
      { pathname: o, search: i, hash: u },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : Tc(l);
  }
  return wp(t, n, null, e);
}
function me(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Yi(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function gp() {
  return Math.random().toString(36).substr(2, 8);
}
function is(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Go(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ol(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? xl(t) : t,
      { state: n, key: (t && t.key) || r || gp() }
    )
  );
}
function Tc(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function xl(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function wp(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    u = lt.Pop,
    s = null,
    c = p();
  c == null && ((c = 0), i.replaceState(ol({}, i.state, { idx: c }), ""));
  function p() {
    return (i.state || { idx: null }).idx;
  }
  function m() {
    u = lt.Pop;
    let N = p(),
      f = N == null ? null : N - c;
    (c = N), s && s({ action: u, location: g.location, delta: f });
  }
  function h(N, f) {
    u = lt.Push;
    let a = Go(g.location, N, f);
    n && n(a, N), (c = p() + 1);
    let d = is(a, c),
      v = g.createHref(a);
    try {
      i.pushState(d, "", v);
    } catch (k) {
      if (k instanceof DOMException && k.name === "DataCloneError") throw k;
      l.location.assign(v);
    }
    o && s && s({ action: u, location: g.location, delta: 1 });
  }
  function S(N, f) {
    u = lt.Replace;
    let a = Go(g.location, N, f);
    n && n(a, N), (c = p());
    let d = is(a, c),
      v = g.createHref(a);
    i.replaceState(d, "", v),
      o && s && s({ action: u, location: g.location, delta: 0 });
  }
  function w(N) {
    let f = l.location.origin !== "null" ? l.location.origin : l.location.href,
      a = typeof N == "string" ? N : Tc(N);
    return (
      me(
        f,
        "No window.location.(origin|href) available to create URL for href: " +
          a
      ),
      new URL(a, f)
    );
  }
  let g = {
    get action() {
      return u;
    },
    get location() {
      return e(l, i);
    },
    listen(N) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(os, m),
        (s = N),
        () => {
          l.removeEventListener(os, m), (s = null);
        }
      );
    },
    createHref(N) {
      return t(l, N);
    },
    createURL: w,
    encodeLocation(N) {
      let f = w(N);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: h,
    replace: S,
    go(N) {
      return i.go(N);
    },
  };
  return g;
}
var us;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(us || (us = {}));
function Sp(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? xl(t) : t,
    l = Ic(r.pathname || "/", n);
  if (l == null) return null;
  let o = Rc(e);
  kp(o);
  let i = null;
  for (let u = 0; i == null && u < o.length; ++u) i = Tp(o[u], Ip(l));
  return i;
}
function Rc(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (o, i, u) => {
    let s = {
      relativePath: u === void 0 ? o.path || "" : u,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    s.relativePath.startsWith("/") &&
      (me(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let c = bt([r, s.relativePath]),
      p = n.concat(s);
    o.children &&
      o.children.length > 0 &&
      (me(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".')
      ),
      Rc(o.children, t, p, c)),
      !(o.path == null && !o.index) &&
        t.push({ path: c, score: zp(c, o.index), routesMeta: p });
  };
  return (
    e.forEach((o, i) => {
      var u;
      if (o.path === "" || !((u = o.path) != null && u.includes("?"))) l(o, i);
      else for (let s of Oc(o.path)) l(o, i, s);
    }),
    t
  );
}
function Oc(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [o, ""] : [o];
  let i = Oc(r.join("/")),
    u = [];
  return (
    u.push(...i.map((s) => (s === "" ? o : [o, s].join("/")))),
    l && u.push(...i),
    u.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function kp(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Lp(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Ep = /^:\w+$/,
  xp = 3,
  Cp = 2,
  Pp = 1,
  _p = 10,
  Np = -2,
  ss = (e) => e === "*";
function zp(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(ss) && (r += Np),
    t && (r += Cp),
    n
      .filter((l) => !ss(l))
      .reduce((l, o) => l + (Ep.test(o) ? xp : o === "" ? Pp : _p), r)
  );
}
function Lp(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Tp(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let u = n[i],
      s = i === n.length - 1,
      c = l === "/" ? t : t.slice(l.length) || "/",
      p = Rp(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: s },
        c
      );
    if (!p) return null;
    Object.assign(r, p.params);
    let m = u.route;
    o.push({
      params: r,
      pathname: bt([l, p.pathname]),
      pathnameBase: Dp(bt([l, p.pathnameBase])),
      route: m,
    }),
      p.pathnameBase !== "/" && (l = bt([l, p.pathnameBase]));
  }
  return o;
}
function Rp(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Op(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, "$1"),
    u = l.slice(1);
  return {
    params: r.reduce((c, p, m) => {
      if (p === "*") {
        let h = u[m] || "";
        i = o.slice(0, o.length - h.length).replace(/(.)\/+$/, "$1");
      }
      return (c[p] = Mp(u[m] || "", p)), c;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function Op(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Yi(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (i, u) => (r.push(u), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function Ip(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Yi(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Mp(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Yi(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function Ic(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const bt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Dp = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function Fp(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Mc = ["post", "put", "patch", "delete"];
new Set(Mc);
const Up = ["get", ...Mc];
new Set(Up);
/**
 * React Router v6.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Zo() {
  return (
    (Zo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Zo.apply(this, arguments)
  );
}
const jp = "startTransition";
var as = lf[jp];
const $p = z.createContext(null),
  Bp = z.createContext(null),
  Dc = z.createContext(null),
  Cl = z.createContext(null),
  Pl = z.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Fc = z.createContext(null);
function Xi() {
  return z.useContext(Cl) != null;
}
function Ap() {
  return Xi() || me(!1), z.useContext(Cl).location;
}
function Vp(e, t) {
  return Wp(e, t);
}
function Wp(e, t, n) {
  Xi() || me(!1);
  let { navigator: r } = z.useContext(Dc),
    { matches: l } = z.useContext(Pl),
    o = l[l.length - 1],
    i = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : "/";
  o && o.route;
  let s = Ap(),
    c;
  if (t) {
    var p;
    let g = typeof t == "string" ? xl(t) : t;
    u === "/" || ((p = g.pathname) != null && p.startsWith(u)) || me(!1),
      (c = g);
  } else c = s;
  let m = c.pathname || "/",
    h = u === "/" ? m : m.slice(u.length) || "/",
    S = Sp(e, { pathname: h }),
    w = Xp(
      S &&
        S.map((g) =>
          Object.assign({}, g, {
            params: Object.assign({}, i, g.params),
            pathname: bt([
              u,
              r.encodeLocation
                ? r.encodeLocation(g.pathname).pathname
                : g.pathname,
            ]),
            pathnameBase:
              g.pathnameBase === "/"
                ? u
                : bt([
                    u,
                    r.encodeLocation
                      ? r.encodeLocation(g.pathnameBase).pathname
                      : g.pathnameBase,
                  ]),
          })
        ),
      l,
      n
    );
  return t && w
    ? z.createElement(
        Cl.Provider,
        {
          value: {
            location: Zo(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: lt.Pop,
          },
        },
        w
      )
    : w;
}
function Hp() {
  let e = qp(),
    t = Fp(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return z.createElement(
    z.Fragment,
    null,
    z.createElement("h2", null, "Unexpected Application Error!"),
    z.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? z.createElement("pre", { style: l }, n) : null,
    o
  );
}
const Qp = z.createElement(Hp, null);
class Kp extends z.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? z.createElement(
          Pl.Provider,
          { value: this.props.routeContext },
          z.createElement(Fc.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Yp(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = z.useContext($p);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    z.createElement(Pl.Provider, { value: t }, r)
  );
}
function Xp(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var l;
    if ((l = n) != null && l.errors) e = n.matches;
    else return null;
  }
  let o = e,
    i = (r = n) == null ? void 0 : r.errors;
  if (i != null) {
    let u = o.findIndex(
      (s) => s.route.id && (i == null ? void 0 : i[s.route.id])
    );
    u >= 0 || me(!1), (o = o.slice(0, Math.min(o.length, u + 1)));
  }
  return o.reduceRight((u, s, c) => {
    let p = s.route.id ? (i == null ? void 0 : i[s.route.id]) : null,
      m = null;
    n && (m = s.route.errorElement || Qp);
    let h = t.concat(o.slice(0, c + 1)),
      S = () => {
        let w;
        return (
          p
            ? (w = m)
            : s.route.Component
            ? (w = z.createElement(s.route.Component, null))
            : s.route.element
            ? (w = s.route.element)
            : (w = u),
          z.createElement(Yp, {
            match: s,
            routeContext: { outlet: u, matches: h, isDataRoute: n != null },
            children: w,
          })
        );
      };
    return n && (s.route.ErrorBoundary || s.route.errorElement || c === 0)
      ? z.createElement(Kp, {
          location: n.location,
          revalidation: n.revalidation,
          component: m,
          error: p,
          children: S(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : S();
  }, null);
}
var cs;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate");
})(cs || (cs = {}));
var il;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId");
})(il || (il = {}));
function Gp(e) {
  let t = z.useContext(Bp);
  return t || me(!1), t;
}
function Zp(e) {
  let t = z.useContext(Pl);
  return t || me(!1), t;
}
function Jp(e) {
  let t = Zp(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || me(!1), n.route.id;
}
function qp() {
  var e;
  let t = z.useContext(Fc),
    n = Gp(il.UseRouteError),
    r = Jp(il.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function Mr(e) {
  me(!1);
}
function bp(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = lt.Pop,
    navigator: o,
    static: i = !1,
  } = e;
  Xi() && me(!1);
  let u = t.replace(/^\/*/, "/"),
    s = z.useMemo(() => ({ basename: u, navigator: o, static: i }), [u, o, i]);
  typeof r == "string" && (r = xl(r));
  let {
      pathname: c = "/",
      search: p = "",
      hash: m = "",
      state: h = null,
      key: S = "default",
    } = r,
    w = z.useMemo(() => {
      let g = Ic(c, u);
      return g == null
        ? null
        : {
            location: { pathname: g, search: p, hash: m, state: h, key: S },
            navigationType: l,
          };
    }, [u, c, p, m, h, S, l]);
  return w == null
    ? null
    : z.createElement(
        Dc.Provider,
        { value: s },
        z.createElement(Cl.Provider, { children: n, value: w })
      );
}
function eh(e) {
  let { children: t, location: n } = e;
  return Vp(Jo(t), n);
}
var fs;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(fs || (fs = {}));
new Promise(() => {});
function Jo(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    z.Children.forEach(e, (r, l) => {
      if (!z.isValidElement(r)) return;
      let o = [...t, l];
      if (r.type === z.Fragment) {
        n.push.apply(n, Jo(r.props.children, o));
        return;
      }
      r.type !== Mr && me(!1), !r.props.index || !r.props.children || me(!1);
      let i = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (i.children = Jo(r.props.children, o)), n.push(i);
    }),
    n
  );
}
/**
 * React Router DOM v6.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function th(e) {
  let { basename: t, children: n, future: r, window: l } = e,
    o = z.useRef();
  o.current == null && (o.current = yp({ window: l, v5Compat: !0 }));
  let i = o.current,
    [u, s] = z.useState({ action: i.action, location: i.location }),
    { v7_startTransition: c } = r || {},
    p = z.useCallback(
      (m) => {
        c && as ? as(() => s(m)) : s(m);
      },
      [s, c]
    );
  return (
    z.useLayoutEffect(() => i.listen(p), [i, p]),
    z.createElement(bp, {
      basename: t,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: i,
    })
  );
}
var ds;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmitImpl = "useSubmitImpl"),
    (e.UseFetcher = "useFetcher");
})(ds || (ds = {}));
var ps;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(ps || (ps = {}));
function hs(e, t) {
  const r = nh(e),
    l = rh(t, r),
    o = parseInt(l.charAt(0), 16);
  return Uc(l, o);
}
function nh(e) {
  let t = "";
  for (let n = 0; n < e.length; n++) t += e.charCodeAt(n).toString(16);
  return (t = t.length > 16 ? t.substring(0, 16) : t.padEnd(16, "0")), t;
}
function rh(e, t) {
  const n = (u) => u % 2 == 0;
  let r = [],
    l = "";
  for (let u = 0; u < t.length; u++) {
    const s = parseInt(t.charAt(u), 16);
    (l += s), n(s) && (r.push(l), (l = ""));
  }
  const o = lh(e, r),
    i = Uc(o, parseInt(o.charAt(0)));
  return console.log(i), i;
}
function lh(e, t) {
  if (!t.length) return e;
  let n = Math.floor(e.length / (t.length + 1)),
    r = "",
    l = 0;
  for (let o = 0; o <= e.length; o += n)
    (r += e.substring(o, o + n)), l < t.length && ((r += t[l]), l++);
  return e.length % n !== 0 && (r += e.substring(n * (t.length + 1))), r;
}
function Uc(e, t) {
  let n = e.length;
  return (t = t % n), e.substring(t) + e.substring(0, t);
}
class oh extends Error {
  constructor(t) {
    super(t), (this.name = this.constructor.name);
  }
}
class jc {
  constructor() {
    (this.b16PublicKey = this.generatePublicKey()),
      (this.userPasswordTable = this.readUserPasswordFile()),
      this.createDefaultAdministratorAccount();
  }
  readUserPasswordFile() {
    try {
      let t = (void 0)(__dirname, "users.json");
      if (!(void 0)(t)) return console.error(`Error: ${t} not found`), {};
    } catch (t) {
      return console.error(`Error reading user password file: ${t}`), {};
    }
  }
  createDefaultAdministratorAccount() {
    if (this.userPasswordTable.Admin !== void 0) return;
    const t = "Admin",
      n = "Admin";
    this.addUser(t, n);
  }
  generatePublicKey() {
    return "67D3D0797982EF10";
  }
  addUser(t, n) {
    if (this.userPasswordTable[t] !== void 0)
      throw new oh(
        `Error: ${t} already exists, please choose another username`
      );
    let r = (void 0)(__dirname, "users.json"),
      l = (void 0)(r) ? (void 0)(r, "utf-8") : "{}",
      o = JSON.parse(l);
    const i = hs(n, this.b16PublicKey);
    (o[t] = i), (l = JSON.stringify(o));
    try {
      (void 0)(r, l, "utf-8");
    } catch (u) {
      console.error(`Error writing user password file: ${u}`);
    }
    this.userPasswordTable[t] = i;
  }
  verifyUser(t, n) {
    const r = hs(n, this.getPublicKey());
    return this.userPasswordTable[t] === r;
  }
  userExists(t) {
    return this.userPasswordTable[t] !== void 0;
  }
  deleteUser(t, n) {
    if (this.verifyUser(t, n)) {
      delete this.userPasswordTable[t];
      let r = (void 0)(__dirname, "users.json"),
        l = (void 0)(r) ? (void 0)(r, "utf-8") : "{}",
        o = JSON.parse(l);
      delete o[t], (l = JSON.stringify(o));
      try {
        (void 0)(r, l, "utf-8");
      } catch (i) {
        console.error(`Error writing user password file: ${i}`);
      }
      return !0;
    } else return !1;
  }
  getPublicKey() {
    return this.b16PublicKey;
  }
}
let ih = new jc();
ih.addUser("Roger", "rogerIsKINGGG");
function uh() {
  return (
    new jc(),
    Mn("div", {
      className: "login-container",
      children: [
        j("label", {
          htmlFor: "uname",
          children: j("b", { children: "Username" }),
        }),
        j("input", {
          type: "text",
          placeholder: "Enter Username",
          name: "uname",
          required: !0,
        }),
        j("label", {
          htmlFor: "psw",
          children: j("b", { children: "Password" }),
        }),
        j("input", {
          type: "password",
          placeholder: "Enter Password",
          name: "psw",
          required: !0,
        }),
        j("button", {
          type: "submit",
          className: "loginBtn",
          children: "Login",
        }),
      ],
    })
  );
}
require("react");
function ms() {
  return j("div", { className: "LoginPage", children: j(uh, {}) });
}
require("react");
function to({ name: e, price: t }) {
  return j(df, {
    children: Mn("button", {
      type: "button",
      className: "btn",
      children: [e, " ", t],
    }),
  });
}
require("react");
function sh() {
  return Mn("div", {
    className: "sales-container",
    children: [
      j(to, { name: "Bread", price: 4.5 }),
      j(to, { name: "Eggs", price: 3.65 }),
      j(to, { name: "Milk", price: 2.8 }),
    ],
  });
}
function ah() {
  const e = `${window.location.href}/background.mp4`;
  return Mn("div", {
    className: "App",
    children: [
      j("video", {
        autoPlay: !0,
        loop: !0,
        muted: !0,
        className: "backgroundVideo",
        children: j("source", { src: e, type: "video/mp4" }),
      }),
      j(th, {
        children: Mn(eh, {
          children: [
            j(Mr, { path: "/login", element: j(ms, {}) }),
            j(Mr, { path: "pos", element: j(sh, {}) }),
            j(Mr, { path: "*", element: j(ms, {}) }),
          ],
        }),
      }),
    ],
  });
}
Lc(document.getElementById("root")).render(
  j(z.StrictMode, { children: j(ah, {}) })
);
