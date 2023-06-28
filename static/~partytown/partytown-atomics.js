/* Partytown 0.8.0 - MIT builder.io */
((e) => {
  const t = () => {},
    r = (e) => e.length,
    n = (e) => {
      var t, r, n;
      try {
        const r =
          null === (t = null == e ? void 0 : e.constructor) || void 0 === t
            ? void 0
            : t.name;
        if (r) return r;
      } catch (e) {}
      try {
        const t = null === (n = null === (r = null == e
                      ? void 0
                      : e.__zone_symbol__originalInstance) || void 0 === r
                ? void 0
                : r.constructor) || void 0 === n
          ? void 0
          : n.name;
        if (t) {
          return t;
        }
      } catch (e) {}
      return "";
    },
    i = (e, t) => e.startsWith(t),
    s = (e) =>
      !(i(e, "webkit") || i(e, "toJSON") || i(e, "constructor") ||
        i(e, "toString") || i(e, "_")),
    o = (e) => 11 === e.nodeType && e.host ? "#s" : e.nodeName,
    a = () => Math.round(Math.random() * Number.MAX_SAFE_INTEGER).toString(36),
    l = {
      Anchor: "a",
      DList: "dl",
      Image: "img",
      OList: "ol",
      Paragraph: "p",
      Quote: "q",
      TableCaption: "caption",
      TableCell: "td",
      TableCol: "colgroup",
      TableRow: "tr",
      TableSection: "tbody",
      UList: "ul",
    },
    c = { Graphics: "g", SVG: "svg" },
    u = Symbol(),
    d = Symbol(),
    h = new Map(),
    p = new Map(),
    m = {},
    g = new WeakMap(),
    f = (e, t) => {
      if (e) return (t = g.get(e)) || (t = e[u]) || v(e, t = a()), t;
    },
    y = (e, t, r, n, i) => {
      if ((r = m[e]) && r.U) {
        if (e === t) return r.U;
        if (n = r.U.document, "d" === (i = t.split(".").pop())) return n;
        if ("e" === i) return n.documentElement;
        if ("h" === i) return n.head;
        if ("b" === i) return n.body;
      }
      return h.get(t);
    },
    v = (e, t, r) => {
      e &&
        (h.set(t, e),
          e[u] = t,
          e[d] = r = Date.now(),
          r > w + 5e3 && (h.forEach((e, t) => {
            e[d] < w && e.nodeType && !e.isConnected && h.delete(t);
          }),
            w = r));
    };
  let w = 0;
  const $ = e.parent,
    S = document.implementation.createHTMLDocument(),
    b = $.partytown || {},
    E = (b.lib || "/~partytown/") + "",
    T = (e, t, r) => {
      const n = ((e, t) => {
        return r = e,
          n = { value: t },
          Object.defineProperty(r, "name", { ...n, configurable: !0 });
        var r, n;
      })(class extends m[e].U.HTMLElement {}, r[0]);
      return "connectedCallback,disconnectedCallback,attributeChangedCallback,adoptedCallback"
        .split(",").map((r) =>
          n.prototype[r] = function (...n) {
            t.postMessage([15, e, f(this), r, n]);
          }
        ),
        n.observedAttributes = r[1],
        n;
    },
    I = (e, t, r, s, a, l) =>
      void 0 !== t && (s = typeof t)
        ? "string" === s || "number" === s || "boolean" === s || null == t
          ? [0, t]
          : "function" === s
          ? [6]
          : (r = r || new Set()) && Array.isArray(t)
          ? r.has(t) ? [1, []] : r.add(t) && [1, t.map((t) => I(e, t, r))]
          : "object" === s
          ? N(t)
            ? [14, { name: t.name, message: t.message, stack: t.stack }]
            : "" === (a = n(t))
            ? [2, {}]
            : "Window" === a
            ? [3, [e, e]]
            : "HTMLCollection" === a || "NodeList" === a
            ? [7, Array.from(t).map((t) => I(e, t, r)[1])]
            : a.endsWith("Event")
            ? [5, M(e, t, r)]
            : "CSSRuleList" === a
            ? [12, Array.from(t).map(x)]
            : i(a, "CSS") && a.endsWith("Rule")
            ? [11, x(t)]
            : "CSSStyleDeclaration" === a
            ? [13, M(e, t, r)]
            : "Attr" === a
            ? [10, [t.name, t.value]]
            : t.nodeType
            ? [3, [e, f(t), o(t), l]]
            : [2, M(e, t, r, !0, !0)]
          : void 0
        : t,
    M = (e, t, r, i, o, a, l, c) => {
      if (a = {}, !r.has(t)) {
        for (l in r.add(t), t) {
          s(l) &&
            (c = "path" === l && n(t).endsWith("Event")
              ? t.composedPath()
              : t[l],
              (i || "function" != typeof c) && (o || "" !== c) &&
              (a[l] = I(e, c, r)));
        }
      }
      return a;
    },
    x = (e) => {
      let t, r = {};
      for (t in e) W.includes(t) && (r[t] = String(e[t]));
      return r;
    },
    N = (t) => t instanceof e.top.Error,
    L = (t, r, n, i) =>
      r
        ? (n = r[0],
          i = r[1],
          0 === n
            ? i
            : 4 === n
            ? C(t, i)
            : 1 === n
            ? i.map((e) => L(t, e))
            : 3 === n
            ? y(i[0], i[1])
            : 5 === n
            ? R(A(t, i))
            : 2 === n
            ? A(t, i)
            : 8 === n
            ? i
            : 9 === n
            ? new e[r[2]](i)
            : void 0)
        : void 0,
    C = (
      e,
      { V: t, w: r, L: n },
      i,
    ) => ((i = p.get(n)) || (i = function (...i) {
      e.postMessage([9, { V: t, w: r, L: n, R: I(t, this), b: I(t, i) }]);
    },
      p.set(n, i)),
      i),
    R = (e) => new ("detail" in e ? CustomEvent : Event)(e.type, e),
    A = (e, t, r, n) => {
      for (n in r = {}, t) r[n] = L(e, t[n]);
      return r;
    },
    W = "cssText,selectorText,href,media,namespaceURI,prefix,name,conditionText"
      .split(","),
    U = async (e, t) => {
      let n, i, s, o, a, l, c = { F: t.F }, u = r(t.Q), d = 0;
      for (; d < u; d++) {
        try {
          l = d === u - 1,
            n = t.Q[d],
            i = n.V,
            s = n.a,
            !m[i] && i.startsWith("f_") && await new Promise((e) => {
              let t = 0,
                r = () => {
                  m[i] || t++ > 1e3 ? e() : requestAnimationFrame(r);
                };
              r();
            }),
            1 === s[0] && s[1] in m[i].U
              ? v(new m[i].U[s[1]](...L(e, s[2])), n.w)
              : (o = y(i, n.w),
                o
                  ? (a = P(e, i, o, s, l, n.r),
                    n.d && ("string" == typeof n.d
                      ? v(a, n.d)
                      : m[n.d.V] = { V: n.d.V, U: { document: a } }),
                    "object" == typeof (h = a) && h && h.then &&
                    (a = await a, l && (c.z = !0)),
                    l && (c.M = I(i, a, void 0, void 0, void 0, n.w)))
                  : c.p = n.w + " not found");
        } catch (e) {
          l ? c.p = String(e.stack || e) : console.error(e);
        }
      }
      var h;
      return c;
    },
    P = (e, t, i, s, o, a) => {
      let l, c, u, d, h, p = 0, m = r(s);
      for (; p < m; p++) {
        c = s[p], l = s[p + 1], u = s[p - 1];
        try {
          if (!Array.isArray(l)) {
            if ("string" == typeof c || "number" == typeof c) {
              if (p + 1 === m && a) return h = {}, a.map((e) => h[e] = i[e]), h;
              i = i[c];
            } else {
              if (0 === l) return void (i[u] = L(e, c));
              if (
                "function" == typeof i[u] &&
                (d = L(e, c),
                  "define" === u && "CustomElementRegistry" === n(i) &&
                  (d[1] = T(t, e, d[1])),
                  "insertRule" === u && d[1] > r(i.cssRules) &&
                  (d[1] = r(i.cssRules)),
                  i = i[u].apply(i, d),
                  "play" === u)
              ) return Promise.resolve();
            }
          }
        } catch (e) {
          if (o) throw e;
          console.debug(e);
        }
      }
      return i;
    },
    j = (e, t) => {
      let n, i, s, o = t.V, a = t.U, l = a.document;
      l && l.body
        ? (n = l.querySelector(
          'script[type="text/partytown"]:not([data-ptid]):not([data-pterror]):not([async]):not([defer])',
        ),
          n ||
          (n = l.querySelector(
            'script[type="text/partytown"]:not([data-ptid]):not([data-pterror])',
          )),
          n
            ? (n.dataset.ptid = i = f(n, o),
              s = { V: o, w: i },
              n.src
                ? (s.S = n.src, s.H = n.dataset.ptsrc || n.src)
                : s.j = n.innerHTML,
              e.postMessage([7, s]))
            : (t.x || (t.x = 1,
              ((e, t, n) => {
                let i,
                  s,
                  o = n._ptf,
                  a = (n.partytown || {}).forward || [],
                  l = (r, n) =>
                    e.postMessage([10, { V: t, q: r, b: I(t, Array.from(n)) }]);
                if (
                  n._ptf = void 0,
                    a.map((e) => {
                      s = n,
                        e.split(".").map((e, t, n) => {
                          s = s[n[t]] = t + 1 < r(n)
                            ? s[n[t]] || ("push" === n[t + 1] ? [] : {})
                            : (...e) => l(n, e);
                        });
                    }),
                    o
                ) for (i = 0; i < r(o); i += 2) l(o[i], o[i + 1]);
              })(e, o, a),
              l.dispatchEvent(new CustomEvent("pt0"))),
              e.postMessage([8, o])))
        : requestAnimationFrame(() => j(e, t));
    },
    H = (e, t, r) => {
      if (!g.has(r)) {
        g.set(r, t);
        const n = r.document, i = r.history, s = g.get(r.parent);
        let o = !1;
        const a = [],
          l = (e) => {
            o ? e() : a.push(e);
          },
          c = () => {
            e.postMessage([5, {
              V: t,
              J: s,
              S: n.baseURI,
              T: n.visibilityState,
            }]),
              setTimeout(() => {
                o = !0,
                  a.forEach((e) => {
                    e();
                  });
              });
          },
          u = i.pushState.bind(i),
          d = i.replaceState.bind(i),
          h = (r, i, s, o) => () => {
            setTimeout(() => {
              e.postMessage([13, {
                V: t,
                type: r,
                state: i,
                url: n.baseURI,
                newUrl: s,
                oldUrl: o,
              }]);
            });
          };
        i.pushState = (e, t, r) => {
          u(e, t, r), l(h(0, e, null == r ? void 0 : r.toString()));
        },
          i.replaceState = (e, t, r) => {
            d(e, t, r), l(h(1, e, null == r ? void 0 : r.toString()));
          },
          r.addEventListener("popstate", (e) => {
            l(h(2, e.state));
          }),
          r.addEventListener("hashchange", (e) => {
            l(h(3, {}, e.newURL, e.oldURL));
          }),
          r.addEventListener("ptupdate", () => {
            j(e, m[t]);
          }),
          n.addEventListener(
            "visibilitychange",
            () => e.postMessage([14, t, n.visibilityState]),
          ),
          m[t] = { V: t, U: r },
          "complete" === n.readyState ? c() : r.addEventListener("load", c);
      }
    },
    O = () => {
      const e = Object.getOwnPropertyNames($).map((e) =>
        ((e, t, r, n) => {
          if (r = t.match(/^(HTML|SVG)(.+)Element$/)) {
            return n = r[2],
              "S" == t[0]
                ? e.createElementNS(
                  "http://www.w3.org/2000/svg",
                  c[n] || n.slice(0, 2).toLowerCase() + n.slice(2),
                )
                : e.createElement(l[n] || n);
          }
        })(S, e)
      ).filter((e) => e).map((e) => [e]);
      return V(e, []);
    },
    k = new Set(["Object"]),
    V = (e, t) => (e.filter((e) => e[0]).map((e) => {
      const t = e[0], r = e[1], i = n(t);
      return [i, $[i].prototype, t, r];
    }).map(([e, r, n, i]) => F(k, t, e, r, n, i)),
      t),
    B = (e, t, r) => {
      let n = [], i = [e, "Object", n];
      for (r in t) D(n, t, r);
      return i;
    },
    F = (e, t, r, i, s, a) => {
      if (!e.has(r)) {
        e.add(r);
        const l = Object.getPrototypeOf(i),
          c = n(l),
          u = [],
          d = Object.getOwnPropertyDescriptors(i);
        F(e, t, c, l, s, a);
        for (const e in d) D(u, s, e);
        t.push([r, c, u, a, o(s)]);
      }
    },
    D = (e, t, r, i, o, a) => {
      try {
        s(r) && isNaN(r[0]) && "all" !== r &&
          ("function" == (o = typeof (i = t[r]))
            ? (String(i).includes("[native") || Object.getPrototypeOf(t)[r]) &&
              e.push([r, 5])
            : "object" === o && null != i
            ? "Object" !== (a = n(i)) && self[a] && e.push([r, i.nodeType || a])
            : "symbol" !== o &&
              (r.toUpperCase() === r ? e.push([r, 6, i]) : e.push([r, 6])));
      } catch (e) {
        console.warn(e);
      }
    },
    _ = (e) => {
      let t, n = [], i = 0, s = r($[e]);
      for (; i < s; i++) t = $[e].key(i), n.push([t, $[e].getItem(t)]);
      return n;
    },
    J = (e, r) => void 0 !== e[r] ? new e[r](t) : 0;
  let X;
  (async (e) => {
    const t = new SharedArrayBuffer(1073741824), r = new Int32Array(t);
    return (n, i) => {
      const s = i[0], o = i[1];
      if (0 === s) {
        const e = (() => {
          const e = S.createElement("i"),
            t = S.createTextNode(""),
            r = S.createComment(""),
            n = S.createDocumentFragment(),
            i = S.createElement("p").attachShadow({ mode: "open" }),
            s = J($, "IntersectionObserver"),
            o = J($, "MutationObserver"),
            a = J($, "ResizeObserver"),
            l = $.performance,
            c = $.screen,
            u = [
              [$.history],
              [l],
              [l.navigation],
              [l.timing],
              [c],
              [c.orientation],
              [$.visualViewport],
              [s, 12],
              [o, 12],
              [a, 12],
              [t],
              [r],
              [n],
              [i],
              [e],
              [e.attributes],
              [e.classList],
              [e.dataset],
              [e.style],
              [S],
              [S.doctype],
            ],
            d = [B("Window", $), B("Node", t)],
            h = {
              i: JSON.stringify(
                b,
                (
                  e,
                  t,
                ) => ("function" == typeof t &&
                  (t = String(t)).startsWith(e + "(") && (t = "function " + t),
                  t),
              ),
              v: V(u, d),
              C: new URL(E, $.location) + "",
              I: origin,
              D: _("localStorage"),
              O: _("sessionStorage"),
            };
          return ((e, t, r) => {
            void 0 !== t[r] &&
              e.push([
                r,
                "Object",
                Object.keys(t[r].prototype).map((e) => [e, 6]),
                12,
              ]);
          })(h.v, $, "IntersectionObserverEntry"),
            h;
        })();
        e.P = t, n.postMessage([1, e]);
      } else {2 === i[0] ? n.postMessage([3, O()]) : 11 === s
          ? e(o, (e) => {
            const t = JSON.stringify(e), n = t.length;
            for (let e = 0; e < n; e++) r[e + 1] = t.charCodeAt(e);
            r[0] = n, Atomics.notify(r, 0);
          })
          : ((e, t, r) => {
            4 === t[0]
              ? H(e, a(), $)
              : (r = m[t[1]]) && (7 === t[0]
                ? requestAnimationFrame(() => j(e, r))
                : 6 === t[0] && ((e, t, r, n, i) => {
                  (i = t.U.document.querySelector(`[data-ptid="${r}"]`)) &&
                  (n ? i.dataset.pterror = n : i.type += "-x",
                    delete i.dataset.ptid), j(e, t);
                })(e, r, t[2], t[3]));
          })(n, i);}
    };
  })((e, t) => U(X, e).then(t)).then((e) => {
    e &&
      (X = new Worker(
        URL.createObjectURL(
          new Blob([
            '/* Partytown 0.8.0 - MIT builder.io */\n(e=>{const t=Symbol(),r=Symbol(),n=Symbol(),i=Symbol(),s=Symbol(),o=Symbol(),a=Symbol(),l=Symbol(),c=new Map,$={},d=new WeakMap,u=[],h={},p=new Map,g=new Map,m={},f=new Map,w=new Map,y="about:blank",v=e=>e.split(","),S=e=>{if(e=h.C+e,new URL(e).origin!=location.origin)throw"Invalid "+e;return e},I=v("clientWidth,clientHeight,clientTop,clientLeft,innerWidth,innerHeight,offsetWidth,offsetHeight,offsetTop,offsetLeft,outerWidth,outerHeight,pageXOffset,pageYOffset,scrollWidth,scrollHeight,scrollTop,scrollLeft"),b=v("childElementCount,children,firstElementChild,lastElementChild,nextElementSibling,previousElementSibling"),M=v("insertBefore,remove,removeChild,replaceChild"),T=v("className,width,height,hidden,innerHTML,innerText,textContent"),E=v("setAttribute,setAttributeNS,setProperty"),N=v("addEventListener,dispatchEvent,removeEventListener"),x=N.concat(E,v("add,observe,remove,unobserve")),L=/^[A-Z_]([A-Z0-9-]*[A-Z0-9])?$/,C=()=>{},R=e=>e.length,A=e=>{var t,r,n;try{const r=null===(t=null==e?void 0:e.constructor)||void 0===t?void 0:t.name;if(r)return r}catch(e){}try{const t=null===(n=null===(r=null==e?void 0:e.__zone_symbol__originalInstance)||void 0===r?void 0:r.constructor)||void 0===n?void 0:n.name;if(t)return t}catch(e){}return""},W=[],H=()=>Math.round(Math.random()*Number.MAX_SAFE_INTEGER).toString(36),P="text/partytown",O=(e,t,r)=>Object.defineProperty(e,t,{...r,configurable:!0}),j=(e,t)=>O(e,"name",{value:t}),D=(e,t,r)=>O(e.prototype,t,r),k=(e,t)=>Object.defineProperties(e.prototype,t),U=(e,t,r)=>D(e,t,{value:r,writable:!0}),_=(e,t)=>t in e[o],B=(e,t)=>e[o][t],F=(e,t,r)=>e[o][t]=r,V=(e,t,r,n,i,s)=>{if(!(i=c.get(t))&&r&&m[e]){const o=c.get(s||"");i=m[e].k(r,t,n,o),c.set(t,i)}return i},z=(e,t)=>U(e,"nodeType",t),G=(e,t)=>t.map((t=>D(e,t,{get(){let e=X(this,t),r=w.get(e);return r||(r=de(this,[t]),w.set(e,r)),r}}))),X=(e,n,i)=>[e[t],e[r],n,...(i||W).map((e=>String(e&&e[t]?e[r]:e)))].join("."),q=(e,t)=>v(t).map((t=>D(e,t,{get(){return _(this,t)||F(this,t,de(this,[t])),B(this,t)},set(e){B(this,t)!==e&&ue(this,[t],e),F(this,t,e)}}))),Z=e=>I.map((t=>D(e,t,{get(){const e=f.get(X(this,t));if("number"==typeof e)return e;const r=de(this,[t],I);return r&&"object"==typeof r?(Object.entries(r).map((([e,t])=>f.set(X(this,e),t))),r[t]):r}}))),J=(e,t)=>t.map((t=>{e.prototype[t]=function(...e){let r=X(this,t,e),n=f.get(r);return n||(n=he(this,[t],e),f.set(r,n)),n}})),Y=(e,n,i,s,o)=>{return void 0!==i&&(o=typeof i)?"string"===o||"boolean"===o||"number"===o||null==i?[0,i]:"function"===o?[4,{V:e,w:n,L:(a=i,(l=d.get(a))||(d.set(a,l=H()),$[l]=a),l)}]:(s=s||new Set)&&Array.isArray(i)?s.has(i)?[1,[]]:s.add(i)&&[1,i.map((t=>Y(e,n,t,s)))]:"object"===o?i[r]?[3,[i[t],i[r]]]:i instanceof Event?[5,Q(e,n,i,!1,s)]:K&&i instanceof TrustedHTML?[0,i.toString()]:i instanceof ArrayBuffer?[8,i]:ArrayBuffer.isView(i)?[9,i.buffer,A(i)]:[2,Q(e,n,i,!0,s)]:void 0:i;var a,l},K="undefined"!=typeof TrustedHTML,Q=(e,t,r,n,i,s,o,a)=>{if(s={},!i.has(r))for(o in i.add(r),r)a=r[o],(n||"function"!=typeof a)&&(s[o]=Y(e,t,a,i));return s},ee=(e,n)=>e?Y(e[t],e[r],n):[0,n],te=(e,t,r,n,i,s,o,a)=>{if(n){if(i=n[0],s=n[1],0===i||11===i||12===i)return s;if(4===i)return ne(r,s);if(6===i)return e&&r.length>0?(...t)=>he(m[e].U,r,t,1):C;if(3===i)return re(s);if(7===i)return new se(s.map(re));if(10===i)return new oe(s);if(1===i)return s.map((n=>te(e,t,r,n)));if(14===i)return new ie(s);for(a in o={},s)o[a]=te(e,t,[...r,a],s[a]);if(13===i)return new m[e].U.CSSStyleDeclaration(e,t,r,o);if(5===i){if("message"===o.type&&o.origin){let e,t=JSON.stringify(o.data),r=u.find((e=>e.m===t));r&&(e=m[r.V],e&&(o.source=e.U,o.origin=e.E.origin))}return new Proxy(new Event(o.type,o),{get:(e,t)=>t in o?o[t]:"function"==typeof e[String(t)]?C:e[String(t)]})}if(2===i)return o}},re=([e,t,r,n])=>t===e&&m[e]?m[e].U:V(e,t,r,void 0,void 0,n),ne=(e,{V:t,w:r,G:n,L:i})=>($[i]||d.set($[i]=function(...i){const s=V(t,r,n);return he(s,e,i)},i),$[i]);class ie extends Error{constructor(e){super(e.message),this.name=e.name,this.message=e.message,this.stack=e.stack}}class se{constructor(e){(this._=e).map(((e,t)=>this[t]=e))}entries(){return this._.entries()}forEach(e,t){this._.map(e,t)}item(e){return this[e]}keys(){return this._.keys()}get length(){return R(this._)}values(){return this._.values()}[Symbol.iterator](){return this._[Symbol.iterator]()}}const oe=class{constructor(e){this.name=e[0],this.value=e[1]}get nodeName(){return this.name}get nodeType(){return 2}},ae=(e,t,r)=>console.warn(`Partytown unable to ${e} cross-origin ${t}: `+r.E),le=[],ce=(e,n,i,o,a,l)=>{if(e[s]){if(le.push({V:e[t],w:e[r],a:[...e[s],...n],d:o,r:a}),3===i)h.K([12,{F:H(),Q:[...le]}],l?[l instanceof ArrayBuffer?l:l.buffer]:void 0),le.length=0;else if(1===i)return $e(!0);h.c=setTimeout($e,20)}},$e=e=>{if(clearTimeout(h.c),R(le)){const t=le[R(le)-1],r={F:H(),Q:[...le]};if(le.length=0,e){const e=((e,t)=>{const r=e.P,n=new Int32Array(r);Atomics.store(n,0,0),e.K([11,t]),Atomics.wait(n,0,0);let i=Atomics.load(n,0),s="",o=0;for(;o<i;o++)s+=String.fromCharCode(n[o+1]);return JSON.parse(s)})(h,r),n=e.z,i=te(t.V,t.w,t.a,e.M);if(e.p){if(n)return Promise.reject(e.p);throw new Error(e.p)}return n?Promise.resolve(i):i}h.K([12,r])}},de=(e,t,r,n)=>h.i.get&&(n=h.i.get(ge(e,t)))!==a?n:n=ce(e,t,1,void 0,r),ue=(e,t,r,n)=>{if(h.i.set){if((n=h.i.set({value:r,prevent:l,...ge(e,t)}))===l)return;n!==a&&(r=n)}T.some((e=>t.includes(e)))&&(f.clear(),t[t.length-1]),t=[...t,ee(e,r),0],ce(e,t,2)},he=(e,t,r,n,i,s,o,l)=>h.i.apply&&(o=h.i.apply({args:r,...ge(e,t)}))!==a?o:(l=t[R(t)-1],t=[...t,ee(e,r)],n=n||(x.includes(l)?2:1),"setAttribute"===l&&_(e,r[0])?F(e,r[0],r[1]):M.includes(l)?(f.clear(),w.clear()):E.includes(l)&&(n=2,f.clear()),o=ce(e,t,n,i,void 0,s)),pe=(e,t,r)=>{ce(e,[1,t,ee(e,r)],1)},ge=(e,r)=>({name:r.join("."),continue:a,nodeName:e[n],constructor:A(e),instance:e,window:m[e[t]].U}),me=(e,t,r,n,i)=>{let s,o,a=t=>((t=r.get(e.origin))||r.set(e.origin,t=[]),t),l=e=>a().findIndex((t=>t[fe]===e)),c={getItem:e=>(s=l(e),s>-1?a()[s][we]:null),setItem(r,o){s=l(r),s>-1?a()[s][we]=o:a().push([r,o]),n?he(e,[t,"setItem"],[r,o],2):ae("set",t,i)},removeItem(r){s=l(r),s>-1&&a().splice(s,1),n?he(e,[t,"removeItem"],[r],2):ae("remove",t,i)},key:e=>(o=a()[e],o?o[fe]:null),clear(){a().length=0,n?he(e,[t,"clear"],W,2):ae("clear",t,i)},get length(){return a().length}};e[t]=new Proxy(c,{get:(e,t)=>Reflect.has(e,t)?Reflect.get(e,t):e.getItem(t),set:(e,t,r)=>(e.setItem(t,r),!0),has:(e,t)=>!!Reflect.has(e,t)||"string"==typeof t&&null!==e.getItem(t),deleteProperty:(e,t)=>(e.removeItem(t),!0)})},fe=0,we=1,ye=(e,t,r)=>{e[r]=j(class extends t{constructor(e,t,r,i){return super(e,t,r,i||{}),new Proxy(this,{get:(e,t)=>e[t]?e[t]:(e[t]||"string"!=typeof t||e[n][t]||(e[n][t]=de(e,[t])),e[n][t]),set:(e,t,r)=>(e[n][t]=r,ue(e,[t],r),f.clear(),!0)})}setProperty(...e){this[n][e[0]]=e[1],he(this,["setProperty"],e,2),e[0],f.clear()}getPropertyValue(e){return this[e]}removeProperty(e){let t=this[n][e];return he(this,["removeProperty"],[e],2),f.clear(),this[n][e]=void 0,t}},r)},ve=(e,t)=>{e[t]=j(class{constructor(e){this.ownerNode=e}get cssRules(){const e=this.ownerNode;return new Proxy({},{get(t,r){const n=String(r);return"item"===n?t=>Ie(e,t):"length"===n?Se(e).length:isNaN(n)?t[r]:Ie(e,n)}})}insertRule(e,t){const r=Se(this.ownerNode);return(t=void 0===t?0:t)>=0&&t<=r.length&&(he(this.ownerNode,["sheet","insertRule"],[e,t],2),r.splice(t,0,0)),this.ownerNode,f.clear(),t}deleteRule(e){he(this.ownerNode,["sheet","deleteRule"],[e],2),Se(this.ownerNode).splice(e,1),this.ownerNode,f.clear()}get type(){return"text/css"}},t);const r={sheet:{get(){return new e[t](this)}}};k(e.HTMLStyleElement,r)},Se=(e,t)=>((t=B(e,2))||(t=de(e,["sheet","cssRules"]),F(e,2,t)),t),Ie=(e,t,r)=>(0===(r=Se(e))[t]&&(r[t]=de(e,["sheet","cssRules",parseInt(t,10)])),r[t]),be="0.8.0",Me=(e,t,r,n,i)=>{try{e.l=t,Te(e,r)}catch(e){console.error(r,e),i=String(e.stack||e)}return e.l="",i},Te=(e,t,r)=>{e.N=1,t=`with(this){${t.replace(/\\bthis\\b/g,((e,t,r)=>t>0&&"$"!==r[t-1]?"(thi$(this)?window:this)":e)).replace(/\\/\\/# so/g,"//Xso")}\\n;function thi$(t){return t===this}};${(h.i.globalFns||[]).filter((e=>/[a-zA-Z_$][0-9a-zA-Z_$]*/.test(e))).map((e=>`(typeof ${e}==\'function\'&&(this.${e}=${e}))`)).join(";")};`+(r?"\\n//# sourceURL="+r:""),e.A||(t=t.replace(/.postMessage\\(/g,`.postMessage(\'${e.V}\',`)),new Function(t).call(e.U),e.N=0},Ee=(e,t,r)=>{(r=B(e,t))&&setTimeout((()=>r.map((e=>e({type:t})))))},Ne=(e,t,r,n,i,s)=>{for(n=e.E;!n.host&&(n=(e=m[e.J]).E,e.V!==e.J););return i=new URL(t||"",n),r&&h.i.resolveUrl&&(s=h.i.resolveUrl(i,n,r))?s:i},xe=(e,t,r)=>Ne(e,t,r)+"",Le=()=>`<script src="${S("partytown.js?v="+be)}"><\\/script>`,Ce=e=>class{constructor(){this.s="",this.l=[],this.e=[],this.style={}}get src(){return this.s}set src(t){this.s=t,fetch(xe(e,t,"image"),{mode:"no-cors",credentials:"include",keepalive:!0}).then((e=>{e.ok||0===e.status?this.l.map((e=>e({type:"load"}))):this.e.map((e=>e({type:"error"})))}),(()=>this.e.forEach((e=>e({type:"error"})))))}addEventListener(e,t){"load"===e&&this.l.push(t),"error"===e&&this.e.push(t)}get onload(){return this.l[0]}set onload(e){this.l=[e]}get onerror(){return this.e[0]}set onerror(e){this.e=[e]}},Re={addEventListener:{value(...e){const t=e[0],r=B(this,t)||[];r.push(e[1]),F(this,t,r)}},async:{get:C,set:C},defer:{get:C,set:C},onload:{get(){let e=B(this,"load");return e&&e[0]||null},set(e){F(this,"load",e?[e]:null)}},onerror:{get(){let e=B(this,"error");return e&&e[0]||null},set(e){F(this,"error",e?[e]:null)}},getAttribute:{value(e){return"src"===e?this.src:he(this,["getAttribute"],[e])}},setAttribute:{value(e,t){Ae.includes(e)?this[e]=t:he(this,["setAttribute"],[e,t])}}},Ae=v("src,type"),We=(e,t)=>{const r={innerHTML:He,innerText:He,src:{get(){return B(this,4)||""},set(e){const r=xe(t,e,null),n=h.i;e=xe(t,e,"script"),F(this,4,e),ue(this,["src"],e),r!==e&&ue(this,["dataset","ptsrc"],r),this.type&&n.loadScriptsOnMainThread&&n.loadScriptsOnMainThread.some((t=>t===e))&&ue(this,["type"],"text/javascript")}},textContent:He,type:{get(){return de(this,["type"])},set(e){Pe(e)||(F(this,5,e),ue(this,["type"],e))}},...Re};k(e,r)},He={get(){const e=de(this,["type"]);return Pe(e)?B(this,3)||"":de(this,["innerHTML"])},set(e){F(this,3,e)}},Pe=e=>!e||"text/javascript"===e,Oe=(e,i,s)=>{const o=h.i,a=j(class extends s{appendChild(e){return this.insertBefore(e,null)}get href(){}set href(e){}insertBefore(e,s){var a,l;const c=e[t]=this[t],$=e[r],d=e[n],u="SCRIPT"===d,p="IFRAME"===d;if(u){const t=B(e,3),r=B(e,5);if(t){if(Pe(r)){const r=e.id;if(r&&(null===(l=null===(a=o.loadScriptsOnMainThread)||void 0===a?void 0:a.includes)||void 0===l?void 0:l.call(a,r)))ue(e,["type"],"text/javascript");else{const r=Me(i,$,t,0,""),n=r?"pterror":"ptid",s=r||$;ue(e,["type"],P+"-x"),ue(e,["dataset",n],s)}}ue(e,["innerHTML"],t)}}if(he(this,["insertBefore"],[e,s],2),p){const t=B(e,0);if(t&&t.startsWith("javascript:")){const e=t.split("javascript:")[1];Me(i,$,e,0,"")}((e,t)=>{let r,n,i=0,s=()=>{m[e]&&m[e].x&&!m[e].y?(r=B(t,1)?"error":"load",n=B(t,r),n&&n.map((e=>e({type:r})))):i++>2e3?(n=B(t,"error"),n&&n.map((e=>e({type:"error"})))):setTimeout(s,9)};s()})($,e)}return u&&($e(!0),h.K([7,c])),e}get nodeName(){return"#s"===this[n]?"#document-fragment":this[n]}get nodeType(){return 3}get ownerDocument(){return i.n}},"Node");G(a,v("childNodes,firstChild,isConnected,lastChild,nextSibling,parentElement,parentNode,previousSibling")),e.Node=a},je=v("AUDIO,CANVAS,VIDEO"),De=v("Audio,MediaSource"),ke=(e,r,n)=>{k(e,{body:{get:()=>r.e},cookie:{get(){return r.A?de(this,["cookie"]):(ae("get","cookie",r),"")},set(e){r.A&&ue(this,["cookie"],e)}},createElement:{value(e){if(e=e.toUpperCase(),!L.test(e))throw e+" not valid";const r="IFRAME"===e,n=this[t],i=(r?"f_":"")+H();he(this,["createElement"],[e],2,i);const s=V(n,i,e);if(r)et({V:i,J:n,S:y},!0).U.fetch=fetch,ue(s,["srcdoc"],Le());else if("SCRIPT"===e){const e=B(s,5);Pe(e)&&ue(s,["type"],P)}return s}},createElementNS:{value(e,r){const n=H(),i=V(this[t],n,r,e);return he(this,["createElementNS"],[e,r],2,n),i}},createTextNode:{value(e){const r=this[t],n=H(),i=V(r,n,"#text");return he(this,["createTextNode"],[e],2,n),i}},createEvent:{value:e=>new Event(e)},currentScript:{get(){return r.l?V(this[t],r.l,"SCRIPT"):null}},defaultView:{get:()=>n?null:r.U},documentElement:{get:()=>r.o},getElementsByTagName:{value(e){return"BODY"===(e=e.toUpperCase())?[r.e]:"HEAD"===e?[r.s]:he(this,["getElementsByTagName"],[e])}},head:{get:()=>r.s},images:{get(){return de(this,["images"])}},implementation:{get(){return{hasFeature:()=>!0,createHTMLDocument:e=>{const t=H();return he(this,["implementation","createHTMLDocument"],[e],1,{V:t}),et({V:t,J:t,S:r.E+"",T:"hidden"},!0,!0).n}}}},location:{get:()=>r.E,set(e){r.E.href=e+""}},nodeType:{value:9},parentNode:{value:null},parentElement:{value:null},readyState:{value:"complete"},visibilityState:{get:()=>r.T||"visible"}}),q(e,"compatMode,referrer,forms")},Ue=(e,t)=>{k(e,{parentElement:{get(){return this.parentNode}},parentNode:{get:()=>t.o}})},_e=(e,t)=>{k(e,{localName:{get(){return this[n].toLowerCase()}},namespaceURI:{get(){return this[i]||"http://www.w3.org/1999/xhtml"}},nodeType:{value:1},tagName:{get(){return this[n]}}}),G(e,b),q(e,"id"),Z(t),J(t,v("getClientRects,getBoundingClientRect"))},Be=(e,t)=>{const r={};v("hash,host,hostname,href,origin,pathname,port,protocol,search").map((e=>{r[e]={get(){let r,n=B(this,4);return"string"!=typeof n&&(r=de(this,["href"]),F(this,4,r),n=new URL(r)[e]),Ne(t,n,null)[e]},set(r){let n;if("href"===e)if((e=>{try{return new URL(e),!0}catch(e){return!1}})(r))n=new URL(r);else{const e=t.E.href;n=Ne(t,e,null),n.href=new URL(r+"",n.href)}else n=Ne(t,this.href,null),n[e]=r;F(this,4,n.href),ue(this,["href"],n.href)}}})),k(e,r)},Fe=(e,t)=>{const r={contentDocument:{get(){return Xe(this).n}},contentWindow:{get(){return Xe(this).U}},src:{get(){let e=B(this,0);return e&&e.startsWith("javascript:")?e:(e=Xe(this).E.href,e.startsWith("about:")?"":e)},set(e){if(e)if(e.startsWith("javascript:"))F(this,0,e);else if(!e.startsWith("about:")){let t,r=new XMLHttpRequest,n=Xe(this);n.E.href=e=xe(n,e,"iframe"),n.y=1,F(this,1,void 0),r.open("GET",e,!1),r.send(),t=r.status,t>199&&t<300?(ue(this,["srcdoc"],`<base href="${e}">`+r.responseText.replace(ze,((e,t)=>{const r=[];let n,i=!1;for(;n=Ge.exec(t);){let[e]=n;e.startsWith("type=")&&(i=!0,e=e.replace(/(application|text)\\/javascript/,P)),r.push(e)}return i||r.push(\'type="text/partytown"\'),`<script ${r.join(" ")}>`}))+Le()),$e(!0),h.K([7,n.V])):(F(this,1,t),n.y=0)}}},...Re};k(e,r)},Ve="((?:\\\\w|-)+(?:=(?:(?:\\\\w|-)+|\'[^\']*\'|\\"[^\\"]*\\")?)?)",ze=new RegExp(`<script\\\\s*((${Ve}\\\\s*)*)>`,"mg"),Ge=new RegExp(Ve,"mg"),Xe=e=>{const n=e[r];return m[n]||et({V:n,J:e[t],S:de(e,["src"])||y},!0),m[n]},qe=e=>{const t=(e,t)=>{const{a:r,b:n,c:i,d:s,e:o,f:a}=he(e,[t],W);return new DOMMatrixReadOnly([r,n,i,s,o,a])},r={...e,getCTM:{value:function(){return t(this,"getCTM")}},getScreenCTM:{value:function(){return t(this,"getScreenCTM")}}};k(e,r)},Ze=(e,t)=>{e.NamedNodeMap=j(class extends t{constructor(e,t,r){return super(e,t,r),new Proxy(this,{get(e,t){const r=Ye[t];return r?r.bind(e,[t]):de(e,[t])},set(e,t,r){if(Ye[t])throw new Error("Can\'t set read-only property: "+String(t));return ue(e,[t],r),!0}})}},"NamedNodeMap")};function Je(e,...t){return he(this,e,t,1)}const Ye={getNamedItem:Je,getNamedItemNS:Je,item:Je,removeNamedItem:Je,removeNamedItemNS:Je,setNamedItem:Je,setNamedItemNS:Je},Ke=(a,l,c,$,d,f)=>{let w,I,M,T;const E=class{constructor(e,l,c,$,d){this[t]=e||a,this[r]=l||w||H(),this[s]=c||[],this[n]=$||I,this[i]=d||M,this[o]=T&&T[o]||{},w=I=M=void 0}},x=new(j(class extends URL{assign(){}reload(){}replace(){}},"Location"))(c),L=x.origin===h.I||x.origin===y,C=l===a,W={},P=()=>{let e,t,r=[];for(e in m)t=m[e],t.J!==a||t.B||r.push(t);return r},X=j(class extends E{constructor(){super(a,a);let n,i,o=this,c=0,u=()=>{c||((h.u||(e.g=[de,ue,he,pe,k,H,t,r,s],h.t(S("partytown-media.js?v="+be)),h.u=e.f,delete e.f),h.u)(E,K,W,o,De),c=1)},m={},y=(e,t,r,n)=>{je.includes(e)&&u();const i=m[e]?m[e]:e.includes("-")?m.UNKNOWN:m.I;return w=t,I=e,M=r,T=n,new i};var N,R;if(o.Window=X,o.name=name+a,Oe(o,W,E),(e=>{e.NodeList=j(se,"NodeList")})(o),Ze(o,E),ye(o,E,"CSSStyleDeclaration"),((e,t,r)=>{e[r]=j(class extends t{now(){return performance.now()}},r)})(o,E,"Performance"),((e,t)=>{const r="customElements",n=new Map;e.customElements={define(i,s,o){n.set(i,s),t[i.toUpperCase()]=s;const a=[s.name,s.observedAttributes];he(e,[r,"define"],[i,a,o])},get:t=>n.get(t)||he(e,[r,"get"],[t]),whenDefined:t=>n.has(t)?Promise.resolve():he(e,[r,"whenDefined"],[t]),upgrade:t=>he(e,[r,"upgrade"],[t])}})(o,m),h.v.map((([e,t,n,i,l])=>{const c=Qe[e]?Y:"EventTarget"===t?K:"Object"===t?E:o[t],$=o[e]=j(12===i?class extends E{constructor(...t){super(),pe(this,e,t)}}:o[e]||class extends c{},e);l&&(m[l]=$),n.map((([e,t,n])=>{e in $.prototype||e in c.prototype||("string"==typeof t?D($,e,{get(){if(!_(this,e)){const n=this[r],i=[...this[s],e],l=o[t];l&&F(this,e,new l(a,n,i))}return B(this,e)},set(t){F(this,e,t)}}):5===t?U($,e,(function(...t){return he(this,[e],t)})):t>0&&(void 0!==n?U($,e,n):D($,e,{get(){return de(this,[e])},set(t){return ue(this,[e],t)}})))}))})),v("atob,btoa,crypto,indexedDB,setTimeout,setInterval,clearTimeout,clearInterval").map((t=>{delete X.prototype[t],t in o||(n=e[t],null!=n&&(o[t]="function"!=typeof n||n.toString().startsWith("class")?n:n.bind(e)))})),Object.getOwnPropertyNames(e).map((t=>{t in o||(o[t]=e[t])})),De.map((e=>O(o,e,{get:()=>(u(),o[e])}))),"trustedTypes"in e&&(o.trustedTypes=e.trustedTypes),_e(o.Element,o.HTMLElement),ke(o.Document,W,f),N=o.DocumentFragment,z(N,11),G(N,b),Be(o.HTMLAnchorElement,W),R=o.HTMLFormElement,k(R,{}),q(R,"elements"),Fe(o.HTMLIFrameElement),We(o.HTMLScriptElement,W),qe(o.SVGGraphicsElement),Ue(o.HTMLHeadElement,W),Ue(o.HTMLBodyElement,W),((e,t)=>{k(e,{parentElement:{value:null},parentNode:{get:()=>t.n}})})(o.HTMLHtmlElement,W),ve(o,"CSSStyleSheet"),z(o.Comment,8),z(o.DocumentType,10),Object.assign(W,{V:a,J:l,U:new Proxy(o,{get:(e,t)=>{var r;if("string"!=typeof t||isNaN(t))return(null===(r=h.i.mainWindowAccessors)||void 0===r?void 0:r.includes(t))?de(this,[t]):e[t];{let e=P()[t];return e?e.U:void 0}},has:()=>!0}),n:y("#document",a+".d"),o:y("HTML",a+".e"),s:y("HEAD",a+".h"),e:y("BODY",a+".b"),E:x,T:$,A:L,B:C,k:y}),o.requestAnimationFrame=e=>setTimeout((()=>e(performance.now())),9),o.cancelAnimationFrame=e=>clearTimeout(e),o.requestIdleCallback=(e,t)=>(t=Date.now(),setTimeout((()=>e({didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-t))})),1)),o.cancelIdleCallback=e=>clearTimeout(e),me(o,"localStorage",p,L,W),me(o,"sessionStorage",g,L,W),L||(o.indexeddb=void 0),d)i={},o.history={pushState(e){i=e},replaceState(e){i=e},get state(){return i},length:0},o.indexeddb=void 0;else{const e=o.history.pushState.bind(o.history),t=o.history.replaceState.bind(o.history);o.history.pushState=(t,r,n)=>{!1!==W.$propagateHistoryChange$&&e(t,r,n)},o.history.replaceState=(e,r,n)=>{!1!==W.$propagateHistoryChange$&&t(e,r,n)}}o.Worker=void 0}addEventListener(...e){"load"===e[0]?W.N&&setTimeout((()=>e[1]({type:"load"}))):he(this,["addEventListener"],e,2)}get body(){return W.e}get document(){return W.n}get documentElement(){return W.o}fetch(e,t){return e="string"==typeof e||e instanceof URL?String(e):e.url,fetch(xe(W,e,"fetch"),t)}get frames(){return W.U}get frameElement(){return C?null:V(l,a,"IFRAME")}get globalThis(){return W.U}get head(){return W.s}get length(){return P().length}get location(){return x}set location(e){x.href=e+""}get Image(){return Ce(W)}get navigator(){return(e=>{let t,r={sendBeacon:(t,r)=>{try{return fetch(xe(e,t,null),{method:"POST",body:r,mode:"no-cors",keepalive:!0}),!0}catch(e){return console.error(e),!1}}};for(t in navigator)r[t]=navigator[t];return new Proxy(r,{set:(e,t,r)=>(navigator[t]=r,!0)})})(W)}get origin(){return x.origin}set origin(e){}get parent(){for(let e in m)if(m[e].V===l)return m[e].U;return W.U}postMessage(...e){m[e[0]]&&(R(u)>50&&u.splice(0,5),u.push({V:e[0],m:JSON.stringify(e[1])}),e=e.slice(1)),he(this,["postMessage"],e,3)}get self(){return W.U}get top(){for(let e in m)if(m[e].B)return m[e].U;return W.U}get window(){return W.U}get XMLHttpRequest(){const e=XMLHttpRequest,t=String(e),r=j(class extends e{open(...e){e[1]=xe(W,e[1],"xhr"),super.open(...e)}set withCredentials(e){}toString(){return t}},A(e));return r.prototype.constructor.toString=()=>t,r}},"Window"),Y=class extends E{constructor(e,t,r,n){return super(e,t,r,n),new Proxy(this,{get:(e,t)=>de(e,[t]),set:(e,t,r)=>(ue(e,[t],r),!0)})}},K=class extends E{};return N.map((e=>K.prototype[e]=function(...t){return he(this,[e],t,2)})),q(X,"devicePixelRatio"),Z(X),J(X,["getComputedStyle"]),new X,W},Qe={DOMStringMap:1,NamedNodeMap:1},et=({V:e,J:t,S:r,T:n},i,s)=>(m[e]||(m[e]=Ke(e,t,r,n,i,s)),h.K([7,e]),m[e]),tt=[],rt=t=>{const r=t.data,n=r[0],i=r[1];if(h.x)if(7===n)(async e=>{let t,r=e.V,n=e.w,i=V(r,n,"SCRIPT"),s=e.j,o=e.S,a=e.H,l="",c=m[r],$=["text/jscript","text/javascript","text/x-javascript","application/javascript","application/x-javascript","text/ecmascript","text/x-ecmascript","application/ecmascript"];if(o)try{if(o=Ne(c,o,"script")+"",F(i,4,o),t=await fetch(o),t.ok){let e=t.headers.get("content-type");$.some((t=>{var r,n,i;return null===(i=null===(r=null==e?void 0:e.toLowerCase)||void 0===r?void 0:(n=r.call(e)).includes)||void 0===i?void 0:i.call(n,t)}))&&(s=await t.text(),c.l=n,Te(c,s,a||o)),Ee(i,"load")}else l=t.statusText,Ee(i,"error")}catch(e){console.error(e),l=String(e.stack||e),Ee(i,"error")}else s&&(l=Me(c,n,s,0,l));c.l="",h.K([6,r,n,l])})(i);else if(9===n)(({V:e,w:t,L:r,R:n,b:i})=>{if($[r])try{$[r].apply(te(e,t,[],n),te(e,t,[],i))}catch(e){console.error(e)}})(i);else if(10===n)(({V:e,q:t,b:r})=>{try{let n=m[e].U,i=0,s=R(t);for(;i<s;i++)i+1<s?n=n[t[i]]:n[t[i]].apply(n,te(null,e,[],r))}catch(e){console.error(e)}})(i);else if(5===n)et(i);else if(8===n)m[i].x=1,m[i].y=0;else if(14===n)m[i].T=r[2];else if(13===n){const e=i.V,t=m[e];t.E.href=i.url,function(e,t,r){const n=t.U.history;switch(r.type){case 0:t.$propagateHistoryChange$=!1;try{n.pushState(r.state,"",r.newUrl)}catch(e){}t.$propagateHistoryChange$=!0;break;case 1:t.$propagateHistoryChange$=!1;try{n.replaceState(r.state,"",r.newUrl)}catch(e){}t.$propagateHistoryChange$=!0}}(i.V,t,i)}else 15===n&&((e,t,r,n,i)=>{const s=V(t,r);s&&"function"==typeof s[n]&&s[n].apply(s,i)})(...r);else 1===n?((t=>{const r=h.i=JSON.parse(t.i),n=t.I;h.t=importScripts.bind(e),h.v=t.v,h.C=t.C,h.I=n,h.K=postMessage.bind(e),h.P=t.P,p.set(n,t.D),g.set(n,t.O),e.importScripts=void 0,delete e.postMessage,delete e.WorkerGlobalScope,v("resolveUrl,get,set,apply").map((e=>{r[e]&&(r[e]=new Function("return "+r[e])())}))})(i),h.K([2])):3===n?(h.v=[...h.v,...i],h.x=1,h.K([4]),[...tt].map(rt),tt.length=0):tt.push(t)};e.onmessage=rt,postMessage([0])})(self);\n',
          ], { type: "text/javascript" }),
        ),
        { name: "Partytown 🎉" },
      ),
        X.onmessage = (t) => {
          const r = t.data;
          12 === r[0] ? U(X, r[1]) : e(X, r);
        },
        $.addEventListener(
          "pt1",
          (e) => H(X, f(e.detail.frameElement), e.detail),
        ));
  });
})(window);
