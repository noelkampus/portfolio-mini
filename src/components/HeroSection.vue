<template>
  <section class="hero-section__wrapper">
    <div class="hero-section__content">
      <h4 ref="heroText">{{ heroText }}</h4>
    </div>
  </section>
</template>

<script>
import generalData from "../data/general.json";
import { gsap } from "gsap";

export default {
  data() {
    return {
      heroText: generalData.heroText
    };
  },
  mounted() {
    gsap.from(this.$refs.heroText, { opacity: 0, y: 0, duration: 2, ease: "power2.out" });
  }
};
</script>

<style lang="scss" scoped>
.hero-section__wrapper {
  display: grid;
  grid-template-columns: repeat($grid-cells, $grid-item-size);
  gap: $spacing-lg;

  padding: 15vh 0 25vh 0;
}

.hero-section__content {
  grid-column: 1 / 5;
}

@media (max-width: $breakpoint-xl) {
  $grid-cells: 5;

  .hero-section__wrapper {
    grid-template-columns: repeat($grid-cells, $grid-item-size);
  }
}

@media (max-width: $breakpoint-lg) {
  $grid-cells: 4;

  .hero-section__wrapper {
    grid-template-columns: repeat($grid-cells, $grid-item-size);
  }
}

@media (max-width: $breakpoint-md) {
  $grid-cells: 3;

  .hero-section__wrapper {
    grid-template-columns: repeat($grid-cells, $grid-item-size);
  }
}

@media (max-width: $breakpoint-sm) {
  $grid-cells: 2;

  .hero-section__wrapper {
    grid-template-columns: repeat($grid-cells, $grid-item-size);
    padding: 10vh 0 15vh 0;
  }
}
</style>
