import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, renderSlot } from "vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "fz-button"
  },
  __name: "button",
  props: {
    type: {}
  },
  setup(__props) {
    const buttonProps = __props;
    const buttonStyle = computed(() => {
      return {
        [`fz-button--${buttonProps.type}`]: buttonProps.type
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(["fz-button", buttonStyle.value])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const withInstall = (comp) => {
  comp.install = (app) => {
    const name = comp.name;
    app.component(name, comp);
  };
  return comp;
};
const Button = withInstall(_sfc_main);
const components = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button
}, Symbol.toStringTag, { value: "Module" }));
const index = {
  install: (app) => {
    for (const c in components) {
      app.use(components[c]);
    }
  }
};
export {
  Button,
  index as default
};
