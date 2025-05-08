<script setup lang="ts">
const props = defineProps({ blok: Object })
</script>

<template>
    <section
        v-if="blok"
        class="relative copreci-section copreci-section--gray"
    >
        <div class="w-full h-full absolute top-0 left-0 overflow-hidden">
            <img
                v-gsap.whenVisible.once.from="{ scale: 1.2 }"
                :src="blok.background.filename"
                :alt="blok.background.alt"
                class="w-full h-full object-cover"
            >
        </div>
        <UContainer class="relative z-1">
            <div class="copreci-grid">
                <div class="col-span-6">
                    <header class="copreci-text copreci-header max-[769px]:w-1/2">
                        <h2>{{ blok.title }}</h2>
                    </header>
                    <div class="copreci-text">
                        <h3 class="copreci-text__button">
                            <UButton
                                :href="blok.document.filename ?? '#'"
                                :label="blok.link_label"
                                trailing-icon="i-heroicons-arrow-long-down"
                                variant="link"
                                size="lg"
                            />
                        </h3>
                    </div>
                </div>
            </div>
        </UContainer>
    </section>
</template>
