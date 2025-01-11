<template>
  <div>
    <NavigationMenu />
    <SectionFiller />
    <AboutHeroSection />
    <SectionFiller />
    <AboutImageSection />
    <SectionFiller />
    <AboutContentSection />
    <SectionFiller />
    <FooterMenu />
  </div>
</template>

<script>
import NavigationMenu from "../components/NavigationMenu.vue";
import AboutHeroSection from "../components/AboutHeroSection.vue";
import AboutImageSection from "../components/AboutImageSection.vue";
import AboutContentSection from "../components/AboutContentSection.vue";
import SectionFiller from "../components/SectionFiller.vue";
import FooterMenu from "../components/FooterMenu.vue";

export default {
  components: { NavigationMenu, FooterMenu, AboutHeroSection, AboutImageSection, AboutContentSection, SectionFiller }
};
</script>

<style lang="scss" scoped></style>
