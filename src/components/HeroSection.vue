<template>
  <section class="hero-section__wrapper">
    <div class="hero-section__content">
      <h4>{{ heroText }}</h4>
    </div>
  </section>
</template>

<script>
import generalData from "../data/general.json";

export default {
  data() {
    return {
      heroText: generalData.heroText
    };
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
</style>
