<template>
    <section class="hero-section__wrapper">
        <div class="hero-section__content">
            <h1>{{ heroText }}</h1>
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

<style scoped></style>