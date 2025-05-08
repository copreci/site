<script setup lang="ts">
defineProps({ blok: Object })
</script>

<template>
    <section
        v-if="blok"
        class="copreci-section"
    >
        <UContainer class="max-w-xl">
            <div class="copreci-text text-center">
                <StoryblokRichText :doc="blok.content" />
            </div>
        </UContainer>
    </section>
</template>
