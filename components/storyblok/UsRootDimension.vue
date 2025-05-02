<script setup lang="ts">
defineProps({ blok: Object })
</script>

<template>
    <section
        v-if="blok"
        class="copreci-section copreci-section--red"
    >
        <UContainer>
            <div class="copreci-grid">
                <div class="col-span-8">
                    <header class="copreci-text copreci-text--white">
                        <h2 v-gsap.whenVisible.animateText.slow.once>
                            {{ blok.title }}
                        </h2>
                        <div class="copreci-text__button">
                            <UButton
                                :to="`/${blok.link.story.full_slug}`"
                                :label="blok.link_label"
                                variant="soft"
                                trailing-icon="i-heroicons-arrow-long-right"
                            />
                        </div>
                    </header>
                </div>
            </div>
        </UContainer>
    </section>
</template>
