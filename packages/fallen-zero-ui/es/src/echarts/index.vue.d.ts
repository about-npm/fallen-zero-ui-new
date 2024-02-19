import type { EChartsOption } from 'echarts';
/**
 * 父级传入值类型
 * @param {string} eid 标签id, 保持唯一
 * @param {EchartsOption} option echarts 配置
 */
interface PropsConfig {
    option: EChartsOption | undefined;
}
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<PropsConfig>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    [x: string]: (...args: unknown[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<PropsConfig>>>, {}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
