<template>
    <div>
        <NavigationMenu />

        <ProjectHeroSection :project="project" />
        <ProjectContentSection :project="project" />

        <FooterMenu />
    </div>
</template>

<script>
import projectsData from "../data/projects.json";
import NavigationMenu from "../components/NavigationMenu.vue";
import ProjectHeroSection from "../components/ProjectHeroSection.vue";
import ProjectContentSection from "../components/ProjectContentSection.vue";
import FooterMenu from "../components/FooterMenu.vue";

export default {
    components: { NavigationMenu, FooterMenu, ProjectHeroSection, ProjectContentSection },
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
img {
    width: 100%;
}
</style>

<!-- <div v-if="project">
            <h1>{{ project.title }}</h1>
            <span v-if="project.tag">{{ project.tag }}</span>
            <img :src="project.image" :alt="project.title" />
            <p>{{ project.description }}</p>
            <img v-if="project.image2" :src="project.image2" :alt="project.title" />
            <p>{{ project.process }}</p>
            <router-link to="/">Back to Home</router-link>
        </div> -->