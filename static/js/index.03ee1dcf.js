(function(t) {
    function n(n) {
        for (var a, o, p = n[0], u = n[1], m = n[2], d = 0, l = []; d < p.length; d++)
            o = p[d],
            Object.prototype.hasOwnProperty.call(r, o) && r[o] && l.push(r[o][0]),
            r[o] = 0;
        for (a in u)
            Object.prototype.hasOwnProperty.call(u, a) && (t[a] = u[a]);
        g && g(n);
        while (l.length)
            l.shift()();
        return e.push.apply(e, m || []),
        i()
    }
    function i() {
        for (var t, n = 0; n < e.length; n++) {
            for (var i = e[n], a = !0, o = 1; o < i.length; o++) {
                var u = i[o];
                0 !== r[u] && (a = !1)
            }
            a && (e.splice(n--, 1),
            t = p(p.s = i[0]))
        }
        return t
    }
    var a = {}
      , r = {
        index: 0
    }
      , e = [];
    function o(t) {
        return p.p + "static/js/" + ({
            "pages-chefpro": "pages-chefpro"
        }[t] || t) + "." + {
            "pages-chefpro": "41553243"
        }[t] + ".js"
    }
    function p(n) {
        if (a[n])
            return a[n].exports;
        var i = a[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(i.exports, i, i.exports, p),
        i.l = !0,
        i.exports
    }
    p.e = function(t) {
        var n = []
          , i = r[t];
        if (0 !== i)
            if (i)
                n.push(i[2]);
            else {
                var a = new Promise((function(n, a) {
                    i = r[t] = [n, a]
                }
                ));
                n.push(i[2] = a);
                var e, u = document.createElement("script");
                u.charset = "utf-8",
                u.timeout = 120,
                p.nc && u.setAttribute("nonce", p.nc),
                u.src = o(t);
                var m = new Error;
                e = function(n) {
                    u.onerror = u.onload = null,
                    clearTimeout(d);
                    var i = r[t];
                    if (0 !== i) {
                        if (i) {
                            var a = n && ("load" === n.type ? "missing" : n.type)
                              , e = n && n.target && n.target.src;
                            m.message = "Loading chunk " + t + " failed.\n(" + a + ": " + e + ")",
                            m.name = "ChunkLoadError",
                            m.type = a,
                            m.request = e,
                            i[1](m)
                        }
                        r[t] = void 0
                    }
                }
                ;
                var d = setTimeout((function() {
                    e({
                        type: "timeout",
                        target: u
                    })
                }
                ), 12e4);
                u.onerror = u.onload = e,
                document.head.appendChild(u)
            }
        return Promise.all(n)
    }
    ,
    p.m = t,
    p.c = a,
    p.d = function(t, n, i) {
        p.o(t, n) || Object.defineProperty(t, n, {
            enumerable: !0,
            get: i
        })
    }
    ,
    p.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    p.t = function(t, n) {
        if (1 & n && (t = p(t)),
        8 & n)
            return t;
        if (4 & n && "object" === typeof t && t && t.__esModule)
            return t;
        var i = Object.create(null);
        if (p.r(i),
        Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }),
        2 & n && "string" != typeof t)
            for (var a in t)
                p.d(i, a, function(n) {
                    return t[n]
                }
                .bind(null, a));
        return i
    }
    ,
    p.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t["default"]
        }
        : function() {
            return t
        }
        ;
        return p.d(n, "a", n),
        n
    }
    ,
    p.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
    }
    ,
    p.p = "/",
    p.oe = function(t) {
        throw console.error(t),
        t
    }
    ;
    var u = window["webpackJsonp"] = window["webpackJsonp"] || []
      , m = u.push.bind(u);
    u.push = n,
    u = u.slice();
    for (var d = 0; d < u.length; d++)
        n(u[d]);
    var g = m;
    e.push([0, "chunk-vendors"]),
    i()
}
)({
    0: function(t, n, i) {
        t.exports = i("0e6d")
    },
    "0444": function(t, n, i) {
        i("d81d"),
        i("a434"),
        i("b64b"),
        i("d3b7"),
        i("ac1f"),
        t.exports = {
            data: function() {
                return {}
            },
            onLoad: function() {
                this.$u.getRect = this.$uGetRect
            },
            methods: {
                $uGetRect: function(t, n) {
                    var i = this;
                    return new Promise((function(a) {
                        uni.createSelectorQuery().in(i)[n ? "selectAll" : "select"](t).boundingClientRect((function(t) {
                            n && Array.isArray(t) && t.length && a(t),
                            !n && t && a(t)
                        }
                        )).exec()
                    }
                    ))
                },
                getParentData: function() {
                    var t = this
                      , n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    this.parent || (this.parent = !1),
                    this.parent = this.$u.$parent.call(this, n),
                    this.parent && Object.keys(this.parentData).map((function(n) {
                        t.parentData[n] = t.parent[n]
                    }
                    ))
                },
                preventEvent: function(t) {
                    t && t.stopPropagation && t.stopPropagation()
                }
            },
            onReachBottom: function() {
                uni.$emit("uOnReachBottom")
            },
            beforeDestroy: function() {
                var t = this;
                if (this.parent && uni.$u.test.array(this.parent.children)) {
                    var n = this.parent.children;
                    n.map((function(i, a) {
                        i === t && n.splice(a, 1)
                    }
                    ))
                }
            }
        }
    },
    "0517": function(t, n, i) {
        "use strict";
        var a = i("4ea4");
        i("c975"),
        i("d3b7"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.default = void 0;
        var r = a(i("d4ec"))
          , e = a(i("bee2"))
          , o = a(i("422e"))
          , p = a(i("1b93"))
          , u = function() {
            function t() {
                var n = this;
                (0,
                r.default)(this, t),
                this.config = {
                    baseUrl: "",
                    header: {},
                    method: "POST",
                    dataType: "json",
                    responseType: "text",
                    showLoading: !0,
                    loadingText: "请求中...",
                    loadingTime: 800,
                    timer: null,
                    originalData: !1,
                    loadingMask: !0
                },
                this.interceptor = {
                    request: null,
                    response: null
                },
                this.get = function(t) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return n.request({
                        method: "GET",
                        url: t,
                        header: a,
                        data: i
                    })
                }
                ,
                this.post = function(t) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return n.request({
                        url: t,
                        method: "POST",
                        header: a,
                        data: i
                    })
                }
                ,
                this.put = function(t) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return n.request({
                        url: t,
                        method: "PUT",
                        header: a,
                        data: i
                    })
                }
                ,
                this.delete = function(t) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return n.request({
                        url: t,
                        method: "DELETE",
                        header: a,
                        data: i
                    })
                }
            }
            return (0,
            e.default)(t, [{
                key: "setConfig",
                value: function(t) {
                    this.config = (0,
                    o.default)(this.config, t)
                }
            }, {
                key: "request",
                value: function() {
                    var t = this
                      , n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (this.interceptor.request && "function" === typeof this.interceptor.request) {
                        var i = this.interceptor.request(n);
                        if (!1 === i)
                            return new Promise((function() {}
                            ));
                        this.options = i
                    }
                    return n.dataType = n.dataType || this.config.dataType,
                    n.responseType = n.responseType || this.config.responseType,
                    n.url = n.url || "",
                    n.params = n.params || {},
                    n.header = Object.assign({}, this.config.header, n.header),
                    n.method = n.method || this.config.method,
                    new Promise((function(i, a) {
                        n.complete = function(n) {
                            if (uni.hideLoading(),
                            clearTimeout(t.config.timer),
                            t.config.timer = null,
                            t.config.originalData)
                                if (t.interceptor.response && "function" === typeof t.interceptor.response) {
                                    var r = t.interceptor.response(n);
                                    !1 !== r ? i(r) : a(n)
                                } else
                                    i(n);
                            else if (200 == n.statusCode)
                                if (t.interceptor.response && "function" === typeof t.interceptor.response) {
                                    var e = t.interceptor.response(n.data);
                                    !1 !== e ? i(e) : a(n.data)
                                } else
                                    i(n.data);
                            else
                                a(n)
                        }
                        ,
                        n.url = p.default.url(n.url) ? n.url : t.config.baseUrl + (0 == n.url.indexOf("/") ? n.url : "/" + n.url),
                        t.config.showLoading && !t.config.timer && (t.config.timer = setTimeout((function() {
                            uni.showLoading({
                                title: t.config.loadingText,
                                mask: t.config.loadingMask
                            }),
                            t.config.timer = null
                        }
                        ), t.config.loadingTime)),
                        uni.request(n)
                    }
                    ))
                }
            }]),
            t
        }()
          , m = new u;
        n.default = m
    },
    "0dbb": function(t, n, i) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.default = void 0;
        var a = {
            primary: "#2979ff",
            primaryDark: "#2b85e4",
            primaryDisabled: "#a0cfff",
            primaryLight: "#ecf5ff",
            bgColor: "#f3f4f6",
            info: "#909399",
            infoDark: "#82848a",
            infoDisabled: "#c8c9cc",
            infoLight: "#f4f4f5",
            warning: "#ff9900",
            warningDark: "#f29100",
            warningDisabled: "#fcbd71",
            warningLight: "#fdf6ec",
            error: "#fa3534",
            errorDark: "#dd6161",
            errorDisabled: "#fab6b6",
            errorLight: "#fef0f0",
            success: "#19be6b",
            successDark: "#18b566",
            successDisabled: "#71d5a1",
            successLight: "#dbf1e1",
            mainColor: "#303133",
            contentColor: "#606266",
            tipsColor: "#909399",
            lightColor: "#c0c4cc",
            borderColor: "#e4e7ed"
        }
          , r = a;
        n.default = r
    },
    "0e6d": function(t, n, i) {
        "use strict";
        var a = i("4ea4")
          , r = a(i("5530"));
        i("e260"),
        i("e6cf"),
        i("cca6"),
        i("a79d"),
        i("2771"),
        i("1c31");
        var e = a(i("e143"))
          , o = a(i("f04a"))
          , p = a(i("c3e9"))
          , u = a(i("8694"))
          , m = a(i("3243"))
          , d = a(i("7bf2"))
          , g = a(i("3a23"))
          , l = a(i("473a"))
          , s = a(i("eea6"));
        e.default.config.productionTip = !1,
        o.default.mpType = "app",
        e.default.prototype.vuePrototype = "枣红",
        e.default.use(p.default);
        var c = i("d72c");
        e.default.mixin(c);
        var f = i("f937");
        e.default.mixin(f),
        e.default.use(g.default);
        var h = new g.default({
            locale: localStorage.getItem("lang") || "zh",
            messages: {
                zh: m.default,
                en: d.default
            }
        });
        e.default.prototype._i18n = h;
        var b = new e.default((0,
        r.default)({
            i18n: h,
            store: u.default
        }, o.default));
        e.default.use(l.default, b),
        e.default.use(s.default, b),
        b.$mount()
    },
    "0f92": function(t, n, i) {
        "use strict";
        function a() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
              , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "yyyy-mm-dd";
            t || (t = Number(new Date)),
            10 == t.toString().length && (t *= 1e3);
            var i, a = new Date(t), r = {
                "y+": a.getFullYear().toString(),
                "m+": (a.getMonth() + 1).toString(),
                "d+": a.getDate().toString(),
                "h+": a.getHours().toString(),
                "M+": a.getMinutes().toString(),
                "s+": a.getSeconds().toString()
            };
            for (var e in r)
                i = new RegExp("(" + e + ")").exec(n),
                i && (n = n.replace(i[1], 1 == i[1].length ? r[e] : r[e].padStart(i[1].length, "0")));
            return n
        }
        i("fb6a"),
        i("a9e3"),
        i("d3b7"),
        i("4d63"),
        i("ac1f"),
        i("25f0"),
        i("4d90"),
        i("5319"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.default = void 0,
        String.prototype.padStart || (String.prototype.padStart = function(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ";
            if ("[object String]" !== Object.prototype.toString.call(n))
                throw new TypeError("fillString must be String");
            var i = this;
            if (i.length >= t)
                return String(i);
            var a = t - i.length
              , r = Math.ceil(a / n.length);
            while (r >>= 1)
                n += n,
                1 === r && (n += n);
            return n.slice(0, a) + i
        }
        );
        var r = a;
        n.default = r
    },
    "1b93": function(t, n, i) {
        "use strict";
        function a(t) {
            return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(t)
        }
        function r(t) {
            return /^1[3-9]\d{9}$/.test(t)
        }
        function e(t) {
            return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/.test(t)
        }
        function o(t) {
            return !/Invalid|NaN/.test(new Date(t).toString())
        }
        function p(t) {
            return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)
        }
        function u(t) {
            return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
        }
        function m(t) {
            return /^\d+$/.test(t)
        }
        function d(t) {
            return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(t)
        }
        function g(t) {
            var n = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/
              , i = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
            return 7 === t.length ? i.test(t) : 8 === t.length && n.test(t)
        }
        function l(t) {
            return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(t)
        }
        function s(t) {
            var n = /^[\u4e00-\u9fa5]+$/gi;
            return n.test(t)
        }
        function c(t) {
            return /^[a-zA-Z]*$/.test(t)
        }
        function f(t) {
            var n = /^[0-9a-zA-Z]*$/g;
            return n.test(t)
        }
        function h(t, n) {
            return t.indexOf(n) >= 0
        }
        function b(t, n) {
            return t >= n[0] && t <= n[1]
        }
        function v(t, n) {
            return t.length >= n[0] && t.length <= n[1]
        }
        function y(t) {
            var n = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
            return n.test(t)
        }
        function _(t) {
            switch (typeof t) {
            case "undefined":
                return !0;
            case "string":
                if (0 == t.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, "").length)
                    return !0;
                break;
            case "boolean":
                if (!t)
                    return !0;
                break;
            case "number":
                if (0 === t || isNaN(t))
                    return !0;
                break;
            case "object":
                if (null === t || 0 === t.length)
                    return !0;
                for (var n in t)
                    return !1;
                return !0
            }
            return !1
        }
        function w(t) {
            if ("string" == typeof t)
                try {
                    var n = JSON.parse(t);
                    return !("object" != typeof n || !n)
                } catch (i) {
                    return !1
                }
            return !1
        }
        function k(t) {
            return "function" === typeof Array.isArray ? Array.isArray(t) : "[object Array]" === Object.prototype.toString.call(t)
        }
        function x(t) {
            return "[object Object]" === Object.prototype.toString.call(t)
        }
        function T(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
            return new RegExp("^\\d{".concat(n, "}$")).test(t)
        }
        i("c975"),
        i("d3b7"),
        i("4d63"),
        i("ac1f"),
        i("25f0"),
        i("5319"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.default = void 0;
        var O = {
            email: a,
            mobile: r,
            url: e,
            date: o,
            dateISO: p,
            number: u,
            digits: m,
            idCard: d,
            carNo: g,
            amount: l,
            chinese: s,
            letter: c,
            enOrNum: f,
            contains: h,
            range: b,
            rangeLength: v,
            empty: _,
            isEmpty: _,
            jsonString: w,
            landline: y,
            object: x,
            array: k,
            code: T
        };
        n.default = O
    },
    "1e83": function(t, n, i) {
        "use strict";
        var a = i("4ea4");
        i("a9e3"),
        i("d3b7"),
        i("e25e"),
        i("25f0"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.default = void 0;
        var r = a(i("0f92"));
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
              , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "yyyy-mm-dd";
            t || (t = Number(new Date)),
            10 == t.toString().length && (t *= 1e3);
            var i = +new Date(Number(t))
              , a = (Number(new Date) - i) / 1e3
              , e = "";
            switch (!0) {
            case a < 300:
                e = "刚刚";
                break;
            case a >= 300 && a < 3600:
                e = parseInt(a / 60) + "分钟前";
                break;
            case a >= 3600 && a < 86400:
                e = parseInt(a / 3600) + "小时前";
                break;
            case a >= 86400 && a < 2592e3:
                e = parseInt(a / 86400) + "天前";
                break;
            default:
                e = !1 === n ? a >= 2592e3 && a < 31536e3 ? parseInt(a / 2592e3) + "个月前" : parseInt(a / 31536e3) + "年前" : (0,
                r.default)(i, n)
            }
            return e
        }
        var o = e;
        n.default = o
    },
    "21ce": function(t, n, i) {
        "use strict";
        function a(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "both";
            return "both" == n ? t.replace(/^\s+|\s+$/g, "") : "left" == n ? t.replace(/^\s*/, "") : "right" == n ? t.replace(/(\s*$)/g, "") : "all" == n ? t.replace(/\s+/g, "") : t
        }
        i("ac1f"),
        i("5319"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.default = void 0;
        var r = a;
        n.default = r
    },
    2771: function(t, n, i) {
        "use strict";
        (function(t) {
            var n = i("4ea4");
            i("13d5"),
            i("d3b7"),
            i("ac1f"),
            i("5319"),
            i("ddb0");
            var a = n(i("e143"))
              , r = {
                keys: function() {
                    return []
                }
            };
            t["____C70A1D7____"] = !0,
            delete t["____C70A1D7____"],
            t.__uniConfig = {
                easycom: {
                    "^u-(.*)": "@/uview-ui/components/u-$1/u-$1.vue",
                    "^unicloud-db$": "@dcloudio/uni-cli-shared/components/unicloud-db.vue",
                    "^page-meta$": "@dcloudio/uni-cli-shared/components/page-meta.vue",
                    "^navigation-bar$": "@dcloudio/uni-cli-shared/components/navigation-bar.vue",
                    "^uni-match-media$": "@dcloudio/uni-cli-shared/components/uni-match-media.vue"
                },
                preloadRule: {},
                globalStyle: {},
                tabBar: {
                    color: "#909399",
                    selectedColor: "#303133",
                    backgroundColor: "#FFFFFF",
                    borderStyle: "black",
                    list: []
                }
            },
            t.__uniConfig.compilerVersion = "3.3.11",
            t.__uniConfig.router = {
                mode: "hash",
                base: "/"
            },
            t.__uniConfig.publicPath = "/",
            t.__uniConfig["async"] = {
                loading: "AsyncLoading",
                error: "AsyncError",
                delay: 200,
                timeout: 6e4
            },
            t.__uniConfig.debug = !1,
            t.__uniConfig.networkTimeout = {
                request: 6e4,
                connectSocket: 6e4,
                uploadFile: 6e4,
                downloadFile: 6e4
            },
            t.__uniConfig.sdkConfigs = {},
            t.__uniConfig.qqMapKey = void 0,
            t.__uniConfig.googleMapKey = void 0,
            t.__uniConfig.locale = "",
            t.__uniConfig.fallbackLocale = void 0,
            t.__uniConfig.locales = r.keys().reduce((function(t, n) {
                var i = n.replace(/\.\/(uni-app.)?(.*).json/, "$2")
                  , a = r(n);
                return Object.assign(t[i] || (t[i] = {}), a.common || a),
                t
            }
            ), {}),
            t.__uniConfig.nvue = {
                "flex-direction": "column"
            },
            t.__uniConfig.__webpack_chunk_load__ = i.e,
            a.default.component("pages-chefpro", (function(t) {
                var n = {
                    component: i.e("pages-chefpro").then(function() {
                        return t(i("eb44"))
                    }
                    .bind(null, i)).catch(i.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(t) {
                        return t(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(t) {
                        return t(__uniConfig["async"]["error"])
                    }
                }),
                n
            }
            )),
            t.__uniRoutes = [{
                path: "/",
                alias: "/pages/chefpro",
                component: {
                    render: function(t) {
                        return t("Page", {
                            props: Object.assign({
                                isQuit: !0,
                                isEntry: !0
                            }, __uniConfig.globalStyle, {
                                navigationBarTitleText: "SmartChef",
                                backgroundColor: "#0055ff00",
                                navigationBarBackgroundColor: "#2979FF00",
                                titleNView: !1
                            })
                        }, [t("pages-chefpro", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    id: 1,
                    name: "pages-chefpro",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/chefpro",
                    isQuit: !0,
                    isEntry: !0,
                    windowTop: 0
                }
            }, {
                path: "/preview-image",
                component: {
                    render: function(t) {
                        return t("Page", {
                            props: {
                                navigationStyle: "custom"
                            }
                        }, [t("system-preview-image", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "preview-image",
                    pagePath: "/preview-image"
                }
            }, {
                path: "/choose-location",
                component: {
                    render: function(t) {
                        return t("Page", {
                            props: {
                                navigationStyle: "custom"
                            }
                        }, [t("system-choose-location", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "choose-location",
                    pagePath: "/choose-location"
                }
            }, {
                path: "/open-location",
                component: {
                    render: function(t) {
                        return t("Page", {
                            props: {
                                navigationStyle: "custom"
                            }
                        }, [t("system-open-location", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "open-location",
                    pagePath: "/open-location"
                }
            }],
            t.UniApp && new t.UniApp
        }
        ).call(this, i("c8ba"))
    },
    3243: function(t, n, i) {
        "use strict";
        var a = i("4ea4");
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.default = void 0;
        var r, e, o = a(i("ade3")), p = {
            components: {
                desc: "众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让你快速集成，开箱即用"
            },
            js: {
                desc: "众多的贴心小工具，是你开发过程中召之即来的利器，让你飞镖在手，百步穿杨"
            },
            template: {
                desc: "收集众多的常用页面和布局，减少开发者的重复工作，让你专注逻辑，事半功倍"
            },
            nav: {
                components: "组件",
                js: "工具",
                template: "模板"
            },
            common: {
                intro: "多平台快速开发的UI框架",
                title: "uView UI"
            },
            home: (r = {
                idoTitle: "自 由 協 議",
                nodeTitle: "自由協議 NODE",
                connectWallet: "連接錢包",
                enterIdo: "進入 IDO",
                enterNode: "進入 NODE",
                enter: "進入",
                supply: "供應量",
                left: "剩余",
                teams: "團隊人數",
                directs: "直推人數",
                coopOrg: "合作機構",
                fund: "生态基金",
                community: "社區",
                social: "社交",
                inviteAddr: "邀請地址",
                invalidAddr: "無效地址",
                bindInviter: "綁定邀請者",
                noticeList: ["這是一個光輝之作、登峰造極、閃耀世界和震撼人心的項目！", "祝你在復利之王模式中取得成功！", "鏈遊即將推出,敬請期待！"],
                pcTip: "請使用移動端打開！",
                bscTestTip: "請切換到幣安智能鏈測試網",
                bscMainTip: "請切換到幣安智能鏈主網",
                networkTip: "請切換到",
                network: "網絡",
                timeList: ["天", "小时", "分钟", "秒"],
                endCountdown: "结束倒计时",
                startCountdown: "开始倒计时",
                countdowns: ["开始倒计时", "结束倒计时", "下次减产倒计时"],
                over: "已结束",
                particapteRule: "参与规则",
                stakingData: "质押数据表",
                stakingToken: "质押代币",
                rewardToken: "奖励代币",
                rewardInterval: "奖励间隔",
                awardAmount: "奖励数量",
                stakingNotes: "质押须知",
                onlySupport: "仅支持",
                stakingTip1: "奖励额度按照当天质押占比计算，绝对公平公正；",
                stakingTip2: "随时可以提现，无任意金额限制；",
                stakingTip3: "质押时间从",
                stakingTip4: "质押算力 ：质押金额 = 1 ：1, 总算力 = 质押算力 + 推广算力",
                to: "到",
                close: "关闭",
                allStaked: "全网质押",
                youStaked: "你的质押",
                allHashrate: "全网算力",
                youHashrate: "你的总算力",
                dailyReward: "每日奖励",
                blockReward: "区块奖励",
                estimatedReward: "你的区块奖励",
                stakingRules: "质押规则",
                onlineMining: "在线挖矿",
                staking: "质 押",
                stkaingPlaceholder: "输入质押金额",
                currentStakingTip: "当前累计质押代币量为",
                currentStakingTip1: "你可以随时提现。",
                withdraw: "提现",
                myRewards: "我的挖矿奖励",
                rewardTip: "一旦质押完成，合约将根据算法自动计算挖矿奖励。",
                harvest: "收获",
                faqs: [{
                    question: "质押可以得到什么奖励 ?",
                    answer: "你可以获得 DOGA 代币奖励。",
                    state: !1
                }, {
                    question: "我可以提现已质押的代币吗 ?",
                    answer: "可以，质押的代币可以被解锁。",
                    state: !1
                }, {
                    question: "质押是否有数量限制 ?",
                    answer: "无限制。",
                    state: !1
                }, {
                    question: "质押是否有时间限制 ?",
                    answer: "There are no limits.",
                    state: !1
                }, {
                    question: "奖励额度和质押数量什么关系 ?",
                    answer: "质押更多的 DOGA 代币将获得更多的 DOGA 代币奖励，奖励数量根据质押占比计算得到。",
                    state: !1
                }],
                reward: "奖励",
                allReward: "全网奖励",
                stakeHashrate: "质押算力",
                referralTip: "邀請您的朋友加入质押，並獲得推广算力獎勵，",
                inviteHashrateTip: "推广算力 = 层级奖励系数n% * 受邀人质押算力。",
                stakeOrder: "质押订单",
                promotionOrder: "推广订单",
                stakeTime: "质押时间",
                status: "状态",
                endTime: "结束时间",
                stakeAmount: "质押金额",
                redeem: "赎回",
                inStake: "质押中",
                canRedeem: "可赎回"
            },
            (0,
            o.default)(r, "over", "已结束"),
            (0,
            o.default)(r, "accPromotionHashrate", "累计推广算力"),
            (0,
            o.default)(r, "noData", "暂无数据"),
            (0,
            o.default)(r, "max", "最大"),
            (0,
            o.default)(r, "days", "天"),
            (0,
            o.default)(r, "balance", "余额"),
            (0,
            o.default)(r, "lockTime", "锁定时长"),
            (0,
            o.default)(r, "hashrateReward", "算力奖励"),
            (0,
            o.default)(r, "getHashrate", "获得质押算力"),
            (0,
            o.default)(r, "stakeAmount", "质押金额"),
            (0,
            o.default)(r, "every", "每"),
            (0,
            o.default)(r, "ouputBlock", "产出一个区块"),
            (0,
            o.default)(r, "blockReward1", "区块奖励"),
            (0,
            o.default)(r, "stakeTips", "通过质押或推广获取算力，奖励根据算力占比计算得出。"),
            (0,
            o.default)(r, "currentHeight", "当前区块高度"),
            (0,
            o.default)(r, "accReward", "累计产出"),
            r),
            menu: {
                identity: "身份",
                node: "節點",
                farmer: "IDO",
                nothing: "無",
                active: "已綁定",
                inactive: "未綁定",
                account: "賬戶",
                inviteLink: "邀請鏈接",
                nodeActive: "激活節點",
                nodeClaim: "節點領取",
                list: ["PancakeSwap", "開源", "白皮書", "Dao"]
            },
            ido: (e = {
                active: "激活 IDO NFT",
                claim: "領取",
                approve: "授 權",
                buy: "兌換",
                price: "買入價格",
                currPrice: "當前價格",
                balance: "余額",
                recvToken: "兌換代幣",
                payAmount: "購買金額",
                preSale: "IDO 預 售",
                sold: "消費",
                currentPrice: "價格",
                boughtToken: "您的代幣",
                endTime: "結束時間",
                purchaseNote: "購買須知",
                note1: "每個錢包限購一次，限額從",
                to: "到",
                note2: "只支持",
                note3: "初始價格為",
                inviteNote: "邀請通知",
                canReceive: "可以收到",
                refereeReward: "受邀人購買金額的獎勵。",
                poolSupply: "池子供應",
                initialPrice: "預售價格",
                poolLeft: "池子剩下",
                poolSold: "池子已售",
                rules: "參與規則",
                myTokens: "我的可用代幣",
                myTokenTips: "您購買的代幣需要手動點擊領取。",
                preSale1: "預售",
                presaleTip: "每個錢包限購一次，限額從",
                soldOut: "售罄",
                ordered: "已經訂購",
                inputAmt: "輸入金額",
                minTip: "小於最小值",
                maxTip: "大於最大值",
                insufficient: "餘額不足"
            },
            (0,
            o.default)(e, "buy", "購買"),
            (0,
            o.default)(e, "referral", "推薦計劃"),
            (0,
            o.default)(e, "referralTip", "邀請您的朋友加入預售，並獲得獎勵"),
            (0,
            o.default)(e, "rule", "規則"),
            (0,
            o.default)(e, "inviteEarn", "邀請人收益"),
            (0,
            o.default)(e, "purchaseAmount", "購買金額"),
            (0,
            o.default)(e, "referralNote", "注意：一旦建立推薦關係（鏈接到推薦人的錢包地址），則不支持修改。"),
            (0,
            o.default)(e, "inviteLink", "邀請鏈接"),
            (0,
            o.default)(e, "copy", "複製"),
            (0,
            o.default)(e, "faqs", [{
                question: "在哪裡交易 TOKEN ?",
                answer: "你可以去 Dex 頂級交易所交換或交易。",
                state: !1
            }, {
                question: "有沒有購買限制 ?",
                answer: "每個錢包限購一次，限額從 50 到 100 USD.",
                state: !1
            }, {
                question: "支付USDT我可以獲得哪些代幣 ?",
                answer: "你可以得到預售池中的 TOKEN 代幣。",
                state: !1
            }, {
                question: "USDT 邀請獎勵是否實時到賬 ?",
                answer: "是的，馬上。",
                state: !1
            }]),
            e),
            node: {
                active: "激活 Node",
                claim: "領取",
                approve: "授權",
                buy: "兌換"
            },
            toast: {
                connect: "請先連接錢包",
                walletCopy: "錢包地址已復製",
                inviteCopy: "邀請鏈接已復製",
                soldOut: "已售罄",
                insuffi: "USDT余額不足",
                comingSoon: "敬请期待",
                activeRequire: "需要完成10個IDO才能激活",
                idoRequire: "210個IDO全部售罄\n才開啟激活",
                minTip: "購買額度最小 100U",
                maxTip: "購買額度最大 1000U",
                nullTip: "請輸入金額",
                claimTip: "請等待IDO結束",
                approveTip: "授權成功",
                swapTip: "兑换成功",
                tokenZeroTip: "您剩余代幣為 0",
                notStakingTime: "不在質押期間",
                stakedTip: "質押完成",
                stakedNullTip: "您質押代幣為 0",
                rewardNullTip: "您獎勵代幣為 0"
            },
            slogan: {
                node: "全球節點",
                dao: "Dao 社區",
                land: "復利協議 IDO",
                ecological: "生態布局路線",
                nodeList: ["21 節點", "享受分紅", "1000 U", "10萬枚代幣"],
                daoList: ["自治", "強共識", "資本雄厚", "人群龐大"],
                landList: ["210 IDOs", "巨額推廣獎勵", "500 U", "5萬枚代幣"],
                ecologicalList: ["鏈遊", "錢包", "去中心化金融", "去中心化交易所"],
                subscriptAmount: "認購金額",
                subscriptCost: "認購成本",
                idoSupply: "IDO額度",
                tokenRelease: "代幣發放",
                subAmountList: ["僅支持BSC", "100U-1000U"],
                subCostList: ["初始價 0.1U", "每天漲 0.003U"],
                idoSupList: ["500萬代幣募完", "限期30天"],
                tokenRelList: ["IDO結束全部釋放"],
                idoPlan: "IDO計劃",
                idoPlanList: ["500萬代幣募完", "限期30天", "募完即結束", "30天到即結束", "IDO結束全部釋放", "未募完則全部銷毀"],
                inviteMechanism: "邀请机制",
                inviteList: ["复制链接去邀请", "購買即可綁定", "壹代返 7%", "二代返 3%", "返傭實時到賬"]
            }
        };
        n.default = p
    },
    "3a23": function(t, n, i) {
        /*!
 * vue-i18n v8.20.0 
 * (c) 2020 kazuya kawaguchi
 * Released under the MIT License.
 */
        var a;
        i("99af"),
        i("a623"),
        i("4de4"),
        i("4160"),
        i("c975"),
        i("d81d"),
        i("13d5"),
        i("fb6a"),
        i("4e82"),
        i("a434"),
        i("a9e3"),
        i("3410"),
        i("b64b"),
        i("d3b7"),
        i("e25e"),
        i("4d63"),
        i("ac1f"),
        i("25f0"),
        i("466d"),
        i("5319"),
        i("1276"),
        i("498a"),
        i("159b"),
        a = function() {
            "use strict";
            var t = ["style", "currency", "currencyDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "localeMatcher", "formatMatcher", "unit"];
            function n(t, n) {
                "undefined" != typeof console && (console.warn("[vue-i18n] " + t),
                n && console.warn(n.stack))
            }
            var i = Array.isArray;
            function a(t) {
                return null !== t && "object" == typeof t
            }
            function r(t) {
                return "string" == typeof t
            }
            var e = Object.prototype.toString
              , o = "[object Object]";
            function p(t) {
                return e.call(t) === o
            }
            function u(t) {
                return null == t
            }
            function m() {
                for (var t = [], n = arguments.length; n--; )
                    t[n] = arguments[n];
                var i = null
                  , r = null;
                return 1 === t.length ? a(t[0]) || Array.isArray(t[0]) ? r = t[0] : "string" == typeof t[0] && (i = t[0]) : 2 === t.length && ("string" == typeof t[0] && (i = t[0]),
                (a(t[1]) || Array.isArray(t[1])) && (r = t[1])),
                {
                    locale: i,
                    params: r
                }
            }
            function d(t) {
                return JSON.parse(JSON.stringify(t))
            }
            function g(t, n) {
                return !!~t.indexOf(n)
            }
            var l = Object.prototype.hasOwnProperty;
            function s(t, n) {
                return l.call(t, n)
            }
            function c(t) {
                for (var n = arguments, i = Object(t), r = 1; r < arguments.length; r++) {
                    var e = n[r];
                    if (null != e) {
                        var o = void 0;
                        for (o in e)
                            s(e, o) && (a(e[o]) ? i[o] = c(i[o], e[o]) : i[o] = e[o])
                    }
                }
                return i
            }
            function f(t, n) {
                if (t === n)
                    return !0;
                var i = a(t)
                  , r = a(n);
                if (!i || !r)
                    return !i && !r && String(t) === String(n);
                try {
                    var e = Array.isArray(t)
                      , o = Array.isArray(n);
                    if (e && o)
                        return t.length === n.length && t.every((function(t, i) {
                            return f(t, n[i])
                        }
                        ));
                    if (e || o)
                        return !1;
                    var p = Object.keys(t)
                      , u = Object.keys(n);
                    return p.length === u.length && p.every((function(i) {
                        return f(t[i], n[i])
                    }
                    ))
                } catch (t) {
                    return !1
                }
            }
            var h = {
                beforeCreate: function() {
                    var t = this.$options;
                    if (t.i18n = t.i18n || (t.__i18n ? {} : null),
                    t.i18n) {
                        if (t.i18n instanceof nt) {
                            if (t.__i18n)
                                try {
                                    var n = {};
                                    t.__i18n.forEach((function(t) {
                                        n = c(n, JSON.parse(t))
                                    }
                                    )),
                                    Object.keys(n).forEach((function(i) {
                                        t.i18n.mergeLocaleMessage(i, n[i])
                                    }
                                    ))
                                } catch (t) {}
                            this._i18n = t.i18n,
                            this._i18nWatcher = this._i18n.watchI18nData()
                        } else if (p(t.i18n)) {
                            var i = this.$root && this.$root.$i18n && this.$root.$i18n instanceof nt ? this.$root.$i18n : null;
                            if (i && (t.i18n.root = this.$root,
                            t.i18n.formatter = i.formatter,
                            t.i18n.fallbackLocale = i.fallbackLocale,
                            t.i18n.formatFallbackMessages = i.formatFallbackMessages,
                            t.i18n.silentTranslationWarn = i.silentTranslationWarn,
                            t.i18n.silentFallbackWarn = i.silentFallbackWarn,
                            t.i18n.pluralizationRules = i.pluralizationRules,
                            t.i18n.preserveDirectiveContent = i.preserveDirectiveContent),
                            t.__i18n)
                                try {
                                    var a = {};
                                    t.__i18n.forEach((function(t) {
                                        a = c(a, JSON.parse(t))
                                    }
                                    )),
                                    t.i18n.messages = a
                                } catch (t) {}
                            var r = t.i18n.sharedMessages;
                            r && p(r) && (t.i18n.messages = c(t.i18n.messages, r)),
                            this._i18n = new nt(t.i18n),
                            this._i18nWatcher = this._i18n.watchI18nData(),
                            (void 0 === t.i18n.sync || t.i18n.sync) && (this._localeWatcher = this.$i18n.watchLocale()),
                            i && i.onComponentInstanceCreated(this._i18n)
                        }
                    } else
                        this.$root && this.$root.$i18n && this.$root.$i18n instanceof nt ? this._i18n = this.$root.$i18n : t.parent && t.parent.$i18n && t.parent.$i18n instanceof nt && (this._i18n = t.parent.$i18n)
                },
                beforeMount: function() {
                    var t = this.$options;
                    t.i18n = t.i18n || (t.__i18n ? {} : null),
                    t.i18n ? (t.i18n instanceof nt || p(t.i18n)) && (this._i18n.subscribeDataChanging(this),
                    this._subscribing = !0) : (this.$root && this.$root.$i18n && this.$root.$i18n instanceof nt || t.parent && t.parent.$i18n && t.parent.$i18n instanceof nt) && (this._i18n.subscribeDataChanging(this),
                    this._subscribing = !0)
                },
                beforeDestroy: function() {
                    if (this._i18n) {
                        var t = this;
                        this.$nextTick((function() {
                            t._subscribing && (t._i18n.unsubscribeDataChanging(t),
                            delete t._subscribing),
                            t._i18nWatcher && (t._i18nWatcher(),
                            t._i18n.destroyVM(),
                            delete t._i18nWatcher),
                            t._localeWatcher && (t._localeWatcher(),
                            delete t._localeWatcher)
                        }
                        ))
                    }
                }
            }
              , b = {
                name: "i18n",
                functional: !0,
                props: {
                    tag: {
                        type: [String, Boolean, Object],
                        default: "span"
                    },
                    path: {
                        type: String,
                        required: !0
                    },
                    locale: {
                        type: String
                    },
                    places: {
                        type: [Array, Object]
                    }
                },
                render: function(t, n) {
                    var i = n.data
                      , a = n.parent
                      , r = n.props
                      , e = n.slots
                      , o = a.$i18n;
                    if (o) {
                        var p = r.path
                          , u = r.locale
                          , m = r.places
                          , d = e()
                          , g = o.i(p, u, function(t) {
                            var n;
                            for (n in t)
                                if ("default" !== n)
                                    return !1;
                            return Boolean(n)
                        }(d) || m ? function(t, n) {
                            var i = n ? function(t) {
                                return Array.isArray(t) ? t.reduce(y, {}) : Object.assign({}, t)
                            }(n) : {};
                            if (!t)
                                return i;
                            var a = (t = t.filter((function(t) {
                                return t.tag || "" !== t.text.trim()
                            }
                            ))).every(_);
                            return t.reduce(a ? v : y, i)
                        }(d.default, m) : d)
                          , l = r.tag && !0 !== r.tag || !1 === r.tag ? r.tag : "span";
                        return l ? t(l, i, g) : g
                    }
                }
            };
            function v(t, n) {
                return n.data && n.data.attrs && n.data.attrs.place && (t[n.data.attrs.place] = n),
                t
            }
            function y(t, n, i) {
                return t[i] = n,
                t
            }
            function _(t) {
                return Boolean(t.data && t.data.attrs && t.data.attrs.place)
            }
            var w, k = {
                name: "i18n-n",
                functional: !0,
                props: {
                    tag: {
                        type: [String, Boolean, Object],
                        default: "span"
                    },
                    value: {
                        type: Number,
                        required: !0
                    },
                    format: {
                        type: [String, Object]
                    },
                    locale: {
                        type: String
                    }
                },
                render: function(n, i) {
                    var e = i.props
                      , o = i.parent
                      , p = i.data
                      , u = o.$i18n;
                    if (!u)
                        return null;
                    var m = null
                      , d = null;
                    r(e.format) ? m = e.format : a(e.format) && (e.format.key && (m = e.format.key),
                    d = Object.keys(e.format).reduce((function(n, i) {
                        var a;
                        return g(t, i) ? Object.assign({}, n, ((a = {})[i] = e.format[i],
                        a)) : n
                    }
                    ), null));
                    var l = e.locale || u.locale
                      , s = u._ntp(e.value, l, m, d)
                      , c = s.map((function(t, n) {
                        var i, a = p.scopedSlots && p.scopedSlots[t.type];
                        return a ? a(((i = {})[t.type] = t.value,
                        i.index = n,
                        i.parts = s,
                        i)) : t.value
                    }
                    ))
                      , f = e.tag && !0 !== e.tag || !1 === e.tag ? e.tag : "span";
                    return f ? n(f, {
                        attrs: p.attrs,
                        class: p.class,
                        staticClass: p.staticClass
                    }, c) : c
                }
            };
            function x(t, n, i) {
                S(t, i) && C(t, n, i)
            }
            function T(t, n, i, a) {
                if (S(t, i)) {
                    var r = i.context.$i18n;
                    (function(t, n) {
                        var i = n.context;
                        return t._locale === i.$i18n.locale
                    }
                    )(t, i) && f(n.value, n.oldValue) && f(t._localeMessage, r.getLocaleMessage(r.locale)) || C(t, n, i)
                }
            }
            function O(t, i, a, r) {
                if (a.context) {
                    var e = a.context.$i18n || {};
                    i.modifiers.preserve || e.preserveDirectiveContent || (t.textContent = ""),
                    t._vt = void 0,
                    delete t._vt,
                    t._locale = void 0,
                    delete t._locale,
                    t._localeMessage = void 0,
                    delete t._localeMessage
                } else
                    n("Vue instance does not exists in VNode context")
            }
            function S(t, i) {
                var a = i.context;
                return a ? !!a.$i18n || (n("VueI18n instance does not exists in Vue instance"),
                !1) : (n("Vue instance does not exists in VNode context"),
                !1)
            }
            function C(t, i, a) {
                var e, o, u = function(t) {
                    var n, i, a, e;
                    return r(t) ? n = t : p(t) && (n = t.path,
                    i = t.locale,
                    a = t.args,
                    e = t.choice),
                    {
                        path: n,
                        locale: i,
                        args: a,
                        choice: e
                    }
                }(i.value), m = u.path, d = u.locale, g = u.args, l = u.choice;
                if (m || d || g)
                    if (m) {
                        var s = a.context;
                        t._vt = t.textContent = null != l ? (e = s.$i18n).tc.apply(e, [m, l].concat(P(d, g))) : (o = s.$i18n).t.apply(o, [m].concat(P(d, g))),
                        t._locale = s.$i18n.locale,
                        t._localeMessage = s.$i18n.getLocaleMessage(s.$i18n.locale)
                    } else
                        n("`path` is required in v-t directive");
                else
                    n("value type not supported")
            }
            function P(t, n) {
                var i = [];
                return t && i.push(t),
                n && (Array.isArray(n) || p(n)) && i.push(n),
                i
            }
            function $(t) {
                $.installed = !0,
                (w = t).version && Number(w.version.split(".")[0]),
                function(t) {
                    t.prototype.hasOwnProperty("$i18n") || Object.defineProperty(t.prototype, "$i18n", {
                        get: function() {
                            return this._i18n
                        }
                    }),
                    t.prototype.$t = function(t) {
                        for (var n = [], i = arguments.length - 1; i-- > 0; )
                            n[i] = arguments[i + 1];
                        var a = this.$i18n;
                        return a._t.apply(a, [t, a.locale, a._getMessages(), this].concat(n))
                    }
                    ,
                    t.prototype.$tc = function(t, n) {
                        for (var i = [], a = arguments.length - 2; a-- > 0; )
                            i[a] = arguments[a + 2];
                        var r = this.$i18n;
                        return r._tc.apply(r, [t, r.locale, r._getMessages(), this, n].concat(i))
                    }
                    ,
                    t.prototype.$te = function(t, n) {
                        var i = this.$i18n;
                        return i._te(t, i.locale, i._getMessages(), n)
                    }
                    ,
                    t.prototype.$d = function(t) {
                        for (var n, i = [], a = arguments.length - 1; a-- > 0; )
                            i[a] = arguments[a + 1];
                        return (n = this.$i18n).d.apply(n, [t].concat(i))
                    }
                    ,
                    t.prototype.$n = function(t) {
                        for (var n, i = [], a = arguments.length - 1; a-- > 0; )
                            i[a] = arguments[a + 1];
                        return (n = this.$i18n).n.apply(n, [t].concat(i))
                    }
                }(w),
                w.mixin(h),
                w.directive("t", {
                    bind: x,
                    update: T,
                    unbind: O
                }),
                w.component(b.name, b),
                w.component(k.name, k),
                w.config.optionMergeStrategies.i18n = function(t, n) {
                    return void 0 === n ? t : n
                }
            }
            var D = function() {
                this._caches = Object.create(null)
            };
            D.prototype.interpolate = function(t, n) {
                if (!n)
                    return [t];
                var i = this._caches[t];
                return i || (i = function(t) {
                    for (var n = [], i = 0, a = ""; i < t.length; ) {
                        var r = t[i++];
                        if ("{" === r) {
                            a && n.push({
                                type: "text",
                                value: a
                            }),
                            a = "";
                            var e = "";
                            for (r = t[i++]; void 0 !== r && "}" !== r; )
                                e += r,
                                r = t[i++];
                            var o = "}" === r
                              , p = M.test(e) ? "list" : o && F.test(e) ? "named" : "unknown";
                            n.push({
                                value: e,
                                type: p
                            })
                        } else
                            "%" === r ? "{" !== t[i] && (a += r) : a += r
                    }
                    return a && n.push({
                        type: "text",
                        value: a
                    }),
                    n
                }(t),
                this._caches[t] = i),
                function(t, n) {
                    var i = []
                      , r = 0
                      , e = Array.isArray(n) ? "list" : a(n) ? "named" : "unknown";
                    if ("unknown" === e)
                        return i;
                    for (; r < t.length; ) {
                        var o = t[r];
                        switch (o.type) {
                        case "text":
                            i.push(o.value);
                            break;
                        case "list":
                            i.push(n[parseInt(o.value, 10)]);
                            break;
                        case "named":
                            "named" === e && i.push(n[o.value])
                        }
                        r++
                    }
                    return i
                }(i, n)
            }
            ;
            var M = /^(?:\d)+/
              , F = /^(?:\w)+/
              , A = 0
              , I = 1
              , j = 2
              , L = 3
              , R = 0
              , N = 4
              , z = 5
              , E = 6
              , q = 7
              , H = 8
              , W = [];
            W[R] = {
                ws: [R],
                ident: [3, A],
                "[": [N],
                eof: [q]
            },
            W[1] = {
                ws: [1],
                ".": [2],
                "[": [N],
                eof: [q]
            },
            W[2] = {
                ws: [2],
                ident: [3, A],
                0: [3, A],
                number: [3, A]
            },
            W[3] = {
                ident: [3, A],
                0: [3, A],
                number: [3, A],
                ws: [1, I],
                ".": [2, I],
                "[": [N, I],
                eof: [q, I]
            },
            W[N] = {
                "'": [z, A],
                '"': [E, A],
                "[": [N, j],
                "]": [1, L],
                eof: H,
                else: [N, A]
            },
            W[z] = {
                "'": [N, A],
                eof: H,
                else: [z, A]
            },
            W[E] = {
                '"': [N, A],
                eof: H,
                else: [E, A]
            };
            var U = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
            function B(t) {
                if (null == t)
                    return "eof";
                switch (t.charCodeAt(0)) {
                case 91:
                case 93:
                case 46:
                case 34:
                case 39:
                    return t;
                case 95:
                case 36:
                case 45:
                    return "ident";
                case 9:
                case 10:
                case 13:
                case 160:
                case 65279:
                case 8232:
                case 8233:
                    return "ws"
                }
                return "ident"
            }
            function V(t) {
                var n, i, a, r = t.trim();
                return ("0" !== t.charAt(0) || !isNaN(t)) && (a = r,
                U.test(a) ? (i = (n = r).charCodeAt(0)) !== n.charCodeAt(n.length - 1) || 34 !== i && 39 !== i ? n : n.slice(1, -1) : "*" + r)
            }
            var G = function() {
                this._cache = Object.create(null)
            };
            G.prototype.parsePath = function(t) {
                var n = this._cache[t];
                return n || (n = function(t) {
                    var n, i, a, r, e, o, p, u = [], m = -1, d = R, g = 0, l = [];
                    function s() {
                        var n = t[m + 1];
                        if (d === z && "'" === n || d === E && '"' === n)
                            return m++,
                            a = "\\" + n,
                            l[A](),
                            !0
                    }
                    for (l[I] = function() {
                        void 0 !== i && (u.push(i),
                        i = void 0)
                    }
                    ,
                    l[A] = function() {
                        void 0 === i ? i = a : i += a
                    }
                    ,
                    l[j] = function() {
                        l[A](),
                        g++
                    }
                    ,
                    l[L] = function() {
                        if (g > 0)
                            g--,
                            d = N,
                            l[A]();
                        else {
                            if (g = 0,
                            void 0 === i)
                                return !1;
                            if (!1 === (i = V(i)))
                                return !1;
                            l[I]()
                        }
                    }
                    ; null !== d; )
                        if ("\\" !== (n = t[++m]) || !s()) {
                            if (r = B(n),
                            (e = (p = W[d])[r] || p.else || H) === H)
                                return;
                            if (d = e[0],
                            (o = l[e[1]]) && (a = void 0 === (a = e[2]) ? n : a,
                            !1 === o()))
                                return;
                            if (d === q)
                                return u
                        }
                }(t)) && (this._cache[t] = n),
                n || []
            }
            ,
            G.prototype.getPathValue = function(t, n) {
                if (!a(t))
                    return null;
                var i = this.parsePath(n);
                if (0 === i.length)
                    return null;
                for (var r = i.length, e = t, o = 0; o < r; ) {
                    var p = e[i[o]];
                    if (void 0 === p)
                        return null;
                    e = p,
                    o++
                }
                return e
            }
            ;
            var Z, Y = /<\/?[\w\s="/.':;#-\/]+>/, J = /(?:@(?:\.[a-z]+)?:(?:[\w\-_|.]+|\([\w\-_|.]+\)))/g, K = /^@(?:\.([a-z]+))?:/, X = /[()]/g, Q = {
                upper: function(t) {
                    return t.toLocaleUpperCase()
                },
                lower: function(t) {
                    return t.toLocaleLowerCase()
                },
                capitalize: function(t) {
                    return "" + t.charAt(0).toLocaleUpperCase() + t.substr(1)
                }
            }, tt = new D, nt = function(t) {
                var n = this;
                void 0 === t && (t = {}),
                !w && "undefined" != typeof window && window.Vue && $(window.Vue);
                var i = t.locale || "en-US"
                  , a = !1 !== t.fallbackLocale && (t.fallbackLocale || "en-US")
                  , r = t.messages || {}
                  , e = t.dateTimeFormats || {}
                  , o = t.numberFormats || {};
                this._vm = null,
                this._formatter = t.formatter || tt,
                this._modifiers = t.modifiers || {},
                this._missing = t.missing || null,
                this._root = t.root || null,
                this._sync = void 0 === t.sync || !!t.sync,
                this._fallbackRoot = void 0 === t.fallbackRoot || !!t.fallbackRoot,
                this._formatFallbackMessages = void 0 !== t.formatFallbackMessages && !!t.formatFallbackMessages,
                this._silentTranslationWarn = void 0 !== t.silentTranslationWarn && t.silentTranslationWarn,
                this._silentFallbackWarn = void 0 !== t.silentFallbackWarn && !!t.silentFallbackWarn,
                this._dateTimeFormatters = {},
                this._numberFormatters = {},
                this._path = new G,
                this._dataListeners = [],
                this._componentInstanceCreatedListener = t.componentInstanceCreatedListener || null,
                this._preserveDirectiveContent = void 0 !== t.preserveDirectiveContent && !!t.preserveDirectiveContent,
                this.pluralizationRules = t.pluralizationRules || {},
                this._warnHtmlInMessage = t.warnHtmlInMessage || "off",
                this._postTranslation = t.postTranslation || null,
                this.getChoiceIndex = function(t, i) {
                    var a, r, e = Object.getPrototypeOf(n);
                    return e && e.getChoiceIndex ? e.getChoiceIndex.call(n, t, i) : n.locale in n.pluralizationRules ? n.pluralizationRules[n.locale].apply(n, [t, i]) : (a = t,
                    r = i,
                    a = Math.abs(a),
                    2 === r ? a ? a > 1 ? 1 : 0 : 1 : a ? Math.min(a, 2) : 0)
                }
                ,
                this._exist = function(t, i) {
                    return !(!t || !i) && (!u(n._path.getPathValue(t, i)) || !!t[i])
                }
                ,
                "warn" !== this._warnHtmlInMessage && "error" !== this._warnHtmlInMessage || Object.keys(r).forEach((function(t) {
                    n._checkLocaleMessage(t, n._warnHtmlInMessage, r[t])
                }
                )),
                this._initVM({
                    locale: i,
                    fallbackLocale: a,
                    messages: r,
                    dateTimeFormats: e,
                    numberFormats: o
                })
            }, it = {
                vm: {
                    configurable: !0
                },
                messages: {
                    configurable: !0
                },
                dateTimeFormats: {
                    configurable: !0
                },
                numberFormats: {
                    configurable: !0
                },
                availableLocales: {
                    configurable: !0
                },
                locale: {
                    configurable: !0
                },
                fallbackLocale: {
                    configurable: !0
                },
                formatFallbackMessages: {
                    configurable: !0
                },
                missing: {
                    configurable: !0
                },
                formatter: {
                    configurable: !0
                },
                silentTranslationWarn: {
                    configurable: !0
                },
                silentFallbackWarn: {
                    configurable: !0
                },
                preserveDirectiveContent: {
                    configurable: !0
                },
                warnHtmlInMessage: {
                    configurable: !0
                },
                postTranslation: {
                    configurable: !0
                }
            };
            return nt.prototype._checkLocaleMessage = function(t, i, a) {
                var e = function t(i, a, e, o) {
                    if (p(e))
                        Object.keys(e).forEach((function(n) {
                            var r = e[n];
                            p(r) ? (o.push(n),
                            o.push("."),
                            t(i, a, r, o),
                            o.pop(),
                            o.pop()) : (o.push(n),
                            t(i, a, r, o),
                            o.pop())
                        }
                        ));
                    else if (Array.isArray(e))
                        e.forEach((function(n, r) {
                            p(n) ? (o.push("[" + r + "]"),
                            o.push("."),
                            t(i, a, n, o),
                            o.pop(),
                            o.pop()) : (o.push("[" + r + "]"),
                            t(i, a, n, o),
                            o.pop())
                        }
                        ));
                    else if (r(e) && Y.test(e)) {
                        var u = "Detected HTML in message '" + e + "' of keypath '" + o.join("") + "' at '" + a + "'. Consider component interpolation with '<i18n>' to avoid XSS. See https://bit.ly/2ZqJzkp";
                        "warn" === i ? n(u) : "error" === i && function(t, n) {
                            "undefined" != typeof console && (console.error("[vue-i18n] " + t),
                            n && console.error(n.stack))
                        }(u)
                    }
                };
                e(i, t, a, [])
            }
            ,
            nt.prototype._initVM = function(t) {
                var n = w.config.silent;
                w.config.silent = !0,
                this._vm = new w({
                    data: t
                }),
                w.config.silent = n
            }
            ,
            nt.prototype.destroyVM = function() {
                this._vm.$destroy()
            }
            ,
            nt.prototype.subscribeDataChanging = function(t) {
                this._dataListeners.push(t)
            }
            ,
            nt.prototype.unsubscribeDataChanging = function(t) {
                !function(t, n) {
                    if (t.length) {
                        var i = t.indexOf(n);
                        i > -1 && t.splice(i, 1)
                    }
                }(this._dataListeners, t)
            }
            ,
            nt.prototype.watchI18nData = function() {
                var t = this;
                return this._vm.$watch("$data", (function() {
                    for (var n = t._dataListeners.length; n--; )
                        w.nextTick((function() {
                            t._dataListeners[n] && t._dataListeners[n].$forceUpdate()
                        }
                        ))
                }
                ), {
                    deep: !0
                })
            }
            ,
            nt.prototype.watchLocale = function() {
                if (!this._sync || !this._root)
                    return null;
                var t = this._vm;
                return this._root.$i18n.vm.$watch("locale", (function(n) {
                    t.$set(t, "locale", n),
                    t.$forceUpdate()
                }
                ), {
                    immediate: !0
                })
            }
            ,
            nt.prototype.onComponentInstanceCreated = function(t) {
                this._componentInstanceCreatedListener && this._componentInstanceCreatedListener(t, this)
            }
            ,
            it.vm.get = function() {
                return this._vm
            }
            ,
            it.messages.get = function() {
                return d(this._getMessages())
            }
            ,
            it.dateTimeFormats.get = function() {
                return d(this._getDateTimeFormats())
            }
            ,
            it.numberFormats.get = function() {
                return d(this._getNumberFormats())
            }
            ,
            it.availableLocales.get = function() {
                return Object.keys(this.messages).sort()
            }
            ,
            it.locale.get = function() {
                return this._vm.locale
            }
            ,
            it.locale.set = function(t) {
                this._vm.$set(this._vm, "locale", t)
            }
            ,
            it.fallbackLocale.get = function() {
                return this._vm.fallbackLocale
            }
            ,
            it.fallbackLocale.set = function(t) {
                this._localeChainCache = {},
                this._vm.$set(this._vm, "fallbackLocale", t)
            }
            ,
            it.formatFallbackMessages.get = function() {
                return this._formatFallbackMessages
            }
            ,
            it.formatFallbackMessages.set = function(t) {
                this._formatFallbackMessages = t
            }
            ,
            it.missing.get = function() {
                return this._missing
            }
            ,
            it.missing.set = function(t) {
                this._missing = t
            }
            ,
            it.formatter.get = function() {
                return this._formatter
            }
            ,
            it.formatter.set = function(t) {
                this._formatter = t
            }
            ,
            it.silentTranslationWarn.get = function() {
                return this._silentTranslationWarn
            }
            ,
            it.silentTranslationWarn.set = function(t) {
                this._silentTranslationWarn = t
            }
            ,
            it.silentFallbackWarn.get = function() {
                return this._silentFallbackWarn
            }
            ,
            it.silentFallbackWarn.set = function(t) {
                this._silentFallbackWarn = t
            }
            ,
            it.preserveDirectiveContent.get = function() {
                return this._preserveDirectiveContent
            }
            ,
            it.preserveDirectiveContent.set = function(t) {
                this._preserveDirectiveContent = t
            }
            ,
            it.warnHtmlInMessage.get = function() {
                return this._warnHtmlInMessage
            }
            ,
            it.warnHtmlInMessage.set = function(t) {
                var n = this
                  , i = this._warnHtmlInMessage;
                if (this._warnHtmlInMessage = t,
                i !== t && ("warn" === t || "error" === t)) {
                    var a = this._getMessages();
                    Object.keys(a).forEach((function(t) {
                        n._checkLocaleMessage(t, n._warnHtmlInMessage, a[t])
                    }
                    ))
                }
            }
            ,
            it.postTranslation.get = function() {
                return this._postTranslation
            }
            ,
            it.postTranslation.set = function(t) {
                this._postTranslation = t
            }
            ,
            nt.prototype._getMessages = function() {
                return this._vm.messages
            }
            ,
            nt.prototype._getDateTimeFormats = function() {
                return this._vm.dateTimeFormats
            }
            ,
            nt.prototype._getNumberFormats = function() {
                return this._vm.numberFormats
            }
            ,
            nt.prototype._warnDefault = function(t, n, i, a, e, o) {
                if (!u(i))
                    return i;
                if (this._missing) {
                    var p = this._missing.apply(null, [t, n, a, e]);
                    if (r(p))
                        return p
                }
                if (this._formatFallbackMessages) {
                    var d = m.apply(void 0, e);
                    return this._render(n, o, d.params, n)
                }
                return n
            }
            ,
            nt.prototype._isFallbackRoot = function(t) {
                return !t && !u(this._root) && this._fallbackRoot
            }
            ,
            nt.prototype._isSilentFallbackWarn = function(t) {
                return this._silentFallbackWarn instanceof RegExp ? this._silentFallbackWarn.test(t) : this._silentFallbackWarn
            }
            ,
            nt.prototype._isSilentFallback = function(t, n) {
                return this._isSilentFallbackWarn(n) && (this._isFallbackRoot() || t !== this.fallbackLocale)
            }
            ,
            nt.prototype._isSilentTranslationWarn = function(t) {
                return this._silentTranslationWarn instanceof RegExp ? this._silentTranslationWarn.test(t) : this._silentTranslationWarn
            }
            ,
            nt.prototype._interpolate = function(t, n, i, a, e, o, m) {
                if (!n)
                    return null;
                var d, g = this._path.getPathValue(n, i);
                if (Array.isArray(g) || p(g))
                    return g;
                if (u(g)) {
                    if (!p(n))
                        return null;
                    if (!r(d = n[i]))
                        return null
                } else {
                    if (!r(g))
                        return null;
                    d = g
                }
                return (d.indexOf("@:") >= 0 || d.indexOf("@.") >= 0) && (d = this._link(t, n, d, a, "raw", o, m)),
                this._render(d, e, o, i)
            }
            ,
            nt.prototype._link = function(t, n, i, a, r, e, o) {
                var p = i
                  , u = p.match(J);
                for (var m in u)
                    if (u.hasOwnProperty(m)) {
                        var d = u[m]
                          , l = d.match(K)
                          , s = l[0]
                          , c = l[1]
                          , f = d.replace(s, "").replace(X, "");
                        if (g(o, f))
                            return p;
                        o.push(f);
                        var h = this._interpolate(t, n, f, a, "raw" === r ? "string" : r, "raw" === r ? void 0 : e, o);
                        if (this._isFallbackRoot(h)) {
                            if (!this._root)
                                throw Error("unexpected error");
                            var b = this._root.$i18n;
                            h = b._translate(b._getMessages(), b.locale, b.fallbackLocale, f, a, r, e)
                        }
                        h = this._warnDefault(t, f, h, a, Array.isArray(e) ? e : [e], r),
                        this._modifiers.hasOwnProperty(c) ? h = this._modifiers[c](h) : Q.hasOwnProperty(c) && (h = Q[c](h)),
                        o.pop(),
                        p = h ? p.replace(d, h) : p
                    }
                return p
            }
            ,
            nt.prototype._render = function(t, n, i, a) {
                var e = this._formatter.interpolate(t, i, a);
                return e || (e = tt.interpolate(t, i, a)),
                "string" !== n || r(e) ? e : e.join("")
            }
            ,
            nt.prototype._appendItemToChain = function(t, n, i) {
                var a = !1;
                return g(t, n) || (a = !0,
                n && (a = "!" !== n[n.length - 1],
                n = n.replace(/!/g, ""),
                t.push(n),
                i && i[n] && (a = i[n]))),
                a
            }
            ,
            nt.prototype._appendLocaleToChain = function(t, n, i) {
                var a, r = n.split("-");
                do {
                    var e = r.join("-");
                    a = this._appendItemToChain(t, e, i),
                    r.splice(-1, 1)
                } while (r.length && !0 === a);
                return a
            }
            ,
            nt.prototype._appendBlockToChain = function(t, n, i) {
                for (var a = !0, e = 0; e < n.length && "boolean" == typeof a; e++) {
                    var o = n[e];
                    r(o) && (a = this._appendLocaleToChain(t, o, i))
                }
                return a
            }
            ,
            nt.prototype._getLocaleChain = function(t, n) {
                if ("" === t)
                    return [];
                this._localeChainCache || (this._localeChainCache = {});
                var e = this._localeChainCache[t];
                if (!e) {
                    n || (n = this.fallbackLocale),
                    e = [];
                    for (var o, p = [t]; i(p); )
                        p = this._appendBlockToChain(e, p, n);
                    (p = r(o = i(n) ? n : a(n) ? n.default ? n.default : null : n) ? [o] : o) && this._appendBlockToChain(e, p, null),
                    this._localeChainCache[t] = e
                }
                return e
            }
            ,
            nt.prototype._translate = function(t, n, i, a, r, e, o) {
                for (var p, m = this._getLocaleChain(n, i), d = 0; d < m.length; d++) {
                    var g = m[d];
                    if (!u(p = this._interpolate(g, t[g], a, r, e, o, [a])))
                        return p
                }
                return null
            }
            ,
            nt.prototype._t = function(t, n, i, a) {
                for (var r, e = [], o = arguments.length - 4; o-- > 0; )
                    e[o] = arguments[o + 4];
                if (!t)
                    return "";
                var p = m.apply(void 0, e)
                  , u = p.locale || n
                  , d = this._translate(i, u, this.fallbackLocale, t, a, "string", p.params);
                if (this._isFallbackRoot(d)) {
                    if (!this._root)
                        throw Error("unexpected error");
                    return (r = this._root).$t.apply(r, [t].concat(e))
                }
                return d = this._warnDefault(u, t, d, a, e, "string"),
                this._postTranslation && null != d && (d = this._postTranslation(d, t)),
                d
            }
            ,
            nt.prototype.t = function(t) {
                for (var n, i = [], a = arguments.length - 1; a-- > 0; )
                    i[a] = arguments[a + 1];
                return (n = this)._t.apply(n, [t, this.locale, this._getMessages(), null].concat(i))
            }
            ,
            nt.prototype._i = function(t, n, i, a, r) {
                var e = this._translate(i, n, this.fallbackLocale, t, a, "raw", r);
                if (this._isFallbackRoot(e)) {
                    if (!this._root)
                        throw Error("unexpected error");
                    return this._root.$i18n.i(t, n, r)
                }
                return this._warnDefault(n, t, e, a, [r], "raw")
            }
            ,
            nt.prototype.i = function(t, n, i) {
                return t ? (r(n) || (n = this.locale),
                this._i(t, n, this._getMessages(), null, i)) : ""
            }
            ,
            nt.prototype._tc = function(t, n, i, a, r) {
                for (var e, o = [], p = arguments.length - 5; p-- > 0; )
                    o[p] = arguments[p + 5];
                if (!t)
                    return "";
                void 0 === r && (r = 1);
                var u = {
                    count: r,
                    n: r
                }
                  , d = m.apply(void 0, o);
                return d.params = Object.assign(u, d.params),
                o = null === d.locale ? [d.params] : [d.locale, d.params],
                this.fetchChoice((e = this)._t.apply(e, [t, n, i, a].concat(o)), r)
            }
            ,
            nt.prototype.fetchChoice = function(t, n) {
                if (!t && !r(t))
                    return null;
                var i = t.split("|");
                return i[n = this.getChoiceIndex(n, i.length)] ? i[n].trim() : t
            }
            ,
            nt.prototype.tc = function(t, n) {
                for (var i, a = [], r = arguments.length - 2; r-- > 0; )
                    a[r] = arguments[r + 2];
                return (i = this)._tc.apply(i, [t, this.locale, this._getMessages(), null, n].concat(a))
            }
            ,
            nt.prototype._te = function(t, n, i) {
                for (var a = [], r = arguments.length - 3; r-- > 0; )
                    a[r] = arguments[r + 3];
                var e = m.apply(void 0, a).locale || n;
                return this._exist(i[e], t)
            }
            ,
            nt.prototype.te = function(t, n) {
                return this._te(t, this.locale, this._getMessages(), n)
            }
            ,
            nt.prototype.getLocaleMessage = function(t) {
                return d(this._vm.messages[t] || {})
            }
            ,
            nt.prototype.setLocaleMessage = function(t, n) {
                "warn" !== this._warnHtmlInMessage && "error" !== this._warnHtmlInMessage || this._checkLocaleMessage(t, this._warnHtmlInMessage, n),
                this._vm.$set(this._vm.messages, t, n)
            }
            ,
            nt.prototype.mergeLocaleMessage = function(t, n) {
                "warn" !== this._warnHtmlInMessage && "error" !== this._warnHtmlInMessage || this._checkLocaleMessage(t, this._warnHtmlInMessage, n),
                this._vm.$set(this._vm.messages, t, c({}, this._vm.messages[t] || {}, n))
            }
            ,
            nt.prototype.getDateTimeFormat = function(t) {
                return d(this._vm.dateTimeFormats[t] || {})
            }
            ,
            nt.prototype.setDateTimeFormat = function(t, n) {
                this._vm.$set(this._vm.dateTimeFormats, t, n),
                this._clearDateTimeFormat(t, n)
            }
            ,
            nt.prototype.mergeDateTimeFormat = function(t, n) {
                this._vm.$set(this._vm.dateTimeFormats, t, c(this._vm.dateTimeFormats[t] || {}, n)),
                this._clearDateTimeFormat(t, n)
            }
            ,
            nt.prototype._clearDateTimeFormat = function(t, n) {
                for (var i in n) {
                    var a = t + "__" + i;
                    this._dateTimeFormatters.hasOwnProperty(a) && delete this._dateTimeFormatters[a]
                }
            }
            ,
            nt.prototype._localizeDateTime = function(t, n, i, a, r) {
                for (var e = n, o = a[e], p = this._getLocaleChain(n, i), m = 0; m < p.length; m++) {
                    var d = p[m];
                    if (e = d,
                    !u(o = a[d]) && !u(o[r]))
                        break
                }
                if (u(o) || u(o[r]))
                    return null;
                var g = o[r]
                  , l = e + "__" + r
                  , s = this._dateTimeFormatters[l];
                return s || (s = this._dateTimeFormatters[l] = new Intl.DateTimeFormat(e,g)),
                s.format(t)
            }
            ,
            nt.prototype._d = function(t, n, i) {
                if (!i)
                    return new Intl.DateTimeFormat(n).format(t);
                var a = this._localizeDateTime(t, n, this.fallbackLocale, this._getDateTimeFormats(), i);
                if (this._isFallbackRoot(a)) {
                    if (!this._root)
                        throw Error("unexpected error");
                    return this._root.$i18n.d(t, i, n)
                }
                return a || ""
            }
            ,
            nt.prototype.d = function(t) {
                for (var n = [], i = arguments.length - 1; i-- > 0; )
                    n[i] = arguments[i + 1];
                var e = this.locale
                  , o = null;
                return 1 === n.length ? r(n[0]) ? o = n[0] : a(n[0]) && (n[0].locale && (e = n[0].locale),
                n[0].key && (o = n[0].key)) : 2 === n.length && (r(n[0]) && (o = n[0]),
                r(n[1]) && (e = n[1])),
                this._d(t, e, o)
            }
            ,
            nt.prototype.getNumberFormat = function(t) {
                return d(this._vm.numberFormats[t] || {})
            }
            ,
            nt.prototype.setNumberFormat = function(t, n) {
                this._vm.$set(this._vm.numberFormats, t, n),
                this._clearNumberFormat(t, n)
            }
            ,
            nt.prototype.mergeNumberFormat = function(t, n) {
                this._vm.$set(this._vm.numberFormats, t, c(this._vm.numberFormats[t] || {}, n)),
                this._clearNumberFormat(t, n)
            }
            ,
            nt.prototype._clearNumberFormat = function(t, n) {
                for (var i in n) {
                    var a = t + "__" + i;
                    this._numberFormatters.hasOwnProperty(a) && delete this._numberFormatters[a]
                }
            }
            ,
            nt.prototype._getNumberFormatter = function(t, n, i, a, r, e) {
                for (var o = n, p = a[o], m = this._getLocaleChain(n, i), d = 0; d < m.length; d++) {
                    var g = m[d];
                    if (o = g,
                    !u(p = a[g]) && !u(p[r]))
                        break
                }
                if (u(p) || u(p[r]))
                    return null;
                var l, s = p[r];
                if (e)
                    l = new Intl.NumberFormat(o,Object.assign({}, s, e));
                else {
                    var c = o + "__" + r;
                    (l = this._numberFormatters[c]) || (l = this._numberFormatters[c] = new Intl.NumberFormat(o,s))
                }
                return l
            }
            ,
            nt.prototype._n = function(t, n, i, a) {
                if (!nt.availabilities.numberFormat)
                    return "";
                if (!i)
                    return (a ? new Intl.NumberFormat(n,a) : new Intl.NumberFormat(n)).format(t);
                var r = this._getNumberFormatter(t, n, this.fallbackLocale, this._getNumberFormats(), i, a)
                  , e = r && r.format(t);
                if (this._isFallbackRoot(e)) {
                    if (!this._root)
                        throw Error("unexpected error");
                    return this._root.$i18n.n(t, Object.assign({}, {
                        key: i,
                        locale: n
                    }, a))
                }
                return e || ""
            }
            ,
            nt.prototype.n = function(n) {
                for (var i = [], e = arguments.length - 1; e-- > 0; )
                    i[e] = arguments[e + 1];
                var o = this.locale
                  , p = null
                  , u = null;
                return 1 === i.length ? r(i[0]) ? p = i[0] : a(i[0]) && (i[0].locale && (o = i[0].locale),
                i[0].key && (p = i[0].key),
                u = Object.keys(i[0]).reduce((function(n, a) {
                    var r;
                    return g(t, a) ? Object.assign({}, n, ((r = {})[a] = i[0][a],
                    r)) : n
                }
                ), null)) : 2 === i.length && (r(i[0]) && (p = i[0]),
                r(i[1]) && (o = i[1])),
                this._n(n, o, p, u)
            }
            ,
            nt.prototype._ntp = function(t, n, i, a) {
                if (!nt.availabilities.numberFormat)
                    return [];
                if (!i)
                    return (a ? new Intl.NumberFormat(n,a) : new Intl.NumberFormat(n)).formatToParts(t);
                var r = this._getNumberFormatter(t, n, this.fallbackLocale, this._getNumberFormats(), i, a)
                  , e = r && r.formatToParts(t);
                if (this._isFallbackRoot(e)) {
                    if (!this._root)
                        throw Error("unexpected error");
                    return this._root.$i18n._ntp(t, n, i, a)
                }
                return e || []
            }
            ,
            Object.defineProperties(nt.prototype, it),
            Object.defineProperty(nt, "availabilities", {
                get: function() {
                    if (!Z) {
                        var t = "undefined" != typeof Intl;
                        Z = {
                            dateTimeFormat: t && void 0 !== Intl.DateTimeFormat,
                            numberFormat: t && void 0 !== Intl.NumberFormat
                        }
                    }
                    return Z
                }
            }),
            nt.install = $,
            nt.version = "8.20.0",
            nt
        }
        ,
        t.exports = a()
    },
    "422e": function(t, n, i) {
        "use strict";
        var a = i("4ea4");
        i("99af"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.default = void 0;
        var r = a(i("6250"));
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (t = (0,
            r.default)(t),
            "object" !== typeof t || "object" !== typeof n)
                return !1;
            for (var i in n)
                n.hasOwnProperty(i) && (i in t ? "object" !== typeof t[i] || "object" !== typeof n[i] ? t[i] = n[i] : t[i].concat && n[i].concat ? t[i] = t[i].concat(n[i]) : t[i] = e(t[i], n[i]) : t[i] = n[i]);
            return t
        }
        var o = e;
        n.default = o
    },
    "42f8": function(t, n, i) {
        "use strict";
        var a = i("4ea4");
        i("99af"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.default = e;
        var r = a(i("1b93"));
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "auto"
              , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "rpx";
            return t = String(t),
            r.default.number(t) ? "".concat(t).concat(n) : t
        }
    },
    "473a": function(t, n, i) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.default = void 0;
        var a = function(t, n) {
            t.prototype.$u.http.setConfig({
                baseUrl: "https://api.youzixy.com"
            }),
            t.prototype.$u.http.interceptor.request = function(t) {
                return t.header.Token = "xxxxxx",
                t
            }
            ,
            t.prototype.$u.http.interceptor.response = function(t) {
                return 200 == t.code && t.data
            }
        }
          , r = {
            install: a
        };
        n.default = r
    },
    "483d": function(t, n, i) {
        "use strict";
        i.r(n);
        var a = i("9292")
          , r = i.n(a);
        for (var e in a)
            "default" !== e && function(t) {
                i.d(n, t, (function() {
                    return a[t]
                }
                ))
            }(e);
        n["default"] = r.a
    },
    "4e74": function(t, n, i) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.default = void 0;
        var a = {
            toast: 10090,
            noNetwork: 10080,
            popup: 10075,
            mask: 10070,
            navbar: 980,
            topTips: 975,
            sticky: 970,
            indexListSticky: 965
        };
        n.default = a
    },
    6250: function(t, n, i) {
        "use strict";
        function a(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }
        function r(t) {
            if ([null, void 0, NaN, !1].includes(t))
                return t;
            if ("object" !== typeof t && "function" !== typeof t)
                return t;
            var n = a(t) ? [] : {};
            for (var i in t)
                t.hasOwnProperty(i) && (n[i] = "object" === typeof t[i] ? r(t[i]) : t[i]);
            return n
        }
        i("caad"),
        i("d3b7"),
        i("25f0"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.default = void 0;
        var e = r;
        n.default = e
    },
    "663d": function(t, n, i) {
        "use strict";
        function a() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0
              , n = this.$parent;
            while (n) {
                if (!n.$options || n.$options.name === t)
                    return n;
                n = n.$parent
            }
            return !1
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.default = a
    },
    6752: function(t, n, i) {
        "use strict";
        var a;
        i.d(n, "b", (function() {
            return r
        }
        )),
        i.d(n, "c", (function() {
            return e
        }
        )),
        i.d(n, "a", (function() {
            return a
        }
        ));
        var r = function() {
            var t = this
              , n = t.$createElement
              , i = t._self._c || n;
            return i("App", {
                attrs: {
                    keepAliveInclude: t.keepAliveInclude
                }
            })
        }
          , e = []
    },
    "6b3a": function(t, n, i) {
        "use strict";
        function a() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            return t.sort((function() {
                return Math.random() - .5
            }
            ))
        }
        i("4e82"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.default = void 0;
        var r = a;
        n.default = r
    },
    "6f2c": function(t, n, i) {
        "use strict";
        function a(t, n) {
            if (t >= 0 && n > 0 && n >= t) {
                var i = n - t + 1;
                return Math.floor(Math.random() * i + t)
            }
            return 0
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.default = void 0;
        var r = a;
        n.default = r
    },
    "7bf2": function(t, n, i) {
        "use strict";
        var a = i("4ea4");
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.default = void 0;
        var r, e, o = a(i("ade3")), p = {
            components: {
                desc: "Numerous components cover the various requirements of the development process, and the components are rich in functions and compatible with multiple terminals. Let you integrate quickly, out of the box"
            },
            js: {
                desc: "Numerous intimate gadgets are a weapon that you can call upon during the development process, allowing you to dart in your hand and pierce the Yang with a hundred steps"
            },
            template: {
                desc: "Collection of many commonly used pages and layouts, reducing the repetitive work of developers, allowing you to focus on logic and get twice the result with half the effort"
            },
            nav: {
                components: "Components",
                js: "JS",
                template: "Template"
            },
            common: {
                intro: "UI framework for rapid development of multiple platforms",
                title: "uView UI"
            },
            home: (r = {
                idoTitle: "Free Protocol",
                nodeTitle: "Free Protocol NODE",
                connectWallet: "Connect Wallet",
                enterIdo: "ENTER IDO",
                enterNode: "ENTER NODE",
                enter: "Enter",
                supply: "Supply",
                left: "Left",
                teams: "Teams",
                directs: "Directs",
                coopOrg: "Cooperative Organization",
                fund: "Ecological Funds",
                community: "Community",
                social: "Socials",
                inviteAddr: "Invite address",
                invalidAddr: "Invalid address",
                bindInviter: "Bind inviter",
                noticeList: ["It is a glorious work,reaching the peak,harmonizing the world and shocking!", "I wish you success in the king of compound interest model", "Chain game will be launched soon.Please look forward to it!"],
                pcTip: "Open on mobile, Please",
                bscTestTip: "Please switch to Binance Smart Chain Testnet",
                bscMainTip: "Please switch to Binance Smart Chain Mainnet",
                networkTip: "Please switch to ",
                network: " Network",
                timeList: ["day", "H", "min", "s"],
                endCountdown: "end countdown",
                startCountdown: "start countdown",
                countdowns: ["start countdown", "end countdown", "next reduce production countdown"],
                over: "over",
                particapteRule: "Participation rules",
                stakingData: "Staking Data",
                stakingToken: "Staking Token",
                rewardToken: "Reward Token",
                rewardInterval: "Reward Interval",
                awardAmount: "Award Amount",
                stakingNotes: "Staking Notes",
                onlySupport: "Only supports",
                stakingTip1: "The amount of reward is calculated according to the staking ratio of the day, absolutely fair distribution.",
                stakingTip2: "Withdraw cash at any time, and there is no limit on the amount.",
                stakingTip3: "The staking time is from",
                stakingTip4: "Pledge computing power: pledge amount = 1:1, total computing power = pledge computing power + promotion computing power",
                to: "to",
                close: "Close",
                allStaked: "All staked",
                youStaked: "You staked",
                allHashrate: "All hashrate",
                youHashrate: "You hashrate",
                dailyReward: "Daily reward",
                blockReward: "Block reward",
                estimatedReward: "Your block reward",
                stakingRules: "Staking Rules",
                onlineMining: "Online Mining",
                staking: "Staking",
                stkaingPlaceholder: "Enter your amount",
                currentStakingTip: "The current cumulative staked is",
                currentStakingTip1: "which can be withdrawn at any time.",
                withdraw: "Withdraw",
                myRewards: "My mining rewards",
                rewardTip: "Rewards are automatically generate to your account once you staking.",
                harvest: "Harvest",
                faqs: [{
                    question: "What tokens can I get by staking ?",
                    answer: "You can earn DOGA tokens in the staking pool.",
                    state: !1
                }, {
                    question: "Can I withdraw my staked tokens ?",
                    answer: "Yes, staked token can be unstake.",
                    state: !1
                }, {
                    question: "How many tokens can I stake in the staking pool ?",
                    answer: "Any amount can be staked.",
                    state: !1
                }, {
                    question: "Are there any time limits for staking my token in the staking pool ?",
                    answer: "There are no limits.",
                    state: !1
                }, {
                    question: "How will the amount of rewards increase in the staking pool per day ?",
                    answer: "The more DOGA will be staked in the staking pool, the more DOGA will be distributed per day.",
                    state: !1
                }],
                reward: "Reward",
                allReward: "All rewards",
                stakeHashrate: "Stake Hashrate",
                referralTip: "Invite your friends to join the pledge, and get rewards for promoting computing power,",
                inviteHashrateTip: "The promotion computing power is equal to the level reward factor n% multiplied by the invitee’s pledge computing power",
                stakeOrder: "Stake Order",
                promotionOrder: "Promotion Order",
                stakeTime: "Stake time",
                status: "Status",
                endTime: "End time",
                stakeAmount: "Stake amount",
                redeem: "Redeem",
                inStake: "Staking",
                canRedeem: "Done"
            },
            (0,
            o.default)(r, "over", "Over"),
            (0,
            o.default)(r, "accPromotionHashrate", "Cumulative Reward Hahsrate"),
            (0,
            o.default)(r, "noData", "No Data"),
            (0,
            o.default)(r, "max", "Max"),
            (0,
            o.default)(r, "days", "Day"),
            (0,
            o.default)(r, "balance", "Balance"),
            (0,
            o.default)(r, "lockTime", "Lock time"),
            (0,
            o.default)(r, "hashrateReward", "Hashrate Reward"),
            (0,
            o.default)(r, "getHashrate", "Get hashrate"),
            (0,
            o.default)(r, "stakeAmount", "Stake Amount"),
            (0,
            o.default)(r, "every", "Every "),
            (0,
            o.default)(r, "ouputBlock", " produce a block"),
            (0,
            o.default)(r, "blockReward1", "block reward "),
            (0,
            o.default)(r, "stakeTips", "Obtain computing power through stake or referral, and rewards are calculated according to the proportion of hashrate."),
            (0,
            o.default)(r, "currentHeight", "Current block height is "),
            (0,
            o.default)(r, "accReward", "Cumulative rewards is "),
            r),
            menu: {
                identity: "Identity",
                node: "node",
                farmer: "IDO",
                nothing: "nothing",
                active: "Bound",
                inactive: "unbind",
                account: "Account",
                inviteLink: "Invite link",
                nodeActive: "Active Node",
                nodeClaim: "Node claim",
                list: ["PancakeSwap", "Open Source", "White Paper", "Dao"]
            },
            ido: (e = {
                active: "Active IDO NFT",
                claim: "Claim",
                approve: "Approve",
                buy: "Swap",
                price: "Price",
                currPrice: "Price",
                balance: "Balance",
                recvToken: "Obtain token",
                payAmount: "Pay amount",
                preSale: "IDO Pre-Sale",
                sold: "Sale",
                currentPrice: "Price",
                boughtToken: "Your token",
                endTime: "End Time",
                purchaseNote: "Purchase Notes",
                note1: "Each wallet is limited to one purchase, and the amount limit ranges from",
                to: "to",
                note2: "Only supports",
                note3: "The initial price is",
                inviteNote: "Invitation Notice",
                canReceive: "can receive a",
                refereeReward: "reward of the referee's purchase amount.",
                poolSupply: "Pool supply",
                initialPrice: "Initial price",
                poolLeft: "Pool left",
                poolSold: "Pool sold",
                rules: "Participation Rules",
                myTokens: "My Available Tokens",
                myTokenTips: "The tokens you purchased need to be manually clicked to claim.",
                preSale1: "Pre-Sale",
                presaleTip: "Each wallet is limited to one purchase, and the amount limit ranges from",
                soldOut: "Sold out",
                ordered: "Already ordered",
                inputAmt: "Enter an amount",
                minTip: "Less than minimum",
                maxTip: "Greater than maximum",
                insufficient: "Insufficient balance"
            },
            (0,
            o.default)(e, "buy", "Buy"),
            (0,
            o.default)(e, "referral", "Referral Program"),
            (0,
            o.default)(e, "referralTip", "Invite your friends to join Pre-sale, and earn rewards of"),
            (0,
            o.default)(e, "rule", "Rule"),
            (0,
            o.default)(e, "inviteEarn", "Inviter Earning"),
            (0,
            o.default)(e, "purchaseAmount", "purchase amount"),
            (0,
            o.default)(e, "referralNote", "Note: Once the Referral relationship is connected (linked to referrals' wallet address), modification is not supported."),
            (0,
            o.default)(e, "inviteLink", "Invite link"),
            (0,
            o.default)(e, "copy", "Copy"),
            (0,
            o.default)(e, "faqs", [{
                question: "Where to trade TOKEN ?",
                answer: "You can go to Dex to exchange or trade on top exchanges.",
                state: !1
            }, {
                question: "Is there any purchase limit ?",
                answer: "Each wallet is limited to one purchase, and the amount limit ranges from 50 to 100 USD.",
                state: !1
            }, {
                question: "What tokens can I get by paying USDT?",
                answer: "You can get TOKEN tokens in the Pre-sale Pool.",
                state: !1
            }, {
                question: "Does the USDT invitation reward arrive in real time ?",
                answer: "Yes, immediately.",
                state: !1
            }]),
            e),
            node: {
                active: "Active Node",
                claim: "Claim",
                approve: "Approve",
                buy: "Swap"
            },
            toast: {
                connect: "Please Connect Wallet",
                walletCopy: "Wallet Address Copied",
                inviteCopy: "Dapp invite link Copied",
                soldOut: "Sold out",
                insuffi: "Insufficient account",
                comingSoon: "Coming soon",
                activeRequire: "Required to complete ten ido invitations",
                idoRequire: "210 IDOs must be sold out before activation",
                minTip: "Minimum purchase amount is 100U",
                maxTip: "Maximum purchase amount is 1000U",
                nullTip: "Please enter amount",
                claimTip: "Please wait for the Ido end",
                approveTip: "Authorized",
                swapTip: "Swap success",
                tokenZeroTip: "Your token is 0",
                notStakingTime: "Not in the staking period",
                stakedTip: "Staking completed",
                stakedNullTip: "Your staked tokens are 0",
                rewardNullTip: "Your reward tokens are 0"
            },
            slogan: {
                node: "Global Node",
                dao: "Dao Community",
                land: "Fine Protocol Ido",
                ecological: "Ecological Composition Route",
                nodeList: ["21 nodes", "enjoy dividends", "1000 usdt", "100,000 token"],
                daoList: ["autonomy", "strong consensus", "well-capitalized", "huge crowd"],
                landList: ["210 idos", "promotion reward", "500 usdt", "50,000 token"],
                ecologicalList: ["include gameFi", "wallet", "defi", "dex"],
                subscriptAmount: "Pre-sale Amount",
                subscriptCost: "Pre-sale Cost",
                idoSupply: "IDO supply",
                tokenRelease: "Token release",
                subAmountList: ["Only supports BSC", "100U-1000U"],
                subCostList: ["Initial price 0.1U", "Up 0.003U per day"],
                idoSupList: ["5 million sold out", "30 days limit"],
                tokenRelList: ["Ido end all release"],
                idoPlan: "IDO Plan",
                idoPlanList: ["5 million sold out", "30 days limit", "Ends when sold out", "Ends after 30 days", "All release when Ido over", "Burn all remaining"],
                inviteMechanism: "Invitation Rule",
                inviteList: ["Copy link to invite", "Bind on purchase", "Generation bonus 7%", "Second-Gen bonus 3%", "Bonus sent immediately"]
            }
        };
        n.default = p
    },
    "7de1": function(t, n, i) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.default = void 0;
        var a = null;
        function r(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500
              , i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (null !== a && clearTimeout(a),
            i) {
                var r = !a;
                a = setTimeout((function() {
                    a = null
                }
                ), n),
                r && "function" === typeof t && t()
            } else
                a = setTimeout((function() {
                    "function" === typeof t && t()
                }
                ), n)
        }
        var e = r;
        n.default = e
    },
    8694: function(t, n, i) {
        "use strict";
        var a = i("4ea4");
        i("c975"),
        i("ac1f"),
        i("1276"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.default = void 0;
        var r = a(i("e143"))
          , e = a(i("26cb"));
        r.default.use(e.default);
        var o = {};
        try {
            o = uni.getStorageSync("lifeData")
        } catch (g) {}
        var p = ["vuex_user", "vuex_token", "vuex_promoter"]
          , u = function(t, n) {
            if (-1 != p.indexOf(t)) {
                var i = uni.getStorageSync("lifeData");
                i = i || {},
                i[t] = n,
                uni.setStorageSync("lifeData", i)
            }
        }
          , m = new e.default.Store({
            state: {
                vuex_user: o.vuex_user ? o.vuex_user : {
                    name: "明月"
                },
                vuex_token: o.vuex_token ? o.vuex_token : "",
                vuex_version: "1.0.1",
                vuex_demo: "绛紫",
                vuex_lang: "en",
                vuex_web: null,
                vuex_selectedAccount: "",
                vuex_nodeContract: null,
                vuex_usdtContract: null,
                vuex_promoter: o.vuex_promoter ? o.vuex_promoter : "0x000000000000000000000000000000000000dEaD",
                vuex_inviteContract: null,
                vuex_nodeIdoContract: null,
                vuex_idoContract: null,
                vuex_miningContract: null
            },
            mutations: {
                $uStore: function(t, n) {
                    var i = n.name.split(".")
                      , a = ""
                      , r = i.length;
                    if (r >= 2) {
                        for (var e = t[i[0]], o = 1; o < r - 1; o++)
                            e = e[i[o]];
                        e[i[r - 1]] = n.value,
                        a = i[0]
                    } else
                        t[n.name] = n.value,
                        a = n.name;
                    u(a, t[a])
                }
            }
        })
          , d = m;
        n.default = d
    },
    "87b9": function(t, n, i) {
        var a = i("24fb");
        n = a(!1),
        n.push([t.i, '@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-relative,\r\n.u-rela{position:relative}.u-absolute,\r\n.u-abso{position:absolute}uni-image{display:inline-block}uni-view,\r\nuni-text{box-sizing:border-box}.u-font-xs{font-size:%?22?%}.u-font-sm{font-size:%?26?%}.u-font-md{font-size:%?28?%}.u-font-lg{font-size:%?30?%}.u-font-xl{font-size:%?34?%}.u-flex{display:flex;flex-direction:row;align-items:center}.u-flex-wrap{flex-wrap:wrap}.u-flex-nowrap{flex-wrap:nowrap}.u-col-center{align-items:center}.u-col-top{align-items:flex-start}.u-col-bottom{align-items:flex-end}.u-row-center{justify-content:center}.u-row-left{justify-content:flex-start}.u-row-right{justify-content:flex-end}.u-row-between{justify-content:space-between}.u-row-around{justify-content:space-around}.u-text-left{text-align:left}.u-text-center{text-align:center}.u-text-right{text-align:right}.u-flex-col{display:flex;flex-direction:column}.u-flex-0{flex:0}.u-flex-1{flex:1}.u-flex-2{flex:2}.u-flex-3{flex:3}.u-flex-4{flex:4}.u-flex-5{flex:5}.u-flex-6{flex:6}.u-flex-7{flex:7}.u-flex-8{flex:8}.u-flex-9{flex:9}.u-flex-10{flex:10}.u-flex-11{flex:11}.u-flex-12{flex:12}.u-font-9{font-size:9px}.u-font-10{font-size:10px}.u-font-11{font-size:11px}.u-font-12{font-size:12px}.u-font-13{font-size:13px}.u-font-14{font-size:14px}.u-font-15{font-size:15px}.u-font-16{font-size:16px}.u-font-17{font-size:17px}.u-font-18{font-size:18px}.u-font-19{font-size:19px}.u-font-20{font-size:%?20?%}.u-font-21{font-size:%?21?%}.u-font-22{font-size:%?22?%}.u-font-23{font-size:%?23?%}.u-font-24{font-size:%?24?%}.u-font-25{font-size:%?25?%}.u-font-26{font-size:%?26?%}.u-font-27{font-size:%?27?%}.u-font-28{font-size:%?28?%}.u-font-29{font-size:%?29?%}.u-font-30{font-size:%?30?%}.u-font-31{font-size:%?31?%}.u-font-32{font-size:%?32?%}.u-font-33{font-size:%?33?%}.u-font-34{font-size:%?34?%}.u-font-35{font-size:%?35?%}.u-font-36{font-size:%?36?%}.u-font-37{font-size:%?37?%}.u-font-38{font-size:%?38?%}.u-font-39{font-size:%?39?%}.u-font-40{font-size:%?40?%}.u-margin-0, .u-m-0{margin:%?0?%!important}.u-padding-0, .u-p-0{padding:%?0?%!important}.u-m-l-0{margin-left:%?0?%!important}.u-p-l-0{padding-left:%?0?%!important}.u-margin-left-0{margin-left:%?0?%!important}.u-padding-left-0{padding-left:%?0?%!important}.u-m-t-0{margin-top:%?0?%!important}.u-p-t-0{padding-top:%?0?%!important}.u-margin-top-0{margin-top:%?0?%!important}.u-padding-top-0{padding-top:%?0?%!important}.u-m-r-0{margin-right:%?0?%!important}.u-p-r-0{padding-right:%?0?%!important}.u-margin-right-0{margin-right:%?0?%!important}.u-padding-right-0{padding-right:%?0?%!important}.u-m-b-0{margin-bottom:%?0?%!important}.u-p-b-0{padding-bottom:%?0?%!important}.u-margin-bottom-0{margin-bottom:%?0?%!important}.u-padding-bottom-0{padding-bottom:%?0?%!important}.u-margin-2, .u-m-2{margin:%?2?%!important}.u-padding-2, .u-p-2{padding:%?2?%!important}.u-m-l-2{margin-left:%?2?%!important}.u-p-l-2{padding-left:%?2?%!important}.u-margin-left-2{margin-left:%?2?%!important}.u-padding-left-2{padding-left:%?2?%!important}.u-m-t-2{margin-top:%?2?%!important}.u-p-t-2{padding-top:%?2?%!important}.u-margin-top-2{margin-top:%?2?%!important}.u-padding-top-2{padding-top:%?2?%!important}.u-m-r-2{margin-right:%?2?%!important}.u-p-r-2{padding-right:%?2?%!important}.u-margin-right-2{margin-right:%?2?%!important}.u-padding-right-2{padding-right:%?2?%!important}.u-m-b-2{margin-bottom:%?2?%!important}.u-p-b-2{padding-bottom:%?2?%!important}.u-margin-bottom-2{margin-bottom:%?2?%!important}.u-padding-bottom-2{padding-bottom:%?2?%!important}.u-margin-4, .u-m-4{margin:%?4?%!important}.u-padding-4, .u-p-4{padding:%?4?%!important}.u-m-l-4{margin-left:%?4?%!important}.u-p-l-4{padding-left:%?4?%!important}.u-margin-left-4{margin-left:%?4?%!important}.u-padding-left-4{padding-left:%?4?%!important}.u-m-t-4{margin-top:%?4?%!important}.u-p-t-4{padding-top:%?4?%!important}.u-margin-top-4{margin-top:%?4?%!important}.u-padding-top-4{padding-top:%?4?%!important}.u-m-r-4{margin-right:%?4?%!important}.u-p-r-4{padding-right:%?4?%!important}.u-margin-right-4{margin-right:%?4?%!important}.u-padding-right-4{padding-right:%?4?%!important}.u-m-b-4{margin-bottom:%?4?%!important}.u-p-b-4{padding-bottom:%?4?%!important}.u-margin-bottom-4{margin-bottom:%?4?%!important}.u-padding-bottom-4{padding-bottom:%?4?%!important}.u-margin-5, .u-m-5{margin:%?5?%!important}.u-padding-5, .u-p-5{padding:%?5?%!important}.u-m-l-5{margin-left:%?5?%!important}.u-p-l-5{padding-left:%?5?%!important}.u-margin-left-5{margin-left:%?5?%!important}.u-padding-left-5{padding-left:%?5?%!important}.u-m-t-5{margin-top:%?5?%!important}.u-p-t-5{padding-top:%?5?%!important}.u-margin-top-5{margin-top:%?5?%!important}.u-padding-top-5{padding-top:%?5?%!important}.u-m-r-5{margin-right:%?5?%!important}.u-p-r-5{padding-right:%?5?%!important}.u-margin-right-5{margin-right:%?5?%!important}.u-padding-right-5{padding-right:%?5?%!important}.u-m-b-5{margin-bottom:%?5?%!important}.u-p-b-5{padding-bottom:%?5?%!important}.u-margin-bottom-5{margin-bottom:%?5?%!important}.u-padding-bottom-5{padding-bottom:%?5?%!important}.u-margin-6, .u-m-6{margin:%?6?%!important}.u-padding-6, .u-p-6{padding:%?6?%!important}.u-m-l-6{margin-left:%?6?%!important}.u-p-l-6{padding-left:%?6?%!important}.u-margin-left-6{margin-left:%?6?%!important}.u-padding-left-6{padding-left:%?6?%!important}.u-m-t-6{margin-top:%?6?%!important}.u-p-t-6{padding-top:%?6?%!important}.u-margin-top-6{margin-top:%?6?%!important}.u-padding-top-6{padding-top:%?6?%!important}.u-m-r-6{margin-right:%?6?%!important}.u-p-r-6{padding-right:%?6?%!important}.u-margin-right-6{margin-right:%?6?%!important}.u-padding-right-6{padding-right:%?6?%!important}.u-m-b-6{margin-bottom:%?6?%!important}.u-p-b-6{padding-bottom:%?6?%!important}.u-margin-bottom-6{margin-bottom:%?6?%!important}.u-padding-bottom-6{padding-bottom:%?6?%!important}.u-margin-8, .u-m-8{margin:%?8?%!important}.u-padding-8, .u-p-8{padding:%?8?%!important}.u-m-l-8{margin-left:%?8?%!important}.u-p-l-8{padding-left:%?8?%!important}.u-margin-left-8{margin-left:%?8?%!important}.u-padding-left-8{padding-left:%?8?%!important}.u-m-t-8{margin-top:%?8?%!important}.u-p-t-8{padding-top:%?8?%!important}.u-margin-top-8{margin-top:%?8?%!important}.u-padding-top-8{padding-top:%?8?%!important}.u-m-r-8{margin-right:%?8?%!important}.u-p-r-8{padding-right:%?8?%!important}.u-margin-right-8{margin-right:%?8?%!important}.u-padding-right-8{padding-right:%?8?%!important}.u-m-b-8{margin-bottom:%?8?%!important}.u-p-b-8{padding-bottom:%?8?%!important}.u-margin-bottom-8{margin-bottom:%?8?%!important}.u-padding-bottom-8{padding-bottom:%?8?%!important}.u-margin-10, .u-m-10{margin:%?10?%!important}.u-padding-10, .u-p-10{padding:%?10?%!important}.u-m-l-10{margin-left:%?10?%!important}.u-p-l-10{padding-left:%?10?%!important}.u-margin-left-10{margin-left:%?10?%!important}.u-padding-left-10{padding-left:%?10?%!important}.u-m-t-10{margin-top:%?10?%!important}.u-p-t-10{padding-top:%?10?%!important}.u-margin-top-10{margin-top:%?10?%!important}.u-padding-top-10{padding-top:%?10?%!important}.u-m-r-10{margin-right:%?10?%!important}.u-p-r-10{padding-right:%?10?%!important}.u-margin-right-10{margin-right:%?10?%!important}.u-padding-right-10{padding-right:%?10?%!important}.u-m-b-10{margin-bottom:%?10?%!important}.u-p-b-10{padding-bottom:%?10?%!important}.u-margin-bottom-10{margin-bottom:%?10?%!important}.u-padding-bottom-10{padding-bottom:%?10?%!important}.u-margin-12, .u-m-12{margin:%?12?%!important}.u-padding-12, .u-p-12{padding:%?12?%!important}.u-m-l-12{margin-left:%?12?%!important}.u-p-l-12{padding-left:%?12?%!important}.u-margin-left-12{margin-left:%?12?%!important}.u-padding-left-12{padding-left:%?12?%!important}.u-m-t-12{margin-top:%?12?%!important}.u-p-t-12{padding-top:%?12?%!important}.u-margin-top-12{margin-top:%?12?%!important}.u-padding-top-12{padding-top:%?12?%!important}.u-m-r-12{margin-right:%?12?%!important}.u-p-r-12{padding-right:%?12?%!important}.u-margin-right-12{margin-right:%?12?%!important}.u-padding-right-12{padding-right:%?12?%!important}.u-m-b-12{margin-bottom:%?12?%!important}.u-p-b-12{padding-bottom:%?12?%!important}.u-margin-bottom-12{margin-bottom:%?12?%!important}.u-padding-bottom-12{padding-bottom:%?12?%!important}.u-margin-14, .u-m-14{margin:%?14?%!important}.u-padding-14, .u-p-14{padding:%?14?%!important}.u-m-l-14{margin-left:%?14?%!important}.u-p-l-14{padding-left:%?14?%!important}.u-margin-left-14{margin-left:%?14?%!important}.u-padding-left-14{padding-left:%?14?%!important}.u-m-t-14{margin-top:%?14?%!important}.u-p-t-14{padding-top:%?14?%!important}.u-margin-top-14{margin-top:%?14?%!important}.u-padding-top-14{padding-top:%?14?%!important}.u-m-r-14{margin-right:%?14?%!important}.u-p-r-14{padding-right:%?14?%!important}.u-margin-right-14{margin-right:%?14?%!important}.u-padding-right-14{padding-right:%?14?%!important}.u-m-b-14{margin-bottom:%?14?%!important}.u-p-b-14{padding-bottom:%?14?%!important}.u-margin-bottom-14{margin-bottom:%?14?%!important}.u-padding-bottom-14{padding-bottom:%?14?%!important}.u-margin-15, .u-m-15{margin:%?15?%!important}.u-padding-15, .u-p-15{padding:%?15?%!important}.u-m-l-15{margin-left:%?15?%!important}.u-p-l-15{padding-left:%?15?%!important}.u-margin-left-15{margin-left:%?15?%!important}.u-padding-left-15{padding-left:%?15?%!important}.u-m-t-15{margin-top:%?15?%!important}.u-p-t-15{padding-top:%?15?%!important}.u-margin-top-15{margin-top:%?15?%!important}.u-padding-top-15{padding-top:%?15?%!important}.u-m-r-15{margin-right:%?15?%!important}.u-p-r-15{padding-right:%?15?%!important}.u-margin-right-15{margin-right:%?15?%!important}.u-padding-right-15{padding-right:%?15?%!important}.u-m-b-15{margin-bottom:%?15?%!important}.u-p-b-15{padding-bottom:%?15?%!important}.u-margin-bottom-15{margin-bottom:%?15?%!important}.u-padding-bottom-15{padding-bottom:%?15?%!important}.u-margin-16, .u-m-16{margin:%?16?%!important}.u-padding-16, .u-p-16{padding:%?16?%!important}.u-m-l-16{margin-left:%?16?%!important}.u-p-l-16{padding-left:%?16?%!important}.u-margin-left-16{margin-left:%?16?%!important}.u-padding-left-16{padding-left:%?16?%!important}.u-m-t-16{margin-top:%?16?%!important}.u-p-t-16{padding-top:%?16?%!important}.u-margin-top-16{margin-top:%?16?%!important}.u-padding-top-16{padding-top:%?16?%!important}.u-m-r-16{margin-right:%?16?%!important}.u-p-r-16{padding-right:%?16?%!important}.u-margin-right-16{margin-right:%?16?%!important}.u-padding-right-16{padding-right:%?16?%!important}.u-m-b-16{margin-bottom:%?16?%!important}.u-p-b-16{padding-bottom:%?16?%!important}.u-margin-bottom-16{margin-bottom:%?16?%!important}.u-padding-bottom-16{padding-bottom:%?16?%!important}.u-margin-18, .u-m-18{margin:%?18?%!important}.u-padding-18, .u-p-18{padding:%?18?%!important}.u-m-l-18{margin-left:%?18?%!important}.u-p-l-18{padding-left:%?18?%!important}.u-margin-left-18{margin-left:%?18?%!important}.u-padding-left-18{padding-left:%?18?%!important}.u-m-t-18{margin-top:%?18?%!important}.u-p-t-18{padding-top:%?18?%!important}.u-margin-top-18{margin-top:%?18?%!important}.u-padding-top-18{padding-top:%?18?%!important}.u-m-r-18{margin-right:%?18?%!important}.u-p-r-18{padding-right:%?18?%!important}.u-margin-right-18{margin-right:%?18?%!important}.u-padding-right-18{padding-right:%?18?%!important}.u-m-b-18{margin-bottom:%?18?%!important}.u-p-b-18{padding-bottom:%?18?%!important}.u-margin-bottom-18{margin-bottom:%?18?%!important}.u-padding-bottom-18{padding-bottom:%?18?%!important}.u-margin-20, .u-m-20{margin:%?20?%!important}.u-padding-20, .u-p-20{padding:%?20?%!important}.u-m-l-20{margin-left:%?20?%!important}.u-p-l-20{padding-left:%?20?%!important}.u-margin-left-20{margin-left:%?20?%!important}.u-padding-left-20{padding-left:%?20?%!important}.u-m-t-20{margin-top:%?20?%!important}.u-p-t-20{padding-top:%?20?%!important}.u-margin-top-20{margin-top:%?20?%!important}.u-padding-top-20{padding-top:%?20?%!important}.u-m-r-20{margin-right:%?20?%!important}.u-p-r-20{padding-right:%?20?%!important}.u-margin-right-20{margin-right:%?20?%!important}.u-padding-right-20{padding-right:%?20?%!important}.u-m-b-20{margin-bottom:%?20?%!important}.u-p-b-20{padding-bottom:%?20?%!important}.u-margin-bottom-20{margin-bottom:%?20?%!important}.u-padding-bottom-20{padding-bottom:%?20?%!important}.u-margin-22, .u-m-22{margin:%?22?%!important}.u-padding-22, .u-p-22{padding:%?22?%!important}.u-m-l-22{margin-left:%?22?%!important}.u-p-l-22{padding-left:%?22?%!important}.u-margin-left-22{margin-left:%?22?%!important}.u-padding-left-22{padding-left:%?22?%!important}.u-m-t-22{margin-top:%?22?%!important}.u-p-t-22{padding-top:%?22?%!important}.u-margin-top-22{margin-top:%?22?%!important}.u-padding-top-22{padding-top:%?22?%!important}.u-m-r-22{margin-right:%?22?%!important}.u-p-r-22{padding-right:%?22?%!important}.u-margin-right-22{margin-right:%?22?%!important}.u-padding-right-22{padding-right:%?22?%!important}.u-m-b-22{margin-bottom:%?22?%!important}.u-p-b-22{padding-bottom:%?22?%!important}.u-margin-bottom-22{margin-bottom:%?22?%!important}.u-padding-bottom-22{padding-bottom:%?22?%!important}.u-margin-24, .u-m-24{margin:%?24?%!important}.u-padding-24, .u-p-24{padding:%?24?%!important}.u-m-l-24{margin-left:%?24?%!important}.u-p-l-24{padding-left:%?24?%!important}.u-margin-left-24{margin-left:%?24?%!important}.u-padding-left-24{padding-left:%?24?%!important}.u-m-t-24{margin-top:%?24?%!important}.u-p-t-24{padding-top:%?24?%!important}.u-margin-top-24{margin-top:%?24?%!important}.u-padding-top-24{padding-top:%?24?%!important}.u-m-r-24{margin-right:%?24?%!important}.u-p-r-24{padding-right:%?24?%!important}.u-margin-right-24{margin-right:%?24?%!important}.u-padding-right-24{padding-right:%?24?%!important}.u-m-b-24{margin-bottom:%?24?%!important}.u-p-b-24{padding-bottom:%?24?%!important}.u-margin-bottom-24{margin-bottom:%?24?%!important}.u-padding-bottom-24{padding-bottom:%?24?%!important}.u-margin-25, .u-m-25{margin:%?25?%!important}.u-padding-25, .u-p-25{padding:%?25?%!important}.u-m-l-25{margin-left:%?25?%!important}.u-p-l-25{padding-left:%?25?%!important}.u-margin-left-25{margin-left:%?25?%!important}.u-padding-left-25{padding-left:%?25?%!important}.u-m-t-25{margin-top:%?25?%!important}.u-p-t-25{padding-top:%?25?%!important}.u-margin-top-25{margin-top:%?25?%!important}.u-padding-top-25{padding-top:%?25?%!important}.u-m-r-25{margin-right:%?25?%!important}.u-p-r-25{padding-right:%?25?%!important}.u-margin-right-25{margin-right:%?25?%!important}.u-padding-right-25{padding-right:%?25?%!important}.u-m-b-25{margin-bottom:%?25?%!important}.u-p-b-25{padding-bottom:%?25?%!important}.u-margin-bottom-25{margin-bottom:%?25?%!important}.u-padding-bottom-25{padding-bottom:%?25?%!important}.u-margin-26, .u-m-26{margin:%?26?%!important}.u-padding-26, .u-p-26{padding:%?26?%!important}.u-m-l-26{margin-left:%?26?%!important}.u-p-l-26{padding-left:%?26?%!important}.u-margin-left-26{margin-left:%?26?%!important}.u-padding-left-26{padding-left:%?26?%!important}.u-m-t-26{margin-top:%?26?%!important}.u-p-t-26{padding-top:%?26?%!important}.u-margin-top-26{margin-top:%?26?%!important}.u-padding-top-26{padding-top:%?26?%!important}.u-m-r-26{margin-right:%?26?%!important}.u-p-r-26{padding-right:%?26?%!important}.u-margin-right-26{margin-right:%?26?%!important}.u-padding-right-26{padding-right:%?26?%!important}.u-m-b-26{margin-bottom:%?26?%!important}.u-p-b-26{padding-bottom:%?26?%!important}.u-margin-bottom-26{margin-bottom:%?26?%!important}.u-padding-bottom-26{padding-bottom:%?26?%!important}.u-margin-28, .u-m-28{margin:%?28?%!important}.u-padding-28, .u-p-28{padding:%?28?%!important}.u-m-l-28{margin-left:%?28?%!important}.u-p-l-28{padding-left:%?28?%!important}.u-margin-left-28{margin-left:%?28?%!important}.u-padding-left-28{padding-left:%?28?%!important}.u-m-t-28{margin-top:%?28?%!important}.u-p-t-28{padding-top:%?28?%!important}.u-margin-top-28{margin-top:%?28?%!important}.u-padding-top-28{padding-top:%?28?%!important}.u-m-r-28{margin-right:%?28?%!important}.u-p-r-28{padding-right:%?28?%!important}.u-margin-right-28{margin-right:%?28?%!important}.u-padding-right-28{padding-right:%?28?%!important}.u-m-b-28{margin-bottom:%?28?%!important}.u-p-b-28{padding-bottom:%?28?%!important}.u-margin-bottom-28{margin-bottom:%?28?%!important}.u-padding-bottom-28{padding-bottom:%?28?%!important}.u-margin-30, .u-m-30{margin:%?30?%!important}.u-padding-30, .u-p-30{padding:%?30?%!important}.u-m-l-30{margin-left:%?30?%!important}.u-p-l-30{padding-left:%?30?%!important}.u-margin-left-30{margin-left:%?30?%!important}.u-padding-left-30{padding-left:%?30?%!important}.u-m-t-30{margin-top:%?30?%!important}.u-p-t-30{padding-top:%?30?%!important}.u-margin-top-30{margin-top:%?30?%!important}.u-padding-top-30{padding-top:%?30?%!important}.u-m-r-30{margin-right:%?30?%!important}.u-p-r-30{padding-right:%?30?%!important}.u-margin-right-30{margin-right:%?30?%!important}.u-padding-right-30{padding-right:%?30?%!important}.u-m-b-30{margin-bottom:%?30?%!important}.u-p-b-30{padding-bottom:%?30?%!important}.u-margin-bottom-30{margin-bottom:%?30?%!important}.u-padding-bottom-30{padding-bottom:%?30?%!important}.u-margin-32, .u-m-32{margin:%?32?%!important}.u-padding-32, .u-p-32{padding:%?32?%!important}.u-m-l-32{margin-left:%?32?%!important}.u-p-l-32{padding-left:%?32?%!important}.u-margin-left-32{margin-left:%?32?%!important}.u-padding-left-32{padding-left:%?32?%!important}.u-m-t-32{margin-top:%?32?%!important}.u-p-t-32{padding-top:%?32?%!important}.u-margin-top-32{margin-top:%?32?%!important}.u-padding-top-32{padding-top:%?32?%!important}.u-m-r-32{margin-right:%?32?%!important}.u-p-r-32{padding-right:%?32?%!important}.u-margin-right-32{margin-right:%?32?%!important}.u-padding-right-32{padding-right:%?32?%!important}.u-m-b-32{margin-bottom:%?32?%!important}.u-p-b-32{padding-bottom:%?32?%!important}.u-margin-bottom-32{margin-bottom:%?32?%!important}.u-padding-bottom-32{padding-bottom:%?32?%!important}.u-margin-34, .u-m-34{margin:%?34?%!important}.u-padding-34, .u-p-34{padding:%?34?%!important}.u-m-l-34{margin-left:%?34?%!important}.u-p-l-34{padding-left:%?34?%!important}.u-margin-left-34{margin-left:%?34?%!important}.u-padding-left-34{padding-left:%?34?%!important}.u-m-t-34{margin-top:%?34?%!important}.u-p-t-34{padding-top:%?34?%!important}.u-margin-top-34{margin-top:%?34?%!important}.u-padding-top-34{padding-top:%?34?%!important}.u-m-r-34{margin-right:%?34?%!important}.u-p-r-34{padding-right:%?34?%!important}.u-margin-right-34{margin-right:%?34?%!important}.u-padding-right-34{padding-right:%?34?%!important}.u-m-b-34{margin-bottom:%?34?%!important}.u-p-b-34{padding-bottom:%?34?%!important}.u-margin-bottom-34{margin-bottom:%?34?%!important}.u-padding-bottom-34{padding-bottom:%?34?%!important}.u-margin-35, .u-m-35{margin:%?35?%!important}.u-padding-35, .u-p-35{padding:%?35?%!important}.u-m-l-35{margin-left:%?35?%!important}.u-p-l-35{padding-left:%?35?%!important}.u-margin-left-35{margin-left:%?35?%!important}.u-padding-left-35{padding-left:%?35?%!important}.u-m-t-35{margin-top:%?35?%!important}.u-p-t-35{padding-top:%?35?%!important}.u-margin-top-35{margin-top:%?35?%!important}.u-padding-top-35{padding-top:%?35?%!important}.u-m-r-35{margin-right:%?35?%!important}.u-p-r-35{padding-right:%?35?%!important}.u-margin-right-35{margin-right:%?35?%!important}.u-padding-right-35{padding-right:%?35?%!important}.u-m-b-35{margin-bottom:%?35?%!important}.u-p-b-35{padding-bottom:%?35?%!important}.u-margin-bottom-35{margin-bottom:%?35?%!important}.u-padding-bottom-35{padding-bottom:%?35?%!important}.u-margin-36, .u-m-36{margin:%?36?%!important}.u-padding-36, .u-p-36{padding:%?36?%!important}.u-m-l-36{margin-left:%?36?%!important}.u-p-l-36{padding-left:%?36?%!important}.u-margin-left-36{margin-left:%?36?%!important}.u-padding-left-36{padding-left:%?36?%!important}.u-m-t-36{margin-top:%?36?%!important}.u-p-t-36{padding-top:%?36?%!important}.u-margin-top-36{margin-top:%?36?%!important}.u-padding-top-36{padding-top:%?36?%!important}.u-m-r-36{margin-right:%?36?%!important}.u-p-r-36{padding-right:%?36?%!important}.u-margin-right-36{margin-right:%?36?%!important}.u-padding-right-36{padding-right:%?36?%!important}.u-m-b-36{margin-bottom:%?36?%!important}.u-p-b-36{padding-bottom:%?36?%!important}.u-margin-bottom-36{margin-bottom:%?36?%!important}.u-padding-bottom-36{padding-bottom:%?36?%!important}.u-margin-38, .u-m-38{margin:%?38?%!important}.u-padding-38, .u-p-38{padding:%?38?%!important}.u-m-l-38{margin-left:%?38?%!important}.u-p-l-38{padding-left:%?38?%!important}.u-margin-left-38{margin-left:%?38?%!important}.u-padding-left-38{padding-left:%?38?%!important}.u-m-t-38{margin-top:%?38?%!important}.u-p-t-38{padding-top:%?38?%!important}.u-margin-top-38{margin-top:%?38?%!important}.u-padding-top-38{padding-top:%?38?%!important}.u-m-r-38{margin-right:%?38?%!important}.u-p-r-38{padding-right:%?38?%!important}.u-margin-right-38{margin-right:%?38?%!important}.u-padding-right-38{padding-right:%?38?%!important}.u-m-b-38{margin-bottom:%?38?%!important}.u-p-b-38{padding-bottom:%?38?%!important}.u-margin-bottom-38{margin-bottom:%?38?%!important}.u-padding-bottom-38{padding-bottom:%?38?%!important}.u-margin-40, .u-m-40{margin:%?40?%!important}.u-padding-40, .u-p-40{padding:%?40?%!important}.u-m-l-40{margin-left:%?40?%!important}.u-p-l-40{padding-left:%?40?%!important}.u-margin-left-40{margin-left:%?40?%!important}.u-padding-left-40{padding-left:%?40?%!important}.u-m-t-40{margin-top:%?40?%!important}.u-p-t-40{padding-top:%?40?%!important}.u-margin-top-40{margin-top:%?40?%!important}.u-padding-top-40{padding-top:%?40?%!important}.u-m-r-40{margin-right:%?40?%!important}.u-p-r-40{padding-right:%?40?%!important}.u-margin-right-40{margin-right:%?40?%!important}.u-padding-right-40{padding-right:%?40?%!important}.u-m-b-40{margin-bottom:%?40?%!important}.u-p-b-40{padding-bottom:%?40?%!important}.u-margin-bottom-40{margin-bottom:%?40?%!important}.u-padding-bottom-40{padding-bottom:%?40?%!important}.u-margin-42, .u-m-42{margin:%?42?%!important}.u-padding-42, .u-p-42{padding:%?42?%!important}.u-m-l-42{margin-left:%?42?%!important}.u-p-l-42{padding-left:%?42?%!important}.u-margin-left-42{margin-left:%?42?%!important}.u-padding-left-42{padding-left:%?42?%!important}.u-m-t-42{margin-top:%?42?%!important}.u-p-t-42{padding-top:%?42?%!important}.u-margin-top-42{margin-top:%?42?%!important}.u-padding-top-42{padding-top:%?42?%!important}.u-m-r-42{margin-right:%?42?%!important}.u-p-r-42{padding-right:%?42?%!important}.u-margin-right-42{margin-right:%?42?%!important}.u-padding-right-42{padding-right:%?42?%!important}.u-m-b-42{margin-bottom:%?42?%!important}.u-p-b-42{padding-bottom:%?42?%!important}.u-margin-bottom-42{margin-bottom:%?42?%!important}.u-padding-bottom-42{padding-bottom:%?42?%!important}.u-margin-44, .u-m-44{margin:%?44?%!important}.u-padding-44, .u-p-44{padding:%?44?%!important}.u-m-l-44{margin-left:%?44?%!important}.u-p-l-44{padding-left:%?44?%!important}.u-margin-left-44{margin-left:%?44?%!important}.u-padding-left-44{padding-left:%?44?%!important}.u-m-t-44{margin-top:%?44?%!important}.u-p-t-44{padding-top:%?44?%!important}.u-margin-top-44{margin-top:%?44?%!important}.u-padding-top-44{padding-top:%?44?%!important}.u-m-r-44{margin-right:%?44?%!important}.u-p-r-44{padding-right:%?44?%!important}.u-margin-right-44{margin-right:%?44?%!important}.u-padding-right-44{padding-right:%?44?%!important}.u-m-b-44{margin-bottom:%?44?%!important}.u-p-b-44{padding-bottom:%?44?%!important}.u-margin-bottom-44{margin-bottom:%?44?%!important}.u-padding-bottom-44{padding-bottom:%?44?%!important}.u-margin-45, .u-m-45{margin:%?45?%!important}.u-padding-45, .u-p-45{padding:%?45?%!important}.u-m-l-45{margin-left:%?45?%!important}.u-p-l-45{padding-left:%?45?%!important}.u-margin-left-45{margin-left:%?45?%!important}.u-padding-left-45{padding-left:%?45?%!important}.u-m-t-45{margin-top:%?45?%!important}.u-p-t-45{padding-top:%?45?%!important}.u-margin-top-45{margin-top:%?45?%!important}.u-padding-top-45{padding-top:%?45?%!important}.u-m-r-45{margin-right:%?45?%!important}.u-p-r-45{padding-right:%?45?%!important}.u-margin-right-45{margin-right:%?45?%!important}.u-padding-right-45{padding-right:%?45?%!important}.u-m-b-45{margin-bottom:%?45?%!important}.u-p-b-45{padding-bottom:%?45?%!important}.u-margin-bottom-45{margin-bottom:%?45?%!important}.u-padding-bottom-45{padding-bottom:%?45?%!important}.u-margin-46, .u-m-46{margin:%?46?%!important}.u-padding-46, .u-p-46{padding:%?46?%!important}.u-m-l-46{margin-left:%?46?%!important}.u-p-l-46{padding-left:%?46?%!important}.u-margin-left-46{margin-left:%?46?%!important}.u-padding-left-46{padding-left:%?46?%!important}.u-m-t-46{margin-top:%?46?%!important}.u-p-t-46{padding-top:%?46?%!important}.u-margin-top-46{margin-top:%?46?%!important}.u-padding-top-46{padding-top:%?46?%!important}.u-m-r-46{margin-right:%?46?%!important}.u-p-r-46{padding-right:%?46?%!important}.u-margin-right-46{margin-right:%?46?%!important}.u-padding-right-46{padding-right:%?46?%!important}.u-m-b-46{margin-bottom:%?46?%!important}.u-p-b-46{padding-bottom:%?46?%!important}.u-margin-bottom-46{margin-bottom:%?46?%!important}.u-padding-bottom-46{padding-bottom:%?46?%!important}.u-margin-48, .u-m-48{margin:%?48?%!important}.u-padding-48, .u-p-48{padding:%?48?%!important}.u-m-l-48{margin-left:%?48?%!important}.u-p-l-48{padding-left:%?48?%!important}.u-margin-left-48{margin-left:%?48?%!important}.u-padding-left-48{padding-left:%?48?%!important}.u-m-t-48{margin-top:%?48?%!important}.u-p-t-48{padding-top:%?48?%!important}.u-margin-top-48{margin-top:%?48?%!important}.u-padding-top-48{padding-top:%?48?%!important}.u-m-r-48{margin-right:%?48?%!important}.u-p-r-48{padding-right:%?48?%!important}.u-margin-right-48{margin-right:%?48?%!important}.u-padding-right-48{padding-right:%?48?%!important}.u-m-b-48{margin-bottom:%?48?%!important}.u-p-b-48{padding-bottom:%?48?%!important}.u-margin-bottom-48{margin-bottom:%?48?%!important}.u-padding-bottom-48{padding-bottom:%?48?%!important}.u-margin-50, .u-m-50{margin:%?50?%!important}.u-padding-50, .u-p-50{padding:%?50?%!important}.u-m-l-50{margin-left:%?50?%!important}.u-p-l-50{padding-left:%?50?%!important}.u-margin-left-50{margin-left:%?50?%!important}.u-padding-left-50{padding-left:%?50?%!important}.u-m-t-50{margin-top:%?50?%!important}.u-p-t-50{padding-top:%?50?%!important}.u-margin-top-50{margin-top:%?50?%!important}.u-padding-top-50{padding-top:%?50?%!important}.u-m-r-50{margin-right:%?50?%!important}.u-p-r-50{padding-right:%?50?%!important}.u-margin-right-50{margin-right:%?50?%!important}.u-padding-right-50{padding-right:%?50?%!important}.u-m-b-50{margin-bottom:%?50?%!important}.u-p-b-50{padding-bottom:%?50?%!important}.u-margin-bottom-50{margin-bottom:%?50?%!important}.u-padding-bottom-50{padding-bottom:%?50?%!important}.u-margin-52, .u-m-52{margin:%?52?%!important}.u-padding-52, .u-p-52{padding:%?52?%!important}.u-m-l-52{margin-left:%?52?%!important}.u-p-l-52{padding-left:%?52?%!important}.u-margin-left-52{margin-left:%?52?%!important}.u-padding-left-52{padding-left:%?52?%!important}.u-m-t-52{margin-top:%?52?%!important}.u-p-t-52{padding-top:%?52?%!important}.u-margin-top-52{margin-top:%?52?%!important}.u-padding-top-52{padding-top:%?52?%!important}.u-m-r-52{margin-right:%?52?%!important}.u-p-r-52{padding-right:%?52?%!important}.u-margin-right-52{margin-right:%?52?%!important}.u-padding-right-52{padding-right:%?52?%!important}.u-m-b-52{margin-bottom:%?52?%!important}.u-p-b-52{padding-bottom:%?52?%!important}.u-margin-bottom-52{margin-bottom:%?52?%!important}.u-padding-bottom-52{padding-bottom:%?52?%!important}.u-margin-54, .u-m-54{margin:%?54?%!important}.u-padding-54, .u-p-54{padding:%?54?%!important}.u-m-l-54{margin-left:%?54?%!important}.u-p-l-54{padding-left:%?54?%!important}.u-margin-left-54{margin-left:%?54?%!important}.u-padding-left-54{padding-left:%?54?%!important}.u-m-t-54{margin-top:%?54?%!important}.u-p-t-54{padding-top:%?54?%!important}.u-margin-top-54{margin-top:%?54?%!important}.u-padding-top-54{padding-top:%?54?%!important}.u-m-r-54{margin-right:%?54?%!important}.u-p-r-54{padding-right:%?54?%!important}.u-margin-right-54{margin-right:%?54?%!important}.u-padding-right-54{padding-right:%?54?%!important}.u-m-b-54{margin-bottom:%?54?%!important}.u-p-b-54{padding-bottom:%?54?%!important}.u-margin-bottom-54{margin-bottom:%?54?%!important}.u-padding-bottom-54{padding-bottom:%?54?%!important}.u-margin-55, .u-m-55{margin:%?55?%!important}.u-padding-55, .u-p-55{padding:%?55?%!important}.u-m-l-55{margin-left:%?55?%!important}.u-p-l-55{padding-left:%?55?%!important}.u-margin-left-55{margin-left:%?55?%!important}.u-padding-left-55{padding-left:%?55?%!important}.u-m-t-55{margin-top:%?55?%!important}.u-p-t-55{padding-top:%?55?%!important}.u-margin-top-55{margin-top:%?55?%!important}.u-padding-top-55{padding-top:%?55?%!important}.u-m-r-55{margin-right:%?55?%!important}.u-p-r-55{padding-right:%?55?%!important}.u-margin-right-55{margin-right:%?55?%!important}.u-padding-right-55{padding-right:%?55?%!important}.u-m-b-55{margin-bottom:%?55?%!important}.u-p-b-55{padding-bottom:%?55?%!important}.u-margin-bottom-55{margin-bottom:%?55?%!important}.u-padding-bottom-55{padding-bottom:%?55?%!important}.u-margin-56, .u-m-56{margin:%?56?%!important}.u-padding-56, .u-p-56{padding:%?56?%!important}.u-m-l-56{margin-left:%?56?%!important}.u-p-l-56{padding-left:%?56?%!important}.u-margin-left-56{margin-left:%?56?%!important}.u-padding-left-56{padding-left:%?56?%!important}.u-m-t-56{margin-top:%?56?%!important}.u-p-t-56{padding-top:%?56?%!important}.u-margin-top-56{margin-top:%?56?%!important}.u-padding-top-56{padding-top:%?56?%!important}.u-m-r-56{margin-right:%?56?%!important}.u-p-r-56{padding-right:%?56?%!important}.u-margin-right-56{margin-right:%?56?%!important}.u-padding-right-56{padding-right:%?56?%!important}.u-m-b-56{margin-bottom:%?56?%!important}.u-p-b-56{padding-bottom:%?56?%!important}.u-margin-bottom-56{margin-bottom:%?56?%!important}.u-padding-bottom-56{padding-bottom:%?56?%!important}.u-margin-58, .u-m-58{margin:%?58?%!important}.u-padding-58, .u-p-58{padding:%?58?%!important}.u-m-l-58{margin-left:%?58?%!important}.u-p-l-58{padding-left:%?58?%!important}.u-margin-left-58{margin-left:%?58?%!important}.u-padding-left-58{padding-left:%?58?%!important}.u-m-t-58{margin-top:%?58?%!important}.u-p-t-58{padding-top:%?58?%!important}.u-margin-top-58{margin-top:%?58?%!important}.u-padding-top-58{padding-top:%?58?%!important}.u-m-r-58{margin-right:%?58?%!important}.u-p-r-58{padding-right:%?58?%!important}.u-margin-right-58{margin-right:%?58?%!important}.u-padding-right-58{padding-right:%?58?%!important}.u-m-b-58{margin-bottom:%?58?%!important}.u-p-b-58{padding-bottom:%?58?%!important}.u-margin-bottom-58{margin-bottom:%?58?%!important}.u-padding-bottom-58{padding-bottom:%?58?%!important}.u-margin-60, .u-m-60{margin:%?60?%!important}.u-padding-60, .u-p-60{padding:%?60?%!important}.u-m-l-60{margin-left:%?60?%!important}.u-p-l-60{padding-left:%?60?%!important}.u-margin-left-60{margin-left:%?60?%!important}.u-padding-left-60{padding-left:%?60?%!important}.u-m-t-60{margin-top:%?60?%!important}.u-p-t-60{padding-top:%?60?%!important}.u-margin-top-60{margin-top:%?60?%!important}.u-padding-top-60{padding-top:%?60?%!important}.u-m-r-60{margin-right:%?60?%!important}.u-p-r-60{padding-right:%?60?%!important}.u-margin-right-60{margin-right:%?60?%!important}.u-padding-right-60{padding-right:%?60?%!important}.u-m-b-60{margin-bottom:%?60?%!important}.u-p-b-60{padding-bottom:%?60?%!important}.u-margin-bottom-60{margin-bottom:%?60?%!important}.u-padding-bottom-60{padding-bottom:%?60?%!important}.u-margin-62, .u-m-62{margin:%?62?%!important}.u-padding-62, .u-p-62{padding:%?62?%!important}.u-m-l-62{margin-left:%?62?%!important}.u-p-l-62{padding-left:%?62?%!important}.u-margin-left-62{margin-left:%?62?%!important}.u-padding-left-62{padding-left:%?62?%!important}.u-m-t-62{margin-top:%?62?%!important}.u-p-t-62{padding-top:%?62?%!important}.u-margin-top-62{margin-top:%?62?%!important}.u-padding-top-62{padding-top:%?62?%!important}.u-m-r-62{margin-right:%?62?%!important}.u-p-r-62{padding-right:%?62?%!important}.u-margin-right-62{margin-right:%?62?%!important}.u-padding-right-62{padding-right:%?62?%!important}.u-m-b-62{margin-bottom:%?62?%!important}.u-p-b-62{padding-bottom:%?62?%!important}.u-margin-bottom-62{margin-bottom:%?62?%!important}.u-padding-bottom-62{padding-bottom:%?62?%!important}.u-margin-64, .u-m-64{margin:%?64?%!important}.u-padding-64, .u-p-64{padding:%?64?%!important}.u-m-l-64{margin-left:%?64?%!important}.u-p-l-64{padding-left:%?64?%!important}.u-margin-left-64{margin-left:%?64?%!important}.u-padding-left-64{padding-left:%?64?%!important}.u-m-t-64{margin-top:%?64?%!important}.u-p-t-64{padding-top:%?64?%!important}.u-margin-top-64{margin-top:%?64?%!important}.u-padding-top-64{padding-top:%?64?%!important}.u-m-r-64{margin-right:%?64?%!important}.u-p-r-64{padding-right:%?64?%!important}.u-margin-right-64{margin-right:%?64?%!important}.u-padding-right-64{padding-right:%?64?%!important}.u-m-b-64{margin-bottom:%?64?%!important}.u-p-b-64{padding-bottom:%?64?%!important}.u-margin-bottom-64{margin-bottom:%?64?%!important}.u-padding-bottom-64{padding-bottom:%?64?%!important}.u-margin-65, .u-m-65{margin:%?65?%!important}.u-padding-65, .u-p-65{padding:%?65?%!important}.u-m-l-65{margin-left:%?65?%!important}.u-p-l-65{padding-left:%?65?%!important}.u-margin-left-65{margin-left:%?65?%!important}.u-padding-left-65{padding-left:%?65?%!important}.u-m-t-65{margin-top:%?65?%!important}.u-p-t-65{padding-top:%?65?%!important}.u-margin-top-65{margin-top:%?65?%!important}.u-padding-top-65{padding-top:%?65?%!important}.u-m-r-65{margin-right:%?65?%!important}.u-p-r-65{padding-right:%?65?%!important}.u-margin-right-65{margin-right:%?65?%!important}.u-padding-right-65{padding-right:%?65?%!important}.u-m-b-65{margin-bottom:%?65?%!important}.u-p-b-65{padding-bottom:%?65?%!important}.u-margin-bottom-65{margin-bottom:%?65?%!important}.u-padding-bottom-65{padding-bottom:%?65?%!important}.u-margin-66, .u-m-66{margin:%?66?%!important}.u-padding-66, .u-p-66{padding:%?66?%!important}.u-m-l-66{margin-left:%?66?%!important}.u-p-l-66{padding-left:%?66?%!important}.u-margin-left-66{margin-left:%?66?%!important}.u-padding-left-66{padding-left:%?66?%!important}.u-m-t-66{margin-top:%?66?%!important}.u-p-t-66{padding-top:%?66?%!important}.u-margin-top-66{margin-top:%?66?%!important}.u-padding-top-66{padding-top:%?66?%!important}.u-m-r-66{margin-right:%?66?%!important}.u-p-r-66{padding-right:%?66?%!important}.u-margin-right-66{margin-right:%?66?%!important}.u-padding-right-66{padding-right:%?66?%!important}.u-m-b-66{margin-bottom:%?66?%!important}.u-p-b-66{padding-bottom:%?66?%!important}.u-margin-bottom-66{margin-bottom:%?66?%!important}.u-padding-bottom-66{padding-bottom:%?66?%!important}.u-margin-68, .u-m-68{margin:%?68?%!important}.u-padding-68, .u-p-68{padding:%?68?%!important}.u-m-l-68{margin-left:%?68?%!important}.u-p-l-68{padding-left:%?68?%!important}.u-margin-left-68{margin-left:%?68?%!important}.u-padding-left-68{padding-left:%?68?%!important}.u-m-t-68{margin-top:%?68?%!important}.u-p-t-68{padding-top:%?68?%!important}.u-margin-top-68{margin-top:%?68?%!important}.u-padding-top-68{padding-top:%?68?%!important}.u-m-r-68{margin-right:%?68?%!important}.u-p-r-68{padding-right:%?68?%!important}.u-margin-right-68{margin-right:%?68?%!important}.u-padding-right-68{padding-right:%?68?%!important}.u-m-b-68{margin-bottom:%?68?%!important}.u-p-b-68{padding-bottom:%?68?%!important}.u-margin-bottom-68{margin-bottom:%?68?%!important}.u-padding-bottom-68{padding-bottom:%?68?%!important}.u-margin-70, .u-m-70{margin:%?70?%!important}.u-padding-70, .u-p-70{padding:%?70?%!important}.u-m-l-70{margin-left:%?70?%!important}.u-p-l-70{padding-left:%?70?%!important}.u-margin-left-70{margin-left:%?70?%!important}.u-padding-left-70{padding-left:%?70?%!important}.u-m-t-70{margin-top:%?70?%!important}.u-p-t-70{padding-top:%?70?%!important}.u-margin-top-70{margin-top:%?70?%!important}.u-padding-top-70{padding-top:%?70?%!important}.u-m-r-70{margin-right:%?70?%!important}.u-p-r-70{padding-right:%?70?%!important}.u-margin-right-70{margin-right:%?70?%!important}.u-padding-right-70{padding-right:%?70?%!important}.u-m-b-70{margin-bottom:%?70?%!important}.u-p-b-70{padding-bottom:%?70?%!important}.u-margin-bottom-70{margin-bottom:%?70?%!important}.u-padding-bottom-70{padding-bottom:%?70?%!important}.u-margin-72, .u-m-72{margin:%?72?%!important}.u-padding-72, .u-p-72{padding:%?72?%!important}.u-m-l-72{margin-left:%?72?%!important}.u-p-l-72{padding-left:%?72?%!important}.u-margin-left-72{margin-left:%?72?%!important}.u-padding-left-72{padding-left:%?72?%!important}.u-m-t-72{margin-top:%?72?%!important}.u-p-t-72{padding-top:%?72?%!important}.u-margin-top-72{margin-top:%?72?%!important}.u-padding-top-72{padding-top:%?72?%!important}.u-m-r-72{margin-right:%?72?%!important}.u-p-r-72{padding-right:%?72?%!important}.u-margin-right-72{margin-right:%?72?%!important}.u-padding-right-72{padding-right:%?72?%!important}.u-m-b-72{margin-bottom:%?72?%!important}.u-p-b-72{padding-bottom:%?72?%!important}.u-margin-bottom-72{margin-bottom:%?72?%!important}.u-padding-bottom-72{padding-bottom:%?72?%!important}.u-margin-74, .u-m-74{margin:%?74?%!important}.u-padding-74, .u-p-74{padding:%?74?%!important}.u-m-l-74{margin-left:%?74?%!important}.u-p-l-74{padding-left:%?74?%!important}.u-margin-left-74{margin-left:%?74?%!important}.u-padding-left-74{padding-left:%?74?%!important}.u-m-t-74{margin-top:%?74?%!important}.u-p-t-74{padding-top:%?74?%!important}.u-margin-top-74{margin-top:%?74?%!important}.u-padding-top-74{padding-top:%?74?%!important}.u-m-r-74{margin-right:%?74?%!important}.u-p-r-74{padding-right:%?74?%!important}.u-margin-right-74{margin-right:%?74?%!important}.u-padding-right-74{padding-right:%?74?%!important}.u-m-b-74{margin-bottom:%?74?%!important}.u-p-b-74{padding-bottom:%?74?%!important}.u-margin-bottom-74{margin-bottom:%?74?%!important}.u-padding-bottom-74{padding-bottom:%?74?%!important}.u-margin-75, .u-m-75{margin:%?75?%!important}.u-padding-75, .u-p-75{padding:%?75?%!important}.u-m-l-75{margin-left:%?75?%!important}.u-p-l-75{padding-left:%?75?%!important}.u-margin-left-75{margin-left:%?75?%!important}.u-padding-left-75{padding-left:%?75?%!important}.u-m-t-75{margin-top:%?75?%!important}.u-p-t-75{padding-top:%?75?%!important}.u-margin-top-75{margin-top:%?75?%!important}.u-padding-top-75{padding-top:%?75?%!important}.u-m-r-75{margin-right:%?75?%!important}.u-p-r-75{padding-right:%?75?%!important}.u-margin-right-75{margin-right:%?75?%!important}.u-padding-right-75{padding-right:%?75?%!important}.u-m-b-75{margin-bottom:%?75?%!important}.u-p-b-75{padding-bottom:%?75?%!important}.u-margin-bottom-75{margin-bottom:%?75?%!important}.u-padding-bottom-75{padding-bottom:%?75?%!important}.u-margin-76, .u-m-76{margin:%?76?%!important}.u-padding-76, .u-p-76{padding:%?76?%!important}.u-m-l-76{margin-left:%?76?%!important}.u-p-l-76{padding-left:%?76?%!important}.u-margin-left-76{margin-left:%?76?%!important}.u-padding-left-76{padding-left:%?76?%!important}.u-m-t-76{margin-top:%?76?%!important}.u-p-t-76{padding-top:%?76?%!important}.u-margin-top-76{margin-top:%?76?%!important}.u-padding-top-76{padding-top:%?76?%!important}.u-m-r-76{margin-right:%?76?%!important}.u-p-r-76{padding-right:%?76?%!important}.u-margin-right-76{margin-right:%?76?%!important}.u-padding-right-76{padding-right:%?76?%!important}.u-m-b-76{margin-bottom:%?76?%!important}.u-p-b-76{padding-bottom:%?76?%!important}.u-margin-bottom-76{margin-bottom:%?76?%!important}.u-padding-bottom-76{padding-bottom:%?76?%!important}.u-margin-78, .u-m-78{margin:%?78?%!important}.u-padding-78, .u-p-78{padding:%?78?%!important}.u-m-l-78{margin-left:%?78?%!important}.u-p-l-78{padding-left:%?78?%!important}.u-margin-left-78{margin-left:%?78?%!important}.u-padding-left-78{padding-left:%?78?%!important}.u-m-t-78{margin-top:%?78?%!important}.u-p-t-78{padding-top:%?78?%!important}.u-margin-top-78{margin-top:%?78?%!important}.u-padding-top-78{padding-top:%?78?%!important}.u-m-r-78{margin-right:%?78?%!important}.u-p-r-78{padding-right:%?78?%!important}.u-margin-right-78{margin-right:%?78?%!important}.u-padding-right-78{padding-right:%?78?%!important}.u-m-b-78{margin-bottom:%?78?%!important}.u-p-b-78{padding-bottom:%?78?%!important}.u-margin-bottom-78{margin-bottom:%?78?%!important}.u-padding-bottom-78{padding-bottom:%?78?%!important}.u-margin-80, .u-m-80{margin:%?80?%!important}.u-padding-80, .u-p-80{padding:%?80?%!important}.u-m-l-80{margin-left:%?80?%!important}.u-p-l-80{padding-left:%?80?%!important}.u-margin-left-80{margin-left:%?80?%!important}.u-padding-left-80{padding-left:%?80?%!important}.u-m-t-80{margin-top:%?80?%!important}.u-p-t-80{padding-top:%?80?%!important}.u-margin-top-80{margin-top:%?80?%!important}.u-padding-top-80{padding-top:%?80?%!important}.u-m-r-80{margin-right:%?80?%!important}.u-p-r-80{padding-right:%?80?%!important}.u-margin-right-80{margin-right:%?80?%!important}.u-padding-right-80{padding-right:%?80?%!important}.u-m-b-80{margin-bottom:%?80?%!important}.u-p-b-80{padding-bottom:%?80?%!important}.u-margin-bottom-80{margin-bottom:%?80?%!important}.u-padding-bottom-80{padding-bottom:%?80?%!important}.u-reset-nvue{flex-direction:row;align-items:center}.u-type-primary-light{color:#ecf5ff}.u-type-warning-light{color:#fdf6ec}.u-type-success-light{color:#dbf1e1}.u-type-error-light{color:#fef0f0}.u-type-info-light{color:#f4f4f5}.u-type-primary-light-bg{background-color:#ecf5ff}.u-type-warning-light-bg{background-color:#fdf6ec}.u-type-success-light-bg{background-color:#dbf1e1}.u-type-error-light-bg{background-color:#fef0f0}.u-type-info-light-bg{background-color:#f4f4f5}.u-type-primary-dark{color:#2b85e4}.u-type-warning-dark{color:#f29100}.u-type-success-dark{color:#18b566}.u-type-error-dark{color:#dd6161}.u-type-info-dark{color:#82848a}.u-type-primary-dark-bg{background-color:#2b85e4}.u-type-warning-dark-bg{background-color:#f29100}.u-type-success-dark-bg{background-color:#18b566}.u-type-error-dark-bg{background-color:#dd6161}.u-type-info-dark-bg{background-color:#82848a}.u-type-primary-disabled{color:#a0cfff}.u-type-warning-disabled{color:#fcbd71}.u-type-success-disabled{color:#71d5a1}.u-type-error-disabled{color:#fab6b6}.u-type-info-disabled{color:#c8c9cc}.u-type-primary{color:#2979ff}.u-type-warning{color:#f90}.u-type-success{color:#19be6b}.u-type-error{color:#fa3534}.u-type-info{color:#909399}.u-type-primary-bg{background-color:#2979ff}.u-type-warning-bg{background-color:#f90}.u-type-success-bg{background-color:#19be6b}.u-type-error-bg{background-color:#fa3534}.u-type-info-bg{background-color:#909399}.u-main-color{color:#303133}.u-content-color{color:#606266}.u-tips-color{color:#909399}.u-light-color{color:#c0c4cc}uni-page-body{color:#303133;font-size:%?28?%}\r\n/* start--去除webkit的默认样式--start */.u-fix-ios-appearance{-webkit-appearance:none}\r\n/* end--去除webkit的默认样式--end */\r\n/* start--icon图标外层套一个view，让其达到更好的垂直居中的效果--start */.u-icon-wrap{display:flex;align-items:center}\r\n/* end-icon图标外层套一个view，让其达到更好的垂直居中的效果--end */\r\n/* start--iPhoneX底部安全区定义--start */.safe-area-inset-bottom{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}\r\n/* end-iPhoneX底部安全区定义--end */\r\n/* start--各种hover点击反馈相关的类名-start */.u-hover-class{opacity:.6}.u-cell-hover{background-color:#f7f8f9!important}\r\n/* end--各种hover点击反馈相关的类名--end */\r\n/* start--文本行数限制--start */.u-line-1{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.u-line-2{-webkit-line-clamp:2}.u-line-3{-webkit-line-clamp:3}.u-line-4{-webkit-line-clamp:4}.u-line-5{-webkit-line-clamp:5}.u-line-2, .u-line-3, .u-line-4, .u-line-5{overflow:hidden;word-break:break-all;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical}\r\n/* end--文本行数限制--end */\r\n/* start--Retina 屏幕下的 1px 边框--start */.u-border,\r\n.u-border-bottom,\r\n.u-border-left,\r\n.u-border-right,\r\n.u-border-top,\r\n.u-border-top-bottom{position:relative}.u-border-bottom:after,\r\n.u-border-left:after,\r\n.u-border-right:after,\r\n.u-border-top-bottom:after,\r\n.u-border-top:after,\r\n.u-border:after{content:" ";position:absolute;left:0;top:0;pointer-events:none;box-sizing:border-box;-webkit-transform-origin:0 0;transform-origin:0 0;width:199.8%;height:199.7%;-webkit-transform:scale(.5);transform:scale(.5);border:0 solid #e4e7ed;z-index:2}.u-border-top:after{border-top-width:1px}.u-border-left:after{border-left-width:1px}.u-border-right:after{border-right-width:1px}.u-border-bottom:after{border-bottom-width:1px}.u-border-top-bottom:after{border-width:1px 0}.u-border:after{border-width:1px}\r\n/* end--Retina 屏幕下的 1px 边框--end */\r\n/* start--clearfix--start */.u-clearfix:after,\r\n.clearfix:after{content:"";display:table;clear:both}\r\n/* end--clearfix--end */\r\n/* start--高斯模糊tabbar底部处理--start */.u-blur-effect-inset{width:%?750?%;height:var(--window-bottom);background-color:#fff}\r\n/* end--高斯模糊tabbar底部处理--end */\r\n/* start--提升H5端uni.toast()的层级，避免被uView的modal等遮盖--start */uni-toast{z-index:10090}uni-toast .uni-toast{z-index:10090}\r\n/* end--提升H5端uni.toast()的层级，避免被uView的modal等遮盖--end */\r\n/* start--去除button的所有默认样式--start */.u-reset-button{padding:0;font-size:inherit;line-height:inherit;background-color:initial;color:inherit}.u-reset-button::after{border:none}\r\n/* end--去除button的所有默认样式--end */\r\n/* H5的时候，隐藏滚动条 */::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}uni-view,\r\nuni-text{box-sizing:border-box}\r\n/* start--演示页面使用的统一样式--start */.u-demo{padding:25px 20px}.u-demo-wrap{border-width:1px;border-color:#ddd;border-style:dashed;background-color:#fafafa;padding:20px 10px;border-radius:3px}.u-demo-area{text-align:center}.u-no-demo-here{color:#909399;font-size:13px}.u-demo-result-line{border-width:1px;border-color:#ddd;border-style:dashed;padding:5px 20px;margin-top:30px;border-radius:5px;background-color:#f0f0f0;color:#606266;font-size:16px;word-break:break-word;display:inline-block;text-align:left}.u-demo-title,\r\n.u-config-title{text-align:center;font-size:16px;font-weight:700;margin-bottom:20px}.u-config-item{margin-top:25px}.u-config-title{margin-top:20px;padding-bottom:5px}.u-item-title{position:relative;font-size:15px;padding-left:8px;line-height:1;margin-bottom:11px}.u-item-title:after{position:absolute;width:4px;top:-1px;height:16px;content:"";left:0;border-radius:10px;background-color:#606266}\r\n/* end--演示页面使用的统一样式--end */', ""]),
        t.exports = n
    },
    9292: function(t, n, i) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.default = void 0;
        var a = {
            globalData: {
                username: "Chain Tool"
            },
            onLaunch: function() {}
        };
        n.default = a
    },
    "9bef": function(t, n, i) {
        "use strict";
        var a = i("4ea4");
        i("d3b7"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.default = void 0,
        i("96cf");
        var r = a(i("1da1"))
          , e = a(i("d4ec"))
          , o = a(i("bee2"))
          , p = function() {
            function t() {
                (0,
                e.default)(this, t),
                this.config = {
                    type: "navigateTo",
                    url: "",
                    delta: 1,
                    params: {},
                    animationType: "pop-in",
                    animationDuration: 300,
                    intercept: !1
                },
                this.route = this.route.bind(this)
            }
            return (0,
            o.default)(t, [{
                key: "addRootPath",
                value: function(t) {
                    return "/" === t[0] ? t : "/".concat(t)
                }
            }, {
                key: "mixinParam",
                value: function(t, n) {
                    t = t && this.addRootPath(t);
                    var i = "";
                    return /.*\/.*\?.*=.*/.test(t) ? (i = uni.$u.queryParams(n, !1),
                    t + "&" + i) : (i = uni.$u.queryParams(n),
                    t + i)
                }
            }, {
                key: "route",
                value: function() {
                    var t = (0,
                    r.default)(regeneratorRuntime.mark((function t() {
                        var n, i, a, r, e = arguments;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (n = e.length > 0 && void 0 !== e[0] ? e[0] : {},
                                    i = e.length > 1 && void 0 !== e[1] ? e[1] : {},
                                    a = {},
                                    "string" === typeof n ? (a.url = this.mixinParam(n, i),
                                    a.type = "navigateTo") : (a = uni.$u.deepClone(n, this.config),
                                    a.url = this.mixinParam(n.url, n.params)),
                                    i.intercept && (this.config.intercept = i.intercept),
                                    a.params = i,
                                    a = uni.$u.deepMerge(this.config, a),
                                    "function" !== typeof uni.$u.routeIntercept) {
                                        t.next = 14;
                                        break
                                    }
                                    return t.next = 10,
                                    new Promise((function(t, n) {
                                        uni.$u.routeIntercept(a, t)
                                    }
                                    ));
                                case 10:
                                    r = t.sent,
                                    r && this.openPage(a),
                                    t.next = 15;
                                    break;
                                case 14:
                                    this.openPage(a);
                                case 15:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function n() {
                        return t.apply(this, arguments)
                    }
                    return n
                }()
            }, {
                key: "openPage",
                value: function(t) {
                    var n = t.url
                      , i = (t.type,
                    t.delta)
                      , a = t.animationType
                      , r = t.animationDuration;
                    "navigateTo" != t.type && "to" != t.type || uni.navigateTo({
                        url: n,
                        animationType: a,
                        animationDuration: r
                    }),
                    "redirectTo" != t.type && "redirect" != t.type || uni.redirectTo({
                        url: n
                    }),
                    "switchTab" != t.type && "tab" != t.type || uni.switchTab({
                        url: n
                    }),
                    "reLaunch" != t.type && "launch" != t.type || uni.reLaunch({
                        url: n
                    }),
                    "navigateBack" != t.type && "back" != t.type || uni.navigateBack({
                        delta: i
                    })
                }
            }]),
            t
        }()
          , u = (new p).route;
        n.default = u
    },
    a15b: function(t, n, i) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.default = void 0;
        var a = "1.8.4"
          , r = {
            v: a,
            version: a,
            type: ["primary", "success", "info", "error", "warning"]
        };
        n.default = r
    },
    ad1d: function(t, n, i) {
        "use strict";
        var a;
        function r(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500
              , i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            i ? a || (a = !0,
            "function" === typeof t && t(),
            setTimeout((function() {
                a = !1
            }
            ), n)) : a || (a = !0,
            setTimeout((function() {
                a = !1,
                "function" === typeof t && t()
            }
            ), n))
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.default = void 0;
        var e = r;
        n.default = e
    },
    b4b1: function(t, n, i) {
        "use strict";
        function a() {
            return uni.getSystemInfoSync().platform
        }
        function r() {
            return uni.getSystemInfoSync()
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.os = a,
        n.sys = r
    },
    bee1: function(t, n, i) {
        var a = i("87b9");
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        var r = i("4f06").default;
        r("8c8ecafc", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    c3e9: function(t, n, i) {
        "use strict";
        var a = i("4ea4");
        i("4de4"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.default = void 0;
        var r = a(i("0444"))
          , e = a(i("0517"))
          , o = a(i("c9cc"))
          , p = a(i("9bef"))
          , u = a(i("0f92"))
          , m = a(i("1e83"))
          , d = a(i("f422"))
          , g = a(i("e70c"))
          , l = a(i("0dbb"))
          , s = a(i("e788"))
          , c = a(i("6b3a"))
          , f = a(i("6250"))
          , h = a(i("422e"))
          , b = a(i("42f8"))
          , v = a(i("1b93"))
          , y = a(i("6f2c"))
          , _ = a(i("21ce"))
          , w = a(i("e03d"))
          , k = a(i("e9bd"))
          , x = a(i("663d"))
          , T = i("b4b1")
          , O = a(i("7de1"))
          , S = a(i("ad1d"))
          , C = a(i("a15b"))
          , P = a(i("4e74"));
        function $(t) {
            0
        }
        var D = {
            queryParams: o.default,
            route: p.default,
            timeFormat: u.default,
            date: u.default,
            timeFrom: m.default,
            colorGradient: d.default.colorGradient,
            colorToRgba: d.default.colorToRgba,
            guid: g.default,
            color: l.default,
            sys: T.sys,
            os: T.os,
            type2icon: s.default,
            randomArray: c.default,
            wranning: $,
            get: e.default.get,
            post: e.default.post,
            put: e.default.put,
            delete: e.default.delete,
            hexToRgb: d.default.hexToRgb,
            rgbToHex: d.default.rgbToHex,
            test: v.default,
            random: y.default,
            deepClone: f.default,
            deepMerge: h.default,
            getParent: k.default,
            $parent: x.default,
            addUnit: b.default,
            trim: _.default,
            type: ["primary", "success", "error", "warning", "info"],
            http: e.default,
            toast: w.default,
            config: C.default,
            zIndex: P.default,
            debounce: O.default,
            throttle: S.default
        };
        uni.$u = D;
        var M = function(t) {
            t.mixin(r.default),
            t.prototype.openShare && t.mixin(mpShare),
            t.filter("timeFormat", (function(t, n) {
                return (0,
                u.default)(t, n)
            }
            )),
            t.filter("date", (function(t, n) {
                return (0,
                u.default)(t, n)
            }
            )),
            t.filter("timeFrom", (function(t, n) {
                return (0,
                m.default)(t, n)
            }
            )),
            t.prototype.$u = D
        }
          , F = {
            install: M
        };
        n.default = F
    },
    c9cc: function(t, n, i) {
        "use strict";
        function a() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
              , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "brackets"
              , a = n ? "?" : ""
              , r = [];
            -1 == ["indices", "brackets", "repeat", "comma"].indexOf(i) && (i = "brackets");
            var e = function(n) {
                var a = t[n];
                if (["", void 0, null].indexOf(a) >= 0)
                    return "continue";
                if (a.constructor === Array)
                    switch (i) {
                    case "indices":
                        for (var e = 0; e < a.length; e++)
                            r.push(n + "[" + e + "]=" + a[e]);
                        break;
                    case "brackets":
                        a.forEach((function(t) {
                            r.push(n + "[]=" + t)
                        }
                        ));
                        break;
                    case "repeat":
                        a.forEach((function(t) {
                            r.push(n + "=" + t)
                        }
                        ));
                        break;
                    case "comma":
                        var o = "";
                        a.forEach((function(t) {
                            o += (o ? "," : "") + t
                        }
                        )),
                        r.push(n + "=" + o);
                        break;
                    default:
                        a.forEach((function(t) {
                            r.push(n + "[]=" + t)
                        }
                        ))
                    }
                else
                    r.push(n + "=" + a)
            };
            for (var o in t)
                e(o);
            return r.length ? a + r.join("&") : ""
        }
        i("4160"),
        i("c975"),
        i("159b"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.default = void 0;
        var r = a;
        n.default = r
    },
    d72c: function(t, n, i) {
        "use strict";
        var a = i("4ea4");
        i("b64b");
        var r = a(i("5530"))
          , e = i("26cb")
          , o = a(i("8694"))
          , p = [];
        try {
            p = o.default.state ? Object.keys(o.default.state) : []
        } catch (u) {}
        t.exports = {
            beforeCreate: function() {
                var t = this;
                this.$u.vuex = function(n, i) {
                    t.$store.commit("$uStore", {
                        name: n,
                        value: i
                    })
                }
            },
            computed: (0,
            r.default)({}, (0,
            e.mapState)(p))
        }
    },
    e03d: function(t, n, i) {
        "use strict";
        function a(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500;
            uni.showToast({
                title: t,
                icon: "none",
                duration: n
            })
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.default = void 0;
        var r = a;
        n.default = r
    },
    e70c: function(t, n, i) {
        "use strict";
        function a() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32
              , n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
              , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
              , a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("")
              , r = [];
            if (i = i || a.length,
            t)
                for (var e = 0; e < t; e++)
                    r[e] = a[0 | Math.random() * i];
            else {
                var o;
                r[8] = r[13] = r[18] = r[23] = "-",
                r[14] = "4";
                for (var p = 0; p < 36; p++)
                    r[p] || (o = 0 | 16 * Math.random(),
                    r[p] = a[19 == p ? 3 & o | 8 : o])
            }
            return n ? (r.shift(),
            "u" + r.join("")) : r.join("")
        }
        i("ac1f"),
        i("1276"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.default = void 0;
        var r = a;
        n.default = r
    },
    e788: function(t, n, i) {
        "use strict";
        function a() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "success"
              , n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            -1 == ["primary", "info", "error", "warning", "success"].indexOf(t) && (t = "success");
            var i = "";
            switch (t) {
            case "primary":
                i = "info-circle";
                break;
            case "info":
                i = "info-circle";
                break;
            case "error":
                i = "close-circle";
                break;
            case "warning":
                i = "error-circle";
                break;
            case "success":
                i = "checkmark-circle";
                break;
            default:
                i = "checkmark-circle"
            }
            return n && (i += "-fill"),
            i
        }
        i("c975"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.default = void 0;
        var r = a;
        n.default = r
    },
    e9bd: function(t, n, i) {
        "use strict";
        function a(t, n) {
            var i = this.$parent;
            while (i)
                if (i.$options.name !== t)
                    i = i.$parent;
                else {
                    var a = function() {
                        var t = {};
                        if (Array.isArray(n))
                            n.map((function(n) {
                                t[n] = i[n] ? i[n] : ""
                            }
                            ));
                        else
                            for (var a in n)
                                Array.isArray(n[a]) ? n[a].length ? t[a] = n[a] : t[a] = i[a] : n[a].constructor === Object ? Object.keys(n[a]).length ? t[a] = n[a] : t[a] = i[a] : t[a] = n[a] || !1 === n[a] ? n[a] : i[a];
                        return {
                            v: t
                        }
                    }();
                    if ("object" === typeof a)
                        return a.v
                }
            return {}
        }
        i("d81d"),
        i("b64b"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.default = a
    },
    eea6: function(t, n, i) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.default = void 0;
        var a = "/ebapi/store_api/hot_search"
          , r = "/ebapi/public_api/index"
          , e = function(t, n) {
            var i = function() {
                return n.$u.get(a, {
                    id: 2
                })
            }
              , e = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return n.$u.post(r, t)
            };
            n.$u.api = {
                getSearch: i,
                getInfo: e
            }
        }
          , o = {
            install: e
        };
        n.default = o
    },
    f04a: function(t, n, i) {
        "use strict";
        i.r(n);
        var a = i("6752")
          , r = i("483d");
        for (var e in r)
            "default" !== e && function(t) {
                i.d(n, t, (function() {
                    return r[t]
                }
                ))
            }(e);
        i("f482");
        var o, p = i("f0c5"), u = Object(p["a"])(r["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], o);
        n["default"] = u.exports
    },
    f422: function(t, n, i) {
        "use strict";
        function a() {
            for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "rgb(0, 0, 0)", n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "rgb(255, 255, 255)", i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10, a = r(t, !1), o = a[0], p = a[1], u = a[2], m = r(n, !1), d = m[0], g = m[1], l = m[2], s = (d - o) / i, c = (g - p) / i, f = (l - u) / i, h = [], b = 0; b < i; b++) {
                var v = e("rgb(" + Math.round(s * b + o) + "," + Math.round(c * b + p) + "," + Math.round(f * b + u) + ")");
                h.push(v)
            }
            return h
        }
        function r(t) {
            var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
              , i = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
            if (t = t.toLowerCase(),
            t && i.test(t)) {
                if (4 === t.length) {
                    for (var a = "#", r = 1; r < 4; r += 1)
                        a += t.slice(r, r + 1).concat(t.slice(r, r + 1));
                    t = a
                }
                for (var e = [], o = 1; o < 7; o += 2)
                    e.push(parseInt("0x" + t.slice(o, o + 2)));
                return n ? "rgb(".concat(e[0], ",").concat(e[1], ",").concat(e[2], ")") : e
            }
            if (/^(rgb|RGB)/.test(t)) {
                var p = t.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
                return p.map((function(t) {
                    return Number(t)
                }
                ))
            }
            return t
        }
        function e(t) {
            var n = t
              , i = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
            if (/^(rgb|RGB)/.test(n)) {
                for (var a = n.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(","), r = "#", e = 0; e < a.length; e++) {
                    var o = Number(a[e]).toString(16);
                    o = 1 == String(o).length ? "0" + o : o,
                    "0" === o && (o += o),
                    r += o
                }
                return 7 !== r.length && (r = n),
                r
            }
            if (!i.test(n))
                return n;
            var p = n.replace(/#/, "").split("");
            if (6 === p.length)
                return n;
            if (3 === p.length) {
                for (var u = "#", m = 0; m < p.length; m += 1)
                    u += p[m] + p[m];
                return u
            }
        }
        function o(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .3;
            t = e(t);
            var i = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
              , a = t.toLowerCase();
            if (a && i.test(a)) {
                if (4 === a.length) {
                    for (var r = "#", o = 1; o < 4; o += 1)
                        r += a.slice(o, o + 1).concat(a.slice(o, o + 1));
                    a = r
                }
                for (var p = [], u = 1; u < 7; u += 2)
                    p.push(parseInt("0x" + a.slice(u, u + 2)));
                return "rgba(" + p.join(",") + "," + n + ")"
            }
            return a
        }
        i("99af"),
        i("d81d"),
        i("fb6a"),
        i("a9e3"),
        i("d3b7"),
        i("e25e"),
        i("ac1f"),
        i("25f0"),
        i("5319"),
        i("1276"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.default = void 0;
        var p = {
            colorGradient: a,
            hexToRgb: r,
            rgbToHex: e,
            colorToRgba: o
        };
        n.default = p
    },
    f482: function(t, n, i) {
        "use strict";
        var a = i("bee1")
          , r = i.n(a);
        r.a
    },
    f937: function(t, n) {
        t.exports = {
            onLoad: function() {
                this.$u.mpShare = {
                    title: "",
                    path: "",
                    imageUrl: ""
                }
            },
            onShareAppMessage: function() {
                return this.$u.mpShare
            }
        }
    }
});
