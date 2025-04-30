<script setup lang="ts">
defineProps({ blok: Object })
</script>

<template>
    <section
        v-if="blok"
        class="relative"
    >
        <div class="overflow-hidden max-[769px]:absolute max-[769px]:h-full">
            <img
                v-gsap.whenVisible.from="{ opacity: 0, scale: 1.1 }"
                :src="blok.image.filename"
                :alt="blok.image.alt"
                class="w-full max-[769px]:h-full max-[769px]:object-cover"
            >
            <div class="hidden max-[769px]:block absolute w-full h-full top-0 left-0 bg-black/50" />
        </div>
        <div class="absolute w-full h-full top-0 left-0 copreci-section bg-transparent max-[769px]:relative max-[769px]:h-auto max-[769px]:py-12">
            <UContainer>
                <div class="copreci-grid">
                    <div class="col-span-5">
                        <header
                            v-gsap.whenVisible.stagger.once.from="{ opacity: 0, y: 100, stagger: 0.25 }"
                            class="copreci-text copreci-text--sm copreci-header copreci-text--white"
                        >
                            <StoryblokRichText :doc="blok.header" />
                        </header>
                    </div>
                </div>
            </UContainer>
        </div>
    </section>
</template>
