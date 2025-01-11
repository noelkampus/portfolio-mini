<template>
  <div class="project-hero-section__wrapper">
    <h4 class="project-hero-section__project-title">About</h4>
    <h4 class="project-hero-section__project-description">{{ about.description }}</h4>
  </div>
</template>

<script>
import about from "../data/about.json";

export default {
  data() {
    return {
      about: null
    };
  },
  created() {
    this.about = about;
  }
};
</script>

<style lang="scss" scoped>
.project-hero-section__wrapper {
  display: grid;
  grid-template-columns: repeat($grid-cells, $grid-item-size);
  gap: $spacing-lg;

  padding: 15vh 0 5vh 0;
}

.project-hero-section__project-title {
  grid-column: 1 / 2;
}

.project-hero-section__project-description {
  display: flex;
  flex-direction: column;
  row-gap: $spacing-4xl;
  grid-column: 2 / 5;
}
</style>