<template>
    <div v-if="project" class="project-hero-section__wrapper">
        <h4 class="project-title">{{ project.title }}</h4>
        <h4 class="project-description">{{ project.description }}</h4>

        <span v-if="project.tag">{{ project.tag }}</span>
        <p>{{ project.description }}</p>
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
.project-hero-section__wrapper {
    display: grid;
    grid-template-columns: repeat($grid-cells, $grid-item-size);
    gap: $spacing-lg;

    padding: 30vh 0 20vh 0;
}

.project-title {
    grid-column: 1 / 2;
}

.project-description {
    grid-column: 2 / 5;
}
</style>