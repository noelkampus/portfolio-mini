<template>
  <Analytics />
  <router-view />
</template>

<script setup>
import { Analytics } from '@vercel/analytics/vue';

export default {
  name: "App"
};
</script>

<style lang="scss">
/* Global styles */
</style>
