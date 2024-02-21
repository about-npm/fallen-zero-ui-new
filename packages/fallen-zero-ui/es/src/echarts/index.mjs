import e from "./index.vue.mjs";
const n = (o, c) => {
  if (o.install = (s) => {
    for (const t of [o, ...Object.values(c ?? {})])
      s.component(t.name, t);
  }, c)
    for (const [s, t] of Object.entries(c))
      o[s] = t;
  return o;
}, r = n(e);
export {
  r as Echarts,
  r as default
};
