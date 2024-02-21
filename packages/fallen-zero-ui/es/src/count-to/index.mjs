import s from "./index.vue.mjs";
const e = (o, c) => {
  if (o.install = (n) => {
    for (const t of [o, ...Object.values(c ?? {})])
      n.component(t.name, t);
  }, c)
    for (const [n, t] of Object.entries(c))
      o[n] = t;
  return o;
}, l = e(s);
export {
  l as CountTo,
  l as default
};
