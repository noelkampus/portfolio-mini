<template>
  <div class="page-wrapper">
    <!-- <SectionFiller /> -->
    <NavigationMenu />
    <SectionFiller />
    <HeroSection />
    <SectionFiller />
    <ProjectGrid :projects="projects" />
    <SectionFiller />
    <FooterMenu />
  </div>
</template>

<script>
import NavigationMenu from "../components/NavigationMenu.vue";
import HeroSection from "../components/HeroSection.vue";
import ProjectGrid from "../components/ProjectGrid.vue";
import FooterMenu from "../components/FooterMenu.vue";
import SectionFiller from "../components/SectionFiller.vue";
import projectsData from "../data/projects.json";

export default {
  components: { NavigationMenu, HeroSection, ProjectGrid, FooterMenu, SectionFiller },
  data() {
    return {
      projects: projectsData
    };
  }
};
</script>

<style lang="scss" scoped></style>
