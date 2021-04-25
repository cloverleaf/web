(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __commonJS = (cb, mod) => () => (mod || cb((mod = {exports: {}}).exports, mod), mod.exports);
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? {get: () => module.default, enumerable: true} : {value: module, enumerable: true})), module);
  };

  // node_modules/materialize-css/dist/js/materialize.min.js
  var require_materialize_min = __commonJS((exports, module) => {
    /*!
     * Materialize v1.0.0 (http://materializecss.com)
     * Copyright 2014-2017 Materialize
     * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
     */
    var _get = function t(e, i, n) {
      e === null && (e = Function.prototype);
      var s = Object.getOwnPropertyDescriptor(e, i);
      if (s === void 0) {
        var o = Object.getPrototypeOf(e);
        return o === null ? void 0 : t(o, i, n);
      }
      if ("value" in s)
        return s.value;
      var a = s.get;
      return a !== void 0 ? a.call(n) : void 0;
    };
    var _createClass = function() {
      function n(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n2 = e[i];
          n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t, n2.key, n2);
        }
      }
      return function(t, e, i) {
        return e && n(t.prototype, e), i && n(t, i), t;
      };
    }();
    function _possibleConstructorReturn(t, e) {
      if (!t)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || typeof e != "object" && typeof e != "function" ? t : e;
    }
    function _inherits(t, e) {
      if (typeof e != "function" && e !== null)
        throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {constructor: {value: t, enumerable: false, writable: true, configurable: true}}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }
    function _classCallCheck(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    window.cash = function() {
      var i, o = document, a = window, t = Array.prototype, r = t.slice, n = t.filter, s = t.push, e = function() {
      }, h = function(t2) {
        return typeof t2 == typeof e && t2.call;
      }, d = function(t2) {
        return typeof t2 == "string";
      }, l = /^#[\w-]*$/, u = /^\.[\w-]*$/, c = /<.+>/, p = /^\w+$/;
      function v(t2, e2) {
        e2 = e2 || o;
        var i2 = u.test(t2) ? e2.getElementsByClassName(t2.slice(1)) : p.test(t2) ? e2.getElementsByTagName(t2) : e2.querySelectorAll(t2);
        return i2;
      }
      function f(t2) {
        if (!i) {
          var e2 = (i = o.implementation.createHTMLDocument(null)).createElement("base");
          e2.href = o.location.href, i.head.appendChild(e2);
        }
        return i.body.innerHTML = t2, i.body.childNodes;
      }
      function m(t2) {
        o.readyState !== "loading" ? t2() : o.addEventListener("DOMContentLoaded", t2);
      }
      function g(t2, e2) {
        if (!t2)
          return this;
        if (t2.cash && t2 !== a)
          return t2;
        var i2, n2 = t2, s2 = 0;
        if (d(t2))
          n2 = l.test(t2) ? o.getElementById(t2.slice(1)) : c.test(t2) ? f(t2) : v(t2, e2);
        else if (h(t2))
          return m(t2), this;
        if (!n2)
          return this;
        if (n2.nodeType || n2 === a)
          this[0] = n2, this.length = 1;
        else
          for (i2 = this.length = n2.length; s2 < i2; s2++)
            this[s2] = n2[s2];
        return this;
      }
      function _2(t2, e2) {
        return new g(t2, e2);
      }
      var y = _2.fn = _2.prototype = g.prototype = {cash: true, length: 0, push: s, splice: t.splice, map: t.map, init: g};
      function k(t2, e2) {
        for (var i2 = t2.length, n2 = 0; n2 < i2 && e2.call(t2[n2], t2[n2], n2, t2) !== false; n2++)
          ;
      }
      function b(t2, e2) {
        var i2 = t2 && (t2.matches || t2.webkitMatchesSelector || t2.mozMatchesSelector || t2.msMatchesSelector || t2.oMatchesSelector);
        return !!i2 && i2.call(t2, e2);
      }
      function w(e2) {
        return d(e2) ? b : e2.cash ? function(t2) {
          return e2.is(t2);
        } : function(t2, e3) {
          return t2 === e3;
        };
      }
      function C(t2) {
        return _2(r.call(t2).filter(function(t3, e2, i2) {
          return i2.indexOf(t3) === e2;
        }));
      }
      Object.defineProperty(y, "constructor", {value: _2}), _2.parseHTML = f, _2.noop = e, _2.isFunction = h, _2.isString = d, _2.extend = y.extend = function(t2) {
        t2 = t2 || {};
        var e2 = r.call(arguments), i2 = e2.length, n2 = 1;
        for (e2.length === 1 && (t2 = this, n2 = 0); n2 < i2; n2++)
          if (e2[n2])
            for (var s2 in e2[n2])
              e2[n2].hasOwnProperty(s2) && (t2[s2] = e2[n2][s2]);
        return t2;
      }, _2.extend({merge: function(t2, e2) {
        for (var i2 = +e2.length, n2 = t2.length, s2 = 0; s2 < i2; n2++, s2++)
          t2[n2] = e2[s2];
        return t2.length = n2, t2;
      }, each: k, matches: b, unique: C, isArray: Array.isArray, isNumeric: function(t2) {
        return !isNaN(parseFloat(t2)) && isFinite(t2);
      }});
      var E = _2.uid = "_cash" + Date.now();
      function M2(t2) {
        return t2[E] = t2[E] || {};
      }
      function O(t2, e2, i2) {
        return M2(t2)[e2] = i2;
      }
      function x(t2, e2) {
        var i2 = M2(t2);
        return i2[e2] === void 0 && (i2[e2] = t2.dataset ? t2.dataset[e2] : _2(t2).attr("data-" + e2)), i2[e2];
      }
      y.extend({data: function(e2, i2) {
        if (d(e2))
          return i2 === void 0 ? x(this[0], e2) : this.each(function(t3) {
            return O(t3, e2, i2);
          });
        for (var t2 in e2)
          this.data(t2, e2[t2]);
        return this;
      }, removeData: function(s2) {
        return this.each(function(t2) {
          return i2 = s2, void ((n2 = M2(e2 = t2)) ? delete n2[i2] : e2.dataset ? delete e2.dataset[i2] : _2(e2).removeAttr("data-" + name));
          var e2, i2, n2;
        });
      }});
      var L = /\S+/g;
      function T(t2) {
        return d(t2) && t2.match(L);
      }
      function $2(t2, e2) {
        return t2.classList ? t2.classList.contains(e2) : new RegExp("(^| )" + e2 + "( |$)", "gi").test(t2.className);
      }
      function B(t2, e2, i2) {
        t2.classList ? t2.classList.add(e2) : i2.indexOf(" " + e2 + " ") && (t2.className += " " + e2);
      }
      function D(t2, e2) {
        t2.classList ? t2.classList.remove(e2) : t2.className = t2.className.replace(e2, "");
      }
      y.extend({addClass: function(t2) {
        var n2 = T(t2);
        return n2 ? this.each(function(e2) {
          var i2 = " " + e2.className + " ";
          k(n2, function(t3) {
            B(e2, t3, i2);
          });
        }) : this;
      }, attr: function(e2, i2) {
        if (e2) {
          if (d(e2))
            return i2 === void 0 ? this[0] ? this[0].getAttribute ? this[0].getAttribute(e2) : this[0][e2] : void 0 : this.each(function(t3) {
              t3.setAttribute ? t3.setAttribute(e2, i2) : t3[e2] = i2;
            });
          for (var t2 in e2)
            this.attr(t2, e2[t2]);
          return this;
        }
      }, hasClass: function(t2) {
        var e2 = false, i2 = T(t2);
        return i2 && i2.length && this.each(function(t3) {
          return !(e2 = $2(t3, i2[0]));
        }), e2;
      }, prop: function(e2, i2) {
        if (d(e2))
          return i2 === void 0 ? this[0][e2] : this.each(function(t3) {
            t3[e2] = i2;
          });
        for (var t2 in e2)
          this.prop(t2, e2[t2]);
        return this;
      }, removeAttr: function(e2) {
        return this.each(function(t2) {
          t2.removeAttribute ? t2.removeAttribute(e2) : delete t2[e2];
        });
      }, removeClass: function(t2) {
        if (!arguments.length)
          return this.attr("class", "");
        var i2 = T(t2);
        return i2 ? this.each(function(e2) {
          k(i2, function(t3) {
            D(e2, t3);
          });
        }) : this;
      }, removeProp: function(e2) {
        return this.each(function(t2) {
          delete t2[e2];
        });
      }, toggleClass: function(t2, e2) {
        if (e2 !== void 0)
          return this[e2 ? "addClass" : "removeClass"](t2);
        var n2 = T(t2);
        return n2 ? this.each(function(e3) {
          var i2 = " " + e3.className + " ";
          k(n2, function(t3) {
            $2(e3, t3) ? D(e3, t3) : B(e3, t3, i2);
          });
        }) : this;
      }}), y.extend({add: function(t2, e2) {
        return C(_2.merge(this, _2(t2, e2)));
      }, each: function(t2) {
        return k(this, t2), this;
      }, eq: function(t2) {
        return _2(this.get(t2));
      }, filter: function(e2) {
        if (!e2)
          return this;
        var i2 = h(e2) ? e2 : w(e2);
        return _2(n.call(this, function(t2) {
          return i2(t2, e2);
        }));
      }, first: function() {
        return this.eq(0);
      }, get: function(t2) {
        return t2 === void 0 ? r.call(this) : t2 < 0 ? this[t2 + this.length] : this[t2];
      }, index: function(t2) {
        var e2 = t2 ? _2(t2)[0] : this[0], i2 = t2 ? this : _2(e2).parent().children();
        return r.call(i2).indexOf(e2);
      }, last: function() {
        return this.eq(-1);
      }});
      var S, I, A, R, H, P, W = (H = /(?:^\w|[A-Z]|\b\w)/g, P = /[\s-_]+/g, function(t2) {
        return t2.replace(H, function(t3, e2) {
          return t3[e2 === 0 ? "toLowerCase" : "toUpperCase"]();
        }).replace(P, "");
      }), j = (S = {}, I = document, A = I.createElement("div"), R = A.style, function(e2) {
        if (e2 = W(e2), S[e2])
          return S[e2];
        var t2 = e2.charAt(0).toUpperCase() + e2.slice(1), i2 = (e2 + " " + ["webkit", "moz", "ms", "o"].join(t2 + " ") + t2).split(" ");
        return k(i2, function(t3) {
          if (t3 in R)
            return S[t3] = e2 = S[e2] = t3, false;
        }), S[e2];
      });
      function F(t2, e2) {
        return parseInt(a.getComputedStyle(t2[0], null)[e2], 10) || 0;
      }
      function q(e2, i2, t2) {
        var n2, s2 = x(e2, "_cashEvents"), o2 = s2 && s2[i2];
        o2 && (t2 ? (e2.removeEventListener(i2, t2), 0 <= (n2 = o2.indexOf(t2)) && o2.splice(n2, 1)) : (k(o2, function(t3) {
          e2.removeEventListener(i2, t3);
        }), o2 = []));
      }
      function N(t2, e2) {
        return "&" + encodeURIComponent(t2) + "=" + encodeURIComponent(e2).replace(/%20/g, "+");
      }
      function z(t2) {
        var e2, i2, n2, s2 = t2.type;
        if (!s2)
          return null;
        switch (s2.toLowerCase()) {
          case "select-one":
            return 0 <= (n2 = (i2 = t2).selectedIndex) ? i2.options[n2].value : null;
          case "select-multiple":
            return e2 = [], k(t2.options, function(t3) {
              t3.selected && e2.push(t3.value);
            }), e2.length ? e2 : null;
          case "radio":
          case "checkbox":
            return t2.checked ? t2.value : null;
          default:
            return t2.value ? t2.value : null;
        }
      }
      function V(e2, i2, n2) {
        var t2 = d(i2);
        t2 || !i2.length ? k(e2, t2 ? function(t3) {
          return t3.insertAdjacentHTML(n2 ? "afterbegin" : "beforeend", i2);
        } : function(t3, e3) {
          return function(t4, e4, i3) {
            if (i3) {
              var n3 = t4.childNodes[0];
              t4.insertBefore(e4, n3);
            } else
              t4.appendChild(e4);
          }(t3, e3 === 0 ? i2 : i2.cloneNode(true), n2);
        }) : k(i2, function(t3) {
          return V(e2, t3, n2);
        });
      }
      _2.prefixedProp = j, _2.camelCase = W, y.extend({css: function(e2, i2) {
        if (d(e2))
          return e2 = j(e2), 1 < arguments.length ? this.each(function(t3) {
            return t3.style[e2] = i2;
          }) : a.getComputedStyle(this[0])[e2];
        for (var t2 in e2)
          this.css(t2, e2[t2]);
        return this;
      }}), k(["Width", "Height"], function(e2) {
        var t2 = e2.toLowerCase();
        y[t2] = function() {
          return this[0].getBoundingClientRect()[t2];
        }, y["inner" + e2] = function() {
          return this[0]["client" + e2];
        }, y["outer" + e2] = function(t3) {
          return this[0]["offset" + e2] + (t3 ? F(this, "margin" + (e2 === "Width" ? "Left" : "Top")) + F(this, "margin" + (e2 === "Width" ? "Right" : "Bottom")) : 0);
        };
      }), y.extend({off: function(e2, i2) {
        return this.each(function(t2) {
          return q(t2, e2, i2);
        });
      }, on: function(a2, i2, r2, l2) {
        var n2;
        if (!d(a2)) {
          for (var t2 in a2)
            this.on(t2, i2, a2[t2]);
          return this;
        }
        return h(i2) && (r2 = i2, i2 = null), a2 === "ready" ? (m(r2), this) : (i2 && (n2 = r2, r2 = function(t3) {
          for (var e2 = t3.target; !b(e2, i2); ) {
            if (e2 === this || e2 === null)
              return e2 = false;
            e2 = e2.parentNode;
          }
          e2 && n2.call(e2, t3);
        }), this.each(function(t3) {
          var e2, i3, n3, s2, o2 = r2;
          l2 && (o2 = function() {
            r2.apply(this, arguments), q(t3, a2, o2);
          }), i3 = a2, n3 = o2, (s2 = x(e2 = t3, "_cashEvents") || O(e2, "_cashEvents", {}))[i3] = s2[i3] || [], s2[i3].push(n3), e2.addEventListener(i3, n3);
        }));
      }, one: function(t2, e2, i2) {
        return this.on(t2, e2, i2, true);
      }, ready: m, trigger: function(t2, e2) {
        if (document.createEvent) {
          var i2 = document.createEvent("HTMLEvents");
          return i2.initEvent(t2, true, false), i2 = this.extend(i2, e2), this.each(function(t3) {
            return t3.dispatchEvent(i2);
          });
        }
      }}), y.extend({serialize: function() {
        var s2 = "";
        return k(this[0].elements || this, function(t2) {
          if (!t2.disabled && t2.tagName !== "FIELDSET") {
            var e2 = t2.name;
            switch (t2.type.toLowerCase()) {
              case "file":
              case "reset":
              case "submit":
              case "button":
                break;
              case "select-multiple":
                var i2 = z(t2);
                i2 !== null && k(i2, function(t3) {
                  s2 += N(e2, t3);
                });
                break;
              default:
                var n2 = z(t2);
                n2 !== null && (s2 += N(e2, n2));
            }
          }
        }), s2.substr(1);
      }, val: function(e2) {
        return e2 === void 0 ? z(this[0]) : this.each(function(t2) {
          return t2.value = e2;
        });
      }}), y.extend({after: function(t2) {
        return _2(t2).insertAfter(this), this;
      }, append: function(t2) {
        return V(this, t2), this;
      }, appendTo: function(t2) {
        return V(_2(t2), this), this;
      }, before: function(t2) {
        return _2(t2).insertBefore(this), this;
      }, clone: function() {
        return _2(this.map(function(t2) {
          return t2.cloneNode(true);
        }));
      }, empty: function() {
        return this.html(""), this;
      }, html: function(t2) {
        if (t2 === void 0)
          return this[0].innerHTML;
        var e2 = t2.nodeType ? t2[0].outerHTML : t2;
        return this.each(function(t3) {
          return t3.innerHTML = e2;
        });
      }, insertAfter: function(t2) {
        var s2 = this;
        return _2(t2).each(function(t3, e2) {
          var i2 = t3.parentNode, n2 = t3.nextSibling;
          s2.each(function(t4) {
            i2.insertBefore(e2 === 0 ? t4 : t4.cloneNode(true), n2);
          });
        }), this;
      }, insertBefore: function(t2) {
        var s2 = this;
        return _2(t2).each(function(e2, i2) {
          var n2 = e2.parentNode;
          s2.each(function(t3) {
            n2.insertBefore(i2 === 0 ? t3 : t3.cloneNode(true), e2);
          });
        }), this;
      }, prepend: function(t2) {
        return V(this, t2, true), this;
      }, prependTo: function(t2) {
        return V(_2(t2), this, true), this;
      }, remove: function() {
        return this.each(function(t2) {
          if (t2.parentNode)
            return t2.parentNode.removeChild(t2);
        });
      }, text: function(e2) {
        return e2 === void 0 ? this[0].textContent : this.each(function(t2) {
          return t2.textContent = e2;
        });
      }});
      var X = o.documentElement;
      return y.extend({position: function() {
        var t2 = this[0];
        return {left: t2.offsetLeft, top: t2.offsetTop};
      }, offset: function() {
        var t2 = this[0].getBoundingClientRect();
        return {top: t2.top + a.pageYOffset - X.clientTop, left: t2.left + a.pageXOffset - X.clientLeft};
      }, offsetParent: function() {
        return _2(this[0].offsetParent);
      }}), y.extend({children: function(e2) {
        var i2 = [];
        return this.each(function(t2) {
          s.apply(i2, t2.children);
        }), i2 = C(i2), e2 ? i2.filter(function(t2) {
          return b(t2, e2);
        }) : i2;
      }, closest: function(t2) {
        return !t2 || this.length < 1 ? _2() : this.is(t2) ? this.filter(t2) : this.parent().closest(t2);
      }, is: function(e2) {
        if (!e2)
          return false;
        var i2 = false, n2 = w(e2);
        return this.each(function(t2) {
          return !(i2 = n2(t2, e2));
        }), i2;
      }, find: function(e2) {
        if (!e2 || e2.nodeType)
          return _2(e2 && this.has(e2).length ? e2 : null);
        var i2 = [];
        return this.each(function(t2) {
          s.apply(i2, v(e2, t2));
        }), C(i2);
      }, has: function(e2) {
        var t2 = d(e2) ? function(t3) {
          return v(e2, t3).length !== 0;
        } : function(t3) {
          return t3.contains(e2);
        };
        return this.filter(t2);
      }, next: function() {
        return _2(this[0].nextElementSibling);
      }, not: function(e2) {
        if (!e2)
          return this;
        var i2 = w(e2);
        return this.filter(function(t2) {
          return !i2(t2, e2);
        });
      }, parent: function() {
        var e2 = [];
        return this.each(function(t2) {
          t2 && t2.parentNode && e2.push(t2.parentNode);
        }), C(e2);
      }, parents: function(e2) {
        var i2, n2 = [];
        return this.each(function(t2) {
          for (i2 = t2; i2 && i2.parentNode && i2 !== o.body.parentNode; )
            i2 = i2.parentNode, (!e2 || e2 && b(i2, e2)) && n2.push(i2);
        }), C(n2);
      }, prev: function() {
        return _2(this[0].previousElementSibling);
      }, siblings: function(t2) {
        var e2 = this.parent().children(t2), i2 = this[0];
        return e2.filter(function(t3) {
          return t3 !== i2;
        });
      }}), _2;
    }();
    var Component = function() {
      function s(t, e, i) {
        _classCallCheck(this, s), e instanceof Element || console.error(Error(e + " is not an HTML Element"));
        var n = t.getInstance(e);
        n && n.destroy(), this.el = e, this.$el = cash(e);
      }
      return _createClass(s, null, [{key: "init", value: function(t, e, i) {
        var n = null;
        if (e instanceof Element)
          n = new t(e, i);
        else if (e && (e.jquery || e.cash || e instanceof NodeList)) {
          for (var s2 = [], o = 0; o < e.length; o++)
            s2.push(new t(e[o], i));
          n = s2;
        }
        return n;
      }}]), s;
    }();
    !function(t) {
      t.Package ? M = {} : t.M = {}, M.jQueryLoaded = !!t.jQuery;
    }(window), typeof define == "function" && define.amd ? define("M", [], function() {
      return M;
    }) : typeof exports == "undefined" || exports.nodeType || (typeof module != "undefined" && !module.nodeType && module.exports && (exports = module.exports = M), exports.default = M), M.version = "1.0.0", M.keys = {TAB: 9, ENTER: 13, ESC: 27, ARROW_UP: 38, ARROW_DOWN: 40}, M.tabPressed = false, M.keyDown = false;
    var docHandleKeydown = function(t) {
      M.keyDown = true, t.which !== M.keys.TAB && t.which !== M.keys.ARROW_DOWN && t.which !== M.keys.ARROW_UP || (M.tabPressed = true);
    };
    var docHandleKeyup = function(t) {
      M.keyDown = false, t.which !== M.keys.TAB && t.which !== M.keys.ARROW_DOWN && t.which !== M.keys.ARROW_UP || (M.tabPressed = false);
    };
    var docHandleFocus = function(t) {
      M.keyDown && document.body.classList.add("keyboard-focused");
    };
    var docHandleBlur = function(t) {
      document.body.classList.remove("keyboard-focused");
    };
    document.addEventListener("keydown", docHandleKeydown, true), document.addEventListener("keyup", docHandleKeyup, true), document.addEventListener("focus", docHandleFocus, true), document.addEventListener("blur", docHandleBlur, true), M.initializeJqueryWrapper = function(n, s, o) {
      jQuery.fn[s] = function(e) {
        if (n.prototype[e]) {
          var i = Array.prototype.slice.call(arguments, 1);
          if (e.slice(0, 3) === "get") {
            var t = this.first()[0][o];
            return t[e].apply(t, i);
          }
          return this.each(function() {
            var t2 = this[o];
            t2[e].apply(t2, i);
          });
        }
        if (typeof e == "object" || !e)
          return n.init(this, e), this;
        jQuery.error("Method " + e + " does not exist on jQuery." + s);
      };
    }, M.AutoInit = function(t) {
      var e = t || document.body, i = {Autocomplete: e.querySelectorAll(".autocomplete:not(.no-autoinit)"), Carousel: e.querySelectorAll(".carousel:not(.no-autoinit)"), Chips: e.querySelectorAll(".chips:not(.no-autoinit)"), Collapsible: e.querySelectorAll(".collapsible:not(.no-autoinit)"), Datepicker: e.querySelectorAll(".datepicker:not(.no-autoinit)"), Dropdown: e.querySelectorAll(".dropdown-trigger:not(.no-autoinit)"), Materialbox: e.querySelectorAll(".materialboxed:not(.no-autoinit)"), Modal: e.querySelectorAll(".modal:not(.no-autoinit)"), Parallax: e.querySelectorAll(".parallax:not(.no-autoinit)"), Pushpin: e.querySelectorAll(".pushpin:not(.no-autoinit)"), ScrollSpy: e.querySelectorAll(".scrollspy:not(.no-autoinit)"), FormSelect: e.querySelectorAll("select:not(.no-autoinit)"), Sidenav: e.querySelectorAll(".sidenav:not(.no-autoinit)"), Tabs: e.querySelectorAll(".tabs:not(.no-autoinit)"), TapTarget: e.querySelectorAll(".tap-target:not(.no-autoinit)"), Timepicker: e.querySelectorAll(".timepicker:not(.no-autoinit)"), Tooltip: e.querySelectorAll(".tooltipped:not(.no-autoinit)"), FloatingActionButton: e.querySelectorAll(".fixed-action-btn:not(.no-autoinit)")};
      for (var n in i) {
        M[n].init(i[n]);
      }
    }, M.objectSelectorString = function(t) {
      return ((t.prop("tagName") || "") + (t.attr("id") || "") + (t.attr("class") || "")).replace(/\s/g, "");
    }, M.guid = function() {
      function t() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
      }
      return function() {
        return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t();
      };
    }(), M.escapeHash = function(t) {
      return t.replace(/(:|\.|\[|\]|,|=|\/)/g, "\\$1");
    }, M.elementOrParentIsFixed = function(t) {
      var e = $(t), i = e.add(e.parents()), n = false;
      return i.each(function() {
        if ($(this).css("position") === "fixed")
          return !(n = true);
      }), n;
    }, M.checkWithinContainer = function(t, e, i) {
      var n = {top: false, right: false, bottom: false, left: false}, s = t.getBoundingClientRect(), o = t === document.body ? Math.max(s.bottom, window.innerHeight) : s.bottom, a = t.scrollLeft, r = t.scrollTop, l = e.left - a, h = e.top - r;
      return (l < s.left + i || l < i) && (n.left = true), (l + e.width > s.right - i || l + e.width > window.innerWidth - i) && (n.right = true), (h < s.top + i || h < i) && (n.top = true), (h + e.height > o - i || h + e.height > window.innerHeight - i) && (n.bottom = true), n;
    }, M.checkPossibleAlignments = function(t, e, i, n) {
      var s = {top: true, right: true, bottom: true, left: true, spaceOnTop: null, spaceOnRight: null, spaceOnBottom: null, spaceOnLeft: null}, o = getComputedStyle(e).overflow === "visible", a = e.getBoundingClientRect(), r = Math.min(a.height, window.innerHeight), l = Math.min(a.width, window.innerWidth), h = t.getBoundingClientRect(), d = e.scrollLeft, u = e.scrollTop, c = i.left - d, p = i.top - u, v = i.top + h.height - u;
      return s.spaceOnRight = o ? window.innerWidth - (h.left + i.width) : l - (c + i.width), s.spaceOnRight < 0 && (s.left = false), s.spaceOnLeft = o ? h.right - i.width : c - i.width + h.width, s.spaceOnLeft < 0 && (s.right = false), s.spaceOnBottom = o ? window.innerHeight - (h.top + i.height + n) : r - (p + i.height + n), s.spaceOnBottom < 0 && (s.top = false), s.spaceOnTop = o ? h.bottom - (i.height + n) : v - (i.height - n), s.spaceOnTop < 0 && (s.bottom = false), s;
    }, M.getOverflowParent = function(t) {
      return t == null ? null : t === document.body || getComputedStyle(t).overflow !== "visible" ? t : M.getOverflowParent(t.parentElement);
    }, M.getIdFromTrigger = function(t) {
      var e = t.getAttribute("data-target");
      return e || (e = (e = t.getAttribute("href")) ? e.slice(1) : ""), e;
    }, M.getDocumentScrollTop = function() {
      return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    }, M.getDocumentScrollLeft = function() {
      return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
    };
    var getTime = Date.now || function() {
      return new Date().getTime();
    };
    M.throttle = function(i, n, s) {
      var o = void 0, a = void 0, r = void 0, l = null, h = 0;
      s || (s = {});
      var d = function() {
        h = s.leading === false ? 0 : getTime(), l = null, r = i.apply(o, a), o = a = null;
      };
      return function() {
        var t = getTime();
        h || s.leading !== false || (h = t);
        var e = n - (t - h);
        return o = this, a = arguments, e <= 0 ? (clearTimeout(l), l = null, h = t, r = i.apply(o, a), o = a = null) : l || s.trailing === false || (l = setTimeout(d, e)), r;
      };
    };
    var $jscomp = {scope: {}};
    $jscomp.defineProperty = typeof Object.defineProperties == "function" ? Object.defineProperty : function(t, e, i) {
      if (i.get || i.set)
        throw new TypeError("ES3 does not support getters and setters.");
      t != Array.prototype && t != Object.prototype && (t[e] = i.value);
    }, $jscomp.getGlobal = function(t) {
      return typeof window != "undefined" && window === t ? t : typeof global != "undefined" && global != null ? global : t;
    }, $jscomp.global = $jscomp.getGlobal(exports), $jscomp.SYMBOL_PREFIX = "jscomp_symbol_", $jscomp.initSymbol = function() {
      $jscomp.initSymbol = function() {
      }, $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
    }, $jscomp.symbolCounter_ = 0, $jscomp.Symbol = function(t) {
      return $jscomp.SYMBOL_PREFIX + (t || "") + $jscomp.symbolCounter_++;
    }, $jscomp.initSymbolIterator = function() {
      $jscomp.initSymbol();
      var t = $jscomp.global.Symbol.iterator;
      t || (t = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator")), typeof Array.prototype[t] != "function" && $jscomp.defineProperty(Array.prototype, t, {configurable: true, writable: true, value: function() {
        return $jscomp.arrayIterator(this);
      }}), $jscomp.initSymbolIterator = function() {
      };
    }, $jscomp.arrayIterator = function(t) {
      var e = 0;
      return $jscomp.iteratorPrototype(function() {
        return e < t.length ? {done: false, value: t[e++]} : {done: true};
      });
    }, $jscomp.iteratorPrototype = function(t) {
      return $jscomp.initSymbolIterator(), (t = {next: t})[$jscomp.global.Symbol.iterator] = function() {
        return this;
      }, t;
    }, $jscomp.array = $jscomp.array || {}, $jscomp.iteratorFromArray = function(e, i) {
      $jscomp.initSymbolIterator(), e instanceof String && (e += "");
      var n = 0, s = {next: function() {
        if (n < e.length) {
          var t = n++;
          return {value: i(t, e[t]), done: false};
        }
        return s.next = function() {
          return {done: true, value: void 0};
        }, s.next();
      }};
      return s[Symbol.iterator] = function() {
        return s;
      }, s;
    }, $jscomp.polyfill = function(t, e, i, n) {
      if (e) {
        for (i = $jscomp.global, t = t.split("."), n = 0; n < t.length - 1; n++) {
          var s = t[n];
          s in i || (i[s] = {}), i = i[s];
        }
        (e = e(n = i[t = t[t.length - 1]])) != n && e != null && $jscomp.defineProperty(i, t, {configurable: true, writable: true, value: e});
      }
    }, $jscomp.polyfill("Array.prototype.keys", function(t) {
      return t || function() {
        return $jscomp.iteratorFromArray(this, function(t2) {
          return t2;
        });
      };
    }, "es6-impl", "es3");
    var $jscomp$this = exports;
    M.anime = function() {
      function s(t) {
        if (!B.col(t))
          try {
            return document.querySelectorAll(t);
          } catch (t2) {
          }
      }
      function b(t, e) {
        for (var i2 = t.length, n2 = 2 <= arguments.length ? e : void 0, s2 = [], o2 = 0; o2 < i2; o2++)
          if (o2 in t) {
            var a2 = t[o2];
            e.call(n2, a2, o2, t) && s2.push(a2);
          }
        return s2;
      }
      function d(t) {
        return t.reduce(function(t2, e) {
          return t2.concat(B.arr(e) ? d(e) : e);
        }, []);
      }
      function o(t) {
        return B.arr(t) ? t : (B.str(t) && (t = s(t) || t), t instanceof NodeList || t instanceof HTMLCollection ? [].slice.call(t) : [t]);
      }
      function a(t, e) {
        return t.some(function(t2) {
          return t2 === e;
        });
      }
      function r(t) {
        var e, i2 = {};
        for (e in t)
          i2[e] = t[e];
        return i2;
      }
      function u(t, e) {
        var i2, n2 = r(t);
        for (i2 in t)
          n2[i2] = e.hasOwnProperty(i2) ? e[i2] : t[i2];
        return n2;
      }
      function c(t, e) {
        var i2, n2 = r(t);
        for (i2 in e)
          n2[i2] = B.und(t[i2]) ? e[i2] : t[i2];
        return n2;
      }
      function l(t) {
        if (t = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t))
          return t[2];
      }
      function h(t, e) {
        return B.fnc(t) ? t(e.target, e.id, e.total) : t;
      }
      function w(t, e) {
        if (e in t.style)
          return getComputedStyle(t).getPropertyValue(e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0";
      }
      function p(t, e) {
        return B.dom(t) && a($2, e) ? "transform" : B.dom(t) && (t.getAttribute(e) || B.svg(t) && t[e]) ? "attribute" : B.dom(t) && e !== "transform" && w(t, e) ? "css" : t[e] != null ? "object" : void 0;
      }
      function v(t, e) {
        switch (p(t, e)) {
          case "transform":
            return function(t2, i2) {
              var e2, n2 = -1 < (e2 = i2).indexOf("translate") || e2 === "perspective" ? "px" : -1 < e2.indexOf("rotate") || -1 < e2.indexOf("skew") ? "deg" : void 0, n2 = -1 < i2.indexOf("scale") ? 1 : 0 + n2;
              if (!(t2 = t2.style.transform))
                return n2;
              for (var s2 = [], o2 = [], a2 = [], r2 = /(\w+)\((.+?)\)/g; s2 = r2.exec(t2); )
                o2.push(s2[1]), a2.push(s2[2]);
              return (t2 = b(a2, function(t3, e3) {
                return o2[e3] === i2;
              })).length ? t2[0] : n2;
            }(t, e);
          case "css":
            return w(t, e);
          case "attribute":
            return t.getAttribute(e);
        }
        return t[e] || 0;
      }
      function f(t, e) {
        var i2 = /^(\*=|\+=|-=)/.exec(t);
        if (!i2)
          return t;
        var n2 = l(t) || 0;
        switch (e = parseFloat(e), t = parseFloat(t.replace(i2[0], "")), i2[0][0]) {
          case "+":
            return e + t + n2;
          case "-":
            return e - t + n2;
          case "*":
            return e * t + n2;
        }
      }
      function m(t, e) {
        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
      }
      function i(t) {
        t = t.points;
        for (var e, i2 = 0, n2 = 0; n2 < t.numberOfItems; n2++) {
          var s2 = t.getItem(n2);
          0 < n2 && (i2 += m(e, s2)), e = s2;
        }
        return i2;
      }
      function g(t) {
        if (t.getTotalLength)
          return t.getTotalLength();
        switch (t.tagName.toLowerCase()) {
          case "circle":
            return 2 * Math.PI * t.getAttribute("r");
          case "rect":
            return 2 * t.getAttribute("width") + 2 * t.getAttribute("height");
          case "line":
            return m({x: t.getAttribute("x1"), y: t.getAttribute("y1")}, {x: t.getAttribute("x2"), y: t.getAttribute("y2")});
          case "polyline":
            return i(t);
          case "polygon":
            var e = t.points;
            return i(t) + m(e.getItem(e.numberOfItems - 1), e.getItem(0));
        }
      }
      function C(e, i2) {
        function t(t2) {
          return t2 = t2 === void 0 ? 0 : t2, e.el.getPointAtLength(1 <= i2 + t2 ? i2 + t2 : 0);
        }
        var n2 = t(), s2 = t(-1), o2 = t(1);
        switch (e.property) {
          case "x":
            return n2.x;
          case "y":
            return n2.y;
          case "angle":
            return 180 * Math.atan2(o2.y - s2.y, o2.x - s2.x) / Math.PI;
        }
      }
      function _2(t, e) {
        var i2, n2 = /-?\d*\.?\d+/g;
        if (i2 = B.pth(t) ? t.totalLength : t, B.col(i2))
          if (B.rgb(i2)) {
            var s2 = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(i2);
            i2 = s2 ? "rgba(" + s2[1] + ",1)" : i2;
          } else
            i2 = B.hex(i2) ? function(t2) {
              t2 = t2.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(t3, e3, i4, n3) {
                return e3 + e3 + i4 + i4 + n3 + n3;
              });
              var e2 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t2);
              t2 = parseInt(e2[1], 16);
              var i3 = parseInt(e2[2], 16), e2 = parseInt(e2[3], 16);
              return "rgba(" + t2 + "," + i3 + "," + e2 + ",1)";
            }(i2) : B.hsl(i2) ? function(t2) {
              function e2(t3, e3, i4) {
                return i4 < 0 && (i4 += 1), 1 < i4 && --i4, i4 < 1 / 6 ? t3 + 6 * (e3 - t3) * i4 : i4 < 0.5 ? e3 : i4 < 2 / 3 ? t3 + (e3 - t3) * (2 / 3 - i4) * 6 : t3;
              }
              var i3 = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t2) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t2);
              t2 = parseInt(i3[1]) / 360;
              var n3 = parseInt(i3[2]) / 100, s3 = parseInt(i3[3]) / 100, i3 = i3[4] || 1;
              if (n3 == 0)
                s3 = n3 = t2 = s3;
              else {
                var o2 = s3 < 0.5 ? s3 * (1 + n3) : s3 + n3 - s3 * n3, a2 = 2 * s3 - o2, s3 = e2(a2, o2, t2 + 1 / 3), n3 = e2(a2, o2, t2);
                t2 = e2(a2, o2, t2 - 1 / 3);
              }
              return "rgba(" + 255 * s3 + "," + 255 * n3 + "," + 255 * t2 + "," + i3 + ")";
            }(i2) : void 0;
        else
          s2 = (s2 = l(i2)) ? i2.substr(0, i2.length - s2.length) : i2, i2 = e && !/\s/g.test(i2) ? s2 + e : s2;
        return {original: i2 += "", numbers: i2.match(n2) ? i2.match(n2).map(Number) : [0], strings: B.str(t) || e ? i2.split(n2) : []};
      }
      function y(t) {
        return b(t = t ? d(B.arr(t) ? t.map(o) : o(t)) : [], function(t2, e, i2) {
          return i2.indexOf(t2) === e;
        });
      }
      function k(t, i2) {
        var e = r(i2);
        if (B.arr(t)) {
          var n2 = t.length;
          n2 !== 2 || B.obj(t[0]) ? B.fnc(i2.duration) || (e.duration = i2.duration / n2) : t = {value: t};
        }
        return o(t).map(function(t2, e2) {
          return e2 = e2 ? 0 : i2.delay, t2 = B.obj(t2) && !B.pth(t2) ? t2 : {value: t2}, B.und(t2.delay) && (t2.delay = e2), t2;
        }).map(function(t2) {
          return c(t2, e);
        });
      }
      function E(o2, a2) {
        var r2;
        return o2.tweens.map(function(t) {
          var e = (t = function(t2, e2) {
            var i3, n3 = {};
            for (i3 in t2) {
              var s3 = h(t2[i3], e2);
              B.arr(s3) && (s3 = s3.map(function(t3) {
                return h(t3, e2);
              })).length === 1 && (s3 = s3[0]), n3[i3] = s3;
            }
            return n3.duration = parseFloat(n3.duration), n3.delay = parseFloat(n3.delay), n3;
          }(t, a2)).value, i2 = v(a2.target, o2.name), n2 = r2 ? r2.to.original : i2, n2 = B.arr(e) ? e[0] : n2, s2 = f(B.arr(e) ? e[1] : e, n2), i2 = l(s2) || l(n2) || l(i2);
          return t.from = _2(n2, i2), t.to = _2(s2, i2), t.start = r2 ? r2.end : o2.offset, t.end = t.start + t.delay + t.duration, t.easing = function(t2) {
            return B.arr(t2) ? D.apply(this, t2) : S[t2];
          }(t.easing), t.elasticity = (1e3 - Math.min(Math.max(t.elasticity, 1), 999)) / 1e3, t.isPath = B.pth(e), t.isColor = B.col(t.from.original), t.isColor && (t.round = 1), r2 = t;
        });
      }
      function M2(e, t, i2, n2) {
        var s2 = e === "delay";
        return t.length ? (s2 ? Math.min : Math.max).apply(Math, t.map(function(t2) {
          return t2[e];
        })) : s2 ? n2.delay : i2.offset + n2.delay + n2.duration;
      }
      function n(t) {
        var e, i2, n2, s2, o2 = u(L, t), a2 = u(T, t), r2 = (i2 = t.targets, (n2 = y(i2)).map(function(t2, e2) {
          return {target: t2, id: e2, total: n2.length};
        })), l2 = [], h2 = c(o2, a2);
        for (e in t)
          h2.hasOwnProperty(e) || e === "targets" || l2.push({name: e, offset: h2.offset, tweens: k(t[e], a2)});
        return s2 = l2, t = b(d(r2.map(function(n3) {
          return s2.map(function(t2) {
            var e2 = p(n3.target, t2.name);
            if (e2) {
              var i3 = E(t2, n3);
              t2 = {type: e2, property: t2.name, animatable: n3, tweens: i3, duration: i3[i3.length - 1].end, delay: i3[0].delay};
            } else
              t2 = void 0;
            return t2;
          });
        })), function(t2) {
          return !B.und(t2);
        }), c(o2, {children: [], animatables: r2, animations: t, duration: M2("duration", t, o2, a2), delay: M2("delay", t, o2, a2)});
      }
      function O(t) {
        function d2() {
          return window.Promise && new Promise(function(t2) {
            return _3 = t2;
          });
        }
        function u2(t2) {
          return k2.reversed ? k2.duration - t2 : t2;
        }
        function c2(e2) {
          for (var t2 = 0, i2 = {}, n2 = k2.animations, s2 = n2.length; t2 < s2; ) {
            var o2 = n2[t2], a2 = o2.animatable, r2 = o2.tweens, l2 = r2.length - 1, h2 = r2[l2];
            l2 && (h2 = b(r2, function(t3) {
              return e2 < t3.end;
            })[0] || h2);
            for (var r2 = Math.min(Math.max(e2 - h2.start - h2.delay, 0), h2.duration) / h2.duration, d3 = isNaN(r2) ? 1 : h2.easing(r2, h2.elasticity), r2 = h2.to.strings, u3 = h2.round, l2 = [], c3 = void 0, c3 = h2.to.numbers.length, p3 = 0; p3 < c3; p3++) {
              var v3 = void 0, v3 = h2.to.numbers[p3], f3 = h2.from.numbers[p3], v3 = h2.isPath ? C(h2.value, d3 * v3) : f3 + d3 * (v3 - f3);
              u3 && (h2.isColor && 2 < p3 || (v3 = Math.round(v3 * u3) / u3)), l2.push(v3);
            }
            if (h2 = r2.length)
              for (c3 = r2[0], d3 = 0; d3 < h2; d3++)
                u3 = r2[d3 + 1], p3 = l2[d3], isNaN(p3) || (c3 = u3 ? c3 + (p3 + u3) : c3 + (p3 + " "));
            else
              c3 = l2[0];
            I[o2.type](a2.target, o2.property, c3, i2, a2.id), o2.currentValue = c3, t2++;
          }
          if (t2 = Object.keys(i2).length)
            for (n2 = 0; n2 < t2; n2++)
              x || (x = w(document.body, "transform") ? "transform" : "-webkit-transform"), k2.animatables[n2].target.style[x] = i2[n2].join(" ");
          k2.currentTime = e2, k2.progress = e2 / k2.duration * 100;
        }
        function p2(t2) {
          k2[t2] && k2[t2](k2);
        }
        function v2() {
          k2.remaining && k2.remaining !== true && k2.remaining--;
        }
        function e(t2) {
          var e2 = k2.duration, i2 = k2.offset, n2 = i2 + k2.delay, s2 = k2.currentTime, o2 = k2.reversed, a2 = u2(t2);
          if (k2.children.length) {
            var r2 = k2.children, l2 = r2.length;
            if (a2 >= k2.currentTime)
              for (var h2 = 0; h2 < l2; h2++)
                r2[h2].seek(a2);
            else
              for (; l2--; )
                r2[l2].seek(a2);
          }
          (n2 <= a2 || !e2) && (k2.began || (k2.began = true, p2("begin")), p2("run")), i2 < a2 && a2 < e2 ? c2(a2) : (a2 <= i2 && s2 !== 0 && (c2(0), o2 && v2()), (e2 <= a2 && s2 !== e2 || !e2) && (c2(e2), o2 || v2())), p2("update"), e2 <= t2 && (k2.remaining ? (m2 = f2, k2.direction === "alternate" && (k2.reversed = !k2.reversed)) : (k2.pause(), k2.completed || (k2.completed = true, p2("complete"), "Promise" in window && (_3(), y2 = d2()))), g2 = 0);
        }
        t = t === void 0 ? {} : t;
        var f2, m2, g2 = 0, _3 = null, y2 = d2(), k2 = n(t);
        return k2.reset = function() {
          var t2 = k2.direction, e2 = k2.loop;
          for (k2.currentTime = 0, k2.progress = 0, k2.paused = true, k2.began = false, k2.completed = false, k2.reversed = t2 === "reverse", k2.remaining = t2 === "alternate" && e2 === 1 ? 2 : e2, c2(0), t2 = k2.children.length; t2--; )
            k2.children[t2].reset();
        }, k2.tick = function(t2) {
          f2 = t2, m2 || (m2 = f2), e((g2 + f2 - m2) * O.speed);
        }, k2.seek = function(t2) {
          e(u2(t2));
        }, k2.pause = function() {
          var t2 = A.indexOf(k2);
          -1 < t2 && A.splice(t2, 1), k2.paused = true;
        }, k2.play = function() {
          k2.paused && (k2.paused = false, m2 = 0, g2 = u2(k2.currentTime), A.push(k2), R || H());
        }, k2.reverse = function() {
          k2.reversed = !k2.reversed, m2 = 0, g2 = u2(k2.currentTime);
        }, k2.restart = function() {
          k2.pause(), k2.reset(), k2.play();
        }, k2.finished = y2, k2.reset(), k2.autoplay && k2.play(), k2;
      }
      var x, L = {update: void 0, begin: void 0, run: void 0, complete: void 0, loop: 1, direction: "normal", autoplay: true, offset: 0}, T = {duration: 1e3, delay: 0, easing: "easeOutElastic", elasticity: 500, round: 0}, $2 = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "), B = {arr: function(t) {
        return Array.isArray(t);
      }, obj: function(t) {
        return -1 < Object.prototype.toString.call(t).indexOf("Object");
      }, pth: function(t) {
        return B.obj(t) && t.hasOwnProperty("totalLength");
      }, svg: function(t) {
        return t instanceof SVGElement;
      }, dom: function(t) {
        return t.nodeType || B.svg(t);
      }, str: function(t) {
        return typeof t == "string";
      }, fnc: function(t) {
        return typeof t == "function";
      }, und: function(t) {
        return t === void 0;
      }, hex: function(t) {
        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t);
      }, rgb: function(t) {
        return /^rgb/.test(t);
      }, hsl: function(t) {
        return /^hsl/.test(t);
      }, col: function(t) {
        return B.hex(t) || B.rgb(t) || B.hsl(t);
      }}, D = function() {
        function u2(t, e, i2) {
          return (((1 - 3 * i2 + 3 * e) * t + (3 * i2 - 6 * e)) * t + 3 * e) * t;
        }
        return function(a2, r2, l2, h2) {
          if (0 <= a2 && a2 <= 1 && 0 <= l2 && l2 <= 1) {
            var d2 = new Float32Array(11);
            if (a2 !== r2 || l2 !== h2)
              for (var t = 0; t < 11; ++t)
                d2[t] = u2(0.1 * t, a2, l2);
            return function(t2) {
              if (a2 === r2 && l2 === h2)
                return t2;
              if (t2 === 0)
                return 0;
              if (t2 === 1)
                return 1;
              for (var e = 0, i2 = 1; i2 !== 10 && d2[i2] <= t2; ++i2)
                e += 0.1;
              var i2 = e + (t2 - d2[--i2]) / (d2[i2 + 1] - d2[i2]) * 0.1, n2 = 3 * (1 - 3 * l2 + 3 * a2) * i2 * i2 + 2 * (3 * l2 - 6 * a2) * i2 + 3 * a2;
              if (1e-3 <= n2) {
                for (e = 0; e < 4 && (n2 = 3 * (1 - 3 * l2 + 3 * a2) * i2 * i2 + 2 * (3 * l2 - 6 * a2) * i2 + 3 * a2) != 0; ++e)
                  var s2 = u2(i2, a2, l2) - t2, i2 = i2 - s2 / n2;
                t2 = i2;
              } else if (n2 === 0)
                t2 = i2;
              else {
                for (var i2 = e, e = e + 0.1, o2 = 0; 0 < (n2 = u2(s2 = i2 + (e - i2) / 2, a2, l2) - t2) ? e = s2 : i2 = s2, 1e-7 < Math.abs(n2) && ++o2 < 10; )
                  ;
                t2 = s2;
              }
              return u2(t2, r2, h2);
            };
          }
        };
      }(), S = function() {
        function i2(t2, e2) {
          return t2 === 0 || t2 === 1 ? t2 : -Math.pow(2, 10 * (t2 - 1)) * Math.sin(2 * (t2 - 1 - e2 / (2 * Math.PI) * Math.asin(1)) * Math.PI / e2);
        }
        var t, n2 = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "), e = {In: [[0.55, 0.085, 0.68, 0.53], [0.55, 0.055, 0.675, 0.19], [0.895, 0.03, 0.685, 0.22], [0.755, 0.05, 0.855, 0.06], [0.47, 0, 0.745, 0.715], [0.95, 0.05, 0.795, 0.035], [0.6, 0.04, 0.98, 0.335], [0.6, -0.28, 0.735, 0.045], i2], Out: [[0.25, 0.46, 0.45, 0.94], [0.215, 0.61, 0.355, 1], [0.165, 0.84, 0.44, 1], [0.23, 1, 0.32, 1], [0.39, 0.575, 0.565, 1], [0.19, 1, 0.22, 1], [0.075, 0.82, 0.165, 1], [0.175, 0.885, 0.32, 1.275], function(t2, e2) {
          return 1 - i2(1 - t2, e2);
        }], InOut: [[0.455, 0.03, 0.515, 0.955], [0.645, 0.045, 0.355, 1], [0.77, 0, 0.175, 1], [0.86, 0, 0.07, 1], [0.445, 0.05, 0.55, 0.95], [1, 0, 0, 1], [0.785, 0.135, 0.15, 0.86], [0.68, -0.55, 0.265, 1.55], function(t2, e2) {
          return t2 < 0.5 ? i2(2 * t2, e2) / 2 : 1 - i2(-2 * t2 + 2, e2) / 2;
        }]}, s2 = {linear: D(0.25, 0.25, 0.75, 0.75)}, o2 = {};
        for (t in e)
          o2.type = t, e[o2.type].forEach(function(i3) {
            return function(t2, e2) {
              s2["ease" + i3.type + n2[e2]] = B.fnc(t2) ? t2 : D.apply($jscomp$this, t2);
            };
          }(o2)), o2 = {type: o2.type};
        return s2;
      }(), I = {css: function(t, e, i2) {
        return t.style[e] = i2;
      }, attribute: function(t, e, i2) {
        return t.setAttribute(e, i2);
      }, object: function(t, e, i2) {
        return t[e] = i2;
      }, transform: function(t, e, i2, n2, s2) {
        n2[s2] || (n2[s2] = []), n2[s2].push(e + "(" + i2 + ")");
      }}, A = [], R = 0, H = function() {
        function n2() {
          R = requestAnimationFrame(t);
        }
        function t(t2) {
          var e = A.length;
          if (e) {
            for (var i2 = 0; i2 < e; )
              A[i2] && A[i2].tick(t2), i2++;
            n2();
          } else
            cancelAnimationFrame(R), R = 0;
        }
        return n2;
      }();
      return O.version = "2.2.0", O.speed = 1, O.running = A, O.remove = function(t) {
        t = y(t);
        for (var e = A.length; e--; )
          for (var i2 = A[e], n2 = i2.animations, s2 = n2.length; s2--; )
            a(t, n2[s2].animatable.target) && (n2.splice(s2, 1), n2.length || i2.pause());
      }, O.getValue = v, O.path = function(t, e) {
        var i2 = B.str(t) ? s(t)[0] : t, n2 = e || 100;
        return function(t2) {
          return {el: i2, property: t2, totalLength: g(i2) * (n2 / 100)};
        };
      }, O.setDashoffset = function(t) {
        var e = g(t);
        return t.setAttribute("stroke-dasharray", e), e;
      }, O.bezier = D, O.easings = S, O.timeline = function(n2) {
        var s2 = O(n2);
        return s2.pause(), s2.duration = 0, s2.add = function(t) {
          return s2.children.forEach(function(t2) {
            t2.began = true, t2.completed = true;
          }), o(t).forEach(function(t2) {
            var e = c(t2, u(T, n2 || {}));
            e.targets = e.targets || n2.targets, t2 = s2.duration;
            var i2 = e.offset;
            e.autoplay = false, e.direction = s2.direction, e.offset = B.und(i2) ? t2 : f(i2, t2), s2.began = true, s2.completed = true, s2.seek(e.offset), (e = O(e)).began = true, e.completed = true, e.duration > t2 && (s2.duration = e.duration), s2.children.push(e);
          }), s2.seek(0), s2.reset(), s2.autoplay && s2.restart(), s2;
        }, s2;
      }, O.random = function(t, e) {
        return Math.floor(Math.random() * (e - t + 1)) + t;
      }, O;
    }(), function(r, l) {
      "use strict";
      var e = {accordion: true, onOpenStart: void 0, onOpenEnd: void 0, onCloseStart: void 0, onCloseEnd: void 0, inDuration: 300, outDuration: 300}, t = function(t2) {
        function s(t3, e2) {
          _classCallCheck(this, s);
          var i = _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, s, t3, e2));
          (i.el.M_Collapsible = i).options = r.extend({}, s.defaults, e2), i.$headers = i.$el.children("li").children(".collapsible-header"), i.$headers.attr("tabindex", 0), i._setupEventHandlers();
          var n = i.$el.children("li.active").children(".collapsible-body");
          return i.options.accordion ? n.first().css("display", "block") : n.css("display", "block"), i;
        }
        return _inherits(s, Component), _createClass(s, [{key: "destroy", value: function() {
          this._removeEventHandlers(), this.el.M_Collapsible = void 0;
        }}, {key: "_setupEventHandlers", value: function() {
          var e2 = this;
          this._handleCollapsibleClickBound = this._handleCollapsibleClick.bind(this), this._handleCollapsibleKeydownBound = this._handleCollapsibleKeydown.bind(this), this.el.addEventListener("click", this._handleCollapsibleClickBound), this.$headers.each(function(t3) {
            t3.addEventListener("keydown", e2._handleCollapsibleKeydownBound);
          });
        }}, {key: "_removeEventHandlers", value: function() {
          var e2 = this;
          this.el.removeEventListener("click", this._handleCollapsibleClickBound), this.$headers.each(function(t3) {
            t3.removeEventListener("keydown", e2._handleCollapsibleKeydownBound);
          });
        }}, {key: "_handleCollapsibleClick", value: function(t3) {
          var e2 = r(t3.target).closest(".collapsible-header");
          if (t3.target && e2.length) {
            var i = e2.closest(".collapsible");
            if (i[0] === this.el) {
              var n = e2.closest("li"), s2 = i.children("li"), o = n[0].classList.contains("active"), a = s2.index(n);
              o ? this.close(a) : this.open(a);
            }
          }
        }}, {key: "_handleCollapsibleKeydown", value: function(t3) {
          t3.keyCode === 13 && this._handleCollapsibleClickBound(t3);
        }}, {key: "_animateIn", value: function(t3) {
          var e2 = this, i = this.$el.children("li").eq(t3);
          if (i.length) {
            var n = i.children(".collapsible-body");
            l.remove(n[0]), n.css({display: "block", overflow: "hidden", height: 0, paddingTop: "", paddingBottom: ""});
            var s2 = n.css("padding-top"), o = n.css("padding-bottom"), a = n[0].scrollHeight;
            n.css({paddingTop: 0, paddingBottom: 0}), l({targets: n[0], height: a, paddingTop: s2, paddingBottom: o, duration: this.options.inDuration, easing: "easeInOutCubic", complete: function(t4) {
              n.css({overflow: "", paddingTop: "", paddingBottom: "", height: ""}), typeof e2.options.onOpenEnd == "function" && e2.options.onOpenEnd.call(e2, i[0]);
            }});
          }
        }}, {key: "_animateOut", value: function(t3) {
          var e2 = this, i = this.$el.children("li").eq(t3);
          if (i.length) {
            var n = i.children(".collapsible-body");
            l.remove(n[0]), n.css("overflow", "hidden"), l({targets: n[0], height: 0, paddingTop: 0, paddingBottom: 0, duration: this.options.outDuration, easing: "easeInOutCubic", complete: function() {
              n.css({height: "", overflow: "", padding: "", display: ""}), typeof e2.options.onCloseEnd == "function" && e2.options.onCloseEnd.call(e2, i[0]);
            }});
          }
        }}, {key: "open", value: function(t3) {
          var i = this, e2 = this.$el.children("li").eq(t3);
          if (e2.length && !e2[0].classList.contains("active")) {
            if (typeof this.options.onOpenStart == "function" && this.options.onOpenStart.call(this, e2[0]), this.options.accordion) {
              var n = this.$el.children("li");
              this.$el.children("li.active").each(function(t4) {
                var e3 = n.index(r(t4));
                i.close(e3);
              });
            }
            e2[0].classList.add("active"), this._animateIn(t3);
          }
        }}, {key: "close", value: function(t3) {
          var e2 = this.$el.children("li").eq(t3);
          e2.length && e2[0].classList.contains("active") && (typeof this.options.onCloseStart == "function" && this.options.onCloseStart.call(this, e2[0]), e2[0].classList.remove("active"), this._animateOut(t3));
        }}], [{key: "init", value: function(t3, e2) {
          return _get(s.__proto__ || Object.getPrototypeOf(s), "init", this).call(this, this, t3, e2);
        }}, {key: "getInstance", value: function(t3) {
          return (t3.jquery ? t3[0] : t3).M_Collapsible;
        }}, {key: "defaults", get: function() {
          return e;
        }}]), s;
      }();
      M.Collapsible = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "collapsible", "M_Collapsible");
    }(cash, M.anime), function(h, i) {
      "use strict";
      var e = {alignment: "left", autoFocus: true, constrainWidth: true, container: null, coverTrigger: true, closeOnClick: true, hover: false, inDuration: 150, outDuration: 250, onOpenStart: null, onOpenEnd: null, onCloseStart: null, onCloseEnd: null, onItemClick: null}, t = function(t2) {
        function n(t3, e2) {
          _classCallCheck(this, n);
          var i2 = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t3, e2));
          return i2.el.M_Dropdown = i2, n._dropdowns.push(i2), i2.id = M.getIdFromTrigger(t3), i2.dropdownEl = document.getElementById(i2.id), i2.$dropdownEl = h(i2.dropdownEl), i2.options = h.extend({}, n.defaults, e2), i2.isOpen = false, i2.isScrollable = false, i2.isTouchMoving = false, i2.focusedIndex = -1, i2.filterQuery = [], i2.options.container ? h(i2.options.container).append(i2.dropdownEl) : i2.$el.after(i2.dropdownEl), i2._makeDropdownFocusable(), i2._resetFilterQueryBound = i2._resetFilterQuery.bind(i2), i2._handleDocumentClickBound = i2._handleDocumentClick.bind(i2), i2._handleDocumentTouchmoveBound = i2._handleDocumentTouchmove.bind(i2), i2._handleDropdownClickBound = i2._handleDropdownClick.bind(i2), i2._handleDropdownKeydownBound = i2._handleDropdownKeydown.bind(i2), i2._handleTriggerKeydownBound = i2._handleTriggerKeydown.bind(i2), i2._setupEventHandlers(), i2;
        }
        return _inherits(n, Component), _createClass(n, [{key: "destroy", value: function() {
          this._resetDropdownStyles(), this._removeEventHandlers(), n._dropdowns.splice(n._dropdowns.indexOf(this), 1), this.el.M_Dropdown = void 0;
        }}, {key: "_setupEventHandlers", value: function() {
          this.el.addEventListener("keydown", this._handleTriggerKeydownBound), this.dropdownEl.addEventListener("click", this._handleDropdownClickBound), this.options.hover ? (this._handleMouseEnterBound = this._handleMouseEnter.bind(this), this.el.addEventListener("mouseenter", this._handleMouseEnterBound), this._handleMouseLeaveBound = this._handleMouseLeave.bind(this), this.el.addEventListener("mouseleave", this._handleMouseLeaveBound), this.dropdownEl.addEventListener("mouseleave", this._handleMouseLeaveBound)) : (this._handleClickBound = this._handleClick.bind(this), this.el.addEventListener("click", this._handleClickBound));
        }}, {key: "_removeEventHandlers", value: function() {
          this.el.removeEventListener("keydown", this._handleTriggerKeydownBound), this.dropdownEl.removeEventListener("click", this._handleDropdownClickBound), this.options.hover ? (this.el.removeEventListener("mouseenter", this._handleMouseEnterBound), this.el.removeEventListener("mouseleave", this._handleMouseLeaveBound), this.dropdownEl.removeEventListener("mouseleave", this._handleMouseLeaveBound)) : this.el.removeEventListener("click", this._handleClickBound);
        }}, {key: "_setupTemporaryEventHandlers", value: function() {
          document.body.addEventListener("click", this._handleDocumentClickBound, true), document.body.addEventListener("touchend", this._handleDocumentClickBound), document.body.addEventListener("touchmove", this._handleDocumentTouchmoveBound), this.dropdownEl.addEventListener("keydown", this._handleDropdownKeydownBound);
        }}, {key: "_removeTemporaryEventHandlers", value: function() {
          document.body.removeEventListener("click", this._handleDocumentClickBound, true), document.body.removeEventListener("touchend", this._handleDocumentClickBound), document.body.removeEventListener("touchmove", this._handleDocumentTouchmoveBound), this.dropdownEl.removeEventListener("keydown", this._handleDropdownKeydownBound);
        }}, {key: "_handleClick", value: function(t3) {
          t3.preventDefault(), this.open();
        }}, {key: "_handleMouseEnter", value: function() {
          this.open();
        }}, {key: "_handleMouseLeave", value: function(t3) {
          var e2 = t3.toElement || t3.relatedTarget, i2 = !!h(e2).closest(".dropdown-content").length, n2 = false, s = h(e2).closest(".dropdown-trigger");
          s.length && s[0].M_Dropdown && s[0].M_Dropdown.isOpen && (n2 = true), n2 || i2 || this.close();
        }}, {key: "_handleDocumentClick", value: function(t3) {
          var e2 = this, i2 = h(t3.target);
          this.options.closeOnClick && i2.closest(".dropdown-content").length && !this.isTouchMoving ? setTimeout(function() {
            e2.close();
          }, 0) : !i2.closest(".dropdown-trigger").length && i2.closest(".dropdown-content").length || setTimeout(function() {
            e2.close();
          }, 0), this.isTouchMoving = false;
        }}, {key: "_handleTriggerKeydown", value: function(t3) {
          t3.which !== M.keys.ARROW_DOWN && t3.which !== M.keys.ENTER || this.isOpen || (t3.preventDefault(), this.open());
        }}, {key: "_handleDocumentTouchmove", value: function(t3) {
          h(t3.target).closest(".dropdown-content").length && (this.isTouchMoving = true);
        }}, {key: "_handleDropdownClick", value: function(t3) {
          if (typeof this.options.onItemClick == "function") {
            var e2 = h(t3.target).closest("li")[0];
            this.options.onItemClick.call(this, e2);
          }
        }}, {key: "_handleDropdownKeydown", value: function(t3) {
          if (t3.which === M.keys.TAB)
            t3.preventDefault(), this.close();
          else if (t3.which !== M.keys.ARROW_DOWN && t3.which !== M.keys.ARROW_UP || !this.isOpen)
            if (t3.which === M.keys.ENTER && this.isOpen) {
              var e2 = this.dropdownEl.children[this.focusedIndex], i2 = h(e2).find("a, button").first();
              i2.length ? i2[0].click() : e2 && e2.click();
            } else
              t3.which === M.keys.ESC && this.isOpen && (t3.preventDefault(), this.close());
          else {
            t3.preventDefault();
            var n2 = t3.which === M.keys.ARROW_DOWN ? 1 : -1, s = this.focusedIndex, o = false;
            do {
              if (s += n2, this.dropdownEl.children[s] && this.dropdownEl.children[s].tabIndex !== -1) {
                o = true;
                break;
              }
            } while (s < this.dropdownEl.children.length && 0 <= s);
            o && (this.focusedIndex = s, this._focusFocusedItem());
          }
          var a = String.fromCharCode(t3.which).toLowerCase();
          if (a && [9, 13, 27, 38, 40].indexOf(t3.which) === -1) {
            this.filterQuery.push(a);
            var r = this.filterQuery.join(""), l = h(this.dropdownEl).find("li").filter(function(t4) {
              return h(t4).text().toLowerCase().indexOf(r) === 0;
            })[0];
            l && (this.focusedIndex = h(l).index(), this._focusFocusedItem());
          }
          this.filterTimeout = setTimeout(this._resetFilterQueryBound, 1e3);
        }}, {key: "_resetFilterQuery", value: function() {
          this.filterQuery = [];
        }}, {key: "_resetDropdownStyles", value: function() {
          this.$dropdownEl.css({display: "", width: "", height: "", left: "", top: "", "transform-origin": "", transform: "", opacity: ""});
        }}, {key: "_makeDropdownFocusable", value: function() {
          this.dropdownEl.tabIndex = 0, h(this.dropdownEl).children().each(function(t3) {
            t3.getAttribute("tabindex") || t3.setAttribute("tabindex", 0);
          });
        }}, {key: "_focusFocusedItem", value: function() {
          0 <= this.focusedIndex && this.focusedIndex < this.dropdownEl.children.length && this.options.autoFocus && this.dropdownEl.children[this.focusedIndex].focus();
        }}, {key: "_getDropdownPosition", value: function() {
          this.el.offsetParent.getBoundingClientRect();
          var t3 = this.el.getBoundingClientRect(), e2 = this.dropdownEl.getBoundingClientRect(), i2 = e2.height, n2 = e2.width, s = t3.left - e2.left, o = t3.top - e2.top, a = {left: s, top: o, height: i2, width: n2}, r = this.dropdownEl.offsetParent ? this.dropdownEl.offsetParent : this.dropdownEl.parentNode, l = M.checkPossibleAlignments(this.el, r, a, this.options.coverTrigger ? 0 : t3.height), h2 = "top", d = this.options.alignment;
          if (o += this.options.coverTrigger ? 0 : t3.height, this.isScrollable = false, l.top || (l.bottom ? h2 = "bottom" : (this.isScrollable = true, l.spaceOnTop > l.spaceOnBottom ? (h2 = "bottom", i2 += l.spaceOnTop, o -= l.spaceOnTop) : i2 += l.spaceOnBottom)), !l[d]) {
            var u = d === "left" ? "right" : "left";
            l[u] ? d = u : l.spaceOnLeft > l.spaceOnRight ? (d = "right", n2 += l.spaceOnLeft, s -= l.spaceOnLeft) : (d = "left", n2 += l.spaceOnRight);
          }
          return h2 === "bottom" && (o = o - e2.height + (this.options.coverTrigger ? t3.height : 0)), d === "right" && (s = s - e2.width + t3.width), {x: s, y: o, verticalAlignment: h2, horizontalAlignment: d, height: i2, width: n2};
        }}, {key: "_animateIn", value: function() {
          var e2 = this;
          i.remove(this.dropdownEl), i({targets: this.dropdownEl, opacity: {value: [0, 1], easing: "easeOutQuad"}, scaleX: [0.3, 1], scaleY: [0.3, 1], duration: this.options.inDuration, easing: "easeOutQuint", complete: function(t3) {
            e2.options.autoFocus && e2.dropdownEl.focus(), typeof e2.options.onOpenEnd == "function" && e2.options.onOpenEnd.call(e2, e2.el);
          }});
        }}, {key: "_animateOut", value: function() {
          var e2 = this;
          i.remove(this.dropdownEl), i({targets: this.dropdownEl, opacity: {value: 0, easing: "easeOutQuint"}, scaleX: 0.3, scaleY: 0.3, duration: this.options.outDuration, easing: "easeOutQuint", complete: function(t3) {
            e2._resetDropdownStyles(), typeof e2.options.onCloseEnd == "function" && e2.options.onCloseEnd.call(e2, e2.el);
          }});
        }}, {key: "_placeDropdown", value: function() {
          var t3 = this.options.constrainWidth ? this.el.getBoundingClientRect().width : this.dropdownEl.getBoundingClientRect().width;
          this.dropdownEl.style.width = t3 + "px";
          var e2 = this._getDropdownPosition();
          this.dropdownEl.style.left = e2.x + "px", this.dropdownEl.style.top = e2.y + "px", this.dropdownEl.style.height = e2.height + "px", this.dropdownEl.style.width = e2.width + "px", this.dropdownEl.style.transformOrigin = (e2.horizontalAlignment === "left" ? "0" : "100%") + " " + (e2.verticalAlignment === "top" ? "0" : "100%");
        }}, {key: "open", value: function() {
          this.isOpen || (this.isOpen = true, typeof this.options.onOpenStart == "function" && this.options.onOpenStart.call(this, this.el), this._resetDropdownStyles(), this.dropdownEl.style.display = "block", this._placeDropdown(), this._animateIn(), this._setupTemporaryEventHandlers());
        }}, {key: "close", value: function() {
          this.isOpen && (this.isOpen = false, this.focusedIndex = -1, typeof this.options.onCloseStart == "function" && this.options.onCloseStart.call(this, this.el), this._animateOut(), this._removeTemporaryEventHandlers(), this.options.autoFocus && this.el.focus());
        }}, {key: "recalculateDimensions", value: function() {
          this.isOpen && (this.$dropdownEl.css({width: "", height: "", left: "", top: "", "transform-origin": ""}), this._placeDropdown());
        }}], [{key: "init", value: function(t3, e2) {
          return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t3, e2);
        }}, {key: "getInstance", value: function(t3) {
          return (t3.jquery ? t3[0] : t3).M_Dropdown;
        }}, {key: "defaults", get: function() {
          return e;
        }}]), n;
      }();
      t._dropdowns = [], M.Dropdown = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "dropdown", "M_Dropdown");
    }(cash, M.anime), function(s, i) {
      "use strict";
      var e = {opacity: 0.5, inDuration: 250, outDuration: 250, onOpenStart: null, onOpenEnd: null, onCloseStart: null, onCloseEnd: null, preventScrolling: true, dismissible: true, startingTop: "4%", endingTop: "10%"}, t = function(t2) {
        function n(t3, e2) {
          _classCallCheck(this, n);
          var i2 = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t3, e2));
          return (i2.el.M_Modal = i2).options = s.extend({}, n.defaults, e2), i2.isOpen = false, i2.id = i2.$el.attr("id"), i2._openingTrigger = void 0, i2.$overlay = s('<div class="modal-overlay"></div>'), i2.el.tabIndex = 0, i2._nthModalOpened = 0, n._count++, i2._setupEventHandlers(), i2;
        }
        return _inherits(n, Component), _createClass(n, [{key: "destroy", value: function() {
          n._count--, this._removeEventHandlers(), this.el.removeAttribute("style"), this.$overlay.remove(), this.el.M_Modal = void 0;
        }}, {key: "_setupEventHandlers", value: function() {
          this._handleOverlayClickBound = this._handleOverlayClick.bind(this), this._handleModalCloseClickBound = this._handleModalCloseClick.bind(this), n._count === 1 && document.body.addEventListener("click", this._handleTriggerClick), this.$overlay[0].addEventListener("click", this._handleOverlayClickBound), this.el.addEventListener("click", this._handleModalCloseClickBound);
        }}, {key: "_removeEventHandlers", value: function() {
          n._count === 0 && document.body.removeEventListener("click", this._handleTriggerClick), this.$overlay[0].removeEventListener("click", this._handleOverlayClickBound), this.el.removeEventListener("click", this._handleModalCloseClickBound);
        }}, {key: "_handleTriggerClick", value: function(t3) {
          var e2 = s(t3.target).closest(".modal-trigger");
          if (e2.length) {
            var i2 = M.getIdFromTrigger(e2[0]), n2 = document.getElementById(i2).M_Modal;
            n2 && n2.open(e2), t3.preventDefault();
          }
        }}, {key: "_handleOverlayClick", value: function() {
          this.options.dismissible && this.close();
        }}, {key: "_handleModalCloseClick", value: function(t3) {
          s(t3.target).closest(".modal-close").length && this.close();
        }}, {key: "_handleKeydown", value: function(t3) {
          t3.keyCode === 27 && this.options.dismissible && this.close();
        }}, {key: "_handleFocus", value: function(t3) {
          this.el.contains(t3.target) || this._nthModalOpened !== n._modalsOpen || this.el.focus();
        }}, {key: "_animateIn", value: function() {
          var t3 = this;
          s.extend(this.el.style, {display: "block", opacity: 0}), s.extend(this.$overlay[0].style, {display: "block", opacity: 0}), i({targets: this.$overlay[0], opacity: this.options.opacity, duration: this.options.inDuration, easing: "easeOutQuad"});
          var e2 = {targets: this.el, duration: this.options.inDuration, easing: "easeOutCubic", complete: function() {
            typeof t3.options.onOpenEnd == "function" && t3.options.onOpenEnd.call(t3, t3.el, t3._openingTrigger);
          }};
          this.el.classList.contains("bottom-sheet") ? s.extend(e2, {bottom: 0, opacity: 1}) : s.extend(e2, {top: [this.options.startingTop, this.options.endingTop], opacity: 1, scaleX: [0.8, 1], scaleY: [0.8, 1]}), i(e2);
        }}, {key: "_animateOut", value: function() {
          var t3 = this;
          i({targets: this.$overlay[0], opacity: 0, duration: this.options.outDuration, easing: "easeOutQuart"});
          var e2 = {targets: this.el, duration: this.options.outDuration, easing: "easeOutCubic", complete: function() {
            t3.el.style.display = "none", t3.$overlay.remove(), typeof t3.options.onCloseEnd == "function" && t3.options.onCloseEnd.call(t3, t3.el);
          }};
          this.el.classList.contains("bottom-sheet") ? s.extend(e2, {bottom: "-100%", opacity: 0}) : s.extend(e2, {top: [this.options.endingTop, this.options.startingTop], opacity: 0, scaleX: 0.8, scaleY: 0.8}), i(e2);
        }}, {key: "open", value: function(t3) {
          if (!this.isOpen)
            return this.isOpen = true, n._modalsOpen++, this._nthModalOpened = n._modalsOpen, this.$overlay[0].style.zIndex = 1e3 + 2 * n._modalsOpen, this.el.style.zIndex = 1e3 + 2 * n._modalsOpen + 1, this._openingTrigger = t3 ? t3[0] : void 0, typeof this.options.onOpenStart == "function" && this.options.onOpenStart.call(this, this.el, this._openingTrigger), this.options.preventScrolling && (document.body.style.overflow = "hidden"), this.el.classList.add("open"), this.el.insertAdjacentElement("afterend", this.$overlay[0]), this.options.dismissible && (this._handleKeydownBound = this._handleKeydown.bind(this), this._handleFocusBound = this._handleFocus.bind(this), document.addEventListener("keydown", this._handleKeydownBound), document.addEventListener("focus", this._handleFocusBound, true)), i.remove(this.el), i.remove(this.$overlay[0]), this._animateIn(), this.el.focus(), this;
        }}, {key: "close", value: function() {
          if (this.isOpen)
            return this.isOpen = false, n._modalsOpen--, this._nthModalOpened = 0, typeof this.options.onCloseStart == "function" && this.options.onCloseStart.call(this, this.el), this.el.classList.remove("open"), n._modalsOpen === 0 && (document.body.style.overflow = ""), this.options.dismissible && (document.removeEventListener("keydown", this._handleKeydownBound), document.removeEventListener("focus", this._handleFocusBound, true)), i.remove(this.el), i.remove(this.$overlay[0]), this._animateOut(), this;
        }}], [{key: "init", value: function(t3, e2) {
          return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t3, e2);
        }}, {key: "getInstance", value: function(t3) {
          return (t3.jquery ? t3[0] : t3).M_Modal;
        }}, {key: "defaults", get: function() {
          return e;
        }}]), n;
      }();
      t._modalsOpen = 0, t._count = 0, M.Modal = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "modal", "M_Modal");
    }(cash, M.anime), function(o, a) {
      "use strict";
      var e = {inDuration: 275, outDuration: 200, onOpenStart: null, onOpenEnd: null, onCloseStart: null, onCloseEnd: null}, t = function(t2) {
        function n(t3, e2) {
          _classCallCheck(this, n);
          var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t3, e2));
          return (i.el.M_Materialbox = i).options = o.extend({}, n.defaults, e2), i.overlayActive = false, i.doneAnimating = true, i.placeholder = o("<div></div>").addClass("material-placeholder"), i.originalWidth = 0, i.originalHeight = 0, i.originInlineStyles = i.$el.attr("style"), i.caption = i.el.getAttribute("data-caption") || "", i.$el.before(i.placeholder), i.placeholder.append(i.$el), i._setupEventHandlers(), i;
        }
        return _inherits(n, Component), _createClass(n, [{key: "destroy", value: function() {
          this._removeEventHandlers(), this.el.M_Materialbox = void 0, o(this.placeholder).after(this.el).remove(), this.$el.removeAttr("style");
        }}, {key: "_setupEventHandlers", value: function() {
          this._handleMaterialboxClickBound = this._handleMaterialboxClick.bind(this), this.el.addEventListener("click", this._handleMaterialboxClickBound);
        }}, {key: "_removeEventHandlers", value: function() {
          this.el.removeEventListener("click", this._handleMaterialboxClickBound);
        }}, {key: "_handleMaterialboxClick", value: function(t3) {
          this.doneAnimating === false || this.overlayActive && this.doneAnimating ? this.close() : this.open();
        }}, {key: "_handleWindowScroll", value: function() {
          this.overlayActive && this.close();
        }}, {key: "_handleWindowResize", value: function() {
          this.overlayActive && this.close();
        }}, {key: "_handleWindowEscape", value: function(t3) {
          t3.keyCode === 27 && this.doneAnimating && this.overlayActive && this.close();
        }}, {key: "_makeAncestorsOverflowVisible", value: function() {
          this.ancestorsChanged = o();
          for (var t3 = this.placeholder[0].parentNode; t3 !== null && !o(t3).is(document); ) {
            var e2 = o(t3);
            e2.css("overflow") !== "visible" && (e2.css("overflow", "visible"), this.ancestorsChanged === void 0 ? this.ancestorsChanged = e2 : this.ancestorsChanged = this.ancestorsChanged.add(e2)), t3 = t3.parentNode;
          }
        }}, {key: "_animateImageIn", value: function() {
          var t3 = this, e2 = {targets: this.el, height: [this.originalHeight, this.newHeight], width: [this.originalWidth, this.newWidth], left: M.getDocumentScrollLeft() + this.windowWidth / 2 - this.placeholder.offset().left - this.newWidth / 2, top: M.getDocumentScrollTop() + this.windowHeight / 2 - this.placeholder.offset().top - this.newHeight / 2, duration: this.options.inDuration, easing: "easeOutQuad", complete: function() {
            t3.doneAnimating = true, typeof t3.options.onOpenEnd == "function" && t3.options.onOpenEnd.call(t3, t3.el);
          }};
          this.maxWidth = this.$el.css("max-width"), this.maxHeight = this.$el.css("max-height"), this.maxWidth !== "none" && (e2.maxWidth = this.newWidth), this.maxHeight !== "none" && (e2.maxHeight = this.newHeight), a(e2);
        }}, {key: "_animateImageOut", value: function() {
          var t3 = this, e2 = {targets: this.el, width: this.originalWidth, height: this.originalHeight, left: 0, top: 0, duration: this.options.outDuration, easing: "easeOutQuad", complete: function() {
            t3.placeholder.css({height: "", width: "", position: "", top: "", left: ""}), t3.attrWidth && t3.$el.attr("width", t3.attrWidth), t3.attrHeight && t3.$el.attr("height", t3.attrHeight), t3.$el.removeAttr("style"), t3.originInlineStyles && t3.$el.attr("style", t3.originInlineStyles), t3.$el.removeClass("active"), t3.doneAnimating = true, t3.ancestorsChanged.length && t3.ancestorsChanged.css("overflow", ""), typeof t3.options.onCloseEnd == "function" && t3.options.onCloseEnd.call(t3, t3.el);
          }};
          a(e2);
        }}, {key: "_updateVars", value: function() {
          this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight, this.caption = this.el.getAttribute("data-caption") || "";
        }}, {key: "open", value: function() {
          var t3 = this;
          this._updateVars(), this.originalWidth = this.el.getBoundingClientRect().width, this.originalHeight = this.el.getBoundingClientRect().height, this.doneAnimating = false, this.$el.addClass("active"), this.overlayActive = true, typeof this.options.onOpenStart == "function" && this.options.onOpenStart.call(this, this.el), this.placeholder.css({width: this.placeholder[0].getBoundingClientRect().width + "px", height: this.placeholder[0].getBoundingClientRect().height + "px", position: "relative", top: 0, left: 0}), this._makeAncestorsOverflowVisible(), this.$el.css({position: "absolute", "z-index": 1e3, "will-change": "left, top, width, height"}), this.attrWidth = this.$el.attr("width"), this.attrHeight = this.$el.attr("height"), this.attrWidth && (this.$el.css("width", this.attrWidth + "px"), this.$el.removeAttr("width")), this.attrHeight && (this.$el.css("width", this.attrHeight + "px"), this.$el.removeAttr("height")), this.$overlay = o('<div id="materialbox-overlay"></div>').css({opacity: 0}).one("click", function() {
            t3.doneAnimating && t3.close();
          }), this.$el.before(this.$overlay);
          var e2 = this.$overlay[0].getBoundingClientRect();
          this.$overlay.css({width: this.windowWidth + "px", height: this.windowHeight + "px", left: -1 * e2.left + "px", top: -1 * e2.top + "px"}), a.remove(this.el), a.remove(this.$overlay[0]), a({targets: this.$overlay[0], opacity: 1, duration: this.options.inDuration, easing: "easeOutQuad"}), this.caption !== "" && (this.$photocaption && a.remove(this.$photoCaption[0]), this.$photoCaption = o('<div class="materialbox-caption"></div>'), this.$photoCaption.text(this.caption), o("body").append(this.$photoCaption), this.$photoCaption.css({display: "inline"}), a({targets: this.$photoCaption[0], opacity: 1, duration: this.options.inDuration, easing: "easeOutQuad"}));
          var i = 0, n2 = this.originalWidth / this.windowWidth, s = this.originalHeight / this.windowHeight;
          this.newWidth = 0, this.newHeight = 0, s < n2 ? (i = this.originalHeight / this.originalWidth, this.newWidth = 0.9 * this.windowWidth, this.newHeight = 0.9 * this.windowWidth * i) : (i = this.originalWidth / this.originalHeight, this.newWidth = 0.9 * this.windowHeight * i, this.newHeight = 0.9 * this.windowHeight), this._animateImageIn(), this._handleWindowScrollBound = this._handleWindowScroll.bind(this), this._handleWindowResizeBound = this._handleWindowResize.bind(this), this._handleWindowEscapeBound = this._handleWindowEscape.bind(this), window.addEventListener("scroll", this._handleWindowScrollBound), window.addEventListener("resize", this._handleWindowResizeBound), window.addEventListener("keyup", this._handleWindowEscapeBound);
        }}, {key: "close", value: function() {
          var t3 = this;
          this._updateVars(), this.doneAnimating = false, typeof this.options.onCloseStart == "function" && this.options.onCloseStart.call(this, this.el), a.remove(this.el), a.remove(this.$overlay[0]), this.caption !== "" && a.remove(this.$photoCaption[0]), window.removeEventListener("scroll", this._handleWindowScrollBound), window.removeEventListener("resize", this._handleWindowResizeBound), window.removeEventListener("keyup", this._handleWindowEscapeBound), a({targets: this.$overlay[0], opacity: 0, duration: this.options.outDuration, easing: "easeOutQuad", complete: function() {
            t3.overlayActive = false, t3.$overlay.remove();
          }}), this._animateImageOut(), this.caption !== "" && a({targets: this.$photoCaption[0], opacity: 0, duration: this.options.outDuration, easing: "easeOutQuad", complete: function() {
            t3.$photoCaption.remove();
          }});
        }}], [{key: "init", value: function(t3, e2) {
          return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t3, e2);
        }}, {key: "getInstance", value: function(t3) {
          return (t3.jquery ? t3[0] : t3).M_Materialbox;
        }}, {key: "defaults", get: function() {
          return e;
        }}]), n;
      }();
      M.Materialbox = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "materialbox", "M_Materialbox");
    }(cash, M.anime), function(s) {
      "use strict";
      var e = {responsiveThreshold: 0}, t = function(t2) {
        function n(t3, e2) {
          _classCallCheck(this, n);
          var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t3, e2));
          return (i.el.M_Parallax = i).options = s.extend({}, n.defaults, e2), i._enabled = window.innerWidth > i.options.responsiveThreshold, i.$img = i.$el.find("img").first(), i.$img.each(function() {
            this.complete && s(this).trigger("load");
          }), i._updateParallax(), i._setupEventHandlers(), i._setupStyles(), n._parallaxes.push(i), i;
        }
        return _inherits(n, Component), _createClass(n, [{key: "destroy", value: function() {
          n._parallaxes.splice(n._parallaxes.indexOf(this), 1), this.$img[0].style.transform = "", this._removeEventHandlers(), this.$el[0].M_Parallax = void 0;
        }}, {key: "_setupEventHandlers", value: function() {
          this._handleImageLoadBound = this._handleImageLoad.bind(this), this.$img[0].addEventListener("load", this._handleImageLoadBound), n._parallaxes.length === 0 && (n._handleScrollThrottled = M.throttle(n._handleScroll, 5), window.addEventListener("scroll", n._handleScrollThrottled), n._handleWindowResizeThrottled = M.throttle(n._handleWindowResize, 5), window.addEventListener("resize", n._handleWindowResizeThrottled));
        }}, {key: "_removeEventHandlers", value: function() {
          this.$img[0].removeEventListener("load", this._handleImageLoadBound), n._parallaxes.length === 0 && (window.removeEventListener("scroll", n._handleScrollThrottled), window.removeEventListener("resize", n._handleWindowResizeThrottled));
        }}, {key: "_setupStyles", value: function() {
          this.$img[0].style.opacity = 1;
        }}, {key: "_handleImageLoad", value: function() {
          this._updateParallax();
        }}, {key: "_updateParallax", value: function() {
          var t3 = 0 < this.$el.height() ? this.el.parentNode.offsetHeight : 500, e2 = this.$img[0].offsetHeight - t3, i = this.$el.offset().top + t3, n2 = this.$el.offset().top, s2 = M.getDocumentScrollTop(), o = window.innerHeight, a = e2 * ((s2 + o - n2) / (t3 + o));
          this._enabled ? s2 < i && n2 < s2 + o && (this.$img[0].style.transform = "translate3D(-50%, " + a + "px, 0)") : this.$img[0].style.transform = "";
        }}], [{key: "init", value: function(t3, e2) {
          return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t3, e2);
        }}, {key: "getInstance", value: function(t3) {
          return (t3.jquery ? t3[0] : t3).M_Parallax;
        }}, {key: "_handleScroll", value: function() {
          for (var t3 = 0; t3 < n._parallaxes.length; t3++) {
            var e2 = n._parallaxes[t3];
            e2._updateParallax.call(e2);
          }
        }}, {key: "_handleWindowResize", value: function() {
          for (var t3 = 0; t3 < n._parallaxes.length; t3++) {
            var e2 = n._parallaxes[t3];
            e2._enabled = window.innerWidth > e2.options.responsiveThreshold;
          }
        }}, {key: "defaults", get: function() {
          return e;
        }}]), n;
      }();
      t._parallaxes = [], M.Parallax = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "parallax", "M_Parallax");
    }(cash), function(a, s) {
      "use strict";
      var e = {duration: 300, onShow: null, swipeable: false, responsiveThreshold: 1 / 0}, t = function(t2) {
        function n(t3, e2) {
          _classCallCheck(this, n);
          var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t3, e2));
          return (i.el.M_Tabs = i).options = a.extend({}, n.defaults, e2), i.$tabLinks = i.$el.children("li.tab").children("a"), i.index = 0, i._setupActiveTabLink(), i.options.swipeable ? i._setupSwipeableTabs() : i._setupNormalTabs(), i._setTabsAndTabWidth(), i._createIndicator(), i._setupEventHandlers(), i;
        }
        return _inherits(n, Component), _createClass(n, [{key: "destroy", value: function() {
          this._removeEventHandlers(), this._indicator.parentNode.removeChild(this._indicator), this.options.swipeable ? this._teardownSwipeableTabs() : this._teardownNormalTabs(), this.$el[0].M_Tabs = void 0;
        }}, {key: "_setupEventHandlers", value: function() {
          this._handleWindowResizeBound = this._handleWindowResize.bind(this), window.addEventListener("resize", this._handleWindowResizeBound), this._handleTabClickBound = this._handleTabClick.bind(this), this.el.addEventListener("click", this._handleTabClickBound);
        }}, {key: "_removeEventHandlers", value: function() {
          window.removeEventListener("resize", this._handleWindowResizeBound), this.el.removeEventListener("click", this._handleTabClickBound);
        }}, {key: "_handleWindowResize", value: function() {
          this._setTabsAndTabWidth(), this.tabWidth !== 0 && this.tabsWidth !== 0 && (this._indicator.style.left = this._calcLeftPos(this.$activeTabLink) + "px", this._indicator.style.right = this._calcRightPos(this.$activeTabLink) + "px");
        }}, {key: "_handleTabClick", value: function(t3) {
          var e2 = this, i = a(t3.target).closest("li.tab"), n2 = a(t3.target).closest("a");
          if (n2.length && n2.parent().hasClass("tab")) {
            if (i.hasClass("disabled"))
              t3.preventDefault();
            else if (!n2.attr("target")) {
              this.$activeTabLink.removeClass("active");
              var s2 = this.$content;
              this.$activeTabLink = n2, this.$content = a(M.escapeHash(n2[0].hash)), this.$tabLinks = this.$el.children("li.tab").children("a"), this.$activeTabLink.addClass("active");
              var o = this.index;
              this.index = Math.max(this.$tabLinks.index(n2), 0), this.options.swipeable ? this._tabsCarousel && this._tabsCarousel.set(this.index, function() {
                typeof e2.options.onShow == "function" && e2.options.onShow.call(e2, e2.$content[0]);
              }) : this.$content.length && (this.$content[0].style.display = "block", this.$content.addClass("active"), typeof this.options.onShow == "function" && this.options.onShow.call(this, this.$content[0]), s2.length && !s2.is(this.$content) && (s2[0].style.display = "none", s2.removeClass("active"))), this._setTabsAndTabWidth(), this._animateIndicator(o), t3.preventDefault();
            }
          }
        }}, {key: "_createIndicator", value: function() {
          var t3 = this, e2 = document.createElement("li");
          e2.classList.add("indicator"), this.el.appendChild(e2), this._indicator = e2, setTimeout(function() {
            t3._indicator.style.left = t3._calcLeftPos(t3.$activeTabLink) + "px", t3._indicator.style.right = t3._calcRightPos(t3.$activeTabLink) + "px";
          }, 0);
        }}, {key: "_setupActiveTabLink", value: function() {
          this.$activeTabLink = a(this.$tabLinks.filter('[href="' + location.hash + '"]')), this.$activeTabLink.length === 0 && (this.$activeTabLink = this.$el.children("li.tab").children("a.active").first()), this.$activeTabLink.length === 0 && (this.$activeTabLink = this.$el.children("li.tab").children("a").first()), this.$tabLinks.removeClass("active"), this.$activeTabLink[0].classList.add("active"), this.index = Math.max(this.$tabLinks.index(this.$activeTabLink), 0), this.$activeTabLink.length && (this.$content = a(M.escapeHash(this.$activeTabLink[0].hash)), this.$content.addClass("active"));
        }}, {key: "_setupSwipeableTabs", value: function() {
          var i = this;
          window.innerWidth > this.options.responsiveThreshold && (this.options.swipeable = false);
          var n2 = a();
          this.$tabLinks.each(function(t4) {
            var e3 = a(M.escapeHash(t4.hash));
            e3.addClass("carousel-item"), n2 = n2.add(e3);
          });
          var t3 = a('<div class="tabs-content carousel carousel-slider"></div>');
          n2.first().before(t3), t3.append(n2), n2[0].style.display = "";
          var e2 = this.$activeTabLink.closest(".tab").index();
          this._tabsCarousel = M.Carousel.init(t3[0], {fullWidth: true, noWrap: true, onCycleTo: function(t4) {
            var e3 = i.index;
            i.index = a(t4).index(), i.$activeTabLink.removeClass("active"), i.$activeTabLink = i.$tabLinks.eq(i.index), i.$activeTabLink.addClass("active"), i._animateIndicator(e3), typeof i.options.onShow == "function" && i.options.onShow.call(i, i.$content[0]);
          }}), this._tabsCarousel.set(e2);
        }}, {key: "_teardownSwipeableTabs", value: function() {
          var t3 = this._tabsCarousel.$el;
          this._tabsCarousel.destroy(), t3.after(t3.children()), t3.remove();
        }}, {key: "_setupNormalTabs", value: function() {
          this.$tabLinks.not(this.$activeTabLink).each(function(t3) {
            if (t3.hash) {
              var e2 = a(M.escapeHash(t3.hash));
              e2.length && (e2[0].style.display = "none");
            }
          });
        }}, {key: "_teardownNormalTabs", value: function() {
          this.$tabLinks.each(function(t3) {
            if (t3.hash) {
              var e2 = a(M.escapeHash(t3.hash));
              e2.length && (e2[0].style.display = "");
            }
          });
        }}, {key: "_setTabsAndTabWidth", value: function() {
          this.tabsWidth = this.$el.width(), this.tabWidth = Math.max(this.tabsWidth, this.el.scrollWidth) / this.$tabLinks.length;
        }}, {key: "_calcRightPos", value: function(t3) {
          return Math.ceil(this.tabsWidth - t3.position().left - t3[0].getBoundingClientRect().width);
        }}, {key: "_calcLeftPos", value: function(t3) {
          return Math.floor(t3.position().left);
        }}, {key: "updateTabIndicator", value: function() {
          this._setTabsAndTabWidth(), this._animateIndicator(this.index);
        }}, {key: "_animateIndicator", value: function(t3) {
          var e2 = 0, i = 0;
          0 <= this.index - t3 ? e2 = 90 : i = 90;
          var n2 = {targets: this._indicator, left: {value: this._calcLeftPos(this.$activeTabLink), delay: e2}, right: {value: this._calcRightPos(this.$activeTabLink), delay: i}, duration: this.options.duration, easing: "easeOutQuad"};
          s.remove(this._indicator), s(n2);
        }}, {key: "select", value: function(t3) {
          var e2 = this.$tabLinks.filter('[href="#' + t3 + '"]');
          e2.length && e2.trigger("click");
        }}], [{key: "init", value: function(t3, e2) {
          return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t3, e2);
        }}, {key: "getInstance", value: function(t3) {
          return (t3.jquery ? t3[0] : t3).M_Tabs;
        }}, {key: "defaults", get: function() {
          return e;
        }}]), n;
      }();
      M.Tabs = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "tabs", "M_Tabs");
    }(cash, M.anime), function(d, e) {
      "use strict";
      var i = {exitDelay: 200, enterDelay: 0, html: null, margin: 5, inDuration: 250, outDuration: 200, position: "bottom", transitionMovement: 10}, t = function(t2) {
        function n(t3, e2) {
          _classCallCheck(this, n);
          var i2 = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t3, e2));
          return (i2.el.M_Tooltip = i2).options = d.extend({}, n.defaults, e2), i2.isOpen = false, i2.isHovered = false, i2.isFocused = false, i2._appendTooltipEl(), i2._setupEventHandlers(), i2;
        }
        return _inherits(n, Component), _createClass(n, [{key: "destroy", value: function() {
          d(this.tooltipEl).remove(), this._removeEventHandlers(), this.el.M_Tooltip = void 0;
        }}, {key: "_appendTooltipEl", value: function() {
          var t3 = document.createElement("div");
          t3.classList.add("material-tooltip"), this.tooltipEl = t3;
          var e2 = document.createElement("div");
          e2.classList.add("tooltip-content"), e2.innerHTML = this.options.html, t3.appendChild(e2), document.body.appendChild(t3);
        }}, {key: "_updateTooltipContent", value: function() {
          this.tooltipEl.querySelector(".tooltip-content").innerHTML = this.options.html;
        }}, {key: "_setupEventHandlers", value: function() {
          this._handleMouseEnterBound = this._handleMouseEnter.bind(this), this._handleMouseLeaveBound = this._handleMouseLeave.bind(this), this._handleFocusBound = this._handleFocus.bind(this), this._handleBlurBound = this._handleBlur.bind(this), this.el.addEventListener("mouseenter", this._handleMouseEnterBound), this.el.addEventListener("mouseleave", this._handleMouseLeaveBound), this.el.addEventListener("focus", this._handleFocusBound, true), this.el.addEventListener("blur", this._handleBlurBound, true);
        }}, {key: "_removeEventHandlers", value: function() {
          this.el.removeEventListener("mouseenter", this._handleMouseEnterBound), this.el.removeEventListener("mouseleave", this._handleMouseLeaveBound), this.el.removeEventListener("focus", this._handleFocusBound, true), this.el.removeEventListener("blur", this._handleBlurBound, true);
        }}, {key: "open", value: function(t3) {
          this.isOpen || (t3 = t3 === void 0 || void 0, this.isOpen = true, this.options = d.extend({}, this.options, this._getAttributeOptions()), this._updateTooltipContent(), this._setEnterDelayTimeout(t3));
        }}, {key: "close", value: function() {
          this.isOpen && (this.isHovered = false, this.isFocused = false, this.isOpen = false, this._setExitDelayTimeout());
        }}, {key: "_setExitDelayTimeout", value: function() {
          var t3 = this;
          clearTimeout(this._exitDelayTimeout), this._exitDelayTimeout = setTimeout(function() {
            t3.isHovered || t3.isFocused || t3._animateOut();
          }, this.options.exitDelay);
        }}, {key: "_setEnterDelayTimeout", value: function(t3) {
          var e2 = this;
          clearTimeout(this._enterDelayTimeout), this._enterDelayTimeout = setTimeout(function() {
            (e2.isHovered || e2.isFocused || t3) && e2._animateIn();
          }, this.options.enterDelay);
        }}, {key: "_positionTooltip", value: function() {
          var t3, e2 = this.el, i2 = this.tooltipEl, n2 = e2.offsetHeight, s = e2.offsetWidth, o = i2.offsetHeight, a = i2.offsetWidth, r = this.options.margin, l = void 0, h = void 0;
          this.xMovement = 0, this.yMovement = 0, l = e2.getBoundingClientRect().top + M.getDocumentScrollTop(), h = e2.getBoundingClientRect().left + M.getDocumentScrollLeft(), this.options.position === "top" ? (l += -o - r, h += s / 2 - a / 2, this.yMovement = -this.options.transitionMovement) : this.options.position === "right" ? (l += n2 / 2 - o / 2, h += s + r, this.xMovement = this.options.transitionMovement) : this.options.position === "left" ? (l += n2 / 2 - o / 2, h += -a - r, this.xMovement = -this.options.transitionMovement) : (l += n2 + r, h += s / 2 - a / 2, this.yMovement = this.options.transitionMovement), t3 = this._repositionWithinScreen(h, l, a, o), d(i2).css({top: t3.y + "px", left: t3.x + "px"});
        }}, {key: "_repositionWithinScreen", value: function(t3, e2, i2, n2) {
          var s = M.getDocumentScrollLeft(), o = M.getDocumentScrollTop(), a = t3 - s, r = e2 - o, l = {left: a, top: r, width: i2, height: n2}, h = this.options.margin + this.options.transitionMovement, d2 = M.checkWithinContainer(document.body, l, h);
          return d2.left ? a = h : d2.right && (a -= a + i2 - window.innerWidth), d2.top ? r = h : d2.bottom && (r -= r + n2 - window.innerHeight), {x: a + s, y: r + o};
        }}, {key: "_animateIn", value: function() {
          this._positionTooltip(), this.tooltipEl.style.visibility = "visible", e.remove(this.tooltipEl), e({targets: this.tooltipEl, opacity: 1, translateX: this.xMovement, translateY: this.yMovement, duration: this.options.inDuration, easing: "easeOutCubic"});
        }}, {key: "_animateOut", value: function() {
          e.remove(this.tooltipEl), e({targets: this.tooltipEl, opacity: 0, translateX: 0, translateY: 0, duration: this.options.outDuration, easing: "easeOutCubic"});
        }}, {key: "_handleMouseEnter", value: function() {
          this.isHovered = true, this.isFocused = false, this.open(false);
        }}, {key: "_handleMouseLeave", value: function() {
          this.isHovered = false, this.isFocused = false, this.close();
        }}, {key: "_handleFocus", value: function() {
          M.tabPressed && (this.isFocused = true, this.open(false));
        }}, {key: "_handleBlur", value: function() {
          this.isFocused = false, this.close();
        }}, {key: "_getAttributeOptions", value: function() {
          var t3 = {}, e2 = this.el.getAttribute("data-tooltip"), i2 = this.el.getAttribute("data-position");
          return e2 && (t3.html = e2), i2 && (t3.position = i2), t3;
        }}], [{key: "init", value: function(t3, e2) {
          return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t3, e2);
        }}, {key: "getInstance", value: function(t3) {
          return (t3.jquery ? t3[0] : t3).M_Tooltip;
        }}, {key: "defaults", get: function() {
          return i;
        }}]), n;
      }();
      M.Tooltip = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "tooltip", "M_Tooltip");
    }(cash, M.anime), function(i) {
      "use strict";
      var t = t || {}, e = document.querySelectorAll.bind(document);
      function m(t2) {
        var e2 = "";
        for (var i2 in t2)
          t2.hasOwnProperty(i2) && (e2 += i2 + ":" + t2[i2] + ";");
        return e2;
      }
      var g = {duration: 750, show: function(t2, e2) {
        if (t2.button === 2)
          return false;
        var i2 = e2 || this, n2 = document.createElement("div");
        n2.className = "waves-ripple", i2.appendChild(n2);
        var s, o, a, r, l2, h, d, u = (h = {top: 0, left: 0}, d = (s = i2) && s.ownerDocument, o = d.documentElement, s.getBoundingClientRect !== void 0 && (h = s.getBoundingClientRect()), a = (l2 = r = d) !== null && l2 === l2.window ? r : r.nodeType === 9 && r.defaultView, {top: h.top + a.pageYOffset - o.clientTop, left: h.left + a.pageXOffset - o.clientLeft}), c = t2.pageY - u.top, p = t2.pageX - u.left, v = "scale(" + i2.clientWidth / 100 * 10 + ")";
        "touches" in t2 && (c = t2.touches[0].pageY - u.top, p = t2.touches[0].pageX - u.left), n2.setAttribute("data-hold", Date.now()), n2.setAttribute("data-scale", v), n2.setAttribute("data-x", p), n2.setAttribute("data-y", c);
        var f = {top: c + "px", left: p + "px"};
        n2.className = n2.className + " waves-notransition", n2.setAttribute("style", m(f)), n2.className = n2.className.replace("waves-notransition", ""), f["-webkit-transform"] = v, f["-moz-transform"] = v, f["-ms-transform"] = v, f["-o-transform"] = v, f.transform = v, f.opacity = "1", f["-webkit-transition-duration"] = g.duration + "ms", f["-moz-transition-duration"] = g.duration + "ms", f["-o-transition-duration"] = g.duration + "ms", f["transition-duration"] = g.duration + "ms", f["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", f["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", f["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", f["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", n2.setAttribute("style", m(f));
      }, hide: function(t2) {
        l.touchup(t2);
        var e2 = this, i2 = (e2.clientWidth, null), n2 = e2.getElementsByClassName("waves-ripple");
        if (!(0 < n2.length))
          return false;
        var s = (i2 = n2[n2.length - 1]).getAttribute("data-x"), o = i2.getAttribute("data-y"), a = i2.getAttribute("data-scale"), r = 350 - (Date.now() - Number(i2.getAttribute("data-hold")));
        r < 0 && (r = 0), setTimeout(function() {
          var t3 = {top: o + "px", left: s + "px", opacity: "0", "-webkit-transition-duration": g.duration + "ms", "-moz-transition-duration": g.duration + "ms", "-o-transition-duration": g.duration + "ms", "transition-duration": g.duration + "ms", "-webkit-transform": a, "-moz-transform": a, "-ms-transform": a, "-o-transform": a, transform: a};
          i2.setAttribute("style", m(t3)), setTimeout(function() {
            try {
              e2.removeChild(i2);
            } catch (t4) {
              return false;
            }
          }, g.duration);
        }, r);
      }, wrapInput: function(t2) {
        for (var e2 = 0; e2 < t2.length; e2++) {
          var i2 = t2[e2];
          if (i2.tagName.toLowerCase() === "input") {
            var n2 = i2.parentNode;
            if (n2.tagName.toLowerCase() === "i" && n2.className.indexOf("waves-effect") !== -1)
              continue;
            var s = document.createElement("i");
            s.className = i2.className + " waves-input-wrapper";
            var o = i2.getAttribute("style");
            o || (o = ""), s.setAttribute("style", o), i2.className = "waves-button-input", i2.removeAttribute("style"), n2.replaceChild(s, i2), s.appendChild(i2);
          }
        }
      }}, l = {touches: 0, allowEvent: function(t2) {
        var e2 = true;
        return t2.type === "touchstart" ? l.touches += 1 : t2.type === "touchend" || t2.type === "touchcancel" ? setTimeout(function() {
          0 < l.touches && (l.touches -= 1);
        }, 500) : t2.type === "mousedown" && 0 < l.touches && (e2 = false), e2;
      }, touchup: function(t2) {
        l.allowEvent(t2);
      }};
      function n(t2) {
        var e2 = function(t3) {
          if (l.allowEvent(t3) === false)
            return null;
          for (var e3 = null, i2 = t3.target || t3.srcElement; i2.parentNode !== null; ) {
            if (!(i2 instanceof SVGElement) && i2.className.indexOf("waves-effect") !== -1) {
              e3 = i2;
              break;
            }
            i2 = i2.parentNode;
          }
          return e3;
        }(t2);
        e2 !== null && (g.show(t2, e2), "ontouchstart" in i && (e2.addEventListener("touchend", g.hide, false), e2.addEventListener("touchcancel", g.hide, false)), e2.addEventListener("mouseup", g.hide, false), e2.addEventListener("mouseleave", g.hide, false), e2.addEventListener("dragend", g.hide, false));
      }
      t.displayEffect = function(t2) {
        "duration" in (t2 = t2 || {}) && (g.duration = t2.duration), g.wrapInput(e(".waves-effect")), "ontouchstart" in i && document.body.addEventListener("touchstart", n, false), document.body.addEventListener("mousedown", n, false);
      }, t.attach = function(t2) {
        t2.tagName.toLowerCase() === "input" && (g.wrapInput([t2]), t2 = t2.parentNode), "ontouchstart" in i && t2.addEventListener("touchstart", n, false), t2.addEventListener("mousedown", n, false);
      }, i.Waves = t, document.addEventListener("DOMContentLoaded", function() {
        t.displayEffect();
      }, false);
    }(window), function(i, n) {
      "use strict";
      var t = {html: "", displayLength: 4e3, inDuration: 300, outDuration: 375, classes: "", completeCallback: null, activationPercent: 0.8}, e = function() {
        function s(t2) {
          _classCallCheck(this, s), this.options = i.extend({}, s.defaults, t2), this.message = this.options.html, this.panning = false, this.timeRemaining = this.options.displayLength, s._toasts.length === 0 && s._createContainer(), s._toasts.push(this);
          var e2 = this._createToast();
          (e2.M_Toast = this).el = e2, this.$el = i(e2), this._animateIn(), this._setTimer();
        }
        return _createClass(s, [{key: "_createToast", value: function() {
          var t2 = document.createElement("div");
          return t2.classList.add("toast"), this.options.classes.length && i(t2).addClass(this.options.classes), (typeof HTMLElement == "object" ? this.message instanceof HTMLElement : this.message && typeof this.message == "object" && this.message !== null && this.message.nodeType === 1 && typeof this.message.nodeName == "string") ? t2.appendChild(this.message) : this.message.jquery ? i(t2).append(this.message[0]) : t2.innerHTML = this.message, s._container.appendChild(t2), t2;
        }}, {key: "_animateIn", value: function() {
          n({targets: this.el, top: 0, opacity: 1, duration: this.options.inDuration, easing: "easeOutCubic"});
        }}, {key: "_setTimer", value: function() {
          var t2 = this;
          this.timeRemaining !== 1 / 0 && (this.counterInterval = setInterval(function() {
            t2.panning || (t2.timeRemaining -= 20), t2.timeRemaining <= 0 && t2.dismiss();
          }, 20));
        }}, {key: "dismiss", value: function() {
          var t2 = this;
          window.clearInterval(this.counterInterval);
          var e2 = this.el.offsetWidth * this.options.activationPercent;
          this.wasSwiped && (this.el.style.transition = "transform .05s, opacity .05s", this.el.style.transform = "translateX(" + e2 + "px)", this.el.style.opacity = 0), n({targets: this.el, opacity: 0, marginTop: -40, duration: this.options.outDuration, easing: "easeOutExpo", complete: function() {
            typeof t2.options.completeCallback == "function" && t2.options.completeCallback(), t2.$el.remove(), s._toasts.splice(s._toasts.indexOf(t2), 1), s._toasts.length === 0 && s._removeContainer();
          }});
        }}], [{key: "getInstance", value: function(t2) {
          return (t2.jquery ? t2[0] : t2).M_Toast;
        }}, {key: "_createContainer", value: function() {
          var t2 = document.createElement("div");
          t2.setAttribute("id", "toast-container"), t2.addEventListener("touchstart", s._onDragStart), t2.addEventListener("touchmove", s._onDragMove), t2.addEventListener("touchend", s._onDragEnd), t2.addEventListener("mousedown", s._onDragStart), document.addEventListener("mousemove", s._onDragMove), document.addEventListener("mouseup", s._onDragEnd), document.body.appendChild(t2), s._container = t2;
        }}, {key: "_removeContainer", value: function() {
          document.removeEventListener("mousemove", s._onDragMove), document.removeEventListener("mouseup", s._onDragEnd), i(s._container).remove(), s._container = null;
        }}, {key: "_onDragStart", value: function(t2) {
          if (t2.target && i(t2.target).closest(".toast").length) {
            var e2 = i(t2.target).closest(".toast")[0].M_Toast;
            e2.panning = true, (s._draggedToast = e2).el.classList.add("panning"), e2.el.style.transition = "", e2.startingXPos = s._xPos(t2), e2.time = Date.now(), e2.xPos = s._xPos(t2);
          }
        }}, {key: "_onDragMove", value: function(t2) {
          if (s._draggedToast) {
            t2.preventDefault();
            var e2 = s._draggedToast;
            e2.deltaX = Math.abs(e2.xPos - s._xPos(t2)), e2.xPos = s._xPos(t2), e2.velocityX = e2.deltaX / (Date.now() - e2.time), e2.time = Date.now();
            var i2 = e2.xPos - e2.startingXPos, n2 = e2.el.offsetWidth * e2.options.activationPercent;
            e2.el.style.transform = "translateX(" + i2 + "px)", e2.el.style.opacity = 1 - Math.abs(i2 / n2);
          }
        }}, {key: "_onDragEnd", value: function() {
          if (s._draggedToast) {
            var t2 = s._draggedToast;
            t2.panning = false, t2.el.classList.remove("panning");
            var e2 = t2.xPos - t2.startingXPos, i2 = t2.el.offsetWidth * t2.options.activationPercent;
            Math.abs(e2) > i2 || 1 < t2.velocityX ? (t2.wasSwiped = true, t2.dismiss()) : (t2.el.style.transition = "transform .2s, opacity .2s", t2.el.style.transform = "", t2.el.style.opacity = ""), s._draggedToast = null;
          }
        }}, {key: "_xPos", value: function(t2) {
          return t2.targetTouches && 1 <= t2.targetTouches.length ? t2.targetTouches[0].clientX : t2.clientX;
        }}, {key: "dismissAll", value: function() {
          for (var t2 in s._toasts)
            s._toasts[t2].dismiss();
        }}, {key: "defaults", get: function() {
          return t;
        }}]), s;
      }();
      e._toasts = [], e._container = null, e._draggedToast = null, M.Toast = e, M.toast = function(t2) {
        return new e(t2);
      };
    }(cash, M.anime), function(s, o) {
      "use strict";
      var e = {edge: "left", draggable: true, inDuration: 250, outDuration: 200, onOpenStart: null, onOpenEnd: null, onCloseStart: null, onCloseEnd: null, preventScrolling: true}, t = function(t2) {
        function n(t3, e2) {
          _classCallCheck(this, n);
          var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t3, e2));
          return (i.el.M_Sidenav = i).id = i.$el.attr("id"), i.options = s.extend({}, n.defaults, e2), i.isOpen = false, i.isFixed = i.el.classList.contains("sidenav-fixed"), i.isDragged = false, i.lastWindowWidth = window.innerWidth, i.lastWindowHeight = window.innerHeight, i._createOverlay(), i._createDragTarget(), i._setupEventHandlers(), i._setupClasses(), i._setupFixed(), n._sidenavs.push(i), i;
        }
        return _inherits(n, Component), _createClass(n, [{key: "destroy", value: function() {
          this._removeEventHandlers(), this._enableBodyScrolling(), this._overlay.parentNode.removeChild(this._overlay), this.dragTarget.parentNode.removeChild(this.dragTarget), this.el.M_Sidenav = void 0, this.el.style.transform = "";
          var t3 = n._sidenavs.indexOf(this);
          0 <= t3 && n._sidenavs.splice(t3, 1);
        }}, {key: "_createOverlay", value: function() {
          var t3 = document.createElement("div");
          this._closeBound = this.close.bind(this), t3.classList.add("sidenav-overlay"), t3.addEventListener("click", this._closeBound), document.body.appendChild(t3), this._overlay = t3;
        }}, {key: "_setupEventHandlers", value: function() {
          n._sidenavs.length === 0 && document.body.addEventListener("click", this._handleTriggerClick), this._handleDragTargetDragBound = this._handleDragTargetDrag.bind(this), this._handleDragTargetReleaseBound = this._handleDragTargetRelease.bind(this), this._handleCloseDragBound = this._handleCloseDrag.bind(this), this._handleCloseReleaseBound = this._handleCloseRelease.bind(this), this._handleCloseTriggerClickBound = this._handleCloseTriggerClick.bind(this), this.dragTarget.addEventListener("touchmove", this._handleDragTargetDragBound), this.dragTarget.addEventListener("touchend", this._handleDragTargetReleaseBound), this._overlay.addEventListener("touchmove", this._handleCloseDragBound), this._overlay.addEventListener("touchend", this._handleCloseReleaseBound), this.el.addEventListener("touchmove", this._handleCloseDragBound), this.el.addEventListener("touchend", this._handleCloseReleaseBound), this.el.addEventListener("click", this._handleCloseTriggerClickBound), this.isFixed && (this._handleWindowResizeBound = this._handleWindowResize.bind(this), window.addEventListener("resize", this._handleWindowResizeBound));
        }}, {key: "_removeEventHandlers", value: function() {
          n._sidenavs.length === 1 && document.body.removeEventListener("click", this._handleTriggerClick), this.dragTarget.removeEventListener("touchmove", this._handleDragTargetDragBound), this.dragTarget.removeEventListener("touchend", this._handleDragTargetReleaseBound), this._overlay.removeEventListener("touchmove", this._handleCloseDragBound), this._overlay.removeEventListener("touchend", this._handleCloseReleaseBound), this.el.removeEventListener("touchmove", this._handleCloseDragBound), this.el.removeEventListener("touchend", this._handleCloseReleaseBound), this.el.removeEventListener("click", this._handleCloseTriggerClickBound), this.isFixed && window.removeEventListener("resize", this._handleWindowResizeBound);
        }}, {key: "_handleTriggerClick", value: function(t3) {
          var e2 = s(t3.target).closest(".sidenav-trigger");
          if (t3.target && e2.length) {
            var i = M.getIdFromTrigger(e2[0]), n2 = document.getElementById(i).M_Sidenav;
            n2 && n2.open(e2), t3.preventDefault();
          }
        }}, {key: "_startDrag", value: function(t3) {
          var e2 = t3.targetTouches[0].clientX;
          this.isDragged = true, this._startingXpos = e2, this._xPos = this._startingXpos, this._time = Date.now(), this._width = this.el.getBoundingClientRect().width, this._overlay.style.display = "block", this._initialScrollTop = this.isOpen ? this.el.scrollTop : M.getDocumentScrollTop(), this._verticallyScrolling = false, o.remove(this.el), o.remove(this._overlay);
        }}, {key: "_dragMoveUpdate", value: function(t3) {
          var e2 = t3.targetTouches[0].clientX, i = this.isOpen ? this.el.scrollTop : M.getDocumentScrollTop();
          this.deltaX = Math.abs(this._xPos - e2), this._xPos = e2, this.velocityX = this.deltaX / (Date.now() - this._time), this._time = Date.now(), this._initialScrollTop !== i && (this._verticallyScrolling = true);
        }}, {key: "_handleDragTargetDrag", value: function(t3) {
          if (this.options.draggable && !this._isCurrentlyFixed() && !this._verticallyScrolling) {
            this.isDragged || this._startDrag(t3), this._dragMoveUpdate(t3);
            var e2 = this._xPos - this._startingXpos, i = 0 < e2 ? "right" : "left";
            e2 = Math.min(this._width, Math.abs(e2)), this.options.edge === i && (e2 = 0);
            var n2 = e2, s2 = "translateX(-100%)";
            this.options.edge === "right" && (s2 = "translateX(100%)", n2 = -n2), this.percentOpen = Math.min(1, e2 / this._width), this.el.style.transform = s2 + " translateX(" + n2 + "px)", this._overlay.style.opacity = this.percentOpen;
          }
        }}, {key: "_handleDragTargetRelease", value: function() {
          this.isDragged && (0.2 < this.percentOpen ? this.open() : this._animateOut(), this.isDragged = false, this._verticallyScrolling = false);
        }}, {key: "_handleCloseDrag", value: function(t3) {
          if (this.isOpen) {
            if (!this.options.draggable || this._isCurrentlyFixed() || this._verticallyScrolling)
              return;
            this.isDragged || this._startDrag(t3), this._dragMoveUpdate(t3);
            var e2 = this._xPos - this._startingXpos, i = 0 < e2 ? "right" : "left";
            e2 = Math.min(this._width, Math.abs(e2)), this.options.edge !== i && (e2 = 0);
            var n2 = -e2;
            this.options.edge === "right" && (n2 = -n2), this.percentOpen = Math.min(1, 1 - e2 / this._width), this.el.style.transform = "translateX(" + n2 + "px)", this._overlay.style.opacity = this.percentOpen;
          }
        }}, {key: "_handleCloseRelease", value: function() {
          this.isOpen && this.isDragged && (0.8 < this.percentOpen ? this._animateIn() : this.close(), this.isDragged = false, this._verticallyScrolling = false);
        }}, {key: "_handleCloseTriggerClick", value: function(t3) {
          s(t3.target).closest(".sidenav-close").length && !this._isCurrentlyFixed() && this.close();
        }}, {key: "_handleWindowResize", value: function() {
          this.lastWindowWidth !== window.innerWidth && (992 < window.innerWidth ? this.open() : this.close()), this.lastWindowWidth = window.innerWidth, this.lastWindowHeight = window.innerHeight;
        }}, {key: "_setupClasses", value: function() {
          this.options.edge === "right" && (this.el.classList.add("right-aligned"), this.dragTarget.classList.add("right-aligned"));
        }}, {key: "_removeClasses", value: function() {
          this.el.classList.remove("right-aligned"), this.dragTarget.classList.remove("right-aligned");
        }}, {key: "_setupFixed", value: function() {
          this._isCurrentlyFixed() && this.open();
        }}, {key: "_isCurrentlyFixed", value: function() {
          return this.isFixed && 992 < window.innerWidth;
        }}, {key: "_createDragTarget", value: function() {
          var t3 = document.createElement("div");
          t3.classList.add("drag-target"), document.body.appendChild(t3), this.dragTarget = t3;
        }}, {key: "_preventBodyScrolling", value: function() {
          document.body.style.overflow = "hidden";
        }}, {key: "_enableBodyScrolling", value: function() {
          document.body.style.overflow = "";
        }}, {key: "open", value: function() {
          this.isOpen !== true && (this.isOpen = true, typeof this.options.onOpenStart == "function" && this.options.onOpenStart.call(this, this.el), this._isCurrentlyFixed() ? (o.remove(this.el), o({targets: this.el, translateX: 0, duration: 0, easing: "easeOutQuad"}), this._enableBodyScrolling(), this._overlay.style.display = "none") : (this.options.preventScrolling && this._preventBodyScrolling(), this.isDragged && this.percentOpen == 1 || this._animateIn()));
        }}, {key: "close", value: function() {
          if (this.isOpen !== false)
            if (this.isOpen = false, typeof this.options.onCloseStart == "function" && this.options.onCloseStart.call(this, this.el), this._isCurrentlyFixed()) {
              var t3 = this.options.edge === "left" ? "-105%" : "105%";
              this.el.style.transform = "translateX(" + t3 + ")";
            } else
              this._enableBodyScrolling(), this.isDragged && this.percentOpen == 0 ? this._overlay.style.display = "none" : this._animateOut();
        }}, {key: "_animateIn", value: function() {
          this._animateSidenavIn(), this._animateOverlayIn();
        }}, {key: "_animateSidenavIn", value: function() {
          var t3 = this, e2 = this.options.edge === "left" ? -1 : 1;
          this.isDragged && (e2 = this.options.edge === "left" ? e2 + this.percentOpen : e2 - this.percentOpen), o.remove(this.el), o({targets: this.el, translateX: [100 * e2 + "%", 0], duration: this.options.inDuration, easing: "easeOutQuad", complete: function() {
            typeof t3.options.onOpenEnd == "function" && t3.options.onOpenEnd.call(t3, t3.el);
          }});
        }}, {key: "_animateOverlayIn", value: function() {
          var t3 = 0;
          this.isDragged ? t3 = this.percentOpen : s(this._overlay).css({display: "block"}), o.remove(this._overlay), o({targets: this._overlay, opacity: [t3, 1], duration: this.options.inDuration, easing: "easeOutQuad"});
        }}, {key: "_animateOut", value: function() {
          this._animateSidenavOut(), this._animateOverlayOut();
        }}, {key: "_animateSidenavOut", value: function() {
          var t3 = this, e2 = this.options.edge === "left" ? -1 : 1, i = 0;
          this.isDragged && (i = this.options.edge === "left" ? e2 + this.percentOpen : e2 - this.percentOpen), o.remove(this.el), o({targets: this.el, translateX: [100 * i + "%", 105 * e2 + "%"], duration: this.options.outDuration, easing: "easeOutQuad", complete: function() {
            typeof t3.options.onCloseEnd == "function" && t3.options.onCloseEnd.call(t3, t3.el);
          }});
        }}, {key: "_animateOverlayOut", value: function() {
          var t3 = this;
          o.remove(this._overlay), o({targets: this._overlay, opacity: 0, duration: this.options.outDuration, easing: "easeOutQuad", complete: function() {
            s(t3._overlay).css("display", "none");
          }});
        }}], [{key: "init", value: function(t3, e2) {
          return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t3, e2);
        }}, {key: "getInstance", value: function(t3) {
          return (t3.jquery ? t3[0] : t3).M_Sidenav;
        }}, {key: "defaults", get: function() {
          return e;
        }}]), n;
      }();
      t._sidenavs = [], M.Sidenav = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "sidenav", "M_Sidenav");
    }(cash, M.anime), function(o, a) {
      "use strict";
      var e = {throttle: 100, scrollOffset: 200, activeClass: "active", getActiveElement: function(t2) {
        return 'a[href="#' + t2 + '"]';
      }}, t = function(t2) {
        function c(t3, e2) {
          _classCallCheck(this, c);
          var i = _possibleConstructorReturn(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this, c, t3, e2));
          return (i.el.M_ScrollSpy = i).options = o.extend({}, c.defaults, e2), c._elements.push(i), c._count++, c._increment++, i.tickId = -1, i.id = c._increment, i._setupEventHandlers(), i._handleWindowScroll(), i;
        }
        return _inherits(c, Component), _createClass(c, [{key: "destroy", value: function() {
          c._elements.splice(c._elements.indexOf(this), 1), c._elementsInView.splice(c._elementsInView.indexOf(this), 1), c._visibleElements.splice(c._visibleElements.indexOf(this.$el), 1), c._count--, this._removeEventHandlers(), o(this.options.getActiveElement(this.$el.attr("id"))).removeClass(this.options.activeClass), this.el.M_ScrollSpy = void 0;
        }}, {key: "_setupEventHandlers", value: function() {
          var t3 = M.throttle(this._handleWindowScroll, 200);
          this._handleThrottledResizeBound = t3.bind(this), this._handleWindowScrollBound = this._handleWindowScroll.bind(this), c._count === 1 && (window.addEventListener("scroll", this._handleWindowScrollBound), window.addEventListener("resize", this._handleThrottledResizeBound), document.body.addEventListener("click", this._handleTriggerClick));
        }}, {key: "_removeEventHandlers", value: function() {
          c._count === 0 && (window.removeEventListener("scroll", this._handleWindowScrollBound), window.removeEventListener("resize", this._handleThrottledResizeBound), document.body.removeEventListener("click", this._handleTriggerClick));
        }}, {key: "_handleTriggerClick", value: function(t3) {
          for (var e2 = o(t3.target), i = c._elements.length - 1; 0 <= i; i--) {
            var n = c._elements[i];
            if (e2.is('a[href="#' + n.$el.attr("id") + '"]')) {
              t3.preventDefault();
              var s = n.$el.offset().top + 1;
              a({targets: [document.documentElement, document.body], scrollTop: s - n.options.scrollOffset, duration: 400, easing: "easeOutCubic"});
              break;
            }
          }
        }}, {key: "_handleWindowScroll", value: function() {
          c._ticks++;
          for (var t3 = M.getDocumentScrollTop(), e2 = M.getDocumentScrollLeft(), i = e2 + window.innerWidth, n = t3 + window.innerHeight, s = c._findElements(t3, i, n, e2), o2 = 0; o2 < s.length; o2++) {
            var a2 = s[o2];
            a2.tickId < 0 && a2._enter(), a2.tickId = c._ticks;
          }
          for (var r = 0; r < c._elementsInView.length; r++) {
            var l = c._elementsInView[r], h = l.tickId;
            0 <= h && h !== c._ticks && (l._exit(), l.tickId = -1);
          }
          c._elementsInView = s;
        }}, {key: "_enter", value: function() {
          (c._visibleElements = c._visibleElements.filter(function(t3) {
            return t3.height() != 0;
          }))[0] ? (o(this.options.getActiveElement(c._visibleElements[0].attr("id"))).removeClass(this.options.activeClass), c._visibleElements[0][0].M_ScrollSpy && this.id < c._visibleElements[0][0].M_ScrollSpy.id ? c._visibleElements.unshift(this.$el) : c._visibleElements.push(this.$el)) : c._visibleElements.push(this.$el), o(this.options.getActiveElement(c._visibleElements[0].attr("id"))).addClass(this.options.activeClass);
        }}, {key: "_exit", value: function() {
          var e2 = this;
          (c._visibleElements = c._visibleElements.filter(function(t3) {
            return t3.height() != 0;
          }))[0] && (o(this.options.getActiveElement(c._visibleElements[0].attr("id"))).removeClass(this.options.activeClass), (c._visibleElements = c._visibleElements.filter(function(t3) {
            return t3.attr("id") != e2.$el.attr("id");
          }))[0] && o(this.options.getActiveElement(c._visibleElements[0].attr("id"))).addClass(this.options.activeClass));
        }}], [{key: "init", value: function(t3, e2) {
          return _get(c.__proto__ || Object.getPrototypeOf(c), "init", this).call(this, this, t3, e2);
        }}, {key: "getInstance", value: function(t3) {
          return (t3.jquery ? t3[0] : t3).M_ScrollSpy;
        }}, {key: "_findElements", value: function(t3, e2, i, n) {
          for (var s = [], o2 = 0; o2 < c._elements.length; o2++) {
            var a2 = c._elements[o2], r = t3 + a2.options.scrollOffset || 200;
            if (0 < a2.$el.height()) {
              var l = a2.$el.offset().top, h = a2.$el.offset().left, d = h + a2.$el.width(), u = l + a2.$el.height();
              !(e2 < h || d < n || i < l || u < r) && s.push(a2);
            }
          }
          return s;
        }}, {key: "defaults", get: function() {
          return e;
        }}]), c;
      }();
      t._elements = [], t._elementsInView = [], t._visibleElements = [], t._count = 0, t._increment = 0, t._ticks = 0, M.ScrollSpy = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "scrollSpy", "M_ScrollSpy");
    }(cash, M.anime), function(h) {
      "use strict";
      var e = {data: {}, limit: 1 / 0, onAutocomplete: null, minLength: 1, sortFunction: function(t2, e2, i) {
        return t2.indexOf(i) - e2.indexOf(i);
      }}, t = function(t2) {
        function s(t3, e2) {
          _classCallCheck(this, s);
          var i = _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, s, t3, e2));
          return (i.el.M_Autocomplete = i).options = h.extend({}, s.defaults, e2), i.isOpen = false, i.count = 0, i.activeIndex = -1, i.oldVal, i.$inputField = i.$el.closest(".input-field"), i.$active = h(), i._mousedown = false, i._setupDropdown(), i._setupEventHandlers(), i;
        }
        return _inherits(s, Component), _createClass(s, [{key: "destroy", value: function() {
          this._removeEventHandlers(), this._removeDropdown(), this.el.M_Autocomplete = void 0;
        }}, {key: "_setupEventHandlers", value: function() {
          this._handleInputBlurBound = this._handleInputBlur.bind(this), this._handleInputKeyupAndFocusBound = this._handleInputKeyupAndFocus.bind(this), this._handleInputKeydownBound = this._handleInputKeydown.bind(this), this._handleInputClickBound = this._handleInputClick.bind(this), this._handleContainerMousedownAndTouchstartBound = this._handleContainerMousedownAndTouchstart.bind(this), this._handleContainerMouseupAndTouchendBound = this._handleContainerMouseupAndTouchend.bind(this), this.el.addEventListener("blur", this._handleInputBlurBound), this.el.addEventListener("keyup", this._handleInputKeyupAndFocusBound), this.el.addEventListener("focus", this._handleInputKeyupAndFocusBound), this.el.addEventListener("keydown", this._handleInputKeydownBound), this.el.addEventListener("click", this._handleInputClickBound), this.container.addEventListener("mousedown", this._handleContainerMousedownAndTouchstartBound), this.container.addEventListener("mouseup", this._handleContainerMouseupAndTouchendBound), window.ontouchstart !== void 0 && (this.container.addEventListener("touchstart", this._handleContainerMousedownAndTouchstartBound), this.container.addEventListener("touchend", this._handleContainerMouseupAndTouchendBound));
        }}, {key: "_removeEventHandlers", value: function() {
          this.el.removeEventListener("blur", this._handleInputBlurBound), this.el.removeEventListener("keyup", this._handleInputKeyupAndFocusBound), this.el.removeEventListener("focus", this._handleInputKeyupAndFocusBound), this.el.removeEventListener("keydown", this._handleInputKeydownBound), this.el.removeEventListener("click", this._handleInputClickBound), this.container.removeEventListener("mousedown", this._handleContainerMousedownAndTouchstartBound), this.container.removeEventListener("mouseup", this._handleContainerMouseupAndTouchendBound), window.ontouchstart !== void 0 && (this.container.removeEventListener("touchstart", this._handleContainerMousedownAndTouchstartBound), this.container.removeEventListener("touchend", this._handleContainerMouseupAndTouchendBound));
        }}, {key: "_setupDropdown", value: function() {
          var e2 = this;
          this.container = document.createElement("ul"), this.container.id = "autocomplete-options-" + M.guid(), h(this.container).addClass("autocomplete-content dropdown-content"), this.$inputField.append(this.container), this.el.setAttribute("data-target", this.container.id), this.dropdown = M.Dropdown.init(this.el, {autoFocus: false, closeOnClick: false, coverTrigger: false, onItemClick: function(t3) {
            e2.selectOption(h(t3));
          }}), this.el.removeEventListener("click", this.dropdown._handleClickBound);
        }}, {key: "_removeDropdown", value: function() {
          this.container.parentNode.removeChild(this.container);
        }}, {key: "_handleInputBlur", value: function() {
          this._mousedown || (this.close(), this._resetAutocomplete());
        }}, {key: "_handleInputKeyupAndFocus", value: function(t3) {
          t3.type === "keyup" && (s._keydown = false), this.count = 0;
          var e2 = this.el.value.toLowerCase();
          t3.keyCode !== 13 && t3.keyCode !== 38 && t3.keyCode !== 40 && (this.oldVal === e2 || !M.tabPressed && t3.type === "focus" || this.open(), this.oldVal = e2);
        }}, {key: "_handleInputKeydown", value: function(t3) {
          s._keydown = true;
          var e2 = t3.keyCode, i = void 0, n = h(this.container).children("li").length;
          e2 === M.keys.ENTER && 0 <= this.activeIndex ? (i = h(this.container).children("li").eq(this.activeIndex)).length && (this.selectOption(i), t3.preventDefault()) : e2 !== M.keys.ARROW_UP && e2 !== M.keys.ARROW_DOWN || (t3.preventDefault(), e2 === M.keys.ARROW_UP && 0 < this.activeIndex && this.activeIndex--, e2 === M.keys.ARROW_DOWN && this.activeIndex < n - 1 && this.activeIndex++, this.$active.removeClass("active"), 0 <= this.activeIndex && (this.$active = h(this.container).children("li").eq(this.activeIndex), this.$active.addClass("active")));
        }}, {key: "_handleInputClick", value: function(t3) {
          this.open();
        }}, {key: "_handleContainerMousedownAndTouchstart", value: function(t3) {
          this._mousedown = true;
        }}, {key: "_handleContainerMouseupAndTouchend", value: function(t3) {
          this._mousedown = false;
        }}, {key: "_highlight", value: function(t3, e2) {
          var i = e2.find("img"), n = e2.text().toLowerCase().indexOf("" + t3.toLowerCase()), s2 = n + t3.length - 1, o = e2.text().slice(0, n), a = e2.text().slice(n, s2 + 1), r = e2.text().slice(s2 + 1);
          e2.html("<span>" + o + "<span class='highlight'>" + a + "</span>" + r + "</span>"), i.length && e2.prepend(i);
        }}, {key: "_resetCurrentElement", value: function() {
          this.activeIndex = -1, this.$active.removeClass("active");
        }}, {key: "_resetAutocomplete", value: function() {
          h(this.container).empty(), this._resetCurrentElement(), this.oldVal = null, this.isOpen = false, this._mousedown = false;
        }}, {key: "selectOption", value: function(t3) {
          var e2 = t3.text().trim();
          this.el.value = e2, this.$el.trigger("change"), this._resetAutocomplete(), this.close(), typeof this.options.onAutocomplete == "function" && this.options.onAutocomplete.call(this, e2);
        }}, {key: "_renderDropdown", value: function(t3, i) {
          var n = this;
          this._resetAutocomplete();
          var e2 = [];
          for (var s2 in t3)
            if (t3.hasOwnProperty(s2) && s2.toLowerCase().indexOf(i) !== -1) {
              if (this.count >= this.options.limit)
                break;
              var o = {data: t3[s2], key: s2};
              e2.push(o), this.count++;
            }
          if (this.options.sortFunction) {
            e2.sort(function(t4, e3) {
              return n.options.sortFunction(t4.key.toLowerCase(), e3.key.toLowerCase(), i.toLowerCase());
            });
          }
          for (var a = 0; a < e2.length; a++) {
            var r = e2[a], l = h("<li></li>");
            r.data ? l.append('<img src="' + r.data + '" class="right circle"><span>' + r.key + "</span>") : l.append("<span>" + r.key + "</span>"), h(this.container).append(l), this._highlight(i, l);
          }
        }}, {key: "open", value: function() {
          var t3 = this.el.value.toLowerCase();
          this._resetAutocomplete(), t3.length >= this.options.minLength && (this.isOpen = true, this._renderDropdown(this.options.data, t3)), this.dropdown.isOpen ? this.dropdown.recalculateDimensions() : this.dropdown.open();
        }}, {key: "close", value: function() {
          this.dropdown.close();
        }}, {key: "updateData", value: function(t3) {
          var e2 = this.el.value.toLowerCase();
          this.options.data = t3, this.isOpen && this._renderDropdown(t3, e2);
        }}], [{key: "init", value: function(t3, e2) {
          return _get(s.__proto__ || Object.getPrototypeOf(s), "init", this).call(this, this, t3, e2);
        }}, {key: "getInstance", value: function(t3) {
          return (t3.jquery ? t3[0] : t3).M_Autocomplete;
        }}, {key: "defaults", get: function() {
          return e;
        }}]), s;
      }();
      t._keydown = false, M.Autocomplete = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "autocomplete", "M_Autocomplete");
    }(cash), function(d) {
      M.updateTextFields = function() {
        d("input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea").each(function(t, e) {
          var i = d(this);
          0 < t.value.length || d(t).is(":focus") || t.autofocus || i.attr("placeholder") !== null ? i.siblings("label").addClass("active") : t.validity ? i.siblings("label").toggleClass("active", t.validity.badInput === true) : i.siblings("label").removeClass("active");
        });
      }, M.validate_field = function(t) {
        var e = t.attr("data-length") !== null, i = parseInt(t.attr("data-length")), n = t[0].value.length;
        n !== 0 || t[0].validity.badInput !== false || t.is(":required") ? t.hasClass("validate") && (t.is(":valid") && e && n <= i || t.is(":valid") && !e ? (t.removeClass("invalid"), t.addClass("valid")) : (t.removeClass("valid"), t.addClass("invalid"))) : t.hasClass("validate") && (t.removeClass("valid"), t.removeClass("invalid"));
      }, M.textareaAutoResize = function(t) {
        if (t instanceof Element && (t = d(t)), t.length) {
          var e = d(".hiddendiv").first();
          e.length || (e = d('<div class="hiddendiv common"></div>'), d("body").append(e));
          var i = t.css("font-family"), n = t.css("font-size"), s = t.css("line-height"), o = t.css("padding-top"), a = t.css("padding-right"), r = t.css("padding-bottom"), l = t.css("padding-left");
          n && e.css("font-size", n), i && e.css("font-family", i), s && e.css("line-height", s), o && e.css("padding-top", o), a && e.css("padding-right", a), r && e.css("padding-bottom", r), l && e.css("padding-left", l), t.data("original-height") || t.data("original-height", t.height()), t.attr("wrap") === "off" && e.css("overflow-wrap", "normal").css("white-space", "pre"), e.text(t[0].value + "\n");
          var h = e.html().replace(/\n/g, "<br>");
          e.html(h), 0 < t[0].offsetWidth && 0 < t[0].offsetHeight ? e.css("width", t.width() + "px") : e.css("width", window.innerWidth / 2 + "px"), t.data("original-height") <= e.innerHeight() ? t.css("height", e.innerHeight() + "px") : t[0].value.length < t.data("previous-length") && t.css("height", t.data("original-height") + "px"), t.data("previous-length", t[0].value.length);
        } else
          console.error("No textarea element found");
      }, d(document).ready(function() {
        var n = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea";
        d(document).on("change", n, function() {
          this.value.length === 0 && d(this).attr("placeholder") === null || d(this).siblings("label").addClass("active"), M.validate_field(d(this));
        }), d(document).ready(function() {
          M.updateTextFields();
        }), d(document).on("reset", function(t2) {
          var e = d(t2.target);
          e.is("form") && (e.find(n).removeClass("valid").removeClass("invalid"), e.find(n).each(function(t3) {
            this.value.length && d(this).siblings("label").removeClass("active");
          }), setTimeout(function() {
            e.find("select").each(function() {
              this.M_FormSelect && d(this).trigger("change");
            });
          }, 0));
        }), document.addEventListener("focus", function(t2) {
          d(t2.target).is(n) && d(t2.target).siblings("label, .prefix").addClass("active");
        }, true), document.addEventListener("blur", function(t2) {
          var e = d(t2.target);
          if (e.is(n)) {
            var i = ".prefix";
            e[0].value.length === 0 && e[0].validity.badInput !== true && e.attr("placeholder") === null && (i += ", label"), e.siblings(i).removeClass("active"), M.validate_field(e);
          }
        }, true);
        d(document).on("keyup", "input[type=radio], input[type=checkbox]", function(t2) {
          if (t2.which === M.keys.TAB)
            return d(this).addClass("tabbed"), void d(this).one("blur", function(t3) {
              d(this).removeClass("tabbed");
            });
        });
        var t = ".materialize-textarea";
        d(t).each(function() {
          var t2 = d(this);
          t2.data("original-height", t2.height()), t2.data("previous-length", this.value.length), M.textareaAutoResize(t2);
        }), d(document).on("keyup", t, function() {
          M.textareaAutoResize(d(this));
        }), d(document).on("keydown", t, function() {
          M.textareaAutoResize(d(this));
        }), d(document).on("change", '.file-field input[type="file"]', function() {
          for (var t2 = d(this).closest(".file-field").find("input.file-path"), e = d(this)[0].files, i = [], n2 = 0; n2 < e.length; n2++)
            i.push(e[n2].name);
          t2[0].value = i.join(", "), t2.trigger("change");
        });
      });
    }(cash), function(s, o) {
      "use strict";
      var e = {indicators: true, height: 400, duration: 500, interval: 6e3}, t = function(t2) {
        function n(t3, e2) {
          _classCallCheck(this, n);
          var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t3, e2));
          return (i.el.M_Slider = i).options = s.extend({}, n.defaults, e2), i.$slider = i.$el.find(".slides"), i.$slides = i.$slider.children("li"), i.activeIndex = i.$slides.filter(function(t4) {
            return s(t4).hasClass("active");
          }).first().index(), i.activeIndex != -1 && (i.$active = i.$slides.eq(i.activeIndex)), i._setSliderHeight(), i.$slides.find(".caption").each(function(t4) {
            i._animateCaptionIn(t4, 0);
          }), i.$slides.find("img").each(function(t4) {
            var e3 = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
            s(t4).attr("src") !== e3 && (s(t4).css("background-image", 'url("' + s(t4).attr("src") + '")'), s(t4).attr("src", e3));
          }), i._setupIndicators(), i.$active ? i.$active.css("display", "block") : (i.$slides.first().addClass("active"), o({targets: i.$slides.first()[0], opacity: 1, duration: i.options.duration, easing: "easeOutQuad"}), i.activeIndex = 0, i.$active = i.$slides.eq(i.activeIndex), i.options.indicators && i.$indicators.eq(i.activeIndex).addClass("active")), i.$active.find("img").each(function(t4) {
            o({targets: i.$active.find(".caption")[0], opacity: 1, translateX: 0, translateY: 0, duration: i.options.duration, easing: "easeOutQuad"});
          }), i._setupEventHandlers(), i.start(), i;
        }
        return _inherits(n, Component), _createClass(n, [{key: "destroy", value: function() {
          this.pause(), this._removeIndicators(), this._removeEventHandlers(), this.el.M_Slider = void 0;
        }}, {key: "_setupEventHandlers", value: function() {
          var e2 = this;
          this._handleIntervalBound = this._handleInterval.bind(this), this._handleIndicatorClickBound = this._handleIndicatorClick.bind(this), this.options.indicators && this.$indicators.each(function(t3) {
            t3.addEventListener("click", e2._handleIndicatorClickBound);
          });
        }}, {key: "_removeEventHandlers", value: function() {
          var e2 = this;
          this.options.indicators && this.$indicators.each(function(t3) {
            t3.removeEventListener("click", e2._handleIndicatorClickBound);
          });
        }}, {key: "_handleIndicatorClick", value: function(t3) {
          var e2 = s(t3.target).index();
          this.set(e2);
        }}, {key: "_handleInterval", value: function() {
          var t3 = this.$slider.find(".active").index();
          this.$slides.length === t3 + 1 ? t3 = 0 : t3 += 1, this.set(t3);
        }}, {key: "_animateCaptionIn", value: function(t3, e2) {
          var i = {targets: t3, opacity: 0, duration: e2, easing: "easeOutQuad"};
          s(t3).hasClass("center-align") ? i.translateY = -100 : s(t3).hasClass("right-align") ? i.translateX = 100 : s(t3).hasClass("left-align") && (i.translateX = -100), o(i);
        }}, {key: "_setSliderHeight", value: function() {
          this.$el.hasClass("fullscreen") || (this.options.indicators ? this.$el.css("height", this.options.height + 40 + "px") : this.$el.css("height", this.options.height + "px"), this.$slider.css("height", this.options.height + "px"));
        }}, {key: "_setupIndicators", value: function() {
          var n2 = this;
          this.options.indicators && (this.$indicators = s('<ul class="indicators"></ul>'), this.$slides.each(function(t3, e2) {
            var i = s('<li class="indicator-item"></li>');
            n2.$indicators.append(i[0]);
          }), this.$el.append(this.$indicators[0]), this.$indicators = this.$indicators.children("li.indicator-item"));
        }}, {key: "_removeIndicators", value: function() {
          this.$el.find("ul.indicators").remove();
        }}, {key: "set", value: function(t3) {
          var e2 = this;
          if (t3 >= this.$slides.length ? t3 = 0 : t3 < 0 && (t3 = this.$slides.length - 1), this.activeIndex != t3) {
            this.$active = this.$slides.eq(this.activeIndex);
            var i = this.$active.find(".caption");
            this.$active.removeClass("active"), o({targets: this.$active[0], opacity: 0, duration: this.options.duration, easing: "easeOutQuad", complete: function() {
              e2.$slides.not(".active").each(function(t4) {
                o({targets: t4, opacity: 0, translateX: 0, translateY: 0, duration: 0, easing: "easeOutQuad"});
              });
            }}), this._animateCaptionIn(i[0], this.options.duration), this.options.indicators && (this.$indicators.eq(this.activeIndex).removeClass("active"), this.$indicators.eq(t3).addClass("active")), o({targets: this.$slides.eq(t3)[0], opacity: 1, duration: this.options.duration, easing: "easeOutQuad"}), o({targets: this.$slides.eq(t3).find(".caption")[0], opacity: 1, translateX: 0, translateY: 0, duration: this.options.duration, delay: this.options.duration, easing: "easeOutQuad"}), this.$slides.eq(t3).addClass("active"), this.activeIndex = t3, this.start();
          }
        }}, {key: "pause", value: function() {
          clearInterval(this.interval);
        }}, {key: "start", value: function() {
          clearInterval(this.interval), this.interval = setInterval(this._handleIntervalBound, this.options.duration + this.options.interval);
        }}, {key: "next", value: function() {
          var t3 = this.activeIndex + 1;
          t3 >= this.$slides.length ? t3 = 0 : t3 < 0 && (t3 = this.$slides.length - 1), this.set(t3);
        }}, {key: "prev", value: function() {
          var t3 = this.activeIndex - 1;
          t3 >= this.$slides.length ? t3 = 0 : t3 < 0 && (t3 = this.$slides.length - 1), this.set(t3);
        }}], [{key: "init", value: function(t3, e2) {
          return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t3, e2);
        }}, {key: "getInstance", value: function(t3) {
          return (t3.jquery ? t3[0] : t3).M_Slider;
        }}, {key: "defaults", get: function() {
          return e;
        }}]), n;
      }();
      M.Slider = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "slider", "M_Slider");
    }(cash, M.anime), function(n, s) {
      n(document).on("click", ".card", function(t) {
        if (n(this).children(".card-reveal").length) {
          var i = n(t.target).closest(".card");
          i.data("initialOverflow") === void 0 && i.data("initialOverflow", i.css("overflow") === void 0 ? "" : i.css("overflow"));
          var e = n(this).find(".card-reveal");
          n(t.target).is(n(".card-reveal .card-title")) || n(t.target).is(n(".card-reveal .card-title i")) ? s({targets: e[0], translateY: 0, duration: 225, easing: "easeInOutQuad", complete: function(t2) {
            var e2 = t2.animatables[0].target;
            n(e2).css({display: "none"}), i.css("overflow", i.data("initialOverflow"));
          }}) : (n(t.target).is(n(".card .activator")) || n(t.target).is(n(".card .activator i"))) && (i.css("overflow", "hidden"), e.css({display: "block"}), s({targets: e[0], translateY: "-100%", duration: 300, easing: "easeInOutQuad"}));
        }
      });
    }(cash, M.anime), function(h) {
      "use strict";
      var e = {data: [], placeholder: "", secondaryPlaceholder: "", autocompleteOptions: {}, limit: 1 / 0, onChipAdd: null, onChipSelect: null, onChipDelete: null}, t = function(t2) {
        function l(t3, e2) {
          _classCallCheck(this, l);
          var i = _possibleConstructorReturn(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this, l, t3, e2));
          return (i.el.M_Chips = i).options = h.extend({}, l.defaults, e2), i.$el.addClass("chips input-field"), i.chipsData = [], i.$chips = h(), i._setupInput(), i.hasAutocomplete = 0 < Object.keys(i.options.autocompleteOptions).length, i.$input.attr("id") || i.$input.attr("id", M.guid()), i.options.data.length && (i.chipsData = i.options.data, i._renderChips(i.chipsData)), i.hasAutocomplete && i._setupAutocomplete(), i._setPlaceholder(), i._setupLabel(), i._setupEventHandlers(), i;
        }
        return _inherits(l, Component), _createClass(l, [{key: "getData", value: function() {
          return this.chipsData;
        }}, {key: "destroy", value: function() {
          this._removeEventHandlers(), this.$chips.remove(), this.el.M_Chips = void 0;
        }}, {key: "_setupEventHandlers", value: function() {
          this._handleChipClickBound = this._handleChipClick.bind(this), this._handleInputKeydownBound = this._handleInputKeydown.bind(this), this._handleInputFocusBound = this._handleInputFocus.bind(this), this._handleInputBlurBound = this._handleInputBlur.bind(this), this.el.addEventListener("click", this._handleChipClickBound), document.addEventListener("keydown", l._handleChipsKeydown), document.addEventListener("keyup", l._handleChipsKeyup), this.el.addEventListener("blur", l._handleChipsBlur, true), this.$input[0].addEventListener("focus", this._handleInputFocusBound), this.$input[0].addEventListener("blur", this._handleInputBlurBound), this.$input[0].addEventListener("keydown", this._handleInputKeydownBound);
        }}, {key: "_removeEventHandlers", value: function() {
          this.el.removeEventListener("click", this._handleChipClickBound), document.removeEventListener("keydown", l._handleChipsKeydown), document.removeEventListener("keyup", l._handleChipsKeyup), this.el.removeEventListener("blur", l._handleChipsBlur, true), this.$input[0].removeEventListener("focus", this._handleInputFocusBound), this.$input[0].removeEventListener("blur", this._handleInputBlurBound), this.$input[0].removeEventListener("keydown", this._handleInputKeydownBound);
        }}, {key: "_handleChipClick", value: function(t3) {
          var e2 = h(t3.target).closest(".chip"), i = h(t3.target).is(".close");
          if (e2.length) {
            var n = e2.index();
            i ? (this.deleteChip(n), this.$input[0].focus()) : this.selectChip(n);
          } else
            this.$input[0].focus();
        }}, {key: "_handleInputFocus", value: function() {
          this.$el.addClass("focus");
        }}, {key: "_handleInputBlur", value: function() {
          this.$el.removeClass("focus");
        }}, {key: "_handleInputKeydown", value: function(t3) {
          if (l._keydown = true, t3.keyCode === 13) {
            if (this.hasAutocomplete && this.autocomplete && this.autocomplete.isOpen)
              return;
            t3.preventDefault(), this.addChip({tag: this.$input[0].value}), this.$input[0].value = "";
          } else
            t3.keyCode !== 8 && t3.keyCode !== 37 || this.$input[0].value !== "" || !this.chipsData.length || (t3.preventDefault(), this.selectChip(this.chipsData.length - 1));
        }}, {key: "_renderChip", value: function(t3) {
          if (t3.tag) {
            var e2 = document.createElement("div"), i = document.createElement("i");
            if (e2.classList.add("chip"), e2.textContent = t3.tag, e2.setAttribute("tabindex", 0), h(i).addClass("material-icons close"), i.textContent = "close", t3.image) {
              var n = document.createElement("img");
              n.setAttribute("src", t3.image), e2.insertBefore(n, e2.firstChild);
            }
            return e2.appendChild(i), e2;
          }
        }}, {key: "_renderChips", value: function() {
          this.$chips.remove();
          for (var t3 = 0; t3 < this.chipsData.length; t3++) {
            var e2 = this._renderChip(this.chipsData[t3]);
            this.$el.append(e2), this.$chips.add(e2);
          }
          this.$el.append(this.$input[0]);
        }}, {key: "_setupAutocomplete", value: function() {
          var e2 = this;
          this.options.autocompleteOptions.onAutocomplete = function(t3) {
            e2.addChip({tag: t3}), e2.$input[0].value = "", e2.$input[0].focus();
          }, this.autocomplete = M.Autocomplete.init(this.$input[0], this.options.autocompleteOptions);
        }}, {key: "_setupInput", value: function() {
          this.$input = this.$el.find("input"), this.$input.length || (this.$input = h("<input></input>"), this.$el.append(this.$input)), this.$input.addClass("input");
        }}, {key: "_setupLabel", value: function() {
          this.$label = this.$el.find("label"), this.$label.length && this.$label.setAttribute("for", this.$input.attr("id"));
        }}, {key: "_setPlaceholder", value: function() {
          this.chipsData !== void 0 && !this.chipsData.length && this.options.placeholder ? h(this.$input).prop("placeholder", this.options.placeholder) : (this.chipsData === void 0 || this.chipsData.length) && this.options.secondaryPlaceholder && h(this.$input).prop("placeholder", this.options.secondaryPlaceholder);
        }}, {key: "_isValid", value: function(t3) {
          if (t3.hasOwnProperty("tag") && t3.tag !== "") {
            for (var e2 = false, i = 0; i < this.chipsData.length; i++)
              if (this.chipsData[i].tag === t3.tag) {
                e2 = true;
                break;
              }
            return !e2;
          }
          return false;
        }}, {key: "addChip", value: function(t3) {
          if (this._isValid(t3) && !(this.chipsData.length >= this.options.limit)) {
            var e2 = this._renderChip(t3);
            this.$chips.add(e2), this.chipsData.push(t3), h(this.$input).before(e2), this._setPlaceholder(), typeof this.options.onChipAdd == "function" && this.options.onChipAdd.call(this, this.$el, e2);
          }
        }}, {key: "deleteChip", value: function(t3) {
          var e2 = this.$chips.eq(t3);
          this.$chips.eq(t3).remove(), this.$chips = this.$chips.filter(function(t4) {
            return 0 <= h(t4).index();
          }), this.chipsData.splice(t3, 1), this._setPlaceholder(), typeof this.options.onChipDelete == "function" && this.options.onChipDelete.call(this, this.$el, e2[0]);
        }}, {key: "selectChip", value: function(t3) {
          var e2 = this.$chips.eq(t3);
          (this._selectedChip = e2)[0].focus(), typeof this.options.onChipSelect == "function" && this.options.onChipSelect.call(this, this.$el, e2[0]);
        }}], [{key: "init", value: function(t3, e2) {
          return _get(l.__proto__ || Object.getPrototypeOf(l), "init", this).call(this, this, t3, e2);
        }}, {key: "getInstance", value: function(t3) {
          return (t3.jquery ? t3[0] : t3).M_Chips;
        }}, {key: "_handleChipsKeydown", value: function(t3) {
          l._keydown = true;
          var e2 = h(t3.target).closest(".chips"), i = t3.target && e2.length;
          if (!h(t3.target).is("input, textarea") && i) {
            var n = e2[0].M_Chips;
            if (t3.keyCode === 8 || t3.keyCode === 46) {
              t3.preventDefault();
              var s = n.chipsData.length;
              if (n._selectedChip) {
                var o = n._selectedChip.index();
                n.deleteChip(o), n._selectedChip = null, s = Math.max(o - 1, 0);
              }
              n.chipsData.length && n.selectChip(s);
            } else if (t3.keyCode === 37) {
              if (n._selectedChip) {
                var a = n._selectedChip.index() - 1;
                if (a < 0)
                  return;
                n.selectChip(a);
              }
            } else if (t3.keyCode === 39 && n._selectedChip) {
              var r = n._selectedChip.index() + 1;
              r >= n.chipsData.length ? n.$input[0].focus() : n.selectChip(r);
            }
          }
        }}, {key: "_handleChipsKeyup", value: function(t3) {
          l._keydown = false;
        }}, {key: "_handleChipsBlur", value: function(t3) {
          l._keydown || (h(t3.target).closest(".chips")[0].M_Chips._selectedChip = null);
        }}, {key: "defaults", get: function() {
          return e;
        }}]), l;
      }();
      t._keydown = false, M.Chips = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "chips", "M_Chips"), h(document).ready(function() {
        h(document.body).on("click", ".chip .close", function() {
          var t2 = h(this).closest(".chips");
          t2.length && t2[0].M_Chips || h(this).closest(".chip").remove();
        });
      });
    }(cash), function(s) {
      "use strict";
      var e = {top: 0, bottom: 1 / 0, offset: 0, onPositionChange: null}, t = function(t2) {
        function n(t3, e2) {
          _classCallCheck(this, n);
          var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t3, e2));
          return (i.el.M_Pushpin = i).options = s.extend({}, n.defaults, e2), i.originalOffset = i.el.offsetTop, n._pushpins.push(i), i._setupEventHandlers(), i._updatePosition(), i;
        }
        return _inherits(n, Component), _createClass(n, [{key: "destroy", value: function() {
          this.el.style.top = null, this._removePinClasses(), this._removeEventHandlers();
          var t3 = n._pushpins.indexOf(this);
          n._pushpins.splice(t3, 1);
        }}, {key: "_setupEventHandlers", value: function() {
          document.addEventListener("scroll", n._updateElements);
        }}, {key: "_removeEventHandlers", value: function() {
          document.removeEventListener("scroll", n._updateElements);
        }}, {key: "_updatePosition", value: function() {
          var t3 = M.getDocumentScrollTop() + this.options.offset;
          this.options.top <= t3 && this.options.bottom >= t3 && !this.el.classList.contains("pinned") && (this._removePinClasses(), this.el.style.top = this.options.offset + "px", this.el.classList.add("pinned"), typeof this.options.onPositionChange == "function" && this.options.onPositionChange.call(this, "pinned")), t3 < this.options.top && !this.el.classList.contains("pin-top") && (this._removePinClasses(), this.el.style.top = 0, this.el.classList.add("pin-top"), typeof this.options.onPositionChange == "function" && this.options.onPositionChange.call(this, "pin-top")), t3 > this.options.bottom && !this.el.classList.contains("pin-bottom") && (this._removePinClasses(), this.el.classList.add("pin-bottom"), this.el.style.top = this.options.bottom - this.originalOffset + "px", typeof this.options.onPositionChange == "function" && this.options.onPositionChange.call(this, "pin-bottom"));
        }}, {key: "_removePinClasses", value: function() {
          this.el.classList.remove("pin-top"), this.el.classList.remove("pinned"), this.el.classList.remove("pin-bottom");
        }}], [{key: "init", value: function(t3, e2) {
          return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t3, e2);
        }}, {key: "getInstance", value: function(t3) {
          return (t3.jquery ? t3[0] : t3).M_Pushpin;
        }}, {key: "_updateElements", value: function() {
          for (var t3 in n._pushpins) {
            n._pushpins[t3]._updatePosition();
          }
        }}, {key: "defaults", get: function() {
          return e;
        }}]), n;
      }();
      t._pushpins = [], M.Pushpin = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "pushpin", "M_Pushpin");
    }(cash), function(r, s) {
      "use strict";
      var e = {direction: "top", hoverEnabled: true, toolbarEnabled: false};
      r.fn.reverse = [].reverse;
      var t = function(t2) {
        function n(t3, e2) {
          _classCallCheck(this, n);
          var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t3, e2));
          return (i.el.M_FloatingActionButton = i).options = r.extend({}, n.defaults, e2), i.isOpen = false, i.$anchor = i.$el.children("a").first(), i.$menu = i.$el.children("ul").first(), i.$floatingBtns = i.$el.find("ul .btn-floating"), i.$floatingBtnsReverse = i.$el.find("ul .btn-floating").reverse(), i.offsetY = 0, i.offsetX = 0, i.$el.addClass("direction-" + i.options.direction), i.options.direction === "top" ? i.offsetY = 40 : i.options.direction === "right" ? i.offsetX = -40 : i.options.direction === "bottom" ? i.offsetY = -40 : i.offsetX = 40, i._setupEventHandlers(), i;
        }
        return _inherits(n, Component), _createClass(n, [{key: "destroy", value: function() {
          this._removeEventHandlers(), this.el.M_FloatingActionButton = void 0;
        }}, {key: "_setupEventHandlers", value: function() {
          this._handleFABClickBound = this._handleFABClick.bind(this), this._handleOpenBound = this.open.bind(this), this._handleCloseBound = this.close.bind(this), this.options.hoverEnabled && !this.options.toolbarEnabled ? (this.el.addEventListener("mouseenter", this._handleOpenBound), this.el.addEventListener("mouseleave", this._handleCloseBound)) : this.el.addEventListener("click", this._handleFABClickBound);
        }}, {key: "_removeEventHandlers", value: function() {
          this.options.hoverEnabled && !this.options.toolbarEnabled ? (this.el.removeEventListener("mouseenter", this._handleOpenBound), this.el.removeEventListener("mouseleave", this._handleCloseBound)) : this.el.removeEventListener("click", this._handleFABClickBound);
        }}, {key: "_handleFABClick", value: function() {
          this.isOpen ? this.close() : this.open();
        }}, {key: "_handleDocumentClick", value: function(t3) {
          r(t3.target).closest(this.$menu).length || this.close();
        }}, {key: "open", value: function() {
          this.isOpen || (this.options.toolbarEnabled ? this._animateInToolbar() : this._animateInFAB(), this.isOpen = true);
        }}, {key: "close", value: function() {
          this.isOpen && (this.options.toolbarEnabled ? (window.removeEventListener("scroll", this._handleCloseBound, true), document.body.removeEventListener("click", this._handleDocumentClickBound, true), this._animateOutToolbar()) : this._animateOutFAB(), this.isOpen = false);
        }}, {key: "_animateInFAB", value: function() {
          var e2 = this;
          this.$el.addClass("active");
          var i = 0;
          this.$floatingBtnsReverse.each(function(t3) {
            s({targets: t3, opacity: 1, scale: [0.4, 1], translateY: [e2.offsetY, 0], translateX: [e2.offsetX, 0], duration: 275, delay: i, easing: "easeInOutQuad"}), i += 40;
          });
        }}, {key: "_animateOutFAB", value: function() {
          var e2 = this;
          this.$floatingBtnsReverse.each(function(t3) {
            s.remove(t3), s({targets: t3, opacity: 0, scale: 0.4, translateY: e2.offsetY, translateX: e2.offsetX, duration: 175, easing: "easeOutQuad", complete: function() {
              e2.$el.removeClass("active");
            }});
          });
        }}, {key: "_animateInToolbar", value: function() {
          var t3, e2 = this, i = window.innerWidth, n2 = window.innerHeight, s2 = this.el.getBoundingClientRect(), o = r('<div class="fab-backdrop"></div>'), a = this.$anchor.css("background-color");
          this.$anchor.append(o), this.offsetX = s2.left - i / 2 + s2.width / 2, this.offsetY = n2 - s2.bottom, t3 = i / o[0].clientWidth, this.btnBottom = s2.bottom, this.btnLeft = s2.left, this.btnWidth = s2.width, this.$el.addClass("active"), this.$el.css({"text-align": "center", width: "100%", bottom: 0, left: 0, transform: "translateX(" + this.offsetX + "px)", transition: "none"}), this.$anchor.css({transform: "translateY(" + -this.offsetY + "px)", transition: "none"}), o.css({"background-color": a}), setTimeout(function() {
            e2.$el.css({transform: "", transition: "transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s"}), e2.$anchor.css({overflow: "visible", transform: "", transition: "transform .2s"}), setTimeout(function() {
              e2.$el.css({overflow: "hidden", "background-color": a}), o.css({transform: "scale(" + t3 + ")", transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"}), e2.$menu.children("li").children("a").css({opacity: 1}), e2._handleDocumentClickBound = e2._handleDocumentClick.bind(e2), window.addEventListener("scroll", e2._handleCloseBound, true), document.body.addEventListener("click", e2._handleDocumentClickBound, true);
            }, 100);
          }, 0);
        }}, {key: "_animateOutToolbar", value: function() {
          var t3 = this, e2 = window.innerWidth, i = window.innerHeight, n2 = this.$el.find(".fab-backdrop"), s2 = this.$anchor.css("background-color");
          this.offsetX = this.btnLeft - e2 / 2 + this.btnWidth / 2, this.offsetY = i - this.btnBottom, this.$el.removeClass("active"), this.$el.css({"background-color": "transparent", transition: "none"}), this.$anchor.css({transition: "none"}), n2.css({transform: "scale(0)", "background-color": s2}), this.$menu.children("li").children("a").css({opacity: ""}), setTimeout(function() {
            n2.remove(), t3.$el.css({"text-align": "", width: "", bottom: "", left: "", overflow: "", "background-color": "", transform: "translate3d(" + -t3.offsetX + "px,0,0)"}), t3.$anchor.css({overflow: "", transform: "translate3d(0," + t3.offsetY + "px,0)"}), setTimeout(function() {
              t3.$el.css({transform: "translate3d(0,0,0)", transition: "transform .2s"}), t3.$anchor.css({transform: "translate3d(0,0,0)", transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"});
            }, 20);
          }, 200);
        }}], [{key: "init", value: function(t3, e2) {
          return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t3, e2);
        }}, {key: "getInstance", value: function(t3) {
          return (t3.jquery ? t3[0] : t3).M_FloatingActionButton;
        }}, {key: "defaults", get: function() {
          return e;
        }}]), n;
      }();
      M.FloatingActionButton = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "floatingActionButton", "M_FloatingActionButton");
    }(cash, M.anime), function(g) {
      "use strict";
      var e = {autoClose: false, format: "mmm dd, yyyy", parse: null, defaultDate: null, setDefaultDate: false, disableWeekends: false, disableDayFn: null, firstDay: 0, minDate: null, maxDate: null, yearRange: 10, minYear: 0, maxYear: 9999, minMonth: void 0, maxMonth: void 0, startRange: null, endRange: null, isRTL: false, showMonthAfterYear: false, showDaysInNextAndPreviousMonths: false, container: null, showClearBtn: false, i18n: {cancel: "Cancel", clear: "Clear", done: "Ok", previousMonth: "\u2039", nextMonth: "\u203A", months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], weekdaysAbbrev: ["S", "M", "T", "W", "T", "F", "S"]}, events: [], onSelect: null, onOpen: null, onClose: null, onDraw: null}, t = function(t2) {
        function B(t3, e2) {
          _classCallCheck(this, B);
          var i = _possibleConstructorReturn(this, (B.__proto__ || Object.getPrototypeOf(B)).call(this, B, t3, e2));
          (i.el.M_Datepicker = i).options = g.extend({}, B.defaults, e2), e2 && e2.hasOwnProperty("i18n") && typeof e2.i18n == "object" && (i.options.i18n = g.extend({}, B.defaults.i18n, e2.i18n)), i.options.minDate && i.options.minDate.setHours(0, 0, 0, 0), i.options.maxDate && i.options.maxDate.setHours(0, 0, 0, 0), i.id = M.guid(), i._setupVariables(), i._insertHTMLIntoDOM(), i._setupModal(), i._setupEventHandlers(), i.options.defaultDate || (i.options.defaultDate = new Date(Date.parse(i.el.value)));
          var n = i.options.defaultDate;
          return B._isDate(n) ? i.options.setDefaultDate ? (i.setDate(n, true), i.setInputValue()) : i.gotoDate(n) : i.gotoDate(new Date()), i.isOpen = false, i;
        }
        return _inherits(B, Component), _createClass(B, [{key: "destroy", value: function() {
          this._removeEventHandlers(), this.modal.destroy(), g(this.modalEl).remove(), this.destroySelects(), this.el.M_Datepicker = void 0;
        }}, {key: "destroySelects", value: function() {
          var t3 = this.calendarEl.querySelector(".orig-select-year");
          t3 && M.FormSelect.getInstance(t3).destroy();
          var e2 = this.calendarEl.querySelector(".orig-select-month");
          e2 && M.FormSelect.getInstance(e2).destroy();
        }}, {key: "_insertHTMLIntoDOM", value: function() {
          this.options.showClearBtn && (g(this.clearBtn).css({visibility: ""}), this.clearBtn.innerHTML = this.options.i18n.clear), this.doneBtn.innerHTML = this.options.i18n.done, this.cancelBtn.innerHTML = this.options.i18n.cancel, this.options.container ? this.$modalEl.appendTo(this.options.container) : this.$modalEl.insertBefore(this.el);
        }}, {key: "_setupModal", value: function() {
          var t3 = this;
          this.modalEl.id = "modal-" + this.id, this.modal = M.Modal.init(this.modalEl, {onCloseEnd: function() {
            t3.isOpen = false;
          }});
        }}, {key: "toString", value: function(t3) {
          var e2 = this;
          return t3 = t3 || this.options.format, B._isDate(this.date) ? t3.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g).map(function(t4) {
            return e2.formats[t4] ? e2.formats[t4]() : t4;
          }).join("") : "";
        }}, {key: "setDate", value: function(t3, e2) {
          if (!t3)
            return this.date = null, this._renderDateDisplay(), this.draw();
          if (typeof t3 == "string" && (t3 = new Date(Date.parse(t3))), B._isDate(t3)) {
            var i = this.options.minDate, n = this.options.maxDate;
            B._isDate(i) && t3 < i ? t3 = i : B._isDate(n) && n < t3 && (t3 = n), this.date = new Date(t3.getTime()), this._renderDateDisplay(), B._setToStartOfDay(this.date), this.gotoDate(this.date), e2 || typeof this.options.onSelect != "function" || this.options.onSelect.call(this, this.date);
          }
        }}, {key: "setInputValue", value: function() {
          this.el.value = this.toString(), this.$el.trigger("change", {firedBy: this});
        }}, {key: "_renderDateDisplay", value: function() {
          var t3 = B._isDate(this.date) ? this.date : new Date(), e2 = this.options.i18n, i = e2.weekdaysShort[t3.getDay()], n = e2.monthsShort[t3.getMonth()], s = t3.getDate();
          this.yearTextEl.innerHTML = t3.getFullYear(), this.dateTextEl.innerHTML = i + ", " + n + " " + s;
        }}, {key: "gotoDate", value: function(t3) {
          var e2 = true;
          if (B._isDate(t3)) {
            if (this.calendars) {
              var i = new Date(this.calendars[0].year, this.calendars[0].month, 1), n = new Date(this.calendars[this.calendars.length - 1].year, this.calendars[this.calendars.length - 1].month, 1), s = t3.getTime();
              n.setMonth(n.getMonth() + 1), n.setDate(n.getDate() - 1), e2 = s < i.getTime() || n.getTime() < s;
            }
            e2 && (this.calendars = [{month: t3.getMonth(), year: t3.getFullYear()}]), this.adjustCalendars();
          }
        }}, {key: "adjustCalendars", value: function() {
          this.calendars[0] = this.adjustCalendar(this.calendars[0]), this.draw();
        }}, {key: "adjustCalendar", value: function(t3) {
          return t3.month < 0 && (t3.year -= Math.ceil(Math.abs(t3.month) / 12), t3.month += 12), 11 < t3.month && (t3.year += Math.floor(Math.abs(t3.month) / 12), t3.month -= 12), t3;
        }}, {key: "nextMonth", value: function() {
          this.calendars[0].month++, this.adjustCalendars();
        }}, {key: "prevMonth", value: function() {
          this.calendars[0].month--, this.adjustCalendars();
        }}, {key: "render", value: function(t3, e2, i) {
          var n = this.options, s = new Date(), o = B._getDaysInMonth(t3, e2), a = new Date(t3, e2, 1).getDay(), r = [], l = [];
          B._setToStartOfDay(s), 0 < n.firstDay && (a -= n.firstDay) < 0 && (a += 7);
          for (var h = e2 === 0 ? 11 : e2 - 1, d = e2 === 11 ? 0 : e2 + 1, u = e2 === 0 ? t3 - 1 : t3, c = e2 === 11 ? t3 + 1 : t3, p = B._getDaysInMonth(u, h), v = o + a, f = v; 7 < f; )
            f -= 7;
          v += 7 - f;
          for (var m = false, g2 = 0, _2 = 0; g2 < v; g2++) {
            var y = new Date(t3, e2, g2 - a + 1), k = !!B._isDate(this.date) && B._compareDates(y, this.date), b = B._compareDates(y, s), w = n.events.indexOf(y.toDateString()) !== -1, C = g2 < a || o + a <= g2, E = g2 - a + 1, M2 = e2, O = t3, x = n.startRange && B._compareDates(n.startRange, y), L = n.endRange && B._compareDates(n.endRange, y), T = n.startRange && n.endRange && n.startRange < y && y < n.endRange;
            C && (g2 < a ? (E = p + E, M2 = h, O = u) : (E -= o, M2 = d, O = c));
            var $2 = {day: E, month: M2, year: O, hasEvent: w, isSelected: k, isToday: b, isDisabled: n.minDate && y < n.minDate || n.maxDate && y > n.maxDate || n.disableWeekends && B._isWeekend(y) || n.disableDayFn && n.disableDayFn(y), isEmpty: C, isStartRange: x, isEndRange: L, isInRange: T, showDaysInNextAndPreviousMonths: n.showDaysInNextAndPreviousMonths};
            l.push(this.renderDay($2)), ++_2 == 7 && (r.push(this.renderRow(l, n.isRTL, m)), _2 = 0, m = !(l = []));
          }
          return this.renderTable(n, r, i);
        }}, {key: "renderDay", value: function(t3) {
          var e2 = [], i = "false";
          if (t3.isEmpty) {
            if (!t3.showDaysInNextAndPreviousMonths)
              return '<td class="is-empty"></td>';
            e2.push("is-outside-current-month"), e2.push("is-selection-disabled");
          }
          return t3.isDisabled && e2.push("is-disabled"), t3.isToday && e2.push("is-today"), t3.isSelected && (e2.push("is-selected"), i = "true"), t3.hasEvent && e2.push("has-event"), t3.isInRange && e2.push("is-inrange"), t3.isStartRange && e2.push("is-startrange"), t3.isEndRange && e2.push("is-endrange"), '<td data-day="' + t3.day + '" class="' + e2.join(" ") + '" aria-selected="' + i + '"><button class="datepicker-day-button" type="button" data-year="' + t3.year + '" data-month="' + t3.month + '" data-day="' + t3.day + '">' + t3.day + "</button></td>";
        }}, {key: "renderRow", value: function(t3, e2, i) {
          return '<tr class="datepicker-row' + (i ? " is-selected" : "") + '">' + (e2 ? t3.reverse() : t3).join("") + "</tr>";
        }}, {key: "renderTable", value: function(t3, e2, i) {
          return '<div class="datepicker-table-wrapper"><table cellpadding="0" cellspacing="0" class="datepicker-table" role="grid" aria-labelledby="' + i + '">' + this.renderHead(t3) + this.renderBody(e2) + "</table></div>";
        }}, {key: "renderHead", value: function(t3) {
          var e2 = void 0, i = [];
          for (e2 = 0; e2 < 7; e2++)
            i.push('<th scope="col"><abbr title="' + this.renderDayName(t3, e2) + '">' + this.renderDayName(t3, e2, true) + "</abbr></th>");
          return "<thead><tr>" + (t3.isRTL ? i.reverse() : i).join("") + "</tr></thead>";
        }}, {key: "renderBody", value: function(t3) {
          return "<tbody>" + t3.join("") + "</tbody>";
        }}, {key: "renderTitle", value: function(t3, e2, i, n, s, o) {
          var a, r, l = void 0, h = void 0, d = void 0, u = this.options, c = i === u.minYear, p = i === u.maxYear, v = '<div id="' + o + '" class="datepicker-controls" role="heading" aria-live="assertive">', f = true, m = true;
          for (d = [], l = 0; l < 12; l++)
            d.push('<option value="' + (i === s ? l - e2 : 12 + l - e2) + '"' + (l === n ? ' selected="selected"' : "") + (c && l < u.minMonth || p && l > u.maxMonth ? 'disabled="disabled"' : "") + ">" + u.i18n.months[l] + "</option>");
          for (a = '<select class="datepicker-select orig-select-month" tabindex="-1">' + d.join("") + "</select>", g.isArray(u.yearRange) ? (l = u.yearRange[0], h = u.yearRange[1] + 1) : (l = i - u.yearRange, h = 1 + i + u.yearRange), d = []; l < h && l <= u.maxYear; l++)
            l >= u.minYear && d.push('<option value="' + l + '" ' + (l === i ? 'selected="selected"' : "") + ">" + l + "</option>");
          r = '<select class="datepicker-select orig-select-year" tabindex="-1">' + d.join("") + "</select>";
          v += '<button class="month-prev' + (f ? "" : " is-disabled") + '" type="button"><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/><path d="M0-.5h24v24H0z" fill="none"/></svg></button>', v += '<div class="selects-container">', u.showMonthAfterYear ? v += r + a : v += a + r, v += "</div>", c && (n === 0 || u.minMonth >= n) && (f = false), p && (n === 11 || u.maxMonth <= n) && (m = false);
          return (v += '<button class="month-next' + (m ? "" : " is-disabled") + '" type="button"><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/><path d="M0-.25h24v24H0z" fill="none"/></svg></button>') + "</div>";
        }}, {key: "draw", value: function(t3) {
          if (this.isOpen || t3) {
            var e2, i = this.options, n = i.minYear, s = i.maxYear, o = i.minMonth, a = i.maxMonth, r = "";
            this._y <= n && (this._y = n, !isNaN(o) && this._m < o && (this._m = o)), this._y >= s && (this._y = s, !isNaN(a) && this._m > a && (this._m = a)), e2 = "datepicker-title-" + Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 2);
            for (var l = 0; l < 1; l++)
              this._renderDateDisplay(), r += this.renderTitle(this, l, this.calendars[l].year, this.calendars[l].month, this.calendars[0].year, e2) + this.render(this.calendars[l].year, this.calendars[l].month, e2);
            this.destroySelects(), this.calendarEl.innerHTML = r;
            var h = this.calendarEl.querySelector(".orig-select-year"), d = this.calendarEl.querySelector(".orig-select-month");
            M.FormSelect.init(h, {classes: "select-year", dropdownOptions: {container: document.body, constrainWidth: false}}), M.FormSelect.init(d, {classes: "select-month", dropdownOptions: {container: document.body, constrainWidth: false}}), h.addEventListener("change", this._handleYearChange.bind(this)), d.addEventListener("change", this._handleMonthChange.bind(this)), typeof this.options.onDraw == "function" && this.options.onDraw(this);
          }
        }}, {key: "_setupEventHandlers", value: function() {
          this._handleInputKeydownBound = this._handleInputKeydown.bind(this), this._handleInputClickBound = this._handleInputClick.bind(this), this._handleInputChangeBound = this._handleInputChange.bind(this), this._handleCalendarClickBound = this._handleCalendarClick.bind(this), this._finishSelectionBound = this._finishSelection.bind(this), this._handleMonthChange = this._handleMonthChange.bind(this), this._closeBound = this.close.bind(this), this.el.addEventListener("click", this._handleInputClickBound), this.el.addEventListener("keydown", this._handleInputKeydownBound), this.el.addEventListener("change", this._handleInputChangeBound), this.calendarEl.addEventListener("click", this._handleCalendarClickBound), this.doneBtn.addEventListener("click", this._finishSelectionBound), this.cancelBtn.addEventListener("click", this._closeBound), this.options.showClearBtn && (this._handleClearClickBound = this._handleClearClick.bind(this), this.clearBtn.addEventListener("click", this._handleClearClickBound));
        }}, {key: "_setupVariables", value: function() {
          var e2 = this;
          this.$modalEl = g(B._template), this.modalEl = this.$modalEl[0], this.calendarEl = this.modalEl.querySelector(".datepicker-calendar"), this.yearTextEl = this.modalEl.querySelector(".year-text"), this.dateTextEl = this.modalEl.querySelector(".date-text"), this.options.showClearBtn && (this.clearBtn = this.modalEl.querySelector(".datepicker-clear")), this.doneBtn = this.modalEl.querySelector(".datepicker-done"), this.cancelBtn = this.modalEl.querySelector(".datepicker-cancel"), this.formats = {d: function() {
            return e2.date.getDate();
          }, dd: function() {
            var t3 = e2.date.getDate();
            return (t3 < 10 ? "0" : "") + t3;
          }, ddd: function() {
            return e2.options.i18n.weekdaysShort[e2.date.getDay()];
          }, dddd: function() {
            return e2.options.i18n.weekdays[e2.date.getDay()];
          }, m: function() {
            return e2.date.getMonth() + 1;
          }, mm: function() {
            var t3 = e2.date.getMonth() + 1;
            return (t3 < 10 ? "0" : "") + t3;
          }, mmm: function() {
            return e2.options.i18n.monthsShort[e2.date.getMonth()];
          }, mmmm: function() {
            return e2.options.i18n.months[e2.date.getMonth()];
          }, yy: function() {
            return ("" + e2.date.getFullYear()).slice(2);
          }, yyyy: function() {
            return e2.date.getFullYear();
          }};
        }}, {key: "_removeEventHandlers", value: function() {
          this.el.removeEventListener("click", this._handleInputClickBound), this.el.removeEventListener("keydown", this._handleInputKeydownBound), this.el.removeEventListener("change", this._handleInputChangeBound), this.calendarEl.removeEventListener("click", this._handleCalendarClickBound);
        }}, {key: "_handleInputClick", value: function() {
          this.open();
        }}, {key: "_handleInputKeydown", value: function(t3) {
          t3.which === M.keys.ENTER && (t3.preventDefault(), this.open());
        }}, {key: "_handleCalendarClick", value: function(t3) {
          if (this.isOpen) {
            var e2 = g(t3.target);
            e2.hasClass("is-disabled") || (!e2.hasClass("datepicker-day-button") || e2.hasClass("is-empty") || e2.parent().hasClass("is-disabled") ? e2.closest(".month-prev").length ? this.prevMonth() : e2.closest(".month-next").length && this.nextMonth() : (this.setDate(new Date(t3.target.getAttribute("data-year"), t3.target.getAttribute("data-month"), t3.target.getAttribute("data-day"))), this.options.autoClose && this._finishSelection()));
          }
        }}, {key: "_handleClearClick", value: function() {
          this.date = null, this.setInputValue(), this.close();
        }}, {key: "_handleMonthChange", value: function(t3) {
          this.gotoMonth(t3.target.value);
        }}, {key: "_handleYearChange", value: function(t3) {
          this.gotoYear(t3.target.value);
        }}, {key: "gotoMonth", value: function(t3) {
          isNaN(t3) || (this.calendars[0].month = parseInt(t3, 10), this.adjustCalendars());
        }}, {key: "gotoYear", value: function(t3) {
          isNaN(t3) || (this.calendars[0].year = parseInt(t3, 10), this.adjustCalendars());
        }}, {key: "_handleInputChange", value: function(t3) {
          var e2 = void 0;
          t3.firedBy !== this && (e2 = this.options.parse ? this.options.parse(this.el.value, this.options.format) : new Date(Date.parse(this.el.value)), B._isDate(e2) && this.setDate(e2));
        }}, {key: "renderDayName", value: function(t3, e2, i) {
          for (e2 += t3.firstDay; 7 <= e2; )
            e2 -= 7;
          return i ? t3.i18n.weekdaysAbbrev[e2] : t3.i18n.weekdays[e2];
        }}, {key: "_finishSelection", value: function() {
          this.setInputValue(), this.close();
        }}, {key: "open", value: function() {
          if (!this.isOpen)
            return this.isOpen = true, typeof this.options.onOpen == "function" && this.options.onOpen.call(this), this.draw(), this.modal.open(), this;
        }}, {key: "close", value: function() {
          if (this.isOpen)
            return this.isOpen = false, typeof this.options.onClose == "function" && this.options.onClose.call(this), this.modal.close(), this;
        }}], [{key: "init", value: function(t3, e2) {
          return _get(B.__proto__ || Object.getPrototypeOf(B), "init", this).call(this, this, t3, e2);
        }}, {key: "_isDate", value: function(t3) {
          return /Date/.test(Object.prototype.toString.call(t3)) && !isNaN(t3.getTime());
        }}, {key: "_isWeekend", value: function(t3) {
          var e2 = t3.getDay();
          return e2 === 0 || e2 === 6;
        }}, {key: "_setToStartOfDay", value: function(t3) {
          B._isDate(t3) && t3.setHours(0, 0, 0, 0);
        }}, {key: "_getDaysInMonth", value: function(t3, e2) {
          return [31, B._isLeapYear(t3) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e2];
        }}, {key: "_isLeapYear", value: function(t3) {
          return t3 % 4 == 0 && t3 % 100 != 0 || t3 % 400 == 0;
        }}, {key: "_compareDates", value: function(t3, e2) {
          return t3.getTime() === e2.getTime();
        }}, {key: "_setToStartOfDay", value: function(t3) {
          B._isDate(t3) && t3.setHours(0, 0, 0, 0);
        }}, {key: "getInstance", value: function(t3) {
          return (t3.jquery ? t3[0] : t3).M_Datepicker;
        }}, {key: "defaults", get: function() {
          return e;
        }}]), B;
      }();
      t._template = ['<div class= "modal datepicker-modal">', '<div class="modal-content datepicker-container">', '<div class="datepicker-date-display">', '<span class="year-text"></span>', '<span class="date-text"></span>', "</div>", '<div class="datepicker-calendar-container">', '<div class="datepicker-calendar"></div>', '<div class="datepicker-footer">', '<button class="btn-flat datepicker-clear waves-effect" style="visibility: hidden;" type="button"></button>', '<div class="confirmation-btns">', '<button class="btn-flat datepicker-cancel waves-effect" type="button"></button>', '<button class="btn-flat datepicker-done waves-effect" type="button"></button>', "</div>", "</div>", "</div>", "</div>", "</div>"].join(""), M.Datepicker = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "datepicker", "M_Datepicker");
    }(cash), function(h) {
      "use strict";
      var e = {dialRadius: 135, outerRadius: 105, innerRadius: 70, tickRadius: 20, duration: 350, container: null, defaultTime: "now", fromNow: 0, showClearBtn: false, i18n: {cancel: "Cancel", clear: "Clear", done: "Ok"}, autoClose: false, twelveHour: true, vibrate: true, onOpenStart: null, onOpenEnd: null, onCloseStart: null, onCloseEnd: null, onSelect: null}, t = function(t2) {
        function f(t3, e2) {
          _classCallCheck(this, f);
          var i = _possibleConstructorReturn(this, (f.__proto__ || Object.getPrototypeOf(f)).call(this, f, t3, e2));
          return (i.el.M_Timepicker = i).options = h.extend({}, f.defaults, e2), i.id = M.guid(), i._insertHTMLIntoDOM(), i._setupModal(), i._setupVariables(), i._setupEventHandlers(), i._clockSetup(), i._pickerSetup(), i;
        }
        return _inherits(f, Component), _createClass(f, [{key: "destroy", value: function() {
          this._removeEventHandlers(), this.modal.destroy(), h(this.modalEl).remove(), this.el.M_Timepicker = void 0;
        }}, {key: "_setupEventHandlers", value: function() {
          this._handleInputKeydownBound = this._handleInputKeydown.bind(this), this._handleInputClickBound = this._handleInputClick.bind(this), this._handleClockClickStartBound = this._handleClockClickStart.bind(this), this._handleDocumentClickMoveBound = this._handleDocumentClickMove.bind(this), this._handleDocumentClickEndBound = this._handleDocumentClickEnd.bind(this), this.el.addEventListener("click", this._handleInputClickBound), this.el.addEventListener("keydown", this._handleInputKeydownBound), this.plate.addEventListener("mousedown", this._handleClockClickStartBound), this.plate.addEventListener("touchstart", this._handleClockClickStartBound), h(this.spanHours).on("click", this.showView.bind(this, "hours")), h(this.spanMinutes).on("click", this.showView.bind(this, "minutes"));
        }}, {key: "_removeEventHandlers", value: function() {
          this.el.removeEventListener("click", this._handleInputClickBound), this.el.removeEventListener("keydown", this._handleInputKeydownBound);
        }}, {key: "_handleInputClick", value: function() {
          this.open();
        }}, {key: "_handleInputKeydown", value: function(t3) {
          t3.which === M.keys.ENTER && (t3.preventDefault(), this.open());
        }}, {key: "_handleClockClickStart", value: function(t3) {
          t3.preventDefault();
          var e2 = this.plate.getBoundingClientRect(), i = e2.left, n = e2.top;
          this.x0 = i + this.options.dialRadius, this.y0 = n + this.options.dialRadius, this.moved = false;
          var s = f._Pos(t3);
          this.dx = s.x - this.x0, this.dy = s.y - this.y0, this.setHand(this.dx, this.dy, false), document.addEventListener("mousemove", this._handleDocumentClickMoveBound), document.addEventListener("touchmove", this._handleDocumentClickMoveBound), document.addEventListener("mouseup", this._handleDocumentClickEndBound), document.addEventListener("touchend", this._handleDocumentClickEndBound);
        }}, {key: "_handleDocumentClickMove", value: function(t3) {
          t3.preventDefault();
          var e2 = f._Pos(t3), i = e2.x - this.x0, n = e2.y - this.y0;
          this.moved = true, this.setHand(i, n, false, true);
        }}, {key: "_handleDocumentClickEnd", value: function(t3) {
          var e2 = this;
          t3.preventDefault(), document.removeEventListener("mouseup", this._handleDocumentClickEndBound), document.removeEventListener("touchend", this._handleDocumentClickEndBound);
          var i = f._Pos(t3), n = i.x - this.x0, s = i.y - this.y0;
          this.moved && n === this.dx && s === this.dy && this.setHand(n, s), this.currentView === "hours" ? this.showView("minutes", this.options.duration / 2) : this.options.autoClose && (h(this.minutesView).addClass("timepicker-dial-out"), setTimeout(function() {
            e2.done();
          }, this.options.duration / 2)), typeof this.options.onSelect == "function" && this.options.onSelect.call(this, this.hours, this.minutes), document.removeEventListener("mousemove", this._handleDocumentClickMoveBound), document.removeEventListener("touchmove", this._handleDocumentClickMoveBound);
        }}, {key: "_insertHTMLIntoDOM", value: function() {
          this.$modalEl = h(f._template), this.modalEl = this.$modalEl[0], this.modalEl.id = "modal-" + this.id;
          var t3 = document.querySelector(this.options.container);
          this.options.container && t3 ? this.$modalEl.appendTo(t3) : this.$modalEl.insertBefore(this.el);
        }}, {key: "_setupModal", value: function() {
          var t3 = this;
          this.modal = M.Modal.init(this.modalEl, {onOpenStart: this.options.onOpenStart, onOpenEnd: this.options.onOpenEnd, onCloseStart: this.options.onCloseStart, onCloseEnd: function() {
            typeof t3.options.onCloseEnd == "function" && t3.options.onCloseEnd.call(t3), t3.isOpen = false;
          }});
        }}, {key: "_setupVariables", value: function() {
          this.currentView = "hours", this.vibrate = navigator.vibrate ? "vibrate" : navigator.webkitVibrate ? "webkitVibrate" : null, this._canvas = this.modalEl.querySelector(".timepicker-canvas"), this.plate = this.modalEl.querySelector(".timepicker-plate"), this.hoursView = this.modalEl.querySelector(".timepicker-hours"), this.minutesView = this.modalEl.querySelector(".timepicker-minutes"), this.spanHours = this.modalEl.querySelector(".timepicker-span-hours"), this.spanMinutes = this.modalEl.querySelector(".timepicker-span-minutes"), this.spanAmPm = this.modalEl.querySelector(".timepicker-span-am-pm"), this.footer = this.modalEl.querySelector(".timepicker-footer"), this.amOrPm = "PM";
        }}, {key: "_pickerSetup", value: function() {
          var t3 = h('<button class="btn-flat timepicker-clear waves-effect" style="visibility: hidden;" type="button" tabindex="' + (this.options.twelveHour ? "3" : "1") + '">' + this.options.i18n.clear + "</button>").appendTo(this.footer).on("click", this.clear.bind(this));
          this.options.showClearBtn && t3.css({visibility: ""});
          var e2 = h('<div class="confirmation-btns"></div>');
          h('<button class="btn-flat timepicker-close waves-effect" type="button" tabindex="' + (this.options.twelveHour ? "3" : "1") + '">' + this.options.i18n.cancel + "</button>").appendTo(e2).on("click", this.close.bind(this)), h('<button class="btn-flat timepicker-close waves-effect" type="button" tabindex="' + (this.options.twelveHour ? "3" : "1") + '">' + this.options.i18n.done + "</button>").appendTo(e2).on("click", this.done.bind(this)), e2.appendTo(this.footer);
        }}, {key: "_clockSetup", value: function() {
          this.options.twelveHour && (this.$amBtn = h('<div class="am-btn">AM</div>'), this.$pmBtn = h('<div class="pm-btn">PM</div>'), this.$amBtn.on("click", this._handleAmPmClick.bind(this)).appendTo(this.spanAmPm), this.$pmBtn.on("click", this._handleAmPmClick.bind(this)).appendTo(this.spanAmPm)), this._buildHoursView(), this._buildMinutesView(), this._buildSVGClock();
        }}, {key: "_buildSVGClock", value: function() {
          var t3 = this.options.dialRadius, e2 = this.options.tickRadius, i = 2 * t3, n = f._createSVGEl("svg");
          n.setAttribute("class", "timepicker-svg"), n.setAttribute("width", i), n.setAttribute("height", i);
          var s = f._createSVGEl("g");
          s.setAttribute("transform", "translate(" + t3 + "," + t3 + ")");
          var o = f._createSVGEl("circle");
          o.setAttribute("class", "timepicker-canvas-bearing"), o.setAttribute("cx", 0), o.setAttribute("cy", 0), o.setAttribute("r", 4);
          var a = f._createSVGEl("line");
          a.setAttribute("x1", 0), a.setAttribute("y1", 0);
          var r = f._createSVGEl("circle");
          r.setAttribute("class", "timepicker-canvas-bg"), r.setAttribute("r", e2), s.appendChild(a), s.appendChild(r), s.appendChild(o), n.appendChild(s), this._canvas.appendChild(n), this.hand = a, this.bg = r, this.bearing = o, this.g = s;
        }}, {key: "_buildHoursView", value: function() {
          var t3 = h('<div class="timepicker-tick"></div>');
          if (this.options.twelveHour)
            for (var e2 = 1; e2 < 13; e2 += 1) {
              var i = t3.clone(), n = e2 / 6 * Math.PI, s = this.options.outerRadius;
              i.css({left: this.options.dialRadius + Math.sin(n) * s - this.options.tickRadius + "px", top: this.options.dialRadius - Math.cos(n) * s - this.options.tickRadius + "px"}), i.html(e2 === 0 ? "00" : e2), this.hoursView.appendChild(i[0]);
            }
          else
            for (var o = 0; o < 24; o += 1) {
              var a = t3.clone(), r = o / 6 * Math.PI, l = 0 < o && o < 13 ? this.options.innerRadius : this.options.outerRadius;
              a.css({left: this.options.dialRadius + Math.sin(r) * l - this.options.tickRadius + "px", top: this.options.dialRadius - Math.cos(r) * l - this.options.tickRadius + "px"}), a.html(o === 0 ? "00" : o), this.hoursView.appendChild(a[0]);
            }
        }}, {key: "_buildMinutesView", value: function() {
          for (var t3 = h('<div class="timepicker-tick"></div>'), e2 = 0; e2 < 60; e2 += 5) {
            var i = t3.clone(), n = e2 / 30 * Math.PI;
            i.css({left: this.options.dialRadius + Math.sin(n) * this.options.outerRadius - this.options.tickRadius + "px", top: this.options.dialRadius - Math.cos(n) * this.options.outerRadius - this.options.tickRadius + "px"}), i.html(f._addLeadingZero(e2)), this.minutesView.appendChild(i[0]);
          }
        }}, {key: "_handleAmPmClick", value: function(t3) {
          var e2 = h(t3.target);
          this.amOrPm = e2.hasClass("am-btn") ? "AM" : "PM", this._updateAmPmView();
        }}, {key: "_updateAmPmView", value: function() {
          this.options.twelveHour && (this.$amBtn.toggleClass("text-primary", this.amOrPm === "AM"), this.$pmBtn.toggleClass("text-primary", this.amOrPm === "PM"));
        }}, {key: "_updateTimeFromInput", value: function() {
          var t3 = ((this.el.value || this.options.defaultTime || "") + "").split(":");
          if (this.options.twelveHour && t3[1] !== void 0 && (0 < t3[1].toUpperCase().indexOf("AM") ? this.amOrPm = "AM" : this.amOrPm = "PM", t3[1] = t3[1].replace("AM", "").replace("PM", "")), t3[0] === "now") {
            var e2 = new Date(+new Date() + this.options.fromNow);
            t3 = [e2.getHours(), e2.getMinutes()], this.options.twelveHour && (this.amOrPm = 12 <= t3[0] && t3[0] < 24 ? "PM" : "AM");
          }
          this.hours = +t3[0] || 0, this.minutes = +t3[1] || 0, this.spanHours.innerHTML = this.hours, this.spanMinutes.innerHTML = f._addLeadingZero(this.minutes), this._updateAmPmView();
        }}, {key: "showView", value: function(t3, e2) {
          t3 === "minutes" && h(this.hoursView).css("visibility");
          var i = t3 === "hours", n = i ? this.hoursView : this.minutesView, s = i ? this.minutesView : this.hoursView;
          this.currentView = t3, h(this.spanHours).toggleClass("text-primary", i), h(this.spanMinutes).toggleClass("text-primary", !i), s.classList.add("timepicker-dial-out"), h(n).css("visibility", "visible").removeClass("timepicker-dial-out"), this.resetClock(e2), clearTimeout(this.toggleViewTimer), this.toggleViewTimer = setTimeout(function() {
            h(s).css("visibility", "hidden");
          }, this.options.duration);
        }}, {key: "resetClock", value: function(t3) {
          var e2 = this.currentView, i = this[e2], n = e2 === "hours", s = i * (Math.PI / (n ? 6 : 30)), o = n && 0 < i && i < 13 ? this.options.innerRadius : this.options.outerRadius, a = Math.sin(s) * o, r = -Math.cos(s) * o, l = this;
          t3 ? (h(this.canvas).addClass("timepicker-canvas-out"), setTimeout(function() {
            h(l.canvas).removeClass("timepicker-canvas-out"), l.setHand(a, r);
          }, t3)) : this.setHand(a, r);
        }}, {key: "setHand", value: function(t3, e2, i) {
          var n = this, s = Math.atan2(t3, -e2), o = this.currentView === "hours", a = Math.PI / (o || i ? 6 : 30), r = Math.sqrt(t3 * t3 + e2 * e2), l = o && r < (this.options.outerRadius + this.options.innerRadius) / 2, h2 = l ? this.options.innerRadius : this.options.outerRadius;
          this.options.twelveHour && (h2 = this.options.outerRadius), s < 0 && (s = 2 * Math.PI + s);
          var d = Math.round(s / a);
          s = d * a, this.options.twelveHour ? o ? d === 0 && (d = 12) : (i && (d *= 5), d === 60 && (d = 0)) : o ? (d === 12 && (d = 0), d = l ? d === 0 ? 12 : d : d === 0 ? 0 : d + 12) : (i && (d *= 5), d === 60 && (d = 0)), this[this.currentView] !== d && this.vibrate && this.options.vibrate && (this.vibrateTimer || (navigator[this.vibrate](10), this.vibrateTimer = setTimeout(function() {
            n.vibrateTimer = null;
          }, 100))), this[this.currentView] = d, o ? this.spanHours.innerHTML = d : this.spanMinutes.innerHTML = f._addLeadingZero(d);
          var u = Math.sin(s) * (h2 - this.options.tickRadius), c = -Math.cos(s) * (h2 - this.options.tickRadius), p = Math.sin(s) * h2, v = -Math.cos(s) * h2;
          this.hand.setAttribute("x2", u), this.hand.setAttribute("y2", c), this.bg.setAttribute("cx", p), this.bg.setAttribute("cy", v);
        }}, {key: "open", value: function() {
          this.isOpen || (this.isOpen = true, this._updateTimeFromInput(), this.showView("hours"), this.modal.open());
        }}, {key: "close", value: function() {
          this.isOpen && (this.isOpen = false, this.modal.close());
        }}, {key: "done", value: function(t3, e2) {
          var i = this.el.value, n = e2 ? "" : f._addLeadingZero(this.hours) + ":" + f._addLeadingZero(this.minutes);
          this.time = n, !e2 && this.options.twelveHour && (n = n + " " + this.amOrPm), (this.el.value = n) !== i && this.$el.trigger("change"), this.close(), this.el.focus();
        }}, {key: "clear", value: function() {
          this.done(null, true);
        }}], [{key: "init", value: function(t3, e2) {
          return _get(f.__proto__ || Object.getPrototypeOf(f), "init", this).call(this, this, t3, e2);
        }}, {key: "_addLeadingZero", value: function(t3) {
          return (t3 < 10 ? "0" : "") + t3;
        }}, {key: "_createSVGEl", value: function(t3) {
          return document.createElementNS("http://www.w3.org/2000/svg", t3);
        }}, {key: "_Pos", value: function(t3) {
          return t3.targetTouches && 1 <= t3.targetTouches.length ? {x: t3.targetTouches[0].clientX, y: t3.targetTouches[0].clientY} : {x: t3.clientX, y: t3.clientY};
        }}, {key: "getInstance", value: function(t3) {
          return (t3.jquery ? t3[0] : t3).M_Timepicker;
        }}, {key: "defaults", get: function() {
          return e;
        }}]), f;
      }();
      t._template = ['<div class= "modal timepicker-modal">', '<div class="modal-content timepicker-container">', '<div class="timepicker-digital-display">', '<div class="timepicker-text-container">', '<div class="timepicker-display-column">', '<span class="timepicker-span-hours text-primary"></span>', ":", '<span class="timepicker-span-minutes"></span>', "</div>", '<div class="timepicker-display-column timepicker-display-am-pm">', '<div class="timepicker-span-am-pm"></div>', "</div>", "</div>", "</div>", '<div class="timepicker-analog-display">', '<div class="timepicker-plate">', '<div class="timepicker-canvas"></div>', '<div class="timepicker-dial timepicker-hours"></div>', '<div class="timepicker-dial timepicker-minutes timepicker-dial-out"></div>', "</div>", '<div class="timepicker-footer"></div>', "</div>", "</div>", "</div>"].join(""), M.Timepicker = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "timepicker", "M_Timepicker");
    }(cash), function(s) {
      "use strict";
      var e = {}, t = function(t2) {
        function n(t3, e2) {
          _classCallCheck(this, n);
          var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t3, e2));
          return (i.el.M_CharacterCounter = i).options = s.extend({}, n.defaults, e2), i.isInvalid = false, i.isValidLength = false, i._setupCounter(), i._setupEventHandlers(), i;
        }
        return _inherits(n, Component), _createClass(n, [{key: "destroy", value: function() {
          this._removeEventHandlers(), this.el.CharacterCounter = void 0, this._removeCounter();
        }}, {key: "_setupEventHandlers", value: function() {
          this._handleUpdateCounterBound = this.updateCounter.bind(this), this.el.addEventListener("focus", this._handleUpdateCounterBound, true), this.el.addEventListener("input", this._handleUpdateCounterBound, true);
        }}, {key: "_removeEventHandlers", value: function() {
          this.el.removeEventListener("focus", this._handleUpdateCounterBound, true), this.el.removeEventListener("input", this._handleUpdateCounterBound, true);
        }}, {key: "_setupCounter", value: function() {
          this.counterEl = document.createElement("span"), s(this.counterEl).addClass("character-counter").css({float: "right", "font-size": "12px", height: 1}), this.$el.parent().append(this.counterEl);
        }}, {key: "_removeCounter", value: function() {
          s(this.counterEl).remove();
        }}, {key: "updateCounter", value: function() {
          var t3 = +this.$el.attr("data-length"), e2 = this.el.value.length;
          this.isValidLength = e2 <= t3;
          var i = e2;
          t3 && (i += "/" + t3, this._validateInput()), s(this.counterEl).html(i);
        }}, {key: "_validateInput", value: function() {
          this.isValidLength && this.isInvalid ? (this.isInvalid = false, this.$el.removeClass("invalid")) : this.isValidLength || this.isInvalid || (this.isInvalid = true, this.$el.removeClass("valid"), this.$el.addClass("invalid"));
        }}], [{key: "init", value: function(t3, e2) {
          return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t3, e2);
        }}, {key: "getInstance", value: function(t3) {
          return (t3.jquery ? t3[0] : t3).M_CharacterCounter;
        }}, {key: "defaults", get: function() {
          return e;
        }}]), n;
      }();
      M.CharacterCounter = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "characterCounter", "M_CharacterCounter");
    }(cash), function(b) {
      "use strict";
      var e = {duration: 200, dist: -100, shift: 0, padding: 0, numVisible: 5, fullWidth: false, indicators: false, noWrap: false, onCycleTo: null}, t = function(t2) {
        function i(t3, e2) {
          _classCallCheck(this, i);
          var n = _possibleConstructorReturn(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, t3, e2));
          return (n.el.M_Carousel = n).options = b.extend({}, i.defaults, e2), n.hasMultipleSlides = 1 < n.$el.find(".carousel-item").length, n.showIndicators = n.options.indicators && n.hasMultipleSlides, n.noWrap = n.options.noWrap || !n.hasMultipleSlides, n.pressed = false, n.dragged = false, n.offset = n.target = 0, n.images = [], n.itemWidth = n.$el.find(".carousel-item").first().innerWidth(), n.itemHeight = n.$el.find(".carousel-item").first().innerHeight(), n.dim = 2 * n.itemWidth + n.options.padding || 1, n._autoScrollBound = n._autoScroll.bind(n), n._trackBound = n._track.bind(n), n.options.fullWidth && (n.options.dist = 0, n._setCarouselHeight(), n.showIndicators && n.$el.find(".carousel-fixed-item").addClass("with-indicators")), n.$indicators = b('<ul class="indicators"></ul>'), n.$el.find(".carousel-item").each(function(t4, e3) {
            if (n.images.push(t4), n.showIndicators) {
              var i2 = b('<li class="indicator-item"></li>');
              e3 === 0 && i2[0].classList.add("active"), n.$indicators.append(i2);
            }
          }), n.showIndicators && n.$el.append(n.$indicators), n.count = n.images.length, n.options.numVisible = Math.min(n.count, n.options.numVisible), n.xform = "transform", ["webkit", "Moz", "O", "ms"].every(function(t4) {
            var e3 = t4 + "Transform";
            return document.body.style[e3] === void 0 || (n.xform = e3, false);
          }), n._setupEventHandlers(), n._scroll(n.offset), n;
        }
        return _inherits(i, Component), _createClass(i, [{key: "destroy", value: function() {
          this._removeEventHandlers(), this.el.M_Carousel = void 0;
        }}, {key: "_setupEventHandlers", value: function() {
          var i2 = this;
          this._handleCarouselTapBound = this._handleCarouselTap.bind(this), this._handleCarouselDragBound = this._handleCarouselDrag.bind(this), this._handleCarouselReleaseBound = this._handleCarouselRelease.bind(this), this._handleCarouselClickBound = this._handleCarouselClick.bind(this), window.ontouchstart !== void 0 && (this.el.addEventListener("touchstart", this._handleCarouselTapBound), this.el.addEventListener("touchmove", this._handleCarouselDragBound), this.el.addEventListener("touchend", this._handleCarouselReleaseBound)), this.el.addEventListener("mousedown", this._handleCarouselTapBound), this.el.addEventListener("mousemove", this._handleCarouselDragBound), this.el.addEventListener("mouseup", this._handleCarouselReleaseBound), this.el.addEventListener("mouseleave", this._handleCarouselReleaseBound), this.el.addEventListener("click", this._handleCarouselClickBound), this.showIndicators && this.$indicators && (this._handleIndicatorClickBound = this._handleIndicatorClick.bind(this), this.$indicators.find(".indicator-item").each(function(t4, e2) {
            t4.addEventListener("click", i2._handleIndicatorClickBound);
          }));
          var t3 = M.throttle(this._handleResize, 200);
          this._handleThrottledResizeBound = t3.bind(this), window.addEventListener("resize", this._handleThrottledResizeBound);
        }}, {key: "_removeEventHandlers", value: function() {
          var i2 = this;
          window.ontouchstart !== void 0 && (this.el.removeEventListener("touchstart", this._handleCarouselTapBound), this.el.removeEventListener("touchmove", this._handleCarouselDragBound), this.el.removeEventListener("touchend", this._handleCarouselReleaseBound)), this.el.removeEventListener("mousedown", this._handleCarouselTapBound), this.el.removeEventListener("mousemove", this._handleCarouselDragBound), this.el.removeEventListener("mouseup", this._handleCarouselReleaseBound), this.el.removeEventListener("mouseleave", this._handleCarouselReleaseBound), this.el.removeEventListener("click", this._handleCarouselClickBound), this.showIndicators && this.$indicators && this.$indicators.find(".indicator-item").each(function(t3, e2) {
            t3.removeEventListener("click", i2._handleIndicatorClickBound);
          }), window.removeEventListener("resize", this._handleThrottledResizeBound);
        }}, {key: "_handleCarouselTap", value: function(t3) {
          t3.type === "mousedown" && b(t3.target).is("img") && t3.preventDefault(), this.pressed = true, this.dragged = false, this.verticalDragged = false, this.reference = this._xpos(t3), this.referenceY = this._ypos(t3), this.velocity = this.amplitude = 0, this.frame = this.offset, this.timestamp = Date.now(), clearInterval(this.ticker), this.ticker = setInterval(this._trackBound, 100);
        }}, {key: "_handleCarouselDrag", value: function(t3) {
          var e2 = void 0, i2 = void 0, n = void 0;
          if (this.pressed)
            if (e2 = this._xpos(t3), i2 = this._ypos(t3), n = this.reference - e2, Math.abs(this.referenceY - i2) < 30 && !this.verticalDragged)
              (2 < n || n < -2) && (this.dragged = true, this.reference = e2, this._scroll(this.offset + n));
            else {
              if (this.dragged)
                return t3.preventDefault(), t3.stopPropagation(), false;
              this.verticalDragged = true;
            }
          if (this.dragged)
            return t3.preventDefault(), t3.stopPropagation(), false;
        }}, {key: "_handleCarouselRelease", value: function(t3) {
          if (this.pressed)
            return this.pressed = false, clearInterval(this.ticker), this.target = this.offset, (10 < this.velocity || this.velocity < -10) && (this.amplitude = 0.9 * this.velocity, this.target = this.offset + this.amplitude), this.target = Math.round(this.target / this.dim) * this.dim, this.noWrap && (this.target >= this.dim * (this.count - 1) ? this.target = this.dim * (this.count - 1) : this.target < 0 && (this.target = 0)), this.amplitude = this.target - this.offset, this.timestamp = Date.now(), requestAnimationFrame(this._autoScrollBound), this.dragged && (t3.preventDefault(), t3.stopPropagation()), false;
        }}, {key: "_handleCarouselClick", value: function(t3) {
          if (this.dragged)
            return t3.preventDefault(), t3.stopPropagation(), false;
          if (!this.options.fullWidth) {
            var e2 = b(t3.target).closest(".carousel-item").index();
            this._wrap(this.center) - e2 !== 0 && (t3.preventDefault(), t3.stopPropagation()), this._cycleTo(e2);
          }
        }}, {key: "_handleIndicatorClick", value: function(t3) {
          t3.stopPropagation();
          var e2 = b(t3.target).closest(".indicator-item");
          e2.length && this._cycleTo(e2.index());
        }}, {key: "_handleResize", value: function(t3) {
          this.options.fullWidth ? (this.itemWidth = this.$el.find(".carousel-item").first().innerWidth(), this.imageHeight = this.$el.find(".carousel-item.active").height(), this.dim = 2 * this.itemWidth + this.options.padding, this.offset = 2 * this.center * this.itemWidth, this.target = this.offset, this._setCarouselHeight(true)) : this._scroll();
        }}, {key: "_setCarouselHeight", value: function(t3) {
          var i2 = this, e2 = this.$el.find(".carousel-item.active").length ? this.$el.find(".carousel-item.active").first() : this.$el.find(".carousel-item").first(), n = e2.find("img").first();
          if (n.length)
            if (n[0].complete) {
              var s = n.height();
              if (0 < s)
                this.$el.css("height", s + "px");
              else {
                var o = n[0].naturalWidth, a = n[0].naturalHeight, r = this.$el.width() / o * a;
                this.$el.css("height", r + "px");
              }
            } else
              n.one("load", function(t4, e3) {
                i2.$el.css("height", t4.offsetHeight + "px");
              });
          else if (!t3) {
            var l = e2.height();
            this.$el.css("height", l + "px");
          }
        }}, {key: "_xpos", value: function(t3) {
          return t3.targetTouches && 1 <= t3.targetTouches.length ? t3.targetTouches[0].clientX : t3.clientX;
        }}, {key: "_ypos", value: function(t3) {
          return t3.targetTouches && 1 <= t3.targetTouches.length ? t3.targetTouches[0].clientY : t3.clientY;
        }}, {key: "_wrap", value: function(t3) {
          return t3 >= this.count ? t3 % this.count : t3 < 0 ? this._wrap(this.count + t3 % this.count) : t3;
        }}, {key: "_track", value: function() {
          var t3, e2, i2, n;
          e2 = (t3 = Date.now()) - this.timestamp, this.timestamp = t3, i2 = this.offset - this.frame, this.frame = this.offset, n = 1e3 * i2 / (1 + e2), this.velocity = 0.8 * n + 0.2 * this.velocity;
        }}, {key: "_autoScroll", value: function() {
          var t3 = void 0, e2 = void 0;
          this.amplitude && (t3 = Date.now() - this.timestamp, 2 < (e2 = this.amplitude * Math.exp(-t3 / this.options.duration)) || e2 < -2 ? (this._scroll(this.target - e2), requestAnimationFrame(this._autoScrollBound)) : this._scroll(this.target));
        }}, {key: "_scroll", value: function(t3) {
          var e2 = this;
          this.$el.hasClass("scrolling") || this.el.classList.add("scrolling"), this.scrollingTimeout != null && window.clearTimeout(this.scrollingTimeout), this.scrollingTimeout = window.setTimeout(function() {
            e2.$el.removeClass("scrolling");
          }, this.options.duration);
          var i2, n, s, o, a = void 0, r = void 0, l = void 0, h = void 0, d = void 0, u = void 0, c = this.center, p = 1 / this.options.numVisible;
          if (this.offset = typeof t3 == "number" ? t3 : this.offset, this.center = Math.floor((this.offset + this.dim / 2) / this.dim), o = -(s = (n = this.offset - this.center * this.dim) < 0 ? 1 : -1) * n * 2 / this.dim, i2 = this.count >> 1, this.options.fullWidth ? (l = "translateX(0)", u = 1) : (l = "translateX(" + (this.el.clientWidth - this.itemWidth) / 2 + "px) ", l += "translateY(" + (this.el.clientHeight - this.itemHeight) / 2 + "px)", u = 1 - p * o), this.showIndicators) {
            var v = this.center % this.count, f = this.$indicators.find(".indicator-item.active");
            f.index() !== v && (f.removeClass("active"), this.$indicators.find(".indicator-item").eq(v)[0].classList.add("active"));
          }
          if (!this.noWrap || 0 <= this.center && this.center < this.count) {
            r = this.images[this._wrap(this.center)], b(r).hasClass("active") || (this.$el.find(".carousel-item").removeClass("active"), r.classList.add("active"));
            var m = l + " translateX(" + -n / 2 + "px) translateX(" + s * this.options.shift * o * a + "px) translateZ(" + this.options.dist * o + "px)";
            this._updateItemStyle(r, u, 0, m);
          }
          for (a = 1; a <= i2; ++a) {
            if (this.options.fullWidth ? (h = this.options.dist, d = a === i2 && n < 0 ? 1 - o : 1) : (h = this.options.dist * (2 * a + o * s), d = 1 - p * (2 * a + o * s)), !this.noWrap || this.center + a < this.count) {
              r = this.images[this._wrap(this.center + a)];
              var g = l + " translateX(" + (this.options.shift + (this.dim * a - n) / 2) + "px) translateZ(" + h + "px)";
              this._updateItemStyle(r, d, -a, g);
            }
            if (this.options.fullWidth ? (h = this.options.dist, d = a === i2 && 0 < n ? 1 - o : 1) : (h = this.options.dist * (2 * a - o * s), d = 1 - p * (2 * a - o * s)), !this.noWrap || 0 <= this.center - a) {
              r = this.images[this._wrap(this.center - a)];
              var _2 = l + " translateX(" + (-this.options.shift + (-this.dim * a - n) / 2) + "px) translateZ(" + h + "px)";
              this._updateItemStyle(r, d, -a, _2);
            }
          }
          if (!this.noWrap || 0 <= this.center && this.center < this.count) {
            r = this.images[this._wrap(this.center)];
            var y = l + " translateX(" + -n / 2 + "px) translateX(" + s * this.options.shift * o + "px) translateZ(" + this.options.dist * o + "px)";
            this._updateItemStyle(r, u, 0, y);
          }
          var k = this.$el.find(".carousel-item").eq(this._wrap(this.center));
          c !== this.center && typeof this.options.onCycleTo == "function" && this.options.onCycleTo.call(this, k[0], this.dragged), typeof this.oneTimeCallback == "function" && (this.oneTimeCallback.call(this, k[0], this.dragged), this.oneTimeCallback = null);
        }}, {key: "_updateItemStyle", value: function(t3, e2, i2, n) {
          t3.style[this.xform] = n, t3.style.zIndex = i2, t3.style.opacity = e2, t3.style.visibility = "visible";
        }}, {key: "_cycleTo", value: function(t3, e2) {
          var i2 = this.center % this.count - t3;
          this.noWrap || (i2 < 0 ? Math.abs(i2 + this.count) < Math.abs(i2) && (i2 += this.count) : 0 < i2 && Math.abs(i2 - this.count) < i2 && (i2 -= this.count)), this.target = this.dim * Math.round(this.offset / this.dim), i2 < 0 ? this.target += this.dim * Math.abs(i2) : 0 < i2 && (this.target -= this.dim * i2), typeof e2 == "function" && (this.oneTimeCallback = e2), this.offset !== this.target && (this.amplitude = this.target - this.offset, this.timestamp = Date.now(), requestAnimationFrame(this._autoScrollBound));
        }}, {key: "next", value: function(t3) {
          (t3 === void 0 || isNaN(t3)) && (t3 = 1);
          var e2 = this.center + t3;
          if (e2 >= this.count || e2 < 0) {
            if (this.noWrap)
              return;
            e2 = this._wrap(e2);
          }
          this._cycleTo(e2);
        }}, {key: "prev", value: function(t3) {
          (t3 === void 0 || isNaN(t3)) && (t3 = 1);
          var e2 = this.center - t3;
          if (e2 >= this.count || e2 < 0) {
            if (this.noWrap)
              return;
            e2 = this._wrap(e2);
          }
          this._cycleTo(e2);
        }}, {key: "set", value: function(t3, e2) {
          if ((t3 === void 0 || isNaN(t3)) && (t3 = 0), t3 > this.count || t3 < 0) {
            if (this.noWrap)
              return;
            t3 = this._wrap(t3);
          }
          this._cycleTo(t3, e2);
        }}], [{key: "init", value: function(t3, e2) {
          return _get(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, t3, e2);
        }}, {key: "getInstance", value: function(t3) {
          return (t3.jquery ? t3[0] : t3).M_Carousel;
        }}, {key: "defaults", get: function() {
          return e;
        }}]), i;
      }();
      M.Carousel = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "carousel", "M_Carousel");
    }(cash), function(S) {
      "use strict";
      var e = {onOpen: void 0, onClose: void 0}, t = function(t2) {
        function n(t3, e2) {
          _classCallCheck(this, n);
          var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t3, e2));
          return (i.el.M_TapTarget = i).options = S.extend({}, n.defaults, e2), i.isOpen = false, i.$origin = S("#" + i.$el.attr("data-target")), i._setup(), i._calculatePositioning(), i._setupEventHandlers(), i;
        }
        return _inherits(n, Component), _createClass(n, [{key: "destroy", value: function() {
          this._removeEventHandlers(), this.el.TapTarget = void 0;
        }}, {key: "_setupEventHandlers", value: function() {
          this._handleDocumentClickBound = this._handleDocumentClick.bind(this), this._handleTargetClickBound = this._handleTargetClick.bind(this), this._handleOriginClickBound = this._handleOriginClick.bind(this), this.el.addEventListener("click", this._handleTargetClickBound), this.originEl.addEventListener("click", this._handleOriginClickBound);
          var t3 = M.throttle(this._handleResize, 200);
          this._handleThrottledResizeBound = t3.bind(this), window.addEventListener("resize", this._handleThrottledResizeBound);
        }}, {key: "_removeEventHandlers", value: function() {
          this.el.removeEventListener("click", this._handleTargetClickBound), this.originEl.removeEventListener("click", this._handleOriginClickBound), window.removeEventListener("resize", this._handleThrottledResizeBound);
        }}, {key: "_handleTargetClick", value: function(t3) {
          this.open();
        }}, {key: "_handleOriginClick", value: function(t3) {
          this.close();
        }}, {key: "_handleResize", value: function(t3) {
          this._calculatePositioning();
        }}, {key: "_handleDocumentClick", value: function(t3) {
          S(t3.target).closest(".tap-target-wrapper").length || (this.close(), t3.preventDefault(), t3.stopPropagation());
        }}, {key: "_setup", value: function() {
          this.wrapper = this.$el.parent()[0], this.waveEl = S(this.wrapper).find(".tap-target-wave")[0], this.originEl = S(this.wrapper).find(".tap-target-origin")[0], this.contentEl = this.$el.find(".tap-target-content")[0], S(this.wrapper).hasClass(".tap-target-wrapper") || (this.wrapper = document.createElement("div"), this.wrapper.classList.add("tap-target-wrapper"), this.$el.before(S(this.wrapper)), this.wrapper.append(this.el)), this.contentEl || (this.contentEl = document.createElement("div"), this.contentEl.classList.add("tap-target-content"), this.$el.append(this.contentEl)), this.waveEl || (this.waveEl = document.createElement("div"), this.waveEl.classList.add("tap-target-wave"), this.originEl || (this.originEl = this.$origin.clone(true, true), this.originEl.addClass("tap-target-origin"), this.originEl.removeAttr("id"), this.originEl.removeAttr("style"), this.originEl = this.originEl[0], this.waveEl.append(this.originEl)), this.wrapper.append(this.waveEl));
        }}, {key: "_calculatePositioning", value: function() {
          var t3 = this.$origin.css("position") === "fixed";
          if (!t3)
            for (var e2 = this.$origin.parents(), i = 0; i < e2.length && !(t3 = S(e2[i]).css("position") == "fixed"); i++)
              ;
          var n2 = this.$origin.outerWidth(), s = this.$origin.outerHeight(), o = t3 ? this.$origin.offset().top - M.getDocumentScrollTop() : this.$origin.offset().top, a = t3 ? this.$origin.offset().left - M.getDocumentScrollLeft() : this.$origin.offset().left, r = window.innerWidth, l = window.innerHeight, h = r / 2, d = l / 2, u = a <= h, c = h < a, p = o <= d, v = d < o, f = 0.25 * r <= a && a <= 0.75 * r, m = this.$el.outerWidth(), g = this.$el.outerHeight(), _2 = o + s / 2 - g / 2, y = a + n2 / 2 - m / 2, k = t3 ? "fixed" : "absolute", b = f ? m : m / 2 + n2, w = g / 2, C = p ? g / 2 : 0, E = u && !f ? m / 2 - n2 : 0, O = n2, x = v ? "bottom" : "top", L = 2 * n2, T = L, $2 = g / 2 - T / 2, B = m / 2 - L / 2, D = {};
          D.top = p ? _2 + "px" : "", D.right = c ? r - y - m + "px" : "", D.bottom = v ? l - _2 - g + "px" : "", D.left = u ? y + "px" : "", D.position = k, S(this.wrapper).css(D), S(this.contentEl).css({width: b + "px", height: w + "px", top: C + "px", right: "0px", bottom: "0px", left: E + "px", padding: O + "px", verticalAlign: x}), S(this.waveEl).css({top: $2 + "px", left: B + "px", width: L + "px", height: T + "px"});
        }}, {key: "open", value: function() {
          this.isOpen || (typeof this.options.onOpen == "function" && this.options.onOpen.call(this, this.$origin[0]), this.isOpen = true, this.wrapper.classList.add("open"), document.body.addEventListener("click", this._handleDocumentClickBound, true), document.body.addEventListener("touchend", this._handleDocumentClickBound));
        }}, {key: "close", value: function() {
          this.isOpen && (typeof this.options.onClose == "function" && this.options.onClose.call(this, this.$origin[0]), this.isOpen = false, this.wrapper.classList.remove("open"), document.body.removeEventListener("click", this._handleDocumentClickBound, true), document.body.removeEventListener("touchend", this._handleDocumentClickBound));
        }}], [{key: "init", value: function(t3, e2) {
          return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t3, e2);
        }}, {key: "getInstance", value: function(t3) {
          return (t3.jquery ? t3[0] : t3).M_TapTarget;
        }}, {key: "defaults", get: function() {
          return e;
        }}]), n;
      }();
      M.TapTarget = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "tapTarget", "M_TapTarget");
    }(cash), function(d) {
      "use strict";
      var e = {classes: "", dropdownOptions: {}}, t = function(t2) {
        function n(t3, e2) {
          _classCallCheck(this, n);
          var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t3, e2));
          return i.$el.hasClass("browser-default") ? _possibleConstructorReturn(i) : ((i.el.M_FormSelect = i).options = d.extend({}, n.defaults, e2), i.isMultiple = i.$el.prop("multiple"), i.el.tabIndex = -1, i._keysSelected = {}, i._valueDict = {}, i._setupDropdown(), i._setupEventHandlers(), i);
        }
        return _inherits(n, Component), _createClass(n, [{key: "destroy", value: function() {
          this._removeEventHandlers(), this._removeDropdown(), this.el.M_FormSelect = void 0;
        }}, {key: "_setupEventHandlers", value: function() {
          var e2 = this;
          this._handleSelectChangeBound = this._handleSelectChange.bind(this), this._handleOptionClickBound = this._handleOptionClick.bind(this), this._handleInputClickBound = this._handleInputClick.bind(this), d(this.dropdownOptions).find("li:not(.optgroup)").each(function(t3) {
            t3.addEventListener("click", e2._handleOptionClickBound);
          }), this.el.addEventListener("change", this._handleSelectChangeBound), this.input.addEventListener("click", this._handleInputClickBound);
        }}, {key: "_removeEventHandlers", value: function() {
          var e2 = this;
          d(this.dropdownOptions).find("li:not(.optgroup)").each(function(t3) {
            t3.removeEventListener("click", e2._handleOptionClickBound);
          }), this.el.removeEventListener("change", this._handleSelectChangeBound), this.input.removeEventListener("click", this._handleInputClickBound);
        }}, {key: "_handleSelectChange", value: function(t3) {
          this._setValueToInput();
        }}, {key: "_handleOptionClick", value: function(t3) {
          t3.preventDefault();
          var e2 = d(t3.target).closest("li")[0], i = e2.id;
          if (!d(e2).hasClass("disabled") && !d(e2).hasClass("optgroup") && i.length) {
            var n2 = true;
            if (this.isMultiple) {
              var s = d(this.dropdownOptions).find("li.disabled.selected");
              s.length && (s.removeClass("selected"), s.find('input[type="checkbox"]').prop("checked", false), this._toggleEntryFromArray(s[0].id)), n2 = this._toggleEntryFromArray(i);
            } else
              d(this.dropdownOptions).find("li").removeClass("selected"), d(e2).toggleClass("selected", n2);
            d(this._valueDict[i].el).prop("selected") !== n2 && (d(this._valueDict[i].el).prop("selected", n2), this.$el.trigger("change"));
          }
          t3.stopPropagation();
        }}, {key: "_handleInputClick", value: function() {
          this.dropdown && this.dropdown.isOpen && (this._setValueToInput(), this._setSelectedStates());
        }}, {key: "_setupDropdown", value: function() {
          var n2 = this;
          this.wrapper = document.createElement("div"), d(this.wrapper).addClass("select-wrapper " + this.options.classes), this.$el.before(d(this.wrapper)), this.wrapper.appendChild(this.el), this.el.disabled && this.wrapper.classList.add("disabled"), this.$selectOptions = this.$el.children("option, optgroup"), this.dropdownOptions = document.createElement("ul"), this.dropdownOptions.id = "select-options-" + M.guid(), d(this.dropdownOptions).addClass("dropdown-content select-dropdown " + (this.isMultiple ? "multiple-select-dropdown" : "")), this.$selectOptions.length && this.$selectOptions.each(function(t4) {
            if (d(t4).is("option")) {
              var e3 = void 0;
              e3 = n2.isMultiple ? n2._appendOptionWithIcon(n2.$el, t4, "multiple") : n2._appendOptionWithIcon(n2.$el, t4), n2._addOptionToValueDict(t4, e3);
            } else if (d(t4).is("optgroup")) {
              var i = d(t4).children("option");
              d(n2.dropdownOptions).append(d('<li class="optgroup"><span>' + t4.getAttribute("label") + "</span></li>")[0]), i.each(function(t5) {
                var e4 = n2._appendOptionWithIcon(n2.$el, t5, "optgroup-option");
                n2._addOptionToValueDict(t5, e4);
              });
            }
          }), this.$el.after(this.dropdownOptions), this.input = document.createElement("input"), d(this.input).addClass("select-dropdown dropdown-trigger"), this.input.setAttribute("type", "text"), this.input.setAttribute("readonly", "true"), this.input.setAttribute("data-target", this.dropdownOptions.id), this.el.disabled && d(this.input).prop("disabled", "true"), this.$el.before(this.input), this._setValueToInput();
          var t3 = d('<svg class="caret" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
          if (this.$el.before(t3[0]), !this.el.disabled) {
            var e2 = d.extend({}, this.options.dropdownOptions);
            e2.onOpenEnd = function(t4) {
              var e3 = d(n2.dropdownOptions).find(".selected").first();
              if (e3.length && (M.keyDown = true, n2.dropdown.focusedIndex = e3.index(), n2.dropdown._focusFocusedItem(), M.keyDown = false, n2.dropdown.isScrollable)) {
                var i = e3[0].getBoundingClientRect().top - n2.dropdownOptions.getBoundingClientRect().top;
                i -= n2.dropdownOptions.clientHeight / 2, n2.dropdownOptions.scrollTop = i;
              }
            }, this.isMultiple && (e2.closeOnClick = false), this.dropdown = M.Dropdown.init(this.input, e2);
          }
          this._setSelectedStates();
        }}, {key: "_addOptionToValueDict", value: function(t3, e2) {
          var i = Object.keys(this._valueDict).length, n2 = this.dropdownOptions.id + i, s = {};
          e2.id = n2, s.el = t3, s.optionEl = e2, this._valueDict[n2] = s;
        }}, {key: "_removeDropdown", value: function() {
          d(this.wrapper).find(".caret").remove(), d(this.input).remove(), d(this.dropdownOptions).remove(), d(this.wrapper).before(this.$el), d(this.wrapper).remove();
        }}, {key: "_appendOptionWithIcon", value: function(t3, e2, i) {
          var n2 = e2.disabled ? "disabled " : "", s = i === "optgroup-option" ? "optgroup-option " : "", o = this.isMultiple ? '<label><input type="checkbox"' + n2 + '"/><span>' + e2.innerHTML + "</span></label>" : e2.innerHTML, a = d("<li></li>"), r = d("<span></span>");
          r.html(o), a.addClass(n2 + " " + s), a.append(r);
          var l = e2.getAttribute("data-icon");
          if (l) {
            var h = d('<img alt="" src="' + l + '">');
            a.prepend(h);
          }
          return d(this.dropdownOptions).append(a[0]), a[0];
        }}, {key: "_toggleEntryFromArray", value: function(t3) {
          var e2 = !this._keysSelected.hasOwnProperty(t3), i = d(this._valueDict[t3].optionEl);
          return e2 ? this._keysSelected[t3] = true : delete this._keysSelected[t3], i.toggleClass("selected", e2), i.find('input[type="checkbox"]').prop("checked", e2), i.prop("selected", e2), e2;
        }}, {key: "_setValueToInput", value: function() {
          var i = [];
          if (this.$el.find("option").each(function(t4) {
            if (d(t4).prop("selected")) {
              var e2 = d(t4).text();
              i.push(e2);
            }
          }), !i.length) {
            var t3 = this.$el.find("option:disabled").eq(0);
            t3.length && t3[0].value === "" && i.push(t3.text());
          }
          this.input.value = i.join(", ");
        }}, {key: "_setSelectedStates", value: function() {
          for (var t3 in this._keysSelected = {}, this._valueDict) {
            var e2 = this._valueDict[t3], i = d(e2.el).prop("selected");
            d(e2.optionEl).find('input[type="checkbox"]').prop("checked", i), i ? (this._activateOption(d(this.dropdownOptions), d(e2.optionEl)), this._keysSelected[t3] = true) : d(e2.optionEl).removeClass("selected");
          }
        }}, {key: "_activateOption", value: function(t3, e2) {
          e2 && (this.isMultiple || t3.find("li.selected").removeClass("selected"), d(e2).addClass("selected"));
        }}, {key: "getSelectedValues", value: function() {
          var t3 = [];
          for (var e2 in this._keysSelected)
            t3.push(this._valueDict[e2].el.value);
          return t3;
        }}], [{key: "init", value: function(t3, e2) {
          return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t3, e2);
        }}, {key: "getInstance", value: function(t3) {
          return (t3.jquery ? t3[0] : t3).M_FormSelect;
        }}, {key: "defaults", get: function() {
          return e;
        }}]), n;
      }();
      M.FormSelect = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "formSelect", "M_FormSelect");
    }(cash), function(s, e) {
      "use strict";
      var i = {}, t = function(t2) {
        function n(t3, e2) {
          _classCallCheck(this, n);
          var i2 = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t3, e2));
          return (i2.el.M_Range = i2).options = s.extend({}, n.defaults, e2), i2._mousedown = false, i2._setupThumb(), i2._setupEventHandlers(), i2;
        }
        return _inherits(n, Component), _createClass(n, [{key: "destroy", value: function() {
          this._removeEventHandlers(), this._removeThumb(), this.el.M_Range = void 0;
        }}, {key: "_setupEventHandlers", value: function() {
          this._handleRangeChangeBound = this._handleRangeChange.bind(this), this._handleRangeMousedownTouchstartBound = this._handleRangeMousedownTouchstart.bind(this), this._handleRangeInputMousemoveTouchmoveBound = this._handleRangeInputMousemoveTouchmove.bind(this), this._handleRangeMouseupTouchendBound = this._handleRangeMouseupTouchend.bind(this), this._handleRangeBlurMouseoutTouchleaveBound = this._handleRangeBlurMouseoutTouchleave.bind(this), this.el.addEventListener("change", this._handleRangeChangeBound), this.el.addEventListener("mousedown", this._handleRangeMousedownTouchstartBound), this.el.addEventListener("touchstart", this._handleRangeMousedownTouchstartBound), this.el.addEventListener("input", this._handleRangeInputMousemoveTouchmoveBound), this.el.addEventListener("mousemove", this._handleRangeInputMousemoveTouchmoveBound), this.el.addEventListener("touchmove", this._handleRangeInputMousemoveTouchmoveBound), this.el.addEventListener("mouseup", this._handleRangeMouseupTouchendBound), this.el.addEventListener("touchend", this._handleRangeMouseupTouchendBound), this.el.addEventListener("blur", this._handleRangeBlurMouseoutTouchleaveBound), this.el.addEventListener("mouseout", this._handleRangeBlurMouseoutTouchleaveBound), this.el.addEventListener("touchleave", this._handleRangeBlurMouseoutTouchleaveBound);
        }}, {key: "_removeEventHandlers", value: function() {
          this.el.removeEventListener("change", this._handleRangeChangeBound), this.el.removeEventListener("mousedown", this._handleRangeMousedownTouchstartBound), this.el.removeEventListener("touchstart", this._handleRangeMousedownTouchstartBound), this.el.removeEventListener("input", this._handleRangeInputMousemoveTouchmoveBound), this.el.removeEventListener("mousemove", this._handleRangeInputMousemoveTouchmoveBound), this.el.removeEventListener("touchmove", this._handleRangeInputMousemoveTouchmoveBound), this.el.removeEventListener("mouseup", this._handleRangeMouseupTouchendBound), this.el.removeEventListener("touchend", this._handleRangeMouseupTouchendBound), this.el.removeEventListener("blur", this._handleRangeBlurMouseoutTouchleaveBound), this.el.removeEventListener("mouseout", this._handleRangeBlurMouseoutTouchleaveBound), this.el.removeEventListener("touchleave", this._handleRangeBlurMouseoutTouchleaveBound);
        }}, {key: "_handleRangeChange", value: function() {
          s(this.value).html(this.$el.val()), s(this.thumb).hasClass("active") || this._showRangeBubble();
          var t3 = this._calcRangeOffset();
          s(this.thumb).addClass("active").css("left", t3 + "px");
        }}, {key: "_handleRangeMousedownTouchstart", value: function(t3) {
          if (s(this.value).html(this.$el.val()), this._mousedown = true, this.$el.addClass("active"), s(this.thumb).hasClass("active") || this._showRangeBubble(), t3.type !== "input") {
            var e2 = this._calcRangeOffset();
            s(this.thumb).addClass("active").css("left", e2 + "px");
          }
        }}, {key: "_handleRangeInputMousemoveTouchmove", value: function() {
          if (this._mousedown) {
            s(this.thumb).hasClass("active") || this._showRangeBubble();
            var t3 = this._calcRangeOffset();
            s(this.thumb).addClass("active").css("left", t3 + "px"), s(this.value).html(this.$el.val());
          }
        }}, {key: "_handleRangeMouseupTouchend", value: function() {
          this._mousedown = false, this.$el.removeClass("active");
        }}, {key: "_handleRangeBlurMouseoutTouchleave", value: function() {
          if (!this._mousedown) {
            var t3 = 7 + parseInt(this.$el.css("padding-left")) + "px";
            s(this.thumb).hasClass("active") && (e.remove(this.thumb), e({targets: this.thumb, height: 0, width: 0, top: 10, easing: "easeOutQuad", marginLeft: t3, duration: 100})), s(this.thumb).removeClass("active");
          }
        }}, {key: "_setupThumb", value: function() {
          this.thumb = document.createElement("span"), this.value = document.createElement("span"), s(this.thumb).addClass("thumb"), s(this.value).addClass("value"), s(this.thumb).append(this.value), this.$el.after(this.thumb);
        }}, {key: "_removeThumb", value: function() {
          s(this.thumb).remove();
        }}, {key: "_showRangeBubble", value: function() {
          var t3 = -7 + parseInt(s(this.thumb).parent().css("padding-left")) + "px";
          e.remove(this.thumb), e({targets: this.thumb, height: 30, width: 30, top: -30, marginLeft: t3, duration: 300, easing: "easeOutQuint"});
        }}, {key: "_calcRangeOffset", value: function() {
          var t3 = this.$el.width() - 15, e2 = parseFloat(this.$el.attr("max")) || 100, i2 = parseFloat(this.$el.attr("min")) || 0;
          return (parseFloat(this.$el.val()) - i2) / (e2 - i2) * t3;
        }}], [{key: "init", value: function(t3, e2) {
          return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t3, e2);
        }}, {key: "getInstance", value: function(t3) {
          return (t3.jquery ? t3[0] : t3).M_Range;
        }}, {key: "defaults", get: function() {
          return i;
        }}]), n;
      }();
      M.Range = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "range", "M_Range"), t.init(s("input[type=range]"));
    }(cash, M.anime);
  });

  // node_modules/seedrandom/lib/alea.js
  var require_alea = __commonJS((exports, module) => {
    (function(global2, module2, define2) {
      function Alea(seed) {
        var me = this, mash = Mash();
        me.next = function() {
          var t = 2091639 * me.s0 + me.c * 23283064365386963e-26;
          me.s0 = me.s1;
          me.s1 = me.s2;
          return me.s2 = t - (me.c = t | 0);
        };
        me.c = 1;
        me.s0 = mash(" ");
        me.s1 = mash(" ");
        me.s2 = mash(" ");
        me.s0 -= mash(seed);
        if (me.s0 < 0) {
          me.s0 += 1;
        }
        me.s1 -= mash(seed);
        if (me.s1 < 0) {
          me.s1 += 1;
        }
        me.s2 -= mash(seed);
        if (me.s2 < 0) {
          me.s2 += 1;
        }
        mash = null;
      }
      function copy(f, t) {
        t.c = f.c;
        t.s0 = f.s0;
        t.s1 = f.s1;
        t.s2 = f.s2;
        return t;
      }
      function impl(seed, opts) {
        var xg = new Alea(seed), state = opts && opts.state, prng = xg.next;
        prng.int32 = function() {
          return xg.next() * 4294967296 | 0;
        };
        prng.double = function() {
          return prng() + (prng() * 2097152 | 0) * 11102230246251565e-32;
        };
        prng.quick = prng;
        if (state) {
          if (typeof state == "object")
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      function Mash() {
        var n = 4022871197;
        var mash = function(data) {
          data = String(data);
          for (var i = 0; i < data.length; i++) {
            n += data.charCodeAt(i);
            var h = 0.02519603282416938 * n;
            n = h >>> 0;
            h -= n;
            h *= n;
            n = h >>> 0;
            h -= n;
            n += h * 4294967296;
          }
          return (n >>> 0) * 23283064365386963e-26;
        };
        return mash;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.alea = impl;
      }
    })(exports, typeof module == "object" && module, typeof define == "function" && define);
  });

  // node_modules/seedrandom/lib/xor128.js
  var require_xor128 = __commonJS((exports, module) => {
    (function(global2, module2, define2) {
      function XorGen(seed) {
        var me = this, strseed = "";
        me.x = 0;
        me.y = 0;
        me.z = 0;
        me.w = 0;
        me.next = function() {
          var t = me.x ^ me.x << 11;
          me.x = me.y;
          me.y = me.z;
          me.z = me.w;
          return me.w ^= me.w >>> 19 ^ t ^ t >>> 8;
        };
        if (seed === (seed | 0)) {
          me.x = seed;
        } else {
          strseed += seed;
        }
        for (var k = 0; k < strseed.length + 64; k++) {
          me.x ^= strseed.charCodeAt(k) | 0;
          me.next();
        }
      }
      function copy(f, t) {
        t.x = f.x;
        t.y = f.y;
        t.z = f.z;
        t.w = f.w;
        return t;
      }
      function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (typeof state == "object")
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.xor128 = impl;
      }
    })(exports, typeof module == "object" && module, typeof define == "function" && define);
  });

  // node_modules/seedrandom/lib/xorwow.js
  var require_xorwow = __commonJS((exports, module) => {
    (function(global2, module2, define2) {
      function XorGen(seed) {
        var me = this, strseed = "";
        me.next = function() {
          var t = me.x ^ me.x >>> 2;
          me.x = me.y;
          me.y = me.z;
          me.z = me.w;
          me.w = me.v;
          return (me.d = me.d + 362437 | 0) + (me.v = me.v ^ me.v << 4 ^ (t ^ t << 1)) | 0;
        };
        me.x = 0;
        me.y = 0;
        me.z = 0;
        me.w = 0;
        me.v = 0;
        if (seed === (seed | 0)) {
          me.x = seed;
        } else {
          strseed += seed;
        }
        for (var k = 0; k < strseed.length + 64; k++) {
          me.x ^= strseed.charCodeAt(k) | 0;
          if (k == strseed.length) {
            me.d = me.x << 10 ^ me.x >>> 4;
          }
          me.next();
        }
      }
      function copy(f, t) {
        t.x = f.x;
        t.y = f.y;
        t.z = f.z;
        t.w = f.w;
        t.v = f.v;
        t.d = f.d;
        return t;
      }
      function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (typeof state == "object")
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.xorwow = impl;
      }
    })(exports, typeof module == "object" && module, typeof define == "function" && define);
  });

  // node_modules/seedrandom/lib/xorshift7.js
  var require_xorshift7 = __commonJS((exports, module) => {
    (function(global2, module2, define2) {
      function XorGen(seed) {
        var me = this;
        me.next = function() {
          var X = me.x, i = me.i, t, v, w;
          t = X[i];
          t ^= t >>> 7;
          v = t ^ t << 24;
          t = X[i + 1 & 7];
          v ^= t ^ t >>> 10;
          t = X[i + 3 & 7];
          v ^= t ^ t >>> 3;
          t = X[i + 4 & 7];
          v ^= t ^ t << 7;
          t = X[i + 7 & 7];
          t = t ^ t << 13;
          v ^= t ^ t << 9;
          X[i] = v;
          me.i = i + 1 & 7;
          return v;
        };
        function init(me2, seed2) {
          var j, w, X = [];
          if (seed2 === (seed2 | 0)) {
            w = X[0] = seed2;
          } else {
            seed2 = "" + seed2;
            for (j = 0; j < seed2.length; ++j) {
              X[j & 7] = X[j & 7] << 15 ^ seed2.charCodeAt(j) + X[j + 1 & 7] << 13;
            }
          }
          while (X.length < 8)
            X.push(0);
          for (j = 0; j < 8 && X[j] === 0; ++j)
            ;
          if (j == 8)
            w = X[7] = -1;
          else
            w = X[j];
          me2.x = X;
          me2.i = 0;
          for (j = 256; j > 0; --j) {
            me2.next();
          }
        }
        init(me, seed);
      }
      function copy(f, t) {
        t.x = f.x.slice();
        t.i = f.i;
        return t;
      }
      function impl(seed, opts) {
        if (seed == null)
          seed = +new Date();
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (state.x)
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.xorshift7 = impl;
      }
    })(exports, typeof module == "object" && module, typeof define == "function" && define);
  });

  // node_modules/seedrandom/lib/xor4096.js
  var require_xor4096 = __commonJS((exports, module) => {
    (function(global2, module2, define2) {
      function XorGen(seed) {
        var me = this;
        me.next = function() {
          var w = me.w, X = me.X, i = me.i, t, v;
          me.w = w = w + 1640531527 | 0;
          v = X[i + 34 & 127];
          t = X[i = i + 1 & 127];
          v ^= v << 13;
          t ^= t << 17;
          v ^= v >>> 15;
          t ^= t >>> 12;
          v = X[i] = v ^ t;
          me.i = i;
          return v + (w ^ w >>> 16) | 0;
        };
        function init(me2, seed2) {
          var t, v, i, j, w, X = [], limit = 128;
          if (seed2 === (seed2 | 0)) {
            v = seed2;
            seed2 = null;
          } else {
            seed2 = seed2 + "\0";
            v = 0;
            limit = Math.max(limit, seed2.length);
          }
          for (i = 0, j = -32; j < limit; ++j) {
            if (seed2)
              v ^= seed2.charCodeAt((j + 32) % seed2.length);
            if (j === 0)
              w = v;
            v ^= v << 10;
            v ^= v >>> 15;
            v ^= v << 4;
            v ^= v >>> 13;
            if (j >= 0) {
              w = w + 1640531527 | 0;
              t = X[j & 127] ^= v + w;
              i = t == 0 ? i + 1 : 0;
            }
          }
          if (i >= 128) {
            X[(seed2 && seed2.length || 0) & 127] = -1;
          }
          i = 127;
          for (j = 4 * 128; j > 0; --j) {
            v = X[i + 34 & 127];
            t = X[i = i + 1 & 127];
            v ^= v << 13;
            t ^= t << 17;
            v ^= v >>> 15;
            t ^= t >>> 12;
            X[i] = v ^ t;
          }
          me2.w = w;
          me2.X = X;
          me2.i = i;
        }
        init(me, seed);
      }
      function copy(f, t) {
        t.i = f.i;
        t.w = f.w;
        t.X = f.X.slice();
        return t;
      }
      ;
      function impl(seed, opts) {
        if (seed == null)
          seed = +new Date();
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (state.X)
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.xor4096 = impl;
      }
    })(exports, typeof module == "object" && module, typeof define == "function" && define);
  });

  // node_modules/seedrandom/lib/tychei.js
  var require_tychei = __commonJS((exports, module) => {
    (function(global2, module2, define2) {
      function XorGen(seed) {
        var me = this, strseed = "";
        me.next = function() {
          var b = me.b, c = me.c, d = me.d, a = me.a;
          b = b << 25 ^ b >>> 7 ^ c;
          c = c - d | 0;
          d = d << 24 ^ d >>> 8 ^ a;
          a = a - b | 0;
          me.b = b = b << 20 ^ b >>> 12 ^ c;
          me.c = c = c - d | 0;
          me.d = d << 16 ^ c >>> 16 ^ a;
          return me.a = a - b | 0;
        };
        me.a = 0;
        me.b = 0;
        me.c = 2654435769 | 0;
        me.d = 1367130551;
        if (seed === Math.floor(seed)) {
          me.a = seed / 4294967296 | 0;
          me.b = seed | 0;
        } else {
          strseed += seed;
        }
        for (var k = 0; k < strseed.length + 20; k++) {
          me.b ^= strseed.charCodeAt(k) | 0;
          me.next();
        }
      }
      function copy(f, t) {
        t.a = f.a;
        t.b = f.b;
        t.c = f.c;
        t.d = f.d;
        return t;
      }
      ;
      function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (typeof state == "object")
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.tychei = impl;
      }
    })(exports, typeof module == "object" && module, typeof define == "function" && define);
  });

  // (disabled):crypto
  var require_crypto = __commonJS(() => {
  });

  // node_modules/seedrandom/seedrandom.js
  var require_seedrandom = __commonJS((exports, module) => {
    (function(global2, pool, math) {
      var width = 256, chunks = 6, digits = 52, rngname = "random", startdenom = math.pow(width, chunks), significance = math.pow(2, digits), overflow = significance * 2, mask = width - 1, nodecrypto;
      function seedrandom(seed, options, callback) {
        var key = [];
        options = options == true ? {entropy: true} : options || {};
        var shortseed = mixkey(flatten(options.entropy ? [seed, tostring(pool)] : seed == null ? autoseed() : seed, 3), key);
        var arc4 = new ARC4(key);
        var prng = function() {
          var n = arc4.g(chunks), d = startdenom, x = 0;
          while (n < significance) {
            n = (n + x) * width;
            d *= width;
            x = arc4.g(1);
          }
          while (n >= overflow) {
            n /= 2;
            d /= 2;
            x >>>= 1;
          }
          return (n + x) / d;
        };
        prng.int32 = function() {
          return arc4.g(4) | 0;
        };
        prng.quick = function() {
          return arc4.g(4) / 4294967296;
        };
        prng.double = prng;
        mixkey(tostring(arc4.S), pool);
        return (options.pass || callback || function(prng2, seed2, is_math_call, state) {
          if (state) {
            if (state.S) {
              copy(state, arc4);
            }
            prng2.state = function() {
              return copy(arc4, {});
            };
          }
          if (is_math_call) {
            math[rngname] = prng2;
            return seed2;
          } else
            return prng2;
        })(prng, shortseed, "global" in options ? options.global : this == math, options.state);
      }
      function ARC4(key) {
        var t, keylen = key.length, me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];
        if (!keylen) {
          key = [keylen++];
        }
        while (i < width) {
          s[i] = i++;
        }
        for (i = 0; i < width; i++) {
          s[i] = s[j = mask & j + key[i % keylen] + (t = s[i])];
          s[j] = t;
        }
        (me.g = function(count) {
          var t2, r = 0, i2 = me.i, j2 = me.j, s2 = me.S;
          while (count--) {
            t2 = s2[i2 = mask & i2 + 1];
            r = r * width + s2[mask & (s2[i2] = s2[j2 = mask & j2 + t2]) + (s2[j2] = t2)];
          }
          me.i = i2;
          me.j = j2;
          return r;
        })(width);
      }
      function copy(f, t) {
        t.i = f.i;
        t.j = f.j;
        t.S = f.S.slice();
        return t;
      }
      ;
      function flatten(obj, depth) {
        var result = [], typ = typeof obj, prop;
        if (depth && typ == "object") {
          for (prop in obj) {
            try {
              result.push(flatten(obj[prop], depth - 1));
            } catch (e) {
            }
          }
        }
        return result.length ? result : typ == "string" ? obj : obj + "\0";
      }
      function mixkey(seed, key) {
        var stringseed = seed + "", smear, j = 0;
        while (j < stringseed.length) {
          key[mask & j] = mask & (smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++);
        }
        return tostring(key);
      }
      function autoseed() {
        try {
          var out;
          if (nodecrypto && (out = nodecrypto.randomBytes)) {
            out = out(width);
          } else {
            out = new Uint8Array(width);
            (global2.crypto || global2.msCrypto).getRandomValues(out);
          }
          return tostring(out);
        } catch (e) {
          var browser = global2.navigator, plugins = browser && browser.plugins;
          return [+new Date(), global2, plugins, global2.screen, tostring(pool)];
        }
      }
      function tostring(a) {
        return String.fromCharCode.apply(0, a);
      }
      mixkey(math.random(), pool);
      if (typeof module == "object" && module.exports) {
        module.exports = seedrandom;
        try {
          nodecrypto = require_crypto();
        } catch (ex) {
        }
      } else if (typeof define == "function" && define.amd) {
        define(function() {
          return seedrandom;
        });
      } else {
        math["seed" + rngname] = seedrandom;
      }
    })(typeof self !== "undefined" ? self : exports, [], Math);
  });

  // node_modules/seedrandom/index.js
  var require_seedrandom2 = __commonJS((exports, module) => {
    var alea = require_alea();
    var xor128 = require_xor128();
    var xorwow = require_xorwow();
    var xorshift7 = require_xorshift7();
    var xor4096 = require_xor4096();
    var tychei = require_tychei();
    var sr = require_seedrandom();
    sr.alea = alea;
    sr.xor128 = xor128;
    sr.xorwow = xorwow;
    sr.xorshift7 = xorshift7;
    sr.xor4096 = xor4096;
    sr.tychei = tychei;
    module.exports = sr;
  });

  // node_modules/cloverleaf/data/sites.json
  var require_sites = __commonJS((exports, module) => {
    module.exports = {
      Ada: {
        minLength: 8
      },
      Adobe: {
        minLength: 8,
        maxLength: 100,
        requirements: ["num", "low", "cap"]
      },
      Airbnb: {
        minLength: 8,
        maxLength: 128,
        requirements: ["low", "num", "special"]
      },
      AliExpress: {
        chars: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        minLength: 6,
        maxLength: 20
      },
      Alipay: {
        alias: "AliExpress"
      },
      allegorithmic: {
        minLength: 1
      },
      AlternativeTo: {
        minLength: 8,
        requirements: ["low", "num"]
      },
      Amazon: {
        minLength: 6
      },
      Amino: {
        minLength: 6
      },
      Apple: {
        minLength: 8,
        maxLength: 32,
        requirements: ["low", "num", "cap"]
      },
      Artsy: {
        minLength: 6,
        maxLength: 128
      },
      Baidu: {
        minLength: 6,
        maxLength: 14
      },
      BBC: {
        minLength: 8,
        maxLength: 50,
        requirements: ["low", "num", "cap"],
        chars: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&()*+,-./:;<=>?@[\\]^_`{|}~"
      },
      Behance: {
        alias: "Adobe"
      },
      Bing: {
        alias: "Microsoft"
      },
      "Blend Swap": {
        minLength: 8
      },
      Blizzard: {
        minLength: 8,
        maxLength: 16,
        requirements: ["low", "num"]
      },
      "Channel 4": {
        minLength: 6,
        maxLength: 255
      },
      "Chrono.gg": {
        minLength: 8
      },
      CodePen: {
        minLength: 1
      },
      DeviantArt: {
        minLength: 6
      },
      Discord: {
        minLength: 6,
        maxLength: 128
      },
      Disqus: {
        minLength: 6
      },
      Dribbble: {
        minLength: 6,
        maxLength: 128
      },
      Dropbox: {
        minLength: 6
      },
      Duolingo: {
        minLength: 6
      },
      eBay: {
        minLength: 6,
        maxLength: 64,
        requirements: ["low", "num"],
        chars: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-.;=?@\\^_`{|}~"
      },
      "Epic Games": {
        minLength: 7,
        requirements: ["low", "num"],
        chars: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&()*+,-./:;<=>?@[\\]^_`{|}~"
      },
      Etsy: {
        minLength: 6,
        maxLength: 152
      },
      Evernote: {
        minLength: 6,
        maxLength: 64
      },
      Facebook: {
        minLength: 6
      },
      Factorio: {
        minLength: 5
      },
      Fanatical: {
        minLength: 6
      },
      FANDOM: {
        minLength: 1,
        maxLength: 50
      },
      Firebox: {
        minLength: 7,
        requirements: ["low", "num"]
      },
      Firefox: {
        minLength: 8
      },
      Flickr: {
        alias: "Yahoo"
      },
      Forvo: {
        minLength: 4,
        maxLength: 28
      },
      Freelancer: {
        minLength: 6,
        requirements: ["low", "num"]
      },
      Genius: {
        minLength: 4,
        maxLength: 128
      },
      GeoGuessr: {
        minLength: 5
      },
      Gfycat: {
        minLength: 8,
        maxLength: 25
      },
      giffgaff: {
        requirements: ["cap", "low", "num"],
        minLength: 8
      },
      GIPHY: {
        minLength: 1,
        maxLength: 128
      },
      GitHub: {
        minLength: 7,
        maxLength: 72,
        requirements: ["low", "num"]
      },
      GitLab: {
        minLength: 8,
        maxLength: 128
      },
      "Government Gateway": {
        minLength: 8,
        maxLength: 12,
        requirements: ["low", "num"],
        chars: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
      },
      Guilded: {
        minLength: 8,
        maxLength: 128
      },
      GOG: {
        minLength: 2
      },
      Google: {
        minLength: 8,
        maxLength: 100
      },
      "The Guardian": {
        minLength: 6,
        maxLength: 72
      },
      HitFilm: {
        minLength: 8,
        maxLength: 25
      },
      "Hi-Rez": {
        minLength: 7,
        maxLength: 20,
        chars: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
      },
      "Humble Bundle": {
        minLength: 4
      },
      IFTTT: {
        minLength: 6
      },
      IMDb: {
        minLength: 8,
        maxLength: 1024
      },
      imgur: {
        minLength: 6,
        maxLength: 255,
        requirements: ["num", "low"]
      },
      Instagram: {
        minLength: 6,
        maxLength: 255
      },
      "itch.io": {
        minLength: 2
      },
      itv: {
        minLength: 6,
        maxLength: 100
      },
      JustGiving: {
        minLength: 6
      },
      Keybase: {
        minLength: 6
      },
      "Ko-fi": {
        minLength: 6,
        maxLength: 100
      },
      "last.fm": {
        minLength: 6,
        maxLength: 128,
        requirements: ["num", "special"]
      },
      lernu: {
        minLength: 5
      },
      Lingvist: {
        minLength: 8
      },
      LinkedIn: {
        minLength: 6
      },
      "Lloyds Bank": {
        minLength: 8,
        maxLength: 15,
        chars: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
      },
      "mailbox.org": {
        minLength: 6,
        requirements: ["cap", "low", "num"],
        chars: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!$"%&/()=*+-#.,;:@?{}[]'
      },
      "Mail.Ru": {
        requirements: ["special", "num", "low"],
        minLength: 6,
        maxLength: 40
      },
      Mapbox: {
        minLength: 8,
        maxLength: 512
      },
      Mega: {
        minLength: 8
      },
      Messenger: {
        alias: "Facebook"
      },
      Microsoft: {
        requirements: ["cap", "low"],
        minLength: 8,
        maxLength: 127
      },
      Minecraft: {
        alias: "Mojang"
      },
      Mojang: {
        minLength: 8,
        maxLength: 256
      },
      MSN: {
        alias: "Microsoft"
      },
      MuseScore: {
        minLength: 1,
        maxLength: 128
      },
      "My Nintendo": {
        minLength: 8,
        maxLength: 20,
        requirements: ["cap", "low"]
      },
      "Native Instruments": {
        minLength: 10,
        maxLength: 60,
        requirements: ["special"]
      },
      Nectar: {
        minLength: 8,
        maxLength: 100,
        requirements: ["num", "cap", "low"],
        chars: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*,-./:;<=>?@[\\]^_`{|}~"
      },
      Netflix: {
        minLength: 4,
        maxLength: 50
      },
      Opera: {
        minLength: 12,
        maxLength: 1e3
      },
      OpenStreetMap: {
        minLength: 8,
        maxLength: 255
      },
      Origin: {
        minLength: 8,
        maxLength: 16,
        chars: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        requirements: ["cap", "low", "num"]
      },
      "osu!": {
        minLength: 8
      },
      Oxfam: {
        minLength: 6
      },
      Pastebin: {
        minLength: 4
      },
      "Patient Access": {
        minLength: 8,
        maxLength: 99,
        requirements: ["num", "cap", "low"]
      },
      Patreon: {
        minLength: 6
      },
      PayPal: {
        requirements: ["num"],
        minLength: 8,
        maxLength: 20
      },
      paysafecard: {
        minLength: 8,
        requirements: ["cap", "special"],
        maxLength: 110
      },
      PCPartPicker: {
        minLength: 1
      },
      Pinterest: {
        minLength: 6,
        requirements: ["low", "num"]
      },
      pixiv: {
        minLength: 6,
        maxLength: 72,
        chars: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
      },
      "plug.dj": {
        minLength: 8,
        maxLength: 128,
        requirements: ["low"]
      },
      Pocket: {
        minLength: 6
      },
      Prezi: {
        minLength: 8,
        maxLength: 128
      },
      QQ: {
        minLength: 8,
        maxLength: 16,
        requirements: ["low", "num"]
      },
      Reddit: {
        minLength: 6
      },
      "Riot Games": {
        minLength: 8,
        maxLength: 128,
        requirements: ["low", "num"]
      },
      "Rockstar Games Social Club": {
        minLength: 8,
        maxLength: 30,
        requirements: ["num", "cap"]
      },
      "Sainsbury's": {
        minLength: 8,
        maxLength: 100,
        requirements: ["num", "cap", "low"],
        chars: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*,-./:;<=>?@[\\]^_`{|}~"
      },
      Skype: {
        alias: "Microsoft"
      },
      Snapchat: {
        minLength: 8,
        requirements: ["num", "cap"]
      },
      Songsterr: {
        minLength: 5,
        maxLength: 200
      },
      Soundcloud: {
        minLength: 6,
        maxLength: 2048
      },
      Spotify: {
        minLength: 4
      },
      "Square Enix": {
        minLength: 6,
        maxLength: 32,
        chars: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"(#$%&')=~|`{+*}<>?_-^@[;:],./"
      },
      "Stack Overflow": {
        minLength: 8,
        requirements: ["low", "num"]
      },
      Steam: {
        minLength: 8
      },
      StellarX: {
        minLength: 8,
        maxLength: 50,
        requirements: ["cap", "low", "num"],
        regex: "^(?!.*(.)\\1{2,}).+"
      },
      Streamable: {
        minLength: 6
      },
      Tesco: {
        minLength: 8,
        maxLength: 45,
        requirements: ["low", "cap", "special"]
      },
      "TheCubicle.us": {
        minLength: 5
      },
      "tic.computer": {
        minLength: 6
      },
      TikTok: {
        minLength: 8,
        maxLength: 20,
        requirements: ["low", "num", "special"],
        chars: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&()*+,-./:;<=>?@[\\]^_|~"
      },
      Trello: {
        minLength: 8
      },
      Tumblr: {
        alias: "Yahoo"
      },
      Twitch: {
        minLength: 8
      },
      Twitter: {
        minLength: 6
      },
      Uber: {
        minLength: 5,
        maxLength: 512
      },
      Ubisoft: {
        minLength: 8,
        maxLength: 16
      },
      UCAS: {
        minLength: 8,
        maxLength: 14,
        requirements: ["cap", "low", "num", "special"]
      },
      "Unity ID": {
        minLength: 8,
        maxLength: 72,
        requirements: ["cap", "low", "num"]
      },
      Uplay: {
        alias: "Ubisoft"
      },
      Venmo: {
        minLength: 8,
        maxLength: 32
      },
      Vimeo: {
        requirements: ["cap", "low", "num", "special"],
        minLength: 8,
        maxLength: 72
      },
      "Visa Checkout": {
        chars: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        minLength: 8,
        maxLength: 32
      },
      Vivaldi: {
        minLength: 8,
        maxLength: 254
      },
      VK: {
        minLength: 6
      },
      WeChat: {
        alias: "QQ"
      },
      Wikipedia: {
        minLength: 1
      },
      Wordpress: {
        minLength: 6,
        chars: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~",
        requirements: ["cap", "low", "num", "special"]
      },
      Xbox: {
        alias: "Microsoft"
      },
      "XDA Developers": {
        minLength: 1,
        maxLength: 50
      },
      Yahoo: {
        minLength: 8,
        requirements: ["low", "num"]
      },
      YouTube: {
        alias: "Google"
      },
      "YoYo Games": {
        minLength: 6
      }
    };
  });

  // node_modules/js-sha3/src/sha3.js
  var require_sha3 = __commonJS((exports, module) => {
    /**
     * [js-sha3]{@link https://github.com/emn178/js-sha3}
     *
     * @version 0.8.0
     * @author Chen, Yi-Cyuan [emn178@gmail.com]
     * @copyright Chen, Yi-Cyuan 2015-2018
     * @license MIT
     */
    (function() {
      "use strict";
      var INPUT_ERROR = "input is invalid type";
      var FINALIZE_ERROR = "finalize already called";
      var WINDOW = typeof window === "object";
      var root = WINDOW ? window : {};
      if (root.JS_SHA3_NO_WINDOW) {
        WINDOW = false;
      }
      var WEB_WORKER = !WINDOW && typeof self === "object";
      var NODE_JS = !root.JS_SHA3_NO_NODE_JS && typeof process === "object" && process.versions && process.versions.node;
      if (NODE_JS) {
        root = global;
      } else if (WEB_WORKER) {
        root = self;
      }
      var COMMON_JS = !root.JS_SHA3_NO_COMMON_JS && typeof module === "object" && module.exports;
      var AMD = typeof define === "function" && define.amd;
      var ARRAY_BUFFER = !root.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer !== "undefined";
      var HEX_CHARS = "0123456789abcdef".split("");
      var SHAKE_PADDING = [31, 7936, 2031616, 520093696];
      var CSHAKE_PADDING = [4, 1024, 262144, 67108864];
      var KECCAK_PADDING = [1, 256, 65536, 16777216];
      var PADDING = [6, 1536, 393216, 100663296];
      var SHIFT = [0, 8, 16, 24];
      var RC = [
        1,
        0,
        32898,
        0,
        32906,
        2147483648,
        2147516416,
        2147483648,
        32907,
        0,
        2147483649,
        0,
        2147516545,
        2147483648,
        32777,
        2147483648,
        138,
        0,
        136,
        0,
        2147516425,
        0,
        2147483658,
        0,
        2147516555,
        0,
        139,
        2147483648,
        32905,
        2147483648,
        32771,
        2147483648,
        32770,
        2147483648,
        128,
        2147483648,
        32778,
        0,
        2147483658,
        2147483648,
        2147516545,
        2147483648,
        32896,
        2147483648,
        2147483649,
        0,
        2147516424,
        2147483648
      ];
      var BITS = [224, 256, 384, 512];
      var SHAKE_BITS = [128, 256];
      var OUTPUT_TYPES = ["hex", "buffer", "arrayBuffer", "array", "digest"];
      var CSHAKE_BYTEPAD = {
        "128": 168,
        "256": 136
      };
      if (root.JS_SHA3_NO_NODE_JS || !Array.isArray) {
        Array.isArray = function(obj) {
          return Object.prototype.toString.call(obj) === "[object Array]";
        };
      }
      if (ARRAY_BUFFER && (root.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
        ArrayBuffer.isView = function(obj) {
          return typeof obj === "object" && obj.buffer && obj.buffer.constructor === ArrayBuffer;
        };
      }
      var createOutputMethod = function(bits2, padding, outputType) {
        return function(message) {
          return new Keccak(bits2, padding, bits2).update(message)[outputType]();
        };
      };
      var createShakeOutputMethod = function(bits2, padding, outputType) {
        return function(message, outputBits) {
          return new Keccak(bits2, padding, outputBits).update(message)[outputType]();
        };
      };
      var createCshakeOutputMethod = function(bits2, padding, outputType) {
        return function(message, outputBits, n, s) {
          return methods["cshake" + bits2].update(message, outputBits, n, s)[outputType]();
        };
      };
      var createKmacOutputMethod = function(bits2, padding, outputType) {
        return function(key, message, outputBits, s) {
          return methods["kmac" + bits2].update(key, message, outputBits, s)[outputType]();
        };
      };
      var createOutputMethods = function(method, createMethod2, bits2, padding) {
        for (var i2 = 0; i2 < OUTPUT_TYPES.length; ++i2) {
          var type = OUTPUT_TYPES[i2];
          method[type] = createMethod2(bits2, padding, type);
        }
        return method;
      };
      var createMethod = function(bits2, padding) {
        var method = createOutputMethod(bits2, padding, "hex");
        method.create = function() {
          return new Keccak(bits2, padding, bits2);
        };
        method.update = function(message) {
          return method.create().update(message);
        };
        return createOutputMethods(method, createOutputMethod, bits2, padding);
      };
      var createShakeMethod = function(bits2, padding) {
        var method = createShakeOutputMethod(bits2, padding, "hex");
        method.create = function(outputBits) {
          return new Keccak(bits2, padding, outputBits);
        };
        method.update = function(message, outputBits) {
          return method.create(outputBits).update(message);
        };
        return createOutputMethods(method, createShakeOutputMethod, bits2, padding);
      };
      var createCshakeMethod = function(bits2, padding) {
        var w = CSHAKE_BYTEPAD[bits2];
        var method = createCshakeOutputMethod(bits2, padding, "hex");
        method.create = function(outputBits, n, s) {
          if (!n && !s) {
            return methods["shake" + bits2].create(outputBits);
          } else {
            return new Keccak(bits2, padding, outputBits).bytepad([n, s], w);
          }
        };
        method.update = function(message, outputBits, n, s) {
          return method.create(outputBits, n, s).update(message);
        };
        return createOutputMethods(method, createCshakeOutputMethod, bits2, padding);
      };
      var createKmacMethod = function(bits2, padding) {
        var w = CSHAKE_BYTEPAD[bits2];
        var method = createKmacOutputMethod(bits2, padding, "hex");
        method.create = function(key, outputBits, s) {
          return new Kmac(bits2, padding, outputBits).bytepad(["KMAC", s], w).bytepad([key], w);
        };
        method.update = function(key, message, outputBits, s) {
          return method.create(key, outputBits, s).update(message);
        };
        return createOutputMethods(method, createKmacOutputMethod, bits2, padding);
      };
      var algorithms = [
        {name: "keccak", padding: KECCAK_PADDING, bits: BITS, createMethod},
        {name: "sha3", padding: PADDING, bits: BITS, createMethod},
        {name: "shake", padding: SHAKE_PADDING, bits: SHAKE_BITS, createMethod: createShakeMethod},
        {name: "cshake", padding: CSHAKE_PADDING, bits: SHAKE_BITS, createMethod: createCshakeMethod},
        {name: "kmac", padding: CSHAKE_PADDING, bits: SHAKE_BITS, createMethod: createKmacMethod}
      ];
      var methods = {}, methodNames = [];
      for (var i = 0; i < algorithms.length; ++i) {
        var algorithm = algorithms[i];
        var bits = algorithm.bits;
        for (var j = 0; j < bits.length; ++j) {
          var methodName = algorithm.name + "_" + bits[j];
          methodNames.push(methodName);
          methods[methodName] = algorithm.createMethod(bits[j], algorithm.padding);
          if (algorithm.name !== "sha3") {
            var newMethodName = algorithm.name + bits[j];
            methodNames.push(newMethodName);
            methods[newMethodName] = methods[methodName];
          }
        }
      }
      function Keccak(bits2, padding, outputBits) {
        this.blocks = [];
        this.s = [];
        this.padding = padding;
        this.outputBits = outputBits;
        this.reset = true;
        this.finalized = false;
        this.block = 0;
        this.start = 0;
        this.blockCount = 1600 - (bits2 << 1) >> 5;
        this.byteCount = this.blockCount << 2;
        this.outputBlocks = outputBits >> 5;
        this.extraBytes = (outputBits & 31) >> 3;
        for (var i2 = 0; i2 < 50; ++i2) {
          this.s[i2] = 0;
        }
      }
      Keccak.prototype.update = function(message) {
        if (this.finalized) {
          throw new Error(FINALIZE_ERROR);
        }
        var notString, type = typeof message;
        if (type !== "string") {
          if (type === "object") {
            if (message === null) {
              throw new Error(INPUT_ERROR);
            } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
              message = new Uint8Array(message);
            } else if (!Array.isArray(message)) {
              if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
                throw new Error(INPUT_ERROR);
              }
            }
          } else {
            throw new Error(INPUT_ERROR);
          }
          notString = true;
        }
        var blocks = this.blocks, byteCount = this.byteCount, length = message.length, blockCount = this.blockCount, index = 0, s = this.s, i2, code;
        while (index < length) {
          if (this.reset) {
            this.reset = false;
            blocks[0] = this.block;
            for (i2 = 1; i2 < blockCount + 1; ++i2) {
              blocks[i2] = 0;
            }
          }
          if (notString) {
            for (i2 = this.start; index < length && i2 < byteCount; ++index) {
              blocks[i2 >> 2] |= message[index] << SHIFT[i2++ & 3];
            }
          } else {
            for (i2 = this.start; index < length && i2 < byteCount; ++index) {
              code = message.charCodeAt(index);
              if (code < 128) {
                blocks[i2 >> 2] |= code << SHIFT[i2++ & 3];
              } else if (code < 2048) {
                blocks[i2 >> 2] |= (192 | code >> 6) << SHIFT[i2++ & 3];
                blocks[i2 >> 2] |= (128 | code & 63) << SHIFT[i2++ & 3];
              } else if (code < 55296 || code >= 57344) {
                blocks[i2 >> 2] |= (224 | code >> 12) << SHIFT[i2++ & 3];
                blocks[i2 >> 2] |= (128 | code >> 6 & 63) << SHIFT[i2++ & 3];
                blocks[i2 >> 2] |= (128 | code & 63) << SHIFT[i2++ & 3];
              } else {
                code = 65536 + ((code & 1023) << 10 | message.charCodeAt(++index) & 1023);
                blocks[i2 >> 2] |= (240 | code >> 18) << SHIFT[i2++ & 3];
                blocks[i2 >> 2] |= (128 | code >> 12 & 63) << SHIFT[i2++ & 3];
                blocks[i2 >> 2] |= (128 | code >> 6 & 63) << SHIFT[i2++ & 3];
                blocks[i2 >> 2] |= (128 | code & 63) << SHIFT[i2++ & 3];
              }
            }
          }
          this.lastByteIndex = i2;
          if (i2 >= byteCount) {
            this.start = i2 - byteCount;
            this.block = blocks[blockCount];
            for (i2 = 0; i2 < blockCount; ++i2) {
              s[i2] ^= blocks[i2];
            }
            f(s);
            this.reset = true;
          } else {
            this.start = i2;
          }
        }
        return this;
      };
      Keccak.prototype.encode = function(x, right) {
        var o = x & 255, n = 1;
        var bytes = [o];
        x = x >> 8;
        o = x & 255;
        while (o > 0) {
          bytes.unshift(o);
          x = x >> 8;
          o = x & 255;
          ++n;
        }
        if (right) {
          bytes.push(n);
        } else {
          bytes.unshift(n);
        }
        this.update(bytes);
        return bytes.length;
      };
      Keccak.prototype.encodeString = function(str) {
        var notString, type = typeof str;
        if (type !== "string") {
          if (type === "object") {
            if (str === null) {
              throw new Error(INPUT_ERROR);
            } else if (ARRAY_BUFFER && str.constructor === ArrayBuffer) {
              str = new Uint8Array(str);
            } else if (!Array.isArray(str)) {
              if (!ARRAY_BUFFER || !ArrayBuffer.isView(str)) {
                throw new Error(INPUT_ERROR);
              }
            }
          } else {
            throw new Error(INPUT_ERROR);
          }
          notString = true;
        }
        var bytes = 0, length = str.length;
        if (notString) {
          bytes = length;
        } else {
          for (var i2 = 0; i2 < str.length; ++i2) {
            var code = str.charCodeAt(i2);
            if (code < 128) {
              bytes += 1;
            } else if (code < 2048) {
              bytes += 2;
            } else if (code < 55296 || code >= 57344) {
              bytes += 3;
            } else {
              code = 65536 + ((code & 1023) << 10 | str.charCodeAt(++i2) & 1023);
              bytes += 4;
            }
          }
        }
        bytes += this.encode(bytes * 8);
        this.update(str);
        return bytes;
      };
      Keccak.prototype.bytepad = function(strs, w) {
        var bytes = this.encode(w);
        for (var i2 = 0; i2 < strs.length; ++i2) {
          bytes += this.encodeString(strs[i2]);
        }
        var paddingBytes = w - bytes % w;
        var zeros = [];
        zeros.length = paddingBytes;
        this.update(zeros);
        return this;
      };
      Keccak.prototype.finalize = function() {
        if (this.finalized) {
          return;
        }
        this.finalized = true;
        var blocks = this.blocks, i2 = this.lastByteIndex, blockCount = this.blockCount, s = this.s;
        blocks[i2 >> 2] |= this.padding[i2 & 3];
        if (this.lastByteIndex === this.byteCount) {
          blocks[0] = blocks[blockCount];
          for (i2 = 1; i2 < blockCount + 1; ++i2) {
            blocks[i2] = 0;
          }
        }
        blocks[blockCount - 1] |= 2147483648;
        for (i2 = 0; i2 < blockCount; ++i2) {
          s[i2] ^= blocks[i2];
        }
        f(s);
      };
      Keccak.prototype.toString = Keccak.prototype.hex = function() {
        this.finalize();
        var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks, extraBytes = this.extraBytes, i2 = 0, j2 = 0;
        var hex = "", block;
        while (j2 < outputBlocks) {
          for (i2 = 0; i2 < blockCount && j2 < outputBlocks; ++i2, ++j2) {
            block = s[i2];
            hex += HEX_CHARS[block >> 4 & 15] + HEX_CHARS[block & 15] + HEX_CHARS[block >> 12 & 15] + HEX_CHARS[block >> 8 & 15] + HEX_CHARS[block >> 20 & 15] + HEX_CHARS[block >> 16 & 15] + HEX_CHARS[block >> 28 & 15] + HEX_CHARS[block >> 24 & 15];
          }
          if (j2 % blockCount === 0) {
            f(s);
            i2 = 0;
          }
        }
        if (extraBytes) {
          block = s[i2];
          hex += HEX_CHARS[block >> 4 & 15] + HEX_CHARS[block & 15];
          if (extraBytes > 1) {
            hex += HEX_CHARS[block >> 12 & 15] + HEX_CHARS[block >> 8 & 15];
          }
          if (extraBytes > 2) {
            hex += HEX_CHARS[block >> 20 & 15] + HEX_CHARS[block >> 16 & 15];
          }
        }
        return hex;
      };
      Keccak.prototype.arrayBuffer = function() {
        this.finalize();
        var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks, extraBytes = this.extraBytes, i2 = 0, j2 = 0;
        var bytes = this.outputBits >> 3;
        var buffer;
        if (extraBytes) {
          buffer = new ArrayBuffer(outputBlocks + 1 << 2);
        } else {
          buffer = new ArrayBuffer(bytes);
        }
        var array = new Uint32Array(buffer);
        while (j2 < outputBlocks) {
          for (i2 = 0; i2 < blockCount && j2 < outputBlocks; ++i2, ++j2) {
            array[j2] = s[i2];
          }
          if (j2 % blockCount === 0) {
            f(s);
          }
        }
        if (extraBytes) {
          array[i2] = s[i2];
          buffer = buffer.slice(0, bytes);
        }
        return buffer;
      };
      Keccak.prototype.buffer = Keccak.prototype.arrayBuffer;
      Keccak.prototype.digest = Keccak.prototype.array = function() {
        this.finalize();
        var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks, extraBytes = this.extraBytes, i2 = 0, j2 = 0;
        var array = [], offset, block;
        while (j2 < outputBlocks) {
          for (i2 = 0; i2 < blockCount && j2 < outputBlocks; ++i2, ++j2) {
            offset = j2 << 2;
            block = s[i2];
            array[offset] = block & 255;
            array[offset + 1] = block >> 8 & 255;
            array[offset + 2] = block >> 16 & 255;
            array[offset + 3] = block >> 24 & 255;
          }
          if (j2 % blockCount === 0) {
            f(s);
          }
        }
        if (extraBytes) {
          offset = j2 << 2;
          block = s[i2];
          array[offset] = block & 255;
          if (extraBytes > 1) {
            array[offset + 1] = block >> 8 & 255;
          }
          if (extraBytes > 2) {
            array[offset + 2] = block >> 16 & 255;
          }
        }
        return array;
      };
      function Kmac(bits2, padding, outputBits) {
        Keccak.call(this, bits2, padding, outputBits);
      }
      Kmac.prototype = new Keccak();
      Kmac.prototype.finalize = function() {
        this.encode(this.outputBits, true);
        return Keccak.prototype.finalize.call(this);
      };
      var f = function(s) {
        var h, l, n, c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30, b31, b32, b33, b34, b35, b36, b37, b38, b39, b40, b41, b42, b43, b44, b45, b46, b47, b48, b49;
        for (n = 0; n < 48; n += 2) {
          c0 = s[0] ^ s[10] ^ s[20] ^ s[30] ^ s[40];
          c1 = s[1] ^ s[11] ^ s[21] ^ s[31] ^ s[41];
          c2 = s[2] ^ s[12] ^ s[22] ^ s[32] ^ s[42];
          c3 = s[3] ^ s[13] ^ s[23] ^ s[33] ^ s[43];
          c4 = s[4] ^ s[14] ^ s[24] ^ s[34] ^ s[44];
          c5 = s[5] ^ s[15] ^ s[25] ^ s[35] ^ s[45];
          c6 = s[6] ^ s[16] ^ s[26] ^ s[36] ^ s[46];
          c7 = s[7] ^ s[17] ^ s[27] ^ s[37] ^ s[47];
          c8 = s[8] ^ s[18] ^ s[28] ^ s[38] ^ s[48];
          c9 = s[9] ^ s[19] ^ s[29] ^ s[39] ^ s[49];
          h = c8 ^ (c2 << 1 | c3 >>> 31);
          l = c9 ^ (c3 << 1 | c2 >>> 31);
          s[0] ^= h;
          s[1] ^= l;
          s[10] ^= h;
          s[11] ^= l;
          s[20] ^= h;
          s[21] ^= l;
          s[30] ^= h;
          s[31] ^= l;
          s[40] ^= h;
          s[41] ^= l;
          h = c0 ^ (c4 << 1 | c5 >>> 31);
          l = c1 ^ (c5 << 1 | c4 >>> 31);
          s[2] ^= h;
          s[3] ^= l;
          s[12] ^= h;
          s[13] ^= l;
          s[22] ^= h;
          s[23] ^= l;
          s[32] ^= h;
          s[33] ^= l;
          s[42] ^= h;
          s[43] ^= l;
          h = c2 ^ (c6 << 1 | c7 >>> 31);
          l = c3 ^ (c7 << 1 | c6 >>> 31);
          s[4] ^= h;
          s[5] ^= l;
          s[14] ^= h;
          s[15] ^= l;
          s[24] ^= h;
          s[25] ^= l;
          s[34] ^= h;
          s[35] ^= l;
          s[44] ^= h;
          s[45] ^= l;
          h = c4 ^ (c8 << 1 | c9 >>> 31);
          l = c5 ^ (c9 << 1 | c8 >>> 31);
          s[6] ^= h;
          s[7] ^= l;
          s[16] ^= h;
          s[17] ^= l;
          s[26] ^= h;
          s[27] ^= l;
          s[36] ^= h;
          s[37] ^= l;
          s[46] ^= h;
          s[47] ^= l;
          h = c6 ^ (c0 << 1 | c1 >>> 31);
          l = c7 ^ (c1 << 1 | c0 >>> 31);
          s[8] ^= h;
          s[9] ^= l;
          s[18] ^= h;
          s[19] ^= l;
          s[28] ^= h;
          s[29] ^= l;
          s[38] ^= h;
          s[39] ^= l;
          s[48] ^= h;
          s[49] ^= l;
          b0 = s[0];
          b1 = s[1];
          b32 = s[11] << 4 | s[10] >>> 28;
          b33 = s[10] << 4 | s[11] >>> 28;
          b14 = s[20] << 3 | s[21] >>> 29;
          b15 = s[21] << 3 | s[20] >>> 29;
          b46 = s[31] << 9 | s[30] >>> 23;
          b47 = s[30] << 9 | s[31] >>> 23;
          b28 = s[40] << 18 | s[41] >>> 14;
          b29 = s[41] << 18 | s[40] >>> 14;
          b20 = s[2] << 1 | s[3] >>> 31;
          b21 = s[3] << 1 | s[2] >>> 31;
          b2 = s[13] << 12 | s[12] >>> 20;
          b3 = s[12] << 12 | s[13] >>> 20;
          b34 = s[22] << 10 | s[23] >>> 22;
          b35 = s[23] << 10 | s[22] >>> 22;
          b16 = s[33] << 13 | s[32] >>> 19;
          b17 = s[32] << 13 | s[33] >>> 19;
          b48 = s[42] << 2 | s[43] >>> 30;
          b49 = s[43] << 2 | s[42] >>> 30;
          b40 = s[5] << 30 | s[4] >>> 2;
          b41 = s[4] << 30 | s[5] >>> 2;
          b22 = s[14] << 6 | s[15] >>> 26;
          b23 = s[15] << 6 | s[14] >>> 26;
          b4 = s[25] << 11 | s[24] >>> 21;
          b5 = s[24] << 11 | s[25] >>> 21;
          b36 = s[34] << 15 | s[35] >>> 17;
          b37 = s[35] << 15 | s[34] >>> 17;
          b18 = s[45] << 29 | s[44] >>> 3;
          b19 = s[44] << 29 | s[45] >>> 3;
          b10 = s[6] << 28 | s[7] >>> 4;
          b11 = s[7] << 28 | s[6] >>> 4;
          b42 = s[17] << 23 | s[16] >>> 9;
          b43 = s[16] << 23 | s[17] >>> 9;
          b24 = s[26] << 25 | s[27] >>> 7;
          b25 = s[27] << 25 | s[26] >>> 7;
          b6 = s[36] << 21 | s[37] >>> 11;
          b7 = s[37] << 21 | s[36] >>> 11;
          b38 = s[47] << 24 | s[46] >>> 8;
          b39 = s[46] << 24 | s[47] >>> 8;
          b30 = s[8] << 27 | s[9] >>> 5;
          b31 = s[9] << 27 | s[8] >>> 5;
          b12 = s[18] << 20 | s[19] >>> 12;
          b13 = s[19] << 20 | s[18] >>> 12;
          b44 = s[29] << 7 | s[28] >>> 25;
          b45 = s[28] << 7 | s[29] >>> 25;
          b26 = s[38] << 8 | s[39] >>> 24;
          b27 = s[39] << 8 | s[38] >>> 24;
          b8 = s[48] << 14 | s[49] >>> 18;
          b9 = s[49] << 14 | s[48] >>> 18;
          s[0] = b0 ^ ~b2 & b4;
          s[1] = b1 ^ ~b3 & b5;
          s[10] = b10 ^ ~b12 & b14;
          s[11] = b11 ^ ~b13 & b15;
          s[20] = b20 ^ ~b22 & b24;
          s[21] = b21 ^ ~b23 & b25;
          s[30] = b30 ^ ~b32 & b34;
          s[31] = b31 ^ ~b33 & b35;
          s[40] = b40 ^ ~b42 & b44;
          s[41] = b41 ^ ~b43 & b45;
          s[2] = b2 ^ ~b4 & b6;
          s[3] = b3 ^ ~b5 & b7;
          s[12] = b12 ^ ~b14 & b16;
          s[13] = b13 ^ ~b15 & b17;
          s[22] = b22 ^ ~b24 & b26;
          s[23] = b23 ^ ~b25 & b27;
          s[32] = b32 ^ ~b34 & b36;
          s[33] = b33 ^ ~b35 & b37;
          s[42] = b42 ^ ~b44 & b46;
          s[43] = b43 ^ ~b45 & b47;
          s[4] = b4 ^ ~b6 & b8;
          s[5] = b5 ^ ~b7 & b9;
          s[14] = b14 ^ ~b16 & b18;
          s[15] = b15 ^ ~b17 & b19;
          s[24] = b24 ^ ~b26 & b28;
          s[25] = b25 ^ ~b27 & b29;
          s[34] = b34 ^ ~b36 & b38;
          s[35] = b35 ^ ~b37 & b39;
          s[44] = b44 ^ ~b46 & b48;
          s[45] = b45 ^ ~b47 & b49;
          s[6] = b6 ^ ~b8 & b0;
          s[7] = b7 ^ ~b9 & b1;
          s[16] = b16 ^ ~b18 & b10;
          s[17] = b17 ^ ~b19 & b11;
          s[26] = b26 ^ ~b28 & b20;
          s[27] = b27 ^ ~b29 & b21;
          s[36] = b36 ^ ~b38 & b30;
          s[37] = b37 ^ ~b39 & b31;
          s[46] = b46 ^ ~b48 & b40;
          s[47] = b47 ^ ~b49 & b41;
          s[8] = b8 ^ ~b0 & b2;
          s[9] = b9 ^ ~b1 & b3;
          s[18] = b18 ^ ~b10 & b12;
          s[19] = b19 ^ ~b11 & b13;
          s[28] = b28 ^ ~b20 & b22;
          s[29] = b29 ^ ~b21 & b23;
          s[38] = b38 ^ ~b30 & b32;
          s[39] = b39 ^ ~b31 & b33;
          s[48] = b48 ^ ~b40 & b42;
          s[49] = b49 ^ ~b41 & b43;
          s[0] ^= RC[n];
          s[1] ^= RC[n + 1];
        }
      };
      if (COMMON_JS) {
        module.exports = methods;
      } else {
        for (i = 0; i < methodNames.length; ++i) {
          root[methodNames[i]] = methods[methodNames[i]];
        }
        if (AMD) {
          define(function() {
            return methods;
          });
        }
      }
    })();
  });

  // node_modules/cloverleaf/index.js
  var require_cloverleaf = __commonJS((exports) => {
    var jsonData2 = require_sites();
    var keccak512 = require_sha3().keccak512;
    Math.seedrandom = require_seedrandom2();
    var defaultMinLength = 4;
    var defaultMaxLength = 512;
    var defaultLength = 16;
    var possibleRequirements = {
      cap: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      low: "abcdefghijklmnopqrstuvwxyz",
      num: "0123456789",
      special: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
    };
    function process2(appName, masterPass, presetToggle = false, length = defaultLength) {
      let minLength = defaultMinLength;
      let maxLength = defaultMaxLength;
      let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
      const requirements = [];
      let regex;
      appName = appName.trim();
      length = Math.trunc(length);
      let result = "";
      if (presetToggle) {
        try {
          if (jsonData2[appName].alias) {
            appName = jsonData2[appName].alias;
          }
        } catch (TypeError2) {
          throw new Error("Invalid preset");
        }
        if ("minLength" in jsonData2[appName]) {
          minLength = jsonData2[appName].minLength;
        }
        if ("maxLength" in jsonData2[appName]) {
          maxLength = jsonData2[appName].maxLength;
        }
        if ("chars" in jsonData2[appName]) {
          chars = jsonData2[appName].chars;
        }
        if ("regex" in jsonData2[appName]) {
          try {
            regex = new RegExp(jsonData2[appName].regex);
          } catch (SyntaxError) {
            throw new Error(`Invalid regex from ${appName} "${jsonData2[appName].regex}"`);
          }
        }
        if ("requirements" in jsonData2[appName]) {
          for (let i = 0; i < jsonData2[appName].requirements.length; i++) {
            requirements.push(possibleRequirements[jsonData2[appName].requirements[i]]);
          }
        }
      }
      if (!(minLength <= length && length <= maxLength)) {
        if (length > maxLength) {
          length = maxLength;
        } else if (length < minLength) {
          length = minLength;
        }
      }
      if (appName === "" || masterPass === "" || length === "") {
        return null;
      }
      appName = appName.toLowerCase();
      Math.seedrandom(keccak512(appName + masterPass));
      while (true) {
        result = "";
        while (result.length < length) {
          result += chars[Math.floor(Math.random() * chars.length)];
        }
        if (requirements.length !== 0 || regex) {
          let nope = false;
          for (let j = 0; j < requirements.length; j++) {
            for (let c = 0; c < requirements[j].length; c++) {
              if (result.indexOf(requirements[j][c]) !== -1) {
                break;
              }
              if (requirements[j].indexOf(requirements[j][c]) === requirements[j].length - 1) {
                nope = true;
                break;
              }
            }
            if (nope) {
              break;
            }
          }
          if (regex && !nope) {
            if (!regex.test(result)) {
              nope = true;
            }
          }
          if (!nope) {
            break;
          }
        } else {
          break;
        }
      }
      return result;
    }
    exports.process = process2;
    exports.siteData = jsonData2;
  });

  // data/logos.json
  var require_logos = __commonJS((exports, module) => {
    module.exports = {
      Airbnb: {
        mini: true
      },
      Alipay: {
        alias: "AliExpress",
        mini: true
      },
      Amazon: {
        mini: true
      },
      Amino: {
        mini: true
      },
      Artsy: {
        mini: true
      },
      Baidu: {
        mini: true
      },
      Behance: {
        alias: "Adobe",
        mini: true
      },
      Bing: {
        alias: "Microsoft",
        mini: true
      },
      "Chrono.gg": {
        mini: true
      },
      CodePen: {
        mini: true
      },
      DeviantArt: {
        mini: true
      },
      Discord: {
        mini: true
      },
      Disqus: {
        mini: true
      },
      Dribbble: {
        mini: true
      },
      Dropbox: {
        mini: true
      },
      Duolingo: {
        mini: true
      },
      Etsy: {
        mini: true
      },
      Evernote: {
        mini: true
      },
      Facebook: {
        mini: true
      },
      Fanatical: {
        mini: true
      },
      FANDOM: {
        mini: true
      },
      Firebox: {
        mini: true
      },
      Firefox: {
        mini: true
      },
      Flickr: {
        alias: "Yahoo",
        mini: true
      },
      Freelancer: {
        mini: true
      },
      Genius: {
        mini: true
      },
      GeoGuessr: {
        mini: true
      },
      Gfycat: {
        mini: true
      },
      GIPHY: {
        mini: true
      },
      GitLab: {
        mini: true
      },
      "Hi-Rez": {
        logo: "logos/Hi-Rez.png"
      },
      imgur: {
        mini: true
      },
      "mailbox.org": {
        mini: true
      },
      Messenger: {
        alias: "Facebook"
      },
      Minecraft: {
        alias: "Mojang"
      },
      MSN: {
        alias: "Microsoft"
      },
      Nectar: {
        logo: "logos/Nectar.png"
      },
      Netflix: {
        mini: true
      },
      "osu!": {
        logo: "logos/osu!.png"
      },
      Pastebin: {
        logo: "logos/Pastebin.png"
      },
      Patreon: {
        mini: true
      },
      PayPal: {
        mini: true
      },
      paysafecard: {
        mini: true
      },
      Pinterest: {
        mini: true
      },
      pixiv: {
        mini: true
      },
      "Riot Games": {
        mini: true
      },
      Skype: {
        alias: "Microsoft"
      },
      Spotify: {
        mini: true
      },
      "Square Enix": {
        mini: true
      },
      StellarX: {
        mini: true
      },
      TikTok: {
        mini: true
      },
      Tumblr: {
        alias: "Yahoo",
        mini: true
      },
      Twitch: {
        mini: true
      },
      Uplay: {
        alias: "Ubisoft"
      },
      WeChat: {
        alias: "QQ"
      },
      Xbox: {
        alias: "Microsoft"
      },
      Yahoo: {
        mini: true
      },
      YouTube: {
        alias: "Google"
      }
    };
  });

  // data/themes.json
  var require_themes = __commonJS((exports, module) => {
    module.exports = {
      Vanilla: {
        accent: "#3f51b5",
        lightAccent: "#7280ce",
        text: "#535353",
        background: "#fff",
        internal: "#fff",
        incorrect: "#f44336",
        correct: "#8fff66",
        inputColor: "#000",
        linkColor: "#00539b",
        highlightColor: "#eee"
      },
      Discord: {
        accent: "#7289da",
        lightAccent: "#9aabe5",
        text: "#dcddde",
        background: "#2f3136",
        internal: "#393c43",
        incorrect: "#f04747",
        correct: "#43b581",
        inputColor: "#fff",
        linkColor: "#00b0f4",
        highlightColor: "#393c43"
      },
      "Solarized Dark": {
        accent: "#6c71c4",
        lightAccent: "#9094d3",
        text: "#93a1a1",
        background: "#073642",
        internal: "#002b36",
        incorrect: "#ce2726",
        correct: "#7c9114",
        inputColor: "#839496",
        linkColor: "#268bd2",
        highlightColor: "#002b36"
      },
      OLED: {
        accent: "#3f51b5",
        lightAccent: "#6d78b5",
        text: "#d4d4d4",
        background: "#000",
        internal: "#000",
        incorrect: "#f44336",
        correct: "#8fff66",
        inputColor: "#839496",
        linkColor: "#268bd2",
        highlightColor: "#0e0e0e"
      },
      Dracula: {
        accent: "#3f51b5",
        lightAccent: "#6272a4",
        text: "#bcc2cd",
        background: "#282a36",
        internal: "#343746",
        incorrect: "#f55",
        correct: "#50fa7b",
        inputColor: "#f8f8f2",
        linkColor: "#6272a4",
        highlightColor: "#343746"
      }
    };
  });

  // langs/langs.json
  var require_langs = __commonJS((exports, module) => {
    module.exports = {"de-DE": {native: "Deutsch"}, "en-GB": {native: "English"}, "eo-UY": {native: "Esperanto"}, "es-ES": {native: "Espa\xF1ol"}, "fr-FR": {native: "Fran\xE7ais"}};
  });

  // src/debug.js
  var require_debug = __commonJS(() => {
    var themeData2 = require_themes();
    var debug = false;
    if (debug) {
      document.title += ` - Debug ${new Date().getTime()}`;
      console.debug("Enabling debug css");
      const link = document.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("type", "text/css");
      link.setAttribute("href", "debug.css");
      document.getElementsByTagName("head")[0].appendChild(link);
      themeData2.testTheme = {
        accent: "#ff00ff",
        lightAccent: "#ff00ff",
        text: "#ff00ff",
        background: "#ff00ff",
        internal: "#ff00ff",
        incorrect: "#ff00ff",
        correct: "#ff00ff",
        inputColor: "#ff00ff",
        linkColor: "#ff00ff",
        highlightColor: "#ff00ff"
      };
      const themeOption = document.createElement("option");
      themeOption.onclick = "changeTheme('testTheme')";
      themeOption.id = "testTheme";
      themeOption.innerHTML = "testTheme";
      document.querySelector("#options .input-field select").appendChild(themeOption);
      const css = "a[id=testTheme]{background-color: #ff00ff !important; border: 1px ;}a[id=testTheme] i {color: #ff00ff";
      const style = document.createElement("style");
      style.type = "text/css";
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
      document.getElementsByTagName("head")[0].appendChild(style);
    }
    if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
      document.title += " - LocalHost";
      document.getElementById("faq").href += ".html";
    }
  });

  // src/main.js
  var import_materialize_min = __toModule(require_materialize_min());

  // node_modules/workbox-core/_version.js
  "use strict";
  try {
    self["workbox:core:6.1.2"] && _();
  } catch (e) {
  }

  // node_modules/workbox-core/models/messages/messages.js
  var messages = {
    "invalid-value": ({paramName, validValueDescription, value}) => {
      if (!paramName || !validValueDescription) {
        throw new Error(`Unexpected input to 'invalid-value' error.`);
      }
      return `The '${paramName}' parameter was given a value with an unexpected value. ${validValueDescription} Received a value of ${JSON.stringify(value)}.`;
    },
    "not-an-array": ({moduleName, className, funcName, paramName}) => {
      if (!moduleName || !className || !funcName || !paramName) {
        throw new Error(`Unexpected input to 'not-an-array' error.`);
      }
      return `The parameter '${paramName}' passed into '${moduleName}.${className}.${funcName}()' must be an array.`;
    },
    "incorrect-type": ({expectedType, paramName, moduleName, className, funcName}) => {
      if (!expectedType || !paramName || !moduleName || !funcName) {
        throw new Error(`Unexpected input to 'incorrect-type' error.`);
      }
      return `The parameter '${paramName}' passed into '${moduleName}.${className ? className + "." : ""}${funcName}()' must be of type ${expectedType}.`;
    },
    "incorrect-class": ({expectedClass, paramName, moduleName, className, funcName, isReturnValueProblem}) => {
      if (!expectedClass || !moduleName || !funcName) {
        throw new Error(`Unexpected input to 'incorrect-class' error.`);
      }
      if (isReturnValueProblem) {
        return `The return value from '${moduleName}.${className ? className + "." : ""}${funcName}()' must be an instance of class ${expectedClass.name}.`;
      }
      return `The parameter '${paramName}' passed into '${moduleName}.${className ? className + "." : ""}${funcName}()' must be an instance of class ${expectedClass.name}.`;
    },
    "missing-a-method": ({expectedMethod, paramName, moduleName, className, funcName}) => {
      if (!expectedMethod || !paramName || !moduleName || !className || !funcName) {
        throw new Error(`Unexpected input to 'missing-a-method' error.`);
      }
      return `${moduleName}.${className}.${funcName}() expected the '${paramName}' parameter to expose a '${expectedMethod}' method.`;
    },
    "add-to-cache-list-unexpected-type": ({entry}) => {
      return `An unexpected entry was passed to 'workbox-precaching.PrecacheController.addToCacheList()' The entry '${JSON.stringify(entry)}' isn't supported. You must supply an array of strings with one or more characters, objects with a url property or Request objects.`;
    },
    "add-to-cache-list-conflicting-entries": ({firstEntry, secondEntry}) => {
      if (!firstEntry || !secondEntry) {
        throw new Error(`Unexpected input to 'add-to-cache-list-duplicate-entries' error.`);
      }
      return `Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${firstEntry._entryId} but different revision details. Workbox is unable to cache and version the asset correctly. Please remove one of the entries.`;
    },
    "plugin-error-request-will-fetch": ({thrownError}) => {
      if (!thrownError) {
        throw new Error(`Unexpected input to 'plugin-error-request-will-fetch', error.`);
      }
      return `An error was thrown by a plugins 'requestWillFetch()' method. The thrown error message was: '${thrownError.message}'.`;
    },
    "invalid-cache-name": ({cacheNameId, value}) => {
      if (!cacheNameId) {
        throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
      }
      return `You must provide a name containing at least one character for setCacheDetails({${cacheNameId}: '...'}). Received a value of '${JSON.stringify(value)}'`;
    },
    "unregister-route-but-not-found-with-method": ({method}) => {
      if (!method) {
        throw new Error(`Unexpected input to 'unregister-route-but-not-found-with-method' error.`);
      }
      return `The route you're trying to unregister was not  previously registered for the method type '${method}'.`;
    },
    "unregister-route-route-not-registered": () => {
      return `The route you're trying to unregister was not previously registered.`;
    },
    "queue-replay-failed": ({name: name2}) => {
      return `Replaying the background sync queue '${name2}' failed.`;
    },
    "duplicate-queue-name": ({name: name2}) => {
      return `The Queue name '${name2}' is already being used. All instances of backgroundSync.Queue must be given unique names.`;
    },
    "expired-test-without-max-age": ({methodName, paramName}) => {
      return `The '${methodName}()' method can only be used when the '${paramName}' is used in the constructor.`;
    },
    "unsupported-route-type": ({moduleName, className, funcName, paramName}) => {
      return `The supplied '${paramName}' parameter was an unsupported type. Please check the docs for ${moduleName}.${className}.${funcName} for valid input types.`;
    },
    "not-array-of-class": ({value, expectedClass, moduleName, className, funcName, paramName}) => {
      return `The supplied '${paramName}' parameter must be an array of '${expectedClass}' objects. Received '${JSON.stringify(value)},'. Please check the call to ${moduleName}.${className}.${funcName}() to fix the issue.`;
    },
    "max-entries-or-age-required": ({moduleName, className, funcName}) => {
      return `You must define either config.maxEntries or config.maxAgeSecondsin ${moduleName}.${className}.${funcName}`;
    },
    "statuses-or-headers-required": ({moduleName, className, funcName}) => {
      return `You must define either config.statuses or config.headersin ${moduleName}.${className}.${funcName}`;
    },
    "invalid-string": ({moduleName, funcName, paramName}) => {
      if (!paramName || !moduleName || !funcName) {
        throw new Error(`Unexpected input to 'invalid-string' error.`);
      }
      return `When using strings, the '${paramName}' parameter must start with 'http' (for cross-origin matches) or '/' (for same-origin matches). Please see the docs for ${moduleName}.${funcName}() for more info.`;
    },
    "channel-name-required": () => {
      return `You must provide a channelName to construct a BroadcastCacheUpdate instance.`;
    },
    "invalid-responses-are-same-args": () => {
      return `The arguments passed into responsesAreSame() appear to be invalid. Please ensure valid Responses are used.`;
    },
    "expire-custom-caches-only": () => {
      return `You must provide a 'cacheName' property when using the expiration plugin with a runtime caching strategy.`;
    },
    "unit-must-be-bytes": ({normalizedRangeHeader}) => {
      if (!normalizedRangeHeader) {
        throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
      }
      return `The 'unit' portion of the Range header must be set to 'bytes'. The Range header provided was "${normalizedRangeHeader}"`;
    },
    "single-range-only": ({normalizedRangeHeader}) => {
      if (!normalizedRangeHeader) {
        throw new Error(`Unexpected input to 'single-range-only' error.`);
      }
      return `Multiple ranges are not supported. Please use a  single start value, and optional end value. The Range header provided was "${normalizedRangeHeader}"`;
    },
    "invalid-range-values": ({normalizedRangeHeader}) => {
      if (!normalizedRangeHeader) {
        throw new Error(`Unexpected input to 'invalid-range-values' error.`);
      }
      return `The Range header is missing both start and end values. At least one of those values is needed. The Range header provided was "${normalizedRangeHeader}"`;
    },
    "no-range-header": () => {
      return `No Range header was found in the Request provided.`;
    },
    "range-not-satisfiable": ({size, start, end}) => {
      return `The start (${start}) and end (${end}) values in the Range are not satisfiable by the cached response, which is ${size} bytes.`;
    },
    "attempt-to-cache-non-get-request": ({url, method}) => {
      return `Unable to cache '${url}' because it is a '${method}' request and only 'GET' requests can be cached.`;
    },
    "cache-put-with-no-response": ({url}) => {
      return `There was an attempt to cache '${url}' but the response was not defined.`;
    },
    "no-response": ({url, error}) => {
      let message = `The strategy could not generate a response for '${url}'.`;
      if (error) {
        message += ` The underlying error is ${error}.`;
      }
      return message;
    },
    "bad-precaching-response": ({url, status}) => {
      return `The precaching request for '${url}' failed` + (status ? ` with an HTTP status of ${status}.` : `.`);
    },
    "non-precached-url": ({url}) => {
      return `createHandlerBoundToURL('${url}') was called, but that URL is not precached. Please pass in a URL that is precached instead.`;
    },
    "add-to-cache-list-conflicting-integrities": ({url}) => {
      return `Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${url} with different integrity values. Please remove one of them.`;
    },
    "missing-precache-entry": ({cacheName, url}) => {
      return `Unable to find a precached response in ${cacheName} for ${url}.`;
    },
    "cross-origin-copy-response": ({origin}) => {
      return `workbox-core.copyResponse() can only be used with same-origin responses. It was passed a response with origin ${origin}.`;
    }
  };

  // node_modules/workbox-core/models/messages/messageGenerator.js
  var generatorFunction = (code, details = {}) => {
    const message = messages[code];
    if (!message) {
      throw new Error(`Unable to find message for code '${code}'.`);
    }
    return message(details);
  };
  var messageGenerator = false ? fallback : generatorFunction;

  // node_modules/workbox-core/_private/WorkboxError.js
  var WorkboxError = class extends Error {
    constructor(errorCode, details) {
      const message = messageGenerator(errorCode, details);
      super(message);
      this.name = errorCode;
      this.details = details;
    }
  };

  // node_modules/workbox-core/_private/assert.js
  var isArray = (value, details) => {
    if (!Array.isArray(value)) {
      throw new WorkboxError("not-an-array", details);
    }
  };
  var hasMethod = (object, expectedMethod, details) => {
    const type = typeof object[expectedMethod];
    if (type !== "function") {
      details["expectedMethod"] = expectedMethod;
      throw new WorkboxError("missing-a-method", details);
    }
  };
  var isType = (object, expectedType, details) => {
    if (typeof object !== expectedType) {
      details["expectedType"] = expectedType;
      throw new WorkboxError("incorrect-type", details);
    }
  };
  var isInstance = (object, expectedClass, details) => {
    if (!(object instanceof expectedClass)) {
      details["expectedClass"] = expectedClass;
      throw new WorkboxError("incorrect-class", details);
    }
  };
  var isOneOf = (value, validValues, details) => {
    if (!validValues.includes(value)) {
      details["validValueDescription"] = `Valid values are ${JSON.stringify(validValues)}.`;
      throw new WorkboxError("invalid-value", details);
    }
  };
  var isArrayOfClass = (value, expectedClass, details) => {
    const error = new WorkboxError("not-array-of-class", details);
    if (!Array.isArray(value)) {
      throw error;
    }
    for (const item of value) {
      if (!(item instanceof expectedClass)) {
        throw error;
      }
    }
  };
  var finalAssertExports = false ? null : {
    hasMethod,
    isArray,
    isInstance,
    isOneOf,
    isType,
    isArrayOfClass
  };

  // node_modules/workbox-core/_private/logger.js
  var logger = false ? null : (() => {
    if (!("__WB_DISABLE_DEV_LOGS" in self)) {
      self.__WB_DISABLE_DEV_LOGS = false;
    }
    let inGroup = false;
    const methodToColorMap = {
      debug: `#7f8c8d`,
      log: `#2ecc71`,
      warn: `#f39c12`,
      error: `#c0392b`,
      groupCollapsed: `#3498db`,
      groupEnd: null
    };
    const print = function(method, args) {
      if (self.__WB_DISABLE_DEV_LOGS) {
        return;
      }
      if (method === "groupCollapsed") {
        if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
          console[method](...args);
          return;
        }
      }
      const styles = [
        `background: ${methodToColorMap[method]}`,
        `border-radius: 0.5em`,
        `color: white`,
        `font-weight: bold`,
        `padding: 2px 0.5em`
      ];
      const logPrefix = inGroup ? [] : ["%cworkbox", styles.join(";")];
      console[method](...logPrefix, ...args);
      if (method === "groupCollapsed") {
        inGroup = true;
      }
      if (method === "groupEnd") {
        inGroup = false;
      }
    };
    const api = {};
    const loggerMethods = Object.keys(methodToColorMap);
    for (const key of loggerMethods) {
      const method = key;
      api[method] = (...args) => {
        print(method, args);
      };
    }
    return api;
  })();

  // node_modules/workbox-core/_private/cacheNames.js
  var _cacheNameDetails = {
    googleAnalytics: "googleAnalytics",
    precache: "precache-v2",
    prefix: "workbox",
    runtime: "runtime",
    suffix: typeof registration !== "undefined" ? registration.scope : ""
  };
  var _createCacheName = (cacheName) => {
    return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix].filter((value) => value && value.length > 0).join("-");
  };
  var eachCacheNameDetail = (fn) => {
    for (const key of Object.keys(_cacheNameDetails)) {
      fn(key);
    }
  };
  var cacheNames = {
    updateDetails: (details) => {
      eachCacheNameDetail((key) => {
        if (typeof details[key] === "string") {
          _cacheNameDetails[key] = details[key];
        }
      });
    },
    getGoogleAnalyticsName: (userCacheName) => {
      return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
    },
    getPrecacheName: (userCacheName) => {
      return userCacheName || _createCacheName(_cacheNameDetails.precache);
    },
    getPrefix: () => {
      return _cacheNameDetails.prefix;
    },
    getRuntimeName: (userCacheName) => {
      return userCacheName || _createCacheName(_cacheNameDetails.runtime);
    },
    getSuffix: () => {
      return _cacheNameDetails.suffix;
    }
  };

  // node_modules/workbox-core/_private/getFriendlyURL.js
  var getFriendlyURL = (url) => {
    const urlObj = new URL(String(url), location.href);
    return urlObj.href.replace(new RegExp(`^${location.origin}`), "");
  };

  // node_modules/workbox-core/_private/cacheMatchIgnoreParams.js
  function stripParams(fullURL, ignoreParams) {
    const strippedURL = new URL(fullURL);
    for (const param of ignoreParams) {
      strippedURL.searchParams.delete(param);
    }
    return strippedURL.href;
  }
  async function cacheMatchIgnoreParams(cache, request, ignoreParams, matchOptions) {
    const strippedRequestURL = stripParams(request.url, ignoreParams);
    if (request.url === strippedRequestURL) {
      return cache.match(request, matchOptions);
    }
    const keysOptions = {...matchOptions, ignoreSearch: true};
    const cacheKeys = await cache.keys(request, keysOptions);
    for (const cacheKey of cacheKeys) {
      const strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);
      if (strippedRequestURL === strippedCacheKeyURL) {
        return cache.match(cacheKey, matchOptions);
      }
    }
    return;
  }

  // node_modules/workbox-core/_private/Deferred.js
  var Deferred = class {
    constructor() {
      this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    }
  };

  // node_modules/workbox-core/models/quotaErrorCallbacks.js
  var quotaErrorCallbacks = new Set();

  // node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js
  async function executeQuotaErrorCallbacks() {
    if (true) {
      logger.log(`About to run ${quotaErrorCallbacks.size} callbacks to clean up caches.`);
    }
    for (const callback of quotaErrorCallbacks) {
      await callback();
      if (true) {
        logger.log(callback, "is complete.");
      }
    }
    if (true) {
      logger.log("Finished running callbacks.");
    }
  }

  // node_modules/workbox-core/_private/timeout.js
  function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // node_modules/workbox-strategies/_version.js
  "use strict";
  try {
    self["workbox:strategies:6.1.2"] && _();
  } catch (e) {
  }

  // node_modules/workbox-strategies/StrategyHandler.js
  function toRequest(input) {
    return typeof input === "string" ? new Request(input) : input;
  }
  var StrategyHandler = class {
    constructor(strategy, options) {
      this._cacheKeys = {};
      if (true) {
        finalAssertExports.isInstance(options.event, ExtendableEvent, {
          moduleName: "workbox-strategies",
          className: "StrategyHandler",
          funcName: "constructor",
          paramName: "options.event"
        });
      }
      Object.assign(this, options);
      this.event = options.event;
      this._strategy = strategy;
      this._handlerDeferred = new Deferred();
      this._extendLifetimePromises = [];
      this._plugins = [...strategy.plugins];
      this._pluginStateMap = new Map();
      for (const plugin of this._plugins) {
        this._pluginStateMap.set(plugin, {});
      }
      this.event.waitUntil(this._handlerDeferred.promise);
    }
    async fetch(input) {
      const {event} = this;
      let request = toRequest(input);
      if (request.mode === "navigate" && event instanceof FetchEvent && event.preloadResponse) {
        const possiblePreloadResponse = await event.preloadResponse;
        if (possiblePreloadResponse) {
          if (true) {
            logger.log(`Using a preloaded navigation response for '${getFriendlyURL(request.url)}'`);
          }
          return possiblePreloadResponse;
        }
      }
      const originalRequest = this.hasCallback("fetchDidFail") ? request.clone() : null;
      try {
        for (const cb of this.iterateCallbacks("requestWillFetch")) {
          request = await cb({request: request.clone(), event});
        }
      } catch (err) {
        throw new WorkboxError("plugin-error-request-will-fetch", {
          thrownError: err
        });
      }
      const pluginFilteredRequest = request.clone();
      try {
        let fetchResponse;
        fetchResponse = await fetch(request, request.mode === "navigate" ? void 0 : this._strategy.fetchOptions);
        if (true) {
          logger.debug(`Network request for '${getFriendlyURL(request.url)}' returned a response with status '${fetchResponse.status}'.`);
        }
        for (const callback of this.iterateCallbacks("fetchDidSucceed")) {
          fetchResponse = await callback({
            event,
            request: pluginFilteredRequest,
            response: fetchResponse
          });
        }
        return fetchResponse;
      } catch (error) {
        if (true) {
          logger.log(`Network request for '${getFriendlyURL(request.url)}' threw an error.`, error);
        }
        if (originalRequest) {
          await this.runCallbacks("fetchDidFail", {
            error,
            event,
            originalRequest: originalRequest.clone(),
            request: pluginFilteredRequest.clone()
          });
        }
        throw error;
      }
    }
    async fetchAndCachePut(input) {
      const response = await this.fetch(input);
      const responseClone = response.clone();
      this.waitUntil(this.cachePut(input, responseClone));
      return response;
    }
    async cacheMatch(key) {
      const request = toRequest(key);
      let cachedResponse;
      const {cacheName, matchOptions} = this._strategy;
      const effectiveRequest = await this.getCacheKey(request, "read");
      const multiMatchOptions = {...matchOptions, ...{cacheName}};
      cachedResponse = await caches.match(effectiveRequest, multiMatchOptions);
      if (true) {
        if (cachedResponse) {
          logger.debug(`Found a cached response in '${cacheName}'.`);
        } else {
          logger.debug(`No cached response found in '${cacheName}'.`);
        }
      }
      for (const callback of this.iterateCallbacks("cachedResponseWillBeUsed")) {
        cachedResponse = await callback({
          cacheName,
          matchOptions,
          cachedResponse,
          request: effectiveRequest,
          event: this.event
        }) || void 0;
      }
      return cachedResponse;
    }
    async cachePut(key, response) {
      const request = toRequest(key);
      await timeout(0);
      const effectiveRequest = await this.getCacheKey(request, "write");
      if (true) {
        if (effectiveRequest.method && effectiveRequest.method !== "GET") {
          throw new WorkboxError("attempt-to-cache-non-get-request", {
            url: getFriendlyURL(effectiveRequest.url),
            method: effectiveRequest.method
          });
        }
      }
      if (!response) {
        if (true) {
          logger.error(`Cannot cache non-existent response for '${getFriendlyURL(effectiveRequest.url)}'.`);
        }
        throw new WorkboxError("cache-put-with-no-response", {
          url: getFriendlyURL(effectiveRequest.url)
        });
      }
      const responseToCache = await this._ensureResponseSafeToCache(response);
      if (!responseToCache) {
        if (true) {
          logger.debug(`Response '${getFriendlyURL(effectiveRequest.url)}' will not be cached.`, responseToCache);
        }
        return false;
      }
      const {cacheName, matchOptions} = this._strategy;
      const cache = await self.caches.open(cacheName);
      const hasCacheUpdateCallback = this.hasCallback("cacheDidUpdate");
      const oldResponse = hasCacheUpdateCallback ? await cacheMatchIgnoreParams(cache, effectiveRequest.clone(), ["__WB_REVISION__"], matchOptions) : null;
      if (true) {
        logger.debug(`Updating the '${cacheName}' cache with a new Response for ${getFriendlyURL(effectiveRequest.url)}.`);
      }
      try {
        await cache.put(effectiveRequest, hasCacheUpdateCallback ? responseToCache.clone() : responseToCache);
      } catch (error) {
        if (error.name === "QuotaExceededError") {
          await executeQuotaErrorCallbacks();
        }
        throw error;
      }
      for (const callback of this.iterateCallbacks("cacheDidUpdate")) {
        await callback({
          cacheName,
          oldResponse,
          newResponse: responseToCache.clone(),
          request: effectiveRequest,
          event: this.event
        });
      }
      return true;
    }
    async getCacheKey(request, mode) {
      if (!this._cacheKeys[mode]) {
        let effectiveRequest = request;
        for (const callback of this.iterateCallbacks("cacheKeyWillBeUsed")) {
          effectiveRequest = toRequest(await callback({
            mode,
            request: effectiveRequest,
            event: this.event,
            params: this.params
          }));
        }
        this._cacheKeys[mode] = effectiveRequest;
      }
      return this._cacheKeys[mode];
    }
    hasCallback(name2) {
      for (const plugin of this._strategy.plugins) {
        if (name2 in plugin) {
          return true;
        }
      }
      return false;
    }
    async runCallbacks(name2, param) {
      for (const callback of this.iterateCallbacks(name2)) {
        await callback(param);
      }
    }
    *iterateCallbacks(name2) {
      for (const plugin of this._strategy.plugins) {
        if (typeof plugin[name2] === "function") {
          const state = this._pluginStateMap.get(plugin);
          const statefulCallback = (param) => {
            const statefulParam = {...param, state};
            return plugin[name2](statefulParam);
          };
          yield statefulCallback;
        }
      }
    }
    waitUntil(promise) {
      this._extendLifetimePromises.push(promise);
      return promise;
    }
    async doneWaiting() {
      let promise;
      while (promise = this._extendLifetimePromises.shift()) {
        await promise;
      }
    }
    destroy() {
      this._handlerDeferred.resolve();
    }
    async _ensureResponseSafeToCache(response) {
      let responseToCache = response;
      let pluginsUsed = false;
      for (const callback of this.iterateCallbacks("cacheWillUpdate")) {
        responseToCache = await callback({
          request: this.request,
          response: responseToCache,
          event: this.event
        }) || void 0;
        pluginsUsed = true;
        if (!responseToCache) {
          break;
        }
      }
      if (!pluginsUsed) {
        if (responseToCache && responseToCache.status !== 200) {
          responseToCache = void 0;
        }
        if (true) {
          if (responseToCache) {
            if (responseToCache.status !== 200) {
              if (responseToCache.status === 0) {
                logger.warn(`The response for '${this.request.url}' is an opaque response. The caching strategy that you're using will not cache opaque responses by default.`);
              } else {
                logger.debug(`The response for '${this.request.url}' returned a status code of '${response.status}' and won't be cached as a result.`);
              }
            }
          }
        }
      }
      return responseToCache;
    }
  };

  // node_modules/workbox-strategies/Strategy.js
  var Strategy = class {
    constructor(options = {}) {
      this.cacheName = cacheNames.getRuntimeName(options.cacheName);
      this.plugins = options.plugins || [];
      this.fetchOptions = options.fetchOptions;
      this.matchOptions = options.matchOptions;
    }
    handle(options) {
      const [responseDone] = this.handleAll(options);
      return responseDone;
    }
    handleAll(options) {
      if (options instanceof FetchEvent) {
        options = {
          event: options,
          request: options.request
        };
      }
      const event = options.event;
      const request = typeof options.request === "string" ? new Request(options.request) : options.request;
      const params = "params" in options ? options.params : void 0;
      const handler = new StrategyHandler(this, {event, request, params});
      const responseDone = this._getResponse(handler, request, event);
      const handlerDone = this._awaitComplete(responseDone, handler, request, event);
      return [responseDone, handlerDone];
    }
    async _getResponse(handler, request, event) {
      await handler.runCallbacks("handlerWillStart", {event, request});
      let response = void 0;
      try {
        response = await this._handle(request, handler);
        if (!response || response.type === "error") {
          throw new WorkboxError("no-response", {url: request.url});
        }
      } catch (error) {
        for (const callback of handler.iterateCallbacks("handlerDidError")) {
          response = await callback({error, event, request});
          if (response) {
            break;
          }
        }
        if (!response) {
          throw error;
        } else if (true) {
          logger.log(`While responding to '${getFriendlyURL(request.url)}', an ${error} error occurred. Using a fallback response provided by a handlerDidError plugin.`);
        }
      }
      for (const callback of handler.iterateCallbacks("handlerWillRespond")) {
        response = await callback({event, request, response});
      }
      return response;
    }
    async _awaitComplete(responseDone, handler, request, event) {
      let response;
      let error;
      try {
        response = await responseDone;
      } catch (error2) {
      }
      try {
        await handler.runCallbacks("handlerDidRespond", {
          event,
          request,
          response
        });
        await handler.doneWaiting();
      } catch (waitUntilError) {
        error = waitUntilError;
      }
      await handler.runCallbacks("handlerDidComplete", {
        event,
        request,
        response,
        error
      });
      handler.destroy();
      if (error) {
        throw error;
      }
    }
  };

  // node_modules/workbox-strategies/utils/messages.js
  var messages2 = {
    strategyStart: (strategyName, request) => `Using ${strategyName} to respond to '${getFriendlyURL(request.url)}'`,
    printFinalResponse: (response) => {
      if (response) {
        logger.groupCollapsed(`View the final response here.`);
        logger.log(response || "[No response returned]");
        logger.groupEnd();
      }
    }
  };

  // node_modules/workbox-strategies/CacheFirst.js
  var CacheFirst = class extends Strategy {
    async _handle(request, handler) {
      const logs = [];
      if (true) {
        finalAssertExports.isInstance(request, Request, {
          moduleName: "workbox-strategies",
          className: this.constructor.name,
          funcName: "makeRequest",
          paramName: "request"
        });
      }
      let response = await handler.cacheMatch(request);
      let error;
      if (!response) {
        if (true) {
          logs.push(`No response found in the '${this.cacheName}' cache. Will respond with a network request.`);
        }
        try {
          response = await handler.fetchAndCachePut(request);
        } catch (err) {
          error = err;
        }
        if (true) {
          if (response) {
            logs.push(`Got response from network.`);
          } else {
            logs.push(`Unable to get a response from the network.`);
          }
        }
      } else {
        if (true) {
          logs.push(`Found a cached response in the '${this.cacheName}' cache.`);
        }
      }
      if (true) {
        logger.groupCollapsed(messages2.strategyStart(this.constructor.name, request));
        for (const log of logs) {
          logger.log(log);
        }
        messages2.printFinalResponse(response);
        logger.groupEnd();
      }
      if (!response) {
        throw new WorkboxError("no-response", {url: request.url, error});
      }
      return response;
    }
  };

  // node_modules/workbox-strategies/plugins/cacheOkAndOpaquePlugin.js
  var cacheOkAndOpaquePlugin = {
    cacheWillUpdate: async ({response}) => {
      if (response.status === 200 || response.status === 0) {
        return response;
      }
      return null;
    }
  };

  // node_modules/workbox-strategies/NetworkFirst.js
  var NetworkFirst = class extends Strategy {
    constructor(options = {}) {
      super(options);
      if (!this.plugins.some((p) => "cacheWillUpdate" in p)) {
        this.plugins.unshift(cacheOkAndOpaquePlugin);
      }
      this._networkTimeoutSeconds = options.networkTimeoutSeconds || 0;
      if (true) {
        if (this._networkTimeoutSeconds) {
          finalAssertExports.isType(this._networkTimeoutSeconds, "number", {
            moduleName: "workbox-strategies",
            className: this.constructor.name,
            funcName: "constructor",
            paramName: "networkTimeoutSeconds"
          });
        }
      }
    }
    async _handle(request, handler) {
      const logs = [];
      if (true) {
        finalAssertExports.isInstance(request, Request, {
          moduleName: "workbox-strategies",
          className: this.constructor.name,
          funcName: "handle",
          paramName: "makeRequest"
        });
      }
      const promises = [];
      let timeoutId;
      if (this._networkTimeoutSeconds) {
        const {id, promise} = this._getTimeoutPromise({request, logs, handler});
        timeoutId = id;
        promises.push(promise);
      }
      const networkPromise = this._getNetworkPromise({timeoutId, request, logs, handler});
      promises.push(networkPromise);
      const response = await handler.waitUntil((async () => {
        return await handler.waitUntil(Promise.race(promises)) || await networkPromise;
      })());
      if (true) {
        logger.groupCollapsed(messages2.strategyStart(this.constructor.name, request));
        for (const log of logs) {
          logger.log(log);
        }
        messages2.printFinalResponse(response);
        logger.groupEnd();
      }
      if (!response) {
        throw new WorkboxError("no-response", {url: request.url});
      }
      return response;
    }
    _getTimeoutPromise({request, logs, handler}) {
      let timeoutId;
      const timeoutPromise = new Promise((resolve) => {
        const onNetworkTimeout = async () => {
          if (true) {
            logs.push(`Timing out the network response at ${this._networkTimeoutSeconds} seconds.`);
          }
          resolve(await handler.cacheMatch(request));
        };
        timeoutId = setTimeout(onNetworkTimeout, this._networkTimeoutSeconds * 1e3);
      });
      return {
        promise: timeoutPromise,
        id: timeoutId
      };
    }
    async _getNetworkPromise({timeoutId, request, logs, handler}) {
      let error;
      let response;
      try {
        response = await handler.fetchAndCachePut(request);
      } catch (fetchError) {
        error = fetchError;
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (true) {
        if (response) {
          logs.push(`Got response from network.`);
        } else {
          logs.push(`Unable to get a response from the network. Will respond with a cached response.`);
        }
      }
      if (error || !response) {
        response = await handler.cacheMatch(request);
        if (true) {
          if (response) {
            logs.push(`Found a cached response in the '${this.cacheName}' cache.`);
          } else {
            logs.push(`No response found in the '${this.cacheName}' cache.`);
          }
        }
      }
      return response;
    }
  };

  // node_modules/workbox-strategies/StaleWhileRevalidate.js
  var StaleWhileRevalidate = class extends Strategy {
    constructor(options) {
      super(options);
      if (!this.plugins.some((p) => "cacheWillUpdate" in p)) {
        this.plugins.unshift(cacheOkAndOpaquePlugin);
      }
    }
    async _handle(request, handler) {
      const logs = [];
      if (true) {
        finalAssertExports.isInstance(request, Request, {
          moduleName: "workbox-strategies",
          className: this.constructor.name,
          funcName: "handle",
          paramName: "request"
        });
      }
      const fetchAndCachePromise = handler.fetchAndCachePut(request).catch(() => {
      });
      let response = await handler.cacheMatch(request);
      let error;
      if (response) {
        if (true) {
          logs.push(`Found a cached response in the '${this.cacheName}' cache. Will update with the network response in the background.`);
        }
      } else {
        if (true) {
          logs.push(`No response found in the '${this.cacheName}' cache. Will wait for the network response.`);
        }
        try {
          response = await fetchAndCachePromise;
        } catch (err) {
          error = err;
        }
      }
      if (true) {
        logger.groupCollapsed(messages2.strategyStart(this.constructor.name, request));
        for (const log of logs) {
          logger.log(log);
        }
        messages2.printFinalResponse(response);
        logger.groupEnd();
      }
      if (!response) {
        throw new WorkboxError("no-response", {url: request.url, error});
      }
      return response;
    }
  };

  // node_modules/workbox-routing/_version.js
  "use strict";
  try {
    self["workbox:routing:6.1.2"] && _();
  } catch (e) {
  }

  // node_modules/workbox-routing/utils/constants.js
  var defaultMethod = "GET";
  var validMethods = [
    "DELETE",
    "GET",
    "HEAD",
    "PATCH",
    "POST",
    "PUT"
  ];

  // node_modules/workbox-routing/utils/normalizeHandler.js
  var normalizeHandler = (handler) => {
    if (handler && typeof handler === "object") {
      if (true) {
        finalAssertExports.hasMethod(handler, "handle", {
          moduleName: "workbox-routing",
          className: "Route",
          funcName: "constructor",
          paramName: "handler"
        });
      }
      return handler;
    } else {
      if (true) {
        finalAssertExports.isType(handler, "function", {
          moduleName: "workbox-routing",
          className: "Route",
          funcName: "constructor",
          paramName: "handler"
        });
      }
      return {handle: handler};
    }
  };

  // node_modules/workbox-routing/Route.js
  var Route = class {
    constructor(match, handler, method = defaultMethod) {
      if (true) {
        finalAssertExports.isType(match, "function", {
          moduleName: "workbox-routing",
          className: "Route",
          funcName: "constructor",
          paramName: "match"
        });
        if (method) {
          finalAssertExports.isOneOf(method, validMethods, {paramName: "method"});
        }
      }
      this.handler = normalizeHandler(handler);
      this.match = match;
      this.method = method;
    }
    setCatchHandler(handler) {
      this.catchHandler = normalizeHandler(handler);
    }
  };

  // node_modules/workbox-routing/RegExpRoute.js
  var RegExpRoute = class extends Route {
    constructor(regExp, handler, method) {
      if (true) {
        finalAssertExports.isInstance(regExp, RegExp, {
          moduleName: "workbox-routing",
          className: "RegExpRoute",
          funcName: "constructor",
          paramName: "pattern"
        });
      }
      const match = ({url}) => {
        const result = regExp.exec(url.href);
        if (!result) {
          return;
        }
        if (url.origin !== location.origin && result.index !== 0) {
          if (true) {
            logger.debug(`The regular expression '${regExp}' only partially matched against the cross-origin URL '${url}'. RegExpRoute's will only handle cross-origin requests if they match the entire URL.`);
          }
          return;
        }
        return result.slice(1);
      };
      super(match, handler, method);
    }
  };

  // node_modules/workbox-routing/Router.js
  var Router = class {
    constructor() {
      this._routes = new Map();
      this._defaultHandlerMap = new Map();
    }
    get routes() {
      return this._routes;
    }
    addFetchListener() {
      self.addEventListener("fetch", (event) => {
        const {request} = event;
        const responsePromise = this.handleRequest({request, event});
        if (responsePromise) {
          event.respondWith(responsePromise);
        }
      });
    }
    addCacheListener() {
      self.addEventListener("message", (event) => {
        if (event.data && event.data.type === "CACHE_URLS") {
          const {payload} = event.data;
          if (true) {
            logger.debug(`Caching URLs from the window`, payload.urlsToCache);
          }
          const requestPromises = Promise.all(payload.urlsToCache.map((entry) => {
            if (typeof entry === "string") {
              entry = [entry];
            }
            const request = new Request(...entry);
            return this.handleRequest({request, event});
          }));
          event.waitUntil(requestPromises);
          if (event.ports && event.ports[0]) {
            requestPromises.then(() => event.ports[0].postMessage(true));
          }
        }
      });
    }
    handleRequest({request, event}) {
      if (true) {
        finalAssertExports.isInstance(request, Request, {
          moduleName: "workbox-routing",
          className: "Router",
          funcName: "handleRequest",
          paramName: "options.request"
        });
      }
      const url = new URL(request.url, location.href);
      if (!url.protocol.startsWith("http")) {
        if (true) {
          logger.debug(`Workbox Router only supports URLs that start with 'http'.`);
        }
        return;
      }
      const sameOrigin = url.origin === location.origin;
      const {params, route} = this.findMatchingRoute({
        event,
        request,
        sameOrigin,
        url
      });
      let handler = route && route.handler;
      const debugMessages = [];
      if (true) {
        if (handler) {
          debugMessages.push([
            `Found a route to handle this request:`,
            route
          ]);
          if (params) {
            debugMessages.push([
              `Passing the following params to the route's handler:`,
              params
            ]);
          }
        }
      }
      const method = request.method;
      if (!handler && this._defaultHandlerMap.has(method)) {
        if (true) {
          debugMessages.push(`Failed to find a matching route. Falling back to the default handler for ${method}.`);
        }
        handler = this._defaultHandlerMap.get(method);
      }
      if (!handler) {
        if (true) {
          logger.debug(`No route found for: ${getFriendlyURL(url)}`);
        }
        return;
      }
      if (true) {
        logger.groupCollapsed(`Router is responding to: ${getFriendlyURL(url)}`);
        debugMessages.forEach((msg) => {
          if (Array.isArray(msg)) {
            logger.log(...msg);
          } else {
            logger.log(msg);
          }
        });
        logger.groupEnd();
      }
      let responsePromise;
      try {
        responsePromise = handler.handle({url, request, event, params});
      } catch (err) {
        responsePromise = Promise.reject(err);
      }
      const catchHandler = route && route.catchHandler;
      if (responsePromise instanceof Promise && (this._catchHandler || catchHandler)) {
        responsePromise = responsePromise.catch(async (err) => {
          if (catchHandler) {
            if (true) {
              logger.groupCollapsed(`Error thrown when responding to:  ${getFriendlyURL(url)}. Falling back to route's Catch Handler.`);
              logger.error(`Error thrown by:`, route);
              logger.error(err);
              logger.groupEnd();
            }
            try {
              return await catchHandler.handle({url, request, event, params});
            } catch (catchErr) {
              err = catchErr;
            }
          }
          if (this._catchHandler) {
            if (true) {
              logger.groupCollapsed(`Error thrown when responding to:  ${getFriendlyURL(url)}. Falling back to global Catch Handler.`);
              logger.error(`Error thrown by:`, route);
              logger.error(err);
              logger.groupEnd();
            }
            return this._catchHandler.handle({url, request, event});
          }
          throw err;
        });
      }
      return responsePromise;
    }
    findMatchingRoute({url, sameOrigin, request, event}) {
      const routes = this._routes.get(request.method) || [];
      for (const route of routes) {
        let params;
        const matchResult = route.match({url, sameOrigin, request, event});
        if (matchResult) {
          if (true) {
            if (matchResult instanceof Promise) {
              logger.warn(`While routing ${getFriendlyURL(url)}, an async matchCallback function was used. Please convert the following route to use a synchronous matchCallback function:`, route);
            }
          }
          params = matchResult;
          if (Array.isArray(matchResult) && matchResult.length === 0) {
            params = void 0;
          } else if (matchResult.constructor === Object && Object.keys(matchResult).length === 0) {
            params = void 0;
          } else if (typeof matchResult === "boolean") {
            params = void 0;
          }
          return {route, params};
        }
      }
      return {};
    }
    setDefaultHandler(handler, method = defaultMethod) {
      this._defaultHandlerMap.set(method, normalizeHandler(handler));
    }
    setCatchHandler(handler) {
      this._catchHandler = normalizeHandler(handler);
    }
    registerRoute(route) {
      if (true) {
        finalAssertExports.isType(route, "object", {
          moduleName: "workbox-routing",
          className: "Router",
          funcName: "registerRoute",
          paramName: "route"
        });
        finalAssertExports.hasMethod(route, "match", {
          moduleName: "workbox-routing",
          className: "Router",
          funcName: "registerRoute",
          paramName: "route"
        });
        finalAssertExports.isType(route.handler, "object", {
          moduleName: "workbox-routing",
          className: "Router",
          funcName: "registerRoute",
          paramName: "route"
        });
        finalAssertExports.hasMethod(route.handler, "handle", {
          moduleName: "workbox-routing",
          className: "Router",
          funcName: "registerRoute",
          paramName: "route.handler"
        });
        finalAssertExports.isType(route.method, "string", {
          moduleName: "workbox-routing",
          className: "Router",
          funcName: "registerRoute",
          paramName: "route.method"
        });
      }
      if (!this._routes.has(route.method)) {
        this._routes.set(route.method, []);
      }
      this._routes.get(route.method).push(route);
    }
    unregisterRoute(route) {
      if (!this._routes.has(route.method)) {
        throw new WorkboxError("unregister-route-but-not-found-with-method", {
          method: route.method
        });
      }
      const routeIndex = this._routes.get(route.method).indexOf(route);
      if (routeIndex > -1) {
        this._routes.get(route.method).splice(routeIndex, 1);
      } else {
        throw new WorkboxError("unregister-route-route-not-registered");
      }
    }
  };

  // node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js
  var defaultRouter;
  var getOrCreateDefaultRouter = () => {
    if (!defaultRouter) {
      defaultRouter = new Router();
      defaultRouter.addFetchListener();
      defaultRouter.addCacheListener();
    }
    return defaultRouter;
  };

  // node_modules/workbox-routing/registerRoute.js
  function registerRoute(capture, handler, method) {
    let route;
    if (typeof capture === "string") {
      const captureUrl = new URL(capture, location.href);
      if (true) {
        if (!(capture.startsWith("/") || capture.startsWith("http"))) {
          throw new WorkboxError("invalid-string", {
            moduleName: "workbox-routing",
            funcName: "registerRoute",
            paramName: "capture"
          });
        }
        const valueToCheck = capture.startsWith("http") ? captureUrl.pathname : capture;
        const wildcards = "[*:?+]";
        if (new RegExp(`${wildcards}`).exec(valueToCheck)) {
          logger.debug(`The '$capture' parameter contains an Express-style wildcard character (${wildcards}). Strings are now always interpreted as exact matches; use a RegExp for partial or wildcard matches.`);
        }
      }
      const matchCallback = ({url}) => {
        if (true) {
          if (url.pathname === captureUrl.pathname && url.origin !== captureUrl.origin) {
            logger.debug(`${capture} only partially matches the cross-origin URL ${url}. This route will only handle cross-origin requests if they match the entire URL.`);
          }
        }
        return url.href === captureUrl.href;
      };
      route = new Route(matchCallback, handler, method);
    } else if (capture instanceof RegExp) {
      route = new RegExpRoute(capture, handler, method);
    } else if (typeof capture === "function") {
      route = new Route(capture, handler, method);
    } else if (capture instanceof Route) {
      route = capture;
    } else {
      throw new WorkboxError("unsupported-route-type", {
        moduleName: "workbox-routing",
        funcName: "registerRoute",
        paramName: "capture"
      });
    }
    const defaultRouter2 = getOrCreateDefaultRouter();
    defaultRouter2.registerRoute(route);
    return route;
  }

  // node_modules/workbox-routing/setCatchHandler.js
  function setCatchHandler(handler) {
    const defaultRouter2 = getOrCreateDefaultRouter();
    defaultRouter2.setCatchHandler(handler);
  }

  // node_modules/workbox-routing/setDefaultHandler.js
  function setDefaultHandler(handler) {
    const defaultRouter2 = getOrCreateDefaultRouter();
    defaultRouter2.setDefaultHandler(handler);
  }

  // node_modules/workbox-core/_private/dontWaitFor.js
  function dontWaitFor(promise) {
    promise.then(() => {
    });
  }

  // node_modules/workbox-core/_private/DBWrapper.js
  var DBWrapper = class {
    constructor(name2, version, {onupgradeneeded, onversionchange} = {}) {
      this._db = null;
      this._name = name2;
      this._version = version;
      this._onupgradeneeded = onupgradeneeded;
      this._onversionchange = onversionchange || (() => this.close());
    }
    get db() {
      return this._db;
    }
    async open() {
      if (this._db)
        return;
      this._db = await new Promise((resolve, reject) => {
        let openRequestTimedOut = false;
        setTimeout(() => {
          openRequestTimedOut = true;
          reject(new Error("The open request was blocked and timed out"));
        }, this.OPEN_TIMEOUT);
        const openRequest = indexedDB.open(this._name, this._version);
        openRequest.onerror = () => reject(openRequest.error);
        openRequest.onupgradeneeded = (evt) => {
          if (openRequestTimedOut) {
            openRequest.transaction.abort();
            openRequest.result.close();
          } else if (typeof this._onupgradeneeded === "function") {
            this._onupgradeneeded(evt);
          }
        };
        openRequest.onsuccess = () => {
          const db = openRequest.result;
          if (openRequestTimedOut) {
            db.close();
          } else {
            db.onversionchange = this._onversionchange.bind(this);
            resolve(db);
          }
        };
      });
      return this;
    }
    async getKey(storeName, query) {
      return (await this.getAllKeys(storeName, query, 1))[0];
    }
    async getAll(storeName, query, count) {
      return await this.getAllMatching(storeName, {query, count});
    }
    async getAllKeys(storeName, query, count) {
      const entries = await this.getAllMatching(storeName, {query, count, includeKeys: true});
      return entries.map((entry) => entry.key);
    }
    async getAllMatching(storeName, {
      index,
      query = null,
      direction = "next",
      count,
      includeKeys = false
    } = {}) {
      return await this.transaction([storeName], "readonly", (txn, done) => {
        const store = txn.objectStore(storeName);
        const target = index ? store.index(index) : store;
        const results = [];
        const request = target.openCursor(query, direction);
        request.onsuccess = () => {
          const cursor = request.result;
          if (cursor) {
            results.push(includeKeys ? cursor : cursor.value);
            if (count && results.length >= count) {
              done(results);
            } else {
              cursor.continue();
            }
          } else {
            done(results);
          }
        };
      });
    }
    async transaction(storeNames, type, callback) {
      await this.open();
      return await new Promise((resolve, reject) => {
        const txn = this._db.transaction(storeNames, type);
        txn.onabort = () => reject(txn.error);
        txn.oncomplete = () => resolve();
        callback(txn, (value) => resolve(value));
      });
    }
    async _call(method, storeName, type, ...args) {
      const callback = (txn, done) => {
        const objStore = txn.objectStore(storeName);
        const request = objStore[method].apply(objStore, args);
        request.onsuccess = () => done(request.result);
      };
      return await this.transaction([storeName], type, callback);
    }
    close() {
      if (this._db) {
        this._db.close();
        this._db = null;
      }
    }
  };
  DBWrapper.prototype.OPEN_TIMEOUT = 2e3;
  var methodsToWrap = {
    readonly: ["get", "count", "getKey", "getAll", "getAllKeys"],
    readwrite: ["add", "put", "clear", "delete"]
  };
  for (const [mode, methods] of Object.entries(methodsToWrap)) {
    for (const method of methods) {
      if (method in IDBObjectStore.prototype) {
        DBWrapper.prototype[method] = async function(storeName, ...args) {
          return await this._call(method, storeName, mode, ...args);
        };
      }
    }
  }

  // node_modules/workbox-core/_private/deleteDatabase.js
  var deleteDatabase = async (name2) => {
    await new Promise((resolve, reject) => {
      const request = indexedDB.deleteDatabase(name2);
      request.onerror = () => {
        reject(request.error);
      };
      request.onblocked = () => {
        reject(new Error("Delete blocked"));
      };
      request.onsuccess = () => {
        resolve();
      };
    });
  };

  // node_modules/workbox-expiration/_version.js
  "use strict";
  try {
    self["workbox:expiration:6.1.2"] && _();
  } catch (e) {
  }

  // node_modules/workbox-expiration/models/CacheTimestampsModel.js
  var DB_NAME = "workbox-expiration";
  var OBJECT_STORE_NAME = "cache-entries";
  var normalizeURL = (unNormalizedUrl) => {
    const url = new URL(unNormalizedUrl, location.href);
    url.hash = "";
    return url.href;
  };
  var CacheTimestampsModel = class {
    constructor(cacheName) {
      this._cacheName = cacheName;
      this._db = new DBWrapper(DB_NAME, 1, {
        onupgradeneeded: (event) => this._handleUpgrade(event)
      });
    }
    _handleUpgrade(event) {
      const db = event.target.result;
      const objStore = db.createObjectStore(OBJECT_STORE_NAME, {keyPath: "id"});
      objStore.createIndex("cacheName", "cacheName", {unique: false});
      objStore.createIndex("timestamp", "timestamp", {unique: false});
      deleteDatabase(this._cacheName);
    }
    async setTimestamp(url, timestamp) {
      url = normalizeURL(url);
      const entry = {
        url,
        timestamp,
        cacheName: this._cacheName,
        id: this._getId(url)
      };
      await this._db.put(OBJECT_STORE_NAME, entry);
    }
    async getTimestamp(url) {
      const entry = await this._db.get(OBJECT_STORE_NAME, this._getId(url));
      return entry.timestamp;
    }
    async expireEntries(minTimestamp, maxCount) {
      const entriesToDelete = await this._db.transaction(OBJECT_STORE_NAME, "readwrite", (txn, done) => {
        const store = txn.objectStore(OBJECT_STORE_NAME);
        const request = store.index("timestamp").openCursor(null, "prev");
        const entriesToDelete2 = [];
        let entriesNotDeletedCount = 0;
        request.onsuccess = () => {
          const cursor = request.result;
          if (cursor) {
            const result = cursor.value;
            if (result.cacheName === this._cacheName) {
              if (minTimestamp && result.timestamp < minTimestamp || maxCount && entriesNotDeletedCount >= maxCount) {
                entriesToDelete2.push(cursor.value);
              } else {
                entriesNotDeletedCount++;
              }
            }
            cursor.continue();
          } else {
            done(entriesToDelete2);
          }
        };
      });
      const urlsDeleted = [];
      for (const entry of entriesToDelete) {
        await this._db.delete(OBJECT_STORE_NAME, entry.id);
        urlsDeleted.push(entry.url);
      }
      return urlsDeleted;
    }
    _getId(url) {
      return this._cacheName + "|" + normalizeURL(url);
    }
  };

  // node_modules/workbox-expiration/CacheExpiration.js
  var CacheExpiration = class {
    constructor(cacheName, config = {}) {
      this._isRunning = false;
      this._rerunRequested = false;
      if (true) {
        finalAssertExports.isType(cacheName, "string", {
          moduleName: "workbox-expiration",
          className: "CacheExpiration",
          funcName: "constructor",
          paramName: "cacheName"
        });
        if (!(config.maxEntries || config.maxAgeSeconds)) {
          throw new WorkboxError("max-entries-or-age-required", {
            moduleName: "workbox-expiration",
            className: "CacheExpiration",
            funcName: "constructor"
          });
        }
        if (config.maxEntries) {
          finalAssertExports.isType(config.maxEntries, "number", {
            moduleName: "workbox-expiration",
            className: "CacheExpiration",
            funcName: "constructor",
            paramName: "config.maxEntries"
          });
        }
        if (config.maxAgeSeconds) {
          finalAssertExports.isType(config.maxAgeSeconds, "number", {
            moduleName: "workbox-expiration",
            className: "CacheExpiration",
            funcName: "constructor",
            paramName: "config.maxAgeSeconds"
          });
        }
      }
      this._maxEntries = config.maxEntries;
      this._maxAgeSeconds = config.maxAgeSeconds;
      this._matchOptions = config.matchOptions;
      this._cacheName = cacheName;
      this._timestampModel = new CacheTimestampsModel(cacheName);
    }
    async expireEntries() {
      if (this._isRunning) {
        this._rerunRequested = true;
        return;
      }
      this._isRunning = true;
      const minTimestamp = this._maxAgeSeconds ? Date.now() - this._maxAgeSeconds * 1e3 : 0;
      const urlsExpired = await this._timestampModel.expireEntries(minTimestamp, this._maxEntries);
      const cache = await self.caches.open(this._cacheName);
      for (const url of urlsExpired) {
        await cache.delete(url, this._matchOptions);
      }
      if (true) {
        if (urlsExpired.length > 0) {
          logger.groupCollapsed(`Expired ${urlsExpired.length} ${urlsExpired.length === 1 ? "entry" : "entries"} and removed ${urlsExpired.length === 1 ? "it" : "them"} from the '${this._cacheName}' cache.`);
          logger.log(`Expired the following ${urlsExpired.length === 1 ? "URL" : "URLs"}:`);
          urlsExpired.forEach((url) => logger.log(`    ${url}`));
          logger.groupEnd();
        } else {
          logger.debug(`Cache expiration ran and found no entries to remove.`);
        }
      }
      this._isRunning = false;
      if (this._rerunRequested) {
        this._rerunRequested = false;
        dontWaitFor(this.expireEntries());
      }
    }
    async updateTimestamp(url) {
      if (true) {
        finalAssertExports.isType(url, "string", {
          moduleName: "workbox-expiration",
          className: "CacheExpiration",
          funcName: "updateTimestamp",
          paramName: "url"
        });
      }
      await this._timestampModel.setTimestamp(url, Date.now());
    }
    async isURLExpired(url) {
      if (!this._maxAgeSeconds) {
        if (true) {
          throw new WorkboxError(`expired-test-without-max-age`, {
            methodName: "isURLExpired",
            paramName: "maxAgeSeconds"
          });
        }
        return false;
      } else {
        const timestamp = await this._timestampModel.getTimestamp(url);
        const expireOlderThan = Date.now() - this._maxAgeSeconds * 1e3;
        return timestamp < expireOlderThan;
      }
    }
    async delete() {
      this._rerunRequested = false;
      await this._timestampModel.expireEntries(Infinity);
    }
  };

  // node_modules/workbox-core/registerQuotaErrorCallback.js
  function registerQuotaErrorCallback(callback) {
    if (true) {
      finalAssertExports.isType(callback, "function", {
        moduleName: "workbox-core",
        funcName: "register",
        paramName: "callback"
      });
    }
    quotaErrorCallbacks.add(callback);
    if (true) {
      logger.log("Registered a callback to respond to quota errors.", callback);
    }
  }

  // node_modules/workbox-expiration/ExpirationPlugin.js
  var ExpirationPlugin = class {
    constructor(config = {}) {
      this.cachedResponseWillBeUsed = async ({event, request, cacheName, cachedResponse}) => {
        if (!cachedResponse) {
          return null;
        }
        const isFresh = this._isResponseDateFresh(cachedResponse);
        const cacheExpiration = this._getCacheExpiration(cacheName);
        dontWaitFor(cacheExpiration.expireEntries());
        const updateTimestampDone = cacheExpiration.updateTimestamp(request.url);
        if (event) {
          try {
            event.waitUntil(updateTimestampDone);
          } catch (error) {
            if (true) {
              if ("request" in event) {
                logger.warn(`Unable to ensure service worker stays alive when updating cache entry for '${getFriendlyURL(event.request.url)}'.`);
              }
            }
          }
        }
        return isFresh ? cachedResponse : null;
      };
      this.cacheDidUpdate = async ({cacheName, request}) => {
        if (true) {
          finalAssertExports.isType(cacheName, "string", {
            moduleName: "workbox-expiration",
            className: "Plugin",
            funcName: "cacheDidUpdate",
            paramName: "cacheName"
          });
          finalAssertExports.isInstance(request, Request, {
            moduleName: "workbox-expiration",
            className: "Plugin",
            funcName: "cacheDidUpdate",
            paramName: "request"
          });
        }
        const cacheExpiration = this._getCacheExpiration(cacheName);
        await cacheExpiration.updateTimestamp(request.url);
        await cacheExpiration.expireEntries();
      };
      if (true) {
        if (!(config.maxEntries || config.maxAgeSeconds)) {
          throw new WorkboxError("max-entries-or-age-required", {
            moduleName: "workbox-expiration",
            className: "Plugin",
            funcName: "constructor"
          });
        }
        if (config.maxEntries) {
          finalAssertExports.isType(config.maxEntries, "number", {
            moduleName: "workbox-expiration",
            className: "Plugin",
            funcName: "constructor",
            paramName: "config.maxEntries"
          });
        }
        if (config.maxAgeSeconds) {
          finalAssertExports.isType(config.maxAgeSeconds, "number", {
            moduleName: "workbox-expiration",
            className: "Plugin",
            funcName: "constructor",
            paramName: "config.maxAgeSeconds"
          });
        }
      }
      this._config = config;
      this._maxAgeSeconds = config.maxAgeSeconds;
      this._cacheExpirations = new Map();
      if (config.purgeOnQuotaError) {
        registerQuotaErrorCallback(() => this.deleteCacheAndMetadata());
      }
    }
    _getCacheExpiration(cacheName) {
      if (cacheName === cacheNames.getRuntimeName()) {
        throw new WorkboxError("expire-custom-caches-only");
      }
      let cacheExpiration = this._cacheExpirations.get(cacheName);
      if (!cacheExpiration) {
        cacheExpiration = new CacheExpiration(cacheName, this._config);
        this._cacheExpirations.set(cacheName, cacheExpiration);
      }
      return cacheExpiration;
    }
    _isResponseDateFresh(cachedResponse) {
      if (!this._maxAgeSeconds) {
        return true;
      }
      const dateHeaderTimestamp = this._getDateHeaderTimestamp(cachedResponse);
      if (dateHeaderTimestamp === null) {
        return true;
      }
      const now = Date.now();
      return dateHeaderTimestamp >= now - this._maxAgeSeconds * 1e3;
    }
    _getDateHeaderTimestamp(cachedResponse) {
      if (!cachedResponse.headers.has("date")) {
        return null;
      }
      const dateHeader = cachedResponse.headers.get("date");
      const parsedDate = new Date(dateHeader);
      const headerTime = parsedDate.getTime();
      if (isNaN(headerTime)) {
        return null;
      }
      return headerTime;
    }
    async deleteCacheAndMetadata() {
      for (const [cacheName, cacheExpiration] of this._cacheExpirations) {
        await self.caches.delete(cacheName);
        await cacheExpiration.delete();
      }
      this._cacheExpirations = new Map();
    }
  };

  // src/sw.js
  registerRoute(({request}) => request.destination === "document" || request.destination === "style", new StaleWhileRevalidate());
  registerRoute(({request}) => request.destination === "script", new NetworkFirst());
  registerRoute(({request}) => request.destination === "font" || request.destination === "image", new CacheFirst({
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 24 * 60 * 60 * 7
      })
    ]
  }));
  setDefaultHandler(new CacheFirst());
  setCatchHandler(new CacheFirst());

  // src/main.js
  Math.seedrandom = require_seedrandom2();
  var cloverleaf = require_cloverleaf();
  function isObject(item) {
    return item && typeof item === "object" && !Array.isArray(item);
  }
  function mergeDeep(target, ...sources) {
    if (!sources.length)
      return target;
    const source = sources.shift();
    if (isObject(target) && isObject(source)) {
      for (const key in source) {
        if (isObject(source[key])) {
          if (!target[key])
            Object.assign(target, {[key]: {}});
          mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, {[key]: source[key]});
        }
      }
    }
    return mergeDeep(target, ...sources);
  }
  var jsonData = mergeDeep(require_logos(), cloverleaf.siteData);
  var themeData = require_themes();
  var langData = require_langs();
  var autoCompleteData = {};
  window.defaultMinLength = 4;
  window.defaultMaxLength = 512;
  window.minLength = window.defaultMinLength;
  window.maxLength = window.defaultMaxLength;
  var defaultTheme = "Vanilla";
  var extension = location.hostname === "localhost" || location.hostname === "127.0.0.1" ? ".html" : "";
  var targetLength = 16;
  var presetInUse = false;
  var installPromptEvent;
  window.generate = function() {
    document.getElementById("result").value = cloverleaf.process(document.getElementById("app").value, document.getElementById("pass").value, presetInUse, document.getElementById("length").value);
  };
  window.changeTheme = function(passedTheme) {
    if (!themeData[passedTheme]) {
      console.error(`Invalid theme "${passedTheme}", defaulting to ${defaultTheme}`);
      passedTheme = defaultTheme;
    }
    setStored("theme", passedTheme);
    document.documentElement.style.setProperty("--accentColor", themeData[passedTheme].accent);
    document.documentElement.style.setProperty("--lightAccent", themeData[passedTheme].lightAccent);
    document.documentElement.style.setProperty("--textColor", themeData[passedTheme].text);
    document.documentElement.style.setProperty("--backgroundColor", themeData[passedTheme].background);
    document.documentElement.style.setProperty("--internalColor", themeData[passedTheme].internal);
    document.documentElement.style.setProperty("--incorrectColor", themeData[passedTheme].incorrect);
    document.documentElement.style.setProperty("--correctColor", themeData[passedTheme].correct);
    document.documentElement.style.setProperty("--inputColor", themeData[passedTheme].inputColor);
    document.documentElement.style.setProperty("--linkColor", themeData[passedTheme].linkColor);
    document.documentElement.style.setProperty("--highlightColor", themeData[passedTheme].highlightColor);
  };
  window.changeTheme(getStored("theme") ? getStored("theme") : defaultTheme);
  function getStored(name2) {
    return localStorage.getItem(name2);
  }
  function setStored(name2, value) {
    localStorage.setItem(name2, value);
  }
  function getQueryStrings() {
    const assoc = {};
    const decode = function(s) {
      return decodeURIComponent(s.replace(/\+/g, " "));
    };
    const queryString = location.search.substring(1);
    const keyValues = queryString.split("&");
    keyValues.forEach((product) => {
      const key = product.split("=");
      if (key.length > 1) {
        assoc[decode(key[0])] = decode(key[1]);
      }
    });
    return assoc;
  }
  window.passwordToggle = function() {
    if (document.getElementById("passwordToggle").checked) {
      document.getElementById("pass").type = "password";
    } else {
      document.getElementById("pass").type = "text";
    }
  };
  window.copy = function() {
    const pass = document.getElementById("result").value;
    if (pass === "") {
      M.toast({
        html: "You have no password to copy.",
        displayLength: 4e3,
        classes: "warning"
      });
    } else {
      let copyElement = document.createElement("input");
      copyElement.setAttribute("type", "text");
      copyElement.setAttribute("value", pass);
      copyElement = document.body.appendChild(copyElement);
      copyElement.select();
      document.execCommand("copy");
      copyElement.remove();
      M.toast({
        html: "Successfully copied!",
        displayLength: 4e3,
        classes: "success"
      });
    }
  };
  window.resultToggle = function() {
    if (document.getElementById("resultToggle").checked) {
      document.getElementById("result").type = "password";
    } else {
      document.getElementById("result").type = "text";
    }
  };
  window.getRandomArbitrary = function(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
  };
  window.changeLang = function(passedLang) {
    if (!langData[passedLang]) {
      throw new Error(`Invalid language "${passedLang}"`);
    }
    setStored("lang", passedLang);
    const file = passedLang === "en-GB" ? "/" : "/" + passedLang + extension;
    if (window.location.pathname.toLowerCase() !== file.toLowerCase()) {
      window.location.pathname = file;
    }
  };
  function setLogo(appName) {
    let logo;
    switch (typeof jsonData[appName].mini) {
      case "string":
        logo = jsonData[appName].mini;
        break;
      case "boolean":
        if (jsonData[appName].mini) {
          logo = `logos/${appName}-MINI.svg`;
        } else {
          if (jsonData[appName].logo) {
            logo = jsonData[appName].logo;
          } else {
            logo = `logos/${appName}.svg`;
          }
        }
        break;
      case "undefined":
        if (jsonData[appName].logo) {
          logo = jsonData[appName].logo;
        } else {
          logo = `logos/${appName}.svg`;
        }
        break;
      default:
        throw new Error(`Invalid mini value "${typeof jsonData[appName].mini}" for ${jsonData[appName]} preset`);
    }
    document.getElementById("logoContainer").style.display = "flex";
    document.getElementById("logo").src = logo;
    document.getElementById("logo").alt = appName;
    document.getElementById("logo").title = appName;
  }
  window.fixLength = function() {
    const length = document.getElementById("length").value;
    if (!(window.minLength <= length && length <= window.maxLength)) {
      if (length > window.maxLength) {
        document.getElementById("length").value = window.maxLength;
      } else if (length < window.minLength) {
        document.getElementById("length").value = window.minLength;
      }
    }
  };
  window.onload = function() {
    for (const key in langData) {
      const option = document.createElement("option");
      option.innerHTML = langData[key].native;
      option.dataset.short = key;
      document.querySelector("#lang").appendChild(option);
    }
    let usingLang;
    if (getStored("lang") !== null) {
      document.getElementById("lang").value = langData[getStored("lang")].native;
      usingLang = getStored("lang");
    } else {
      const lang = navigator.language || navigator.userLanguage;
      const first = lang.split("-")[0];
      const matches = Object.keys(langData).filter((x) => x.startsWith(first));
      if (matches.length !== 0) {
        document.getElementById("lang").value = langData[matches[0]].native;
        setStored("lang", matches[0]);
        usingLang = matches[0];
      } else {
        document.getElementById("lang").value = "English";
        setStored("lang", "en-GB");
        usingLang = "en-GB";
      }
    }
    window.changeLang(usingLang);
    for (const key in themeData) {
      const themeOption = document.createElement("option");
      themeOption.id = key;
      themeOption.innerHTML = key;
      document.querySelector("#theme").appendChild(themeOption);
    }
    document.getElementById("theme").value = getStored("theme") ? getStored("theme") : defaultTheme;
    M.Tooltip.init(document.querySelectorAll(".tooltipped"));
    M.Sidenav.init(document.querySelectorAll(".sidenav"), {edge: "left"});
    window.side = M.Sidenav.getInstance(document.getElementById("slide-out"));
    if (getStored("store") !== "false") {
      if (getStored("password")) {
        document.getElementById("pass").value = getStored("password");
        document.querySelector("label[for='pass']").classList.add("active");
        colourUnderline();
      }
      document.getElementById("session-toggle").click();
    }
    if (getStored("length")) {
      targetLength = getStored("length");
      document.getElementById("length-pref").value = targetLength;
      document.getElementById("length").value = targetLength;
    }
    for (const key in jsonData) {
      if (jsonData[key].logo) {
        autoCompleteData[key] = jsonData[key].logo;
      } else {
        autoCompleteData[key] = `logos/${key}.svg`;
      }
    }
    M.Autocomplete.init(document.getElementById("app"), {
      data: autoCompleteData,
      onAutocomplete(val) {
        setLogo(val);
        let length = targetLength;
        if (jsonData[val].alias) {
          val = jsonData[val].alias;
          console.debug(`Using alias: ${val}`);
        }
        if (jsonData[val].minLength) {
          window.minLength = jsonData[val].minLength;
        } else {
          window.minLength = window.defaultMinLength;
        }
        document.getElementById("length").min = window.minLength;
        if (jsonData[val].maxLength) {
          window.maxLength = jsonData[val].maxLength;
        } else {
          window.maxLength = window.defaultMaxLength;
        }
        document.getElementById("length").max = window.maxLength;
        if (!(window.minLength <= length && length <= window.maxLength)) {
          length = window.maxLength;
        }
        document.getElementById("length").max = window.maxLength;
        window.fixLength();
        presetInUse = true;
        window.generate();
      },
      minLength: 0,
      sortFunction(a, b, inputString) {
        if (inputString) {
          if (a.startsWith(inputString) && !b.startsWith(inputString)) {
            return -1;
          }
          if (!a.startsWith(inputString) && b.startsWith(inputString)) {
            return 1;
          }
        }
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      }
    });
    document.getElementById("app").focus();
    document.querySelector("label[for='app']").classList.add("active");
    const qs = getQueryStrings();
    if (qs.app) {
      const appName = String(qs.app);
      document.getElementById("app").value = appName;
      if (jsonData[appName]) {
        document.getElementById("app").click();
        document.querySelector(".autocomplete-content.dropdown-content :first-child").click();
      }
      window.generate();
      document.getElementById("pass").focus();
      document.querySelector("label[for='pass']").classList.add("active");
    }
    document.body.addEventListener("keydown", (e) => {
      if (e.ctrlKey && e.code === "KeyC") {
        if (window.getSelection().toString() === "") {
          window.copy();
        }
      }
    });
    switch (location.hostname) {
      case "dev.cloverleaf.app": {
        document.title += " - Dev Build";
        const ico = document.createElement("link");
        ico.rel = "shortcut icon";
        ico.href = "dev.ico";
        document.head.appendChild(ico);
        break;
      }
      case "cloverleaf.app":
        break;
      default:
        document.title += " - localhost";
        break;
    }
    if (true)
      require_debug();
  };
  function colourUnderline() {
    if (document.getElementById("pass").value) {
      Math.seedrandom(document.getElementById("pass").value);
      const colour = `HSL(${window.getRandomArbitrary(0, 360)}, ${window.getRandomArbitrary(60, 100)}%, ${window.getRandomArbitrary(45, 80)}%)`;
      document.getElementById("pass").style.setProperty("--accentColor", colour);
    } else {
      document.getElementById("pass").removeAttribute("style");
    }
  }
  window.appInput = function() {
    presetInUse = false;
    document.getElementById("logoContainer").style.display = "none";
    document.getElementById("logo").removeAttribute("src");
    document.getElementById("logo").removeAttribute("alt");
    document.getElementById("logo").removeAttribute("title");
    window.minLength = window.defaultMinLength;
    window.maxLength = window.defaultMaxLength;
    document.getElementById("length").max = window.maxLength;
    document.getElementById("length").min = window.minLength;
    document.getElementById("length").value = targetLength;
    window.generate();
  };
  window.passwordUp = function() {
    colourUnderline();
    if (getStored("store") === "true") {
      if (document.getElementById("pass").value) {
        setStored("password", document.getElementById("pass").value);
      } else {
        localStorage.removeItem("password");
      }
    }
    window.generate();
  };
  window.addEventListener("beforeinstallprompt", (e) => {
    installPromptEvent = e;
    e.preventDefault();
    document.getElementById("install").style = "";
  });
  window.appDown = function(e) {
    if ((e.key === "Enter" || e.code === "Enter" || e.keyCode === 13) && document.querySelector(".autocomplete-content.dropdown-content").offsetHeight > 0) {
      if (document.querySelector(".autocomplete-content.dropdown-content .active") === null) {
        document.querySelector(".autocomplete-content.dropdown-content :first-child").click();
      }
    }
  };
  window.sessionToggle = function() {
    if (document.getElementById("session-toggle").checked) {
      setStored("store", true);
      if (document.getElementById("pass").value) {
        setStored("password", document.getElementById("pass").value);
      } else {
        localStorage.removeItem("password");
      }
    } else {
      setStored("store", false);
      localStorage.removeItem("password");
    }
  };
  window.lengthPref = function(passedLength) {
    if (!(window.defaultMinLength <= passedLength && passedLength <= window.defaultMaxLength)) {
      if (passedLength > window.defaultMaxLength) {
        passedLength = window.defaultMaxLength;
      } else if (passedLength < window.defaultMinLength) {
        passedLength = window.defaultMinLength;
      }
      document.getElementById("length-pref").value = passedLength;
    }
    targetLength = passedLength;
    setStored("length", passedLength);
    document.getElementById("length").value = passedLength;
    window.generate();
  };
  window.presetScroll = function() {
    const selected = document.querySelector(".autocomplete-content.dropdown-content .active");
    if (selected)
      selected.scrollIntoView({behavior: "smooth", block: "nearest", inline: "nearest"});
  };
  window.install = function() {
    try {
      installPromptEvent.prompt();
    } catch (TypeError2) {
      M.toast({
        html: "Failed to install app.",
        displayLength: 4e3,
        classes: "warning"
      });
    }
  };
})();
