<!--
 * @Author       : fallen_zero
 * @Date         : 2024-02-19 11:09:12
 * @LastEditors  : fallen_zero
 * @LastEditTime : 2024-07-19 17:12:34
 * @FilePath     : /fallen-zero-ui-new/packages/components/src/scroll/index.vue
 * @FileName     : 
-->

<script setup lang="ts" generic="T">
import { computed, nextTick, onBeforeUnmount, ref, shallowRef, watch } from 'vue'
import useResize from './hook/useResize';
import { sum } from '../../utils/sum'
import { debounce } from '../../utils/debounce'

defineOptions({
  name: 'fz-scroll',
});

const props = withDefaults(defineProps<{
  /** 列表 */
  list: T[];
  /** 是否允许滚动 */
  modelValue?: boolean;
  /** 滚动停顿时间（毫秒） */
  waitTime?: number;
  /** 滚动一格的速度（毫秒） */
  speed?: number;
  /** 是否鼠标移入停止滚动 */
  hover?: boolean;
  /** 是否允许鼠标滚动 (在 hover 为 true 时生效) */
  wheel?: boolean;
}>(), {
  waitTime: 0,
  modelValue: true,
  speed: 800,
  hover: true,
  wheel: true,
});

const emits = defineEmits<{
  'update:modelValue': [boolean];
}>();

const value = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emits('update:modelValue', val);
  },
});

/** 根标签 */
const rootRef = shallowRef<HTMLElement>();
/** 容器标签 */
const wrapperRef = shallowRef<HTMLDivElement>();
/** 列表标签 */
const listRef = shallowRef<HTMLUListElement[]>([]);
/** 复制列表数量 */
const listNum = ref<number>(1);
/** 当前列表下标 */
const currentIndex = ref<number>(0);
/** 列表数据 */
const dataList = computed(() => Array.from({ length: listNum.value }, () => props.list));

/** 获取列表每一项的高度 */
function getListHeight(): number[] {
  const list: number[] = [];
  for (const iterator of Array.from(listRef.value?.[0].children ?? []))
    list.push(iterator.clientHeight);

  return list.reduce<number[]>((prev, curr) => {
    prev.push(sum([prev.at(-1) ?? 0, curr]));
    return prev;
  }, [0]);
}

/** 修改过渡动画时间 */
function changeTransition(time?: number | string) {
  if (!wrapperRef.value)
    return;
  if (typeof time === 'number' || typeof time === 'undefined') {
    wrapperRef.value.style.transition = `transform ${time ?? props.speed}ms linear`;
    return;
  }
  wrapperRef.value.style.transition = time;
}

/** 定时器 */
let timer: ReturnType<typeof setTimeout> | null = null;
/** 滚动数组 */
let nums: number[] = [];

/** 清除定时器 */
function clearTimer() {
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
}

/** 间隔滚动事件 */
function handleRolling() {
  clearTimer();
  if (currentIndex.value > nums.length - 2 && wrapperRef.value) {
    changeTransition(0);
    currentIndex.value = 0;
    wrapperRef.value.style.transform = `translateY(0px)`;
  }
  timer = setTimeout(() => {
    changeTransition();
    if (!wrapperRef.value)
      return;
    currentIndex.value++;
    wrapperRef.value.style.transform = `translateY(-${nums[currentIndex.value] || 0}px)`;
  }, props.waitTime);
}

/** 间隔滚动 */
function intervalRolling() {
  if (!value.value || listNum.value === 1)
    return;
  nums = getListHeight();
  handleRolling();
  wrapperRef.value?.addEventListener('transitionend', handleRolling, true);
}

/** 开始滚动 */
function startScroll() {
  intervalRolling();
}

/** 停止滚动 */
function stopScroll() {
  clearTimer();
  changeTransition(0);
  if (wrapperRef.value)
    wrapperRef.value.removeEventListener('transitionend', handleRolling, true);
}

enum DIRECTION {
  UP = -1,
  DOWN = 1,
}

/**
 * 滚轮滚动事件
 * @param direction 方向
 */
function wheelScrollEvent(direction: DIRECTION) {
  if (!wrapperRef.value)
    return;
  currentIndex.value += direction;

  if (direction === DIRECTION.UP && currentIndex.value < 0)
    currentIndex.value = nums.length - 2;

  if (
    direction === DIRECTION.DOWN
    && currentIndex.value > nums.length - 2
  )
    currentIndex.value = 0;

  wrapperRef.value.style.transform = `translateY(${
    (-1 * nums[currentIndex.value]) || 0
  }px)`;
}

/** 鼠标滚动事件 */
function wheelScroll(e: WheelEvent) {
  if (!props.hover || !props.wheel || listNum.value === 1)
    return;
  if (e.deltaY > 0)
    wheelScrollEvent(DIRECTION.DOWN);
  else
    wheelScrollEvent(DIRECTION.UP);
}

/** 初始化滚动 */
function initScroll() {
  currentIndex.value = 0;
  stopScroll();
  if (wrapperRef.value)
    wrapperRef.value.style.transform = `translateY(0px)`;
}

/** 获取容器重合高度 */
const getOverlapHeight = debounce(() => {
  const root = rootRef.value;
  const wrapper = wrapperRef.value;
  if (!root || !wrapper)
    return;
  listNum.value = (listRef.value[0]?.clientHeight ?? 0) - root.clientHeight < 0 ? 1 : 2;
  nextTick(() => {
    if (value.value && listNum.value > 1)
      startScroll();
    if (listNum.value === 1)
      initScroll();
  });
}, 200);

/** 处理尺寸变化事件 */
function handleResize(entries: ResizeObserverEntry[]) {
  entries.forEach(() => {
    getOverlapHeight();
  });
}

/** 监听列表变化，重置列表数量 */
watch(() => props.list, () => {
  listNum.value = 1;
  initScroll();
  nextTick(() => {
    getOverlapHeight();
  });
});

watch(value, (val) => {
  if (val) {
    startScroll();
    return;
  }
  stopScroll();
});

/** 监听尺寸变化 */
useResize([rootRef], handleResize);

onBeforeUnmount(() => {
  stopScroll();
});
</script>

<template>
  <main ref="rootRef" class="fz-scroll">
    <section
      ref="wrapperRef"
      class="fz-scroll-list"
      @wheel="wheel && hover && wheelScroll($event)"
      @mouseover="hover && stopScroll()"
      @mouseleave="hover && startScroll()"
    >
      <ul v-for="(item, index) in dataList" ref="listRef" :key="index" class="fz-scroll-list">
        <li v-for="(info, i) in item" :key="i" class="fz-scroll-list">
          <slot name="item" :data="info" :index="i"></slot>
        </li>
      </ul>
    </section>
  </main>
</template>

<style lang="scss" scoped></style>
