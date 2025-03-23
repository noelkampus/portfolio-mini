<template>
  <div v-if="project" class="project-content-section__wrapper">
    <projectImageSeries :source1="project.coverImage" :source2="project.image1" :source3="project.image2" />
    <projectImageSeries :source1="project.image3" :source2="project.image4" :source3="project.image5"
      v-if="project.image3" />
    <projectImageSeries :source1="project.image6" :source2="project.image7" :source3="project.image8"
      v-if="project.image6" />
    <projectImageFull :source="project.fullscreenImage1" v-if="project.fullscreenImage1" />
    <projectText :title="'Process'" :content="project.process" />
    <!-- <projectImageGallery :project="project" /> -->
    <projectImageSeries :source1="project.imageGallery1" :source2="project.imageGallery2"
      :source3="project.imageGallery3" />
    <projectImageSeries :source1="project.imageGallery4" :source2="project.imageGallery5"
      :source3="project.imageGallery6" v-if="project.imageGallery4" />
    <projectImageSeries :source1="project.imageGallery7" :source2="project.imageGallery8"
      :source3="project.imageGallery9" v-if="project.imageGallery7" />
    <projectText :title="'Result'" :content="project.result" />
    <projectVideoFull :project="project" />
    <projectImageFull :source="project.fullscreenImageResult" v-if="project.fullscreenImageResult" />
    <projectNext />
  </div>
</template>

<script>
import projectsData from "../data/projects.json";
import projectImageSeries from "../components/ProjectImageSeries.vue";
import projectText from "../components/ProjectContentText.vue";
import projectNext from "../components/ProjectNextSection.vue";
// import projectImageGallery from "../components/ProjectImageGallery.vue";
import projectVideoFull from "../components/ProjectVideoFull.vue";
import projectImageFull from "../components/ProjectImageFull.vue";

export default {
  components: { projectText, projectNext, projectVideoFull, projectImageFull, projectImageSeries }, // projectImageGallery
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
.project-content-section__wrapper {
  display: flex;
  flex-direction: column;
  row-gap: $spacing-lg;
}
</style>
