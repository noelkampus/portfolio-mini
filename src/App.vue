<template>
  <SeoMeta title="Noel Kampus ++ Interaction Designer"
    description="I'm an Interaction Designer based in Zurich. My work blends digital and physical experiences to craft smooth, interactive journeys. Through thoughtful design and technology, I aim to create strong connections between people, spaces, and the digital world."
    url="https://noelkampus.ch/" />
  <Analytics />
  <SpeedInsights />
  <router-view />
</template>

<script setup>
import { Analytics } from '@vercel/analytics/vue';
import { SpeedInsights } from '@vercel/speed-insights/vue';
import SeoMeta from './components/SeoMeta.vue';
// export default {
//   name: "App"
// };
</script>

<style lang="scss">
/* Global styles */
</style>
