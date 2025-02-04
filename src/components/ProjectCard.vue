<template>
  <router-link :to="`/${project.id}`" :class="['project-card', sizeClass]">
    <div class="project-card__content">
      <h6>{{ project.title }}</h6>
      <span>{{ project.tag }}</span>
    </div>
    <div class="project-card__image">
      <img :src="project.coverImage" :alt="project.title" />
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  computed: {
    sizeClass() {
      return `size-${this.project.size}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.project-card {
  display: flex;
  flex-direction: column;
  row-gap: $spacing-sm;
  text-decoration: none;
}

.project-card__content {
  display: flex;
  flex-direction: column;
  row-gap: $spacing-xxs;
}

img {
  width: 100%;
}

.size-small {
  width: 100%;
}

.size-medium {
  width: 100%;
}

.size-large {
  width: 100%;
}
</style>
