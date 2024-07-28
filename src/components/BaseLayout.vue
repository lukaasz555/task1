<template>
  <v-container style="width: 100%">
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer">footer</slot>
  </v-container>
</template>

<script setup lang="ts"></script>
