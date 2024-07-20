import * as o from "./src/index.mjs";
import { Button as s } from "./src/button/index.mjs";
import { CountTo as m } from "./src/countTo/index.mjs";
import { Scroll as a } from "./src/scroll/index.mjs";
import { Echarts as i } from "./src/echarts/index.mjs";
const e = {
  install: (r) => {
    for (const t in o)
      r.use(o[t]);
  }
};
export {
  s as Button,
  m as CountTo,
  i as Echarts,
  a as Scroll,
  e as default
};
