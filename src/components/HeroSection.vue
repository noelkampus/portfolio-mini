<template>
    <section class="hero-section__wrapper">
        <div class="hero-section__content">
            <h4>{{ heroText }}</h4>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            heroText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        };
    }
};
</script>

<style lang="scss" scoped>
.hero-section__wrapper {
    display: grid;
    grid-template-columns: repeat($grid-cells, $grid-item-size);
    gap: $spacing-lg;

    padding: 30vh 0 20vh 0;
}

.hero-section__content {
    grid-column: 1 / 5;
}
</style>