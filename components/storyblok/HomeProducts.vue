<script setup lang="ts">
defineProps({ blok: Object })

const { state } = useAppStore()
</script>

<template>
    <section
        v-if="blok"
        class="copreci-section"
    >
        <UContainer>
            <div class="copreci-grid">
                <div class="col-span-full">
                    <header class="copreci-header copreci-text">
                        <h2>
                            {{ blok.title }}
                        </h2>
                        <div class="copreci-text__link">
                            <UButton
                                :to="state.products_page"
                                :label="blok.button"
                                trailing-icon="i-heroicons-arrow-long-right"
                                variant="link"
                                size="lg"
                            />
                        </div>
                    </header>
                </div>
            </div>
            <div
                v-gsap.whenVisible.stagger.delay-300.slow.from="{ opacity: 0, y: 200 }"
                class="copreci-grid copreci-grid--gap-sm"
            >
                <div
                    v-for="(item, index) in blok.products"
                    :key="item._uid"
                    class="col-span-4"
                >
                    <StoryblokComponent
                        :blok="item"
                        :index="index"
                    />
                </div>
            </div>
        </UContainer>
    </section>
</template>
