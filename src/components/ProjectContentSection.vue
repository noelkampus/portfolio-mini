<template>
    <div v-if="project">
        <img :src="project.image" :alt="project.title" />
        <img v-if="project.image2" :src="project.image2" :alt="project.title" />
        <p>{{ project.process }}</p>
        <!-- <router-link to="/">Back to Home</router-link> -->
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

.project-hero-section__content {
    grid-column: 1 / 5;
}
</style>