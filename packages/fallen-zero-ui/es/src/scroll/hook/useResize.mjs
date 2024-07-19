import { getCurrentInstance as f, onMounted as v, onBeforeUnmount as o } from "vue";
function b(t, i) {
  const u = /* @__PURE__ */ new WeakMap();
  let n = null;
  function s(e) {
    if (!e)
      return;
    (Array.isArray(e) ? e : [e]).forEach((r) => {
      !r.value || !n || u.has(r.value) || (u.set(r.value, !0), n.observe(r.value));
    });
  }
  function a(e) {
    if (!e)
      return;
    (Array.isArray(e) ? e : [e]).forEach((r) => {
      !r.value || !n || !u.has(r.value) || (u.delete(r.value), n.unobserve(r.value));
    });
  }
  return f() && (v(() => {
    n = new ResizeObserver(i), s(t);
  }), o(() => {
    n && (a(t), n.disconnect(), n = null);
  })), {
    observe: s,
    unobserve: a
  };
}
export {
  b as default
};
