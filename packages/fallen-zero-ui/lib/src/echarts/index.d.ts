import type { Plugin } from 'vue';
type SFCWithInstall<T> = T & Plugin;
export declare const Echarts: SFCWithInstall<import("vue").DefineComponent<{
    option: {
        type: import("vue").PropType<import("echarts/types/dist/echarts").EChartsOption | undefined>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    [x: string]: (...args: unknown[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    option: {
        type: import("vue").PropType<import("echarts/types/dist/echarts").EChartsOption | undefined>;
        required: true;
    };
}>>, {}, {}>> & Record<string, any>;
export default Echarts;
