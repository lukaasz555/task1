<template>
  <div class="flex flex-col items-center mb-8">
    <slot>
      <div
        class="flex flex-col items-center leading-none w-full sm:w-10/12 md:w-9/12 lg:w-7/12 xl:w-5/12"
      >
        <h2 class="text-tw-xl text-tw-darkGreen font-tw-700 text-center mb-2">
          {{ subheaderData.title }}
        </h2>
      </div>
      <div class="flex w-full sm:w-10/12 md:w-9/12 lg:w-7/12 xl:w-5/12">
        <div
          v-for="(item, index) in subheaderContent"
          :key="index"
          class="pl-1 relative"
        >
          <p class="subheader-text">
            {{ item }}
          </p>
        </div>
      </div>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const subheaderData = {
  title: "Top Tech Mystery Box at Unbeatable Prices",
  content: ["Fast shipping", "Easy returns", "Special discounts for students"],
};

const subheaderContent = computed(() => {
  return subheaderData.content.map((x, i) => {
    return i + 1 === subheaderData.content.length ? x : x + " | ";
  });
});
</script>
