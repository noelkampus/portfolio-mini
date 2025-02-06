<template>
  <div class="project-img-full__wrapper">
    <img :src="source" class="project-img-full__img">
  </div>
</template>

<script>
export default {
  props: {
    source: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.project-img-full__wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}

.project-img-full__img {
  width: 100%;
  height: 100%;
}
</style>
