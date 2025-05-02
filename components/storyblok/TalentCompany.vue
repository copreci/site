<script setup lang="ts">
defineProps({ blok: Object })
</script>

<template>
    <section
        v-if="blok"
        class="copreci-section copreci-section--unpadded border-b border-copreci-500"
    >
        <div class="copreci-grid">
            <div class="pl-screen col-span-6 copreci-column-padding">
                <header class="copreci-text">
                    <h2>
                        {{ blok.title }}
                    </h2>
                    <div class="copreci-text__button">
                        <UButton
                            :to="`/${blok.link.story.full_slug}`"
                            :label="blok.link_label"
                            trailing-icon="i-heroicons-arrow-long-right"
                            variant="link"
                            size="lg"
                        />
                    </div>
                </header>
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
    </section>
</template>
