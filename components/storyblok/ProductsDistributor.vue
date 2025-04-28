<script setup lang="ts">
defineProps({ blok: Object })
</script>

<template>
    <section
        v-if="blok"
    >
        <img
            v-gsap.whenVisible.from="{ opacity: 0, scale: 1.1 }"
            :src="blok.image.filename"
            :alt="blok.image.alt"
            class="w-full"
        >
        <div class="bg-black py-20">
            <UContainer>
                <div
                    v-gsap.whenVisible.stagger.from="{ opacity: 0, y: 100, stagger: 0.25 }"
                    class="copreci-grid copreci-grid--gap-xl"
                >
                    <StoryblokComponent
                        v-for="item in blok.items"
                        :key="item._uid"
                        :blok="item"
                    />
                </div>
            </UContainer>
        </div>
    </section>
</template>
