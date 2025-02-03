<template>
  <div class="project-image-gallery__wrapper" v-if="project.imageGallery1">
    <div class="image-1__wrapper">
      <img class="image-1" :src="project.imageGallery1" alt="Image 1" />
    </div>
    <div class="image-2__wrapper">
      <img class="image-2" :src="project.imageGallery2" alt="Image 2" />
    </div>
    <div class="image-3__wrapper">
      <img class="image-3" :src="project.imageGallery3" alt="Image 3" />
    </div>
  </div>
</template>

<script>
import projectsData from "../data/projects.json";

export default {
  data() {
    return {
      project: null
    };
  },
  created() {
    const projectId = parseInt(this.$route.params.id, 10);
    this.project = projectsData.find((p) => p.id === projectId);
  }
};
</script>

<style lang="scss" scoped>
.project-image-gallery__wrapper {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: $spacing-lg;
  height: 90vh;
}

.project-image-gallery__wrapper>img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-1__wrapper {
  grid-column: 1 / 5;
  grid-row: 1 / 3;
  overflow: hidden;
}

.image-1 {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-2__wrapper {
  grid-column: 5 / 7;
  grid-row: 1 / 2;
  overflow: hidden;
}

.image-2 {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-3__wrapper {
  grid-column: 5 / 7;
  grid-row: 2 / 3;
  overflow: hidden;
}

.image-3 {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
