import { defineComponent as O, computed as _, ref as i, nextTick as Y, onMounted as U, onBeforeUnmount as j, watch as $, openBlock as v, createElementBlock as c, createElementVNode as L, Fragment as N, renderList as V, renderSlot as q, toDisplayString as G } from "vue";
import { debounce as J } from "../../utils/debounce.mjs";
import "./style/index.css";
const K = { class: "fz-scroll" }, Q = { class: "fz-scroll-container" }, X = ["data-index"], te = /* @__PURE__ */ O({
  name: "fz-scroll",
  __name: "index",
  props: {
    list: {},
    step: { default: 800 },
    modelValue: { type: Boolean, default: !0 },
    wheel: { type: Boolean, default: !0 },
    hover: { type: Boolean, default: !0 },
    delay: { default: 0 },
    waitTime: { default: 0 }
  },
  emits: ["update:modelValue"],
  setup(I, { emit: M }) {
    const r = I, P = M, S = _({
      get() {
        return r.modelValue;
      },
      set(e) {
        P("update:modelValue", e);
      }
    }), u = i(1), W = _(() => Array(u.value).fill(1).map((e, l) => ({
      id: l + e,
      list: r.list
    })));
    let t;
    const d = new IntersectionObserver((e) => {
      e.forEach((o) => {
        o.target.getAttribute("data-name") === "box" && (u.value = o.intersectionRatio < 1 ? 2 : 1, Y(() => {
          setTimeout(R, r.delay);
        }));
      });
      const l = e.filter((o) => o.target.getAttribute("data-index")), s = l.find((o) => o.intersectionRatio === 1);
      s && (a.value = Number(s.target.getAttribute("data-index"))), l.forEach((o) => {
        d.unobserve(o.target);
      });
    }), n = i(null), k = i([]), m = i([]), a = i(0), f = _(() => [
      0,
      ...m.value.slice(1, Math.floor(m.value.length / u.value) + 1).map((e) => e.offsetTop)
    ]), p = J(() => {
      u.value = 1, t == null || t.cancel(), t = void 0, Y(() => {
        n.value && (d.unobserve(n.value), d.observe(n.value));
      });
    }, 200), w = i(!1), E = i(!1), z = () => {
      var e, l;
      if (k.value.length > 1) {
        if (w.value)
          return;
        if (t) {
          t.play();
          return;
        }
        if (a.value) {
          t = (e = n.value) == null ? void 0 : e.animate(
            [
              {
                transform: `translateY(${-1 * f.value[a.value]}px)`
              },
              {
                transform: "translateY(-50%)"
              }
            ],
            {
              duration: r.step * (r.list.length - a.value),
              easing: "linear "
            }
          );
          const s = () => {
            a.value = 0, t == null || t.removeEventListener("finish", s), t = void 0, z();
          };
          t == null || t.addEventListener("finish", s);
          return;
        }
        t = (l = n.value) == null ? void 0 : l.animate(
          [
            {
              transform: "translateY(0px)"
            },
            {
              transform: "translateY(-50%)"
            }
          ],
          {
            duration: r.step * r.list.length,
            iterations: 1 / 0,
            easing: "linear "
          }
        );
      }
    }, C = () => {
      t && (t.pause(), E.value || (m.value.forEach((e) => {
        d.observe(e);
      }), E.value = !0));
    }, D = () => {
      w.value = !1, E.value = !1, z();
    };
    let g = null;
    const h = (e) => {
      if (n.value) {
        if (typeof e == "number" || typeof e > "u") {
          n.value.style.transition = `transform ${e ?? r.step}ms linear`;
          return;
        }
        n.value.style.transition = e;
      }
    }, T = () => {
      g = setTimeout(() => {
        a.value >= f.value.length - 1 && (h(0), a.value = -1, y(1, !1)), setTimeout(() => {
          h(), y(1, !1);
        }, 100);
      }, r.waitTime);
    }, x = () => {
      g && (clearTimeout(g), g = null), n.value && (h(0), n.value.removeEventListener("transitionend", T, !0));
    }, F = () => {
      n.value && (h(), T(), n.value.addEventListener("transitionend", T, !0));
    }, y = (e, l = !0) => {
      n.value && (a.value += e, e === -1 && a.value < 0 && (a.value = f.value.length - 2), e === 1 && a.value > f.value.length - (l ? 2 : 1) && (a.value = 0), n.value.style.transform = `translateY(${-1 * f.value[a.value]}px)`);
    }, H = (e) => {
      u.value !== 1 && (w.value = !0, t == null || t.cancel(), t = void 0, e.deltaY > 0 ? y(
        1
        /* DOWN */
      ) : y(
        -1
        /* UP */
      ));
    }, R = () => {
      if (!(!S.value || u.value === 1)) {
        if (!r.waitTime) {
          D();
          return;
        }
        F();
      }
    }, B = () => {
      if (!r.waitTime) {
        C();
        return;
      }
      x();
    };
    return U(() => {
      p(), window.addEventListener("resize", p);
    }), j(() => {
      window.removeEventListener("resize", p), x();
    }), $(
      () => r.list,
      () => {
        p();
      }
    ), $(S, (e) => {
      if (e) {
        R();
        return;
      }
      B();
    }), (e, l) => (v(), c("div", K, [
      L("div", Q, [
        L("div", {
          ref_key: "boxRef",
          ref: n,
          class: "fz-scroll-container-box",
          "data-name": "box",
          onWheel: l[0] || (l[0] = (s) => e.wheel && e.hover && H(s)),
          onMouseover: l[1] || (l[1] = (s) => e.hover && B()),
          onMouseleave: l[2] || (l[2] = (s) => e.hover && R())
        }, [
          (v(!0), c(N, null, V(W.value, (s) => (v(), c("div", {
            key: s.id,
            ref_for: !0,
            ref_key: "listRefs",
            ref: k,
            class: "fz-scroll-container-box__list"
          }, [
            (v(!0), c(N, null, V(s.list, (o, b) => (v(), c("div", {
              key: b,
              ref_for: !0,
              ref_key: "itemRefs",
              ref: m,
              "data-index": b,
              class: "fz-scroll-container-box__list-item"
            }, [
              q(e.$slots, "default", {
                index: b,
                data: o
              }, () => [
                L("div", null, G(o), 1)
              ])
            ], 8, X))), 128))
          ]))), 128))
        ], 544)
      ])
    ]));
  }
});
export {
  te as default
};
