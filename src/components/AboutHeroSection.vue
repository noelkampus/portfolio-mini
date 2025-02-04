<template>
  <div class="about-hero-section__wrapper">
    <h4 class="about-hero-section__title">About</h4>
    <h4 class="about-hero-section__description">{{ aboutDescription }}</h4>
  </div>
</template>

<script>
import aboutData from "/data/about.json";

export default {
  data() {
    return {
      aboutDescription: aboutData.description
    };
  }
};
</script>

<style lang="scss" scoped>
.about-hero-section__wrapper {
  display: grid;
  grid-template-columns: repeat($grid-cells, $grid-item-size);
  gap: $spacing-lg;

  padding: 15vh 0 5vh 0;
}

.about-hero-section__title {
  grid-column: 1 / 2;
}

.about-hero-section__description {
  display: flex;
  flex-direction: column;
  row-gap: $spacing-4xl;
  grid-column: 2 / 5;
}
</style>
