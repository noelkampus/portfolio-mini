<template>

  <head>
    <title>{{ title }}</title>
    <meta name="description" :content="description" />
    <meta name="keywords" :content="keywords" />

    <!-- Open Graph -->
    <meta property="og:title" :content="title" />
    <meta property="og:description" :content="description" />
    <meta property="og:image" :content="image" />
    <meta property="og:url" :content="url" />
    <meta property="og:type" content="website" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" :content="title" />
    <meta name="twitter:description" :content="description" />
    <meta name="twitter:image" :content="image" />
  </head>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "Noel Kampus ++ Interaction Designer",
  },
  description: {
    type: String,
    default:
      "I'm an Interaction Designer based in Zurich. My work blends digital and physical experiences to craft smooth, interactive journeys. Through thoughtful design and technology, I aim to create strong connections between people, spaces, and the digital world.",
  },
  keywords: {
    type: String,
    default:
      "Interaction Designer Zurich, UX Designer Portfolio, UI Design Projects, Digital Product Designer, Prototyping with Arduino, International UX Designer, Creative Technologist Zurich, User Experience Design, Interaction Designer",
  },
  image: {
    type: String,
    default: "https://noelkampus.ch/og-image.jpg",
  },
  url: {
    type: String,
    default: "https://noelkampus.ch/",
  },
});
</script>
