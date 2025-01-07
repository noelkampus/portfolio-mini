<template>
    <div class="project-grid">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";

export default {
    components: { ProjectCard },
    props: {
        projects: {
            type: Array,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
.project-grid {
    display: grid;
    grid-template-columns: repeat($grid-cells, $grid-item-size);
    column-gap: $spacing-lg;
    row-gap: $spacing-5xl;
}
</style>