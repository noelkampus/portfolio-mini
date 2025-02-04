<template>
  <router-link :to="`/${project.id}`" :class="['project-card', sizeClass]">
    <div class="project-card__content">
      <h6>{{ project.title }}</h6>
      <span>{{ project.tag }}</span>
    </div>
    <div class="project-card__image">
      <!-- <div class="project-card__overlay-wrapper">
        <div class="project-card__overlay">
          <div class="plus-wrapper">
            <div class="horizontal"></div>
            <div class="vertical"></div>
          </div>
          <div class="plus-wrapper">
            <div class="horizontal"></div>
            <div class="vertical"></div>
          </div>
        </div>
        <div class="project-card__overlay">
          <div class="plus-wrapper">
            <div class="horizontal"></div>
            <div class="vertical"></div>
          </div>
          <div class="plus-wrapper">
            <div class="horizontal"></div>
            <div class="vertical"></div>
          </div>
        </div>
      </div> -->

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

/* .project-card__overlay-wrapper {
  padding: 1rem;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.project-card__overlay {
  display: flex;
  justify-content: space-between;
}

.plus-wrapper {
  position: relative;
  height: 0.5rem;
  width: 0.5rem;
}

.horizontal {
  position: absolute;
  top: 50%;
  left: 0;
  height: 1px;
  width: 100%;
  background-color: $black;
  transform: translateY(-50%);
}

.vertical {
  position: absolute;
  top: 0;
  left: 50%;
  height: 100%;
  width: 1px;
  background-color: $black;
  transform: translateX(-50%);
} */
</style>
