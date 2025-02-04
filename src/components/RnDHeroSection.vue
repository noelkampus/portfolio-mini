<template>
  <div class="rnd-hero-section__wrapper">
    <h4 class="rnd-hero-section__title">RnD</h4>
    <h4 class="rnd-hero-section__description">{{ rndHeroText }}</h4>
  </div>
</template>

<script>
import generalData from "/data/general.json";

export default {
  data() {
    return {
      rndHeroText: generalData.rndHeroText
    };
  }
};
</script>

<style lang="scss" scoped>
.rnd-hero-section__wrapper {
  display: grid;
  grid-template-columns: repeat($grid-cells, $grid-item-size);
  gap: $spacing-lg;

  padding: 15vh 0 5vh 0;
}

.rnd-hero-section__title {
  grid-column: 1 / 2;
}

.rnd-hero-section__description {
  display: flex;
  flex-direction: column;
  row-gap: $spacing-4xl;
  grid-column: 2 / 5;
}
</style>
