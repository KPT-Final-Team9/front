'use strict';
var Y = Object.defineProperty;
var ee = Object.getOwnPropertyDescriptor;
var te = Object.getOwnPropertyNames;
var oe = Object.prototype.hasOwnProperty;
var re = (e, o) => {
    for (var r in o) Y(e, r, { get: o[r], enumerable: !0 });
  },
  ne = (e, o, r, n) => {
    if ((o && typeof o == 'object') || typeof o == 'function')
      for (let s of te(o))
        !oe.call(e, s) && s !== r && Y(e, s, { get: () => o[s], enumerable: !(n = ee(o, s)) || n.enumerable });
    return e;
  };
var se = e => ne(Y({}, '__esModule', { value: !0 }), e);
var ce = {};
re(ce, { Flat: () => Z, Heat: () => _, Nested: () => j });
module.exports = se(ce);
var M = require('react');
var J = require('react'),
  m = (e, o, r) => {
    let [n, s] = (0, J.useState)(0),
      a = o - e;
    return (
      (0, J.useEffect)(() => {
        let v = setInterval(
          () => {
            a >= 0 ? (e <= o ? (s(e), e++) : clearInterval(v)) : e >= o ? (s(e), e--) : clearInterval(v);
          },
          r / Math.abs(a),
        );
      }, [o]),
      { animatedValue: n }
    );
  };
var K = require('react'),
  q = (e, o = 1) => {
    let [r, n] = (0, K.useState)(!1),
      s = { root: null, rootMargin: '0px', threshold: o },
      a = l => {
        l[0].isIntersecting && n(!0);
      };
    return (
      (0, K.useEffect)(() => {
        new IntersectionObserver(a, s).observe(e.current);
      }, []),
      { isVisible: r }
    );
  };
var u = require('react/jsx-runtime'),
  ae = ({
    progress: e = 0,
    range: o = { from: 0, to: 100 },
    showMiniCircle: r = !0,
    text: n = void 0,
    showValue: s = !0,
    sign: a = { value: '%', position: 'end' },
    sx: l,
  }) => {
    let {
        valueSize: v = 30,
        valueColor: i = '#000000',
        valueWeight: G = 'lighter',
        textSize: P = 13,
        valueFamily: W = 'Trebuchet MS',
        textFamily: V = 'Trebuchet MS',
        textColor: w = '#000000',
        textWeight: z = 'lighter',
        strokeColor: A = '#000000',
        barWidth: B = 5,
        loadingTime: f = 1e3,
        bgStrokeColor: E = '#ffffff',
        bgColor: F = { value: '#ffffff', transparency: '00' },
        strokeLinecap: g = 'round',
        shape: d = 'full',
        valueAnimation: C = !0,
        intersectionEnabled: I = !1,
        miniCircleSize: b = 5,
        miniCircleColor: T = '#ff0000',
      } = l,
      [k, L] = (0, M.useState)(0),
      S = (0, M.useRef)(null),
      R = (0, M.useRef)(0),
      { isVisible: y } = q(S),
      H = () => {
        switch (d) {
          case 'full':
            return 100;
          case 'threequarters':
            return 75;
          case 'half':
            return 50;
        }
      },
      N = () => {
        switch (d) {
          case 'full':
            return 'rotate(-90, 55, 55)';
          case 'threequarters':
            return 'rotate(135, 55, 55)';
          case 'half':
            return 'rotate(180, 55, 55)';
        }
      },
      O = () => {
        switch (d) {
          case 'full':
            return 1;
          case 'threequarters':
            return 0.75;
          case 'half':
            return 0.5;
        }
      },
      Q = () => {
        switch (d) {
          case 'full':
            return 0;
          case 'threequarters':
            return 135;
          case 'half':
            return 90;
        }
      },
      { animatedValue: $ } = m(R.current / O(), k / O(), f);
    (0, M.useEffect)(() => {
      ((I && y) || !I) && (L(e * O()), (R.current = k));
    }, [e, d, y]);
    let U = 2 * Math.PI * 50,
      X = (1 - (k + o.from) / o.to) * U;
    return (0, u.jsxs)('div', {
      ref: S,
      style: { position: 'relative' },
      children: [
        (0, u.jsxs)('svg', {
          viewBox: '0 0 110 110',
          style: { position: 'relative', zIndex: 50 },
          children: [
            (0, u.jsx)('circle', {
              cx: '55',
              cy: '55',
              r: '50',
              style: { transition: 'stroke-dashoffset ease-in-out', transitionDuration: f.toString().concat('ms') },
              strokeWidth: l.barWidth,
              transform: N(),
              fill: 'none',
              stroke: l.strokeColor,
              shapeRendering: 'geometricPrecision',
              strokeLinecap: g,
              strokeDasharray: U,
              strokeDashoffset: X,
            }),
            s &&
              (0, u.jsx)('text', {
                x: '50%',
                y: d === 'half' ? (n !== void 0 && n !== '' ? '35%' : '40%') : n !== void 0 && n !== '' ? '45%' : '50%',
                fontSize: v,
                fontWeight: G,
                textAnchor: 'middle',
                fontFamily: W,
                fill: i,
                children: (0, u.jsx)('tspan', {
                  dominantBaseline: n !== void 0 && n !== '' ? 'auto' : 'central',
                  children:
                    a.position === 'start' ? a.value + (C ? $ : e).toString() : (C ? $ : e).toString().concat(a.value),
                }),
              }),
            n !== void 0 &&
              n !== '' &&
              (0, u.jsx)('text', {
                x: '50%',
                y: d === 'half' ? '40%' : s ? '55%' : '50%',
                fontSize: P,
                fontWeight: z,
                textAnchor: 'middle',
                fill: w,
                fontFamily: V,
                children: (0, u.jsx)('tspan', {
                  dominantBaseline: s || d === 'half' ? 'hanging' : 'middle',
                  children: n,
                }),
              }),
          ],
        }),
        (0, u.jsx)('svg', {
          viewBox: '0 0 110 110',
          style: { position: 'absolute', top: 0 },
          children: (0, u.jsx)('circle', {
            cx: '55',
            cy: '55',
            r: '50',
            fill: 'none',
            stroke: l.bgStrokeColor ?? 'white',
            strokeWidth: l.barWidth - 0.3,
            strokeDasharray: U,
            strokeLinecap: g,
            strokeDashoffset: (1 - H() / 100) * U,
            transform: N(),
            shapeRendering: 'geometricPrecision',
          }),
        }),
        r &&
          (0, u.jsx)('svg', {
            viewBox: '0 0 110 110',
            style: {
              position: 'absolute',
              top: 0,
              zIndex: '50',
              transition: 'transform ease-in-out',
              MozTransition: 'transform ease-in-out',
              transitionDuration: f.toString().concat('ms'),
            },
            transform: `rotate(${k * (3.6 / (o.to / 100)) - Q()}, 0, 0)`,
            children: (0, u.jsx)('circle', { cx: '55', cy: '5', r: b, fill: T }),
          }),
        (0, u.jsx)('svg', {
          viewBox: '0 0 110 110',
          style: { position: 'absolute', top: '0', zIndex: '30' },
          children: (0, u.jsx)('circle', {
            cx: '55',
            cy: '55',
            r: 50 - l.barWidth / 2,
            fill: `${F.value + F.transparency}`,
          }),
        }),
      ],
    });
  },
  Z = ae;
var D = require('react');
var t = require('react/jsx-runtime'),
  ie = ({
    progress: e,
    showValue: o = !0,
    text: r,
    revertBackground: n = !1,
    range: s = { from: 0, to: 100 },
    sign: a = { value: '%', position: 'end' },
    sx: l,
  }) => {
    let {
        valueSize: v = 30,
        textSize: i = 14,
        textFamily: G = 'Trebuchet MS',
        valueFamily: P = 'Trebuchet MS',
        textColor: W = '#000000',
        valueColor: V = '#000000',
        textWeight: w = 'normal',
        valueWeight: z = 'normal',
        strokeLinecap: A = 'round',
        loadingTime: B = 500,
        shape: f = 'threequarters',
        valueAnimation: E = !0,
        intersectionEnabled: F = !0,
      } = l,
      [g, d] = (0, D.useState)(0),
      C = (0, D.useRef)(0),
      I = (0, D.useRef)(null),
      b = crypto.randomUUID().split('-')[0],
      { isVisible: T } = q(I),
      k = () => {
        switch (f) {
          case 'threequarters':
            return 75;
          case 'half':
            return 50;
        }
      },
      L = () => {
        switch (f) {
          case 'threequarters':
            return 'rotate(135, 55, 55)';
          case 'half':
            return 'rotate(180, 55, 55)';
        }
      },
      S = () => {
        switch (f) {
          case 'threequarters':
            return 0.75;
          case 'half':
            return 0.5;
        }
      },
      { animatedValue: R } = m(C.current / S(), g / S(), B);
    (0, D.useEffect)(() => {
      ((F && T) || !F) && (d(e * S()), (C.current = g));
    }, [e, f, T]);
    let y = 2 * Math.PI * 50,
      H = (1 - (g + s.from) / s.to) * y;
    return (0, t.jsxs)('div', {
      ref: I,
      style: { position: 'relative' },
      children: [
        (0, t.jsx)('svg', {
          viewBox: '0 0 110 110',
          style: { zIndex: -10, position: 'absolute' },
          children: (0, t.jsx)('circle', {
            r: '50',
            cx: '55',
            cy: '55',
            fill: 'none',
            strokeDasharray: y,
            strokeDashoffset: (1 - k() / 100) * y,
            strokeWidth: l.barWidth,
            stroke: l.bgColor,
            strokeLinecap: A,
            transform: L(),
          }),
        }),
        (0, t.jsxs)('svg', {
          viewBox: '0 0 110 110',
          children: [
            n
              ? f === 'threequarters'
                ? (0, t.jsxs)('linearGradient', {
                    id: b,
                    x1: '90.7089',
                    y1: '75.1526',
                    x2: '33.7868',
                    y2: '18.2305',
                    gradientUnits: 'userSpaceOnUse',
                    children: [
                      (0, t.jsx)('stop', { stopColor: '#FF0000' }),
                      (0, t.jsx)('stop', { offset: '0.34691', stopColor: '#FFB800' }),
                      (0, t.jsx)('stop', { offset: '0.775843', stopColor: '#C1FF00' }),
                      (0, t.jsx)('stop', { offset: '1', stopColor: '#00FF00' }),
                    ],
                  })
                : (0, t.jsxs)('linearGradient', {
                    id: b,
                    gradientUnits: 'userSpaceOnUse',
                    children: [
                      (0, t.jsx)('stop', { stopColor: '#00FF00' }),
                      (0, t.jsx)('stop', { offset: '0.274348', stopColor: '#C1FF00' }),
                      (0, t.jsx)('stop', { offset: '0.676789', stopColor: '#FFB800' }),
                      (0, t.jsx)('stop', { offset: '1', stopColor: '#FF0000' }),
                    ],
                  })
              : f === 'threequarters'
                ? (0, t.jsxs)('linearGradient', {
                    id: b,
                    x1: '90.7089',
                    y1: '75.1526',
                    x2: '33.7868',
                    y2: '18.2305',
                    gradientUnits: 'userSpaceOnUse',
                    children: [
                      (0, t.jsx)('stop', { stopColor: '#00FF00' }),
                      (0, t.jsx)('stop', { offset: '0.34691', stopColor: '#C1FF00' }),
                      (0, t.jsx)('stop', { offset: '0.775843', stopColor: '#FFB800' }),
                      (0, t.jsx)('stop', { offset: '1', stopColor: '#FF0000' }),
                    ],
                  })
                : (0, t.jsxs)('linearGradient', {
                    id: b,
                    gradientUnits: 'userSpaceOnUse',
                    children: [
                      (0, t.jsx)('stop', { stopColor: '#FF0000' }),
                      (0, t.jsx)('stop', { offset: '0.274348', stopColor: '#FFB800' }),
                      (0, t.jsx)('stop', { offset: '0.676789', stopColor: '#C1FF00' }),
                      (0, t.jsx)('stop', { offset: '1', stopColor: '#00FF00' }),
                    ],
                  }),
            (0, t.jsx)('circle', {
              r: '50',
              cx: '55',
              cy: '55',
              fill: 'none',
              style: { transition: 'stroke-dashoffset ease-in-out', transitionDuration: B.toString().concat('ms') },
              strokeDasharray: y,
              strokeDashoffset: H,
              strokeWidth: l.barWidth,
              stroke: `url(#${b})`,
              strokeLinecap: A,
              transform: L(),
            }),
            o &&
              (0, t.jsx)('text', {
                x: '50%',
                y: f === 'half' ? (r !== void 0 && r !== '' ? '35%' : '40%') : r !== void 0 && r !== '' ? '45%' : '50%',
                fontSize: v,
                fontWeight: z,
                fontFamily: P,
                textAnchor: 'middle',
                fill: V,
                children: (0, t.jsx)('tspan', {
                  dominantBaseline: r !== void 0 && r !== '' ? 'baseline' : 'central',
                  children:
                    a.position === 'start' ? a.value + (E ? R : e).toString() : (E ? R : e).toString().concat(a.value),
                }),
              }),
            r !== void 0 &&
              r !== '' &&
              (0, t.jsx)('text', {
                x: '50%',
                y: f === 'half' ? '40%' : o ? '55%' : '50%',
                fontSize: i,
                fontFamily: G,
                fontWeight: w,
                textAnchor: 'middle',
                fill: W,
                dominantBaseline: o ? 'hanging' : 'start',
                children: (0, t.jsx)('tspan', {
                  dominantBaseline: o || f === 'half' ? 'hanging' : 'middle',
                  children: r,
                }),
              }),
          ],
        }),
      ],
    });
  },
  _ = ie;
var p = require('react');
var h = require('react/jsx-runtime'),
  le = ({ circles: e, sx: o }) => {
    let {
        strokeLinecap: r = 'round',
        fontWeight: n = 'bold',
        fontFamily: s = 'Trebuchet MS',
        loadingTime: a = 1e3,
        valueAnimation: l = !0,
        intersectionEnabled: v = !0,
      } = o,
      [i, G] = (0, p.useState)({ circle1: 0, circle2: 0, circle3: 0, circle4: 0, circle5: 0 }),
      P = (0, p.useRef)(0),
      W = (0, p.useRef)(0),
      V = (0, p.useRef)(0),
      w = (0, p.useRef)(0),
      z = (0, p.useRef)(0),
      A = (0, p.useRef)(null),
      { isVisible: B } = q(A);
    e.sort((x, c) => c.value - x.value);
    let f = 50,
      E = 40,
      F = 30,
      g = 20,
      d = 10,
      C = [f, E, F, g, d],
      I = [8.5, 19.5, 31.5, 43.5, 54.5],
      b = (1 - (i.circle1 * 0.75) / 100) * 2 * Math.PI * f,
      T = (1 - (i.circle2 * 0.75) / 100) * 2 * Math.PI * E,
      k = (1 - (i.circle3 * 0.75) / 100) * 2 * Math.PI * F,
      L = (1 - (i.circle4 * 0.75) / 100) * 2 * Math.PI * g,
      S = (1 - (i.circle5 * 0.75) / 100) * 2 * Math.PI * d,
      R = [b, T, k, L, S],
      y = 6,
      H = 7,
      { animatedValue: N } = m(P.current, i.circle1, a),
      { animatedValue: O } = m(W.current, i.circle2, a),
      { animatedValue: Q } = m(V.current, i.circle3, a),
      { animatedValue: $ } = m(w.current, i.circle4, a),
      { animatedValue: U } = m(z.current, i.circle5, a);
    (0, p.useEffect)(() => {
      ((v && B) || !v) &&
        (G({
          circle1: e[0].value,
          circle2: e[1].value,
          circle3: e[2] !== void 0 ? e[2].value : -1,
          circle4: e[3] !== void 0 ? e[3].value : -1,
          circle5: e[4] !== void 0 ? e[4].value : -1,
        }),
        (P.current = i.circle1),
        (W.current = i.circle2),
        (V.current = i.circle3),
        (w.current = i.circle4),
        (z.current = i.circle5));
    }, [e, B]);
    let X = [N, O, Q, $, U].sort((x, c) => c - x);
    return (0, h.jsxs)('div', {
      ref: A,
      style: { position: 'relative' },
      children: [
        (0, h.jsx)('svg', {
          id: 'texts',
          viewBox: '0 0 55 60',
          width: '43%',
          style: {
            position: 'absolute',
            transitionProperty: 'all',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDuration: '150ms',
          },
          children: e.map(
            (x, c) =>
              e[c]?.value !== -1 &&
              (0, h.jsxs)(
                'text',
                {
                  x: '55',
                  y: I[c],
                  fontSize: H,
                  fontWeight: n,
                  fontFamily: s,
                  textAnchor: 'end',
                  children: [x?.text, ' ', l ? Math.round(X[c]) : x?.value, '%'],
                },
                c,
              ),
          ),
        }),
        (0, h.jsx)('svg', {
          id: 'bg',
          viewBox: '0 0 110 110',
          children: e.map((x, c) =>
            (0, h.jsx)(
              'g',
              {
                children:
                  e[c]?.value !== -1 &&
                  (0, h.jsxs)('g', {
                    children: [
                      (0, h.jsx)('circle', {
                        cx: '55',
                        cy: '55',
                        r: 50 - 10 * c,
                        fill: 'none',
                        stroke: o.bgColor,
                        strokeWidth: 6,
                        strokeDasharray: 2 * Math.PI * (50 - 10 * c),
                        strokeDashoffset: (1 - 75 / 100) * 2 * Math.PI * (50 - 10 * c),
                        transform: 'rotate(-90, 55, 55)',
                        strokeLinecap: r,
                      }),
                      (0, h.jsx)('circle', {
                        cx: '55',
                        cy: '55',
                        r: C[c],
                        style: {
                          transition: `stroke 100ms, stroke-dashoffset ${a.toString().concat('ms')} ease-in-out`,
                        },
                        fill: 'none',
                        transform: 'rotate(-90, 55, 55)',
                        strokeDasharray: 2 * Math.PI * C[c],
                        strokeDashoffset: R[c],
                        stroke: x?.color,
                        strokeWidth: y,
                        strokeLinecap: r,
                      }),
                    ],
                  }),
              },
              c,
            ),
          ),
        }),
      ],
    });
  },
  j = le;
0 && (module.exports = { Flat, Heat, Nested });