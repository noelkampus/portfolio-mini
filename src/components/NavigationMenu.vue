<template>
  <div class="nav-wrapper">
    <div class="nav-wrapper__logo">
      <router-link to="/" class="nav-text">Noel Kampus</router-link>
      <span class="nav-text">Design + Technology</span>
    </div>
    <div class="nav-wrapper__info">
      <span class="nav-text">Interaction Designer</span>
      <span class="nav-text">based in Zurich, Switzerland</span>
    </div>

    <div class="nav-wrapper__links">
      <router-link to="/" class="nav-link">Projects</router-link>
      <router-link to="/RnD" class="nav-link">RnD</router-link>
      <router-link to="/About" class="nav-link">About</router-link>
      <a href="mailto:noel@kampus.ch" class="nav-link">noel@kampus.ch</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationMenu'
}
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

.nav-link:hover {
  filter: blur(3px);
  transition: filter 0.2s ease-in-out;
}

.nav-link.router-link-active {
  filter: blur(3px);
}
</style>
