<template>
  <div class="about-hero-section__wrapper" ref="heroText">
    <h4 class="about-hero-section__title">About</h4>
    <h4 class="about-hero-section__description">{{ aboutDescription }}</h4>
  </div>
</template>

<script>
import aboutData from "../data/about.json";
import { gsap } from "gsap";

export default {
  data() {
    return {
      aboutDescription: aboutData.description
    };
  },
  mounted() {
    gsap.from(this.$refs.heroText, { opacity: 0, y: 0, duration: 2, ease: "power2.out" });
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

@media (max-width: $breakpoint-xl) {
  $grid-cells: 5;

  .about-hero-section__wrapper {
    grid-template-columns: repeat($grid-cells, $grid-item-size);
  }

  .about-hero-section__title {
    grid-column: 1 / 2;
  }

  .about-hero-section__description {
    grid-column: 2 / 5;
  }
}

@media (max-width: $breakpoint-lg) {
  $grid-cells: 4;

  .about-hero-section__wrapper {
    grid-template-columns: repeat($grid-cells, $grid-item-size);
  }

  .about-hero-section__title {
    grid-column: 1 / 2;
  }

  .about-hero-section__description {
    grid-column: 2 / 4;
  }
}

@media (max-width: $breakpoint-md) {
  .about-hero-section__wrapper {
    display: flex;
    flex-direction: column;
    row-gap: $spacing-4xl;
    padding: 10vh 0 15vh 0;
  }

  .about-hero-section__description {
    row-gap: $spacing-xl;
  }
}

@media (max-width: $breakpoint-sm) {
  $grid-cells: 2;

  .about-hero-section__wrapper {
    display: flex;
    flex-direction: column;
    row-gap: $spacing-4xl;
    padding: 10vh 0 15vh 0;
  }

  .about-hero-section__description {
    row-gap: $spacing-xl;
  }
}
</style>
