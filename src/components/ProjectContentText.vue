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
</style>
