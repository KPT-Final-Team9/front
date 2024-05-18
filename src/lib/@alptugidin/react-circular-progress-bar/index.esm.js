import { useEffect as te, useRef as Q, useState as oe } from 'react';
import { useEffect as Z, useState as _ } from 'react';
var p = (e, n, s) => {
  let [a, f] = _(0),
    o = n - e;
  return (
    Z(() => {
      let m = setInterval(
        () => {
          o >= 0 ? (e <= n ? (f(e), e++) : clearInterval(m)) : e >= n ? (f(e), e--) : clearInterval(m);
        },
        s / Math.abs(o),
      );
    }, [n]),
    { animatedValue: a }
  );
};
import { useEffect as j, useState as ee } from 'react';
var E = (e, n = 1) => {
  let [s, a] = ee(!1),
    f = { root: null, rootMargin: '0px', threshold: n },
    o = i => {
      i[0].isIntersecting && a(!0);
    };
  return (
    j(() => {
      new IntersectionObserver(o, f).observe(e.current);
    }, []),
    { isVisible: s }
  );
};
import { jsx as d, jsxs as X } from 'react/jsx-runtime';
var re = ({
    progress: e = 0,
    range: n = { from: 0, to: 100 },
    showMiniCircle: s = !0,
    text: a = void 0,
    showValue: f = !0,
    sign: o = { value: '%', position: 'end' },
    sx: i,
  }) => {
    let {
        valueSize: m = 30,
        valueColor: r = '#000000',
        valueWeight: U = 'lighter',
        textSize: I = 13,
        valueFamily: R = 'Trebuchet MS',
        textFamily: M = 'Trebuchet MS',
        textColor: D = '#000000',
        textWeight: P = 'lighter',
        strokeColor: W = '#000000',
        barWidth: V = 5,
        loadingTime: c = 1e3,
        bgStrokeColor: w = '#ffffff',
        bgColor: b = { value: '#ffffff', transparency: '00' },
        strokeLinecap: h = 'round',
        shape: u = 'full',
        valueAnimation: y = !0,
        intersectionEnabled: S = !1,
        miniCircleSize: v = 5,
        miniCircleColor: z = '#ff0000',
      } = i,
      [F, A] = oe(0),
      C = Q(null),
      x = Q(0),
      { isVisible: g } = E(C),
      q = () => {
        switch (u) {
          case 'full':
            return 100;
          case 'threequarters':
            return 75;
          case 'half':
            return 50;
        }
      },
      O = () => {
        switch (u) {
          case 'full':
            return 'rotate(-90, 55, 55)';
          case 'threequarters':
            return 'rotate(135, 55, 55)';
          case 'half':
            return 'rotate(180, 55, 55)';
        }
      },
      G = () => {
        switch (u) {
          case 'full':
            return 1;
          case 'threequarters':
            return 0.75;
          case 'half':
            return 0.5;
        }
      },
      $ = () => {
        switch (u) {
          case 'full':
            return 0;
          case 'threequarters':
            return 135;
          case 'half':
            return 90;
        }
      },
      { animatedValue: N } = p(x.current / G(), F / G(), c);
    te(() => {
      ((S && g) || !S) && (A(e * G()), (x.current = F));
    }, [e, u, g]);
    let B = 2 * Math.PI * 50,
      J = (1 - (F + n.from) / n.to) * B;
    return X('div', {
      ref: C,
      style: { position: 'relative' },
      children: [
        X('svg', {
          viewBox: '0 0 110 110',
          style: { position: 'relative', zIndex: 50 },
          children: [
            d('circle', {
              cx: '55',
              cy: '55',
              r: '50',
              style: { transition: 'stroke-dashoffset ease-in-out', transitionDuration: c.toString().concat('ms') },
              strokeWidth: i.barWidth,
              transform: O(),
              fill: 'none',
              stroke: i.strokeColor,
              shapeRendering: 'geometricPrecision',
              strokeLinecap: h,
              strokeDasharray: B,
              strokeDashoffset: J,
            }),
            f &&
              d('text', {
                x: '50%',
                y: u === 'half' ? (a !== void 0 && a !== '' ? '35%' : '40%') : a !== void 0 && a !== '' ? '45%' : '50%',
                fontSize: m,
                fontWeight: U,
                textAnchor: 'middle',
                fontFamily: R,
                fill: r,
                children: d('tspan', {
                  dominantBaseline: a !== void 0 && a !== '' ? 'auto' : 'central',
                  children:
                    o.position === 'start' ? o.value + (y ? N : e).toString() : (y ? N : e).toString().concat(o.value),
                }),
              }),
            a !== void 0 &&
              a !== '' &&
              d('text', {
                x: '50%',
                y: u === 'half' ? '40%' : f ? '55%' : '50%',
                fontSize: I,
                fontWeight: P,
                textAnchor: 'middle',
                fill: D,
                fontFamily: M,
                children: d('tspan', { dominantBaseline: f || u === 'half' ? 'hanging' : 'middle', children: a }),
              }),
          ],
        }),
        d('svg', {
          viewBox: '0 0 110 110',
          style: {
            position: 'absolute',
            top: 0,
          },
          children: d('circle', {
            cx: '55',
            cy: '55',
            r: '50',
            fill: 'none',
            stroke: i.bgStrokeColor ?? 'white',
            strokeWidth: i.barWidth - 0.3,
            strokeDasharray: B,
            strokeLinecap: h,
            strokeDashoffset: (1 - q() / 100) * B,
            transform: O(),
            shapeRendering: 'geometricPrecision',
          }),
        }),
        s &&
          d('svg', {
            viewBox: '0 0 110 110',
            style: {
              position: 'absolute',
              top: 0,
              zIndex: '50',
              transition: 'transform ease-in-out',
              MozTransition: 'transform ease-in-out',
              transitionDuration: c.toString().concat('ms'),
            },
            transform: `rotate(${F * (3.6 / (n.to / 100)) - $()}, 0, 0)`,
            children: d('circle', { cx: '55', cy: '5', r: v, fill: z }),
          }),
        d('svg', {
          viewBox: '0 0 110 110',
          style: { position: 'absolute', top: '0', zIndex: '30' },
          children: d('circle', { cx: '55', cy: '55', r: 50 - i.barWidth / 2, fill: `${b.value + b.transparency}` }),
        }),
      ],
    });
  },
  ne = re;
import { useEffect as se, useRef as Y, useState as ae } from 'react';
import { jsx as t, jsxs as T } from 'react/jsx-runtime';
var ie = ({
    progress: e,
    showValue: n = !0,
    text: s,
    revertBackground: a = !1,
    range: f = { from: 0, to: 100 },
    sign: o = { value: '%', position: 'end' },
    sx: i,
  }) => {
    let {
        valueSize: m = 30,
        textSize: r = 14,
        textFamily: U = 'Trebuchet MS',
        valueFamily: I = 'Trebuchet MS',
        textColor: R = '#000000',
        valueColor: M = '#000000',
        textWeight: D = 'normal',
        valueWeight: P = 'normal',
        strokeLinecap: W = 'round',
        loadingTime: V = 500,
        shape: c = 'threequarters',
        valueAnimation: w = !0,
        intersectionEnabled: b = !0,
      } = i,
      [h, u] = ae(0),
      y = Y(0),
      S = Y(null),
      v = crypto.randomUUID().split('-')[0],
      { isVisible: z } = E(S),
      F = () => {
        switch (c) {
          case 'threequarters':
            return 75;
          case 'half':
            return 50;
        }
      },
      A = () => {
        switch (c) {
          case 'threequarters':
            return 'rotate(135, 55, 55)';
          case 'half':
            return 'rotate(180, 55, 55)';
        }
      },
      C = () => {
        switch (c) {
          case 'threequarters':
            return 0.75;
          case 'half':
            return 0.5;
        }
      },
      { animatedValue: x } = p(y.current / C(), h / C(), V);
    se(() => {
      ((b && z) || !b) && (u(e * C()), (y.current = h));
    }, [e, c, z]);
    let g = 2 * Math.PI * 50,
      q = (1 - (h + f.from) / f.to) * g;
    return T('div', {
      ref: S,
      style: { position: 'relative' },
      children: [
        t('svg', {
          viewBox: '0 0 110 110',
          style: {
            zIndex: -10,
            position: 'absolute',
          },
          children: t('circle', {
            r: '50',
            cx: '55',
            cy: '55',
            fill: 'none',
            strokeDasharray: g,
            strokeDashoffset: (1 - F() / 100) * g,
            strokeWidth: i.barWidth,
            stroke: i.bgColor,
            strokeLinecap: W,
            transform: A(),
          }),
        }),
        T('svg', {
          viewBox: '0 0 110 110',
          children: [
            a
              ? c === 'threequarters'
                ? T('linearGradient', {
                    id: v,
                    x1: '90.7089',
                    y1: '75.1526',
                    x2: '33.7868',
                    y2: '18.2305',
                    gradientUnits: 'userSpaceOnUse',
                    children: [
                      t('stop', { stopColor: '#FF0000' }),
                      t('stop', { offset: '0.34691', stopColor: '#FFB800' }),
                      t('stop', { offset: '0.775843', stopColor: '#C1FF00' }),
                      t('stop', { offset: '1', stopColor: '#00FF00' }),
                    ],
                  })
                : T('linearGradient', {
                    id: v,
                    gradientUnits: 'userSpaceOnUse',
                    children: [
                      t('stop', { stopColor: '#00FF00' }),
                      t('stop', { offset: '0.274348', stopColor: '#C1FF00' }),
                      t('stop', { offset: '0.676789', stopColor: '#FFB800' }),
                      t('stop', { offset: '1', stopColor: '#FF0000' }),
                    ],
                  })
              : c === 'threequarters'
                ? T('linearGradient', {
                    id: v,
                    x1: '90.7089',
                    y1: '75.1526',
                    x2: '33.7868',
                    y2: '18.2305',
                    gradientUnits: 'userSpaceOnUse',
                    children: [
                      t('stop', { stopColor: '#00FF00' }),
                      t('stop', { offset: '0.34691', stopColor: '#C1FF00' }),
                      t('stop', { offset: '0.775843', stopColor: '#FFB800' }),
                      t('stop', { offset: '1', stopColor: '#FF0000' }),
                    ],
                  })
                : T('linearGradient', {
                    id: v,
                    gradientUnits: 'userSpaceOnUse',
                    children: [
                      t('stop', { stopColor: '#FF0000' }),
                      t('stop', { offset: '0.274348', stopColor: '#FFB800' }),
                      t('stop', { offset: '0.676789', stopColor: '#C1FF00' }),
                      t('stop', { offset: '1', stopColor: '#00FF00' }),
                    ],
                  }),
            t('circle', {
              r: '50',
              cx: '55',
              cy: '55',
              fill: 'none',
              style: { transition: 'stroke-dashoffset ease-in-out', transitionDuration: V.toString().concat('ms') },
              strokeDasharray: g,
              strokeDashoffset: q,
              strokeWidth: i.barWidth,
              stroke: `url(#${v})`,
              strokeLinecap: W,
              transform: A(),
            }),
            n &&
              t('text', {
                x: '50%',
                y: c === 'half' ? (s !== void 0 && s !== '' ? '35%' : '40%') : s !== void 0 && s !== '' ? '45%' : '50%',
                fontSize: m,
                fontWeight: P,
                fontFamily: I,
                textAnchor: 'middle',
                fill: M,
                children: t('tspan', {
                  dominantBaseline: s !== void 0 && s !== '' ? 'baseline' : 'central',
                  children:
                    o.position === 'start' ? o.value + (w ? x : e).toString() : (w ? x : e).toString().concat(o.value),
                }),
              }),
            s !== void 0 &&
              s !== '' &&
              t('text', {
                x: '50%',
                y: c === 'half' ? '40%' : n ? '55%' : '50%',
                fontSize: r,
                fontFamily: U,
                fontWeight: D,
                textAnchor: 'middle',
                fill: R,
                dominantBaseline: n ? 'hanging' : 'start',
                children: t('tspan', { dominantBaseline: n || c === 'half' ? 'hanging' : 'middle', children: s }),
              }),
          ],
        }),
      ],
    });
  },
  le = ie;
import { useEffect as ce, useRef as L, useState as fe } from 'react';
import { jsx as H, jsxs as K } from 'react/jsx-runtime';
var ue = ({ circles: e, sx: n }) => {
    let {
        strokeLinecap: s = 'round',
        fontWeight: a = 'bold',
        fontFamily: f = 'Trebuchet MS',
        loadingTime: o = 1e3,
        valueAnimation: i = !0,
        intersectionEnabled: m = !0,
      } = n,
      [r, U] = fe({ circle1: 0, circle2: 0, circle3: 0, circle4: 0, circle5: 0 }),
      I = L(0),
      R = L(0),
      M = L(0),
      D = L(0),
      P = L(0),
      W = L(null),
      { isVisible: V } = E(W);
    e.sort((k, l) => l.value - k.value);
    let c = 50,
      w = 40,
      b = 30,
      h = 20,
      u = 10,
      y = [c, w, b, h, u],
      S = [8.5, 19.5, 31.5, 43.5, 54.5],
      v = (1 - (r.circle1 * 0.75) / 100) * 2 * Math.PI * c,
      z = (1 - (r.circle2 * 0.75) / 100) * 2 * Math.PI * w,
      F = (1 - (r.circle3 * 0.75) / 100) * 2 * Math.PI * b,
      A = (1 - (r.circle4 * 0.75) / 100) * 2 * Math.PI * h,
      C = (1 - (r.circle5 * 0.75) / 100) * 2 * Math.PI * u,
      x = [v, z, F, A, C],
      g = 6,
      q = 7,
      { animatedValue: O } = p(I.current, r.circle1, o),
      { animatedValue: G } = p(R.current, r.circle2, o),
      { animatedValue: $ } = p(M.current, r.circle3, o),
      { animatedValue: N } = p(D.current, r.circle4, o),
      { animatedValue: B } = p(P.current, r.circle5, o);
    ce(() => {
      ((m && V) || !m) &&
        (U({
          circle1: e[0].value,
          circle2: e[1].value,
          circle3: e[2] !== void 0 ? e[2].value : -1,
          circle4: e[3] !== void 0 ? e[3].value : -1,
          circle5: e[4] !== void 0 ? e[4].value : -1,
        }),
        (I.current = r.circle1),
        (R.current = r.circle2),
        (M.current = r.circle3),
        (D.current = r.circle4),
        (P.current = r.circle5));
    }, [e, V]);
    let J = [O, G, $, N, B].sort((k, l) => l - k);
    return K('div', {
      ref: W,
      style: { position: 'relative' },
      children: [
        H('svg', {
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
            (k, l) =>
              e[l]?.value !== -1 &&
              K(
                'text',
                {
                  x: '55',
                  y: S[l],
                  fontSize: q,
                  fontWeight: a,
                  fontFamily: f,
                  textAnchor: 'end',
                  children: [k?.text, ' ', i ? Math.round(J[l]) : k?.value, '%'],
                },
                l,
              ),
          ),
        }),
        H('svg', {
          id: 'bg',
          viewBox: '0 0 110 110',
          children: e.map((k, l) =>
            H(
              'g',
              {
                children:
                  e[l]?.value !== -1 &&
                  K('g', {
                    children: [
                      H('circle', {
                        cx: '55',
                        cy: '55',
                        r: 50 - 10 * l,
                        fill: 'none',
                        stroke: n.bgColor,
                        strokeWidth: 6,
                        strokeDasharray: 2 * Math.PI * (50 - 10 * l),
                        strokeDashoffset: (1 - 75 / 100) * 2 * Math.PI * (50 - 10 * l),
                        transform: 'rotate(-90, 55, 55)',
                        strokeLinecap: s,
                      }),
                      H('circle', {
                        cx: '55',
                        cy: '55',
                        r: y[l],
                        style: {
                          transition: `stroke 100ms, stroke-dashoffset ${o.toString().concat('ms')} ease-in-out`,
                        },
                        fill: 'none',
                        transform: 'rotate(-90, 55, 55)',
                        strokeDasharray: 2 * Math.PI * y[l],
                        strokeDashoffset: x[l],
                        stroke: k?.color,
                        strokeWidth: g,
                        strokeLinecap: s,
                      }),
                    ],
                  }),
              },
              l,
            ),
          ),
        }),
      ],
    });
  },
  de = ue;
export { ne as Flat, le as Heat, de as Nested };