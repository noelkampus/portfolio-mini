<template>
  <router-link :to="`/${project.id}`" :class="['project-card', sizeClass]">
    <div class="project-card__content">
      <h6>{{ project.title }}</h6>
      <span>{{ project.tag }}</span>
    </div>
    <div class="project-card__image">
      <canvas ref="pixelCanvas" class="pixelate-canvas"></canvas>
      <img :src="project.coverImage" :alt="project.title" class="original-image" @load="applyPixelEffect" />
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
  },
  methods: {
    applyPixelEffect(event) {
      const img = event.target;
      const canvas = this.$refs.pixelCanvas;
      const ctx = canvas.getContext('2d');

      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0, img.width, img.height);

      const imageData = ctx.getImageData(0, 0, img.width, img.height);
      const pixelSize = 20;

      for (let y = 0; y < img.height; y += pixelSize) {
        for (let x = 0; x < img.width; x += pixelSize) {
          const index = (y * img.width + x) * 4;
          const red = imageData.data[index];
          const green = imageData.data[index + 1];
          const blue = imageData.data[index + 2];

          ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
          ctx.fillRect(x, y, pixelSize, pixelSize);
        }
      }
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

  &:hover .pixelate-canvas {
    opacity: 1;
  }
}

.project-card__content {
  display: flex;
  flex-direction: column;
  row-gap: $spacing-xxs;
}

.project-card__image {
  position: relative;
  overflow: hidden;
}

/*.project-card__image:hover {
  scale: 0.99;
  transition: scale 0.2s ease-in-out;
}*/

.original-image {
  width: 100%;
  display: block;
}

.pixelate-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}
</style>
