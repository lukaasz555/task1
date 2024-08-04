<template>
  <BaseLayout>
    <template #header>
      <Header />
    </template>
    <template #default>
      <Subheader />
      <ArticlesList />
    </template>
    <template #footer>
      <Footer />
    </template>
  </BaseLayout>
</template>

<script lang="ts" setup>
import BaseLayout from "../components/BaseLayout.vue";
import Header from "../components/Header.vue";
import ArticlesList from "../components/ArticlesList.vue";
import Subheader from "../components/Subheader.vue";
import Footer from "../components/Footer.vue";
</script>
