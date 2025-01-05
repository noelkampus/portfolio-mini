<template>
    <div v-if="project">
        <h1>{{ project.title }}</h1>
        <img :src="project.image" :alt="project.title" />
        <p>{{ project.details }}</p>
        <router-link to="/">Back to Home</router-link>
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