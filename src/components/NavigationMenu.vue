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
      <router-link to="/" class="nav-link desktop-link">Projects</router-link>
      <!-- <router-link to="/RnD" class="nav-link desktop-link">RnD</router-link> -->
      <router-link to="/About" class="nav-link desktop-link">About</router-link>
      <a href="mailto:noel@kampus.ch" class="nav-link desktop-link">noel@kampus.ch</a>
    </div>
  </div>

  <div class="mobile-menu">
    <div class="mobile-links__wrapper" v-if="isMenuOpen">
      <router-link to="/" class="nav-link mobile-link" @click="toggleMenu">Projects</router-link>
      <!-- <router-link to="/RnD" class="nav-link mobile-link" @click="toggleMenu">RnD</router-link> -->
      <router-link to="/About" class="nav-link mobile-link" @click="toggleMenu">About</router-link>
      <a href="mailto:noel@kampus.ch" class="nav-link mobile-link" @click="toggleMenu">noel@kampus.ch</a>
    </div>
    <a href="#" class="nav-link mobile-link" @click.prevent="toggleMenu">{{ isMenuOpen ? 'Close' : 'Menu' }}</a>
  </div>

</template>

<script>
export default {
  name: 'NavigationMenu',
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-wrapper {
  position: sticky;
  top: $spacing-lg;
  display: grid;
  grid-template-columns: repeat($grid-cells, $grid-item-size);
  gap: $spacing-lg;

  z-index: 99;
}

.nav-wrapper__logo {
  display: flex;
  flex-direction: column;
  grid-column: 1 / 2;

  mix-blend-mode: difference;
}

.nav-wrapper__info {
  display: flex;
  flex-direction: column;
  grid-column: 3 / 4;

  mix-blend-mode: difference;
}

.nav-wrapper__links {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  column-gap: $spacing-xxl;
  grid-column: 4 / 7;

  mix-blend-mode: difference;
}

.nav-link:hover {
  filter: blur(3px);
  transition: filter 0.2s ease-in-out;
}

.nav-link.router-link-active {
  filter: blur(3px);
}

.mobile-link {
  display: none;
}


@media (max-width: $breakpoint-xl) {
  $grid-cells: 5;

  .nav-wrapper {
    grid-template-columns: repeat($grid-cells, $grid-item-size);
  }

  .mobile-menu {
    display: none;
  }
}

@media (max-width: $breakpoint-lg) {
  $grid-cells: 4;

  .nav-wrapper {
    grid-template-columns: repeat($grid-cells, $grid-item-size);
  }

  .nav-wrapper__info {
    display: flex;
    flex-direction: column;
    grid-column: 2 / 3;
  }

  .mobile-menu {
    display: none;
  }
}

@media (max-width: $breakpoint-md) {
  $grid-cells: 2;

  .nav-wrapper {
    grid-template-columns: repeat($grid-cells, $grid-item-size);
  }

  .nav-wrapper__info {
    display: flex;
    flex-direction: column;
    grid-column: 2 / 3;
  }

  .nav-wrapper__links {
    display: none;
  }

  .mobile-menu {
    display: flex;
    position: fixed;
    bottom: $spacing-lg;
    left: 50%;
    transform: translateX(-50%);

    flex-direction: column;
    row-gap: $spacing-lg;

    align-items: center;

    z-index: 99;
  }

  .mobile-links__wrapper {
    display: flex;
    flex-direction: column;
    row-gap: $spacing-xs;
    align-items: center;
  }

  .mobile-link {
    display: block;

    padding: 0.5rem 0.8rem;
    border-radius: 10rem;
    backdrop-filter: blur(10px);
    background-color: rgba($color: #000000, $alpha: 0.1);

    width: max-content;

    z-index: 99;
  }

  .nav-link:hover {
    filter: blur(0px);
  }

  .desktop-link {
    display: none;
  }
}

@media (max-width: $breakpoint-sm) {
  $grid-cells: 2;

  .nav-wrapper {
    grid-template-columns: repeat($grid-cells, $grid-item-size);
  }

  .nav-wrapper__info {
    display: flex;
    flex-direction: column;
    grid-column: 2 / 3;
  }

  .nav-wrapper__links {
    display: none;
  }

  .desktop-link {
    display: none;
  }
}
</style>
