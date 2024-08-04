<template>
  <v-row tag="header" class="flex items-center mb-12 gap-4" no-gutters>
    <v-col cols="12" md="5">
      <Gallery />
    </v-col>
    <v-col cols="12" md="6">
      <div class="mb-2">
        <h1
          class="text-tw-xxl font-tw-800 text-tw-text leading-none text-center text-md-start"
        >
          Chance to win a StockX Mystery Box today!
        </h1>
        <p class="text-center text-md-start text-tw-sm-plus text-tw-text">
          Unleash the Excitement of Mystery Electronics
        </p>
      </div>
      <DetailsForm />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import Gallery from "./Gallery.vue";
import DetailsForm from "./DetailsForm.vue";
</script>

<style scoped lang="scss"></style>
