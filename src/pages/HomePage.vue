<template>
    <div>
        <NavigationMenu />
        <HeroSection HeroText="Test" />
        <ProjectGrid :projects="projects" />
        <FooterMenu />
    </div>
</template>

<script>
import NavigationMenu from "../components/NavigationMenu.vue";
import HeroSection from "../components/HeroSection.vue";
import ProjectGrid from "../components/ProjectGrid.vue";
import FooterMenu from "../components/FooterMenu.vue";
import projectsData from "../data/projects.json";

export default {
    components: { NavigationMenu, HeroSection, ProjectGrid, FooterMenu },
    data() {
        return {
            projects: projectsData
        };
    }
};
</script>