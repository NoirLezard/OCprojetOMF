parcelRequire = (function (e, r, t, n) {
    var i,
        o = "function" == typeof parcelRequire && parcelRequire,
        u = "function" == typeof require && require;
    function f(t, n) {
        if (!r[t]) {
            if (!e[t]) {
                var i = "function" == typeof parcelRequire && parcelRequire;
                if (!n && i) return i(t, !0);
                if (o) return o(t, !0);
                if (u && "string" == typeof t) return u(t);
                var c = new Error("Cannot find module '" + t + "'");
                throw ((c.code = "MODULE_NOT_FOUND"), c);
            }
            (p.resolve = function (r) {
                return e[t][1][r] || r;
            }),
                (p.cache = {});
            var l = (r[t] = new f.Module(t));
            e[t][0].call(l.exports, p, l, l.exports, this);
        }
        return r[t].exports;
        function p(e) {
            return f(p.resolve(e));
        }
    }
    (f.isParcelRequire = !0),
        (f.Module = function (e) {
            (this.id = e), (this.bundle = f), (this.exports = {});
        }),
        (f.modules = e),
        (f.cache = r),
        (f.parent = o),
        (f.register = function (r, t) {
            e[r] = [
                function (e, r) {
                    r.exports = t;
                },
                {},
            ];
        });
    for (var c = 0; c < t.length; c++)
        try {
            f(t[c]);
        } catch (e) {
            i || (i = e);
        }
    if (t.length) {
        var l = f(t[t.length - 1]);
        "object" == typeof exports && "undefined" != typeof module
            ? (module.exports = l)
            : "function" == typeof define && define.amd
                ? define(function () {
                    return l;
                })
                : n && (this[n] = l);
    }
    if (((parcelRequire = f), i)) throw i;
    return f;
})(
    {
        r7Rb: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = void 0);
                var e = "undefined" != typeof window,
                    t = "https://cdn.splitbee.io/sb.js",
                    o = [],
                    i = function () {
                        (e && !window.splitbee) ||
                            ((s.track = window.splitbee.track),
                                (s.user = window.splitbee.user),
                                (s.enableCookie = window.splitbee.enableCookie),
                                (s.reset = window.splitbee.reset),
                                o.forEach(function (e) {
                                    "track" === e.type
                                        ? window.splitbee.track.apply(null, e.payload)
                                        : "user" === e.type
                                            ? window.splitbee.user.set.apply(null, e.payload)
                                            : "enableCookie" === e.type
                                                ? window.splitbee.enableCookie.apply(null, e.payload)
                                                : "reset" === e.type && window.splitbee.reset();
                                }),
                                (o = []));
                    },
                    r = function (t) {
                        return function () {
                            try {
                                for (var r = arguments.length, n = new Array(r), s = 0; s < r; s++) n[s] = arguments[s];
                                return o.push({ type: t, payload: n }), e && window.splitbee && i(), Promise.resolve();
                            } catch (l) {
                                return Promise.reject(l);
                            }
                        };
                    },
                    n = function (o) {
                        if (e && !window.splitbee) {
                            var r = window.document,
                                n = null != o && o.scriptUrl ? o.scriptUrl : t,
                                s = r.querySelector("script[src='" + n + "']");
                            if (s) s.onload = i;
                            else {
                                var l = r.createElement("script");
                                (l.src = n), (l.async = !0), o && (o.apiUrl && (l.dataset.api = o.apiUrl), o.token && (l.dataset.token = o.token), o.disableCookie && (l.dataset.noCookie = "1")), (l.onload = i), r.head.appendChild(l);
                            }
                        }
                    },
                    s = { track: r("track"), user: { set: r("user") }, init: n, enableCookie: r("enableCookie"), reset: r("reset") },
                    l = s;
                exports.default = l;
            },
            {},
        ],
        c1q3: [
            function (require, module, exports) {
                "use strict";
                var e = t(require("@splitbee/web"));
                function t(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                async function o(t) {
                    t.preventDefault(), console.log("Trying to track click event...");
                    try {
                        await e.default.track("Visit devs.coffee"), console.log("Click on devs.coffee link successfully tracked");
                    } catch (o) {
                        console.log("Tracking on devs.coffee click failed");
                    } finally {
                        location.href = "https://devs.coffee";
                    }
                }
                (() => {
                    if ((console.log("Analytics script loaded"), "localhost" === location.hostname || "127.0.0.1" === location.hostname || location.href.startsWith("file:///"))) return console.log("Localhost detected, tracking disabled");
                    e.default.init({ token: "AMP3UVDXSDVO" }), console.log("Live website detected, tracking activated"), document.getElementById("dc-mainlink").addEventListener("click", (e) => o(e));
                })();
            },
            { "@splitbee/web": "r7Rb" },
        ],
    },
    {},
    ["c1q3"],
    null
);
//# sourceMappingURL=/analytics.a7b3f994.js.map
