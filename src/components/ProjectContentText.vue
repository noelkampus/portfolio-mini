<template>
  <SectionFiller v-if="project.process1" />
  <div v-if="project.process1" class="project-content-text-section__wrapper">
    <h4 class="project-hero-section__project-title">{{ project.process1 }}</h4>
  </div>
  <SectionFiller v-if="project.process1" />
</template>

<script>
import projectsData from "../data/projects.json";
import SectionFiller from "../components/SectionFiller.vue";

export default {
  components: { SectionFiller },
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
.project-content-text-section__wrapper {
  display: grid;
  grid-template-columns: repeat($grid-cells, $grid-item-size);
  gap: $spacing-lg;

  padding: 10vh 0 10vh 0;
}

.project-hero-section__project-title {
  grid-column: 2 / 5;
}
</style>
