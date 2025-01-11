<template>
  <section class="section-wrapper">
    <div class="plus-wrapper">
      <div class="horizontal"></div>
      <div class="vertical"></div>
    </div>
    <div class="plus-wrapper">
      <div class="horizontal"></div>
      <div class="vertical"></div>
    </div>
    <div class="plus-wrapper">
      <div class="horizontal"></div>
      <div class="vertical"></div>
    </div>
  </section>

</template>

<script>
</script>

<style lang="scss" scoped>
.section-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem 0;
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
}
</style>
