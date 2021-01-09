! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(T, e) {
    "use strict";
    var t = [],
        C = T.document,
        n = Object.getPrototypeOf,
        a = t.slice,
        g = t.concat,
        l = t.push,
        o = t.indexOf,
        i = {},
        r = i.toString,
        h = i.hasOwnProperty,
        s = h.toString,
        c = s.call(Object),
        v = {};

    function m(e, t) {
        var i = (t = t || C).createElement("script");
        i.text = e, t.head.appendChild(i).parentNode.removeChild(i)
    }
    var d = "3.1.1",
        S = function(e, t) {
            return new S.fn.init(e, t)
        },
        u = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        f = /-([a-z])/g,
        y = function(e, t) {
            return t.toUpperCase()
        };

    function b(e) {
        var t = !!e && "length" in e && e.length,
            i = S.type(e);
        return "function" !== i && !S.isWindow(e) && ("array" === i || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
        jquery: d,
        constructor: S,
        length: 0,
        toArray: function() {
            return a.call(this)
        },
        get: function(e) {
            return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return S.each(this, e)
        },
        map: function(i) {
            return this.pushStack(S.map(this, function(e, t) {
                return i.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                i = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= i && i < t ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: l,
        sort: t.sort,
        splice: t.splice
    }, S.extend = S.fn.extend = function() {
        var e, t, i, n, o, r, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || S.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) i = s[t], s !== (n = e[t]) && (c && n && (S.isPlainObject(n) || (o = S.isArray(n))) ? (o ? (o = !1, r = i && S.isArray(i) ? i : []) : r = i && S.isPlainObject(i) ? i : {}, s[t] = S.extend(c, r, n)) : void 0 !== n && (s[t] = n));
        return s
    }, S.extend({
        expando: "jQuery" + (d + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === S.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = S.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function(e) {
            var t, i;
            return !(!e || "[object Object]" !== r.call(e) || (t = n(e)) && ("function" != typeof(i = h.call(t, "constructor") && t.constructor) || s.call(i) !== c))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? i[r.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            m(e)
        },
        camelCase: function(e) {
            return e.replace(p, "ms-").replace(f, y)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var i, n = 0;
            if (b(e))
                for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++);
            else
                for (n in e)
                    if (!1 === t.call(e[n], n, e[n])) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(u, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (b(Object(e)) ? S.merge(i, "string" == typeof e ? [e] : e) : l.call(i, e)), i
        },
        inArray: function(e, t, i) {
            return null == t ? -1 : o.call(t, e, i)
        },
        merge: function(e, t) {
            for (var i = +t.length, n = 0, o = e.length; n < i; n++) e[o++] = t[n];
            return e.length = o, e
        },
        grep: function(e, t, i) {
            for (var n = [], o = 0, r = e.length, s = !i; o < r; o++) !t(e[o], o) !== s && n.push(e[o]);
            return n
        },
        map: function(e, t, i) {
            var n, o, r = 0,
                s = [];
            if (b(e))
                for (n = e.length; r < n; r++) null != (o = t(e[r], r, i)) && s.push(o);
            else
                for (r in e) null != (o = t(e[r], r, i)) && s.push(o);
            return g.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var i, n, o;
            if ("string" == typeof t && (i = e[t], t = e, e = i), S.isFunction(e)) return n = a.call(arguments, 2), (o = function() {
                return e.apply(t || this, n.concat(a.call(arguments)))
            }).guid = e.guid = e.guid || S.guid++, o
        },
        now: Date.now,
        support: v
    }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        i["[object " + t + "]"] = t.toLowerCase()
    });
    var w = function(i) {
        var e, f, w, r, o, h, u, g, k, l, c, x, T, s, C, v, a, d, m, S = "sizzle" + 1 * new Date,
            y = i.document,
            $ = 0,
            n = 0,
            p = se(),
            b = se(),
            _ = se(),
            A = function(e, t) {
                return e === t && (c = !0), 0
            },
            E = {}.hasOwnProperty,
            t = [],
            D = t.pop,
            j = t.push,
            P = t.push,
            N = t.slice,
            L = function(e, t) {
                for (var i = 0, n = e.length; i < n; i++)
                    if (e[i] === t) return i;
                return -1
            },
            H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            O = "[\\x20\\t\\r\\n\\f]",
            q = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            M = "\\[" + O + "*(" + q + ")(?:" + O + "*([*^$|!~]?=)" + O + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + O + "*\\]",
            I = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            z = new RegExp(O + "+", "g"),
            F = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
            W = new RegExp("^" + O + "*," + O + "*"),
            R = new RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"),
            B = new RegExp("=" + O + "*([^\\]'\"]*?)" + O + "*\\]", "g"),
            U = new RegExp(I),
            X = new RegExp("^" + q + "$"),
            Y = {
                ID: new RegExp("^#(" + q + ")"),
                CLASS: new RegExp("^\\.(" + q + ")"),
                TAG: new RegExp("^(" + q + "|[*])"),
                ATTR: new RegExp("^" + M),
                PSEUDO: new RegExp("^" + I),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + H + ")$", "i"),
                needsContext: new RegExp("^" + O + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)", "i")
            },
            V = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            K = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + O + "?|(" + O + ")|.)", "ig"),
            ee = function(e, t, i) {
                var n = "0x" + t - 65536;
                return n != n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t ? "\0" === e ? "пїЅ" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            ne = function() {
                x()
            },
            oe = ye(function(e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            P.apply(t = N.call(y.childNodes), y.childNodes), t[y.childNodes.length].nodeType
        } catch (e) {
            P = {
                apply: t.length ? function(e, t) {
                    j.apply(e, N.call(t))
                } : function(e, t) {
                    for (var i = e.length, n = 0; e[i++] = t[n++];);
                    e.length = i - 1
                }
            }
        }

        function re(e, t, i, n) {
            var o, r, s, a, l, c, d, u = t && t.ownerDocument,
                p = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return i;
            if (!n && ((t ? t.ownerDocument || t : y) !== T && x(t), t = t || T, C)) {
                if (11 !== p && (l = J.exec(e)))
                    if (o = l[1]) {
                        if (9 === p) {
                            if (!(s = t.getElementById(o))) return i;
                            if (s.id === o) return i.push(s), i
                        } else if (u && (s = u.getElementById(o)) && m(t, s) && s.id === o) return i.push(s), i
                    } else {
                        if (l[2]) return P.apply(i, t.getElementsByTagName(e)), i;
                        if ((o = l[3]) && f.getElementsByClassName && t.getElementsByClassName) return P.apply(i, t.getElementsByClassName(o)), i
                    }
                if (f.qsa && !_[e + " "] && (!v || !v.test(e))) {
                    if (1 !== p) u = t, d = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(te, ie) : t.setAttribute("id", a = S), r = (c = h(e)).length; r--;) c[r] = "#" + a + " " + me(c[r]);
                        d = c.join(","), u = K.test(e) && ge(t.parentNode) || t
                    }
                    if (d) try {
                        return P.apply(i, u.querySelectorAll(d)), i
                    } catch (e) {} finally {
                        a === S && t.removeAttribute("id")
                    }
                }
            }
            return g(e.replace(F, "$1"), t, i, n)
        }

        function se() {
            var n = [];
            return function e(t, i) {
                return n.push(t + " ") > w.cacheLength && delete e[n.shift()], e[t + " "] = i
            }
        }

        function ae(e) {
            return e[S] = !0, e
        }

        function le(e) {
            var t = T.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ce(e, t) {
            for (var i = e.split("|"), n = i.length; n--;) w.attrHandle[i[n]] = t
        }

        function de(e, t) {
            var i = t && e,
                n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === t) return -1;
            return e ? 1 : -1
        }

        function ue(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function pe(i) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === i
            }
        }

        function fe(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && oe(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function he(s) {
            return ae(function(r) {
                return r = +r, ae(function(e, t) {
                    for (var i, n = s([], e.length, r), o = n.length; o--;) e[i = n[o]] && (e[i] = !(t[i] = e[i]))
                })
            })
        }

        function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in f = re.support = {}, o = re.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, x = re.setDocument = function(e) {
                var t, i, n = e ? e.ownerDocument || e : y;
                return n !== T && 9 === n.nodeType && n.documentElement && (s = (T = n).documentElement, C = !o(T), y !== T && (i = T.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", ne, !1) : i.attachEvent && i.attachEvent("onunload", ne)), f.attributes = le(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), f.getElementsByTagName = le(function(e) {
                    return e.appendChild(T.createComment("")), !e.getElementsByTagName("*").length
                }), f.getElementsByClassName = Q.test(T.getElementsByClassName), f.getById = le(function(e) {
                    return s.appendChild(e).id = S, !T.getElementsByName || !T.getElementsByName(S).length
                }), f.getById ? (w.filter.ID = function(e) {
                    var t = e.replace(Z, ee);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, w.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && C) {
                        var i = t.getElementById(e);
                        return i ? [i] : []
                    }
                }) : (w.filter.ID = function(e) {
                    var i = e.replace(Z, ee);
                    return function(e) {
                        var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === i
                    }
                }, w.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && C) {
                        var i, n, o, r = t.getElementById(e);
                        if (r) {
                            if ((i = r.getAttributeNode("id")) && i.value === e) return [r];
                            for (o = t.getElementsByName(e), n = 0; r = o[n++];)
                                if ((i = r.getAttributeNode("id")) && i.value === e) return [r]
                        }
                        return []
                    }
                }), w.find.TAG = f.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : f.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var i, n = [],
                        o = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; i = r[o++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return r
                }, w.find.CLASS = f.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && C) return t.getElementsByClassName(e)
                }, a = [], v = [], (f.qsa = Q.test(T.querySelectorAll)) && (le(function(e) {
                    s.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + O + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + O + "*(?:value|" + H + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]")
                }), le(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = T.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + O + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), s.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (f.matchesSelector = Q.test(d = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && le(function(e) {
                    f.disconnectedMatch = d.call(e, "*"), d.call(e, "[s!='']:x"), a.push("!=", I)
                }), v = v.length && new RegExp(v.join("|")), a = a.length && new RegExp(a.join("|")), t = Q.test(s.compareDocumentPosition), m = t || Q.test(s.contains) ? function(e, t) {
                    var i = 9 === e.nodeType ? e.documentElement : e,
                        n = t && t.parentNode;
                    return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, A = t ? function(e, t) {
                    if (e === t) return c = !0, 0;
                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !f.sortDetached && t.compareDocumentPosition(e) === i ? e === T || e.ownerDocument === y && m(y, e) ? -1 : t === T || t.ownerDocument === y && m(y, t) ? 1 : l ? L(l, e) - L(l, t) : 0 : 4 & i ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return c = !0, 0;
                    var i, n = 0,
                        o = e.parentNode,
                        r = t.parentNode,
                        s = [e],
                        a = [t];
                    if (!o || !r) return e === T ? -1 : t === T ? 1 : o ? -1 : r ? 1 : l ? L(l, e) - L(l, t) : 0;
                    if (o === r) return de(e, t);
                    for (i = e; i = i.parentNode;) s.unshift(i);
                    for (i = t; i = i.parentNode;) a.unshift(i);
                    for (; s[n] === a[n];) n++;
                    return n ? de(s[n], a[n]) : s[n] === y ? -1 : a[n] === y ? 1 : 0
                }), T
            }, re.matches = function(e, t) {
                return re(e, null, null, t)
            }, re.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== T && x(e), t = t.replace(B, "='$1']"), f.matchesSelector && C && !_[t + " "] && (!a || !a.test(t)) && (!v || !v.test(t))) try {
                    var i = d.call(e, t);
                    if (i || f.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (e) {}
                return 0 < re(t, T, null, [e]).length
            }, re.contains = function(e, t) {
                return (e.ownerDocument || e) !== T && x(e), m(e, t)
            }, re.attr = function(e, t) {
                (e.ownerDocument || e) !== T && x(e);
                var i = w.attrHandle[t.toLowerCase()],
                    n = i && E.call(w.attrHandle, t.toLowerCase()) ? i(e, t, !C) : void 0;
                return void 0 !== n ? n : f.attributes || !C ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
            }, re.escape = function(e) {
                return (e + "").replace(te, ie)
            }, re.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, re.uniqueSort = function(e) {
                var t, i = [],
                    n = 0,
                    o = 0;
                if (c = !f.detectDuplicates, l = !f.sortStable && e.slice(0), e.sort(A), c) {
                    for (; t = e[o++];) t === e[o] && (n = i.push(o));
                    for (; n--;) e.splice(i[n], 1)
                }
                return l = null, e
            }, r = re.getText = function(e) {
                var t, i = "",
                    n = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) i += r(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[n++];) i += r(t);
                return i
            }, (w = re.selectors = {
                cacheLength: 50,
                createPseudo: ae,
                match: Y,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, i = !e[6] && e[2];
                        return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && U.test(i) && (t = h(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(Z, ee).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = p[e + " "];
                        return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && p(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(i, n, o) {
                        return function(e) {
                            var t = re.attr(e, i);
                            return null == t ? "!=" === n : !n || (t += "", "=" === n ? t === o : "!=" === n ? t !== o : "^=" === n ? o && 0 === t.indexOf(o) : "*=" === n ? o && -1 < t.indexOf(o) : "$=" === n ? o && t.slice(-o.length) === o : "~=" === n ? -1 < (" " + t.replace(z, " ") + " ").indexOf(o) : "|=" === n && (t === o || t.slice(0, o.length + 1) === o + "-"))
                        }
                    },
                    CHILD: function(h, e, t, g, v) {
                        var m = "nth" !== h.slice(0, 3),
                            y = "last" !== h.slice(-4),
                            b = "of-type" === e;
                        return 1 === g && 0 === v ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, i) {
                            var n, o, r, s, a, l, c = m !== y ? "nextSibling" : "previousSibling",
                                d = e.parentNode,
                                u = b && e.nodeName.toLowerCase(),
                                p = !i && !b,
                                f = !1;
                            if (d) {
                                if (m) {
                                    for (; c;) {
                                        for (s = e; s = s[c];)
                                            if (b ? s.nodeName.toLowerCase() === u : 1 === s.nodeType) return !1;
                                        l = c = "only" === h && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [y ? d.firstChild : d.lastChild], y && p) {
                                    for (f = (a = (n = (o = (r = (s = d)[S] || (s[S] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[h] || [])[0] === $ && n[1]) && n[2], s = a && d.childNodes[a]; s = ++a && s && s[c] || (f = a = 0) || l.pop();)
                                        if (1 === s.nodeType && ++f && s === e) {
                                            o[h] = [$, a, f];
                                            break
                                        }
                                } else if (p && (f = a = (n = (o = (r = (s = e)[S] || (s[S] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[h] || [])[0] === $ && n[1]), !1 === f)
                                    for (;
                                        (s = ++a && s && s[c] || (f = a = 0) || l.pop()) && ((b ? s.nodeName.toLowerCase() !== u : 1 !== s.nodeType) || !++f || (p && ((o = (r = s[S] || (s[S] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[h] = [$, f]), s !== e)););
                                return (f -= v) === g || f % g == 0 && 0 <= f / g
                            }
                        }
                    },
                    PSEUDO: function(e, r) {
                        var t, s = w.pseudos[e] || w.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
                        return s[S] ? s(r) : 1 < s.length ? (t = [e, e, "", r], w.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, t) {
                            for (var i, n = s(e, r), o = n.length; o--;) e[i = L(e, n[o])] = !(t[i] = n[o])
                        }) : function(e) {
                            return s(e, 0, t)
                        }) : s
                    }
                },
                pseudos: {
                    not: ae(function(e) {
                        var n = [],
                            o = [],
                            a = u(e.replace(F, "$1"));
                        return a[S] ? ae(function(e, t, i, n) {
                            for (var o, r = a(e, null, n, []), s = e.length; s--;)(o = r[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, t, i) {
                            return n[0] = e, a(n, null, i, o), n[0] = null, !o.pop()
                        }
                    }),
                    has: ae(function(t) {
                        return function(e) {
                            return 0 < re(t, e).length
                        }
                    }),
                    contains: ae(function(t) {
                        return t = t.replace(Z, ee),
                            function(e) {
                                return -1 < (e.textContent || e.innerText || r(e)).indexOf(t)
                            }
                    }),
                    lang: ae(function(i) {
                        return X.test(i || "") || re.error("unsupported lang: " + i), i = i.replace(Z, ee).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === i || 0 === t.indexOf(i + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = i.location && i.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === s
                    },
                    focus: function(e) {
                        return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: fe(!1),
                    disabled: fe(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !w.pseudos.empty(e)
                    },
                    header: function(e) {
                        return G.test(e.nodeName)
                    },
                    input: function(e) {
                        return V.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: he(function() {
                        return [0]
                    }),
                    last: he(function(e, t) {
                        return [t - 1]
                    }),
                    eq: he(function(e, t, i) {
                        return [i < 0 ? i + t : i]
                    }),
                    even: he(function(e, t) {
                        for (var i = 0; i < t; i += 2) e.push(i);
                        return e
                    }),
                    odd: he(function(e, t) {
                        for (var i = 1; i < t; i += 2) e.push(i);
                        return e
                    }),
                    lt: he(function(e, t, i) {
                        for (var n = i < 0 ? i + t : i; 0 <= --n;) e.push(n);
                        return e
                    }),
                    gt: he(function(e, t, i) {
                        for (var n = i < 0 ? i + t : i; ++n < t;) e.push(n);
                        return e
                    })
                }
            }).pseudos.nth = w.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[e] = ue(e);
        for (e in {
                submit: !0,
                reset: !0
            }) w.pseudos[e] = pe(e);

        function ve() {}

        function me(e) {
            for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
            return n
        }

        function ye(a, e, t) {
            var l = e.dir,
                c = e.next,
                d = c || l,
                u = t && "parentNode" === d,
                p = n++;
            return e.first ? function(e, t, i) {
                for (; e = e[l];)
                    if (1 === e.nodeType || u) return a(e, t, i);
                return !1
            } : function(e, t, i) {
                var n, o, r, s = [$, p];
                if (i) {
                    for (; e = e[l];)
                        if ((1 === e.nodeType || u) && a(e, t, i)) return !0
                } else
                    for (; e = e[l];)
                        if (1 === e.nodeType || u)
                            if (o = (r = e[S] || (e[S] = {}))[e.uniqueID] || (r[e.uniqueID] = {}), c && c === e.nodeName.toLowerCase()) e = e[l] || e;
                            else {
                                if ((n = o[d]) && n[0] === $ && n[1] === p) return s[2] = n[2];
                                if ((o[d] = s)[2] = a(e, t, i)) return !0
                            } return !1
            }
        }

        function be(o) {
            return 1 < o.length ? function(e, t, i) {
                for (var n = o.length; n--;)
                    if (!o[n](e, t, i)) return !1;
                return !0
            } : o[0]
        }

        function we(e, t, i, n, o) {
            for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(r = e[a]) && (i && !i(r, n, o) || (s.push(r), c && t.push(a)));
            return s
        }

        function ke(f, h, g, v, m, e) {
            return v && !v[S] && (v = ke(v)), m && !m[S] && (m = ke(m, e)), ae(function(e, t, i, n) {
                var o, r, s, a = [],
                    l = [],
                    c = t.length,
                    d = e || function(e, t, i) {
                        for (var n = 0, o = t.length; n < o; n++) re(e, t[n], i);
                        return i
                    }(h || "*", i.nodeType ? [i] : i, []),
                    u = !f || !e && h ? d : we(d, a, f, i, n),
                    p = g ? m || (e ? f : c || v) ? [] : t : u;
                if (g && g(u, p, i, n), v)
                    for (o = we(p, l), v(o, [], i, n), r = o.length; r--;)(s = o[r]) && (p[l[r]] = !(u[l[r]] = s));
                if (e) {
                    if (m || f) {
                        if (m) {
                            for (o = [], r = p.length; r--;)(s = p[r]) && o.push(u[r] = s);
                            m(null, p = [], o, n)
                        }
                        for (r = p.length; r--;)(s = p[r]) && -1 < (o = m ? L(e, s) : a[r]) && (e[o] = !(t[o] = s))
                    }
                } else p = we(p === t ? p.splice(c, p.length) : p), m ? m(null, t, p, n) : P.apply(t, p)
            })
        }

        function xe(e) {
            for (var o, t, i, n = e.length, r = w.relative[e[0].type], s = r || w.relative[" "], a = r ? 1 : 0, l = ye(function(e) {
                    return e === o
                }, s, !0), c = ye(function(e) {
                    return -1 < L(o, e)
                }, s, !0), d = [function(e, t, i) {
                    var n = !r && (i || t !== k) || ((o = t).nodeType ? l(e, t, i) : c(e, t, i));
                    return o = null, n
                }]; a < n; a++)
                if (t = w.relative[e[a].type]) d = [ye(be(d), t)];
                else {
                    if ((t = w.filter[e[a].type].apply(null, e[a].matches))[S]) {
                        for (i = ++a; i < n && !w.relative[e[i].type]; i++);
                        return ke(1 < a && be(d), 1 < a && me(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(F, "$1"), t, a < i && xe(e.slice(a, i)), i < n && xe(e = e.slice(i)), i < n && me(e))
                    }
                    d.push(t)
                }
            return be(d)
        }
        return ve.prototype = w.filters = w.pseudos, w.setFilters = new ve, h = re.tokenize = function(e, t) {
            var i, n, o, r, s, a, l, c = b[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, a = [], l = w.preFilter; s;) {
                for (r in i && !(n = W.exec(s)) || (n && (s = s.slice(n[0].length) || s), a.push(o = [])), i = !1, (n = R.exec(s)) && (i = n.shift(), o.push({
                        value: i,
                        type: n[0].replace(F, " ")
                    }), s = s.slice(i.length)), w.filter) !(n = Y[r].exec(s)) || l[r] && !(n = l[r](n)) || (i = n.shift(), o.push({
                    value: i,
                    type: r,
                    matches: n
                }), s = s.slice(i.length));
                if (!i) break
            }
            return t ? s.length : s ? re.error(e) : b(e, a).slice(0)
        }, u = re.compile = function(e, t) {
            var i, v, m, y, b, n, o = [],
                r = [],
                s = _[e + " "];
            if (!s) {
                for (t || (t = h(e)), i = t.length; i--;)(s = xe(t[i]))[S] ? o.push(s) : r.push(s);
                (s = _(e, (v = r, y = 0 < (m = o).length, b = 0 < v.length, n = function(e, t, i, n, o) {
                    var r, s, a, l = 0,
                        c = "0",
                        d = e && [],
                        u = [],
                        p = k,
                        f = e || b && w.find.TAG("*", o),
                        h = $ += null == p ? 1 : Math.random() || .1,
                        g = f.length;
                    for (o && (k = t === T || t || o); c !== g && null != (r = f[c]); c++) {
                        if (b && r) {
                            for (s = 0, t || r.ownerDocument === T || (x(r), i = !C); a = v[s++];)
                                if (a(r, t || T, i)) {
                                    n.push(r);
                                    break
                                }
                            o && ($ = h)
                        }
                        y && ((r = !a && r) && l--, e && d.push(r))
                    }
                    if (l += c, y && c !== l) {
                        for (s = 0; a = m[s++];) a(d, u, t, i);
                        if (e) {
                            if (0 < l)
                                for (; c--;) d[c] || u[c] || (u[c] = D.call(n));
                            u = we(u)
                        }
                        P.apply(n, u), o && !e && 0 < u.length && 1 < l + m.length && re.uniqueSort(n)
                    }
                    return o && ($ = h, k = p), d
                }, y ? ae(n) : n))).selector = e
            }
            return s
        }, g = re.select = function(e, t, i, n) {
            var o, r, s, a, l, c = "function" == typeof e && e,
                d = !n && h(e = c.selector || e);
            if (i = i || [], 1 === d.length) {
                if (2 < (r = d[0] = d[0].slice(0)).length && "ID" === (s = r[0]).type && 9 === t.nodeType && C && w.relative[r[1].type]) {
                    if (!(t = (w.find.ID(s.matches[0].replace(Z, ee), t) || [])[0])) return i;
                    c && (t = t.parentNode), e = e.slice(r.shift().value.length)
                }
                for (o = Y.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !w.relative[a = s.type]);)
                    if ((l = w.find[a]) && (n = l(s.matches[0].replace(Z, ee), K.test(r[0].type) && ge(t.parentNode) || t))) {
                        if (r.splice(o, 1), !(e = n.length && me(r))) return P.apply(i, n), i;
                        break
                    }
            }
            return (c || u(e, d))(n, t, !C, i, !t || K.test(e) && ge(t.parentNode) || t), i
        }, f.sortStable = S.split("").sort(A).join("") === S, f.detectDuplicates = !!c, x(), f.sortDetached = le(function(e) {
            return 1 & e.compareDocumentPosition(T.createElement("fieldset"))
        }), le(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ce("type|href|height|width", function(e, t, i) {
            if (!i) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), f.attributes && le(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ce("value", function(e, t, i) {
            if (!i && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), le(function(e) {
            return null == e.getAttribute("disabled")
        }) || ce(H, function(e, t, i) {
            var n;
            if (!i) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }), re
    }(T);
    S.find = w, S.expr = w.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = w.uniqueSort, S.text = w.getText, S.isXMLDoc = w.isXML, S.contains = w.contains, S.escapeSelector = w.escape;
    var k = function(e, t, i) {
            for (var n = [], o = void 0 !== i;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && S(e).is(i)) break;
                    n.push(e)
                }
            return n
        },
        x = function(e, t) {
            for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
            return i
        },
        $ = S.expr.match.needsContext,
        _ = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        A = /^.[^:#\[\.,]*$/;

    function E(e, i, n) {
        return S.isFunction(i) ? S.grep(e, function(e, t) {
            return !!i.call(e, t, e) !== n
        }) : i.nodeType ? S.grep(e, function(e) {
            return e === i !== n
        }) : "string" != typeof i ? S.grep(e, function(e) {
            return -1 < o.call(i, e) !== n
        }) : A.test(i) ? S.filter(i, e, n) : (i = S.filter(i, e), S.grep(e, function(e) {
            return -1 < o.call(i, e) !== n && 1 === e.nodeType
        }))
    }
    S.filter = function(e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? S.find.matchesSelector(n, e) ? [n] : [] : S.find.matches(e, S.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, S.fn.extend({
        find: function(e) {
            var t, i, n = this.length,
                o = this;
            if ("string" != typeof e) return this.pushStack(S(e).filter(function() {
                for (t = 0; t < n; t++)
                    if (S.contains(o[t], this)) return !0
            }));
            for (i = this.pushStack([]), t = 0; t < n; t++) S.find(e, o[t], i);
            return 1 < n ? S.uniqueSort(i) : i
        },
        filter: function(e) {
            return this.pushStack(E(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(E(this, e || [], !0))
        },
        is: function(e) {
            return !!E(this, "string" == typeof e && $.test(e) ? S(e) : e || [], !1).length
        }
    });
    var D, j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function(e, t, i) {
        var n, o;
        if (!e) return this;
        if (i = i || D, "string" == typeof e) {
            if (!(n = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : j.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), _.test(n[1]) && S.isPlainObject(t))
                    for (n in t) S.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            return (o = C.getElementById(n[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : S.isFunction(e) ? void 0 !== i.ready ? i.ready(e) : e(S) : S.makeArray(e, this)
    }).prototype = S.fn, D = S(C);
    var P = /^(?:parents|prev(?:Until|All))/,
        N = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function L(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    S.fn.extend({
        has: function(e) {
            var t = S(e, this),
                i = t.length;
            return this.filter(function() {
                for (var e = 0; e < i; e++)
                    if (S.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var i, n = 0,
                o = this.length,
                r = [],
                s = "string" != typeof e && S(e);
            if (!$.test(e))
                for (; n < o; n++)
                    for (i = this[n]; i && i !== t; i = i.parentNode)
                        if (i.nodeType < 11 && (s ? -1 < s.index(i) : 1 === i.nodeType && S.find.matchesSelector(i, e))) {
                            r.push(i);
                            break
                        }
            return this.pushStack(1 < r.length ? S.uniqueSort(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? o.call(S(e), this[0]) : o.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), S.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return k(e, "parentNode")
        },
        parentsUntil: function(e, t, i) {
            return k(e, "parentNode", i)
        },
        next: function(e) {
            return L(e, "nextSibling")
        },
        prev: function(e) {
            return L(e, "previousSibling")
        },
        nextAll: function(e) {
            return k(e, "nextSibling")
        },
        prevAll: function(e) {
            return k(e, "previousSibling")
        },
        nextUntil: function(e, t, i) {
            return k(e, "nextSibling", i)
        },
        prevUntil: function(e, t, i) {
            return k(e, "previousSibling", i)
        },
        siblings: function(e) {
            return x((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return x(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || S.merge([], e.childNodes)
        }
    }, function(n, o) {
        S.fn[n] = function(e, t) {
            var i = S.map(this, o, e);
            return "Until" !== n.slice(-5) && (t = e), t && "string" == typeof t && (i = S.filter(t, i)), 1 < this.length && (N[n] || S.uniqueSort(i), P.test(n) && i.reverse()), this.pushStack(i)
        }
    });
    var H = /[^\x20\t\r\n\f]+/g;

    function O(e) {
        return e
    }

    function q(e) {
        throw e
    }

    function M(e, t, i) {
        var n;
        try {
            e && S.isFunction(n = e.promise) ? n.call(e).done(t).fail(i) : e && S.isFunction(n = e.then) ? n.call(e, t, i) : t.call(void 0, e)
        } catch (e) {
            i.call(void 0, e)
        }
    }
    S.Callbacks = function(n) {
        var e, i;
        n = "string" == typeof n ? (e = n, i = {}, S.each(e.match(H) || [], function(e, t) {
            i[t] = !0
        }), i) : S.extend({}, n);
        var o, t, r, s, a = [],
            l = [],
            c = -1,
            d = function() {
                for (s = n.once, r = o = !0; l.length; c = -1)
                    for (t = l.shift(); ++c < a.length;) !1 === a[c].apply(t[0], t[1]) && n.stopOnFalse && (c = a.length, t = !1);
                n.memory || (t = !1), o = !1, s && (a = t ? [] : "")
            },
            u = {
                add: function() {
                    return a && (t && !o && (c = a.length - 1, l.push(t)), function i(e) {
                        S.each(e, function(e, t) {
                            S.isFunction(t) ? n.unique && u.has(t) || a.push(t) : t && t.length && "string" !== S.type(t) && i(t)
                        })
                    }(arguments), t && !o && d()), this
                },
                remove: function() {
                    return S.each(arguments, function(e, t) {
                        for (var i; - 1 < (i = S.inArray(t, a, i));) a.splice(i, 1), i <= c && c--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < S.inArray(e, a) : 0 < a.length
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return s = l = [], a = t = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return s = l = [], t || o || (a = t = ""), this
                },
                locked: function() {
                    return !!s
                },
                fireWith: function(e, t) {
                    return s || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), o || d()), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return u
    }, S.extend({
        Deferred: function(e) {
            var r = [
                    ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                    ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
                ],
                o = "pending",
                s = {
                    state: function() {
                        return o
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return s.then(null, e)
                    },
                    pipe: function() {
                        var o = arguments;
                        return S.Deferred(function(n) {
                            S.each(r, function(e, t) {
                                var i = S.isFunction(o[t[4]]) && o[t[4]];
                                a[t[1]](function() {
                                    var e = i && i.apply(this, arguments);
                                    e && S.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[t[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), o = null
                        }).promise()
                    },
                    then: function(t, i, n) {
                        var l = 0;

                        function c(o, r, s, a) {
                            return function() {
                                var i = this,
                                    n = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(o < l)) {
                                            if ((e = s.apply(i, n)) === r.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, S.isFunction(t) ? a ? t.call(e, c(l, r, O, a), c(l, r, q, a)) : (l++, t.call(e, c(l, r, O, a), c(l, r, q, a), c(l, r, O, r.notifyWith))) : (s !== O && (i = void 0, n = [e]), (a || r.resolveWith)(i, n))
                                        }
                                    },
                                    t = a ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), l <= o + 1 && (s !== q && (i = void 0, n = [e]), r.rejectWith(i, n))
                                        }
                                    };
                                o ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), T.setTimeout(t))
                            }
                        }
                        return S.Deferred(function(e) {
                            r[0][3].add(c(0, e, S.isFunction(n) ? n : O, e.notifyWith)), r[1][3].add(c(0, e, S.isFunction(t) ? t : O)), r[2][3].add(c(0, e, S.isFunction(i) ? i : q))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? S.extend(e, s) : s
                    }
                },
                a = {};
            return S.each(r, function(e, t) {
                var i = t[2],
                    n = t[5];
                s[t[1]] = i.add, n && i.add(function() {
                    o = n
                }, r[3 - e][2].disable, r[0][2].lock), i.add(t[3].fire), a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                }, a[t[0] + "With"] = i.fireWith
            }), s.promise(a), e && e.call(a, a), a
        },
        when: function(e) {
            var i = arguments.length,
                t = i,
                n = Array(t),
                o = a.call(arguments),
                r = S.Deferred(),
                s = function(t) {
                    return function(e) {
                        n[t] = this, o[t] = 1 < arguments.length ? a.call(arguments) : e, --i || r.resolveWith(n, o)
                    }
                };
            if (i <= 1 && (M(e, r.done(s(t)).resolve, r.reject), "pending" === r.state() || S.isFunction(o[t] && o[t].then))) return r.then();
            for (; t--;) M(o[t], s(t), r.reject);
            return r.promise()
        }
    });
    var I = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function(e, t) {
        T.console && T.console.warn && e && I.test(e.name) && T.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, S.readyException = function(e) {
        T.setTimeout(function() {
            throw e
        })
    };
    var z = S.Deferred();

    function F() {
        C.removeEventListener("DOMContentLoaded", F), T.removeEventListener("load", F), S.ready()
    }
    S.fn.ready = function(e) {
        return z.then(e).catch(function(e) {
            S.readyException(e)
        }), this
    }, S.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? S.readyWait++ : S.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || ((S.isReady = !0) !== e && 0 < --S.readyWait || z.resolveWith(C, [S]))
        }
    }), S.ready.then = z.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? T.setTimeout(S.ready) : (C.addEventListener("DOMContentLoaded", F), T.addEventListener("load", F));
    var W = function(e, t, i, n, o, r, s) {
            var a = 0,
                l = e.length,
                c = null == i;
            if ("object" === S.type(i))
                for (a in o = !0, i) W(e, t, a, i[a], !0, r, s);
            else if (void 0 !== n && (o = !0, S.isFunction(n) || (s = !0), c && (s ? (t.call(e, n), t = null) : (c = t, t = function(e, t, i) {
                    return c.call(S(e), i)
                })), t))
                for (; a < l; a++) t(e[a], i, s ? n : n.call(e[a], a, t(e[a], i)));
            return o ? e : c ? t.call(e) : l ? t(e[0], i) : r
        },
        R = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };

    function B() {
        this.expando = S.expando + B.uid++
    }
    B.uid = 1, B.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, R(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, i) {
            var n, o = this.cache(e);
            if ("string" == typeof t) o[S.camelCase(t)] = i;
            else
                for (n in t) o[S.camelCase(n)] = t[n];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][S.camelCase(t)]
        },
        access: function(e, t, i) {
            return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i), void 0 !== i ? i : t)
        },
        remove: function(e, t) {
            var i, n = e[this.expando];
            if (void 0 !== n) {
                if (void 0 !== t) {
                    S.isArray(t) ? t = t.map(S.camelCase) : t = (t = S.camelCase(t)) in n ? [t] : t.match(H) || [], i = t.length;
                    for (; i--;) delete n[t[i]]
                }(void 0 === t || S.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t)
        }
    };
    var U = new B,
        X = new B,
        Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        V = /[A-Z]/g;

    function G(e, t, i) {
        var n, o;
        if (void 0 === i && 1 === e.nodeType)
            if (n = "data-" + t.replace(V, "-$&").toLowerCase(), "string" == typeof(i = e.getAttribute(n))) {
                try {
                    i = "true" === (o = i) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : Y.test(o) ? JSON.parse(o) : o)
                } catch (e) {}
                X.set(e, t, i)
            } else i = void 0;
        return i
    }
    S.extend({
        hasData: function(e) {
            return X.hasData(e) || U.hasData(e)
        },
        data: function(e, t, i) {
            return X.access(e, t, i)
        },
        removeData: function(e, t) {
            X.remove(e, t)
        },
        _data: function(e, t, i) {
            return U.access(e, t, i)
        },
        _removeData: function(e, t) {
            U.remove(e, t)
        }
    }), S.fn.extend({
        data: function(i, e) {
            var t, n, o, r = this[0],
                s = r && r.attributes;
            if (void 0 === i) {
                if (this.length && (o = X.get(r), 1 === r.nodeType && !U.get(r, "hasDataAttrs"))) {
                    for (t = s.length; t--;) s[t] && (0 === (n = s[t].name).indexOf("data-") && (n = S.camelCase(n.slice(5)), G(r, n, o[n])));
                    U.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof i ? this.each(function() {
                X.set(this, i)
            }) : W(this, function(e) {
                var t;
                if (r && void 0 === e) {
                    if (void 0 !== (t = X.get(r, i))) return t;
                    if (void 0 !== (t = G(r, i))) return t
                } else this.each(function() {
                    X.set(this, i, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                X.remove(this, e)
            })
        }
    }), S.extend({
        queue: function(e, t, i) {
            var n;
            if (e) return t = (t || "fx") + "queue", n = U.get(e, t), i && (!n || S.isArray(i) ? n = U.access(e, t, S.makeArray(i)) : n.push(i)), n || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var i = S.queue(e, t),
                n = i.length,
                o = i.shift(),
                r = S._queueHooks(e, t);
            "inprogress" === o && (o = i.shift(), n--), o && ("fx" === t && i.unshift("inprogress"), delete r.stop, o.call(e, function() {
                S.dequeue(e, t)
            }, r)), !n && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var i = t + "queueHooks";
            return U.get(e, i) || U.access(e, i, {
                empty: S.Callbacks("once memory").add(function() {
                    U.remove(e, [t + "queue", i])
                })
            })
        }
    }), S.fn.extend({
        queue: function(t, i) {
            var e = 2;
            return "string" != typeof t && (i = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === i ? this : this.each(function() {
                var e = S.queue(this, t, i);
                S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                S.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var i, n = 1,
                o = S.Deferred(),
                r = this,
                s = this.length,
                a = function() {
                    --n || o.resolveWith(r, [r])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(i = U.get(r[s], e + "queueHooks")) && i.empty && (n++, i.empty.add(a));
            return a(), o.promise(t)
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        J = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
        K = ["Top", "Right", "Bottom", "Left"],
        Z = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && S.contains(e.ownerDocument, e) && "none" === S.css(e, "display")
        },
        ee = function(e, t, i, n) {
            var o, r, s = {};
            for (r in t) s[r] = e.style[r], e.style[r] = t[r];
            for (r in o = i.apply(e, n || []), t) e.style[r] = s[r];
            return o
        };

    function te(e, t, i, n) {
        var o, r = 1,
            s = 20,
            a = n ? function() {
                return n.cur()
            } : function() {
                return S.css(e, t, "")
            },
            l = a(),
            c = i && i[3] || (S.cssNumber[t] ? "" : "px"),
            d = (S.cssNumber[t] || "px" !== c && +l) && J.exec(S.css(e, t));
        if (d && d[3] !== c)
            for (c = c || d[3], i = i || [], d = +l || 1; d /= r = r || ".5", S.style(e, t, d + c), r !== (r = a() / l) && 1 !== r && --s;);
        return i && (d = +d || +l || 0, o = i[1] ? d + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = d, n.end = o)), o
    }
    var ie = {};

    function ne(e, t) {
        for (var i, n, o = [], r = 0, s = e.length; r < s; r++)(n = e[r]).style && (i = n.style.display, t ? ("none" === i && (o[r] = U.get(n, "display") || null, o[r] || (n.style.display = "")), "" === n.style.display && Z(n) && (o[r] = (u = c = l = void 0, c = (a = n).ownerDocument, d = a.nodeName, (u = ie[d]) || (l = c.body.appendChild(c.createElement(d)), u = S.css(l, "display"), l.parentNode.removeChild(l), "none" === u && (u = "block"), ie[d] = u)))) : "none" !== i && (o[r] = "none", U.set(n, "display", i)));
        var a, l, c, d, u;
        for (r = 0; r < s; r++) null != o[r] && (e[r].style.display = o[r]);
        return e
    }
    S.fn.extend({
        show: function() {
            return ne(this, !0)
        },
        hide: function() {
            return ne(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Z(this) ? S(this).show() : S(this).hide()
            })
        }
    });
    var oe = /^(?:checkbox|radio)$/i,
        re = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        se = /^$|\/(?:java|ecma)script/i,
        ae = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function le(e, t) {
        var i;
        return i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && S.nodeName(e, t) ? S.merge([e], i) : i
    }

    function ce(e, t) {
        for (var i = 0, n = e.length; i < n; i++) U.set(e[i], "globalEval", !t || U.get(t[i], "globalEval"))
    }
    ae.optgroup = ae.option, ae.tbody = ae.tfoot = ae.colgroup = ae.caption = ae.thead, ae.th = ae.td;
    var de, ue, pe = /<|&#?\w+;/;

    function fe(e, t, i, n, o) {
        for (var r, s, a, l, c, d, u = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++)
            if ((r = e[f]) || 0 === r)
                if ("object" === S.type(r)) S.merge(p, r.nodeType ? [r] : r);
                else if (pe.test(r)) {
            for (s = s || u.appendChild(t.createElement("div")), a = (re.exec(r) || ["", ""])[1].toLowerCase(), l = ae[a] || ae._default, s.innerHTML = l[1] + S.htmlPrefilter(r) + l[2], d = l[0]; d--;) s = s.lastChild;
            S.merge(p, s.childNodes), (s = u.firstChild).textContent = ""
        } else p.push(t.createTextNode(r));
        for (u.textContent = "", f = 0; r = p[f++];)
            if (n && -1 < S.inArray(r, n)) o && o.push(r);
            else if (c = S.contains(r.ownerDocument, r), s = le(u.appendChild(r), "script"), c && ce(s), i)
            for (d = 0; r = s[d++];) se.test(r.type || "") && i.push(r);
        return u
    }
    de = C.createDocumentFragment().appendChild(C.createElement("div")), (ue = C.createElement("input")).setAttribute("type", "radio"), ue.setAttribute("checked", "checked"), ue.setAttribute("name", "t"), de.appendChild(ue), v.checkClone = de.cloneNode(!0).cloneNode(!0).lastChild.checked, de.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!de.cloneNode(!0).lastChild.defaultValue;
    var he = C.documentElement,
        ge = /^key/,
        ve = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        me = /^([^.]*)(?:\.(.+)|)/;

    function ye() {
        return !0
    }

    function be() {
        return !1
    }

    function we() {
        try {
            return C.activeElement
        } catch (e) {}
    }

    function ke(e, t, i, n, o, r) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof i && (n = n || i, i = void 0), t) ke(e, a, i, n, t[a], r);
            return e
        }
        if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), !1 === o) o = be;
        else if (!o) return e;
        return 1 === r && (s = o, (o = function(e) {
            return S().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = S.guid++)), e.each(function() {
            S.event.add(this, t, o, n, i)
        })
    }
    S.event = {
        global: {},
        add: function(t, e, i, n, o) {
            var r, s, a, l, c, d, u, p, f, h, g, v = U.get(t);
            if (v)
                for (i.handler && (i = (r = i).handler, o = r.selector), o && S.find.matchesSelector(he, o), i.guid || (i.guid = S.guid++), (l = v.events) || (l = v.events = {}), (s = v.handle) || (s = v.handle = function(e) {
                        return void 0 !== S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                    }), c = (e = (e || "").match(H) || [""]).length; c--;) f = g = (a = me.exec(e[c]) || [])[1], h = (a[2] || "").split(".").sort(), f && (u = S.event.special[f] || {}, f = (o ? u.delegateType : u.bindType) || f, u = S.event.special[f] || {}, d = S.extend({
                    type: f,
                    origType: g,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: o,
                    needsContext: o && S.expr.match.needsContext.test(o),
                    namespace: h.join(".")
                }, r), (p = l[f]) || ((p = l[f] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(t, n, h, s) || t.addEventListener && t.addEventListener(f, s)), u.add && (u.add.call(t, d), d.handler.guid || (d.handler.guid = i.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), S.event.global[f] = !0)
        },
        remove: function(e, t, i, n, o) {
            var r, s, a, l, c, d, u, p, f, h, g, v = U.hasData(e) && U.get(e);
            if (v && (l = v.events)) {
                for (c = (t = (t || "").match(H) || [""]).length; c--;)
                    if (f = g = (a = me.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), f) {
                        for (u = S.event.special[f] || {}, p = l[f = (n ? u.delegateType : u.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) d = p[r], !o && g !== d.origType || i && i.guid !== d.guid || a && !a.test(d.namespace) || n && n !== d.selector && ("**" !== n || !d.selector) || (p.splice(r, 1), d.selector && p.delegateCount--, u.remove && u.remove.call(e, d));
                        s && !p.length && (u.teardown && !1 !== u.teardown.call(e, h, v.handle) || S.removeEvent(e, f, v.handle), delete l[f])
                    } else
                        for (f in l) S.event.remove(e, f + t[c], i, n, !0);
                S.isEmptyObject(l) && U.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, i, n, o, r, s, a = S.event.fix(e),
                l = new Array(arguments.length),
                c = (U.get(this, "events") || {})[a.type] || [],
                d = S.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, a)) {
                for (s = S.event.handlers.call(this, a, c), t = 0;
                    (o = s[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = o.elem, i = 0;
                        (r = o.handlers[i++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, void 0 !== (n = ((S.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (a.result = n) && (a.preventDefault(), a.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(e, t) {
            var i, n, o, r, s, a = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (r = [], s = {}, i = 0; i < l; i++) void 0 === s[o = (n = t[i]).selector + " "] && (s[o] = n.needsContext ? -1 < S(o, this).index(c) : S.find(o, this, null, [c]).length), s[o] && r.push(n);
                        r.length && a.push({
                            elem: c,
                            handlers: r
                        })
                    }
            return c = this, l < t.length && a.push({
                elem: c,
                handlers: t.slice(l)
            }), a
        },
        addProp: function(t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: S.isFunction(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[S.expando] ? e : new S.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== we() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === we() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && S.nodeName(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return S.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, S.removeEvent = function(e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i)
    }, S.Event = function(e, t) {
        return this instanceof S.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ye : be, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || S.now(), void(this[S.expando] = !0)) : new S.Event(e, t)
    }, S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: be,
        isPropagationStopped: be,
        isImmediatePropagationStopped: be,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = ye, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = ye, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ye, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, S.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && ge.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ve.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, S.event.addProp), S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, o) {
        S.event.special[e] = {
            delegateType: o,
            bindType: o,
            handle: function(e) {
                var t, i = e.relatedTarget,
                    n = e.handleObj;
                return i && (i === this || S.contains(this, i)) || (e.type = n.origType, t = n.handler.apply(this, arguments), e.type = o), t
            }
        }
    }), S.fn.extend({
        on: function(e, t, i, n) {
            return ke(this, e, t, i, n)
        },
        one: function(e, t, i, n) {
            return ke(this, e, t, i, n, 1)
        },
        off: function(e, t, i) {
            var n, o;
            if (e && e.preventDefault && e.handleObj) return n = e.handleObj, S(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return !1 !== t && "function" != typeof t || (i = t, t = void 0), !1 === i && (i = be), this.each(function() {
                S.event.remove(this, e, i, t)
            })
        }
    });
    var xe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Te = /<script|<style|<link/i,
        Ce = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Se = /^true\/(.*)/,
        $e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function _e(e, t) {
        return S.nodeName(e, "table") && S.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") && e.getElementsByTagName("tbody")[0] || e
    }

    function Ae(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Ee(e) {
        var t = Se.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function De(e, t) {
        var i, n, o, r, s, a, l, c;
        if (1 === t.nodeType) {
            if (U.hasData(e) && (r = U.access(e), s = U.set(t, r), c = r.events))
                for (o in delete s.handle, s.events = {}, c)
                    for (i = 0, n = c[o].length; i < n; i++) S.event.add(t, o, c[o][i]);
            X.hasData(e) && (a = X.access(e), l = S.extend({}, a), X.set(t, l))
        }
    }

    function je(i, n, o, r) {
        n = g.apply([], n);
        var e, t, s, a, l, c, d = 0,
            u = i.length,
            p = u - 1,
            f = n[0],
            h = S.isFunction(f);
        if (h || 1 < u && "string" == typeof f && !v.checkClone && Ce.test(f)) return i.each(function(e) {
            var t = i.eq(e);
            h && (n[0] = f.call(this, e, t.html())), je(t, n, o, r)
        });
        if (u && (t = (e = fe(n, i[0].ownerDocument, !1, i, r)).firstChild, 1 === e.childNodes.length && (e = t), t || r)) {
            for (a = (s = S.map(le(e, "script"), Ae)).length; d < u; d++) l = e, d !== p && (l = S.clone(l, !0, !0), a && S.merge(s, le(l, "script"))), o.call(i[d], l, d);
            if (a)
                for (c = s[s.length - 1].ownerDocument, S.map(s, Ee), d = 0; d < a; d++) l = s[d], se.test(l.type || "") && !U.access(l, "globalEval") && S.contains(c, l) && (l.src ? S._evalUrl && S._evalUrl(l.src) : m(l.textContent.replace($e, ""), c))
        }
        return i
    }

    function Pe(e, t, i) {
        for (var n, o = t ? S.filter(t, e) : e, r = 0; null != (n = o[r]); r++) i || 1 !== n.nodeType || S.cleanData(le(n)), n.parentNode && (i && S.contains(n.ownerDocument, n) && ce(le(n, "script")), n.parentNode.removeChild(n));
        return e
    }
    S.extend({
        htmlPrefilter: function(e) {
            return e.replace(xe, "<$1></$2>")
        },
        clone: function(e, t, i) {
            var n, o, r, s, a, l, c, d = e.cloneNode(!0),
                u = S.contains(e.ownerDocument, e);
            if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (s = le(d), n = 0, o = (r = le(e)).length; n < o; n++) a = r[n], l = s[n], void 0, "input" === (c = l.nodeName.toLowerCase()) && oe.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
            if (t)
                if (i)
                    for (r = r || le(e), s = s || le(d), n = 0, o = r.length; n < o; n++) De(r[n], s[n]);
                else De(e, d);
            return 0 < (s = le(d, "script")).length && ce(s, !u && le(e, "script")), d
        },
        cleanData: function(e) {
            for (var t, i, n, o = S.event.special, r = 0; void 0 !== (i = e[r]); r++)
                if (R(i)) {
                    if (t = i[U.expando]) {
                        if (t.events)
                            for (n in t.events) o[n] ? S.event.remove(i, n) : S.removeEvent(i, n, t.handle);
                        i[U.expando] = void 0
                    }
                    i[X.expando] && (i[X.expando] = void 0)
                }
        }
    }), S.fn.extend({
        detach: function(e) {
            return Pe(this, e, !0)
        },
        remove: function(e) {
            return Pe(this, e)
        },
        text: function(e) {
            return W(this, function(e) {
                return void 0 === e ? S.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return je(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || _e(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return je(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = _e(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return je(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return je(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(le(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return S.clone(this, e, t)
            })
        },
        html: function(e) {
            return W(this, function(e) {
                var t = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Te.test(e) && !ae[(re.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; i < n; i++) 1 === (t = this[i] || {}).nodeType && (S.cleanData(le(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var i = [];
            return je(this, arguments, function(e) {
                var t = this.parentNode;
                S.inArray(this, i) < 0 && (S.cleanData(le(this)), t && t.replaceChild(e, this))
            }, i)
        }
    }), S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        S.fn[e] = function(e) {
            for (var t, i = [], n = S(e), o = n.length - 1, r = 0; r <= o; r++) t = r === o ? this : this.clone(!0), S(n[r])[s](t), l.apply(i, t.get());
            return this.pushStack(i)
        }
    });
    var Ne = /^margin/,
        Le = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
        He = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = T), t.getComputedStyle(e)
        };

    function Oe(e, t, i) {
        var n, o, r, s, a = e.style;
        return (i = i || He(e)) && ("" !== (s = i.getPropertyValue(t) || i[t]) || S.contains(e.ownerDocument, e) || (s = S.style(e, t)), !v.pixelMarginRight() && Le.test(s) && Ne.test(t) && (n = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
    }

    function qe(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }! function() {
        function e() {
            if (s) {
                s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", he.appendChild(r);
                var e = T.getComputedStyle(s);
                t = "1%" !== e.top, o = "2px" === e.marginLeft, i = "4px" === e.width, s.style.marginRight = "50%", n = "4px" === e.marginRight, he.removeChild(r), s = null
            }
        }
        var t, i, n, o, r = C.createElement("div"),
            s = C.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === s.style.backgroundClip, r.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", r.appendChild(s), S.extend(v, {
            pixelPosition: function() {
                return e(), t
            },
            boxSizingReliable: function() {
                return e(), i
            },
            pixelMarginRight: function() {
                return e(), n
            },
            reliableMarginLeft: function() {
                return e(), o
            }
        }))
    }();
    var Me = /^(none|table(?!-c[ea]).+)/,
        Ie = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ze = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Fe = ["Webkit", "Moz", "ms"],
        We = C.createElement("div").style;

    function Re(e) {
        if (e in We) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), i = Fe.length; i--;)
            if ((e = Fe[i] + t) in We) return e
    }

    function Be(e, t, i) {
        var n = J.exec(t);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
    }

    function Ue(e, t, i, n, o) {
        var r, s = 0;
        for (r = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0; r < 4; r += 2) "margin" === i && (s += S.css(e, i + K[r], !0, o)), n ? ("content" === i && (s -= S.css(e, "padding" + K[r], !0, o)), "margin" !== i && (s -= S.css(e, "border" + K[r] + "Width", !0, o))) : (s += S.css(e, "padding" + K[r], !0, o), "padding" !== i && (s += S.css(e, "border" + K[r] + "Width", !0, o)));
        return s
    }

    function Xe(e, t, i) {
        var n, o = !0,
            r = He(e),
            s = "border-box" === S.css(e, "boxSizing", !1, r);
        if (e.getClientRects().length && (n = e.getBoundingClientRect()[t]), n <= 0 || null == n) {
            if (((n = Oe(e, t, r)) < 0 || null == n) && (n = e.style[t]), Le.test(n)) return n;
            o = s && (v.boxSizingReliable() || n === e.style[t]), n = parseFloat(n) || 0
        }
        return n + Ue(e, t, i || (s ? "border" : "content"), o, r) + "px"
    }

    function Ye(e, t, i, n, o) {
        return new Ye.prototype.init(e, t, i, n, o)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var i = Oe(e, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = S.camelCase(t),
                    l = e.style;
                return t = S.cssProps[a] || (S.cssProps[a] = Re(a) || a), s = S.cssHooks[t] || S.cssHooks[a], void 0 === i ? s && "get" in s && void 0 !== (o = s.get(e, !1, n)) ? o : l[t] : ("string" === (r = typeof i) && (o = J.exec(i)) && o[1] && (i = te(e, t, o), r = "number"), void(null != i && i == i && ("number" === r && (i += o && o[3] || (S.cssNumber[a] ? "" : "px")), v.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (i = s.set(e, i, n)) || (l[t] = i))))
            }
        },
        css: function(e, t, i, n) {
            var o, r, s, a = S.camelCase(t);
            return t = S.cssProps[a] || (S.cssProps[a] = Re(a) || a), (s = S.cssHooks[t] || S.cssHooks[a]) && "get" in s && (o = s.get(e, !0, i)), void 0 === o && (o = Oe(e, t, n)), "normal" === o && t in ze && (o = ze[t]), "" === i || i ? (r = parseFloat(o), !0 === i || isFinite(r) ? r || 0 : o) : o
        }
    }), S.each(["height", "width"], function(e, s) {
        S.cssHooks[s] = {
            get: function(e, t, i) {
                if (t) return !Me.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Xe(e, s, i) : ee(e, Ie, function() {
                    return Xe(e, s, i)
                })
            },
            set: function(e, t, i) {
                var n, o = i && He(e),
                    r = i && Ue(e, s, i, "border-box" === S.css(e, "boxSizing", !1, o), o);
                return r && (n = J.exec(t)) && "px" !== (n[3] || "px") && (e.style[s] = t, t = S.css(e, s)), Be(0, t, r)
            }
        }
    }), S.cssHooks.marginLeft = qe(v.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Oe(e, "marginLeft")) || e.getBoundingClientRect().left - ee(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(o, r) {
        S.cssHooks[o + r] = {
            expand: function(e) {
                for (var t = 0, i = {}, n = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) i[o + K[t] + r] = n[t] || n[t - 2] || n[0];
                return i
            }
        }, Ne.test(o) || (S.cssHooks[o + r].set = Be)
    }), S.fn.extend({
        css: function(e, t) {
            return W(this, function(e, t, i) {
                var n, o, r = {},
                    s = 0;
                if (S.isArray(t)) {
                    for (n = He(e), o = t.length; s < o; s++) r[t[s]] = S.css(e, t[s], !1, n);
                    return r
                }
                return void 0 !== i ? S.style(e, t, i) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((S.Tween = Ye).prototype = {
        constructor: Ye,
        init: function(e, t, i, n, o, r) {
            this.elem = e, this.prop = i, this.easing = o || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = r || (S.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var e = Ye.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ye.propHooks._default.get(this)
        },
        run: function(e) {
            var t, i = Ye.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Ye.propHooks._default.set(this), this
        }
    }).init.prototype = Ye.prototype, (Ye.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[S.cssProps[e.prop]] && !S.cssHooks[e.prop] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Ye.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, S.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, S.fx = Ye.prototype.init, S.fx.step = {};
    var Ve, Ge, Qe, Je, Ke = /^(?:toggle|show|hide)$/,
        Ze = /queueHooks$/;

    function et() {
        Ge && (T.requestAnimationFrame(et), S.fx.tick())
    }

    function tt() {
        return T.setTimeout(function() {
            Ve = void 0
        }), Ve = S.now()
    }

    function it(e, t) {
        var i, n = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; n < 4; n += 2 - t) o["margin" + (i = K[n])] = o["padding" + i] = e;
        return t && (o.opacity = o.width = e), o
    }

    function nt(e, t, i) {
        for (var n, o = (ot.tweeners[t] || []).concat(ot.tweeners["*"]), r = 0, s = o.length; r < s; r++)
            if (n = o[r].call(i, t, e)) return n
    }

    function ot(r, e, t) {
        var i, s, n = 0,
            o = ot.prefilters.length,
            a = S.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (s) return !1;
                for (var e = Ve || tt(), t = Math.max(0, c.startTime + c.duration - e), i = 1 - (t / c.duration || 0), n = 0, o = c.tweens.length; n < o; n++) c.tweens[n].run(i);
                return a.notifyWith(r, [c, i, t]), i < 1 && o ? t : (a.resolveWith(r, [c]), !1)
            },
            c = a.promise({
                elem: r,
                props: S.extend({}, e),
                opts: S.extend(!0, {
                    specialEasing: {},
                    easing: S.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: Ve || tt(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var i = S.Tween(r, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(e) {
                    var t = 0,
                        i = e ? c.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; t < i; t++) c.tweens[t].run(1);
                    return e ? (a.notifyWith(r, [c, 1, 0]), a.resolveWith(r, [c, e])) : a.rejectWith(r, [c, e]), this
                }
            }),
            d = c.props;
        for (function(e, t) {
                var i, n, o, r, s;
                for (i in e)
                    if (o = t[n = S.camelCase(i)], r = e[i], S.isArray(r) && (o = r[1], r = e[i] = r[0]), i !== n && (e[n] = r, delete e[i]), (s = S.cssHooks[n]) && "expand" in s)
                        for (i in r = s.expand(r), delete e[n], r) i in e || (e[i] = r[i], t[i] = o);
                    else t[n] = o
            }(d, c.opts.specialEasing); n < o; n++)
            if (i = ot.prefilters[n].call(c, r, d, c.opts)) return S.isFunction(i.stop) && (S._queueHooks(c.elem, c.opts.queue).stop = S.proxy(i.stop, i)), i;
        return S.map(d, nt, c), S.isFunction(c.opts.start) && c.opts.start.call(r, c), S.fx.timer(S.extend(l, {
            elem: r,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    S.Animation = S.extend(ot, {
        tweeners: {
            "*": [function(e, t) {
                var i = this.createTween(e, t);
                return te(i.elem, e, J.exec(t), i), i
            }]
        },
        tweener: function(e, t) {
            S.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(H);
            for (var i, n = 0, o = e.length; n < o; n++) i = e[n], ot.tweeners[i] = ot.tweeners[i] || [], ot.tweeners[i].unshift(t)
        },
        prefilters: [function(e, t, i) {
            var n, o, r, s, a, l, c, d, u = "width" in t || "height" in t,
                p = this,
                f = {},
                h = e.style,
                g = e.nodeType && Z(e),
                v = U.get(e, "fxshow");
            for (n in i.queue || (null == (s = S._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                    s.unqueued || a()
                }), s.unqueued++, p.always(function() {
                    p.always(function() {
                        s.unqueued--, S.queue(e, "fx").length || s.empty.fire()
                    })
                })), t)
                if (o = t[n], Ke.test(o)) {
                    if (delete t[n], r = r || "toggle" === o, o === (g ? "hide" : "show")) {
                        if ("show" !== o || !v || void 0 === v[n]) continue;
                        g = !0
                    }
                    f[n] = v && v[n] || S.style(e, n)
                }
            if ((l = !S.isEmptyObject(t)) || !S.isEmptyObject(f))
                for (n in u && 1 === e.nodeType && (i.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = v && v.display) && (c = U.get(e, "display")), "none" === (d = S.css(e, "display")) && (c ? d = c : (ne([e], !0), c = e.style.display || c, d = S.css(e, "display"), ne([e]))), ("inline" === d || "inline-block" === d && null != c) && "none" === S.css(e, "float") && (l || (p.done(function() {
                        h.display = c
                    }), null == c && (d = h.display, c = "none" === d ? "" : d)), h.display = "inline-block")), i.overflow && (h.overflow = "hidden", p.always(function() {
                        h.overflow = i.overflow[0], h.overflowX = i.overflow[1], h.overflowY = i.overflow[2]
                    })), l = !1, f) l || (v ? "hidden" in v && (g = v.hidden) : v = U.access(e, "fxshow", {
                    display: c
                }), r && (v.hidden = !g), g && ne([e], !0), p.done(function() {
                    for (n in g || ne([e]), U.remove(e, "fxshow"), f) S.style(e, n, f[n])
                })), l = nt(g ? v[n] : 0, n, p), n in v || (v[n] = l.start, g && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(e, t) {
            t ? ot.prefilters.unshift(e) : ot.prefilters.push(e)
        }
    }), S.speed = function(e, t, i) {
        var n = e && "object" == typeof e ? S.extend({}, e) : {
            complete: i || !i && t || S.isFunction(e) && e,
            duration: e,
            easing: i && t || t && !S.isFunction(t) && t
        };
        return S.fx.off || C.hidden ? n.duration = 0 : "number" != typeof n.duration && (n.duration in S.fx.speeds ? n.duration = S.fx.speeds[n.duration] : n.duration = S.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
            S.isFunction(n.old) && n.old.call(this), n.queue && S.dequeue(this, n.queue)
        }, n
    }, S.fn.extend({
        fadeTo: function(e, t, i, n) {
            return this.filter(Z).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, i, n)
        },
        animate: function(t, e, i, n) {
            var o = S.isEmptyObject(t),
                r = S.speed(e, i, n),
                s = function() {
                    var e = ot(this, S.extend({}, t), r);
                    (o || U.get(this, "finish")) && e.stop(!0)
                };
            return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
        },
        stop: function(o, e, r) {
            var s = function(e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof o && (r = e, e = o, o = void 0), e && !1 !== o && this.queue(o || "fx", []), this.each(function() {
                var e = !0,
                    t = null != o && o + "queueHooks",
                    i = S.timers,
                    n = U.get(this);
                if (t) n[t] && n[t].stop && s(n[t]);
                else
                    for (t in n) n[t] && n[t].stop && Ze.test(t) && s(n[t]);
                for (t = i.length; t--;) i[t].elem !== this || null != o && i[t].queue !== o || (i[t].anim.stop(r), e = !1, i.splice(t, 1));
                !e && r || S.dequeue(this, o)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"), this.each(function() {
                var e, t = U.get(this),
                    i = t[s + "queue"],
                    n = t[s + "queueHooks"],
                    o = S.timers,
                    r = i ? i.length : 0;
                for (t.finish = !0, S.queue(this, s, []), n && n.stop && n.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === s && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; e < r; e++) i[e] && i[e].finish && i[e].finish.call(this);
                delete t.finish
            })
        }
    }), S.each(["toggle", "show", "hide"], function(e, n) {
        var o = S.fn[n];
        S.fn[n] = function(e, t, i) {
            return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(it(n, !0), e, t, i)
        }
    }), S.each({
        slideDown: it("show"),
        slideUp: it("hide"),
        slideToggle: it("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, n) {
        S.fn[e] = function(e, t, i) {
            return this.animate(n, e, t, i)
        }
    }), S.timers = [], S.fx.tick = function() {
        var e, t = 0,
            i = S.timers;
        for (Ve = S.now(); t < i.length; t++)(e = i[t])() || i[t] !== e || i.splice(t--, 1);
        i.length || S.fx.stop(), Ve = void 0
    }, S.fx.timer = function(e) {
        S.timers.push(e), e() ? S.fx.start() : S.timers.pop()
    }, S.fx.interval = 13, S.fx.start = function() {
        Ge || (Ge = T.requestAnimationFrame ? T.requestAnimationFrame(et) : T.setInterval(S.fx.tick, S.fx.interval))
    }, S.fx.stop = function() {
        T.cancelAnimationFrame ? T.cancelAnimationFrame(Ge) : T.clearInterval(Ge), Ge = null
    }, S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, S.fn.delay = function(n, e) {
        return n = S.fx && S.fx.speeds[n] || n, e = e || "fx", this.queue(e, function(e, t) {
            var i = T.setTimeout(e, n);
            t.stop = function() {
                T.clearTimeout(i)
            }
        })
    }, Qe = C.createElement("input"), Je = C.createElement("select").appendChild(C.createElement("option")), Qe.type = "checkbox", v.checkOn = "" !== Qe.value, v.optSelected = Je.selected, (Qe = C.createElement("input")).value = "t", Qe.type = "radio", v.radioValue = "t" === Qe.value;
    var rt, st = S.expr.attrHandle;
    S.fn.extend({
        attr: function(e, t) {
            return W(this, S.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                S.removeAttr(this, e)
            })
        }
    }), S.extend({
        attr: function(e, t, i) {
            var n, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? S.prop(e, t, i) : (1 === r && S.isXMLDoc(e) || (o = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? rt : void 0)), void 0 !== i ? null === i ? void S.removeAttr(e, t) : o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : o && "get" in o && null !== (n = o.get(e, t)) ? n : null == (n = S.find.attr(e, t)) ? void 0 : n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!v.radioValue && "radio" === t && S.nodeName(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t), i && (e.value = i), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var i, n = 0,
                o = t && t.match(H);
            if (o && 1 === e.nodeType)
                for (; i = o[n++];) e.removeAttribute(i)
        }
    }), rt = {
        set: function(e, t, i) {
            return !1 === t ? S.removeAttr(e, i) : e.setAttribute(i, i), i
        }
    }, S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var s = st[t] || S.find.attr;
        st[t] = function(e, t, i) {
            var n, o, r = t.toLowerCase();
            return i || (o = st[r], st[r] = n, n = null != s(e, t, i) ? r : null, st[r] = o), n
        }
    });
    var at = /^(?:input|select|textarea|button)$/i,
        lt = /^(?:a|area)$/i;

    function ct(e) {
        return (e.match(H) || []).join(" ")
    }

    function dt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    S.fn.extend({
        prop: function(e, t) {
            return W(this, S.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[S.propFix[e] || e]
            })
        }
    }), S.extend({
        prop: function(e, t, i) {
            var n, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && S.isXMLDoc(e) || (t = S.propFix[t] || t, o = S.propHooks[t]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : e[t] = i : o && "get" in o && null !== (n = o.get(e, t)) ? n : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : at.test(e.nodeName) || lt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), v.optSelected || (S.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        S.propFix[this.toLowerCase()] = this
    }), S.fn.extend({
        addClass: function(t) {
            var e, i, n, o, r, s, a, l = 0;
            if (S.isFunction(t)) return this.each(function(e) {
                S(this).addClass(t.call(this, e, dt(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(H) || []; i = this[l++];)
                    if (o = dt(i), n = 1 === i.nodeType && " " + ct(o) + " ") {
                        for (s = 0; r = e[s++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                        o !== (a = ct(n)) && i.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, i, n, o, r, s, a, l = 0;
            if (S.isFunction(t)) return this.each(function(e) {
                S(this).removeClass(t.call(this, e, dt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(H) || []; i = this[l++];)
                    if (o = dt(i), n = 1 === i.nodeType && " " + ct(o) + " ") {
                        for (s = 0; r = e[s++];)
                            for (; - 1 < n.indexOf(" " + r + " ");) n = n.replace(" " + r + " ", " ");
                        o !== (a = ct(n)) && i.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(o, t) {
            var r = typeof o;
            return "boolean" == typeof t && "string" === r ? t ? this.addClass(o) : this.removeClass(o) : S.isFunction(o) ? this.each(function(e) {
                S(this).toggleClass(o.call(this, e, dt(this), t), t)
            }) : this.each(function() {
                var e, t, i, n;
                if ("string" === r)
                    for (t = 0, i = S(this), n = o.match(H) || []; e = n[t++];) i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
                else void 0 !== o && "boolean" !== r || ((e = dt(this)) && U.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === o ? "" : U.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, i, n = 0;
            for (t = " " + e + " "; i = this[n++];)
                if (1 === i.nodeType && -1 < (" " + ct(dt(i)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var ut = /\r/g;
    S.fn.extend({
        val: function(i) {
            var n, e, o, t = this[0];
            return arguments.length ? (o = S.isFunction(i), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = o ? i.call(this, e, S(this).val()) : i) ? t = "" : "number" == typeof t ? t += "" : S.isArray(t) && (t = S.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (n = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, t, "value") || (this.value = t))
            })) : t ? (n = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(ut, "") : null == e ? "" : e : void 0
        }
    }), S.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : ct(S.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, i, n, o = e.options,
                        r = e.selectedIndex,
                        s = "select-one" === e.type,
                        a = s ? null : [],
                        l = s ? r + 1 : o.length;
                    for (n = r < 0 ? l : s ? r : 0; n < l; n++)
                        if (((i = o[n]).selected || n === r) && !i.disabled && (!i.parentNode.disabled || !S.nodeName(i.parentNode, "optgroup"))) {
                            if (t = S(i).val(), s) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var i, n, o = e.options, r = S.makeArray(t), s = o.length; s--;)((n = o[s]).selected = -1 < S.inArray(S.valHooks.option.get(n), r)) && (i = !0);
                    return i || (e.selectedIndex = -1), r
                }
            }
        }
    }), S.each(["radio", "checkbox"], function() {
        S.valHooks[this] = {
            set: function(e, t) {
                if (S.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t)
            }
        }, v.checkOn || (S.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var pt = /^(?:focusinfocus|focusoutblur)$/;
    S.extend(S.event, {
        trigger: function(e, t, i, n) {
            var o, r, s, a, l, c, d, u = [i || C],
                p = h.call(e, "type") ? e.type : e,
                f = h.call(e, "namespace") ? e.namespace.split(".") : [];
            if (r = s = i = i || C, 3 !== i.nodeType && 8 !== i.nodeType && !pt.test(p + S.event.triggered) && (-1 < p.indexOf(".") && (p = (f = p.split(".")).shift(), f.sort()), l = p.indexOf(":") < 0 && "on" + p, (e = e[S.expando] ? e : new S.Event(p, "object" == typeof e && e)).isTrigger = n ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : S.makeArray(t, [e]), d = S.event.special[p] || {}, n || !d.trigger || !1 !== d.trigger.apply(i, t))) {
                if (!n && !d.noBubble && !S.isWindow(i)) {
                    for (a = d.delegateType || p, pt.test(a + p) || (r = r.parentNode); r; r = r.parentNode) u.push(r), s = r;
                    s === (i.ownerDocument || C) && u.push(s.defaultView || s.parentWindow || T)
                }
                for (o = 0;
                    (r = u[o++]) && !e.isPropagationStopped();) e.type = 1 < o ? a : d.bindType || p, (c = (U.get(r, "events") || {})[e.type] && U.get(r, "handle")) && c.apply(r, t), (c = l && r[l]) && c.apply && R(r) && (e.result = c.apply(r, t), !1 === e.result && e.preventDefault());
                return e.type = p, n || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(u.pop(), t) || !R(i) || l && S.isFunction(i[p]) && !S.isWindow(i) && ((s = i[l]) && (i[l] = null), i[S.event.triggered = p](), S.event.triggered = void 0, s && (i[l] = s)), e.result
            }
        },
        simulate: function(e, t, i) {
            var n = S.extend(new S.Event, i, {
                type: e,
                isSimulated: !0
            });
            S.event.trigger(n, null, t)
        }
    }), S.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                S.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var i = this[0];
            if (i) return S.event.trigger(e, t, i, !0)
        }
    }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, i) {
        S.fn[i] = function(e, t) {
            return 0 < arguments.length ? this.on(i, null, e, t) : this.trigger(i)
        }
    }), S.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), v.focusin = "onfocusin" in T, v.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(i, n) {
        var o = function(e) {
            S.event.simulate(n, e.target, S.event.fix(e))
        };
        S.event.special[n] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = U.access(e, n);
                t || e.addEventListener(i, o, !0), U.access(e, n, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = U.access(e, n) - 1;
                t ? U.access(e, n, t) : (e.removeEventListener(i, o, !0), U.remove(e, n))
            }
        }
    });
    var ft = T.location,
        ht = S.now(),
        gt = /\?/;
    S.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new T.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t
    };
    var vt = /\[\]$/,
        mt = /\r?\n/g,
        yt = /^(?:submit|button|image|reset|file)$/i,
        bt = /^(?:input|select|textarea|keygen)/i;

    function wt(i, e, n, o) {
        var t;
        if (S.isArray(e)) S.each(e, function(e, t) {
            n || vt.test(i) ? o(i, t) : wt(i + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, n, o)
        });
        else if (n || "object" !== S.type(e)) o(i, e);
        else
            for (t in e) wt(i + "[" + t + "]", e[t], n, o)
    }
    S.param = function(e, t) {
        var i, n = [],
            o = function(e, t) {
                var i = S.isFunction(t) ? t() : t;
                n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i)
            };
        if (S.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (i in e) wt(i, e[i], t, o);
        return n.join("&")
    }, S.fn.extend({
        serialize: function() {
            return S.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && bt.test(this.nodeName) && !yt.test(e) && (this.checked || !oe.test(e))
            }).map(function(e, t) {
                var i = S(this).val();
                return null == i ? null : S.isArray(i) ? S.map(i, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(mt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: i.replace(mt, "\r\n")
                }
            }).get()
        }
    });
    var kt = /%20/g,
        xt = /#.*$/,
        Tt = /([?&])_=[^&]*/,
        Ct = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        St = /^(?:GET|HEAD)$/,
        $t = /^\/\//,
        _t = {},
        At = {},
        Et = "*/".concat("*"),
        Dt = C.createElement("a");

    function jt(r) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var i, n = 0,
                o = e.toLowerCase().match(H) || [];
            if (S.isFunction(t))
                for (; i = o[n++];) "+" === i[0] ? (i = i.slice(1) || "*", (r[i] = r[i] || []).unshift(t)) : (r[i] = r[i] || []).push(t)
        }
    }

    function Pt(t, o, r, s) {
        var a = {},
            l = t === At;

        function c(e) {
            var n;
            return a[e] = !0, S.each(t[e] || [], function(e, t) {
                var i = t(o, r, s);
                return "string" != typeof i || l || a[i] ? l ? !(n = i) : void 0 : (o.dataTypes.unshift(i), c(i), !1)
            }), n
        }
        return c(o.dataTypes[0]) || !a["*"] && c("*")
    }

    function Nt(e, t) {
        var i, n, o = S.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
        return n && S.extend(!0, e, n), e
    }
    Dt.href = ft.href, S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ft.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ft.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Et,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Nt(Nt(e, S.ajaxSettings), t) : Nt(S.ajaxSettings, e)
        },
        ajaxPrefilter: jt(_t),
        ajaxTransport: jt(At),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var d, u, p, i, f, n, h, g, o, r, v = S.ajaxSetup({}, t),
                m = v.context || v,
                y = v.context && (m.nodeType || m.jquery) ? S(m) : S.event,
                b = S.Deferred(),
                w = S.Callbacks("once memory"),
                k = v.statusCode || {},
                s = {},
                a = {},
                l = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (h) {
                            if (!i)
                                for (i = {}; t = Ct.exec(p);) i[t[1].toLowerCase()] = t[2];
                            t = i[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return h ? p : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == h && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e, s[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == h && (v.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (h) x.always(e[x.status]);
                            else
                                for (t in e) k[t] = [k[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || l;
                        return d && d.abort(t), c(0, t), this
                    }
                };
            if (b.promise(x), v.url = ((e || v.url || ft.href) + "").replace($t, ft.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(H) || [""], null == v.crossDomain) {
                n = C.createElement("a");
                try {
                    n.href = v.url, n.href = n.href, v.crossDomain = Dt.protocol + "//" + Dt.host != n.protocol + "//" + n.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Pt(_t, v, t, x), h) return x;
            for (o in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !St.test(v.type), u = v.url.replace(xt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(kt, "+")) : (r = v.url.slice(u.length), v.data && (u += (gt.test(u) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (u = u.replace(Tt, "$1"), r = (gt.test(u) ? "&" : "?") + "_=" + ht++ + r), v.url = u + r), v.ifModified && (S.lastModified[u] && x.setRequestHeader("If-Modified-Since", S.lastModified[u]), S.etag[u] && x.setRequestHeader("If-None-Match", S.etag[u])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && x.setRequestHeader("Content-Type", v.contentType), x.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Et + "; q=0.01" : "") : v.accepts["*"]), v.headers) x.setRequestHeader(o, v.headers[o]);
            if (v.beforeSend && (!1 === v.beforeSend.call(m, x, v) || h)) return x.abort();
            if (l = "abort", w.add(v.complete), x.done(v.success), x.fail(v.error), d = Pt(At, v, t, x)) {
                if (x.readyState = 1, g && y.trigger("ajaxSend", [x, v]), h) return x;
                v.async && 0 < v.timeout && (f = T.setTimeout(function() {
                    x.abort("timeout")
                }, v.timeout));
                try {
                    h = !1, d.send(s, c)
                } catch (e) {
                    if (h) throw e;
                    c(-1, e)
                }
            } else c(-1, "No Transport");

            function c(e, t, i, n) {
                var o, r, s, a, l, c = t;
                h || (h = !0, f && T.clearTimeout(f), d = void 0, p = n || "", x.readyState = 0 < e ? 4 : 0, o = 200 <= e && e < 300 || 304 === e, i && (a = function(e, t, i) {
                    for (var n, o, r, s, a = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (n)
                        for (o in a)
                            if (a[o] && a[o].test(n)) {
                                l.unshift(o);
                                break
                            }
                    if (l[0] in i) r = l[0];
                    else {
                        for (o in i) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                                r = o;
                                break
                            }
                            s || (s = o)
                        }
                        r = r || s
                    }
                    if (r) return r !== l[0] && l.unshift(r), i[r]
                }(v, x, i)), a = function(e, t, i, n) {
                    var o, r, s, a, l, c = {},
                        d = e.dataTypes.slice();
                    if (d[1])
                        for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                    for (r = d.shift(); r;)
                        if (e.responseFields[r] && (i[e.responseFields[r]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = d.shift())
                            if ("*" === r) r = l;
                            else if ("*" !== l && l !== r) {
                        if (!(s = c[l + " " + r] || c["* " + r]))
                            for (o in c)
                                if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], d.unshift(a[1]));
                                    break
                                }
                        if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + l + " to " + r
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, a, x, o), o ? (v.ifModified && ((l = x.getResponseHeader("Last-Modified")) && (S.lastModified[u] = l), (l = x.getResponseHeader("etag")) && (S.etag[u] = l)), 204 === e || "HEAD" === v.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = a.state, r = a.data, o = !(s = a.error))) : (s = c, !e && c || (c = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (t || c) + "", o ? b.resolveWith(m, [r, c, x]) : b.rejectWith(m, [x, c, s]), x.statusCode(k), k = void 0, g && y.trigger(o ? "ajaxSuccess" : "ajaxError", [x, v, o ? r : s]), w.fireWith(m, [x, c]), g && (y.trigger("ajaxComplete", [x, v]), --S.active || S.event.trigger("ajaxStop")))
            }
            return x
        },
        getJSON: function(e, t, i) {
            return S.get(e, t, i, "json")
        },
        getScript: function(e, t) {
            return S.get(e, void 0, t, "script")
        }
    }), S.each(["get", "post"], function(e, o) {
        S[o] = function(e, t, i, n) {
            return S.isFunction(t) && (n = n || i, i = t, t = void 0), S.ajax(S.extend({
                url: e,
                type: o,
                dataType: n,
                data: t,
                success: i
            }, S.isPlainObject(e) && e))
        }
    }), S._evalUrl = function(e) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, S.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (S.isFunction(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(i) {
            return S.isFunction(i) ? this.each(function(e) {
                S(this).wrapInner(i.call(this, e))
            }) : this.each(function() {
                var e = S(this),
                    t = e.contents();
                t.length ? t.wrapAll(i) : e.append(i)
            })
        },
        wrap: function(t) {
            var i = S.isFunction(t);
            return this.each(function(e) {
                S(this).wrapAll(i ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                S(this).replaceWith(this.childNodes)
            }), this
        }
    }), S.expr.pseudos.hidden = function(e) {
        return !S.expr.pseudos.visible(e)
    }, S.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, S.ajaxSettings.xhr = function() {
        try {
            return new T.XMLHttpRequest
        } catch (e) {}
    };
    var Lt = {
            0: 200,
            1223: 204
        },
        Ht = S.ajaxSettings.xhr();
    v.cors = !!Ht && "withCredentials" in Ht, v.ajax = Ht = !!Ht, S.ajaxTransport(function(o) {
        var r, s;
        if (v.cors || Ht && !o.crossDomain) return {
            send: function(e, t) {
                var i, n = o.xhr();
                if (n.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields)
                    for (i in o.xhrFields) n[i] = o.xhrFields[i];
                for (i in o.mimeType && n.overrideMimeType && n.overrideMimeType(o.mimeType), o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) n.setRequestHeader(i, e[i]);
                r = function(e) {
                    return function() {
                        r && (r = s = n.onload = n.onerror = n.onabort = n.onreadystatechange = null, "abort" === e ? n.abort() : "error" === e ? "number" != typeof n.status ? t(0, "error") : t(n.status, n.statusText) : t(Lt[n.status] || n.status, n.statusText, "text" !== (n.responseType || "text") || "string" != typeof n.responseText ? {
                            binary: n.response
                        } : {
                            text: n.responseText
                        }, n.getAllResponseHeaders()))
                    }
                }, n.onload = r(), s = n.onerror = r("error"), void 0 !== n.onabort ? n.onabort = s : n.onreadystatechange = function() {
                    4 === n.readyState && T.setTimeout(function() {
                        r && s()
                    })
                }, r = r("abort");
                try {
                    n.send(o.hasContent && o.data || null)
                } catch (e) {
                    if (r) throw e
                }
            },
            abort: function() {
                r && r()
            }
        }
    }), S.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return S.globalEval(e), e
            }
        }
    }), S.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), S.ajaxTransport("script", function(i) {
        var n, o;
        if (i.crossDomain) return {
            send: function(e, t) {
                n = S("<script>").prop({
                    charset: i.scriptCharset,
                    src: i.url
                }).on("load error", o = function(e) {
                    n.remove(), o = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), C.head.appendChild(n[0])
            },
            abort: function() {
                o && o()
            }
        }
    });
    var Ot, qt = [],
        Mt = /(=)\?(?=&|$)|\?\?/;

    function It(e) {
        return S.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = qt.pop() || S.expando + "_" + ht++;
            return this[e] = !0, e
        }
    }), S.ajaxPrefilter("json jsonp", function(e, t, i) {
        var n, o, r, s = !1 !== e.jsonp && (Mt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Mt.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0]) return n = e.jsonpCallback = S.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Mt, "$1" + n) : !1 !== e.jsonp && (e.url += (gt.test(e.url) ? "&" : "?") + e.jsonp + "=" + n), e.converters["script json"] = function() {
            return r || S.error(n + " was not called"), r[0]
        }, e.dataTypes[0] = "json", o = T[n], T[n] = function() {
            r = arguments
        }, i.always(function() {
            void 0 === o ? S(T).removeProp(n) : T[n] = o, e[n] && (e.jsonpCallback = t.jsonpCallback, qt.push(n)), r && S.isFunction(o) && o(r[0]), r = o = void 0
        }), "script"
    }), v.createHTMLDocument = ((Ot = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ot.childNodes.length), S.parseHTML = function(e, t, i) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (i = t, t = !1), t || (v.createHTMLDocument ? ((n = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t.head.appendChild(n)) : t = C), r = !i && [], (o = _.exec(e)) ? [t.createElement(o[1])] : (o = fe([e], t, r), r && r.length && S(r).remove(), S.merge([], o.childNodes)));
        var n, o, r
    }, S.fn.load = function(e, t, i) {
        var n, o, r, s = this,
            a = e.indexOf(" ");
        return -1 < a && (n = ct(e.slice(a)), e = e.slice(0, a)), S.isFunction(t) ? (i = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < s.length && S.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments, s.html(n ? S("<div>").append(S.parseHTML(e)).find(n) : e)
        }).always(i && function(e, t) {
            s.each(function() {
                i.apply(this, r || [e.responseText, t, e])
            })
        }), this
    }, S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        S.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), S.expr.pseudos.animated = function(t) {
        return S.grep(S.timers, function(e) {
            return t === e.elem
        }).length
    }, S.offset = {
        setOffset: function(e, t, i) {
            var n, o, r, s, a, l, c = S.css(e, "position"),
                d = S(e),
                u = {};
            "static" === c && (e.style.position = "relative"), a = d.offset(), r = S.css(e, "top"), l = S.css(e, "left"), ("absolute" === c || "fixed" === c) && -1 < (r + l).indexOf("auto") ? (s = (n = d.position()).top, o = n.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), S.isFunction(t) && (t = t.call(e, i, S.extend({}, a))), null != t.top && (u.top = t.top - a.top + s), null != t.left && (u.left = t.left - a.left + o), "using" in t ? t.using.call(e, u) : d.css(u)
        }
    }, S.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                S.offset.setOffset(this, t, e)
            });
            var e, i, n, o, r = this[0];
            return r ? r.getClientRects().length ? (n = r.getBoundingClientRect()).width || n.height ? (i = It(o = r.ownerDocument), e = o.documentElement, {
                top: n.top + i.pageYOffset - e.clientTop,
                left: n.left + i.pageXOffset - e.clientLeft
            }) : n : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, i = this[0],
                    n = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === S.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), S.nodeName(e[0], "html") || (n = e.offset()), n = {
                    top: n.top + S.css(e[0], "borderTopWidth", !0),
                    left: n.left + S.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - n.top - S.css(i, "marginTop", !0),
                    left: t.left - n.left - S.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === S.css(e, "position");) e = e.offsetParent;
                return e || he
            })
        }
    }), S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, o) {
        var r = "pageYOffset" === o;
        S.fn[t] = function(e) {
            return W(this, function(e, t, i) {
                var n = It(e);
                return void 0 === i ? n ? n[o] : e[t] : void(n ? n.scrollTo(r ? n.pageXOffset : i, r ? i : n.pageYOffset) : e[t] = i)
            }, t, e, arguments.length)
        }
    }), S.each(["top", "left"], function(e, i) {
        S.cssHooks[i] = qe(v.pixelPosition, function(e, t) {
            if (t) return t = Oe(e, i), Le.test(t) ? S(e).position()[i] + "px" : t
        })
    }), S.each({
        Height: "height",
        Width: "width"
    }, function(s, a) {
        S.each({
            padding: "inner" + s,
            content: a,
            "": "outer" + s
        }, function(n, r) {
            S.fn[r] = function(e, t) {
                var i = arguments.length && (n || "boolean" != typeof e),
                    o = n || (!0 === e || !0 === t ? "margin" : "border");
                return W(this, function(e, t, i) {
                    var n;
                    return S.isWindow(e) ? 0 === r.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (n = e.documentElement, Math.max(e.body["scroll" + s], n["scroll" + s], e.body["offset" + s], n["offset" + s], n["client" + s])) : void 0 === i ? S.css(e, t, o) : S.style(e, t, i, o)
                }, a, i ? e : void 0, i)
            }
        })
    }), S.fn.extend({
        bind: function(e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, i, n) {
            return this.on(t, e, i, n)
        },
        undelegate: function(e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        }
    }), S.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
        return S
    });
    var zt = T.jQuery,
        Ft = T.$;
    return S.noConflict = function(e) {
        return T.$ === S && (T.$ = Ft), e && T.jQuery === S && (T.jQuery = zt), S
    }, e || (T.jQuery = T.$ = S), S
}), 


$(document).ready(function() {
        $(".loader").addClass("loader_visible"), $preloader = $(".loaderArea"), $loader = $preloader.find(".loader"), $loader.fadeOut(), $preloader.delay(400).fadeOut(2e3)

        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        $(window).resize(function() {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });

        var e = $(window).width(),
            t = "#fff",
            i = "#2a2a2a",
            q = 1;

        function n() {
            $(".figure_block").html('<canvas id="myCanvas"></canvas>');
            var p = $(".wrapper").width();
            $("#myCanvas").attr("width", p), $("#myCanvas").attr("height", "200"), $(window).on("resize", function() {
                $(this).width() != e && (p = $(".wrapper").width(), $(".figure_block").html('  <canvas id="myCanvas"></canvas> '), $("#myCanvas").attr("width", p), $("#myCanvas").attr("height", "200"))
            });
            var f = "#3498db",
                h = "#f1c40f",
                g = "#2ecc71",
                v = "#1abc9c",
                m = "#9b59b6",
                y = "#e81c25",
                b = t,
                w = 15,
                k = 20;
            p < 550 && (w = 10, k = 13);
            var x = p / 8 * 1 - 0,
                T = 60,
                C = p / 8 * 2 - 15,
                S = 120,
                _ = p / 8 * 3 - 15,
                A = 65,
                E = p / 8 * 4 - 15,
                D = 100,
                j = p / 8 * 5 - 15,
                P = 50,
                N = p / 8 * 6 - 15,
                L = 80,
                H = p / 8 * 7 - 15,
                O = document.getElementById("myCanvas").getContext("2d");
            color_line_dark = t, color_line_light = i, p < 550 && (w = 10, k = 13, S = 100), setInterval(function() {
                function e() {
                    T += .1, x -= .1
                }

                function t() {
                    T -= .1, x += .1
                }

                function i() {
                    S += .1, C += .2
                }

                function n() {
                    S -= .1, C -= .2
                }

                function o() {
                    A -= .1, _ -= .2
                }

                function r() {
                    A += .1, _ += .2
                }

                function s() {
                    D -= .2, E -= .1
                }

                function a() {
                    D += .2, E += .1
                }

                function l() {
                    P -= .1, j -= .2
                }

                function c() {
                    P += .1, j += .2
                }

                function d() {
                    L += .3, N += .2
                }

                function u() {
                    L -= .3, N -= .2
                }
                O.save(), O.setTransform(1, 0, 0, 1, 0, 0), O.clearRect(0, 0, p, 200), O.restore(), q <= 50 && (T += .1, x -= .1, i(), r(), s(), c(), u(), e(), q++), 50 < q && q <= 100 && (T -= .1, x += .1, n(), o(), a(), l(), d(), t(), T -= .1, x -= .2, P -= .1, j += .4, q++), 100 < q && q <= 150 && (t(), n(), o(), s(), c(), d(), q++), 150 < q && q <= 200 && (e(), i(), r(), a(), l(), u(), T += .1, x += .2, P += .1, j -= .4, q++), 201 == q && (q = 1), O.shadowBlur = 0, O.lineWidth = 2, O.strokeStyle = color_line_dark, O.beginPath(), O.setLineDash([10, 5]), O.moveTo(x, T), O.lineTo(C, S), O.stroke(), O.beginPath(), O.setLineDash([10, 5]), O.moveTo(C, S), O.lineTo(_, A), O.stroke(), O.beginPath(), O.setLineDash([10, 5]), O.moveTo(_, A), O.lineTo(E, D), O.stroke(), O.beginPath(), O.setLineDash([10, 5]), O.moveTo(E, D), O.lineTo(j, P), O.stroke(), O.beginPath(), O.setLineDash([10, 5]), O.moveTo(j, P), O.lineTo(N, L), O.stroke(), O.beginPath(), O.setLineDash([10, 5]), O.moveTo(N, L), O.lineTo(H, 60), O.stroke(), O.shadowBlur = 10, O.setLineDash([1e3, 0]), O.beginPath(), O.arc(x, T, w, 0, 2 * Math.PI, !0), O.fillStyle = f, O.shadowColor = f, O.fill(), O.lineWidth = 2, O.beginPath(), O.arc(x, T, k, 0, 2 * Math.PI, !0), O.strokeStyle = f, O.shadowColor = f, O.stroke(), O.beginPath(), O.arc(C, S, w, 0, 2 * Math.PI, !0), O.fillStyle = h, O.fillStyle = h, O.shadowColor = h, O.fill(), O.beginPath(), O.arc(C, S, k, 0, 2 * Math.PI, !0), O.strokeStyle = h, O.fillStyle = h, O.shadowColor = h, O.stroke(), O.beginPath(), O.arc(_, A, w, 0, 2 * Math.PI, !0), O.fillStyle = g, O.fillStyle = g, O.shadowColor = g, O.fill(), O.beginPath(), O.arc(_, A, k, 0, 2 * Math.PI, !0), O.strokeStyle = g, O.fillStyle = g, O.shadowColor = g, O.stroke(), O.beginPath(), O.arc(E, D, w, 0, 2 * Math.PI, !0), O.fillStyle = v, O.fillStyle = v, O.shadowColor = v, O.fill(), O.beginPath(), O.arc(E, D, k, 0, 2 * Math.PI, !0), O.strokeStyle = v, O.fillStyle = v, O.shadowColor = v, O.stroke(), O.beginPath(), O.arc(j, P, w, 0, 2 * Math.PI, !0), O.fillStyle = m, O.fillStyle = m, O.shadowColor = m, O.fill(), O.beginPath(), O.arc(j, P, k, 0, 2 * Math.PI, !0), O.strokeStyle = m, O.fillStyle = m, O.shadowColor = m, O.stroke(), O.beginPath(), O.arc(N, L, w, 0, 2 * Math.PI, !0), O.fillStyle = y, O.fillStyle = y, O.shadowColor = y, O.fill(), O.beginPath(), O.arc(N, L, k, 0, 2 * Math.PI, !0), O.strokeStyle = y, O.fillStyle = y, O.shadowColor = y, O.stroke(), O.beginPath(), O.arc(H, 60, w, 0, 2 * Math.PI, !0), O.fillStyle = b, O.fillStyle = b, O.shadowColor = b, O.fill(), O.beginPath(), O.arc(H, 60, k, 0, 2 * Math.PI, !0), O.strokeStyle = b, O.fillStyle = b, O.shadowColor = b, O.stroke(), O.shadowBlur = 0, O.beginPath(), O.setLineDash([1, 0]), O.moveTo(H, 53), O.lineTo(H, 67), O.strokeStyle = color_line_light, O.stroke(), O.beginPath(), O.setLineDash([1, 0]), O.moveTo(H - 7, 60), O.lineTo(H + 7, 60), O.strokeStyle = color_line_light, O.stroke()
            }, 100), e = $(window).width(), $(window).on("resize", function() {
                $(this).width() != e && (n(), console.log("resize"))
            })
        }
        $(".navigation").on("click", "a:not('.app_link')", function(e) {
            e.preventDefault();
            var t = $(this).attr("href"),
                i = $(t).offset().top;

            $("body,html").animate({
                scrollTop: i
            }, 1500)
        }), $(".to_top").click(function(e) {
            e.preventDefault();
            var t = $(this).attr("href"),
                i = $(t).offset().top;
                
            $("body,html").animate({
                scrollTop: i
            }, 1500)
        }), $(".trigger").click(function() {
            $(".trigger_text").toggleClass("trigger_text_right"), $(".trigger_round").toggleClass("trigger_round_left"), $(".trigger_theme").toggleClass("trigger_theme_light"), $(".trigger_text").toggleClass("trigger_text_light"), $("header").toggleClass("header_light"), $(".trigger_text").html("Light"), $(".trigger_text_light").html("Dark"), $("body").toggleClass("body_light"), $(".logo").toggleClass("logo_light"), $(".intro_block_left_container").toggleClass("intro_block_left_container_light"), $(".block_3").toggleClass("block_3_light"), $(".howitworks_title").toggleClass("howitworks_title_light"), $(".control_tabs").toggleClass("control_tabs_light"), $(".interface_line").toggleClass("interface_line_light"), $("footer").toggleClass("footer_light"), $(".comments").toggleClass("comments_light"), $(".interface_phone_img_block_bottom_block > div > .arrow_mobile > .arrow_mobile_line").toggleClass("arrow_mobile_line_light"), $(".interface_phone_img_block_top_block > div > .arrow_mobile > .arrow_mobile_line").toggleClass("arrow_mobile_line_light"), $(".interface_phone_img_block_bottom_block").toggleClass("interface_phone_img_block_bottom_block_light"), $(".interface_phone_img_block_top_block").toggleClass("interface_phone_img_block_top_block_light"), $("footer").hasClass("footer_light") ? (t = "#2a2a2a", i = "#fff") : (t = "#fff", i = "#2a2a2a"), n(), $(".arrow_an").toggleClass("arrow_an_light"), $(".arrow_an > img").attr("src", "img/arrow-animate@2x.png").attr("data-lazy", "img/arrow-animate@2x.png"), $(".arrow_an.arrow_an_light > img").attr("src", "img/arrow-animate-black@2x.png").attr("data-lazy", "img/arrow-animate-black@2x.png")
        }), 
        

        $(".child_control_tab li").click(function(e) {
            e.preventDefault()
        }), 

        $(".child_control_tab li").click(function() {
            console.log($(this).attr('class'))
            var video_element = $(".howitworks_left .video_block video.tab_img."+$(this).attr('class'))
            $(video_element).attr("src", $(video_element).attr("data-lazy"))
        }), 

        /*$('.video_block_active').slideDown();
        $('.video_block:not(.video_block_active)').slideUp();*/
        
        $('.parent_control_tab > ul > li').click(function(){
           $('.child_control_tab > ul:not(.'+$(this).attr("class")+')').removeClass('child_control_tab_ul_active');    
           $('.child_control_tab > ul.'+$(this).attr("class")).addClass('child_control_tab_ul_active');  
           $('.parent_control_tab > ul').addClass('parent_control_tab_ul_unactive');
           $('.parent_control_tab_back').addClass('parent_control_tab_back_active');
        });

        $('.parent_control_tab_back > button').click(function(){
            $('.parent_control_tab > ul').removeClass('parent_control_tab_ul_unactive');
            $('.child_control_tab > ul').removeClass('child_control_tab_ul_active');  
            $('.text_tab_container > ul > li').removeClass('text_tab_container_li_active');  
            $('.parent_control_tab_back').removeClass('parent_control_tab_back_active');
            $('.child_control_tab > ul li').removeAttr("id");
            $('.addition_function_image > div').removeClass('addition_function_image_active');
            $('.parent_control_tab_play').addClass('parent_control_tab_play_active');
            $('.tab_img_active').get(0).pause();
        });

        $('.child_control_tab > ul li').click(function(){

           $('.text_tab_container > ul > li:not(.text_'+$(this).attr('class')+')').removeClass('text_tab_container_li_active');
           $('.text_tab_container > ul > li.text_'+$(this).attr('class')).addClass('text_tab_container_li_active');
           $('.child_control_tab > ul li').removeAttr("id");
           $(this).attr('id','child_control_tab_ul_active_li_active');

           $(".tab_img").removeClass('tab_img_active');
           $('.video_block_active > .'+$(this).attr('class')).addClass('tab_img_active');
           $('.tab_img_active').get(0).currentTime = 0;
           $('.tab_img_active').get(0).play();

           $('.parent_control_tab_play').removeClass('parent_control_tab_play_active');

           $('.addition_function_image > div').removeClass('addition_function_image_active');
           $('.addition_function_image > .'+$(this).attr('class')).addClass('addition_function_image_active');

        });

        $('.parent_control_tab_play').click(function(){
           $(this).toggleClass('parent_control_tab_play_active');

           if ($(this).hasClass('parent_control_tab_play_active')) {
                $('.tab_img_active').get(0).pause();
           } else {
                $('.tab_img_active').get(0).play();
           }
        })

        $('.tab_img_active').attr('src', $('.tab_img_active').attr('data-lazy'));
        $('.tab_img_active').get(0).play();

        var userFeed = new Instafeed({
            get: 'user',
            userId: '2361740810',
            clientId: '58e151cd44494827b5243861986dd076',
            accessToken: '2361740810.1677ed0.1c2f62600e394390a7761dfaf7dc0676',
            resolution: 'standard_resolution',
            template: '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a>',
            sortBy: 'most-recent',
            limit: 6,
            links: false,
        });
        userFeed.run();
      
        $(".interface_line > svg").click(function() {
            $(this).toggleClass("svg_active")
        }), $(".arrow_mobile > svg").click(function() {
            $(this).toggleClass("svg_active")
        }), n(), 
        $(".multiple-items").slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            swipeToSlide: true,
            autoplay: true,
            autoplaySpeed: 5000,
            appendArrows: $(".comment_block_middle"),
            responsive: [{
                breakpoint: 1360,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }]
        });

        $(".multiple-items").each(function() {
        this.slick.getNavigableIndexes = function() {
            var _ = this,
                breakPoint = 0,
                counter = 0,
                indexes = [],
                max;
            if (_.options.infinite === false) {
                max = _.slideCount;
            } else {
                breakPoint = _.options.slideCount * -1;
                counter = _.options.slideCount * -1;
                max = _.slideCount * 2;
            }

            while (breakPoint < max) {
                indexes.push(breakPoint);
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
            return indexes;
        };
        });

        $('.single-item').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            swipeToSlide: true,
            arrows: false,
            dots: false,
        });

        $(".single-item").each(function() {
        this.slick.getNavigableIndexes = function() {
            var _ = this,
                breakPoint = 0,
                counter = 0,
                indexes = [],
                max;
            if (_.options.infinite === false) {
                max = _.slideCount;
            } else {
                breakPoint = _.options.slideCount * -1;
                counter = _.options.slideCount * -1;
                max = _.slideCount * 2;
            }

            while (breakPoint < max) {
                indexes.push(breakPoint);
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
            return indexes;
        };
        });

        $(".slick-prev").html('<img src="img/left-arrow.png" alt="">'), $(".slick-next").html('<img src="img/left-right.png" alt="">'), $("body").offset().top;
        var o = $(".interface").offset().top,
            r = $(".howitworks").offset().top,
            s = $(".img_3").offset().top,
            a = $(".howitworks").offset().top,
            l = $(".comments").offset().top;
        $(window).scroll(function() {
            $(document).scrollTop() >= o - 300 ? ($(".interface_line > svg").addClass("svg_active"), $(".arrow_mobile > svg").addClass("svg_active")) : ($(".interface_line > svg").removeClass("svg_active"), $(".arrow_mobile > svg").removeClass("svg_active")), $(document).scrollTop() >= r - 100 && (null == $(".howitworks_left .video_block .tab_1_2").attr("src") && $(".howitworks_left .video_block .tab_1_2").attr("src", $(".howitworks_left .video_block .tab_1_2").attr("data-lazy")), $(".video_block .tab_1_2").trigger("play"), window.$(".video_block .tab_1_2").get(0).play()), $(document).scrollTop() >= s - 700 && $(".block_3 img").each(function(e) {
                null == $(this).attr("src") && $(this).attr("src", $(this).attr("data-lazy"))
            }), $(document).scrollTop() >= s - 500 && $(".block_3").addClass("block_3_visible"), $(document).scrollTop() >= o - 700 && $(".interface_phone_img_block_center img").each(function(e) {
                null == $(this).attr("src") && $(this).attr("src", $(this).attr("data-lazy"))
            }), $(document).scrollTop() >= o - 500 ? $(".interface_phone_img_block_center img").addClass("img_visible") : $(".interface_phone_img_block_center img").removeClass("img_visible"), $(document).scrollTop() >= a - 300 && $(".howitworks_left").addClass("howitworks_left_visible"), $(document).scrollTop() >= l - 500 ? $(".comments").addClass("comments_visible") : $(".comments").removeClass("comments_visible")
        }), 
        $("#subscribe > input").on("keyup", function(s) {
            s.preventDefault();
            "" != $(this).val() ? /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i.test($(this).val()) ? $(this).css("color", "#008000") : $(this).css("color", "#c0392b") : $(this).css("color", "#9c9b9f")
        }), 
        $(".div_for_form > button").click(function() {
            if (/^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i.test($("#subscribe > input").val())) {
                var s = $.ajax({
                    method: "POST",
                    url: "/subscribe/",
                    data: {
                        email: $("#subscribe > input").val()
                    }
                });
                s.done(function(s) {
                    $("#subscribe > input").hasClass("error_value") && $("#subscribe > input").removeClass("error_value"), $(".div_for_form > button").css("width", "151px"), $(".div_for_form > button > span").html("Subscribed"), $(".footer_form > div > button > img").addClass("fly"), $(".div_for_form > button > span").css("margin-right", "0"), $(".footer_form > div > button").css("animation", "footer_form_button_anim_click 0.3s normal forwards linear");
                    ga('send', 'event', 'Subscribe Form', 'submit', $("#subscribe > input").val())
                }), s.fail(function(s, i) {
                    $(".div_for_form > button").addClass("error_value");
                    ga('send', 'event', 'Subscribe Form', 'submit', $("#subscribe > input").val())
                })
            } else $("#subscribe > input").attr("placeholder", "Email is invalid"), $("#subscribe > input").addClass("fail"), setTimeout(function(s) {
                $("#subscribe > input").attr("placeholder", "Your email address"), $("#subscribe > input").removeClass("fail")
            }, 7e3)
        }), 
        $(".mobile_menu > button").click(function() {
            $("nav").slideToggle(300), $(".mobile_menu > button").toggleClass("menuactive"), $(".mobile_menu > button").html('<img src="img/menu.png" alt="icon">'), $(".mobile_menu > button.menuactive").html('<img src="img/cross.png" alt="icon">'), $(".mobile_menu > button.menuactive > img").css("width", "22px").css("min-width", "22px").css("max-width", "22px")
        })


        $(".trigger").click(function() {
            $(".video_presentation").toggleClass("video_presentation_light")
        });
        var e = $(".video_presentation").offset().top;
        $(window).scroll(function() {
            $(document).scrollTop() >= e - 400 ? $(".video_presentation").addClass("video_presentation_visible") : $(".video_presentation").removeClass("video_presentation_visible")
        }), $(".video_presentation_left > div").click(function() {
            $(".pop_up_video").addClass("pop_up_video_flex"), $(".pop_up_video_container"), $(".pop_up_video_container > video").attr("src", $(".pop_up_video_container > video").attr("data-lazy")), $(".pop_up_video_container > video").trigger("play"), window.$(".pop_up_video_container > video").get(0).play()
        }), $(".pop_up_video_bg").click(function() {
            $(".pop_up_video").removeClass("pop_up_video_flex"), $(".pop_up_video_container > video").trigger("pause"), window.$(".pop_up_video_container > video").get(0).pause()
        })
}),


function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function(c) {
        "use strict";
        var o, s = window.Slick || {};
        o = 0, (s = function(e, t) {
            var i, n = this;
            n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: c(e),
                appendDots: c(e),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, t) {
                    return c('<button type="button" />').text(t + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, n.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, c.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = c(e), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, i = c(e).data("slick") || {}, n.options = c.extend({}, n.defaults, t, i), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = c.proxy(n.autoPlay, n), n.autoPlayClear = c.proxy(n.autoPlayClear, n), n.autoPlayIterator = c.proxy(n.autoPlayIterator, n), n.changeSlide = c.proxy(n.changeSlide, n), n.clickHandler = c.proxy(n.clickHandler, n), n.selectHandler = c.proxy(n.selectHandler, n), n.setPosition = c.proxy(n.setPosition, n), n.swipeHandler = c.proxy(n.swipeHandler, n), n.dragHandler = c.proxy(n.dragHandler, n), n.keyHandler = c.proxy(n.keyHandler, n), n.instanceUid = o++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
        }).prototype.activateADA = function() {
            this.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, s.prototype.addSlide = s.prototype.slickAdd = function(e, t, i) {
            var n = this;
            if ("boolean" == typeof t) i = t, t = null;
            else if (t < 0 || t >= n.slideCount) return !1;
            n.unload(), "number" == typeof t ? 0 === t && 0 === n.$slides.length ? c(e).appendTo(n.$slideTrack) : i ? c(e).insertBefore(n.$slides.eq(t)) : c(e).insertAfter(n.$slides.eq(t)) : !0 === i ? c(e).prependTo(n.$slideTrack) : c(e).appendTo(n.$slideTrack), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slides.each(function(e, t) {
                c(t).attr("data-slick-index", e)
            }), n.$slidesCache = n.$slides, n.reinit()
        }, s.prototype.animateHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.animate({
                    height: t
                }, e.options.speed)
            }
        }, s.prototype.animateSlide = function(e, t) {
            var i = {},
                n = this;
            n.animateHeight(), !0 === n.options.rtl && !1 === n.options.vertical && (e = -e), !1 === n.transformsEnabled ? !1 === n.options.vertical ? n.$slideTrack.animate({
                left: e
            }, n.options.speed, n.options.easing, t) : n.$slideTrack.animate({
                top: e
            }, n.options.speed, n.options.easing, t) : !1 === n.cssTransitions ? (!0 === n.options.rtl && (n.currentLeft = -n.currentLeft), c({
                animStart: n.currentLeft
            }).animate({
                animStart: e
            }, {
                duration: n.options.speed,
                easing: n.options.easing,
                step: function(e) {
                    e = Math.ceil(e), !1 === n.options.vertical ? i[n.animType] = "translate(" + e + "px, 0px)" : i[n.animType] = "translate(0px," + e + "px)", n.$slideTrack.css(i)
                },
                complete: function() {
                    t && t.call()
                }
            })) : (n.applyTransition(), e = Math.ceil(e), !1 === n.options.vertical ? i[n.animType] = "translate3d(" + e + "px, 0px, 0px)" : i[n.animType] = "translate3d(0px," + e + "px, 0px)", n.$slideTrack.css(i), t && setTimeout(function() {
                n.disableTransition(), t.call()
            }, n.options.speed))
        }, s.prototype.getNavTarget = function() {
            var e = this.options.asNavFor;
            return e && null !== e && (e = c(e).not(this.$slider)), e
        }, s.prototype.asNavFor = function(t) {
            var e = this.getNavTarget();
            null !== e && "object" == typeof e && e.each(function() {
                var e = c(this).slick("getSlick");
                e.unslicked || e.slideHandler(t, !0)
            })
        }, s.prototype.applyTransition = function(e) {
            var t = this,
                i = {};
            !1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
        }, s.prototype.autoPlay = function() {
            var e = this;
            e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
        }, s.prototype.autoPlayClear = function() {
            this.autoPlayTimer && clearInterval(this.autoPlayTimer)
        }, s.prototype.autoPlayIterator = function() {
            var e = this,
                t = e.currentSlide + e.options.slidesToScroll;
            e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
        }, s.prototype.buildArrows = function() {
            var e = this;
            !0 === e.options.arrows && (e.$prevArrow = c(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = c(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, s.prototype.buildDots = function() {
            var e, t, i = this;
            if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
                for (i.$slider.addClass("slick-dotted"), t = c("<ul />").addClass(i.options.dotsClass), e = 0; e <= i.getDotCount(); e += 1) t.append(c("<li />").append(i.options.customPaging.call(this, i, e)));
                i.$dots = t.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active")
            }
        }, s.prototype.buildOut = function() {
            var e = this;
            e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, t) {
                c(t).attr("data-slick-index", e).data("originalStyling", c(t).attr("style") || "")
            }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? c('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), c("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
        }, s.prototype.buildRows = function() {
            var e, t, i, n, o, r, s, a = this;
            if (n = document.createDocumentFragment(), r = a.$slider.children(), 0 < a.options.rows) {
                for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; e < o; e++) {
                    var l = document.createElement("div");
                    for (t = 0; t < a.options.rows; t++) {
                        var c = document.createElement("div");
                        for (i = 0; i < a.options.slidesPerRow; i++) {
                            var d = e * s + (t * a.options.slidesPerRow + i);
                            r.get(d) && c.appendChild(r.get(d))
                        }
                        l.appendChild(c)
                    }
                    n.appendChild(l)
                }
                a.$slider.empty().append(n), a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, s.prototype.checkResponsive = function(e, t) {
            var i, n, o, r = this,
                s = !1,
                a = r.$slider.width(),
                l = window.innerWidth || c(window).width();
            if ("window" === r.respondTo ? o = l : "slider" === r.respondTo ? o = a : "min" === r.respondTo && (o = Math.min(l, a)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
                for (i in n = null, r.breakpoints) r.breakpoints.hasOwnProperty(i) && (!1 === r.originalSettings.mobileFirst ? o < r.breakpoints[i] && (n = r.breakpoints[i]) : o > r.breakpoints[i] && (n = r.breakpoints[i]));
                null !== n ? null !== r.activeBreakpoint ? (n !== r.activeBreakpoint || t) && (r.activeBreakpoint = n, "unslick" === r.breakpointSettings[n] ? r.unslick(n) : (r.options = c.extend({}, r.originalSettings, r.breakpointSettings[n]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), s = n) : (r.activeBreakpoint = n, "unslick" === r.breakpointSettings[n] ? r.unslick(n) : (r.options = c.extend({}, r.originalSettings, r.breakpointSettings[n]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), s = n) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), s = n), e || !1 === s || r.$slider.trigger("breakpoint", [r, s])
            }
        }, s.prototype.changeSlide = function(e, t) {
            var i, n, o = this,
                r = c(e.currentTarget);
            switch (r.is("a") && e.preventDefault(), r.is("li") || (r = r.closest("li")), i = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, e.data.message) {
                case "previous":
                    n = 0 === i ? o.options.slidesToScroll : o.options.slidesToShow - i, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - n, !1, t);
                    break;
                case "next":
                    n = 0 === i ? o.options.slidesToScroll : i, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + n, !1, t);
                    break;
                case "index":
                    var s = 0 === e.data.index ? 0 : e.data.index || r.index() * o.options.slidesToScroll;
                    o.slideHandler(o.checkNavigable(s), !1, t), r.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, s.prototype.checkNavigable = function(e) {
            var t, i;
            if (i = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];
            else
                for (var n in t) {
                    if (e < t[n]) {
                        e = i;
                        break
                    }
                    i = t[n]
                }
            return e
        }, s.prototype.cleanUpEvents = function() {
            var e = this;
            e.options.dots && null !== e.$dots && (c("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", c.proxy(e.interrupt, e, !0)).off("mouseleave.slick", c.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), c(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().off("click.slick", e.selectHandler), c(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), c(window).off("resize.slick.slick-" + e.instanceUid, e.resize), c("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), c(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
        }, s.prototype.cleanUpSlideEvents = function() {
            var e = this;
            e.$list.off("mouseenter.slick", c.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", c.proxy(e.interrupt, e, !1))
        }, s.prototype.cleanUpRows = function() {
            var e;
            0 < this.options.rows && ((e = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(e))
        }, s.prototype.clickHandler = function(e) {
            !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
        }, s.prototype.destroy = function(e) {
            var t = this;
            t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), c(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                c(this).attr("style", c(this).data("originalStyling"))
            }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
        }, s.prototype.disableTransition = function(e) {
            var t = {};
            t[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(t) : this.$slides.eq(e).css(t)
        }, s.prototype.fadeSlide = function(e, t) {
            var i = this;
            !1 === i.cssTransitions ? (i.$slides.eq(e).css({
                zIndex: i.options.zIndex
            }), i.$slides.eq(e).animate({
                opacity: 1
            }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
                opacity: 1,
                zIndex: i.options.zIndex
            }), t && setTimeout(function() {
                i.disableTransition(e), t.call()
            }, i.options.speed))
        }, s.prototype.fadeSlideOut = function(e) {
            var t = this;
            !1 === t.cssTransitions ? t.$slides.eq(e).animate({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }))
        }, s.prototype.filterSlides = s.prototype.slickFilter = function(e) {
            var t = this;
            null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
        }, s.prototype.focusHandler = function() {
            var i = this;
            i.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(e) {
                e.stopImmediatePropagation();
                var t = c(this);
                setTimeout(function() {
                    i.options.pauseOnFocus && (i.focussed = t.is(":focus"), i.autoPlay())
                }, 0)
            })
        }, s.prototype.getCurrent = s.prototype.slickCurrentSlide = function() {
            return this.currentSlide
        }, s.prototype.getDotCount = function() {
            var e = this,
                t = 0,
                i = 0,
                n = 0;
            if (!0 === e.options.infinite)
                if (e.slideCount <= e.options.slidesToShow) ++n;
                else
                    for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else if (!0 === e.options.centerMode) n = e.slideCount;
            else if (e.options.asNavFor)
                for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else n = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
            return n - 1
        }, s.prototype.getLeft = function(e) {
            var t, i, n, o, r = this,
                s = 0;
            return r.slideOffset = 0, i = r.$slides.first().outerHeight(!0), !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, o = -1, !0 === r.options.vertical && !0 === r.options.centerMode && (2 === r.options.slidesToShow ? o = -1.5 : 1 === r.options.slidesToShow && (o = -2)), s = i * r.options.slidesToShow * o), r.slideCount % r.options.slidesToScroll != 0 && e + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (e > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1, s = (r.options.slidesToShow - (e - r.slideCount)) * i * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, s = r.slideCount % r.options.slidesToScroll * i * -1))) : e + r.options.slidesToShow > r.slideCount && (r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth, s = (e + r.options.slidesToShow - r.slideCount) * i), r.slideCount <= r.options.slidesToShow && (s = r.slideOffset = 0), !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow ? r.slideOffset = r.slideWidth * Math.floor(r.options.slidesToShow) / 2 - r.slideWidth * r.slideCount / 2 : !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), t = !1 === r.options.vertical ? e * r.slideWidth * -1 + r.slideOffset : e * i * -1 + s, !0 === r.options.variableWidth && (n = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow), t = !0 === r.options.rtl ? n[0] ? -1 * (r.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === r.options.centerMode && (n = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1), t = !0 === r.options.rtl ? n[0] ? -1 * (r.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, t += (r.$list.width() - n.outerWidth()) / 2)), t
        }, s.prototype.getOption = s.prototype.slickGetOption = function(e) {
            return this.options[e]
        }, s.prototype.getNavigableIndexes = function() {
            var e, t = this,
                i = 0,
                n = 0,
                o = [];
            for (!1 === t.options.infinite ? e = t.slideCount : (i = -1 * t.options.slidesToScroll, n = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); i < e;) o.push(i), i = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            return o
        }, s.prototype.getSlick = function() {
            return this
        }, s.prototype.getSlideCount = function() {
            var i, n, o = this;
            return n = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(e, t) {
                if (t.offsetLeft - n + c(t).outerWidth() / 2 > -1 * o.swipeLeft) return i = t, !1
            }), Math.abs(c(i).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
        }, s.prototype.goTo = s.prototype.slickGoTo = function(e, t) {
            this.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(e)
                }
            }, t)
        }, s.prototype.init = function(e) {
            var t = this;
            c(t.$slider).hasClass("slick-initialized") || (c(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
        }, s.prototype.initADA = function() {
            var n = this,
                i = Math.ceil(n.slideCount / n.options.slidesToShow),
                o = n.getNavigableIndexes().filter(function(e) {
                    return 0 <= e && e < n.slideCount
                });
            n.$slides.add(n.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), null !== n.$dots && (n.$slides.not(n.$slideTrack.find(".slick-cloned")).each(function(e) {
                var t = o.indexOf(e);
                if (c(this).attr({
                        role: "tabpanel",
                        id: "slick-slide" + n.instanceUid + e,
                        tabindex: -1
                    }), -1 !== t) {
                    var i = "slick-slide-control" + n.instanceUid + t;
                    c("#" + i).length && c(this).attr({
                        "aria-describedby": i
                    })
                }
            }), n.$dots.attr("role", "tablist").find("li").each(function(e) {
                var t = o[e];
                c(this).attr({
                    role: "presentation"
                }), c(this).find("button").first().attr({
                    role: "tab",
                    id: "slick-slide-control" + n.instanceUid + e,
                    "aria-controls": "slick-slide" + n.instanceUid + t,
                    "aria-label": e + 1 + " of " + i,
                    "aria-selected": null,
                    tabindex: "-1"
                })
            }).eq(n.currentSlide).find("button").attr({
                "aria-selected": "true",
                tabindex: "0"
            }).end());
            for (var e = n.currentSlide, t = e + n.options.slidesToShow; e < t; e++) n.options.focusOnChange ? n.$slides.eq(e).attr({
                tabindex: "0"
            }) : n.$slides.eq(e).removeAttr("tabindex");
            n.activateADA()
        }, s.prototype.initArrowEvents = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
        }, s.prototype.initDotEvents = function() {
            var e = this;
            !0 === e.options.dots && e.slideCount > e.options.slidesToShow && (c("li", e.$dots).on("click.slick", {
                message: "index"
            }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && e.slideCount > e.options.slidesToShow && c("li", e.$dots).on("mouseenter.slick", c.proxy(e.interrupt, e, !0)).on("mouseleave.slick", c.proxy(e.interrupt, e, !1))
        }, s.prototype.initSlideEvents = function() {
            var e = this;
            e.options.pauseOnHover && (e.$list.on("mouseenter.slick", c.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", c.proxy(e.interrupt, e, !1)))
        }, s.prototype.initializeEvents = function() {
            var e = this;
            e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), c(document).on(e.visibilityChange, c.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler), c(window).on("orientationchange.slick.slick-" + e.instanceUid, c.proxy(e.orientationChange, e)), c(window).on("resize.slick.slick-" + e.instanceUid, c.proxy(e.resize, e)), c("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), c(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), c(e.setPosition)
        }, s.prototype.initUI = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
        }, s.prototype.keyHandler = function(e) {
            var t = this;
            e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
                data: {
                    message: !0 === t.options.rtl ? "next" : "previous"
                }
            }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
                data: {
                    message: !0 === t.options.rtl ? "previous" : "next"
                }
            }))
        }, s.prototype.lazyLoad = function() {
            var e, t, i, r = this;

            function n(e) {
                c("img[data-lazy]", e).each(function() {
                    var e = c(this),
                        t = c(this).attr("data-lazy"),
                        i = c(this).attr("data-srcset"),
                        n = c(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
                        o = document.createElement("img");
                    o.onload = function() {
                        e.animate({
                            opacity: 0
                        }, 100, function() {
                            i && (e.attr("srcset", i), n && e.attr("sizes", n)), e.attr("src", t).animate({
                                opacity: 1
                            }, 200, function() {
                                e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                            }), r.$slider.trigger("lazyLoaded", [r, e, t])
                        })
                    }, o.onerror = function() {
                        e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, t])
                    }, o.src = t
                })
            }
            if (!0 === r.options.centerMode ? !0 === r.options.infinite ? i = (t = r.currentSlide + (r.options.slidesToShow / 2 + 1)) + r.options.slidesToShow + 2 : (t = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), i = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide) : (t = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, i = Math.ceil(t + r.options.slidesToShow), !0 === r.options.fade && (0 < t && t--, i <= r.slideCount && i++)), e = r.$slider.find(".slick-slide").slice(t, i), "anticipated" === r.options.lazyLoad)
                for (var o = t - 1, s = i, a = r.$slider.find(".slick-slide"), l = 0; l < r.options.slidesToScroll; l++) o < 0 && (o = r.slideCount - 1), e = (e = e.add(a.eq(o))).add(a.eq(s)), o--, s++;
            n(e), r.slideCount <= r.options.slidesToShow ? n(r.$slider.find(".slick-slide")) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? n(r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow)) : 0 === r.currentSlide && n(r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow))
        }, s.prototype.loadSlider = function() {
            var e = this;
            e.setPosition(), e.$slideTrack.css({
                opacity: 1
            }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
        }, s.prototype.next = s.prototype.slickNext = function() {
            this.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, s.prototype.orientationChange = function() {
            this.checkResponsive(), this.setPosition()
        }, s.prototype.pause = s.prototype.slickPause = function() {
            this.autoPlayClear(), this.paused = !0
        }, s.prototype.play = s.prototype.slickPlay = function() {
            var e = this;
            e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
        }, s.prototype.postSlide = function(e) {
            var t = this;
            t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && c(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
        }, s.prototype.prev = s.prototype.slickPrev = function() {
            this.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, s.prototype.preventDefault = function(e) {
            e.preventDefault()
        }, s.prototype.progressiveLazyLoad = function(e) {
            e = e || 1;
            var t, i, n, o, r, s = this,
                a = c("img[data-lazy]", s.$slider);
            a.length ? (t = a.first(), i = t.attr("data-lazy"), n = t.attr("data-srcset"), o = t.attr("data-sizes") || s.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function() {
                n && (t.attr("srcset", n), o && t.attr("sizes", o)), t.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === s.options.adaptiveHeight && s.setPosition(), s.$slider.trigger("lazyLoaded", [s, t, i]), s.progressiveLazyLoad()
            }, r.onerror = function() {
                e < 3 ? setTimeout(function() {
                    s.progressiveLazyLoad(e + 1)
                }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, t, i]), s.progressiveLazyLoad())
            }, r.src = i) : s.$slider.trigger("allImagesLoaded", [s])
        }, s.prototype.refresh = function(e) {
            var t, i, n = this;
            i = n.slideCount - n.options.slidesToShow, !n.options.infinite && n.currentSlide > i && (n.currentSlide = i), n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0), t = n.currentSlide, n.destroy(!0), c.extend(n, n.initials, {
                currentSlide: t
            }), n.init(), e || n.changeSlide({
                data: {
                    message: "index",
                    index: t
                }
            }, !1)
        }, s.prototype.registerBreakpoints = function() {
            var e, t, i, n = this,
                o = n.options.responsive || null;
            if ("array" === c.type(o) && o.length) {
                for (e in n.respondTo = n.options.respondTo || "window", o)
                    if (i = n.breakpoints.length - 1, o.hasOwnProperty(e)) {
                        for (t = o[e].breakpoint; 0 <= i;) n.breakpoints[i] && n.breakpoints[i] === t && n.breakpoints.splice(i, 1), i--;
                        n.breakpoints.push(t), n.breakpointSettings[t] = o[e].settings
                    }
                n.breakpoints.sort(function(e, t) {
                    return n.options.mobileFirst ? e - t : t - e
                })
            }
        }, s.prototype.reinit = function() {
            var e = this;
            e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
        }, s.prototype.resize = function() {
            var e = this;
            c(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
                e.windowWidth = c(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
            }, 50))
        }, s.prototype.removeSlide = s.prototype.slickRemove = function(e, t, i) {
            var n = this;
            if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : n.slideCount - 1 : !0 === t ? --e : e, n.slideCount < 1 || e < 0 || e > n.slideCount - 1) return !1;
            n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, n.reinit()
        }, s.prototype.setCSS = function(e) {
            var t, i, n = this,
                o = {};
            !0 === n.options.rtl && (e = -e), t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px", o[n.positionProp] = e, !1 === n.transformsEnabled || (!(o = {}) === n.cssTransitions ? o[n.animType] = "translate(" + t + ", " + i + ")" : o[n.animType] = "translate3d(" + t + ", " + i + ", 0px)"), n.$slideTrack.css(o)
        }, s.prototype.setDimensions = function() {
            var e = this;
            !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
                padding: "0px " + e.options.centerPadding
            }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
                padding: e.options.centerPadding + " 0px"
            })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
            var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
            !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
        }, s.prototype.setFade = function() {
            var i, n = this;
            n.$slides.each(function(e, t) {
                i = n.slideWidth * e * -1, !0 === n.options.rtl ? c(t).css({
                    position: "relative",
                    right: i,
                    top: 0,
                    zIndex: n.options.zIndex - 2,
                    opacity: 0
                }) : c(t).css({
                    position: "relative",
                    left: i,
                    top: 0,
                    zIndex: n.options.zIndex - 2,
                    opacity: 0
                })
            }), n.$slides.eq(n.currentSlide).css({
                zIndex: n.options.zIndex - 1,
                opacity: 1
            })
        }, s.prototype.setHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.css("height", t)
            }
        }, s.prototype.setOption = s.prototype.slickSetOption = function() {
            var e, t, i, n, o, r = this,
                s = !1;
            if ("object" === c.type(arguments[0]) ? (i = arguments[0], s = arguments[1], o = "multiple") : "string" === c.type(arguments[0]) && (i = arguments[0], n = arguments[1], s = arguments[2], "responsive" === arguments[0] && "array" === c.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")), "single" === o) r.options[i] = n;
            else if ("multiple" === o) c.each(i, function(e, t) {
                r.options[e] = t
            });
            else if ("responsive" === o)
                for (t in n)
                    if ("array" !== c.type(r.options.responsive)) r.options.responsive = [n[t]];
                    else {
                        for (e = r.options.responsive.length - 1; 0 <= e;) r.options.responsive[e].breakpoint === n[t].breakpoint && r.options.responsive.splice(e, 1), e--;
                        r.options.responsive.push(n[t])
                    }
            s && (r.unload(), r.reinit())
        }, s.prototype.setPosition = function() {
            var e = this;
            e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
        }, s.prototype.setProps = function() {
            var e = this,
                t = document.body.style;
            e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
        }, s.prototype.setSlideClasses = function(e) {
            var t, i, n, o, r = this;
            if (i = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(e).addClass("slick-current"), !0 === r.options.centerMode) {
                var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
                t = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (t <= e && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t + s, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = r.options.slidesToShow + e, i.slice(n - t + 1 + s, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && i.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center")
            } else 0 <= e && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= r.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, n = !0 === r.options.infinite ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? i.slice(n - (r.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
            "ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad || r.lazyLoad()
        }, s.prototype.setupInfinite = function() {
            var e, t, i, n = this;
            if (!0 === n.options.fade && (n.options.centerMode = !1), !0 === n.options.infinite && !1 === n.options.fade && (t = null, n.slideCount > n.options.slidesToShow)) {
                for (i = !0 === n.options.centerMode ? n.options.slidesToShow + 1 : n.options.slidesToShow, e = n.slideCount; e > n.slideCount - i; e -= 1) t = e - 1, c(n.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");
                for (e = 0; e < i + n.slideCount; e += 1) t = e, c(n.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");
                n.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    c(this).attr("id", "")
                })
            }
        }, s.prototype.interrupt = function(e) {
            e || this.autoPlay(), this.interrupted = e
        }, s.prototype.selectHandler = function(e) {
            var t = c(e.target).is(".slick-slide") ? c(e.target) : c(e.target).parents(".slick-slide"),
                i = parseInt(t.attr("data-slick-index"));
            i || (i = 0), this.slideCount <= this.options.slidesToShow ? this.slideHandler(i, !1, !0) : this.slideHandler(i)
        }, s.prototype.slideHandler = function(e, t, i) {
            var n, o, r, s, a, l, c = this;
            if (t = t || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e))
                if (!1 === t && c.asNavFor(e), n = e, a = c.getLeft(n), s = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i && c.slideCount > c.options.slidesToShow ? c.animateSlide(s, function() {
                    c.postSlide(n)
                }) : c.postSlide(n));
                else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i && c.slideCount > c.options.slidesToShow ? c.animateSlide(s, function() {
                c.postSlide(n)
            }) : c.postSlide(n));
            else {
                if (c.options.autoplay && clearInterval(c.autoPlayTimer), o = n < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), r = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (l = (l = c.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== i ? (c.fadeSlideOut(r), c.fadeSlide(o, function() {
                    c.postSlide(o)
                })) : c.postSlide(o), void c.animateHeight();
                !0 !== i && c.slideCount > c.options.slidesToShow ? c.animateSlide(a, function() {
                    c.postSlide(o)
                }) : c.postSlide(o)
            }
        }, s.prototype.startLoad = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
        }, s.prototype.swipeDirection = function() {
            var e, t, i, n, o = this;
            return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(t, e), (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)), n <= 45 && 0 <= n ? !1 === o.options.rtl ? "left" : "right" : n <= 360 && 315 <= n ? !1 === o.options.rtl ? "left" : "right" : 135 <= n && n <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? 35 <= n && n <= 135 ? "down" : "up" : "vertical"
        }, s.prototype.swipeEnd = function(e) {
            var t, i, n = this;
            if (n.dragging = !1, n.swiping = !1, n.scrolling) return n.scrolling = !1;
            if (n.interrupted = !1, n.shouldClick = !(10 < n.touchObject.swipeLength), void 0 === n.touchObject.curX) return !1;
            if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
                switch (i = n.swipeDirection()) {
                    case "left":
                    case "down":
                        t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
                }
                "vertical" != i && (n.slideHandler(t), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
            } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
        }, s.prototype.swipeHandler = function(e) {
            var t = this;
            if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
                case "start":
                    t.swipeStart(e);
                    break;
                case "move":
                    t.swipeMove(e);
                    break;
                case "end":
                    t.swipeEnd(e)
            }
        }, s.prototype.swipeMove = function(e) {
            var t, i, n, o, r, s, a = this;
            return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || r && 1 !== r.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, a.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && 4 < s ? !(a.scrolling = !0) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s), i = a.swipeDirection(), void 0 !== e.originalEvent && 4 < a.touchObject.swipeLength && (a.swiping = !0, e.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), n = a.touchObject.swipeLength, (a.touchObject.edgeHit = !1) === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + n * o : a.swipeLeft = t + n * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = t + n * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
        }, s.prototype.swipeStart = function(e) {
            var t, i = this;
            if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return !(i.touchObject = {});
            void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, i.dragging = !0
        }, s.prototype.unfilterSlides = s.prototype.slickUnfilter = function() {
            var e = this;
            null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
        }, s.prototype.unload = function() {
            var e = this;
            c(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, s.prototype.unslick = function(e) {
            this.$slider.trigger("unslick", [this, e]), this.destroy()
        }, s.prototype.updateArrows = function() {
            var e = this;
            Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, s.prototype.updateDots = function() {
            var e = this;
            null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
        }, s.prototype.visibility = function() {
            this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
        }, c.fn.slick = function() {
            var e, t, i = this,
                n = arguments[0],
                o = Array.prototype.slice.call(arguments, 1),
                r = i.length;
            for (e = 0; e < r; e++)
                if ("object" == typeof n || void 0 === n ? i[e].slick = new s(i[e], n) : t = i[e].slick[n].apply(i[e].slick, o), void 0 !== t) return t;
            return i
        }
    }), 
document.addEventListener("DOMContentLoaded", function() {
    let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    let active = false;
    const lazyLoad = function() {
        if (active === false) {
            active = true;
            setTimeout(function() {
                lazyImages.forEach(function(lazyImage) {
                    if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0)) {
                        lazyImage.src = lazyImage.dataset.lazy;
                        lazyImage.classList.remove("lazy");
                        lazyImages = lazyImages.filter(function(image) {
                            return image !== lazyImage;
                        });
                        if (lazyImages.length === 0) {
                            document.removeEventListener("scroll", lazyLoad);
                            window.removeEventListener("resize", lazyLoad);
                            window.removeEventListener("orientationchange", lazyLoad);
                        }
                    }
                });
                active = false;
            }, 200);
        }
    };
    document.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationchange", lazyLoad);
});

// Generated by CoffeeScript 1.9.3
(function(){var e;e=function(){function e(e,t){var n,r;this.options={target:"instafeed",get:"popular",resolution:"thumbnail",sortBy:"none",links:!0,mock:!1,useHttp:!1};if(typeof e=="object")for(n in e)r=e[n],this.options[n]=r;this.context=t!=null?t:this,this.unique=this._genKey()}return e.prototype.hasNext=function(){return typeof this.context.nextUrl=="string"&&this.context.nextUrl.length>0},e.prototype.next=function(){return this.hasNext()?this.run(this.context.nextUrl):!1},e.prototype.run=function(t){var n,r,i;if(typeof this.options.clientId!="string"&&typeof this.options.accessToken!="string")throw new Error("Missing clientId or accessToken.");if(typeof this.options.accessToken!="string"&&typeof this.options.clientId!="string")throw new Error("Missing clientId or accessToken.");return this.options.before!=null&&typeof this.options.before=="function"&&this.options.before.call(this),typeof document!="undefined"&&document!==null&&(i=document.createElement("script"),i.id="instafeed-fetcher",i.src=t||this._buildUrl(),n=document.getElementsByTagName("head"),n[0].appendChild(i),r="instafeedCache"+this.unique,window[r]=new e(this.options,this),window[r].unique=this.unique),!0},e.prototype.parse=function(e){var t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D;if(typeof e!="object"){if(this.options.error!=null&&typeof this.options.error=="function")return this.options.error.call(this,"Invalid JSON data"),!1;throw new Error("Invalid JSON response")}if(e.meta.code!==200){if(this.options.error!=null&&typeof this.options.error=="function")return this.options.error.call(this,e.meta.error_message),!1;throw new Error("Error from Instagram: "+e.meta.error_message)}if(e.data.length===0){if(this.options.error!=null&&typeof this.options.error=="function")return this.options.error.call(this,"No images were returned from Instagram"),!1;throw new Error("No images were returned from Instagram")}this.options.success!=null&&typeof this.options.success=="function"&&this.options.success.call(this,e),this.context.nextUrl="",e.pagination!=null&&(this.context.nextUrl=e.pagination.next_url);if(this.options.sortBy!=="none"){this.options.sortBy==="random"?M=["","random"]:M=this.options.sortBy.split("-"),O=M[0]==="least"?!0:!1;switch(M[1]){case"random":e.data.sort(function(){return.5-Math.random()});break;case"recent":e.data=this._sortBy(e.data,"created_time",O);break;case"liked":e.data=this._sortBy(e.data,"likes.count",O);break;case"commented":e.data=this._sortBy(e.data,"comments.count",O);break;default:throw new Error("Invalid option for sortBy: '"+this.options.sortBy+"'.")}}if(typeof document!="undefined"&&document!==null&&this.options.mock===!1){m=e.data,A=parseInt(this.options.limit,10),this.options.limit!=null&&m.length>A&&(m=m.slice(0,A)),u=document.createDocumentFragment(),this.options.filter!=null&&typeof this.options.filter=="function"&&(m=this._filter(m,this.options.filter));if(this.options.template!=null&&typeof this.options.template=="string"){f="",d="",w="",D=document.createElement("div");for(c=0,N=m.length;c<N;c++){h=m[c],p=h.images[this.options.resolution];if(typeof p!="object")throw o="No image found for resolution: "+this.options.resolution+".",new Error(o);E=p.width,y=p.height,b="square",E>y&&(b="landscape"),E<y&&(b="portrait"),v=p.url,l=window.location.protocol.indexOf("http")>=0,l&&!this.options.useHttp&&(v=v.replace(/https?:\/\//,"//")),d=this._makeTemplate(this.options.template,{model:h,id:h.id,link:h.link,type:h.type,image:v,width:E,height:y,orientation:b,caption:this._getObjectProperty(h,"caption.text"),likes:h.likes.count,comments:h.comments.count,location:this._getObjectProperty(h,"location.name")}),f+=d}D.innerHTML=f,i=[],r=0,n=D.childNodes.length;while(r<n)i.push(D.childNodes[r]),r+=1;for(x=0,C=i.length;x<C;x++)L=i[x],u.appendChild(L)}else for(T=0,k=m.length;T<k;T++){h=m[T],g=document.createElement("img"),p=h.images[this.options.resolution];if(typeof p!="object")throw o="No image found for resolution: "+this.options.resolution+".",new Error(o);v=p.url,l=window.location.protocol.indexOf("http")>=0,l&&!this.options.useHttp&&(v=v.replace(/https?:\/\//,"//")),g.src=v,this.options.links===!0?(t=document.createElement("a"),t.href=h.link,t.appendChild(g),u.appendChild(t)):u.appendChild(g)}_=this.options.target,typeof _=="string"&&(_=document.getElementById(_));if(_==null)throw o='No element with id="'+this.options.target+'" on page.',new Error(o);_.appendChild(u),a=document.getElementsByTagName("head")[0],a.removeChild(document.getElementById("instafeed-fetcher")),S="instafeedCache"+this.unique,window[S]=void 0;try{delete window[S]}catch(P){s=P}}return this.options.after!=null&&typeof this.options.after=="function"&&this.options.after.call(this),!0},e.prototype._buildUrl=function(){var e,t,n;e="https://api.instagram.com/v1";switch(this.options.get){case"popular":t="media/popular";break;case"tagged":if(!this.options.tagName)throw new Error("No tag name specified. Use the 'tagName' option.");t="tags/"+this.options.tagName+"/media/recent";break;case"location":if(!this.options.locationId)throw new Error("No location specified. Use the 'locationId' option.");t="locations/"+this.options.locationId+"/media/recent";break;case"user":if(!this.options.userId)throw new Error("No user specified. Use the 'userId' option.");t="users/"+this.options.userId+"/media/recent";break;default:throw new Error("Invalid option for get: '"+this.options.get+"'.")}return n=e+"/"+t,this.options.accessToken!=null?n+="?access_token="+this.options.accessToken:n+="?client_id="+this.options.clientId,this.options.limit!=null&&(n+="&count="+this.options.limit),n+="&callback=instafeedCache"+this.unique+".parse",n},e.prototype._genKey=function(){var e;return e=function(){return((1+Math.random())*65536|0).toString(16).substring(1)},""+e()+e()+e()+e()},e.prototype._makeTemplate=function(e,t){var n,r,i,s,o;r=/(?:\{{2})([\w\[\]\.]+)(?:\}{2})/,n=e;while(r.test(n))s=n.match(r)[1],o=(i=this._getObjectProperty(t,s))!=null?i:"",n=n.replace(r,function(){return""+o});return n},e.prototype._getObjectProperty=function(e,t){var n,r;t=t.replace(/\[(\w+)\]/g,".$1"),r=t.split(".");while(r.length){n=r.shift();if(!(e!=null&&n in e))return null;e=e[n]}return e},e.prototype._sortBy=function(e,t,n){var r;return r=function(e,r){var i,s;return i=this._getObjectProperty(e,t),s=this._getObjectProperty(r,t),n?i>s?1:-1:i<s?1:-1},e.sort(r.bind(this)),e},e.prototype._filter=function(e,t){var n,r,i,s,o;n=[],r=function(e){if(t(e))return n.push(e)};for(i=0,o=e.length;i<o;i++)s=e[i],r(s);return n},e}(),function(e,t){return typeof define=="function"&&define.amd?define([],t):typeof module=="object"&&module.exports?module.exports=t():e.Instafeed=t()}(this,function(){return e})}).call(this);