<template>
  <div class="project-image-section__wrapper">
    <img v-if="source1" :src="source1" class="image-1" />
    <img v-if="source2" :src="source2" class="image-2" />
    <img v-if="source3" :src="source3" class="image-3" />
  </div>
</template>

<script>
export default {
  props: {
    source1: {
      type: String,
      required: true
    },
    source2: {
      type: String,
      required: true
    },
    source3: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.project-image-section__wrapper {
  display: grid;
  grid-template-columns: repeat($grid-cells, $grid-item-size);
  gap: $spacing-lg;
}

.project-image-section__wrapper>img {
  width: 100%;
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

@media (max-width: $breakpoint-xl) {
  $grid-cells: 5;

  .project-image-section__wrapper {
    grid-template-columns: repeat($grid-cells, $grid-item-size);
  }

  .image-1 {
    grid-column: 1 / 2;
  }

  .image-2 {
    grid-column: 2 / 4;
  }

  .image-3 {
    grid-column: 4 / 6;
  }
}

@media (max-width: $breakpoint-lg) {
  $grid-cells: 4;

  .project-image-section__wrapper {
    grid-template-columns: repeat($grid-cells, $grid-item-size);
  }

  .image-1 {
    grid-column: 1 / 2;
  }

  .image-2 {
    grid-column: 2 / 4;
  }

  .image-3 {
    grid-column: 4 / 5;
  }
}

@media (max-width: $breakpoint-md) {
  .project-image-section__wrapper {
    display: flex;
    flex-direction: column;
    row-gap: $spacing-xs;
  }
}

@media (max-width: $breakpoint-sm) {
  .project-image-section__wrapper {
    display: flex;
    flex-direction: column;
    row-gap: $spacing-xs;
  }
}
</style>
