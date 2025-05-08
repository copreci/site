<script setup lang="ts">
defineProps({ blok: Object })
const { state } = useAppStore()
</script>

<template>
    <section
        v-if="blok"
        class="copreci-section copreci-section--unpadded"
    >
        <div class="copreci-grid">
            <div class="pl-screen col-span-6 copreci-column-padding">
                <header class="copreci-text">
                    <h2>
                        {{ blok.title }}
                    </h2>
                    <h3 class="copreci-text__button">
                        <UButton
                            :to="state.about_page"
                            :label="blok.button"
                            trailing-icon="i-heroicons-arrow-long-right"
                        />
                    </h3>
                </header>
            </div>
            <div class="col-span-6 relative">
                <div class="w-full h-full flex items-center justify-center bg-copreci-bg-light max-[769px]:h-[50vw]">
                    <img
                        v-gsap.whenVisible.from="{ opacity: 0, x: '100%' }"
                        :src="blok.image.filename"
                        :alt="blok.image.alt"
                        class="w-full h-full absolute object-cover"
                    >
                    <img
                        v-gsap.whenVisible.delay-1000.from="{ opacity: 0, y: 100 }"
                        :src="blok.icon.filename"
                        :alt="blok.icon.alt"
                        class="z-1"
                    >
                </div>
            </div>
        </div>
    </section>
</template>
