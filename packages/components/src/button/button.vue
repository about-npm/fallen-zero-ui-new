<!--
 * @Author       : fallen_zero
 * @Date         : 2024-02-18 11:47:52
 * @LastEditors  : fallen_zero
 * @LastEditTime : 2024-02-18 13:58:52
 * @FilePath     : /fallen-zero-ui/packages/components/src/button/button.vue
 * @FileName     : 
-->
<script lang="ts" setup>
import { computed } from 'vue';
import './style/index.scss';

defineOptions({
  name: 'fz-button',
});

type ButtonProps = {
  type?: 'primary';
};

const buttonProps = defineProps<ButtonProps>();

const buttonStyle = computed(() => {
  return {
    [`fz-button--${buttonProps.type}`]: buttonProps.type,
  };
});
</script>

<template>
  <button
    class="fz-button"
    :class="buttonStyle"
  >
    <slot />
  </button>
</template>
