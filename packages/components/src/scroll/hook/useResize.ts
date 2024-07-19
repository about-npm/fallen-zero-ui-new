/*
 * @Author       : fallen_zero
 * @Date         : 2024-07-15 10:11:05
 * @LastEditors  : fallen_zero
 * @LastEditTime : 2024-07-19 17:07:08
 * @FilePath     : /fallen-zero-ui-new/packages/components/src/scroll/hook/useResize.ts
 * @FileName     :
 */
import { getCurrentInstance, onBeforeUnmount, onMounted, type Ref } from 'vue';

type DomType = Ref<HTMLElement | null | undefined>;

export default function useResize(doms: DomType[], handleResize: ResizeObserverCallback): {
  observe: (dom: DomType | DomType[]) => void;
  unobserve: (dom: DomType | DomType[]) => void;
} {
  const domMap = new WeakMap<HTMLElement, boolean>();

  // 尺寸变化监听器
  let resizeObserver: ResizeObserver | null = null;

  function observe(dom: DomType | DomType[]) {
    if (!dom)
      return;
    const newDoms = Array.isArray(dom) ? dom : [dom];
    newDoms.forEach((dom) => {
      if (!dom.value || !resizeObserver || domMap.has(dom.value))
        return;
      domMap.set(dom.value, true);
      resizeObserver.observe(dom.value);
    });
  }

  function unobserve(dom: DomType | DomType[]) {
    if (!dom)
      return;
    const newDoms = Array.isArray(dom) ? dom : [dom];
    newDoms.forEach((dom) => {
      if (!dom.value || !resizeObserver || !domMap.has(dom.value))
        return;
      domMap.delete(dom.value);
      resizeObserver.unobserve(dom.value);
    });
  }

  if (getCurrentInstance()) {
    onMounted(() => {
      resizeObserver = new ResizeObserver(handleResize);
      observe(doms);
    });

    onBeforeUnmount(() => {
      if (!resizeObserver)
        return;
      unobserve(doms);
      resizeObserver.disconnect();
      resizeObserver = null;
    });
  }

  return {
    observe,
    unobserve,
  };
}
