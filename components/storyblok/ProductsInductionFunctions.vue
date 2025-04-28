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
                <div class="col-span-7">
                    <header class="copreci-text copreci-text--sm copreci-header">
                        <h2>{{ blok.title }}</h2>
                        <p>{{ blok.text }}</p>
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
