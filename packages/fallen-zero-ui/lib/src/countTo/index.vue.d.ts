/**
 * 父级传入的值类型
 * @param { number } startVal 起始数字
 * @param { number } endVal 结束数字
 * @param { number } duration 滚动持续时间
 * @param { boolean } autoplay 是否
 * @param { number } decimals 要显示的小数点位数
 * @param { string } decimal 十进制分割
 * @param { string } separator 分隔符
 * @param { string } prefix 前缀
 * @param { string } suffix 后缀
 * @param { boolean } useEasing 使用缓和功能
 * @param { Function } easingFn 缓和回调
 */
interface PropsConfig {
    startVal?: number;
    endVal?: number;
    duration?: number;
    autoplay?: boolean;
    decimals?: number;
    decimal?: string;
    separator?: string;
    prefix?: string;
    suffix?: string;
    useEasing?: boolean;
    easingFn?: (_t: number, _b: number, _c: number, _d: number) => number;
}
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<PropsConfig>, {
    startVal: number;
    endVal: number;
    duration: number;
    autoplay: boolean;
    decimals: number;
    decimal: string;
    separator: string;
    prefix: string;
    suffix: string;
    useEasing: boolean;
    easingFn: (t: any, b: any, c: any, d: any) => any;
}>, {
    pauseResume: () => void;
    pause: () => void;
    reset: () => void;
    resume: () => void;
    start: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    [x: string]: (...args: unknown[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<PropsConfig>, {
    startVal: number;
    endVal: number;
    duration: number;
    autoplay: boolean;
    decimals: number;
    decimal: string;
    separator: string;
    prefix: string;
    suffix: string;
    useEasing: boolean;
    easingFn: (t: any, b: any, c: any, d: any) => any;
}>>>, {
    startVal: number;
    endVal: number;
    duration: number;
    autoplay: boolean;
    decimals: number;
    decimal: string;
    separator: string;
    prefix: string;
    suffix: string;
    useEasing: boolean;
    easingFn: (_t: number, _b: number, _c: number, _d: number) => number;
}, {}>;
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
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
