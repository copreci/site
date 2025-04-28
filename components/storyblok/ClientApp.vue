<script setup lang="ts">
defineProps({ blok: Object })
</script>

<template>
    <section
        v-if="blok"
        class="copreci-section copreci-section--unpadded border-t border-copreci-500"
    >
        <div class="copreci-grid bg-copreci-bg-light">
            <div class="pl-screen col-span-6 copreci-column-padding">
                <header class="copreci-text copreci-text--sm copreci-header">
                    <h2>
                        {{ blok.title }}
                    </h2>
                    <h3 class="text-copreci-500">
                        {{ blok.subtitle }}
                    </h3>
                </header>
                <div class="copreci-text">
                    <p>{{ blok.text }}</p>
                </div>
            </div>
            <div class="col-span-6 relative">
                <div class="w-full h-full flex items-center justify-center bg-copreci-bg-light">
                    <img
                        v-gsap.whenVisible.from="{ opacity: 0, x: '100%' }"
                        :src="blok.image.filename"
                        :alt="blok.image.alt"
                        class="w-full h-full absolute object-cover"
                    >
                </div>
            </div>
        </div>
        <UContainer>
            <div class="py-20">
                <div class="copreci-grid">
                    <div class="col-span-6">
                        <div class="copreci-text copreci-text--sm">
                            <StoryblokRichText :doc="blok.description_left" />
                        </div>
                    </div>
                    <div class="col-span-6">
                        <div class="copreci-text copreci-text--sm">
                            <StoryblokRichText :doc="blok.description_right" />
                        </div>
                    </div>
                </div>
            </div>
        </UContainer>
    </section>
</template>
