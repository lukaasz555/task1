<template>
  <div
    class="rounded-tw-md overflow-hidden border-[1px] border-tw-primary flex-1 cursor-pointer"
    :class="[index === 0 ? 'ml-0' : 'ml-10']"
    @click="onClick"
  >
    <img
      :src="imgSrc"
      class="h-full w-full object-cover"
      alt="Chance to win a StockX Mystery Box today!"
    />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: "change", val: string): void;
}>();

const props = defineProps({
  imgSrc: {
    type: String,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

function onClick(): void {
  emit("change", props.imgSrc);
}
</script>
