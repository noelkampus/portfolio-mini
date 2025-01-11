<template>
  <div>
    <NavigationMenu />
    <SectionFiller />
    <AboutHeroSection />
    <SectionFiller />
    <FooterMenu />
  </div>
</template>

<script>
import NavigationMenu from "../components/NavigationMenu.vue";
import AboutHeroSection from "../components/AboutHeroSection.vue";
import SectionFiller from "../components/SectionFiller.vue";
import FooterMenu from "../components/FooterMenu.vue";

export default {
  components: { NavigationMenu, FooterMenu, AboutHeroSection, SectionFiller }
};
</script>

<style lang="scss" scoped>

</style>
