<script setup lang="ts">
defineProps({ blok: Object })
</script>

<template>
    <section
        v-if="blok"
        class="copreci-section"
    >
        <UContainer>
            <div class="copreci-grid">
                <div class="col-span-6">
                    <header class="copreci-text copreci-text--sm copreci-header copreci-text-h3-as-h4">
                        <StoryblokRichText :doc="blok.header" />
                        <div>
                            <img
                                :src="blok.logo.filename"
                                :alt="blok.logo.alt"
                            >
                        </div>
                    </header>
                </div>
            </div>
            <div
                v-gsap.whenVisible.stagger.from="{ opacity: 0, y: 100, stagger: 0.25 }"
                class="copreci-grid"
            >
                <StoryblokComponent
                    v-for="item in blok.grid"
                    :key="item._uid"
                    :blok="item"
                />
            </div>
        </UContainer>
    </section>
</template>
