<template>
  <div>
    <NavigationMenu />
    <SectionFiller />
    <ProjectHeroSection :project="project" />
    <SectionFiller />
    <ProjectContentSection :project="project" />
    <FooterMenu />
  </div>
</template>

<script>
import projectsData from "../data/projects.json";
import NavigationMenu from "../components/NavigationMenu.vue";
import ProjectHeroSection from "../components/ProjectHeroSection.vue";
import ProjectContentSection from "../components/ProjectContentSection.vue";
import SectionFiller from "../components/SectionFiller.vue";
import FooterMenu from "../components/FooterMenu.vue";

export default {
  components: { NavigationMenu, FooterMenu, ProjectHeroSection, ProjectContentSection, SectionFiller },
  data() {
    return {
      project: null
    };
  },
  created() {
    const projectId = parseInt(this.$route.params.id, 20);
    this.project = projectsData.find((p) => p.id === projectId);
  }
};
</script>

<style lang="scss" scoped></style>
