<template>
    <div v-if="project" class="project-content-section__wrapper">
        <img v-if="project.coverImage" :src="project.coverImage" :alt="project.title" />
        <img v-if="project.image1" :src="project.image1" :alt="project.title" />
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
.project-content-section__wrapper {
    display: flex;
    flex-direction: column;
    row-gap: $spacing-lg;
}
</style>