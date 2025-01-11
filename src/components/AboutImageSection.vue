<template>
  <div class="about-image-section__wrapper">
    <img class="image-1" v-if="aboutData.image1" :src="aboutData.image1" alt="Image 1" />
    <img class="image-2" v-if="aboutData.image2" :src="aboutData.image2" alt="Image 2" />
    <img class="image-3" v-if="aboutData.image3" :src="aboutData.image3" alt="Image 3" />
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
.about-image-section__wrapper {
  display: grid;
  grid-template-columns: repeat($grid-cells, $grid-item-size);
  gap: $spacing-lg;
}

.about-image-section__wrapper>img {
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
</style>
