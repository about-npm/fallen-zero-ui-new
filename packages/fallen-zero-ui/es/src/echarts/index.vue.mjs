import { defineComponent as m, shallowRef as p, watch as d, nextTick as l, onBeforeUnmount as f, openBlock as h, createElementBlock as u, createElementVNode as _ } from "vue";
import { debounce as i } from "../../utils/debounce.mjs";
import "../../node_modules/.pnpm/echarts@5.5.1/node_modules/echarts/index.mjs";
import "./style/index.css";
import "../../node_modules/.pnpm/echarts-liquidfill@3.1.0_echarts@5.5.1/node_modules/echarts-liquidfill/src/liquidFillSeries.mjs";
import "../../node_modules/.pnpm/echarts-liquidfill@3.1.0_echarts@5.5.1/node_modules/echarts-liquidfill/src/liquidFillView.mjs";
import { init as v } from "../../node_modules/.pnpm/echarts@5.5.1/node_modules/echarts/lib/core/echarts.mjs";
const w = { class: "fz-echarts" }, y = /* @__PURE__ */ m({
  name: "fz-echarts",
  __name: "index",
  props: {
    option: {}
  },
  emits: ["reload", "getEcharts"],
  setup(n, { emit: s }) {
    const o = p(null), t = n, r = s;
    let e;
    const a = () => {
      e.clear(), t.option && (e.setOption(t.option), r("getEcharts", e));
    }, c = () => {
      !t.option || !o.value || (e && !e.isDisposed() && e.dispose(), e = v(o.value), a());
    };
    return d(
      () => t.option,
      () => {
        l(() => {
          c();
        });
      },
      { immediate: !0 }
    ), window.addEventListener(
      "resize",
      i(() => {
        r("reload"), e.resize();
      }, 200)
    ), f(() => {
      e.dispose(), window.removeEventListener(
        "resize",
        i(() => {
          r("reload"), e.resize();
        }, 200)
      );
    }), (z, E) => (h(), u("div", w, [
      _("div", {
        ref_key: "echartsRef",
        ref: o,
        class: "fz-echarts-main"
      }, null, 512)
    ]));
  }
});
export {
  y as default
};
