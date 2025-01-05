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

<style scoped>
.project-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px;
}
</style>