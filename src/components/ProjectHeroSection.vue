<template>
  <div v-if="project" class="project-hero-section__wrapper">
    <h4 ref="heroText" class="project-hero-section__project-title">{{ project.title }}</h4>
    <div ref="projectDescription" class="project-hero-section__project-description">
      <h4>{{ project.description }}</h4>
      <img v-if="project.coverImage" :src="project.coverImage" class="mobile-cover-image" />
      <p>{{ project.challenge }}</p>
    </div>


    <div ref="details" class="project-hero-section__details">
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
      <div v-if="project.exhibitionName" class="project-details__item">
        <p>Exhibition</p>
        <p>{{ project.exhibitionName }}</p>
        <p>{{ project.exhibitionLocation }}</p>
        <p>{{ project.exhibitionYear }}</p>
      </div>
      <div v-if="project.live" class="project-details__item">
        <p>Live</p>
        <a :href="project.live" target="_blank" rel="noopener noreferrer">{{ project.live }}</a>
      </div>
      <div v-if="project.downloadTitle" class="project-details__item">
        <p>{{ project.downloadTitle }}</p>
        <a :href="project.downloadLink" target="_blank" rel="noopener noreferrer">{{ project.downloadLink }}</a>
      </div>
    </div>

  </div>
</template>

<script>
import projectsData from "../data/projects.json";
import { gsap } from "gsap";

export default {
  data() {
    return {
      project: null
    };
  },
  created() {
    const projectId = parseInt(this.$route.params.id, 10);
    this.project = projectsData.find((p) => p.id === projectId);
  }, mounted() {
    gsap.from(this.$refs.heroText, { opacity: 0, y: 0, duration: 2, ease: "power2.out" });
    gsap.from(this.$refs.projectDescription, { opacity: 0, y: 0, duration: 2, ease: "power2.out" });
    gsap.from(this.$refs.details, { opacity: 0, y: 0, duration: 2, ease: "power2.out" });

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

.mobile-cover-image {
  display: none;
  width: 100%;
  height: auto;
}

@media (max-width: $breakpoint-xl) {
  $grid-cells: 5;

  .project-hero-section__wrapper {
    grid-template-columns: repeat($grid-cells, $grid-item-size);
  }

  .project-hero-section__project-title {
    grid-column: 1 / 2;
  }

  .project-hero-section__project-description {
    grid-column: 2 / 5;
  }

  .project-hero-section__details {
    grid-column: 5 / 6;
  }
}

@media (max-width: $breakpoint-lg) {
  $grid-cells: 4;

  .project-hero-section__wrapper {
    grid-template-columns: repeat($grid-cells, $grid-item-size);
  }

  .project-hero-section__project-title {
    grid-column: 1 / 2;
  }

  .project-hero-section__project-description {
    grid-column: 2 / 4;
  }

  .project-hero-section__details {
    grid-column: 4 / 5;
  }
}

@media (max-width: $breakpoint-md) {
  .project-hero-section__wrapper {
    display: flex;
    flex-direction: column;
    row-gap: $spacing-4xl;
    padding: 10vh 0 15vh 0;
  }

  .project-hero-section__project-description {
    row-gap: $spacing-xl;
  }

  .mobile-cover-image {
    display: block;
    width: 100%;
    height: auto;
  }
}

@media (max-width: $breakpoint-sm) {
  $grid-cells: 2;

  .project-hero-section__wrapper {
    display: flex;
    flex-direction: column;
    row-gap: $spacing-4xl;
    padding: 10vh 0 15vh 0;
  }

  .project-hero-section__project-description {
    row-gap: $spacing-xl;
  }

  .mobile-cover-image {
    display: block;
    width: 100%;
    height: auto;
  }
}
</style>
