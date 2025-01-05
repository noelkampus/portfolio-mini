<template>
    <router-link :to="`/${project.id}`" class="project-card">
        <h3>{{ project.title }}</h3>
        <p>{{ project.tag }}</p>
        <img :src="project.coverImage" :alt="project.title" />
    </router-link>
</template>

<script>
export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    }
};
</script>

<style scoped>
img {
    width: 100%;
}
</style>