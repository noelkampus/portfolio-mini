<template>
  <div class="page-wrapper">
    <!-- <SectionFiller /> -->
    <NavigationMenu />
    <SectionFiller />
    <RnDHeroSection />
    <SectionFiller />
    <RnDGrid :projects="projects" />
    <SectionFiller />
    <FooterMenu />
  </div>
</template>

<script>
import NavigationMenu from "../components/NavigationMenu.vue";
import RnDHeroSection from "../components/RnDHeroSection.vue";
import RnDGrid from "../components/RnDGrid.vue";
import FooterMenu from "../components/FooterMenu.vue";
import SectionFiller from "../components/SectionFiller.vue";
import projectsData from "../data/projects.json";

export default {
  components: { NavigationMenu, RnDHeroSection, RnDGrid, FooterMenu, SectionFiller },
  data() {
    return {
      projects: projectsData
    };
  }
};
</script>

<style lang="scss" scoped></style>
