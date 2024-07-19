import { defineComponent as O, computed as E, shallowRef as w, ref as S, watch as $, nextTick as x, onBeforeUnmount as U, openBlock as s, createElementBlock as i, createElementVNode as W, Fragment as H, renderList as L, renderSlot as j } from "vue";
import q from "./hook/useResize.mjs";
import { sum as D } from "../../utils/sum.mjs";
import { debounce as G } from "../../utils/debounce.mjs";
const X = /* @__PURE__ */ O({
  name: "fz-scroll",
  __name: "index",
  props: {
    list: {},
    modelValue: { type: Boolean, default: !0 },
    waitTime: { default: 0 },
    speed: { default: 800 },
    hover: { type: Boolean, default: !0 },
    wheel: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue"],
  setup(V, { emit: Y }) {
    const o = V, b = Y, c = E({
      get() {
        return o.modelValue;
      },
      set(e) {
        b("update:modelValue", e);
      }
    }), m = w(), t = w(), d = w([]), u = S(1), r = S(0), A = E(() => Array.from({ length: u.value }, () => o.list));
    function M() {
      var n;
      const e = [];
      for (const l of Array.from(((n = d.value) == null ? void 0 : n[0].children) ?? []))
        e.push(l.clientHeight);
      return e.reduce((l, g) => (l.push(D([l.at(-1) ?? 0, g])), l), [0]);
    }
    function p(e) {
      if (t.value) {
        if (typeof e == "number" || typeof e > "u") {
          t.value.style.transition = `transform ${e ?? o.speed}ms linear`;
          return;
        }
        t.value.style.transition = e;
      }
    }
    let f = null, a = [];
    function R() {
      f && (clearTimeout(f), f = null);
    }
    function h() {
      R(), r.value > a.length - 2 && t.value && (p(0), r.value = 0, t.value.style.transform = "translateY(0px)"), f = setTimeout(() => {
        p(), t.value && (r.value++, t.value.style.transform = `translateY(-${a[r.value] || 0}px)`);
      }, o.waitTime);
    }
    function N() {
      var e;
      !c.value || u.value === 1 || (a = M(), h(), (e = t.value) == null || e.addEventListener("transitionend", h, !0));
    }
    function y() {
      N();
    }
    function v() {
      R(), p(0), t.value && t.value.removeEventListener("transitionend", h, !0);
    }
    function k(e) {
      t.value && (r.value += e, e === -1 && r.value < 0 && (r.value = a.length - 2), e === 1 && r.value > a.length - 2 && (r.value = 0), t.value.style.transform = `translateY(${-1 * a[r.value] || 0}px)`);
    }
    function C(e) {
      !o.hover || !o.wheel || u.value === 1 || (e.deltaY > 0 ? k(
        1
        /* DOWN */
      ) : k(
        -1
        /* UP */
      ));
    }
    function z() {
      r.value = 0, v(), t.value && (t.value.style.transform = "translateY(0px)");
    }
    const T = G(() => {
      var l;
      const e = m.value, n = t.value;
      !e || !n || (u.value = (((l = d.value[0]) == null ? void 0 : l.clientHeight) ?? 0) - e.clientHeight < 0 ? 1 : 2, x(() => {
        c.value && u.value > 1 && y(), u.value === 1 && z();
      }));
    }, 200);
    function F(e) {
      e.forEach(() => {
        T();
      });
    }
    return $(() => o.list, () => {
      u.value = 1, z(), x(() => {
        T();
      });
    }), $(c, (e) => {
      if (e) {
        y();
        return;
      }
      v();
    }), q([m], F), U(() => {
      v();
    }), (e, n) => (s(), i("main", {
      ref_key: "rootRef",
      ref: m,
      class: "fz-scroll"
    }, [
      W("section", {
        ref_key: "wrapperRef",
        ref: t,
        class: "fz-scroll-list",
        onWheel: n[0] || (n[0] = (l) => e.wheel && e.hover && C(l)),
        onMouseover: n[1] || (n[1] = (l) => e.hover && v()),
        onMouseleave: n[2] || (n[2] = (l) => e.hover && y())
      }, [
        (s(!0), i(H, null, L(A.value, (l, g) => (s(), i("ul", {
          ref_for: !0,
          ref_key: "listRef",
          ref: d,
          key: g,
          class: "fz-scroll-list"
        }, [
          (s(!0), i(H, null, L(l, (I, B) => (s(), i("li", {
            key: B,
            class: "fz-scroll-list"
          }, [
            j(e.$slots, "item", {
              data: I,
              index: B
            })
          ]))), 128))
        ]))), 128))
      ], 544)
    ], 512));
  }
});
export {
  X as default
};
