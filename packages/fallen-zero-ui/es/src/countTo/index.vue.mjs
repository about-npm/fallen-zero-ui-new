import { defineComponent as q, ref as n, computed as C, watch as E, onMounted as M, onBeforeUnmount as S, openBlock as $, createElementBlock as z, toDisplayString as R } from "vue";
import "./style/index.css";
const Y = /* @__PURE__ */ q({
  name: "fz-count-to",
  __name: "index",
  props: {
    startVal: { default: 0 },
    endVal: { default: (/* @__PURE__ */ new Date()).getFullYear() },
    duration: { default: 3e3 },
    autoplay: { type: Boolean, default: !0 },
    decimals: { default: 0 },
    decimal: { default: "." },
    separator: { default: "," },
    prefix: { default: "" },
    suffix: { default: "" },
    useEasing: { type: Boolean, default: !0 },
    easingFn: { type: Function, default: (c, m, d, e) => d * (-Math.pow(2, -10 * c / e) + 1) * 1024 / 1023 + m }
  },
  emits: ["callback", "mountedCallback"],
  setup(c, { expose: m, emit: d }) {
    const e = c, A = d, _ = (s) => !isNaN(parseFloat(s)), f = (s) => {
      let t = s.toFixed(Math.abs(e.decimals));
      t += "";
      const g = t.split(".");
      let v = g[0];
      const N = g.length > 1 ? e.decimal + g[1] : "", k = /(\d+)(\d{3})/;
      if (e.separator && !_(e.separator))
        for (; k.test(v); )
          v = v.replace(k, "$1" + e.separator + "$2");
      return e.prefix + v + N + e.suffix;
    }, u = n(e.startVal), p = n(f(e.startVal)), l = n(null), i = n(!1), o = n(e.duration), r = n(null), w = n(null), y = n(null), a = n(null), V = C(() => e.startVal > e.endVal), F = (s) => {
      r.value || (r.value = s), w.value = s;
      const t = s - r.value;
      y.value = o.value - t, e.useEasing ? V.value ? l.value = u.value - e.easingFn(
        t,
        0,
        u.value - e.endVal,
        o.value
      ) : l.value = e.easingFn(
        t,
        u.value,
        e.endVal - u.value,
        o.value
      ) : V.value ? l.value = u.value - (u.value - e.endVal) * (t / o.value) : l.value = u.value + (e.endVal - u.value) * (t / o.value), V.value ? l.value = l.value < e.endVal ? e.endVal : l.value : l.value = l.value > e.endVal ? e.endVal : l.value, p.value = f(l.value), t < o.value ? (a.value !== null && cancelAnimationFrame(a.value), a.value = requestAnimationFrame(F)) : (a.value !== null && cancelAnimationFrame(a.value), A("callback"));
    }, x = () => {
      u.value = e.startVal, r.value = null, o.value = e.duration, i.value = !1, a.value !== null && cancelAnimationFrame(a.value), a.value = requestAnimationFrame(F);
    }, b = () => {
      r.value = null, o.value = +(y.value || 0), u.value = +(l.value || 0), a.value !== null && cancelAnimationFrame(a.value), a.value = requestAnimationFrame(F), i.value = !1;
    }, h = () => {
      a.value !== null && cancelAnimationFrame(a.value), i.value = !0;
    }, B = () => {
      i.value ? b() : h();
    }, D = () => {
      r.value = null, a.value !== null && cancelAnimationFrame(a.value), p.value = f(e.startVal);
    };
    return E(
      () => [e.startVal, e.endVal],
      () => {
        e.autoplay && x();
      }
    ), M(() => {
      e.autoplay && x(), A("mountedCallback");
    }), S(() => {
      a.value !== null && cancelAnimationFrame(a.value);
    }), m({ pauseResume: B, pause: h, reset: D, resume: b, start: x }), (s, t) => ($(), z("span", null, R(p.value), 1));
  }
});
export {
  Y as default
};
