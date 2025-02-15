/*! modernizr 3.4.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-flexbox-touchevents-setclasses !*/
! function(e, n, t) {
    function r(e, n) {
        return typeof e === n
    }

    function o() {
        var e, n, t, o, s, i, l;
        for (var a in x)
            if (x.hasOwnProperty(a)) {
                if (e = [], n = x[a], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
                    for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
                for (o = r(n.fn, "function") ? n.fn() : n.fn, s = 0; s < e.length; s++) i = e[s], l = i.split("."), 1 === l.length ? Modernizr[l[0]] = o : (!Modernizr[l[0]] || Modernizr[l[0]] instanceof Boolean || (Modernizr[l[0]] = new Boolean(Modernizr[l[0]])), Modernizr[l[0]][l[1]] = o), C.push((o ? "" : "no-") + l.join("-"))
            }
    }

    function s(e) {
        var n = w.className,
            t = Modernizr._config.classPrefix || "";
        if (_ && (n = n.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            n = n.replace(r, "$1" + t + "js$2")
        }
        Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), _ ? w.className.baseVal = n : w.className = n)
    }

    function i(e, n) {
        return !!~("" + e).indexOf(n)
    }

    function l() {
        return "function" != typeof n.createElement ? n.createElement(arguments[0]) : _ ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
    }

    function a(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, n, t) {
            return n + t.toUpperCase()
        }).replace(/^-/, "")
    }

    function u(e, n) {
        return function() {
            return e.apply(n, arguments)
        }
    }

    function f(e, n, t) {
        var o;
        for (var s in e)
            if (e[s] in n) return t === !1 ? e[s] : (o = n[e[s]], r(o, "function") ? u(o, t || n) : o);
        return !1
    }

    function c(e) {
        return e.replace(/([A-Z])/g, function(e, n) {
            return "-" + n.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function p(n, t, r) {
        var o;
        if ("getComputedStyle" in e) {
            o = getComputedStyle.call(e, n, t);
            var s = e.console;
            if (null !== o) r && (o = o.getPropertyValue(r));
            else if (s) {
                var i = s.error ? "error" : "log";
                s[i].call(s, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else o = !t && n.currentStyle && n.currentStyle[r];
        return o
    }

    function d() {
        var e = n.body;
        return e || (e = l(_ ? "svg" : "body"), e.fake = !0), e
    }

    function m(e, t, r, o) {
        var s, i, a, u, f = "modernizr",
            c = l("div"),
            p = d();
        if (parseInt(r, 10))
            for (; r--;) a = l("div"), a.id = o ? o[r] : f + (r + 1), c.appendChild(a);
        return s = l("style"), s.type = "text/css", s.id = "s" + f, (p.fake ? p : c).appendChild(s), p.appendChild(c), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(n.createTextNode(e)), c.id = f, p.fake && (p.style.background = "", p.style.overflow = "hidden", u = w.style.overflow, w.style.overflow = "hidden", w.appendChild(p)), i = t(c, e), p.fake ? (p.parentNode.removeChild(p), w.style.overflow = u, w.offsetHeight) : c.parentNode.removeChild(c), !!i
    }

    function h(n, r) {
        var o = n.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; o--;)
                if (e.CSS.supports(c(n[o]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var s = []; o--;) s.push("(" + c(n[o]) + ":" + r + ")");
            return s = s.join(" or "), m("@supports (" + s + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == p(e, null, "position")
            })
        }
        return t
    }

    function v(e, n, o, s) {
        function u() {
            c && (delete E.style, delete E.modElem)
        }
        if (s = r(s, "undefined") ? !1 : s, !r(o, "undefined")) {
            var f = h(e, o);
            if (!r(f, "undefined")) return f
        }
        for (var c, p, d, m, v, y = ["modernizr", "tspan", "samp"]; !E.style && y.length;) c = !0, E.modElem = l(y.shift()), E.style = E.modElem.style;
        for (d = e.length, p = 0; d > p; p++)
            if (m = e[p], v = E.style[m], i(m, "-") && (m = a(m)), E.style[m] !== t) {
                if (s || r(o, "undefined")) return u(), "pfx" == n ? m : !0;
                try {
                    E.style[m] = o
                } catch (g) {}
                if (E.style[m] != v) return u(), "pfx" == n ? m : !0
            }
        return u(), !1
    }

    function y(e, n, t, o, s) {
        var i = e.charAt(0).toUpperCase() + e.slice(1),
            l = (e + " " + z.join(i + " ") + i).split(" ");
        return r(n, "string") || r(n, "undefined") ? v(l, n, o, s) : (l = (e + " " + P.join(i + " ") + i).split(" "), f(l, n, t))
    }

    function g(e, n, r) {
        return y(e, t, t, n, r)
    }
    var C = [],
        x = [],
        S = {
            _version: "3.4.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, n) {
                var t = this;
                setTimeout(function() {
                    n(t[e])
                }, 0)
            },
            addTest: function(e, n, t) {
                x.push({
                    name: e,
                    fn: n,
                    options: t
                })
            },
            addAsyncTest: function(e) {
                x.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function() {};
    Modernizr.prototype = S, Modernizr = new Modernizr;
    var w = n.documentElement,
        _ = "svg" === w.nodeName.toLowerCase(),
        b = "Moz O ms Webkit",
        z = S._config.usePrefixes ? b.split(" ") : [];
    S._cssomPrefixes = z;
    var P = S._config.usePrefixes ? b.toLowerCase().split(" ") : [];
    S._domPrefixes = P;
    var T = {
        elem: l("modernizr")
    };
    Modernizr._q.push(function() {
        delete T.elem
    });
    var E = {
        style: T.elem.style
    };
    Modernizr._q.unshift(function() {
        delete E.style
    }), S.testAllProps = y, S.testAllProps = g, Modernizr.addTest("flexbox", g("flexBasis", "1px", !0));
    var j = S._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    S._prefixes = j;
    var N = S.testStyles = m;
    Modernizr.addTest("touchevents", function() {
        var t;
        if ("ontouchstart" in e || e.DocumentTouch && n instanceof DocumentTouch) t = !0;
        else {
            var r = ["@media (", j.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            N(r, function(e) {
                t = 9 === e.offsetTop
            })
        }
        return t
    }), o(), s(C), delete S.addTest, delete S.addAsyncTest;
    for (var k = 0; k < Modernizr._q.length; k++) Modernizr._q[k]();
    e.Modernizr = Modernizr
}(window, document);