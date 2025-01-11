<template>
  <div v-if="project" class="project-content-section__wrapper">
    <div class="project-image-section__wrapper">
      <img v-if="project.coverImage" :src="project.coverImage" :alt="project.title" class="image-1" />
      <img v-if="project.image1" :src="project.image1" :alt="project.title" class="image-2" />
      <img v-if="project.image2" :src="project.image2" :alt="project.title" class="image-3" />
    </div>
    <projectText />
  </div>
</template>

<script>
import projectsData from "../data/projects.json";
import projectText from "../components/ProjectContentText.vue";

export default {
  components: { projectText },
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
.project-content-section__wrapper {
  display: flex;
  flex-direction: column;
  row-gap: $spacing-lg;
}

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
</style>
