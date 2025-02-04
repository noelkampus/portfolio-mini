<template>
  <div v-if="project" class="project-hero-section__wrapper">
    <h4 class="project-hero-section__project-title">{{ project.title }}</h4>
    <div class="project-hero-section__project-description">
      <h4>{{ project.description }}</h4>
      <p>{{ project.challenge }}</p>
    </div>


    <div class="project-hero-section__details">
      <div v-if="project.tag" class="project-details__item">
        <p>Topic</p>
        <p>{{ project.tag }}</p>
      </div>
      <div v-if="project.role" class="project-details__item">
        <p>Role</p>
        <p>{{ project.role }}</p>
      </div>
      <div v-if="project.client" class="project-details__item">
        <p>Client/Environment</p>
        <p>{{ project.client }}</p>
      </div>
      <div v-if="project.contributors" class="project-details__item">
        <p>Contributors</p>
        <p>{{ project.contributors }}</p>
      </div>
      <div v-if="project.date" class="project-details__item">
        <p>Date</p>
        <p>{{ project.date }}</p>
      </div>
      <div v-if="project.live" class="project-details__item">
        <p>Live</p>
        <a :href="project.live" target="_blank" rel="noopener noreferrer">{{ project.live }}</a>
      </div>
      <div v-if="project.live" class="project-details__item">
        <p>Download</p>
        <a :href="project.downloadLink" target="_blank" rel="noopener noreferrer">{{ project.downloadTitle }}</a>
      </div>
    </div>

  </div>
</template>

<script>
import projectsData from "/data/projects.json";

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
.project-hero-section__wrapper {
  display: grid;
  grid-template-columns: repeat($grid-cells, $grid-item-size);
  gap: $spacing-lg;

  padding: 15vh 0 5vh 0;
}

.project-hero-section__project-title {
  grid-column: 1 / 2;
}

.project-hero-section__project-description {
  display: flex;
  flex-direction: column;
  row-gap: $spacing-4xl;
  grid-column: 2 / 5;
}

.project-hero-section__details {
  display: flex;
  flex-direction: column;
  row-gap: $spacing-xl;
  grid-column: 6 / 7;
}

.project-details__item {
  display: flex;
  flex-direction: column;
  row-gap: $spacing-xxs;
}

a {
  text-decoration: underline;
}
</style>
