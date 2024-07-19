import type { Plugin } from 'vue';
type SFCWithInstall<T> = T & Plugin;
export declare const Scroll: SFCWithInstall<(<T>(__VLS_props: {
    wheel?: boolean | undefined;
    "onUpdate:modelValue"?: ((args_0: boolean) => any) | undefined;
    list: T[];
    modelValue?: boolean | undefined;
    waitTime?: number | undefined;
    speed?: number | undefined;
    hover?: boolean | undefined;
} & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, __VLS_ctx?: {
    attrs: any;
    slots: {
        item?(_: {
            data: T;
            index: number;
        }): any;
    };
    emit: (evt: "update:modelValue", args_0: boolean) => void;
} | undefined, __VLS_expose?: ((exposed: import("vue").ShallowUnwrapRef<{}>) => void) | undefined, __VLS_setup?: Promise<{
    props: {
        wheel?: boolean | undefined;
        "onUpdate:modelValue"?: ((args_0: boolean) => any) | undefined;
        list: T[];
        modelValue?: boolean | undefined;
        waitTime?: number | undefined;
        speed?: number | undefined;
        hover?: boolean | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
    expose(exposed: import("vue").ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: {
        item?(_: {
            data: T;
            index: number;
        }): any;
    };
    emit: (evt: "update:modelValue", args_0: boolean) => void;
}>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: {
        props: {
            wheel?: boolean | undefined;
            "onUpdate:modelValue"?: ((args_0: boolean) => any) | undefined;
            list: T[];
            modelValue?: boolean | undefined;
            waitTime?: number | undefined;
            speed?: number | undefined;
            hover?: boolean | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
        expose(exposed: import("vue").ShallowUnwrapRef<{}>): void;
        attrs: any;
        slots: {
            item?(_: {
                data: T;
                index: number;
            }): any;
        };
        emit: (evt: "update:modelValue", args_0: boolean) => void;
    } | undefined;
})> & Record<string, any>;
export default Scroll;
