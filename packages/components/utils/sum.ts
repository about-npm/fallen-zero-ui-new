/*
 * @Author       : fallen_zero
 * @Date         : 2024-07-19 17:07:22
 * @LastEditors  : fallen_zero
 * @LastEditTime : 2024-07-19 17:08:59
 * @FilePath     : /fallen-zero-ui-new/packages/components/utils/sum.ts
 * @FileName     : 
 */

export function sum(nums: number[]): number {
  return nums.reduce<number>((a, b) => a + b, 0);
}