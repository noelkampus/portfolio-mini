<template>
  <SectionFiller v-if="content" />
  <div v-if="content" class="project-content-text-section__wrapper">
    <p class="project-content-text-section__title">{{ title }}</p>
    <p class="project-content-text-section__description">{{ content }}</p>
  </div>
  <SectionFiller v-if="content" />
</template>

<script>
import SectionFiller from "../components/SectionFiller.vue";

export default {
  components: { SectionFiller },
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.project-content-text-section__wrapper {
  display: grid;
  grid-template-columns: repeat($grid-cells, $grid-item-size);
  gap: $spacing-lg;

  padding: 10vh 0 10vh 0;
}

.project-content-text-section__title {
  grid-column: 1 / 2;
}

.project-content-text-section__description {
  grid-column: 2 / 5;
}

@media (max-width: $breakpoint-xl) {
  $grid-cells: 5;

  .project-content-text-section__wrapper {
    grid-template-columns: repeat($grid-cells, $grid-item-size);
  }

  .image-1 {
    grid-column: 1 / 3;
  }

  .image-2 {
    grid-column: 3 / 5;
  }

  .image-3 {
    grid-column: 5 / 7;
  }
}

@media (max-width: $breakpoint-lg) {
  $grid-cells: 4;

  .project-content-text-section__wrapper {
    grid-template-columns: repeat($grid-cells, $grid-item-size);
  }
}

@media (max-width: $breakpoint-md) {
  .project-content-text-section__wrapper {
    display: flex;
    flex-direction: column;
    row-gap: $spacing-xl;
    padding: 5vh 0 5vh 0;
  }
}

@media (max-width: $breakpoint-sm) {
  .project-content-text-section__wrapper {
    display: flex;
    flex-direction: column;
    row-gap: $spacing-xl;
    padding: 5vh 0 5vh 0;
  }
}
</style>
