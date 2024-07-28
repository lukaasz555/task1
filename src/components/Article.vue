<template>
  <v-row tag="article" class="flex items-center mb-12" no-gutters>
    <v-col
      cols="12"
      sm="6"
      :class="['order-0', isEven ? 'order-sm-0' : 'order-sm-2']"
    >
      <v-img
        :src="getArticleImage()"
        alt="Article image"
        cover
        class="rounded-tw-xl"
      ></v-img>
    </v-col>

    <v-col cols="12" sm="6" class="order-1">
      <div
        class="flex flex-col gap-md"
        :class="[isEven ? 'pl-[32px]' : 'pr-[32px]']"
      >
        <slot name="title">
          <h3 class="section-title">{{ article.title }}</h3>
        </slot>
        <slot name="content">
          <div>
            <p
              v-for="(text, index) in article.content"
              :key="`article-${article.id}-content-${index}`"
              class="section-text"
            >
              {{ text }}
            </p>
          </div>
        </slot>
      </div>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { Article } from "@/interfaces/Article";

const props = defineProps({
  article: {
    type: Object as PropType<Article>,
    required: true,
  },
  isEven: {
    type: Boolean,
    default: false,
  },
});

function getArticleImage(): string {
  return new URL(`../assets/articles/${props.article.id}.png`, import.meta.url)
    .href;
}

console.log(getArticleImage());
</script>
