<template>
    <div>
        <NavigationMenu />

        <div v-if="project">
            <h1>{{ project.title }}</h1>
            <span>{{ project.tag }}</span>
            <img :src="project.image" :alt="project.title" />
            <p>{{ project.details }}</p>
            <!-- <router-link to="/">Back to Home</router-link> -->
        </div>

        <FooterMenu />
    </div>
</template>

<script>
import projectsData from "../data/projects.json";
import NavigationMenu from "../components/NavigationMenu.vue";
import FooterMenu from "../components/FooterMenu.vue";

export default {
    components: { NavigationMenu, FooterMenu },
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

<style>
img {
    width: 100%;
}
</style>