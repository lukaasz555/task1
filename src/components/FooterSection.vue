<template>
  <section class="mx-0 px-0">
    <slot name="header">
      <h6 class="footer-title">{{ title }}</h6>
    </slot>
    <slot name="content">
      <div>
        <p v-for="(text, index) in content" :key="index" class="footer-text">
          {{ text }}
        </p>
      </div>
    </slot>
  </section>
</template>

<script setup lang="ts">
import { PropType } from "vue";

defineProps({
  title: {
    type: String,
    default: undefined,
  },
  content: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
});
</script>
