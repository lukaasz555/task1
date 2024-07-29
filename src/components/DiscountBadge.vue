<template>
  <div
    class="bg-tw-primary rounded-tw-full flex justify-center items-center absolute right-0 top-0"
    style="height: 160px; width: 160px"
  >
    <div class="text-center text-tw-white">
      <p class="text-tw-lg font-tw-700">{{ title }}</p>
      <p class="text-tw-xs-plus">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: "$1.99",
  },
  description: {
    type: String,
    default: "Original value $500",
  },
});
</script>
