<template>
    <div class="project-card">
        <img :src="project.image" :alt="project.title" />
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <router-link :to="`/projects/${project.id}`">View Details</router-link>
    </div>
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

<style scoped></style>