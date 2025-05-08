<script setup lang="ts">
defineProps({ blok: Object })
</script>

<template>
    <section
        v-if="blok"
        class="overflow-hidden"
    >
        <div class="border-t border-b border-copreci-500">
            <UContainer>
                <div class="copreci-grid">
                    <div class="relative col-span-6 py-20 bg-copreci-bg-light border-r border-copreci-500 max-[769px]:border-r-0">
                        <div class="absolute top-0 right-full w-full h-full bg-copreci-bg-light" />
                        <div class="hidden max-[769px]:block absolute top-0 left-full w-full h-full bg-copreci-bg-light" />
                        <div class="copreci-text copreci-text--sm pr-20 max-[769px]:pr-0">
                            <h2>{{ blok.title_left }}</h2>
                            <p>{{ blok.text_left }}</p>
                        </div>
                    </div>
                    <div class="col-span-6 py-20  pl-20 max-[769px]:pl-0 max-[769px]:pt-0 max-[769px]:pb-12">
                        <div class="copreci-text copreci-text--sm">
                            <h2>{{ blok.title_right }}</h2>
                            <p>{{ blok.text_right }}</p>
                            <h3 class="copreci-text__button">
                                <UButton
                                    :to="`/${blok.link.story.full_slug}`"
                                    :label="blok.link_label"
                                    trailing-icon="i-heroicons-arrow-long-right"
                                />
                            </h3>
                        </div>
                    </div>
                </div>
            </UContainer>
        </div>
        <div>
            <div>
                <img
                    v-gsap.whenVisible.from="{ opacity: 0, y: 100 }"
                    :src="blok.image.filename"
                    :alt="blok.image.alt"
                    class="w-full"
                >
            </div>
        </div>
    </section>
</template>
