<template>
  <div class="about-content-section__wrapper">
    <div class="about-content-section__subsection">
      <h6 class="about-content-section__title">Experience</h6>
      <div class="about-content-section__list">
        <div v-for="(item, index) in aboutData.experience" :key="index" class="about-content-section__item">
          <h6>{{ item.jobTitle }}</h6>
          <p>{{ item.company }}</p>
          <p>{{ item.duration }}</p>
          <p>{{ item.keywords }}</p>
        </div>
      </div>
    </div>
    <div class="about-content-section__subsection">
      <h6 class="about-content-section__title">Skills</h6>
      <div class="about-content-section__list">
        <div v-for="(item, index) in aboutData.technology" :key="index" class="about-content-section__item">
          <h6>{{ item.name }}</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import aboutData from "../data/about.json";

export default {
  data() {
    return {
      aboutData
    };
  }
};
</script>

<style lang="scss" scoped>
.about-content-section__wrapper {
  display: flex;
  flex-direction: column;
  row-gap: $spacing-6xl;
}

.about-content-section__subsection {
  display: grid;
  grid-template-columns: repeat($grid-cells, $grid-item-size);
  gap: $spacing-lg;
}

.about-content-section__list {
  display: flex;
  flex-direction: column;
  row-gap: $spacing-lg;
  grid-column: 2 / 5;
}

@media (max-width: $breakpoint-md) {
  $grid-cells: 6;

  .about-content-section__subsection {
    display: grid;
    grid-template-columns: repeat($grid-cells, $grid-item-size);
    gap: $spacing-lg;
  }

  .about-content-section__list {
    display: flex;
    flex-direction: column;
    row-gap: $spacing-lg;
    grid-column: 3 / 7;
  }
}

@media (max-width: $breakpoint-sm) {
  $grid-cells: 4;

  .about-content-section__subsection {
    display: grid;
    grid-template-columns: repeat($grid-cells, $grid-item-size);
    gap: $spacing-lg;
  }

  .about-content-section__list {
    display: flex;
    flex-direction: column;
    row-gap: $spacing-lg;
    grid-column: 2 / 5;
  }
}
</style>
