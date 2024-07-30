<template>
  <div class="d-flex flex-col items-center items-md-start">
    <div class="mb-4 relative" style="max-height: 480px; max-width: 481px">
      <img
        :src="images[activeIndex]"
        class="h-full w-full overflow-hidden object-cover"
        style="aspect-ratio: 1/1"
        alt="Chance to win a StockX Mystery Box today!"
      />
      <DiscountBadge v-if="isBadgeVisible" />
    </div>
    <div
      class="flex items-stretch thumbnails-container h-full"
      style="max-height: 132px"
    >
      <Thumbnail
        v-for="(imgSrc, index) in availableImages"
        :key="index"
        :img-src="imgSrc"
        :index="index"
        @change="setActiveIndex"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import DiscountBadge from "./DiscountBadge.vue";
import Thumbnail from "./Thumbnail.vue";
import pic1 from "@/assets/gallery/1.png";
import pic2 from "@/assets/gallery/2.jpeg";
import pic3 from "@/assets/gallery/3.png";
import pic4 from "@/assets/gallery/4.jpeg";

const images = [pic1, pic2, pic3, pic4];
const activeIndex = ref(0);
const isBadgeVisible = ref(true);
const availableImages = ref<string[]>(getAvailableImages());

function getAvailableImages(): string[] {
  return images.filter((img) => img !== images[activeIndex.value]);
}

function setActiveIndex(imgSrc: string): void {
  const index = images.findIndex((img) => img === imgSrc);
  if (index < 0) throw new Error("Image not found");
  activeIndex.value = index;
  availableImages.value = getAvailableImages();
}
</script>
