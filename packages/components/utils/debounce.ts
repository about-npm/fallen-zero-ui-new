/*
 * @Author       : fallen_zero
 * @Date         : 2024-02-19 11:00:45
 * @LastEditors  : fallen_zero
 * @LastEditTime : 2024-02-19 11:00:46
 * @FilePath     : /fallen-zero-ui/packages/components/utils/debounce.ts
 * @FileName     :
 */

/** 防抖函数
 * @param fn 需要防抖的函数
 * @param delay 防抖间隔（毫秒）
 * @returns {Function}
 */
export function debounce<T extends (...args: any[]) => void | Promise<void>>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;

  return function (this: void, ...args: Parameters<T>) {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

/** 节流函数
 * @param fn 需要节流的函数
 * @param delay 节流间隔（毫秒）
 * @returns {Function}
 */
export function throttle<T extends (...args: any[]) => void | Promise<void>>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return function (this: void, ...args: Parameters<T>) {
    if (timer === null) {
      fn.apply(this, args);

      timer = setTimeout(() => {
        timer = null;
      }, delay);
      return;
    }

    if (timer) {
      return;
    }
  };
}
