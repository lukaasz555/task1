<template>
  <BaseLayout>
    <template #header>
      <div>Header</div>
    </template>
    <template #default>
      <ArticlesList />
    </template>
    <template #footer>
      <Footer />
    </template>
  </BaseLayout>
</template>

<script lang="ts" setup>
import BaseLayout from "../components/BaseLayout.vue";
import ArticlesList from "../components/ArticlesList.vue";
import Footer from "../components/Footer.vue";
</script>
