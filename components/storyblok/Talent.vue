<script setup lang="ts">
defineProps({ blok: Object })
</script>

<template>
    <article
        class="talent"
    >
        <StoryblokComponent
            v-for="item in blok?.body"
            :key="item._uid"
            v-editable="item"
            :blok="item"
        />
    </article>
</template>
