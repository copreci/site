<script setup lang="ts">
defineProps({ blok: Object })
</script>

<template>
    <section
        v-if="blok"
        class="border-t border-b border-copreci-500"
    >
        <div
            v-gsap.whenVisible.stagger.once.from="{ opacity: 0, y: 200, stagger: 0.2 }"
            class="grid grid-cols-12"
        >
            <StoryblokComponent
                v-for="highlight in blok.highlights"
                :key="highlight._uid"
                :blok="highlight"
                :span="Number(blok.columns) ?? 3"
            />
        </div>
    </section>
</template>
