/*
 * @Author       : fallen_zero
 * @Date         : 2024-02-19 11:33:33
 * @LastEditors  : fallen_zero
 * @LastEditTime : 2024-07-20 09:27:38
 * @FilePath     : /fallen-zero-ui-new/packages/resolvers/index.ts
 * @FileName     :
 */

export interface ImportInfo {
  as?: string;
  name?: string;
  from: string;
}
export type SideEffectsInfo =
  | (ImportInfo | string)[]
  | ImportInfo
  | string
  | undefined;

export interface ComponentInfo extends ImportInfo {
  sideEffects?: SideEffectsInfo;
}

export type Awaitable<T> = T | PromiseLike<T>;

export type ComponentResolveResult = Awaitable<
  string | ComponentInfo | null | undefined | void
>;
export type ComponentResolverFunction = (
  name: string
) => ComponentResolveResult;

export interface ComponentResolverObject {
  type: 'component' | 'directive';
  resolve: ComponentResolverFunction;
}

export type ComponentResolver =
  | ComponentResolverFunction
  | ComponentResolverObject;

export type ResolverOptions = {
  type: 'module' | 'commonjs';
};

export const FzResolver = (
  options: ResolverOptions = { type: 'module' }
): ComponentResolver => {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.startsWith('Fz')) {
        const componentName = name.slice(2);
        const dir = options.type === 'module' ? 'es' : 'lib';
        return {
          name: componentName,
          from: `@fallen-zero/ui/${dir}/src`,
          sideEffects: `@fallen-zero/ui/${dir}/src/${componentName}/style/index.css`
        };
      }
    },
  };
};

export default FzResolver;
