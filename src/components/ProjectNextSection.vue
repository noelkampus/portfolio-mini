<template>
  <SectionFiller />
  <div v-if="project" class="project-next-section__wrapper">
    <p class="project-content-text-section__title">Next Projects</p>

    <router-link v-for="project in filteredNextProjects" :key="project.id"
      :to="{ name: 'ProjectPage', params: { id: project.id } }" class="project-card__link">
      <ProjectCard :project="project" />
    </router-link>

  </div>
  <SectionFiller />
</template>

<script>
import projectsData from "../data/projects.json";
import SectionFiller from "../components/SectionFiller.vue";
import ProjectCard from "./ProjectCard.vue";

export default {
  components: { ProjectCard, SectionFiller },
  props: {
    projects: {
      type: Array,
      required: true
    }
  },
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
  mounted() {
    this.loadProjectData();
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      handler() {
        this.loadProjectData();
      }
    }
  },
  methods: {
    loadProjectData() {
      const projectId = parseInt(this.$route.params.id, 10);
      this.project = projectsData.find(p => p.id === projectId);
      if (this.project) {
        const currentIndex = projectsData.findIndex(p => p.id === projectId);
        this.nextProjects = projectsData.slice(currentIndex + 1, currentIndex + 3);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.project-next-section__wrapper {
  display: grid;
  grid-template-columns: repeat($grid-cells, $grid-item-size);
  gap: $spacing-lg;
}

.project-card__link {
  text-decoration: none;
  color: inherit;
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

@media (max-width: $breakpoint-md),
(max-width: $breakpoint-sm) {
  .project-next-section__wrapper {
    display: flex;
    flex-direction: column;
    row-gap: $spacing-xl;
    padding: 5vh 0;
  }
}
</style>
