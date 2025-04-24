<script setup lang="ts">
const props = defineProps({ blok: Object })
const localePath = useLocalePath()
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
                    <div class="copreci-text__button">
                        <UButton
                            :to="localePath('/nosotros')"
                            :label="blok.button"
                            trailing-icon="i-heroicons-arrow-long-right"
                        />
                    </div>
                </header>
            </div>
            <div class="col-span-6 relative">
                <div class="w-full h-full flex items-center justify-center">
                    <Motion
                        as="img"
                        :initial="{ opacity: 0, scale: 1.05 }"
                        :while-in-view="{ opacity: 1, scale: 1 }"
                        :transition="{ duration: 0.5 }"
                        class="h-full w-full absolute object-cover"
                        :src="blok.image.filename"
                        :alt="blok.image.alt"
                    />
                    <Motion
                        as="img"
                        :initial="{ opacity: 0, y: 100 }"
                        :while-in-view="{ opacity: 1, y: 0 }"
                        :in-view-options="{ amount: 'all' }"
                        :transition="{ duration: 0.5 }"
                        :src="blok.icon.filename"
                        :alt="blok.icon.alt"
                        class="z-1"
                    />
                </div>
            </div>
        </div>
    </section>
</template>
