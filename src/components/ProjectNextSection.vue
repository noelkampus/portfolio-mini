<template>
  <SectionFiller />
  <div v-if="project" class="project-next-section__wrapper">
    <p class="project-content-text-section__title">Next Projects</p>
    <ProjectCard v-for="project in nextProjects" :key="project.id" :project="project"
      @click="navigateToProject(project.id)" />
  </div>
  <SectionFiller />
</template>

<script>
import projectsData from "../data/projects.json";
import SectionFiller from "../components/SectionFiller.vue";
import ProjectCard from "./ProjectCard.vue";

export default {
  components: { ProjectCard, SectionFiller },
  data() {
    return {
      project: null,
      nextProjects: []
    };
  },
  created() {
    const projectId = parseInt(this.$route.params.id, 10);
    this.project = projectsData.find((p) => p.id === projectId);
    if (this.project) {
      const currentIndex = projectsData.findIndex((p) => p.id === projectId);
      this.nextProjects = projectsData.slice(currentIndex + 1, currentIndex + 3);
    }
  },
  methods: {
    navigateToProject(projectId) {
      if (this.project && this.project.id !== projectId) {
        this.$router.push({ name: 'ProjectPage', params: { id: projectId } });
      }
    }
  },
  props: {
    projects: {
      type: Array,
      required: true
    }
  },
};
</script>

<style lang="scss" scoped>
.project-next-section__wrapper {
  display: grid;
  grid-template-columns: repeat($grid-cells, $grid-item-size);
  gap: $spacing-lg;
}
</style>
