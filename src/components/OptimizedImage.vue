<template>
  <img :src="optimizedSrc" loading="lazy" decoding="async" v-bind="$attrs" />
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  src: { type: String, required: true },
  width: { type: Number, default: 800 },
  quality: { type: Number, default: 75 },
})

const optimizedSrc = computed(() => {
  if (!props.src) return ''
  return `/_vercel/image?url=${encodeURIComponent(props.src)}&w=${props.width}&q=${props.quality}`
})
</script>
