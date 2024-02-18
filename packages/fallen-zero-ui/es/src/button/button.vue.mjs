import { defineComponent as r, computed as u, openBlock as s, createElementBlock as p, normalizeClass as a, renderSlot as l } from "vue";
import "./style/index.css";
const b = /* @__PURE__ */ r({
  name: "fz-button",
  __name: "button",
  props: {
    type: {}
  },
  setup(e) {
    const t = e, o = u(() => ({
      [`fz-button--${t.type}`]: t.type
    }));
    return (n, c) => (s(), p("button", {
      class: a(["fz-button", o.value])
    }, [
      l(n.$slots, "default")
    ], 2));
  }
});
export {
  b as default
};
