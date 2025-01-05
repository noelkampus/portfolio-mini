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
            heroText: 'Welcome to My Portfolio'
        };
    }
};
</script>

<style scoped></style>