<script setup lang="ts">
defineProps({ blok: Object })
</script>

<template>
    <section
        v-if="blok"
        class="relative w-full h-full"
    >
        <div class="relative w-full h-[90vh] overflow-hidden max-[769px]:h-auto">
            <img
                v-gsap.whenVisible.delay-500.from="{ opacity: 0, scale: 1.1 }"
                :src="blok.image.filename"
                :alt="blok.image.alt"
                class="w-full h-full object-cover max-[769px]:absolute"
            >
            <div class="absolute top-0 left-0 w-full h-full py-20 max-[769px]:relative">
                <UContainer>
                    <header class="copreci-text">
                        <h2>
                            {{ blok.title }}
                        </h2>
                        <div class="copreci-text__button">
                            <UButton
                                :to="`/${blok.link.story.full_slug}`"
                                :label="blok.link_label"
                                trailing-icon="i-heroicons-arrow-long-right"
                                variant="solid"
                            />
                        </div>
                    </header>
                </UContainer>
            </div>
        </div>
    </section>
</template>
