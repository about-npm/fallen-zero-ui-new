import { type Ref } from 'vue';
type DomType = Ref<HTMLElement | null | undefined>;
export default function useResize(doms: DomType[], handleResize: ResizeObserverCallback): {
    observe: (dom: DomType | DomType[]) => void;
    unobserve: (dom: DomType | DomType[]) => void;
};
export {};
