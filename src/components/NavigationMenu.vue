<template>
  <div class="nav-wrapper">
    <div class="nav-wrapper__logo">
      <router-link to="/" class="nav-text">Noel Kampus</router-link>
      <span class="nav-text">47° 22' 7" N 8° 32' 21" E</span>
    </div>
    <div class="nav-wrapper__info">
      <span class="nav-text">Interaction Designer</span>
      <span class="nav-text">based in Zurich, Switzerland</span>
    </div>

    <div class="nav-wrapper__links">
      <router-link to="/" class="nav-link" href="">Projects</router-link>
      <router-link to="/RnD" class="nav-link" href="">RnD</router-link>
      <router-link to="/About" class="nav-link" href="">About</router-link>
      <a href="mailto:noel@kampus.ch" class="nav-link">noel@kampus.ch</a>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.nav-wrapper {
  position: sticky;
  top: $spacing-lg;
  display: grid;
  grid-template-columns: repeat($grid-cells, $grid-item-size);
  gap: $spacing-lg;

  mix-blend-mode: difference;
}

.nav-wrapper__logo {
  display: flex;
  flex-direction: column;
  grid-column: 1 / 2;
}

.nav-wrapper__info {
  display: flex;
  flex-direction: column;
  grid-column: 3 / 4;
}

.nav-wrapper__links {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  column-gap: $spacing-xxl;
  grid-column: 4 / 7;
}
</style>
