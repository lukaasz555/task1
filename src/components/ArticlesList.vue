import { mockArticles, Article } from '../data/mockArticles';
<template>
  <v-col cols="12 mx-0 px-4 py-0 my-0">
    <ArticleItem
      v-for="(article, index) in mockArticles"
      :key="article.id"
      :article="article"
      :is-even="index % 2 === 0"
    />
  </v-col>
</template>

<script setup lang="ts">
import ArticleItem from "./Article.vue";
import { mockArticles } from "../data/mockArticles";
</script>
