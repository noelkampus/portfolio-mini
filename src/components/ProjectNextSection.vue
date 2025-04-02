<template>
  <SectionFiller />
  <div v-if="project" class="project-next-section__wrapper">
    <p class="project-content-text-section__title">Next Projects</p>
    <ProjectCard v-for="project in filteredNextProjects" :key="project.id" :project="project"
      @click="reloadPage(project.id)" />
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
  computed: {
    filteredNextProjects() {
      return this.nextProjects.filter(project => project.label !== 'rnd');
    }
  },
  created() {
    this.loadProjectData();
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      handler() {
        this.loadProjectData();
      }
    },
    projects: {
      deep: true,
      handler() {
        this.loadProjectData();
      }
    }
  },
  methods: {
    loadProjectData() {
      const projectId = parseInt(this.$route.params.id, 10);
      this.project = projectsData.find((p) => p.id === projectId);
      if (this.project) {
        const currentIndex = projectsData.findIndex((p) => p.id === projectId);
        this.nextProjects = projectsData.slice(currentIndex + 1, currentIndex + 3);
      }
    },
    navigateToProject(projectId) {
      if (this.project && this.project.id !== projectId) {
        this.$router.push({ name: 'ProjectPage', params: { id: projectId } });
      }
    },
    reloadPage(projectId) {
      this.navigateToProject(projectId);
      this.$nextTick(() => {
        window.location.reload();
      });
    }
  },
  props: {
    projects: {
      type: Array,
      required: true
    }
  },
  updated() {
    this.loadProjectData();
  }
};
</script>

<style lang="scss" scoped>
.project-next-section__wrapper {
  display: grid;
  grid-template-columns: repeat($grid-cells, $grid-item-size);
  gap: $spacing-lg;
}

@media (max-width: $breakpoint-xl) {
  $grid-cells: 5;

  .project-next-section__wrapper {
    grid-template-columns: repeat($grid-cells, $grid-item-size);
  }
}

@media (max-width: $breakpoint-lg) {
  $grid-cells: 4;

  .project-next-section__wrapper {
    grid-template-columns: repeat($grid-cells, $grid-item-size);
  }
}

@media (max-width: $breakpoint-md) {
  .project-next-section__wrapper {
    display: flex;
    flex-direction: column;
    row-gap: $spacing-xl;
    padding: 5vh 0 5vh 0;
  }
}

@media (max-width: $breakpoint-sm) {
  .project-next-section__wrapper {
    display: flex;
    flex-direction: column;
    row-gap: $spacing-xl;
    padding: 5vh 0 5vh 0;
  }
}
</style>
