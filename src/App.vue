<template>
  <Analytics />
  <SpeedInsights />
  <router-view />
</template>

<script setup>
import { Analytics } from '@vercel/analytics/vue';
import { SpeedInsights } from '@vercel/speed-insights/vue';
// export default {
//   name: "App"
// };
</script>

<style lang="scss">
/* Global styles */
</style>
